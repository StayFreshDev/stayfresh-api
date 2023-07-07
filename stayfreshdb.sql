-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 juil. 2023 à 17:19
-- Version du serveur :  10.11.2-MariaDB
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `stayfreshdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresses`
--

DROP TABLE IF EXISTS `adresses`;
CREATE TABLE IF NOT EXISTS `adresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street_number` varchar(255) NOT NULL,
  `street_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `postal_code` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `adresses`
--

INSERT INTO `adresses` (`id`, `street_number`, `street_name`, `description`, `postal_code`, `city`) VALUES
(1, '18', 'Hansen Estates', 'Voluptates perferendis exercitationem vero eos.', 80324, 'Boylehaven'),
(2, '29', 'Keshaun Stream', 'Velit similique cupiditate laborum.', 77682, 'Baumbachbury'),
(3, '76', 'Fritz Pines', 'Recusandae animi numquam vitae asperiores nisi vel accusamus molestiae.', 899, 'Madalynburgh'),
(4, '89', 'Marks Square', 'Repudiandae magni eveniet similique iste nihil consequatur nesciunt.', 65183, 'New Jacques'),
(5, '78', 'Gerald Harbors', 'Iure voluptatum a molestiae maiores natus eius.', 37414, 'Kendall'),
(6, '61', 'Satterfield Ville', 'Culpa temporibus dolore occaecati atque autem dolorum libero.', 52121, 'Williefurt'),
(7, '84', 'Hauck Glens', 'Odio quidem nisi molestiae fuga corporis ab.', 48743, 'North Shanel'),
(8, '62', 'Daugherty Points', 'Ex nulla voluptatibus molestias ex totam blanditiis expedita quis.', 37220, 'Bartellview'),
(9, '91', 'Andy Passage', 'Tempore nobis distinctio dolores vel nesciunt quis dolorem distinctio.', 16626, 'Rockwall'),
(10, '57', 'Kuphal Corners', 'Enim nulla quasi assumenda voluptatibus doloremque molestias distinctio cum fuga.', 36426, 'Fort Leonel'),
(11, '98', 'Anastacio Causeway', 'Quae maxime cumque ab.', 69382, 'Koeppmouth'),
(12, '60', 'Green Forks', 'Debitis culpa sed aperiam consequatur a.', 33902, 'Lake Horacioshire'),
(13, '98', 'O\'Kon Avenue', 'Eius fugiat aliquid asperiores.', 84185, 'St. Joseph'),
(14, '47', 'Smitham Radial', 'Sapiente quos itaque deleniti laudantium veniam esse.', 60573, 'Emmerichview'),
(15, '17', 'Littel Corner', 'Molestias debitis velit nostrum eum quis.', 68948, 'West Nelliestad'),
(16, '47', 'Michelle Roads', 'Accusamus voluptates voluptates at iure.', 71668, 'Adamsbury'),
(17, '58', 'Jarvis Rest', 'Deserunt hic voluptatum consequuntur facere earum.', 37911, 'East Lazaroville'),
(18, '41', 'Donald Alley', 'Tempore deserunt in consequuntur aliquam reprehenderit quidem nihil esse aliquam.', 79593, 'Tinley Park'),
(19, '56', 'Reyna Knoll', 'Autem minima vitae.', 1615, 'Wesley Chapel'),
(20, '33', 'Vivien Loop', 'Quas perspiciatis vel magnam quo dolorem eius totam.', 21347, 'New Maraburgh'),
(21, '63', 'Mckenna Fork', 'Modi deleniti recusandae error asperiores praesentium animi.', 64034, 'Eileenchester'),
(22, '40', 'Orn Shoal', 'Molestias et quam ad corporis ipsam dolorum suscipit minus.', 94591, 'New Laurenceside'),
(23, '50', 'Anastacio Brook', 'Ipsa corrupti voluptatem repellat magnam voluptates itaque.', 61847, 'Lake Elliott'),
(24, '97', 'Dino Extension', 'Omnis nostrum vero.', 23069, 'Estefaniastad'),
(25, '23', 'Parker Courts', 'Provident pariatur deserunt eos delectus.', 89057, 'North Genoveva'),
(26, '39', 'Celestino Prairie', 'Neque sapiente nihil deleniti.', 93732, 'Wallacestad'),
(27, '40', 'Trenton Points', 'Incidunt voluptates dolorum eum debitis excepturi explicabo.', 31361, 'Gutmannbury'),
(28, '64', 'Kuhn Garden', 'Omnis reiciendis est.', 11992, 'Reginaldfort'),
(29, '79', 'Myrtie Curve', 'Voluptas molestiae vitae quae consectetur dolor et placeat.', 3501, 'Lake Soniafort'),
(30, '3', 'Koelpin View', 'Repellendus excepturi qui possimus a voluptas eius.', 18177, 'Fort Monatown'),
(31, '34', 'Barrett Wells', 'Necessitatibus molestiae dignissimos quia eaque libero.', 2425, 'Alfredostad'),
(32, '68', 'Delbert Extension', 'Dignissimos libero accusamus reprehenderit dignissimos quasi ab voluptate.', 81367, 'Laguna Niguel'),
(33, '52', 'Sophia Skyway', 'Sint totam reiciendis.', 81477, 'Fort Nolan'),
(34, '74', 'Dare Route', 'Dignissimos repudiandae distinctio ut est eum tempore eligendi.', 93201, 'Deerfield Beach'),
(35, '18', 'Roob Centers', 'Similique saepe quibusdam nam.', 89784, 'New Heath'),
(36, '49', 'Misty Rue', 'Quam tempore incidunt mollitia doloremque cum animi suscipit.', 49914, 'Hollywood'),
(37, '89', 'Brycen Forge', 'Quibusdam ullam optio adipisci velit.', 42365, 'Bennycester'),
(38, '13', 'Ullrich Islands', 'Eveniet at voluptatibus animi ducimus magni unde vel culpa.', 80382, 'Brookhaven'),
(39, '16', 'Name Hills', 'Sunt aliquam autem.', 67296, 'Port Houstonton'),
(40, '14', 'Lottie Summit', 'Itaque unde provident cumque dolores minima sunt et.', 79607, 'Dallas'),
(41, '22', 'Hermiston Walks', 'Incidunt provident in harum tempora officiis dolorum eos ut iste.', 18384, 'New Antonetteside'),
(42, '85', 'Kevin Well', 'Exercitationem expedita provident veniam tempora.', 58323, 'Anderson'),
(43, '89', 'Halvorson Fields', 'Perferendis perspiciatis odio quis exercitationem nemo libero dignissimos.', 16761, 'North Sofia'),
(44, '79', 'Schinner Trail', 'Inventore odit quis.', 82396, 'Fort Salvatorestad'),
(45, '8', 'Rubie Courts', 'Aspernatur nesciunt culpa.', 32948, 'Altenwerthstad'),
(46, '56', 'Garth Stream', 'Sit cupiditate nam tempore quae omnis cum error et dolor.', 1149, 'Bell Gardens'),
(47, '82', 'Sydnee Cape', 'Mollitia alias laborum provident soluta pariatur eum non possimus.', 75915, 'West Alyshaside'),
(48, '27', 'Jadon Shoals', 'Sequi reiciendis nemo quibusdam.', 92868, 'Hawthorne'),
(49, '81', 'Feest Common', 'Asperiores soluta necessitatibus inventore dolorum aspernatur quibusdam.', 62726, 'Jastport'),
(50, '78', 'Beier Lake', 'Odio provident minus nostrum.', 82473, 'South Ethelynfurt'),
(51, '57', 'Angelita Wells', 'Ex error a eos natus in.', 98169, 'Helenestad'),
(52, '42', 'Ledner Turnpike', 'Minima incidunt molestias quaerat.', 88540, 'South Tyreekbury'),
(53, '85', 'Hilll Shores', 'Ab itaque repudiandae.', 98041, 'New Paige'),
(54, '38', 'Predovic Forks', 'Similique soluta voluptas excepturi rem.', 16363, 'West Pamela'),
(55, '9', 'Bernier Forks', 'Hic saepe voluptatem.', 52621, 'Loraineborough'),
(56, '60', 'Devyn Knoll', 'Sequi sed quo illo impedit in magnam reprehenderit maxime quibusdam.', 59053, 'Rauburgh'),
(57, '0', 'Dee Port', 'Aspernatur officiis corporis amet laboriosam amet ea aliquid officia.', 77848, 'New Bethel'),
(58, '91', 'Turner Rapids', 'Molestiae quibusdam quasi doloribus consectetur non pariatur iusto aliquid.', 24548, 'Lailafurt'),
(59, '78', 'Lakin Lakes', 'Aliquid repudiandae eligendi facere delectus voluptates repellendus ad nemo.', 70531, 'Wendytown'),
(60, '27', 'Lauryn Loop', 'Hic harum mollitia enim molestias debitis provident.', 208, 'Ewellstead'),
(61, '68', 'Ellen Mill', 'Id officia asperiores perferendis reiciendis quo possimus vitae adipisci.', 30016, 'Santa Ana'),
(62, '81', 'Germaine Underpass', 'Nobis occaecati optio quam in excepturi minima omnis illo impedit.', 1732, 'South Adeline'),
(63, '88', 'Archibald Estate', 'Totam ratione quasi explicabo.', 90071, 'Durganworth'),
(64, '27', 'Elda Lock', 'Nam quam reprehenderit asperiores commodi ipsam ducimus quia.', 74577, 'North Joy'),
(65, '39', 'Kautzer Ferry', 'Est qui doloremque minima ut corporis magni esse voluptate.', 38187, 'Santa Rosa'),
(66, '53', 'Bell Underpass', 'Sint totam doloribus.', 47067, 'Janesville'),
(67, '18', 'Amparo Station', 'Voluptatum aliquid qui asperiores dicta minus ab omnis.', 88552, 'Fort Watsonhaven'),
(68, '21', 'Bechtelar Glens', 'Perspiciatis doloribus consequatur mollitia.', 14151, 'Oxnard'),
(69, '74', 'Heidenreich Ridge', 'Debitis mollitia vel molestias.', 22169, 'Haleyberg'),
(70, '52', 'Hauck Route', 'Aliquam excepturi corporis.', 8527, 'Kuhiccester'),
(71, '27', 'Gottlieb Squares', 'Neque ab ullam alias numquam odit.', 26750, 'Frisco');

-- --------------------------------------------------------

--
-- Structure de la table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `durate` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`service_id`),
  KEY `service_id` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `establishements`
--

DROP TABLE IF EXISTS `establishements`;
CREATE TABLE IF NOT EXISTS `establishements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `siret` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `adress_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adress_id` (`adress_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `establishements`
--

INSERT INTO `establishements` (`id`, `siret`, `name`, `description`, `adress_id`) VALUES
(1, 30537836922649, 'Kiehn - Welch', 'Reprehenderit alias iure accusantium necessitatibus nulla.', 1),
(2, 92679354682959, 'Quitzon, Kuhlman and Mitchell', 'Dolores iusto culpa magnam odio nostrum architecto nisi commodi.', 2),
(3, 71551233529442, 'Watsica, Heller and Botsford', 'Quam aut debitis quis quasi eum tempore.', 3),
(4, 73023245497295, 'Hamill Group', 'Itaque beatae voluptatem suscipit ullam pariatur aperiam quidem recusandae maiores.', 4),
(5, 41028313725965, 'Zulauf, Conroy and Hilll', 'Voluptatum delectus sapiente et fugit in nemo molestiae quibusdam quae.', 5),
(6, 95826916857225, 'Tromp Group', 'Accusantium repellat ex aut id libero occaecati perspiciatis voluptas repudiandae.', 6),
(7, 80286104891270, 'Ebert Group', 'Asperiores eum perferendis.', 7),
(8, 76685594668729, 'Schowalter LLC', 'Hic ea quasi beatae enim illo velit tenetur dicta veritatis.', 8),
(9, 83467469139516, 'Stehr, McCullough and Wunsch', 'Fugiat facere dolores quo quibusdam corrupti animi nostrum.', 9),
(10, 73338592732756, 'Marquardt, Barton and Stoltenberg', 'Voluptatem unde ad quos labore.', 10),
(11, 79476919245081, 'Goodwin, Quigley and Kirlin', 'Sit mollitia voluptatum possimus.', 11),
(12, 71638612649536, 'Grant Group', 'Perspiciatis assumenda ex molestias facere optio tempore vitae minima.', 12),
(13, 37484005037533, 'Bergstrom, Swift and Sawayn', 'Accusantium porro aperiam quisquam dolor sit.', 13),
(14, 82118242281628, 'Green LLC', 'Sint dolor repellat optio dolorem cumque architecto.', 14),
(15, 33754731072264, 'Murray Inc', 'Minima quis maxime aliquid vel iure neque deserunt recusandae similique.', 15),
(16, 46365156712811, 'Wiegand, Carter and Littel', 'Cupiditate quasi et doloribus minima enim quos iste molestiae.', 16),
(17, 63548205707503, 'Schneider - Armstrong', 'Incidunt laudantium ipsa nemo.', 17),
(18, 36612734166548, 'Langworth, Krajcik and Zemlak', 'Adipisci itaque aliquam ab dolor quasi incidunt asperiores in.', 18),
(19, 92154883293244, 'Strosin, Kub and Bartell', 'Facilis optio numquam praesentium at reprehenderit fugiat omnis.', 19),
(20, 55588677520079, 'Metz - Casper', 'Maiores fugit eveniet mollitia.', 20),
(21, 46778331481609, 'Becker and Sons', 'Commodi voluptates laudantium neque.', 21),
(22, 14965148096373, 'D\'Amore - Turner', 'Similique explicabo facilis optio quas corrupti asperiores hic.', 22),
(23, 70980356873722, 'Kunde - Upton', 'Facilis distinctio ad optio distinctio quas neque adipisci velit ad.', 23),
(24, 65092016083671, 'Nader, Prohaska and Zieme', 'Perferendis architecto magni atque iste doloribus dolor.', 24),
(25, 68607613317309, 'Quigley, Tillman and Armstrong', 'Enim dolores accusantium illo eligendi incidunt at animi.', 25),
(26, 36474977763156, 'Beer - Borer', 'Amet similique repudiandae quod beatae.', 26),
(27, 67832362562914, 'Kautzer LLC', 'Laborum illo aliquid odio itaque sed laborum ex quos temporibus.', 27),
(28, 40139688942688, 'Nolan, Stiedemann and Goldner', 'Aperiam cum dignissimos maiores vero quidem fugit dolore unde.', 28),
(29, 70968569351222, 'Klocko - Koepp', 'Magni sunt necessitatibus odit.', 29),
(30, 11394764767526, 'Kunze - Schinner', 'Ex similique expedita facilis eum mollitia esse blanditiis.', 30);

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` int(11) NOT NULL,
  `comment` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `establishement_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`establishement_id`),
  KEY `establishement_id` (`establishement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `function` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `function`) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'establishement');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `salary_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `name`, `description`, `salary_count`) VALUES
(1, 'Coiffure', 'Se faire couper les cheveux', 0),
(2, 'Esthétique', 'Rendez-vous frais', 0);

-- --------------------------------------------------------

--
-- Structure de la table `services_establishements`
--

DROP TABLE IF EXISTS `services_establishements`;
CREATE TABLE IF NOT EXISTS `services_establishements` (
  `service_id` int(11) NOT NULL,
  `establishement_id` int(11) NOT NULL,
  UNIQUE KEY `service_is` (`service_id`,`establishement_id`),
  KEY `establishement_id` (`establishement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `mail`, `password`, `role_id`, `phone`) VALUES
(12, 'Rosamond', 'Lehner', 'Rosamond.Lehner@hotmail.com', 'iNpG5Hgk0w_XvZErawWN', 1, '06 27 15 21 69'),
(13, 'Jan', 'Bartoletti', 'Jan29@gmail.com', 'hlcrQK3u_52McM7QveiO', 2, '06 76 84 75 27'),
(14, 'Brody', 'Mraz', 'Brody.Mraz72@hotmail.com', 'N33W3bRvW93uAmxQYnaz', 1, '06 94 51 15 71'),
(15, 'Jany', 'Miller', 'Jany_Miller4@hotmail.com', 'kDoRM45SacoWoYmsWfw7', 2, '06 86 66 34 88'),
(16, 'Liliana', 'Hickle', 'Liliana_Hickle@gmail.com', 'xo4MttWuQTppSfkJ6NMH', 1, '06 47 08 55 47'),
(17, 'Emely', 'Bayer', 'Emely_Bayer62@yahoo.com', 'tNwH83oSGiPrR2Nme2X2', 1, '06 84 82 09 61'),
(18, 'Lysanne', 'Jakubowski', 'Lysanne.Jakubowski@gmail.com', 'h3vJPGnjME5kQGodrp7L', 2, '06 65 14 91 96'),
(19, 'Norene', 'Witting', 'Norene_Witting@gmail.com', '3z1UCba6FVAD2QgYg0mX', 1, '06 99 01 96 29'),
(20, 'Jasmin', 'Lehner', 'Jasmin_Lehner48@yahoo.com', 'isSBIKwtidXQ6jR9diIx', 2, '06 84 62 92 64'),
(21, 'Martina', 'Beier', 'Martina_Beier@hotmail.com', 'tqrur8fWl93HT7r1tJhN', 2, '06 57 73 49 52'),
(22, 'Einar', 'Abbott', 'Einar.Abbott@hotmail.com', 'jnQRLjrWpw9AXWrcfr6I', 2, '06 63 12 78 60'),
(23, 'Steve', 'Carter', 'Steve.Carter@yahoo.com', '62Y7yf5ZKEP8g_yh8wR1', 1, '06 53 62 77 09'),
(24, 'Margarette', 'Fahey', 'Margarette_Fahey80@hotmail.com', 'jiRfB4upfR31uVA7eyA_', 2, '06 75 63 86 31'),
(25, 'Coralie', 'Hahn', 'Coralie.Hahn@yahoo.com', 'xDWtMCAVydk3ISbNaerx', 1, '06 35 59 48 98'),
(26, 'Addison', 'Buckridge', 'Addison.Buckridge39@yahoo.com', 'K_9h90mIWyrITzdfv88o', 1, '06 10 63 21 95'),
(27, 'Anika', 'Lindgren', 'Anika21@hotmail.com', 'ofzrVVDJQZn1ZHOAxLvg', 1, '06 47 81 42 37'),
(28, 'Javon', 'Parker', 'Javon44@yahoo.com', 'p_FdYuSgSDKZVUplCftN', 1, '06 57 70 67 35'),
(29, 'Julio', 'Reilly', 'Julio.Reilly25@gmail.com', 'QlaJMgF2jBtfSZpy51CY', 2, '06 83 40 40 58'),
(30, 'Kaycee', 'Lynch', 'Kaycee90@gmail.com', 'rVw5IueqzAfseY_22O8Z', 1, '06 34 39 40 43'),
(31, 'Chris', 'Kunde', 'Chris14@yahoo.com', 'ih6YDd8QPekqLFbO050i', 2, '06 46 03 05 99'),
(32, 'Haven', 'Reichert', 'Haven24@hotmail.com', 'DFVof0g3cxBL9ON0vtMf', 1, '06 91 14 75 30'),
(33, 'Teresa', 'O\'Reilly', 'Teresa_OReilly@yahoo.com', 'GHIS0GAufM_o6vU2y38W', 1, '06 67 79 40 76'),
(34, 'Elijah', 'Ullrich', 'Elijah_Ullrich@hotmail.com', 'HL2uB6ZG6GMj4ChMT4nX', 2, '06 70 16 70 17'),
(35, 'Osborne', 'Rogahn', 'Osborne.Rogahn69@gmail.com', 'Rh9ldDeNX0igLGh5UZRa', 1, '06 09 21 10 09'),
(36, 'Dallas', 'Upton', 'Dallas.Upton@yahoo.com', 'v4vvm4UJahsPWj4pgw7t', 2, '06 82 70 16 97'),
(37, 'Harold', 'Schroeder', 'Harold.Schroeder35@hotmail.com', 'IIPLv4DirP7OizfKmwIx', 1, '06 86 22 48 84'),
(38, 'Jerrod', 'Tromp', 'Jerrod79@hotmail.com', 'KguZ65laOmIxRfggHlzl', 2, '06 51 68 12 61'),
(39, 'Gilberto', 'Harvey', 'Gilberto_Harvey45@gmail.com', 'LMn5mLOY9NV8hZEH8nQB', 2, '06 77 86 69 27'),
(40, 'Beaulah', 'Mayer', 'Beaulah_Mayer@gmail.com', 'MjvY4gdHNf20mJCu9ny8', 1, '06 38 28 82 51'),
(41, 'Christine', 'Breitenberg', 'Christine.Breitenberg@hotmail.com', 'aDqzm4VGwDVk_1RLEZgX', 2, '06 43 51 99 80'),
(42, 'Julianne', 'Franecki', 'Julianne.Franecki@yahoo.com', 'VrXa9KSltuVYWpG1jioE', 1, '06 38 69 48 23'),
(43, 'Orland', 'Emard', 'Orland.Emard90@gmail.com', 'aTzRs06Mrezx8PSkc4my', 2, '06 76 68 57 12'),
(44, 'Graciela', 'Howell', 'Graciela_Howell36@hotmail.com', 'DkbyZSNgy_U7aomhZ6zk', 1, '06 05 89 48 18'),
(45, 'Major', 'Treutel', 'Major_Treutel@hotmail.com', 'yMg2HKqLm6MLm3IVmpFV', 2, '06 83 81 00 13'),
(46, 'Mafalda', 'White', 'Mafalda.White@yahoo.com', 'OsfowUs1PU3ze_Kci_fz', 1, '06 88 05 29 02'),
(47, 'Damian', 'Herzog', 'Damian_Herzog12@gmail.com', 'pRIMZZyCUe3YjI0ChZr3', 1, '06 23 33 18 64'),
(48, 'Nasir', 'Feeney', 'Nasir_Feeney90@gmail.com', 'vEhyMhXe99kdSgK7HlY8', 1, '06 25 14 00 77'),
(49, 'Humberto', 'McCullough', 'Humberto8@hotmail.com', 'itbRxsSNZTMkt7Urn3Wv', 1, '06 96 00 63 79'),
(50, 'Mariah', 'Kohler', 'Mariah96@yahoo.com', 'w_OQXfkIfe3xTu3EZtLB', 1, '06 02 83 38 92'),
(51, 'Kristopher', 'Gislason', 'Kristopher.Gislason@hotmail.com', '9q20lhmtLrbWIVRsgiI6', 2, '06 11 12 15 00'),
(52, 'Missouri', 'Crist', 'Missouri95@gmail.com', 'mjPKO2ITwhDr7wrYH_te', 1, '06 45 57 42 34'),
(53, 'Bell', 'Windler', 'Bell_Windler@yahoo.com', 'BTfiKlsRxAwNKfBEvpcN', 1, '06 38 17 30 24'),
(54, 'Maynard', 'Lueilwitz', 'Maynard_Lueilwitz56@hotmail.com', '0siUp7fxTYVUp9lr35bf', 2, '06 57 10 69 18'),
(55, 'Bettie', 'Barton', 'Bettie0@gmail.com', 'Gdgar0ain3AAiYVzeRvw', 2, '06 21 00 92 57'),
(56, 'Ivah', 'McGlynn', 'Ivah43@hotmail.com', 'D04iBTzV5UiKuTlRMMOx', 1, '06 90 90 04 35'),
(57, 'Bernard', 'Rolfson', 'Bernard_Rolfson85@yahoo.com', 'MTBEqM1hBlf6QmInzSok', 1, '06 76 14 28 18'),
(58, 'Eloise', 'O\'Keefe', 'Eloise_OKeefe@gmail.com', 'W8iwiNqZlUp1Ch3dGsxk', 1, '06 83 82 23 38'),
(59, 'Rolando', 'Gleichner', 'Rolando.Gleichner4@yahoo.com', 'q1zj2RfG3i88ijBjPhok', 2, '06 78 56 37 33'),
(60, 'Lauryn', 'Kub', 'Lauryn92@hotmail.com', 'boMfNq2jBfskTiOqrutv', 2, '06 96 05 76 26'),
(61, 'Mariana', 'Harris', 'Mariana24@gmail.com', 'y99HkzBQvpvUdE57V8ri', 2, '06 32 96 76 03'),
(81, 'antoine', 'GUERIN', 'antoineg3802@gmail.com', '$2b$10$teer7De5HvH4G00MRnqOIOyDcW1/hqTsDyeRGLtN76ZltPav8OpdW', 2, '0652115516'),
(82, 'antoine', 'GUERIN', 'antoineg3802@gmail.com2', '$2b$10$u6QTLrYB3ceh.I/QTjrkyOF9YPIMHdu/z.j0f0JDW9nsv1QjvaEwu', 2, '0652115516'),
(83, 'antoine', 'GUERIN', 'antoineg3802@gmail.com21', '$2b$10$9km2WkRgcCNriTL1HlB8TOhxLIOe/8BAhP3PYGnpEId5yCK5/KjWC', 2, '0652115516'),
(84, 'antoine', 'GUERIN', 'antoineg3802@gmail.com212', '$2b$10$/.V8XWf7GAdYECPj1P7No.jm.euJ/dssbiIgJb17Ubv8w4/LtHH0m', 2, '0652115516'),
(85, 'antoine', 'GUERIN', 'antoineg3802@gmail.com2121', '$2b$10$AotUhRINZx0oKmqA2l7M9.YOA46o8WdD8XVjpNtIrmMdE2LFczl3.', 2, '0652115516'),
(86, 'antoine', 'GUERIN', 'antoineg3802@gmail.com21212', '$2b$10$5jNvP7ulE/YGQ/uzumVOIOlvcCc9jKKsvSxcQ0iCAiSP7AMfH/Y0y', 2, '0652115516');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `establishements`
--
ALTER TABLE `establishements`
  ADD CONSTRAINT `establishements_ibfk_1` FOREIGN KEY (`adress_id`) REFERENCES `adresses` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`establishement_id`) REFERENCES `establishements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `services_establishements`
--
ALTER TABLE `services_establishements`
  ADD CONSTRAINT `services_establishements_ibfk_1` FOREIGN KEY (`establishement_id`) REFERENCES `establishements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `services_establishements_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
