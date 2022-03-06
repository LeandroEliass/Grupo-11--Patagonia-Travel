-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2022 a las 01:08:27
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `patagoniatravel_db`
--

--
-- Volcado de datos para la tabla `baños`
--

INSERT INTO `baños` (`id`, `tipos`) VALUES
(1, 'PRIVADO'),
(2, 'COMPARTIDO');

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Hotel'),
(2, 'Hostal'),
(3, 'Cabañas');

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`id`, `nombre`) VALUES
(1, 'Bariloche'),
(2, 'Usuahia'),
(3, 'Calafate');

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`id`, `nombre`) VALUES
(1, 'usuario1'),
(2, 'usuario2'),
(3, 'usuario3'),
(4, '\"file-1643072335529.jpg\"'),
(5, '\"file-1643072524599.jpg\"'),
(6, '\"file-1643072652895.jpg\"');

--
-- Volcado de datos para la tabla `nacionalidad`
--

INSERT INTO `nacionalidad` (`id`, `pais`) VALUES
(1, 'ARGENTINA'),
(2, 'ESPAÑA'),
(3, 'BRASIL'),
(4, 'URUGUAY');

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `id_ciudad`, `direccion`, `id_categoria`, `capacidad_personas`, `id_baños`, `descripcion`, `price`, `id_imagen`) VALUES
(1, 'ELA KUPAL', 1, 'CALLE 33', 3, 4, 1, 'HERMOSAS CABAÑAS CERCA DEL LAGO', 7500, 4),
(2, 'El Nahuelito', 1, 'Avenida 2344', 3, 6, 1, 'MEJOR QUE EN TU CASA', 9000, 5),
(3, 'SKY BARILOCHE', 1, 'LAGUNAS 323', 1, 2, 1, 'HOTEL 4 ESTRELLAS PREMIUM', 8500, 6);

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `tipos`) VALUES
(1, 'WIFI'),
(2, 'TV'),
(3, 'Servicio a la Habitación'),
(4, 'Garage'),
(5, 'Climatización'),
(6, 'Macotas');

--
-- Volcado de datos para la tabla `servicios_productos`
--

INSERT INTO `servicios_productos` (`id`, `producto_id`, `servicio_id`) VALUES
(1, 1, 5),
(2, 1, 4),
(3, 1, 1),
(4, 1, 6),
(5, 2, 5),
(6, 2, 2),
(7, 2, 1),
(8, 3, 4),
(9, 3, 6),
(10, 3, 5),
(11, 3, 3),
(12, 3, 2),
(13, 3, 1);

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `last_name`, `fecha_nacimiento`, `id_nacionalidad`, `id_ciudad`, `admin`, `email`, `password`, `id_imagen`) VALUES
(1, 'Leandro', 'Toconás', '2012-05-31', 1, 3, 1, 'leandro@patagoniatravels.com', 'laksdjflsdlfn', 1),
(2, 'Carlos', 'Cruz', '2021-12-07', 3, 1, 0, 'carlitos@gmail.com', '123456', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
