

class Neural_Network 
{
    //variable for matrixes of weights and biases
    constructor(minibatches, epochs, learning_rate, input_dim, output_dim) 
    {
      this.minibatches = minibatches
      this.epochs = epochs
      this.learning_rate = learning_rate
      this.input_dim = input_dim
      this.output_dim = output_dim      
    }

    static layers = [new Layer(this.input_dim, 'input', 'default_ff')]
    
    add_layer(nodes, activation_function, layer_type)
    {
      layers.splice((layers.length), 0, new Layer(nodes, activation_function, layer_type));
    }
    
    //generate weights and biases

    //feedforward

    //get minibatches

    //cost function derivative

    //activation function derivative

    //stochastic gradient descent //// potentially using adam

    //backpropagation 
}

