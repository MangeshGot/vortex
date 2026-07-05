pipeline {
    agent any
    triggers {
        githubPush()
    }
    environment {
        DOCKER_HUB_USER = 'mangeshforstudy'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        IMAGE_NAME = 'vortex'
        BUILD_ID = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Git Checkout') {
            steps {
                checkout scmGit (
                    branches:[[name: 'main']],
                    userRemoteConfigs:[[
                        credentialsId: 'github-creds',
                        url: 'https://github.com/MangeshGot/vortex'
                    ]]
                )
            }
        }
        stage('Read Version from package.json') {
            steps {
                script {
                    def packageJson = readJSON file: 'package.json'
                    env.IMAGE_VERSION = packageJson.version
                    echo "Image Version: ${env.IMAGE_VERSION}-build-${env.BUILD_ID}"
                }
            }
        }
        stage('Build and Push') {
            steps {
                script {
                    env.FullTag = "${env.IMAGE_VERSION}-build-${env.BUILD_ID}"
                    def vortexApp = docker.build "${env.DOCKER_HUB_USER}/${env.IMAGE_NAME}:${env.FullTag}"
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        vortexApp.push("${env.FullTag}")
                        vortexApp.push('latest')
                    }
                }
            }
        }
        stage ('Update GitOps Repo') {
            steps{
                script {
                    sh "rm -rf vortex-gitops"
                    checkout scmGit(
                        branches:[[name: 'main']],
                        userRemoteConfigs:[[
                            credentialsId: 'github-creds',
                            url: 'https://github.com/MangeshGot/vortex-gitops'
                        ]]
                        extensions: [[$class: 'RelativeTargetDirectory', basedir: 'vortex-gitops']]
                    )
                    sh "sed -i 's/IMAGE_TAG_PLACEHOLDER/${env.FullTag}/g' vortex-gitops/k8s/deployment.yml"
                    withCredentials([
                        usernamePassword(
                            credentialsId: 'github-creds', 
                            usernameVariable: 'USERNAME', 
                            passwordVariable: 'PASSWORD')
                    ]){
                        sh "cd vortex-gitops/k8s"
                        sh "git add ."
                        sh "git commit -m 'Update image tag to ${env.FullTag}'"
                        sh "git push https://${USERNAME}:${PASSWORD}@github.com/MangeshGot/vortex-gitops.git"
                    }   
                }
            }
        }
    }
}