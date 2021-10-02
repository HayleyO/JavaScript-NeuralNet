

class Neural_Network 
{
    constructor(input_dim, output_dim, optimizer_type, minibatches, epochs, learning_rate) 
    {
      this.input_dim = input_dim; //How will we handle h_fxw_fxc_f? [h_f, w_f, c_f]??? Will implement in layer
      this.output_dim = output_dim;

      this.optimizer = new Optimizer(optimizer_type, minibatches, epochs, learning_rate);
    }

    static layers = [new Layer(this.input_dim, 'input', 'default_ff')];
    
    add_layer(nodes, activation_function, layer_type)
    {
      layers.splice((layers.length), 0, new Layer(nodes, activation_function, layer_type));
    }

    generate_weights_and_biases()
    {
      if(layers.length > 1)
      {
        for (let layer = 0; layer < layers.length-2; layer++)
        {
          layers[layer].generate_layer_weights_and_biases(layers[layer+1]);
        }
      }
      else
      {
        throw 'Not enough layers to generate weights and biases.';
      }
    }

    feedforward(input)
    {
      output = input;
      for (let layer = 0; layer < layer.length-2; layer++)
      {
        output = layers[layer].feedforward(output,layers[layer+1]);
      }
      return output;
    }

    train(input, input_labels)
    {
      this.optimizer.stochastic_gradient_descent();
    }
}

