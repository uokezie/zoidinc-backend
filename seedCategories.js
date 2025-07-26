const { MongoClient,ObjectId } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "Zoidinc";

const categories = [
  {
    "_id": "998a1da3-8655-4aee-b4da-2fe5bfae4039",
    "name": "Mobile & Accessories"
  },
  {
    "_id": "de5c7f01-c4a5-4d60-abd7-3a512acc73b9",
    "name": "Computers & Electronics"
  },
  {
    "_id": "30f53fcb-1a40-4781-9f72-88434f5d372d",
    "name": "Home & Entertainment"
  },
  {
    "_id": "89a0f9e2-3706-4813-931c-df31bfb714fe",
    "name": "Men's Fashion"
  },
  {
    "_id": "fe4de03d-d8ab-4906-b441-93a93c927bc7",
    "name": "Women's Fashion"
  },
  {
    "_id": "939099ac-f46d-442a-897e-718ab1bfd848",
    "name": "Kids' Fashion"
  }
];
const subcategories = [
  {
    "_id": "82d87a7e-2a01-4bb7-b093-61eccceb7b02",
    "name": "Smartphones",
    "categoryId": "998a1da3-8655-4aee-b4da-2fe5bfae4039"
  },
  {
    "_id": "7e6a810d-ee74-4341-aeae-d1731360370e",
    "name": "Chargers & Cables",
    "categoryId": "998a1da3-8655-4aee-b4da-2fe5bfae4039"
  },
  {
    "_id": "a4f779bf-8b88-41a8-b7f4-90c9beaa94d5",
    "name": "Phone Cases",
    "categoryId": "998a1da3-8655-4aee-b4da-2fe5bfae4039"
  },
  {
    "_id": "942e3dab-c890-4629-8385-69bc4831349e",
    "name": "Smartwatches",
    "categoryId": "998a1da3-8655-4aee-b4da-2fe5bfae4039"
  },
  {
    "_id": "e27ebd9f-3175-4026-940b-2fb566e87d81",
    "name": "Laptops",
    "categoryId": "de5c7f01-c4a5-4d60-abd7-3a512acc73b9"
  },
  {
    "_id": "ce4ab264-35f4-4bd5-ab08-dc53b8cfdf47",
    "name": "Desktop PCs",
    "categoryId": "de5c7f01-c4a5-4d60-abd7-3a512acc73b9"
  },
  {
    "_id": "eb293e87-43c3-453d-bdac-458ea9c081a9",
    "name": "Mouse, Keyboard, Drives",
    "categoryId": "de5c7f01-c4a5-4d60-abd7-3a512acc73b9"
  },
  {
    "_id": "f6a26ebe-3a7c-4ba4-963e-470fe6e3f97b",
    "name": "Televisions",
    "categoryId": "30f53fcb-1a40-4781-9f72-88434f5d372d"
  },
  {
    "_id": "77fbf897-6e53-4c4a-bd2b-57e7323a9d4f",
    "name": "Cameras",
    "categoryId": "30f53fcb-1a40-4781-9f72-88434f5d372d"
  },
  {
    "_id": "4da80a8d-7854-4fce-9a75-dbbe4ffff8c8",
    "name": "Game Consoles",
    "categoryId": "30f53fcb-1a40-4781-9f72-88434f5d372d"
  },
  {
    "_id": "1394e704-6bf9-4e51-8137-bd70f657efdd",
    "name": "Sound Systems / Headphones",
    "categoryId": "30f53fcb-1a40-4781-9f72-88434f5d372d"
  },
  {
    "_id": "76c42a90-1d54-494b-8579-6ac6f4531548",
    "name": "T-Shirts",
    "categoryId": "89a0f9e2-3706-4813-931c-df31bfb714fe"
  },
  {
    "_id": "c2018722-9a65-481c-bae8-be72a0293fcc",
    "name": "Shirts",
    "categoryId": "89a0f9e2-3706-4813-931c-df31bfb714fe"
  },
  {
    "_id": "817cb926-e902-4e94-913f-bec0c9f27ea2",
    "name": "Trousers",
    "categoryId": "89a0f9e2-3706-4813-931c-df31bfb714fe"
  },
  {
    "_id": "d7cc4a3f-0cf5-427c-af95-f6596bea24f0",
    "name": "Shorts",
    "categoryId": "89a0f9e2-3706-4813-931c-df31bfb714fe"
  },
  {
    "_id": "a5b8b65c-ff31-4070-b4dd-9c3c68119391",
    "name": "Shoes",
    "categoryId": "89a0f9e2-3706-4813-931c-df31bfb714fe"
  },
  {
    "_id": "931cfcab-6265-4af0-ae99-4c358ba78a0c",
    "name": "Suits",
    "categoryId": "89a0f9e2-3706-4813-931c-df31bfb714fe"
  },
  {
    "_id": "c1473948-5526-49b1-892c-7995b9d57bd2",
    "name": "Dresses",
    "categoryId": "fe4de03d-d8ab-4906-b441-93a93c927bc7"
  },
  {
    "_id": "c28e3686-4dd8-40da-a417-d9e47c03d03e",
    "name": "Skirts",
    "categoryId": "fe4de03d-d8ab-4906-b441-93a93c927bc7"
  },
  {
    "_id": "1e52a6e8-37f6-444a-bc51-2c4321e4b846",
    "name": "Tops",
    "categoryId": "fe4de03d-d8ab-4906-b441-93a93c927bc7"
  },
  {
    "_id": "1d359cee-00b4-4646-a083-14d48702942b",
    "name": "Blouses",
    "categoryId": "fe4de03d-d8ab-4906-b441-93a93c927bc7"
  },
  {
    "_id": "9b1b867f-b031-4e1a-a491-9d1dc3853913",
    "name": "Shoes",
    "categoryId": "fe4de03d-d8ab-4906-b441-93a93c927bc7"
  },
  {
    "_id": "503f7cdb-1424-41bd-9567-7046af024c95",
    "name": "Bags",
    "categoryId": "fe4de03d-d8ab-4906-b441-93a93c927bc7"
  },
  {
    "_id": "3ff93d67-8e31-41da-a3d8-5ef0b53a2b25",
    "name": "Baby Wear",
    "categoryId": "939099ac-f46d-442a-897e-718ab1bfd848"
  },
  {
    "_id": "1306f89d-c57e-4c51-9d6e-f0d34c48914e",
    "name": "Tops & Bottoms",
    "categoryId": "939099ac-f46d-442a-897e-718ab1bfd848"
  },
  {
    "_id": "ee7bf8bd-589f-4c58-8f00-cdaaa22c0537",
    "name": "Shoes",
    "categoryId": "939099ac-f46d-442a-897e-718ab1bfd848"
  },
  {
    "_id": "a759f318-dbb5-4f88-9060-47a82230bf08",
    "name": "Accessories",
    "categoryId": "939099ac-f46d-442a-897e-718ab1bfd848"
  }
];

// function toObjectId(id) {
//   return new client.bson.ObjectId(id.substring(0, 24).padEnd(24, '0'));
// }
function toObjectId(id) {
  return new ObjectId(id.substring(0, 24).padEnd(24, '0'));
}


async function seedData() {
  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection("categories").deleteMany({});
    await db.collection("subcategories").deleteMany({});
    await db.collection("categories").insertMany(categories); // ✅ No conversion
    await db.collection("subcategories").insertMany(subcategories); // ✅ No conversion
    console.log("✅ Categories and Subcategories seeded!");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await client.close();
  }
}


seedData();
