node('node') {
  
  stage 'Checkout'
    checkout scm
  stage 'Init'
    sh 'npm install assert'
  stage 'Test'
    sh 'node .'
    
}