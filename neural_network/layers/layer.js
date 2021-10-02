import * as math from "math.js";

class Layer 
{
    static activation_functions = {'input': '1', 'sigmoid':'(1)/(1+e^(-x))', 'tanh':'((2)/(1+e^(-2x)))-1'};
    constructor(nodes, activation_function = 'input') 
    {
      this.nodes = nodes;
      if (!(activation_function in activation_functions))
      {
        throw 'Unknown activation function, try: ' + Object.keys(activation_functions);
      }
      else
      {
        this.activation_function = activation_functions[activation_function];
      }  
    }

    generate_layer_weights_and_biases(next_layer)
    {
      this.weights = math.ones(next_layer.nodes, this.nodes);
      this.biases = math.ones(next_layer.nodes, 1);
      math.map(this.weights, x => x*Math.random());
      math.map(this.biases, x => x*Math.random());
    }

    forwardpass(input, next_layer)
    {
      // activation function((weights x input)+biases)
      var result = math.add(math.multiply(this.weights, input), this.biases);
      math.map(result, x => math.evalutate(next_layer.activation_function, {x:x}));
      return result;
    }

    backwardpass()//param: weight_gradient, bias_gradient    
    {
      //self.biases = biases - (bias_gradient * (learning_rate/minibatches))
      //self.weights = weights - (weights * (learning_rate/minibatches))
    }
}