import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // don't want to create new app for every new test so make it beforeAll
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    it('Get', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    it('Post', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'test movie',
          year: 2020,
          genres: ['test'],
          director: 'Leonard Choo',
        })
        .expect(201);
    });

    it('Delete', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    it.todo('GET');
    it.todo('DELETE');
    it.todo('PATCH');
  });
});
