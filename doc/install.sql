-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sex` varchar(2) DEFAULT null,
  `birthday` datetime DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `headIcon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'user1', '123456', '张三', '男士', '1991-12-12 00:00:00', '深圳市罗湖区', 'dadsa@163.com','37128937181','/images/head-icon1.jpg');
INSERT INTO `user` VALUES ('2', 'user2', '123456', '李四', '女士', '1991-12-12 00:00:00', '深圳市罗湖区', 'dadsa@163.com','37128937181','/images/head-icon2.jpg');
INSERT INTO `user` VALUES ('3', 'user3', '123456', '王五', '男士', '1991-12-12 00:00:00', '深圳市罗湖区', 'dadsa@163.com','37128937181','/images/head-icon4.jpg');
INSERT INTO `user` VALUES ('4', 'user4', '123456', '赵钱', '女士', '1991-12-12 00:00:00', '深圳市罗湖区', 'dadsa@163.com','37128937181','/images/head-icon3.jpg');