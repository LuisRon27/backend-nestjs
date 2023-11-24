-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2023 a las 01:15:58
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
-- Base de datos: `dbcomercio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idCliente` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idCliente`, `nombre`, `apellido`, `telefono`, `direccion`) VALUES
(1, 'Carlos', 'González', '555123456', 'Av. Principal 123'),
(2, 'Laura', 'Martínez', NULL, 'Calle Secundaria 45'),
(3, 'Miguel', 'Rodríguez', '555789012', 'Calle Principal 678'),
(4, 'Marcos', 'Hernández', NULL, 'Av. Secundaria 89'),
(5, 'Diego', 'López', '555234567', 'Calle Central 12'),
(6, 'María', 'Gómez', '123-456-7890', 'Avenida Principal 456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `idProveedor` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `localidad` varchar(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`idProveedor`, `nombre`, `direccion`, `localidad`, `dni`, `telefono`, `email`, `observaciones`) VALUES
(1, 'ProveedorX', 'Calle Proveedor 1', 'Ciudad A', '12345678X', '555987654', 'proveedorx@email.com', 'Observación X'),
(2, 'ProveedorY', 'Av. Proveedor 2', 'Ciudad B', '87654321Y', NULL, 'proveedory@email.com', 'Observación Y'),
(3, 'ProveedorZ', 'Calle Proveedor 3', 'Ciudad C', '11112222Z', '555333444', 'proveedorz@email.com', NULL),
(4, 'ProveedorW', 'Av. Proveedor 4', 'Ciudad D', '99998888W', NULL, 'proveedorw@email.com', 'Observación W'),
(5, 'ProveedorV', 'Calle Proveedor 5', 'Ciudad E', '77776666V', '555111222', 'proveedorv@email.com', NULL),
(6, 'luis ron', 'Calle Principal 123', 'Ciudad A', '12345678', '123456789', 'proveedor1@example.com', 'Sin observaciones');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `IDX_923b0ca3bca000fd3180b062c4` (`apellido`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`idProveedor`),
  ADD UNIQUE KEY `IDX_11cbee356f278e0c394a81634a` (`dni`),
  ADD UNIQUE KEY `IDX_3a4c424917ccd705fa303d5274` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
