
import imageBg from '../../assets/pink-girl.jpg'; // Ruta a la imagen de fondo

const AboutMe = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imageBg})` }}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="max-w-md p-8 bg-white bg-opacity-25 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">I Am UI/UX Designer, Full Stack Web Developer</h2>
        <p className="mb-6">
          Aquí va tu descripción sobre ti. Puedes escribir todo lo que quieras para presentarte.
        </p>
        <button className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-lg focus:outline-none">
          Descargar CV
        </button>
      </div>
    </div>
  </div>
  );
}

export default AboutMe;
