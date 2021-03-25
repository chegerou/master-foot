CREATE TABLE `transfer` (
	`id` INT(10) NOT NULL,
	`origin` INT(10) NULL DEFAULT NULL,
	`destination` INT(10) NULL DEFAULT NULL,
	`moment` DATETIME NULL DEFAULT NULL,
	`id_player` INT(10) NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_origin_id` (`origin`),
	INDEX `fk_destination_id` (`destination`),
	INDEX `fk_player_id` (`id_player`),

	CONSTRAINT `fk_destination_id` 
    FOREIGN KEY (`destination`) REFERENCES `master-foot-dev`.`team` (`id`) 
    ON UPDATE NO ACTION ON DELETE NO ACTION,

	CONSTRAINT `fk_origin_id` 
    FOREIGN KEY (`origin`) REFERENCES `master-foot-dev`.`team` (`id`) 
    ON UPDATE NO ACTION ON DELETE NO ACTION,

	CONSTRAINT `fk_player_id` 
    FOREIGN KEY (`id_player`) REFERENCES `master-foot-dev`.`player` (`id`) 
    ON UPDATE NO ACTION ON DELETE NO ACTION
);