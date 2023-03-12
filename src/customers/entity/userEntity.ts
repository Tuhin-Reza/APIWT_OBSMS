import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { ProfileEntity } from "./profileEntity"


@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => ProfileEntity)
    @JoinColumn()
    profile: ProfileEntity;
}