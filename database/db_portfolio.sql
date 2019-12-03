-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 03, 2019 at 03:15 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_work`
--

CREATE TABLE `tbl_work` (
  `ID` int(11) NOT NULL,
  `Project` varchar(100) NOT NULL,
  `Role` varchar(100) NOT NULL,
  `Detail` text NOT NULL,
  `Link` varchar(200) NOT NULL,
  `background` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_work`
--

INSERT INTO `tbl_work` (`ID`, `Project`, `Role`, `Detail`, `Link`, `background`) VALUES
(1, 'ThermoSecure by HomeCom', 'Branding', 'This is the 1-day project that I\'ve done with my team. We have to create the entire website, advertisement, and branding for the thermostat (product of Homecom). In this project, I did the logo, brand guideline and many advertisements stuff such as a sell sheet, poster or business card. ', 'https://www.behance.net/gallery/88007993/ThermoSecure', 'thermobg.jpg'),
(2, 'Thames River Anglers website', 'Web designer', 'This is a project that I did with my friend - Jimmy. I played a designer role on this project. I arranged all the infomation on the actual website Anglers.org and redesign the whole website. My main idea about this project is that create a simple website that people easy to follow the information and the news.', 'anglers.org', 'traabg.jpg'),
(3, 'Couple Hotel Website', 'Web Designer', 'I re-designed the Couple Hotel website without changing logo or any information on the main website. My main idea about this design is that I want to provide the users the most important things when they searching for a hotel such as type of room, prices and the services.', 'https://www.behance.net/gallery/87975617/Couples-Resort', 'couplebg.jpg'),
(4, 'The Organ REGEN Project', 'Graphic designer', 'In this project, I made the logo, brochure, and poster to help people know more about the Organ Regeneration Project which is run by OTTLab.', '', 'organbg.jpg'),
(5, 'Many bullshit videos I made', '3D, Video Editor', 'I\'d practiced a lot with After Effect, Premiere and Cinema 4D. It\'s fun when I working with video and 3D stuff. You can check out some of my videos on Youtube.', 'youtube.com', 'videobg.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_work`
--
ALTER TABLE `tbl_work`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_work`
--
ALTER TABLE `tbl_work`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
