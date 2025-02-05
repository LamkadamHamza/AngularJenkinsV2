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
                sh "git clone https://github.com/LamkadamHamza/AngularJenkinsV2.git"

            }
        }
        stage ("Generate frontend image") {
            steps {
                 dir("AngularJenkinsV2"){
                     sh "docker build -t app-angular-material ."
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
