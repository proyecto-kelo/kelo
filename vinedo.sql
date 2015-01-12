-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Servidor: 127.13.30.2:3306
-- Tiempo de generación: 12-01-2015 a las 08:08:26
-- Versión del servidor: 5.5.40
-- Versión de PHP: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `kelo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vinedo`
--

CREATE TABLE IF NOT EXISTS `vinedo` (
  `imagen` varchar(1000) NOT NULL,
  `infor` varchar(1000) NOT NULL,
  `informacion` varchar(2000) NOT NULL,
  `mapa` varchar(1000) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncar tablas antes de insertar `vinedo`
--

TRUNCATE TABLE `vinedo`;
--
-- Volcado de datos para la tabla `vinedo`
--

INSERT INTO `vinedo` (`imagen`, `infor`, `informacion`, `mapa`, `provincia`, `nombre`) VALUES
('https://www.mediafire.com/convkey/a887/j792b9h6lrbvpq56g.jpg', 'Bodegas y Viñedos Artuke es una pequeña, coqueta e impecable instalación donde una familia con arraigada tradición vitivinícola elabora vino de las uvas de sus propios viñedos.', 'Bodegas y Viñedos Artuke es una pequeña, coqueta e impecable instalación donde una familia con arraigada tradición vitivinícola elabora vino de las uvas de sus propios viñedos. Fue en el año 1985 cuando iniciaron su nueva andadura con la inauguración de sus instalaciones en el actual enclave, en la zona sur del pueblo.\r\n\r\nRoberto Miguel Blanco, fundador de la bodega, desde muy joven decide continuar el camino de sus antepasados dedicándose de lleno al cultivo de la vid y a la elaboración y cuidado de sus vinos según la tradición, con esmero y total dedicación. Sus hijos Arturo y Kike, serán los encargados de recoger el legado y continuar con la particular historia de esta bodega.\r\n\r\nLa bodega cuenta con espacios para reuniones de empresa, es imprescindible reservar con antelación.', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2940.2110744250735!2d-2.6815461000000003!3d42.5295708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ff6177d3f8185%3A0x32ace2b2348d7ffd!2sLa+Serna+Kalea%2C+24!5e0!3m2!1ses!2ses!4v1420703187943', 'Alava', 'Artuke'),
('https://www.mediafire.com/convkey/aa73/0b5185001sn6qv56g.jpg', 'La bodega cuenta con sala de depósitos de acero inoxidable, una nave de barricas y una sala de cata.', 'La familia Berzal tiene desde tiempo inmemorial su explotación vitícola en esta villa. Actualmente la bodega conjuga modernidad con tradición, elaborando vinos con la viticultura tradicional y las nuevas técnicas de elaboración.\r\n\r\nLa bodega cuenta con sala de depósitos de acero inoxidable, una nave de barricas y una sala de cata.\r\n\r\nEl compromiso de Dominio de Berzal es la mejora de la calidad de los vinos cada año y poder hacer disfrutar a la gente de este pequeño tesoro que es el vino.', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5880.452547550973!2d-2.6793220000000275!3d42.52924790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ff617fd6c0d33%3A0x921d734945bed30f!2zMDEzMDcgQmHDsW9zIGRlIEVicm8vTWHDsXVldGEsIMOBbGF2YQ!5e0!3m2!1ses!2ses!4v1420703809550', 'Alava', 'Berzal'),
('https://www.mediafire.com/convkey/5687/5za32q4qfillz6g6g.jpg', 'Estas 32 hectáreas son el auténtico orgullo de Florentino, su verdadero tesoro. No en vano, en ellas reside la esencia viva de sus caldos.', 'Luberri Monje Amestoy es una bodega alavesa de pura cepa. Sus diferentes viñedos orientados al mediodía y cuidados como un jardín, reposan entre la Sierra Cantabria, la de Toloño y el río Ebro.\r\n\r\nEstas 32 hectáreas son el auténtico orgullo de Florentino, su verdadero tesoro. No en vano, en ellas reside la esencia viva de sus caldos.\r\n\r\nTempranillo (90%), Viura (5%) y Cabernet Sauvignon (5%). Tres variedades repartidas en múltiples y pequeños pagos que albergan desde cepas de apenas 15 años hasta otras septuagenarias.', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.7295506416717!2d-2.626697999999986!3d42.518554999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4558be4fbf5d61%3A0x56f6b9b6ae43b363!2sLuberri+Monje+Amestoy!5e0!3m2!1ses!2ses!4v1420704095066', 'Alava', 'Luberri Monje Amestoy'),
('https://www.mediafire.com/convkey/955f/uzzzimtoozxl4jv6g.jpg', 'Nuestra bodega-museo está construida sobre seis calados subterráneos de piedra de sillería que datan de los siglos XV y XVI.', 'Nuestra bodega-museo está construida sobre seis calados subterráneos de piedra de sillería que datan de los siglos XV y XVI. En ellos podemos encontrar nuestro Museo Etnográfico, el Museo del Vino, la Capilla presidida por la Virgen de la Plaza, nuestro calado más antiguo que data de 1400, nuestra especial sala de catas donde se puede disfrutar de una maravillosa vista de una viña subterránea y por último, nos adentramos en el “túnel de los sentidos” compuesto por antiguos depósitos y  lagos de fermentación donde el visitante podrá apreciar los colores del vino, experimentar con los aromas, conocer las temperaturas ideales… La bodega también dispone de alojamiento.', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.9495541272568!2d-2.6157549999999983!3d42.51388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4557f9b99e8bd7%3A0x5624da25ba131cf9!2sBodegas+Valdelana%2C+S.L.!5e0!3m2!1ses!2ses!4v1420704246319', 'Alava', 'Valdelana'),
('https://www.mediafire.com/convkey/6a43/qjho6dac1774ive6g.jpg', 'Viña Salceda se asienta donde las tierras de Elciego se unen a las orillas del Ebro, rodeada de su propio viñedo.', 'Viña Salceda se asienta donde las tierras de Elciego se unen a las orillas del Ebro, rodeada de su propio viñedo.\r\n\r\nComienza su andadura en 1969 con dedicación plena a la elaboración exclusiva de vinos tintos. Cultivamos con auténtico mimo las tres grandes variedades tintas de nuestra viticultura: el tempranillo, el graciano y el mazuelo, que es tanto como hablar de la gracia, el bouquet, el nervio y la fortaleza de nuestros vinos, que les permite alcanzar una longevidad envidiable. Con el deseo de hacerles partícipes de nuestra experiencia proponemos diferentes actividades en bodega, dando la posibilidad al visitante de ser el principal protagonista junto con el vino.\r\n', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2941.774475127833!2d-2.6218269999999997!3d42.49634699999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4557f90f515a3b%3A0x86d9521bd8329cc0!2sVi%C3%B1a+Salceda!5e0!3m2!1ses!2ses!4v1420704470615', 'Alava', 'Viña Salceda'),
('https://www.mediafire.com/convkey/7f7b/5r7vfh42luat4h16g.jpg', 'Calados de hace más de 130 años y rodeada de viñedos.', 'Calados de hace más de 130 años y rodeada de viñedos. Uno de los escasos chateaux de la Rioja. Un capricho del propietario (desgraciadamente fallecido hace unos años en accidente de tráfico). Se consolidará como un grande de Rioja.\r\n\r\nEn estos vinos se aúnan la tradición (maduros, bien evolucionados) y la modernidad (vivos de color y con vigor)', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2941.5768918083977!2d-2.685056!3d42.500547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd455e8c49b5b1a9%3A0xcbb97f766046dd76!2sAm%C3%A9zola+de+la+Mora!5e0!3m2!1ses!2ses!4v1420704774220', 'La Rioja', 'Amézola de la Mora'),
('https://www.mediafire.com/convkey/7d13/1cmj81klx1d1lps6g.jpg', 'La nueva propiedad recogió el testigo de lo que fue la bodega familiar, cuya producción era casi artesanal.', 'La nueva propiedad recogió el testigo de lo que fue la bodega familiar, cuya producción era casi artesanal. En poco tiempo se acometieron inversiones, se modernizó todo el proceso de elaboración y embotellado, y se excavaron los impresionantes calados que en la actualidad tiene Antigua Usanza. La bodega está enclavada en una de las zonas más prestigiosas de la Rioja Alta, la cual reúne unas condiciones de privilegio para el cultivo de la viña. Asimismo, gracias a la nueva dirección del enólogo y propietario Miguel Ángel Rodríguez, hoy hay más de 1.200 metros cuadrados robados a la roca, totalmente impermeable, de gran dureza y belleza de corte, que da esa estabilidad a la temperatura ambiente, idónea para la crianza del vino.', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2938.236238833955!2d-2.7573749999999992!3d42.571507999999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ff4e9f749ed2f%3A0x275fa2ee9d7811e3!2sBodega+Antigua+Usanza+S.A.!5e0!3m2!1ses!2ses!4v1420704970120', 'La Rioja', 'Antigua Usanza'),
('https://www.mediafire.com/convkey/222d/7uee64appatb3b26g.jpg', 'Surge con un nuevo concepto del cooperativismo vitivinícola, con el objetivo de comercializar juntos sus vinos varios viticultores bajo una misma marca.', 'Surge con un nuevo concepto del cooperativismo vitivinícola, con el objetivo de comercializar juntos sus vinos varios viticultores bajo una misma marca. La elaboración se realiza en la bodega de cada socio y el proceso finaliza en la bodega central de Laguardia, que reúne las condiciones técnicas más avanzadas.', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23519.82698016726!2d-2.555902095963756!3d42.534514148145085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCarretera+de+Logro%C3%B1o+01300!5e0!3m2!1ses!2ses!4v1420705178881', 'La Rioja', 'Artadi Cosecheros'),
('https://www.mediafire.com/convkey/e756/7raglar8f7svfp36g.jpg', 'Apoyándose en un monasterio que data del siglo XVI, anteriormente castillo-fortaleza del conde de Eguía, un reducido número de profesionales del vino decidió establecer la bodega en 1982.', 'Apoyándose en un monasterio que data del siglo XVI, anteriormente castillo-fortaleza del conde de Eguía, un reducido número de profesionales del vino decidió establecer la bodega en 1982. Ls bodega, rodeada de viñedos, ha sido diseñada arqauitectónicamente para que armonice con el monasterio y está dotada de las más avanzadas técnicas de elaboración, crianza y embotellado. El monasterio ha sido declarado monumento artístico.', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2942.7609790176666!2d-2.0911079999999997!3d42.475372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5a9ee9808b1127%3A0xdd3ebaae877865e7!2sBar%C3%B3n+De+Ley!5e0!3m2!1ses!2ses!4v1420705405575', 'Navarra', 'Barón de Ley'),
('https://www.mediafire.com/convkey/060b/qx6dpju9cmsf7f56g.jpg', 'Tiene el número de registro embotellador 10-LO, por lo que es la primera y más antigua firma embotelladora de la Denominación.', 'Lindante con la bodega está la finca Viña Pomal, coto adquirido y plantado por la sociedad en el año 1908. De sus vendiminas se elabora el vino Viña Pomal desde el año 1911. Dispone de más de 1.000 metros de calados de piedra de sillería. Hace poco (1997) ha sido adquirida por el grupo Codorniú.', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2937.6533839437197!2d-2.851267!3d42.583878999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4f8be4c9623e27%3A0x1617aae9f434b1f8!2sBODEGAS+BILBAINAS!5e0!3m2!1ses!2ses!4v1420705588789', 'La Rioja', 'Bilbaínas'),
('https://www.mediafire.com/convkey/bdc2/rzydnqm32u0uycr6g.jpg', 'Hablar de Vinícola Navarra es narrar la esencia histórica de Navarra.', 'Hablar de Vinícola Navarra es narrar la esencia histórica de Navarra. La bodega más antigua de la denominación —data de 1864— fue fundada por Julio Mihura y un grupo de socios franceses.', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11730.576543032888!2d-1.65018090000003!3d42.69007995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd509a9b910d12bd%3A0xb1c8f60c11b80925!2s31397+Campanas%2C+Navarra!5e0!3m2!1ses!2ses!4v1420705887632', 'Navarra', 'Las Campanas'),
('https://www.mediafire.com/convkey/e077/7vdsieeg1luoccc6g.jpg', 'La Bodega Nuestra Señora del Romero se gesto un 2 de Mayo de 1951 con la asistencia y refrenda en libro de Socios de 230.', 'La Bodega Nuestra Señora del Romero se gesto un 2 de Mayo de 1951 con la asistencia y refrenda en libro de Socios de 230. Oficialmente el día 25 de Septiembre de 1951, quedo constituida con 261 socios . En Mayo de 1952 se iniciaron las obras de la bodega para una capacidad de 2,5 millones de kilos , y cuatro meses más tarde, se recibió la primera cosecha de uva.', 'https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d1482.6532981426058!2d-1.6746317343711679!3d41.993695171560304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!1i0!3e6!4m0!4m3!3m2!1d41.993764!2d-1.6749379999999998!5e0!3m2!1sen!2s!4v1420706160329', 'Navarra', 'Malon de Echaide'),
('https://www.mediafire.com/convkey/fd28/x7xnmelken7jkv16g.jpg', 'Olite es la capital navarra del vino, antigua sede del viejo Reino, y nuestros caldos son reflejo de esta tierra de fuerte personalidad.', 'Olite es la capital navarra del vino, antigua sede del viejo Reino, y nuestros caldos son reflejo de esta tierra de fuerte personalidad. De hecho, el vino es un miembro más de nuestra familia.', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2942.3045789145385!2d-1.6562260000000002!3d42.48507699999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5a7715e638e14d%3A0xde6461db27eaec6c!2sBodegas+Ochoa!5e0!3m2!1sen!2s!4v1420706392466', 'Navarra', 'Ochoa'),
('https://www.mediafire.com/convkey/405b/z16bit48q6lv6q46g.jpg', 'Palacio de la Vega, la bodega navarra más laureada en el Challenge International du Vin por segundo año consecutivo.', 'Palacio de la Vega, la bodega navarra más laureada en el Challenge International du Vin por segundo año consecutivo.\r\n\r\nUno de los más prestigiosos y antiguos certámenes de vino internacional, el Challenge International du Vin, que se congrega anualmente en Blaye-Bourg (Burdeos) ha otorgado este año tres medallas de oro a Palacio de la Vega.', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2937.087076497971!2d-2.0301709999999997!3d42.59589599999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5076dedbbddc0d%3A0xc099ce3361f2c3b9!2sPalacio+De+La+Vega!5e0!3m2!1sen!2s!4v1420706542913', 'Navarra', 'Palacio de la Vega');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
