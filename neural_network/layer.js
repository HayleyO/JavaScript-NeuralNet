

class Layer 
{
    activation_functions = {'sigmoid':'(1)/(1+e^(-x))', 'tanh':'((2)/(1+e^(-2x)))-1'};
    layer_types = {'sequential': 'insert_object with particular ways to do it', 'convolutional': 'yeah we havent gotten there yet'}
    constructor(nodes, activation_function = 'input', layer_type) 
    {
      //Layers will use activation functions of next layer to feed forward 
      self.nodes = nodes;
      if (!(activation_function in activation_functions))
      {
        throw 'Unknown activation function, try: ' + Object.keys(activation_functions);
      }
      else if(!(layer_type in layer_types))
      {
        throw 'Unknown layer type, try: ' + Object.keys(layer_type);
      }
      else
      {
        self.activation_function = activation_function//Have an enum or object of some sort with activation function type pointing to a particular activation function formula
        self.layer_type = layer_type
      }  
    }

}