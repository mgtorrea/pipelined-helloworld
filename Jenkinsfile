pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Init') {
      steps {
        sh 'npm install assert'
      }
    }
    stage('Test') {
      steps {
        sh 'node .'
      }
    }
  }
}