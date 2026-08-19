// Run with: mongosh document_operations.js
const database = db.getSiblingDB("practical3");

const singleInsert = database.items.insertOne({ name: "laptop", price: 999 });
print("Single-document insert result:");
printjson(singleInsert);
print("Inserted item:");
printjson(database.items.find().toArray());

const multipleInsert = database.products.insertMany([
    { name: "phone", price: 500, stock: 10 },
    { name: "tablet", price: 300, stock: 5 },
    { name: "watch", price: 150, stock: 0 }
]);

print("Multiple-document insert result:");
printjson(multipleInsert);
print("Products:");
database.products.find().forEach(printjson);
