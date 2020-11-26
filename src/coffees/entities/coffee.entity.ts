import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({
        type: "text",
        nullable: false,
        // Approach - comment this for workaround
        default: () => "current_setting('coffee.current_tenant'::text)",
        
        // Workaround - uncomment this for workaround
        //default: () => "hotfix()",
    })
    tenant_id: string;

}