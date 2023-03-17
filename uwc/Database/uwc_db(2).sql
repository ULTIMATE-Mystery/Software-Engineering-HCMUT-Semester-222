-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 07:06 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uwc_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance_info`
--

CREATE TABLE `attendance_info` (
  `aten_id` int(20) NOT NULL,
  `atn_user_id` int(20) NOT NULL,
  `in_time` datetime DEFAULT NULL,
  `out_time` datetime DEFAULT NULL,
  `total_duration` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `attendance_info`
--

INSERT INTO `attendance_info` (`aten_id`, `atn_user_id`, `in_time`, `out_time`, `total_duration`) VALUES
(1, 1, '2022-11-03 13:35:36', '2022-11-04 10:51:00', '21:15:24'),
(4, 28, '2022-11-07 15:15:31', '2022-11-07 15:32:41', '00:17:10');

-- --------------------------------------------------------

--
-- Table structure for table `route`
--

CREATE TABLE `route` (
  `route_id` int(3) NOT NULL,
  `description` text DEFAULT NULL,
  `iframe` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `route`
--

INSERT INTO `route` (`route_id`, `description`, `iframe`) VALUES
(1, 'từ Đại học Bách Khoa CS1 -> khu tập kết nước mía -> cơm tấm bãi rác -> Đại học Bách Khoa CS2', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d62702.11467241599!2d106.69844256313607!3d10.820328576620659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENNLCAyNjggTMO9IFRoxrDhu51uZyBLaeG7h3QsIFBoxrDhu51uZyAxNCwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!3m2!1d10.772075!2d106.65790179999999!4m5!1s0x31752f10c79a066d%3A0xcfd0fdd271213145!2zVHLhuqduIMSQw6xuaCBYdSwgRGlzdHJpY3QgMSwgSG8gQ2hpIE1pbmggQ2l0eQ!3m2!1d10.7613602!2d106.6901939!4m5!1s0x317528ccdd844d7b%3A0x98348ff541222412!2zQ8ahbSBU4bqlbSBC4bulaSBTw6BpIEfDsm4sIFRo4bqhY2ggVGjhu4sgVGhhbmgsIFRhbiBEaW5oLCBEaXN0cmljdCAxLCBIbyBDaGkgTWluaCBDaXR5!3m2!1d10.790965499999999!2d106.6914982!4m5!1s0x3174d958707f8685%3A0xd577177b5198597f!2zxJDhuqFpIGjhu41jIGLDoWNoIGtob2EgdGjhu6cgxJHhu6ljLCDEkMO0bmcgSMOyYSwgRMSpIEFuLCBCaW5oIER1b25n!3m2!1d10.8805587!2d106.8053767!5e0!3m2!1sen!2s!4v1669629128770!5m2!1sen!2s\" width=100% height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>'),
(2, 'từ sở thú -> nhà hát thành phố -> chợ 200 quận 4 -> Đại học Bách Khoa CS1', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d31356.280119206298!2d106.66737023578003!3d10.770274208837249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8OybiwgTmd1eeG7hW4gQuG7iW5oIEtoacOqbSwgQuG6v24gTmdow6ksIERpc3RyaWN0IDEsIEhvIENoaSBNaW5oIENpdHk!3m2!1d10.787543399999999!2d106.7052906!4m5!1s0x31752f4649e7ca29%3A0x55f531b6120cae3b!2zTmjDoCBow6F0IFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgQ8O0bmcgVHLGsOG7nW5nIExhbSBTxqFuLCBC4bq_biBOZ2jDqSwgRGlzdHJpY3QgMSwgSG8gQ2hpIE1pbmggQ2l0eQ!3m2!1d10.7766352!2d106.70316539999999!4m5!1s0x31752f702e8c68f1%3A0x1da62c0debb46cdd!2zQ2jhu6MgMjAwLCBOaMOgIFRo4budLCBYw7NtIENoaeG6v3UsIFBoxrDhu51uZyAxNCwgRGlzdHJpY3QgNCwgSG8gQ2hpIE1pbmggQ2l0eQ!3m2!1d10.7554992!2d106.7091744!4m5!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENNLCAyNjggTMO9IFRoxrDhu51uZyBLaeG7h3QsIFBoxrDhu51uZyAxNCwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!3m2!1d10.772075!2d106.65790179999999!5e0!3m2!1sen!2s!4v1669629195192!5m2!1sen!2s\" width=100% height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>'),
(3, 'từ Thuận Kiều plaza -> Vạn Hạnh mall -> Vincom Đồng Khởi -> Landmark 81 -> Đại học Bách Khoa CS2', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d62702.616962711516!2d106.69657371313109!3d10.817926877037655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x31752ef396b9f687%3A0xcf8197ce893cf544!2zVGh14bqtbiBLaeG7gXUsIERpc3RyaWN0IDUsIEhvIENoaSBNaW5oIENpdHk!3m2!1d10.7542602!2d106.6553812!4m5!1s0x31752edddb818ebf%3A0xfc8c05045f47a3d8!2zVmFuIEhhbmggTWFsbCwgU8awIFbhuqFuIEjhuqFuaCwgUGjGsOG7nW5nIDEwIChRdeG6rW4gMTApLCBEaXN0cmljdCAxMCwgSG8gQ2hpIE1pbmggQ2l0eQ!3m2!1d10.7705861!2d106.6694828!4m5!1s0x31752f4876c29a9b%3A0xd2c79768678d2142!2zVmluY29tIENlbnRlciwgTMO9IFThu7EgVHLhu41uZywgQuG6v24gTmdow6ksIERpc3RyaWN0IDEsIEhvIENoaSBNaW5oIENpdHk!3m2!1d10.778138199999999!2d106.7018186!4m5!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2zTGFuZG1hcmsgODEsIMSQaeG7h24gQmnDqm4gUGjhu6csIFZpbmhvbWVzIENlbnRyYWwgUGFyaywgUGjGsOG7nW5nIDIyLCBCw6xuaCBUaOG6oW5oLCBIbyBDaGkgTWluaCBDaXR5!3m2!1d10.794875099999999!2d106.72187149999999!4m5!1s0x3174d958707f8685%3A0xd577177b5198597f!2zxJDhuqFpIGjhu41jIGLDoWNoIGtob2EgdGjhu6cgxJHhu6ljLCDEkMO0bmcgSMOyYSwgRMSpIEFuLCBCaW5oIER1b25n!3m2!1d10.8805587!2d106.8053767!5e0!3m2!1sen!2s!4v1669629263562!5m2!1sen!2s\" width=100% height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>'),
(4, 'từ Bến xe Miền Đông -> Bến xe Miền Tây  -> đường Đồng Nai -> Bách Khoa CS1', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d125453.79555769102!2d106.60827303544339!3d10.701193089008006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x3175289741790d39%3A0x95362685e34cec2f!2zQuG6v24gWGUgTWnhu4FuIMSQw7RuZywgS2h1IGPDtG5nIG5naGnhu4dwLCBMb25nIEjhuq11LCBD4bqnbiBHaXXhu5ljLCBMb25nIEFu!3m2!1d10.630326799999999!2d106.7198523!4m5!1s0x31752dd07f25309f%3A0x626e2974cf8a49be!2zQuG6v24geGUgTWnhu4FuIFTDonksIEtpbmggRMawxqFuZyBWxrDGoW5nLCBBbiBM4bqhYywgQsOsbmggVMOibiwgSG8gQ2hpIE1pbmggQ2l0eQ!3m2!1d10.7409743!2d106.61888119999999!4m5!1s0x31752ee8b70c3117%3A0x2a2da7cd117f1f0c!2zQ2jhu6MgTmd1eeG7hW4gVHJpIFBoxrDGoW5nLCBOZ3V54buFbiBMw6JtLCBQaMaw4budbmcgNiwgRGlzdHJpY3QgMTAsIEhvIENoaSBNaW5oIENpdHk!3m2!1d10.7643682!2d106.66342329999999!4m5!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENNLCAyNjggTMO9IFRoxrDhu51uZyBLaeG7h3QsIFBoxrDhu51uZyAxNCwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!3m2!1d10.772075!2d106.65790179999999!5e0!3m2!1sen!2s!4v1669629426906!5m2!1sen!2s\" width=100% height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>'),
(5, 'Bệnh viện Chợ Rẫy -> Đại học Y Dược -> chợ dân sinh -> Bách Khoa CS2', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d62703.11068590905!2d106.69967361312615!3d10.815565627447622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x31752ef1efebf7d7%3A0x9014ce53b8910a58!2zQuG7h25oIHZp4buHbiBDaOG7oyBS4bqreSwgxJDGsOG7nW5nIE5ndXnhu4VuIENow60gVGhhbmgsIFBoxrDhu51uZyAxMiwgRGlzdHJpY3QgNSwgSG8gQ2hpIE1pbmggQ2l0eQ!3m2!1d10.7576886!2d106.65955419999999!4m5!1s0x31752ef09222b00b%3A0xb02f0a86479b4d8f!2zxJDhuqFpIGjhu41jIFkgRMaw4bujYyBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIEjhu5NuZyBCw6BuZywgcGjGsOG7nW5nIDExLCBEaXN0cmljdCA1LCBIbyBDaGkgTWluaCBDaXR5!3m2!1d10.7543674!2d106.66331269999999!4m5!1s0x31752fd569c06433%3A0x78cdb730b92a7036!2sCh%E1%BB%A3%20D%C3%A2n%20Sinh%2C%20Yersin%2C%20Nguyen%20Thai%20Binh%2C%20District%201%2C%20Ho%20Chi%20Minh%20City!3m2!1d10.7663731!2d106.69811639999999!4m5!1s0x3174d958707f8685%3A0xd577177b5198597f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIChjxqEgc-G7nyAyKSwgxJDDtG5nIEjDsmEsIETEqSBBbiwgQmluaCBEdW9uZw!3m2!1d10.8805587!2d106.8053767!5e0!3m2!1sen!2s!4v1669629516158!5m2!1sen!2s\" width=100% height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>');

-- --------------------------------------------------------

--
-- Table structure for table `task_info`
--

CREATE TABLE `task_info` (
  `task_id` int(50) NOT NULL,
  `t_title` varchar(120) NOT NULL,
  `t_start_time` datetime DEFAULT NULL,
  `t_end_time` datetime DEFAULT NULL,
  `t_user_id` int(20) NOT NULL,
  `v_id` int(50) NOT NULL,
  `route` int(3) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task_info`
--

INSERT INTO `task_info` (`task_id`, `t_title`, `t_start_time`, `t_end_time`, `t_user_id`, `v_id`, `route`, `status`) VALUES
(34, 'Trung tâm thương mại', '2022-12-09 12:00:00', '2022-12-17 12:00:00', 32, 8, 3, NULL),
(32, 'Trường Đại học', '2022-12-01 12:00:00', '2022-12-31 12:00:00', 31, 1, 1, NULL),
(33, 'Bệnh viện', '2022-12-09 12:00:00', '2022-12-10 12:00:00', 28, 9, 5, NULL),
(35, 'Bến xe', '2022-12-10 12:00:00', '2022-12-10 12:00:00', 30, 7, 4, NULL),
(36, 'Trung tâm thành phố', '2022-12-09 12:00:00', '2022-12-17 12:00:00', 33, 2, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `user_id` int(20) NOT NULL,
  `fullname` varchar(120) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `temp_password` varchar(100) DEFAULT NULL,
  `user_role` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='2';

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`user_id`, `fullname`, `username`, `email`, `password`, `temp_password`, `user_role`) VALUES
(1, 'Admin', 'admin', 'admin@gmail.com', '0192023a7bbd73250516f069df18b500', NULL, 1),
(28, 'Đinh Xuân Phú', 'phuxuan', 'test@gmail.com', '098f6bcd4621d373cade4e832627b4f6', '', 2),
(30, 'Trần Trí Đạt', 'TranTriDat', 'ttd@gmail.com', 'e6e89473d218ca11a3f71527f6b7b5b9', '3791729', 2),
(31, 'Lê Tuấn Hưng', 'LeTuanHung', 'lth@gmail.com', 'f868e20fa461aa37e531bcbdd759c862', '8131785', 2),
(32, 'Mai Hữu Nghĩa', 'MaiHuuNghia', 'mhn@gmail.com', '5575715cab6c58881b31ef50bee7fc9c', '9613414', 2),
(33, 'Dương Gia An', 'DuongGiaAn', 'dga@gmail.com', '5a2db066602f65b45d260c374936906d', '6979376', 2);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_info`
--

CREATE TABLE `vehicle_info` (
  `vehicle_id` int(50) NOT NULL,
  `vehicle_name` varchar(120) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0 = Not using, 1 = Using, 2 = Not available'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehicle_info`
--

INSERT INTO `vehicle_info` (`vehicle_id`, `vehicle_name`, `status`) VALUES
(1, 'Xe bò', 1),
(2, 'Xe ngựa', 1),
(7, 'Xe lừa', 1),
(6, 'Xe báo', 2),
(8, 'Xe lửa', 1),
(9, 'Xe taxi', 1),
(10, 'Xe la', 0),
(11, 'Xe cứu hỏa', 0),
(12, 'Xe rác', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_info`
--
ALTER TABLE `attendance_info`
  ADD PRIMARY KEY (`aten_id`);

--
-- Indexes for table `route`
--
ALTER TABLE `route`
  ADD PRIMARY KEY (`route_id`);

--
-- Indexes for table `task_info`
--
ALTER TABLE `task_info`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `route` (`route`);

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vehicle_info`
--
ALTER TABLE `vehicle_info`
  ADD PRIMARY KEY (`vehicle_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance_info`
--
ALTER TABLE `attendance_info`
  MODIFY `aten_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `task_info`
--
ALTER TABLE `task_info`
  MODIFY `task_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `vehicle_info`
--
ALTER TABLE `vehicle_info`
  MODIFY `vehicle_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
