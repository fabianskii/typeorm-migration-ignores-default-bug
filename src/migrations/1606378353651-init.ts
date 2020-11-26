import { MigrationInterface, QueryRunner } from "typeorm";

export class init1606378353651 implements MigrationInterface {
    name = 'init1606378353651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        //Approach  - comment this for workaround
        await queryRunner.query(`CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "tenant_id" text NOT NULL DEFAULT current_setting('coffee.current_tenant'::text), CONSTRAINT "PK_4d2K_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);


        // Workaround - uncomment this to apply workaround
        /*
        await queryRunner.query(`CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "tenant_id" text NOT NULL, CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);        await queryRunner.query(`
            CREATE OR REPLACE FUNCTION hotfix() RETURNS int AS $$
            BEGIN
                RETURN current_setting('coffee.current_tenant')::integer;
            END;
            $$ LANGUAGE plpgsql;
        `);
        await queryRunner.query(`ALTER TABLE "coffee" ALTER COLUMN "tenant_id" SET DEFAULT hotfix()`);
        */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE "coffee" ALTER COLUMN "tenant_id" SET DEFAULT current_setting('coffee.current_tenant'`);

        await queryRunner.query(`DROP TABLE "coffee"`);

    }

}

