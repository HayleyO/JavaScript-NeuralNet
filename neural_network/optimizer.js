
class Optimizer
{
    constructor(optimizer_type, minibatches, epochs, learning_rate) 
    {
        self.optimizer_type = optimizer_type
        self.minibatches = minibatches
        self.epochs = epochs
        self.learning_rate = learning_rate
    }

    setup_minibatches(input_data, labels)
    {
        //shuffle input_data and labels with same seed
        // let numMiniBatches = input_data.length/self.minibatches
        // MiniBatch
        // for (let i = 0; i < numMiniBatches; i++)
        //      newMinibatch
        //      for(int j = 0; j < self.minibatches; j++)
        //          newMinibatch.add(input data)
        //      MiniBatch.add(minibatch) Pretty sure this is push in javascript
        // return [MiniBatch, MiniBatchLabels]
    }

    //stochastic gradient descent
    stochastic_gradient_descent()
    {
        // minibatches = setup_minibatches()
        //for (let epoch = 0; epoch < self.epochs; epoch++)
        //  for (let miniBatch = 0; miniBatch < minibatches.length; miniBatch++)
        //      backpropoagation
        //      update weights
    }

    backpropogation()
    {
        //for each layer layer.backpass()
        //backpass shoult output weight and bias gradients for updating
    }

    update()
    {
        //update weights and biases with weight gradients and bias gradients, this is where the optimizer type comes into play
    }
}