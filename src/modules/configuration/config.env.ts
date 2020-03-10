import { Expose, plainToClass, Transform, Type } from "class-transformer";
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  validate,
} from "class-validator";
import { ENV_NAMES } from "../common/constants";

@Expose()
export class ConfigEnv {
  static async buildConfig(source = process.env): Promise<ConfigEnv> {
    const configEnv: ConfigEnv = plainToClass(ConfigEnv, source);
    const errors = await validate(configEnv, {
      whitelist: true,
      forbidUnknownValues: false,
    });
    if (errors.length) {
      throw new Error(`Config validation errors: ${errors}`);
    }

    return configEnv;
  }

  @IsDefined()
  @IsString()
  CORS_ORIGIN = "*";

  @IsDefined()
  @IsString()
  NODE_ENV: string;

  @IsDefined()
  @IsEnum(ENV_NAMES)
  ENV_NAME: ENV_NAMES;

  @IsDefined()
  @IsInt()
  @Type(() => Number)
  PORT: number;

  @IsDefined()
  @IsInt()
  @Type(() => Number)
  MICRO_PORT: number;

  @IsDefined()
  @IsString()
  TYPEORM_CONNECTION: string;

  @IsDefined()
  @IsString()
  TYPEORM_HOST: string;

  @IsDefined()
  @IsInt()
  @Type(() => Number)
  TYPEORM_PORT: number;

  @IsDefined()
  @IsString()
  TYPEORM_USERNAME: string;

  @IsDefined()
  @IsString()
  TYPEORM_PASSWORD: string;

  @IsDefined()
  @IsString()
  TYPEORM_DATABASE: string;

  @IsDefined()
  @IsString()
  TYPEORM_ENTITIES: string;

  @IsDefined()
  @IsBoolean()
  @Transform(val => val === "true")
  TYPEORM_SYNCHRONIZE: boolean;

  @IsDefined()
  @IsBoolean()
  @Transform(val => val === "true")
  TYPEORM_DROP_SCHEMA: boolean;
}
