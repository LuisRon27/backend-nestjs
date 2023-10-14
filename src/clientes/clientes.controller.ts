import { Controller, Post, Body, HttpStatus, HttpException, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CrearClienteDto } from './dto/crear-cliente.dto';
import { ModificarClienteDto } from './dto/modificar-cliente.dto';

@Controller('clientes')
export class ClientesController {

    constructor(private readonly clienteService: ClientesService) { }

    @Post()
    async createCliente(@Body() nuevoCliente: CrearClienteDto) {
        try {
            const clienteCreado = await this.clienteService.create(nuevoCliente);
            return { message: 'Cliente creado exitosamente', cliente: clienteCreado };
        } catch (error) {
            throw new HttpException('No se pudo crear el cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllClientes() {
        try {
            const clientes = await this.clienteService.getAll();
            return { message: 'Lista de clientes', clientes };
        } catch (error) {
            throw new HttpException('No se pudieron listar los clientes', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async getByCliente(@Param('id', ParseIntPipe) id: number) {
        try {
            const cliente = await this.clienteService.getById(id);
            return { message: 'Cliente encontrado', cliente };
        } catch (error) {
            throw new HttpException('No se pudo obtener el cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch(':id')
    async updateCliente(@Param('id', ParseIntPipe) id: number, @Body() clienteModificado: ModificarClienteDto) {
        try {
            const clienteActualizado = await this.clienteService.update(id, clienteModificado);
            return { message: 'Cliente modificado exitosamente', cliente: clienteActualizado };
        } catch (error) {
            throw new HttpException('No se pudo modificar el cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async deleteCliente(@Param('id', ParseIntPipe) id: number) {
        try {
            await this.clienteService.delete(id);
            return { message: 'Cliente eliminado exitosamente' };
        } catch (error) {
            throw new HttpException('No se pudo eliminar el cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
