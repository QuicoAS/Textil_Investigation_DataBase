import { AplicacionesEntity } from 'src/aplicaciones/aplicaciones.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import aplicacionesData from '../../../data/aplicaciones';

export class AplicacionesSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const aplicacionesRepository = dataSource.getRepository(AplicacionesEntity);

    await aplicacionesRepository.save(aplicacionesData);

    console.log('Datos de Aplicaciones insertados');
  }
}
