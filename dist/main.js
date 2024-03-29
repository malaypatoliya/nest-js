"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const PORT = 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NEST REST API')
        .setDescription('The NEST REST API description')
        .setVersion('1.0')
        .addTag('nest')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(PORT).then(() => {
        console.log(`=> Server running on port: ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map