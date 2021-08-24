import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
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
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, // converts data type on the fly
      }),
    );
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

    it('Post 201', () => {
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
    it('Post 400', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'test movie',
          year: 2020,
          genres: ['test'],
          director: 'Leonard Choo',
          badkey: 'baddata',
        })
        .expect(400);
    });
    it('Delete', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  // during testing, the server might think that this :id given is string
  // this is due to transform in our main.ts
  // thus, we should remember to transform just like main.ts
  describe('/movies/:id', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies/999').expect(404);
    });
    it('PATCH', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({ title: 'Updated Title' })
        .expect(200);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies/1').expect(200);
    });
  });
});
