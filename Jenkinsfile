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
                    docker.withRegistry('https://index.docker.io/v1/', "${env.DOCKER_CREDENTIALS_ID}") {
                        vortexApp.push()
                        vortexApp.push('latest')
                    }
                }
            }
        }
        stage ('Update GitOps Repo') {
            steps{
                script {

                    sh "rm -rf helm-microservice"
                    
                    dir('helm-microservice') {
                        checkout scmGit(
                            branches: [[name: 'main']],
                            userRemoteConfigs: [[
                                credentialsId: 'github-creds',
                                url: 'https://github.com/MangeshGot/helm-microservice.git'
                            ]]
                        )
                        
                        echo "Modifying Helm values file inside vortex-chart..."
    
                        sh "sed -i 's|tag:.*|tag: \"${env.FullTag}\"|g' vortex-chart/values.yaml"
                        
                        withCredentials([
                            usernamePassword(
                                credentialsId: 'github-creds', 
                                usernameVariable: 'USERNAME', 
                                passwordVariable: 'PASSWORD')
                        ]){
                            sh """
                                git checkout main || git checkout -b main
                                git config user.name "MangeshGot"
                                git config user.email "m.sonawanegot@gmail.com"
                                
                                # Stage the updated nested file
                                git add vortex-chart/values.yaml
                                
                                # Protect the build from failing if no differences exist
                                if ! git diff --exit-code vortex-chart/values.yaml > /dev/null; then
                                    git commit -m 'chore(helm): upgrade vortex-chart image tag to ${env.FullTag}'
                                    git push https://${USERNAME}:${PASSWORD}@github.com/MangeshGot/helm-microservice.git main
                                else
                                    echo "No value changes detected. Skipping push."
                                fi
                            """
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}