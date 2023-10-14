import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    nombre: string;

    @Column({ unique: true })
    apellido: string;

    @Column({ nullable: true })
    telefono: string | null;

    @Column({ nullable: true })
    direccion: string | null;
}

