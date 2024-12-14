import React from "react";

const HeadComponent = () => {
  return (
    <>
      <title>Tommy Roy</title>
      <meta
        name="description"
        content="Salut ! Voici mon site internet où se retrouvent principalement mes peintures à l’huile. Les sujets que je peins varient des natures mortes, des paysages aux portraits."
      />
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Shrikhand&display=swap"
        rel="stylesheet"
      />
      {/* favicon */}
      <link rel="icon" href="/images/favicon.png" />
       
      <script src="https://kit.fontawesome.com/952594155e.js" crossorigin="anonymous"></script>
      {/* bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      {/* my style */}
      <link rel="stylesheet" href="/style.css" />
    </>
  );
};

export default HeadComponent;
