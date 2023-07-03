let grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

var proto = grpc.loadPackageDefinition(
	protoLoader.loadSync("./protos/tag.proto", {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	})
);

const REMOTE_SERVER = "0.0.0.0:5001";

let client = new proto.example.NoteService(
	REMOTE_SERVER,
	grpc.credentials.createInsecure()
);

client.list({}, (error, notes) => {
	if (error) {
		console.log(error);
	}
});
