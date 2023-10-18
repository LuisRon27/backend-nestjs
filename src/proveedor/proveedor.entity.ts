import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'proveedores' })
export class ProveedorEntity {
    @PrimaryGeneratedColumn()
    idProveedor: number;

    @Column()
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    localidad: string;

    @Column({ unique: true })
    dni: string;

    @Column({ nullable: true })
    telefono: string | null;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    observaciones: string | null;
}
