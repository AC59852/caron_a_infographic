-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 18, 2019 at 08:32 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE db_artwork;
USE db_artwork;



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_artwork`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_information`
--

CREATE TABLE `tbl_information` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Painting` varchar(100) NOT NULL,
  `Image` varchar(95) NOT NULL,
  `Artist` varchar(45) NOT NULL,
  `Year` int(15) NOT NULL,
  `Genre` varchar(50) NOT NULL,
  `Nationality` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_information`
--

INSERT INTO `tbl_information` (`ID`, `Painting`, `Image`, `Artist`, `Year`, `Genre`, `Nationality`) VALUES
(1, 'The Starry Night', '', 'Vincent van Gogh', 1889, 'Post-Impressionisn', 'Dutch'),
(2, 'The Creation of Adam', '', 'Michelangelo', 1511, 'Renaissance', 'Italian'),
(3, 'Mona Lisa', '', 'Leonardo da Vinci', 1503, 'Renaissance', 'Italian'),
(4, 'The Persistence of Memory', '', 'Salvador Dali', 1931, 'Surrealism', 'Spanish'),
(5, 'Impression, Sunrise', '', 'Claude Monet', 1872, 'Impressionism', 'French'),
(6, 'The Death of Marat', '', 'Jacques-Louis David', 1793, 'Neoclassicism', 'French'),
(7, 'The Birth of Venus', '', 'Sandro Botticelli', 1485, 'Renaissance', 'Italian'),
(8, 'The Scream', '', 'Edvard Munch', 1893, 'Expressionism', 'Norwegian'),
(9, 'Sunday Afternoon on the Island of La Grande Jatte', '', 'Georges-Pierre Seurat', 1884, 'Pointillism', 'French'),
(10, 'Ecstasy of Saint Teresa', '', 'Gian Lorenzo Bernini', 1647, 'Baroque', 'Italian'),
(11, 'Girl with a Pearl Earring', '', 'Johannes Vermeer', 1665, 'Dutch Golden Age', 'Dutch'),
(12, 'Where Do We Come From? What Are We? Where Are We Going?', '', 'Paul Gauguin', 1897, 'Post-Impressionism', 'French'),
(13, 'The Lady of Shalott', '', 'John William Waterhouse', 1888, 'Romanticism', 'Italian'),
(14, 'Guernica', '', 'Pablo Picassso', 1937, 'Cubism', 'Spanish'),
(15, 'The Great Wave off Kanagawa', '', 'Hokusai', 1829, 'Ukiyo-e', 'Japanese'),
(16, 'Liberty Leading the People', '', 'Eugène Delacroix', 1830, 'Romanticism', 'French'),
(17, 'A Bar at the Folies-Bergère', '', 'Edouard Manet', 1882, 'Impressionism', 'French'),
(18, 'The Third of May 1808', '', 'Francisco Goya', 1814, 'Romanticism', 'Spanish'),
(19, 'American Gothic', '', 'Grant Wood', 1930, 'Modernism', 'American'),
(20, 'The Thinker', '', 'Auguste Rodin', 1902, 'Realism', 'French');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
