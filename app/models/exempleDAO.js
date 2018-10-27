function exempleDAO(connection){
	this._conn = connection('db_name');
}

exempleDAO.prototype.listSymbols = function()
{

	var conn = this._conn;
	var response = {
		cod: null,
		message: null,
	};

	return new Promise((resolve, reject) => {

		try {

			conn('db_name').open( function(err, mongoclient){

				mongoclient.collection("collection_name", function(err, collection){

					collection.distinct('FIELD', function( err, result){
					
						mongoclient.close();

						response.cod = 200;
						response.message = "Success Message";
						response.symbols = result;

						return resolve( response );

					});				

				});

			});

		} catch ( e ) {

			response.cod = 500;
			response.message = "Error ( Catch ): " + e.message;
			return resolve( response );

		}

	});

}

module.exports = function(){
	return exempleDAO;
}