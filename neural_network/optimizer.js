
class Optimizer
{
    constructor(optimizer_type, minibatches, epochs, learning_rate) 
    {
        this.optimizer_type = optimizer_type;
        this.minibatches = minibatches;
        this.epochs = epochs;
        this.learning_rate = learning_rate;
    }

    setup_minibatches(input_data, input_labels)
    {
        // param: input_data is an array of matricees
        // param: input_labels is an array of matrices (as the labels of previous)
        let shuffled = shuffle(input_data, input_labels);
        let shuffled_data = shuffled[0], shuffled_labels = shuffled[1];

        let MiniBatch = [];
        let MiniBatchLabels = [];

        let numMiniBatches = input_data.length/this.minibatches;
        let counter = 0;
        for (let i = 0; i < numMiniBatches; i++)
        {
            var newMiniBatch = [];
            var newMiniBatchLabels = [];
            for (let j = 0; j < this.minibatches; j++)
            {
                newMiniBatch.push(shuffled_data[counter]);
                newMiniBatchLabels.push(shuffled_labels[counter]);
                counter++;
            }
            MiniBatch.push(newMiniBatch);
            MiniBatchLabels.push(newMiniBatchLabels);
        }
        return [MiniBatch, MiniBatchLabels];
    }

    stochastic_gradient_descent(nn, input_data, input_labels)
    {
        minibatches = setup_minibatches(input_data, input_labels);
        let minibatch_data = minibatches[0], minibatch_labels = minibatches[1];
        for (let epoch = 0; epoch < self.epochs; epoch++)
        {
            for (let miniBatch = 0; miniBatch < minibatch_data.length; miniBatch++)
            {
                //array of bias gradients the size of n
                //array of weight gradients the size of n
                for (let data = 0; input < minibatch_data[miniBatch].length; data++) //For all the n data
                {
                    //Zero bias gradients/weight gradients
                    var input = minibatch_data[miniBatch][data];
                    var label = minibatch_labels[miniBatch][data];
                    //a is the outputs per layer
                    var z = [input].concat(nn.feedforward(input));
                    
                    // z = ouputs of layers
                    // a = activation functions
                    // y = labels
                    // x = inpust of layers
                    

                    // ∂L/∂a = cost function derivation in regards to activation function
                    // ∂a/∂z = derivative of activation function
                    // ∂L/∂z = ∂L/∂a * ∂a/∂z derivative of cost function with respect to outputs
                    // ∂z/∂w = x 
                    // ∂L/∂dw = (∂L/∂a * ∂a/∂z * ∂z/∂w) = ∂L/∂z * ∂z/∂w
                    // ∂L/∂b = ∂L/∂z * ∂z/∂b = ∂L/∂z * 1
                    
                    // bg = ∂L/∂b = ∂L/∂z = ∂L/∂z= ∂L/∂a*∂a/∂z
                    // wg = ∂L/∂w = dL/∂z * ∂z/∂w = x * bg 
                    
                    // bg_(l-1) = ∂L_(l-1)/∂Z = (weights_l)^T*bg_l*derivative of activation function(a)
                    // wg(l-1) = bg_(l-1) * ∂z/∂w = bg_(l-1) * a_(l-1)^T

                    // last layer bias gradient = cost function (loss function I suppose) derivative (a-y) * activation function derivative (a*(1-a))
                    // bg = ((a-y)*)a*(1-a)
                    // wg =(a^(L-1)) * bg

                    // bg = (weights_(l+1)^T*bg) * derivative of activation function (a*(1-a))
                    // wg = bg * a_(l-1)^T
                }
                //add up corresponding gradients
                //update weights
            }
        }
    }

    backpropogation()
    {
        //this is where the particular optimizer comes in
        //return gradients
        //then update using backpass() per layer
        //backprop should output weight and bias gradients for updating for each layer.backpass()
    }
}