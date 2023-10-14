import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { CrearClienteDto } from './dto/crear-cliente.dto';
import { ModificarClienteDto } from './dto/modificar-cliente.dto';

@Injectable()
export class ClientesService {

    constructor(@InjectRepository(ClienteEntity) private Repositorioclientes: Repository<ClienteEntity>) { }

    async create(cliente: CrearClienteDto): Promise<ClienteEntity> {
        const nuevocliente = this.Repositorioclientes.create(cliente);
        return this.Repositorioclientes.save(nuevocliente);
    }

    async getAll(): Promise<ClienteEntity[]> {
        try {
            const clientes = await this.Repositorioclientes.find();
            return clientes;
        } catch (error) {
            throw new Error('No se pudieron listar los clientes');
        }
    }

    async getById(id: number): Promise<ClienteEntity> {
        try {
            const cliente = await this.Repositorioclientes.findOne({ where: { idCliente: id } });

            if (!cliente) {
                throw new NotFoundException('Cliente no encontrado');
            }

            return cliente;
        } catch (error) {
            throw new Error('No se pudo obtener el cliente');
        }
    }

    async update(id: number, cliente: ModificarClienteDto): Promise<ClienteEntity> {
        try {
            const clienteExistente = await this.Repositorioclientes.findOne({ where: { idCliente: id } });

            if (!clienteExistente) {
                throw new NotFoundException('Cliente no encontrado');
            }

            this.Repositorioclientes.merge(clienteExistente, cliente);

            const clienteActualizado = await this.Repositorioclientes.save(clienteExistente);

            return clienteActualizado;
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar el cliente');
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const result = await this.Repositorioclientes.delete(id);

            if (result.affected === 0) {
                throw new NotFoundException('Cliente no encontrado');
            }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el cliente');
        }
    }

}
