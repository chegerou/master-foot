CREATE TABLE `player` (
	`id` INT NOT NULL,
	`full_name` VARCHAR(256),
	`short_name` VARCHAR(256),
	`id_team` INT,
	PRIMARY KEY (`id`),
	INDEX `fk_team_id` (`id_team`),
	CONSTRAINT `fk_team_id` FOREIGN KEY (`id_team`) 
	REFERENCES `master-foot-dev`.`team` (`id`) 
	ON UPDATE NO ACTION ON DELETE NO ACTION);