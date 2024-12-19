import { Controller , Get } from '@nestjs/common';

@Controller('testapi')
export class TestController {
    @Get()
    test(): string {
        return 'This is a test route India';
    }
}
