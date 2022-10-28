DROP TABLE IF EXISTS `genre`;  # 流派
CREATE TABLE `genre` (
	`classification` VARCHAR(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,  # 流派分类 1-宫廷; 2-现实; 3-浪漫; 4-田园; 5-边塞; 6-奇崛; 7-苦吟; 8-感伤;
	`poet_name` VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`classification`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `libai`;  # 李白
CREATE TABLE `libai` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `baijuyi`;  # 白居易
CREATE TABLE `baijuyi` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `dufu`;  # 杜甫
CREATE TABLE `dufu` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `wangwei`;  # 王维
CREATE TABLE `wangwei` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `liuyunxi`;  # 刘禹锡
CREATE TABLE `liuyunxi` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `lishangyin`;  # 李商隐
CREATE TABLE `lishangyin` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `dumu`;  # 杜牧
CREATE TABLE `dumu` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `hanyu`;  # 韩愈
CREATE TABLE `hanyu` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `liuzongyuan`;  # 柳宗元
CREATE TABLE `liuzongyuan` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `menghaoran`;  # 孟浩然
CREATE TABLE `menghaoran` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `yuanzhen`;  # 元稹
CREATE TABLE `yuanzhen` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `lihe`;  # 李贺
CREATE TABLE `lihe` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `wangbo`;  # 王勃
CREATE TABLE `wangbo` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `wangchangling`;  # 王昌龄
CREATE TABLE `wangchangling` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `wentingyun`;  # 温庭筠
CREATE TABLE `wentingyun` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `censen`;  # 岑参
CREATE TABLE `censen` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `weiyingwu`;  # 韦应物
CREATE TABLE `weiyingwu` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `jiadao`;  # 贾岛
CREATE TABLE `jiadao` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `liuchangqing`;  # 刘长卿
CREATE TABLE `liuchangqing` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `mengjiao`;  # 孟郊
CREATE TABLE `mengjiao` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `gaoshi`;  # 高适
CREATE TABLE `gaoshi` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `chenziang`;  # 陈子昂
CREATE TABLE `chenziang` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `wangzhihuan`;  # 王之涣
CREATE TABLE `wangzhihuan` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `luobinwang`;  # 骆宾王
CREATE TABLE `luobinwang` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `hezhizhang`;  # 贺知章
CREATE TABLE `hezhizhang` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `lulun`;  # 卢纶
CREATE TABLE `lulun` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `daishulun`;  # 戴叔伦
CREATE TABLE `daishulun` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `luzhaolin`;  # 卢照邻
CREATE TABLE `luzhaolin` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `xuetao`;  # 薛涛
CREATE TABLE `xuetao` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`content` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT = COMPACT;