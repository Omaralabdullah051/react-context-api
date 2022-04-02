//By using lifting state up pattern we can manage state and functionality from pattern to child component without code repeatation. But it has props drilling problem.Everytime we need to pass state and functionality via props manually from one component to another.Some component doesn't need and use to this state and functionality.

//By using HOM/Render Props pattern we solved state and functionality repeatation and increase the component reuseablity.solved props drilling problem.(not actually but we can avoid props drilling by these pattern).


//Context API
//1.Create a context.
//2.wrap parent with Context Provider.
//3.provide a value of the context as prop.
//4.Wrap child with Context Consumer.
//5.Consumer follows the render prop pattern.
//By context API we can actually prevent the props drilling problem.

//Context API is more powerfull and usefull than HOM & Render Props Pattern. We can pass the state as an object,array,single item,function via value.