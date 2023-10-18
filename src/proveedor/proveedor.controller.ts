import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CrearProveedorDto } from './dto/crear-proveedor.dto';
import { ModificarProveedorDto } from './dto/modificar-proveedor.dto';

@Controller('proveedor')
export class ProveedorController {
    constructor(private readonly proveedorService: ProveedorService) { }

    @Post()
    async createProveedor(@Body() nuevoProveedor: CrearProveedorDto) {
        try {
            const proveedorCreado = await this.proveedorService.create(nuevoProveedor);
            return { message: 'Proveedor creado exitosamente', Proveedor: proveedorCreado };
        } catch (error) {
            throw new HttpException('No se pudo crear el Proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllProveedor() {
        try {
            const proveedores = await this.proveedorService.getAll();
            return { message: 'Lista de proveedores', proveedores };
        } catch (error) {
            throw new HttpException('No se pudieron listar los proveedores', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async getByProveedor(@Param('id', ParseIntPipe) id: number) {
        try {
            const proveedor = await this.proveedorService.getById(id);
            return { message: 'proveedor encontrado', proveedor };
        } catch (error) {
            throw new HttpException('No se pudo obtener el proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch(':id')
    async updateProveedor(@Param('id', ParseIntPipe) id: number, @Body() proveedorModificado: ModificarProveedorDto) {
        try {
            const proveedorActualizado = await this.proveedorService.update(id, proveedorModificado);
            return { message: 'proveedor modificado exitosamente', proveedor: proveedorActualizado };
        } catch (error) {
            throw new HttpException('No se pudo modificar el proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async deleteProveedor(@Param('id', ParseIntPipe) id: number) {
        try {
            await this.proveedorService.delete(id);
            return { message: 'Proveedor eliminado exitosamente' };
        } catch (error) {
            throw new HttpException('No se pudo eliminar el Proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
