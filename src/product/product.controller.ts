import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './dto/product.dto';
import { PartialProduct } from './dto/partialProduct.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('api/product')
export class ProductController {
    constructor(private productService:ProductService){}

    @ApiOperation({summary: 'Obtener todos los productos'})
    @Get()
    async getProducts(){
        return await this.productService.getProducts();
    }

    @ApiOperation({summary: 'Obtener todas las categorias'})
    @Get('/categories')
    async getCategories(){
        return await this.productService.getCategories();
    }

    @ApiOperation({summary: 'Crear un nuevo producto'})
    @ApiBody({type:Product, description:"Revisar las especificaciones de los productos"})
    @Post()
    async createProduct(@Body() product : Product){
        return await this.productService.createProduct(product);
    }

    @ApiOperation({summary: 'Crear una nueva categoría'})
    @ApiBody({type:String})
    @Post('/categories')
    async createCategory(@Body('category') category : string){
        return await this.productService.createCategory(category);
    }

    @ApiOperation({summary: 'Actualizar un producto'})
    @ApiBody({type:PartialProduct, description:'Revisar la documentacón de PartialProduct'})    
    @ApiParam({name:'id', description:'El serial id que tiene el producto', example:1, type:String})
    @Patch('/:id')
    async updateProduct(@Body() newProduct: PartialProduct, @Param('id') id : String){
        return await this.productService.updateProduct(newProduct, +id);
    }

    @ApiOperation({summary: 'Eliminar un producto'})
    @ApiParam({name:'id', description:'El serial id que tiene el producto', example:1, type:String})
    @Delete('/:id')
    async deleteProduct(@Param('id') id : String){
        return await this.productService.deleteProduct(+id);
    }

    @ApiOperation({summary: 'Eliminar una categoría'})
    @ApiParam({name:'id', description:'El serial id que tiene la categoría', example:1, type:String})
    @Delete('/categories/:id')
    async deleteCategory(@Param('id') id : String){
        return await this.productService.deleteCategory(+id);
    }

}