pipeline {
    agent any
    tools { nodejs 'Node16.15.0' }
    stages {    
        stage('Test') {
            steps {
                sh '''
                    npm --version
                    node --version
                '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                   npm install
                   cd ${WORKSPACE}/client
                   npm install
                   npm run build
                '''
            }
        }
        stage('Deploy') {
            steps { 

                sh '''
                    cd ${WORKSPACE}/
                    sudo cp -r * /home/jmismail/jenkins-demo/       
                '''
            }
        }
    }
}
