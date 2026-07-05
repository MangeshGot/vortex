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
                    def fullTag = "${env.IMAGE_VERSION}-build-${env.BUILD_ID}"
                    def vortexApp = docker.build "${env.DOCKER_HUB_USER}/${env.IMAGE_NAME}:${fullTag}"
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        vortexApp.push("${fullTag}")
                        vortexApp.push('latest')
                    }
                }
            }
        }
        stage ('Update k8s Manifest') {
            steps{
                echo "Modifying image tag to ${fullTag}"
                sh "sed -i 's/IMAGE_TAG_PLACEHOLDER/${fullTag}/g' k8s/deployment.yml"
            }
        }
    }
}