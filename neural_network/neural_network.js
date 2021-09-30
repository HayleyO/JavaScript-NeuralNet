

class Neural_Network 
{
    constructor(input_dim, output_dim, optimizer_type, minibatches, epochs, learning_rate) 
    {
      this.input_dim = input_dim  
      this.output_dim = output_dim

      this.optimizer = new Optimizer(optimizer_type, minibatches, epochs, learning_rate)
    }

    static layers = [new Layer(this.input_dim, 'input', 'default_ff')]
    static weights = []
    static biases = []
    
    add_layer(nodes, activation_function, layer_type)
    {
      layers.splice((layers.length), 0, new Layer(nodes, activation_function, layer_type));
    }

    generate_weights_and_biases()
    {
      //generate based on dimensions of input (how do we muliple dimensional input)
      if(layers.length > 1)
      {
        for (let layer = 0; layer < layers.length -1; layer++)
        {
          if(layer==0)
          {
            //Weight dims = next_layer nodes, input_dims
            //Bias dims = next_layer nodes, 1
          }
          else if(layer==layers.length-1)
          {
            //Weights = output_dims, previous_layer nodes
            //Bias dims = output_dims nodes, 1
          }
          else
          {
            //Weights = current_layer dims, previous_layer dims
            //Weights = current_layer dims
          }
        }
      }
      else
      {
        throw 'Not enough layers to generate weights and biases.'
      }
    }

    feedforward()
    {
      //For each layer, layer.feedforward, pass in current weight
    }

    train()
    {
      //optimizer.sgd
    }
}

