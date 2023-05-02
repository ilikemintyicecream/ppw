import Typewriter from 'typewriter-effect';

const Type = () => {
    return(
<Typewriter
  options={{
    strings: ['web application',
'web design','illustration',''],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  }}
/>)
}
export default Type;