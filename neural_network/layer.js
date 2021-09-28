

class Layer 
{
    activation_functions = {'sigmoid':'(1)/(1+e^(-x))', 'tanh':'((2)/(1+e^(-2x)))-1'};
    layer_type = {'sequential': 'insert_object with particular ways to do it', 'convolutional': 'yeah we havent gotten there yet'}
    constructor(nodes, activation_function = 'input', layer_type) 
    {
      //Layers will use activation functions of next layer to feed forward and a final activation function to 
      self.nodes = nodes;
      self.activation_function = activation_function//Have an enum or object of some sort with activation function type pointing to a particular activation function formula
      self.layer_type = layer_type
    }

}