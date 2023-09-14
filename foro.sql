-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2023 a las 06:08:24
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_foro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id` int(11) NOT NULL,
  `autor` varchar(150) NOT NULL,
  `publicacion` varchar(1000) NOT NULL,
  `img` varchar(300) NOT NULL,
  `Fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foro`
--

INSERT INTO `foro` (`id`, `autor`, `publicacion`, `img`, `Fecha`) VALUES
(10, 'prueba 2', 'asdadadsads', 'aasdasd111', '2023-09-13 00:00:00'),
(11, 'asdadasdasd123123', '123123', 'https://www.freejpg.com.ar/asset/900/a3/a385/F100004703.jpg', '2023-09-13 00:00:00'),
(12, 'asdasdasd', 'asdasd', 'https://www.freejpg.com.ar/asset/900/a3/a385/F100004703.jpg', '2023-09-13 00:00:00'),
(15, 'asdasd', 'asdasd', 'https://www.freejpg.com.ar/asset/900/a3/a385/F100004703.jpg', '2023-09-13 00:00:00'),
(16, 'asdas', 'asdasd', 'https://www.freejpg.com.ar/asset/900/a3/a385/F100004703.jpg', '2023-09-14 03:05:59'),
(17, 'asdasd', 'asdasd', 'https://sergiomadrigal.com/wp-content/uploads/2014/01/blog_fisheye.jpg', '2023-09-14 03:18:39');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `foro`
--
ALTER TABLE `foro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
