import { Injectable, NotFoundException } from '@nestjs/common';
import { ProveedorEntity } from './proveedor.entity';
import { CrearProveedorDto } from './dto/crear-proveedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModificarProveedorDto } from './dto/modificar-proveedor.dto';

@Injectable()
export class ProveedorService {
    constructor(@InjectRepository(ProveedorEntity) private Repositorioproveedores: Repository<ProveedorEntity>) { }

    async create(proveedor: CrearProveedorDto): Promise<ProveedorEntity> {
        const nuevoproveedor = this.Repositorioproveedores.create(proveedor);
        return this.Repositorioproveedores.save(nuevoproveedor);
    }

    async getAll(): Promise<ProveedorEntity[]> {
        try {
            const proveedores = await this.Repositorioproveedores.find();
            return proveedores;
        } catch (error) {
            throw new Error('No se pudieron listar los proveedores');
        }
    }

    async getById(id: number): Promise<ProveedorEntity> {
        try {
            const proveedor = await this.Repositorioproveedores.findOne({ where: { idProveedor: id } });

            if (!proveedor) {
                throw new NotFoundException('proveedor no encontrado');
            }

            return proveedor;
        } catch (error) {
            throw new Error('No se pudo obtener el proveedor');
        }
    }

    async update(id: number, proveedor: ModificarProveedorDto): Promise<ProveedorEntity> {
        try {
            const proveedorExistente = await this.Repositorioproveedores.findOne({ where: { idProveedor: id } });

            if (!proveedorExistente) {
                throw new NotFoundException('proveedor no encontrado');
            }

            this.Repositorioproveedores.merge(proveedorExistente, proveedor);

            const proveedorActualizado = await this.Repositorioproveedores.save(proveedorExistente);

            return proveedorActualizado;
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar el proveedor');
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const result = await this.Repositorioproveedores.delete(id);

            if (result.affected === 0) {
                throw new NotFoundException('Proveedor no encontrado');
            }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el Proveedor');
        }
    }

    
}
