-- CreateTable
CREATE TABLE "Category" (
    "id_cat" SERIAL NOT NULL,
    "name_cat" VARCHAR(25) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id_cat")
);

-- CreateTable
CREATE TABLE "Product" (
    "id_product" SERIAL NOT NULL,
    "name_prod" VARCHAR(30) NOT NULL,
    "sold_unit" INTEGER NOT NULL DEFAULT 0,
    "in_stock" INTEGER NOT NULL,
    "expire_date" TIMESTAMP(3) NOT NULL,
    "id_cat" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "user_name" VARCHAR(20) NOT NULL,
    "email" VARBIT(50) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "password" VARCHAR(25) NOT NULL,
    "avatar" VARCHAR(50) NOT NULL DEFAULT 'src/uploads/images/unnamed.png',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "State" (
    "id_state" SERIAL NOT NULL,
    "state" VARCHAR(25) NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id_state")
);

-- CreateTable
CREATE TABLE "Order" (
    "id_order" SERIAL NOT NULL,
    "ubication" VARCHAR(50) NOT NULL,
    "name_op" VARCHAR(50) NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "begin_date" TIMESTAMP(3) NOT NULL,
    "arrive_date" TIMESTAMP(3) NOT NULL,
    "id_state" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id_order")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_cat_fkey" FOREIGN KEY ("id_cat") REFERENCES "Category"("id_cat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_id_state_fkey" FOREIGN KEY ("id_state") REFERENCES "State"("id_state") ON DELETE RESTRICT ON UPDATE CASCADE;
