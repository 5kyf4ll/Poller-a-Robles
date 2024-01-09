const Footer = () => {
  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="fixed bottom-0 flex justify-center form-blur backdrop-blur-xl w-full px-2 py-1">
      Derechos reservados &copy;{getDate()}. Desarrollado por Garro Torres Luis y Macedo Sanchez Oliver
    </footer>
  );
};

export default Footer;
