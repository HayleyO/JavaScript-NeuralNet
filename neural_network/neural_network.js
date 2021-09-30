

class Neural_Network 
{
    //variable for matrixes of weights and biases
    constructor(input_dim, output_dim, optimizer_type, minibatches, epochs, learning_rate) 
    {
      this.input_dim = input_dim  //How will we handle images? I'm thinking of just flattening the matrix so a 2x2 becomes a 4x1 for ease of use
      this.output_dim = output_dim

      this.optimizer = new Optimizer(optimizer_type, minibatches, epochs, learning_rate)
    }

    static layers = [new Layer(this.input_dim, 'input', 'default_ff')]
    
    add_layer(nodes, activation_function, layer_type)
    {
      layers.splice((layers.length), 0, new Layer(nodes, activation_function, layer_type));
    }
    
    generate_weights_and_biases()
    {
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
      //for each layer
      // (weights X inputs)+biases
      // evaluate from current layer's activation function 
    }
}

