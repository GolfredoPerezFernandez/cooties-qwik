import {
  component$, useVisibleTask$,
} from '@builder.io/qwik';
import { Application } from '@splinetool/runtime';
export default component$(() => {
  
  useVisibleTask$(async () => {
    const canvas:any = document.getElementById('canvas3d');
    const spline = new Application(canvas);
    spline.load('https://prod.spline.design/3YMzCHxWOY5taTd4/scene.splinecode',).then(() => {spline.addEventListener('mouseDown', (e) => {
			if (e.target.name === 'Cube') {
				console.log('I have been clicked!');
			}
		});
      // move the object in 3D space
    });;

    // Cleanup function
    return () => {
      // Perform any cleanup here, such as stopping the animation or releasing resources.
    };
  });
  return ( <div><canvas style={{width:"100%",height: "100%",justifyContent:"center",alignItems:"center",position:"fixed",zIndex:-1}} id="canvas3d" /> </div>);
});