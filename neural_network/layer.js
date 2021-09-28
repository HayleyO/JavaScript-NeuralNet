

class Layer 
{
    activation_functions = {'sigmoid':'(1)/(1+e^(-x))', 'tanh':'((2)/(1+e^(-2x)))-1'};
    constructor(nodes, activation_function, layer_type) 
    {
      self.nodes = nodes;
      self.activation_function = activation_function//Have an enum or object of some sort with activation function type pointing to a particular activation function formula
    }

}