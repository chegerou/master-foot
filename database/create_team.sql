CREATE TABLE `team` (
	`id` INT(10) NOT NULL,
	`full_name` VARCHAR(256),
	`short_name` VARCHAR(256),
	`founded` DATETIME NULL DEFAULT NULL,
	`id_stadium` INT(10) NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_stadium_id` (`id_stadium`),
	CONSTRAINT `fk_stadium_id` FOREIGN KEY (`id_stadium`) REFERENCES `master-foot-dev`.`stadium` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)