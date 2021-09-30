

class Layer 
{
    activation_functions = {'sigmoid':'(1)/(1+e^(-x))', 'tanh':'((2)/(1+e^(-2x)))-1'};
    constructor(nodes, activation_function = 'input') 
    {
      self.nodes = nodes;
      if (!(activation_function in activation_functions))
      {
        throw 'Unknown activation function, try: ' + Object.keys(activation_functions);
      }
      else
      {
        self.activation_function = activation_function//Have an enum or object of some sort with activation function type pointing to a particular activation function formula
      }  
    }

    forwardpass()//param: next_layer
    {
      // (weights X inputs)+biases
      // evaluate from next layer's activation function 
    }

    backwardpass()
    {

    }
}