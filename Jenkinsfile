pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    stages {
        stage ("Clean up"){
            steps {
                deleteDir()
            }
        }
        stage ("Clone repo"){
            steps {
                sh "git clone https://github.com/LamkadamHamza/AngularJenkinsV1.git"

            }
        }
        stage ("Generate frontend image") {
            steps {
                 dir("angular-jenkins"){
                    sh "docker build -t angular-app ."
                }
            }
        }
        stage ("Run docker compose") {
            steps {
                 dir("angular-jenkins"){
                    sh " docker compose up -d"
                }
            }
        }
    }
}
