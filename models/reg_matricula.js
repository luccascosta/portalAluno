var sequelize = require('./../libs/pg_db_connect');

var RegimeMatricula = sequelize.define('RegimeMatricula', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
    	field: 'descricao'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_reg_matric'
    });
RegimeMatricula.schema("acad");

module.exports = RegimeMatricula;