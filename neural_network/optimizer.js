
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

    stochastic_gradient_descent(input_data, input_labels)
    {
        minibatches = setup_minibatches(input_data, input_labels);
        let minibatch_data = minibatches[0], minibatch_labels = minibatches[1];
        for (let epoch = 0; epoch < self.epochs; epoch++)
        {
            for (let miniBatch = 0; miniBatch < minibatch_data.length; miniBatch++)
            {
                //backpropogation
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