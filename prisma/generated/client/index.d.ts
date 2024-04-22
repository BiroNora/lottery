
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Five
 * 
 */
export type Five = $Result.DefaultSelection<Prisma.$FivePayload>
/**
 * Model Six
 * 
 */
export type Six = $Result.DefaultSelection<Prisma.$SixPayload>
/**
 * Model Skandi
 * 
 */
export type Skandi = $Result.DefaultSelection<Prisma.$SkandiPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fives
 * const fives = await prisma.five.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fives
   * const fives = await prisma.five.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.five`: Exposes CRUD operations for the **Five** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fives
    * const fives = await prisma.five.findMany()
    * ```
    */
  get five(): Prisma.FiveDelegate<ExtArgs>;

  /**
   * `prisma.six`: Exposes CRUD operations for the **Six** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sixes
    * const sixes = await prisma.six.findMany()
    * ```
    */
  get six(): Prisma.SixDelegate<ExtArgs>;

  /**
   * `prisma.skandi`: Exposes CRUD operations for the **Skandi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skandis
    * const skandis = await prisma.skandi.findMany()
    * ```
    */
  get skandi(): Prisma.SkandiDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Five: 'Five',
    Six: 'Six',
    Skandi: 'Skandi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'five' | 'six' | 'skandi'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Five: {
        payload: Prisma.$FivePayload<ExtArgs>
        fields: Prisma.FiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiveFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiveFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>
          }
          findFirst: {
            args: Prisma.FiveFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiveFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>
          }
          findMany: {
            args: Prisma.FiveFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>[]
          }
          create: {
            args: Prisma.FiveCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>
          }
          createMany: {
            args: Prisma.FiveCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FiveDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>
          }
          update: {
            args: Prisma.FiveUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>
          }
          deleteMany: {
            args: Prisma.FiveDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FiveUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FiveUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FivePayload>
          }
          aggregate: {
            args: Prisma.FiveAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFive>
          }
          groupBy: {
            args: Prisma.FiveGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiveCountArgs<ExtArgs>,
            result: $Utils.Optional<FiveCountAggregateOutputType> | number
          }
        }
      }
      Six: {
        payload: Prisma.$SixPayload<ExtArgs>
        fields: Prisma.SixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SixFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SixFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>
          }
          findFirst: {
            args: Prisma.SixFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SixFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>
          }
          findMany: {
            args: Prisma.SixFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>[]
          }
          create: {
            args: Prisma.SixCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>
          }
          createMany: {
            args: Prisma.SixCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SixDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>
          }
          update: {
            args: Prisma.SixUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>
          }
          deleteMany: {
            args: Prisma.SixDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SixUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SixUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SixPayload>
          }
          aggregate: {
            args: Prisma.SixAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSix>
          }
          groupBy: {
            args: Prisma.SixGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SixGroupByOutputType>[]
          }
          count: {
            args: Prisma.SixCountArgs<ExtArgs>,
            result: $Utils.Optional<SixCountAggregateOutputType> | number
          }
        }
      }
      Skandi: {
        payload: Prisma.$SkandiPayload<ExtArgs>
        fields: Prisma.SkandiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkandiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkandiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>
          }
          findFirst: {
            args: Prisma.SkandiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkandiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>
          }
          findMany: {
            args: Prisma.SkandiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>[]
          }
          create: {
            args: Prisma.SkandiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>
          }
          createMany: {
            args: Prisma.SkandiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SkandiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>
          }
          update: {
            args: Prisma.SkandiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>
          }
          deleteMany: {
            args: Prisma.SkandiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SkandiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SkandiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkandiPayload>
          }
          aggregate: {
            args: Prisma.SkandiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSkandi>
          }
          groupBy: {
            args: Prisma.SkandiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SkandiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkandiCountArgs<ExtArgs>,
            result: $Utils.Optional<SkandiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Five
   */

  export type AggregateFive = {
    _count: FiveCountAggregateOutputType | null
    _avg: FiveAvgAggregateOutputType | null
    _sum: FiveSumAggregateOutputType | null
    _min: FiveMinAggregateOutputType | null
    _max: FiveMaxAggregateOutputType | null
  }

  export type FiveAvgAggregateOutputType = {
    five_id: number | null
    f_year: number | null
    f_week: number | null
    f_total: number | null
    f_first: number | null
    f_second: number | null
    f_third: number | null
    f_fourth: number | null
    f_fifth: number | null
  }

  export type FiveSumAggregateOutputType = {
    five_id: number | null
    f_year: number | null
    f_week: number | null
    f_total: bigint | null
    f_first: number | null
    f_second: number | null
    f_third: number | null
    f_fourth: number | null
    f_fifth: number | null
  }

  export type FiveMinAggregateOutputType = {
    five_id: number | null
    f_year: number | null
    f_week: number | null
    f_total: bigint | null
    f_first: number | null
    f_second: number | null
    f_third: number | null
    f_fourth: number | null
    f_fifth: number | null
  }

  export type FiveMaxAggregateOutputType = {
    five_id: number | null
    f_year: number | null
    f_week: number | null
    f_total: bigint | null
    f_first: number | null
    f_second: number | null
    f_third: number | null
    f_fourth: number | null
    f_fifth: number | null
  }

  export type FiveCountAggregateOutputType = {
    five_id: number
    f_year: number
    f_week: number
    f_total: number
    f_first: number
    f_second: number
    f_third: number
    f_fourth: number
    f_fifth: number
    _all: number
  }


  export type FiveAvgAggregateInputType = {
    five_id?: true
    f_year?: true
    f_week?: true
    f_total?: true
    f_first?: true
    f_second?: true
    f_third?: true
    f_fourth?: true
    f_fifth?: true
  }

  export type FiveSumAggregateInputType = {
    five_id?: true
    f_year?: true
    f_week?: true
    f_total?: true
    f_first?: true
    f_second?: true
    f_third?: true
    f_fourth?: true
    f_fifth?: true
  }

  export type FiveMinAggregateInputType = {
    five_id?: true
    f_year?: true
    f_week?: true
    f_total?: true
    f_first?: true
    f_second?: true
    f_third?: true
    f_fourth?: true
    f_fifth?: true
  }

  export type FiveMaxAggregateInputType = {
    five_id?: true
    f_year?: true
    f_week?: true
    f_total?: true
    f_first?: true
    f_second?: true
    f_third?: true
    f_fourth?: true
    f_fifth?: true
  }

  export type FiveCountAggregateInputType = {
    five_id?: true
    f_year?: true
    f_week?: true
    f_total?: true
    f_first?: true
    f_second?: true
    f_third?: true
    f_fourth?: true
    f_fifth?: true
    _all?: true
  }

  export type FiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Five to aggregate.
     */
    where?: FiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fives to fetch.
     */
    orderBy?: FiveOrderByWithRelationInput | FiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fives
    **/
    _count?: true | FiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiveMaxAggregateInputType
  }

  export type GetFiveAggregateType<T extends FiveAggregateArgs> = {
        [P in keyof T & keyof AggregateFive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFive[P]>
      : GetScalarType<T[P], AggregateFive[P]>
  }




  export type FiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiveWhereInput
    orderBy?: FiveOrderByWithAggregationInput | FiveOrderByWithAggregationInput[]
    by: FiveScalarFieldEnum[] | FiveScalarFieldEnum
    having?: FiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiveCountAggregateInputType | true
    _avg?: FiveAvgAggregateInputType
    _sum?: FiveSumAggregateInputType
    _min?: FiveMinAggregateInputType
    _max?: FiveMaxAggregateInputType
  }

  export type FiveGroupByOutputType = {
    five_id: number
    f_year: number
    f_week: number
    f_total: bigint
    f_first: number
    f_second: number
    f_third: number
    f_fourth: number
    f_fifth: number
    _count: FiveCountAggregateOutputType | null
    _avg: FiveAvgAggregateOutputType | null
    _sum: FiveSumAggregateOutputType | null
    _min: FiveMinAggregateOutputType | null
    _max: FiveMaxAggregateOutputType | null
  }

  type GetFiveGroupByPayload<T extends FiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiveGroupByOutputType[P]>
            : GetScalarType<T[P], FiveGroupByOutputType[P]>
        }
      >
    >


  export type FiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    five_id?: boolean
    f_year?: boolean
    f_week?: boolean
    f_total?: boolean
    f_first?: boolean
    f_second?: boolean
    f_third?: boolean
    f_fourth?: boolean
    f_fifth?: boolean
  }, ExtArgs["result"]["five"]>

  export type FiveSelectScalar = {
    five_id?: boolean
    f_year?: boolean
    f_week?: boolean
    f_total?: boolean
    f_first?: boolean
    f_second?: boolean
    f_third?: boolean
    f_fourth?: boolean
    f_fifth?: boolean
  }


  export type $FivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Five"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      five_id: number
      f_year: number
      f_week: number
      f_total: bigint
      f_first: number
      f_second: number
      f_third: number
      f_fourth: number
      f_fifth: number
    }, ExtArgs["result"]["five"]>
    composites: {}
  }


  type FiveGetPayload<S extends boolean | null | undefined | FiveDefaultArgs> = $Result.GetResult<Prisma.$FivePayload, S>

  type FiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FiveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FiveCountAggregateInputType | true
    }

  export interface FiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Five'], meta: { name: 'Five' } }
    /**
     * Find zero or one Five that matches the filter.
     * @param {FiveFindUniqueArgs} args - Arguments to find a Five
     * @example
     * // Get one Five
     * const five = await prisma.five.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FiveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FiveFindUniqueArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Five that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FiveFindUniqueOrThrowArgs} args - Arguments to find a Five
     * @example
     * // Get one Five
     * const five = await prisma.five.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FiveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FiveFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Five that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveFindFirstArgs} args - Arguments to find a Five
     * @example
     * // Get one Five
     * const five = await prisma.five.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FiveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FiveFindFirstArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Five that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveFindFirstOrThrowArgs} args - Arguments to find a Five
     * @example
     * // Get one Five
     * const five = await prisma.five.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FiveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FiveFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fives
     * const fives = await prisma.five.findMany()
     * 
     * // Get first 10 Fives
     * const fives = await prisma.five.findMany({ take: 10 })
     * 
     * // Only select the `five_id`
     * const fiveWithFive_idOnly = await prisma.five.findMany({ select: { five_id: true } })
     * 
    **/
    findMany<T extends FiveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiveFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Five.
     * @param {FiveCreateArgs} args - Arguments to create a Five.
     * @example
     * // Create one Five
     * const Five = await prisma.five.create({
     *   data: {
     *     // ... data to create a Five
     *   }
     * })
     * 
    **/
    create<T extends FiveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FiveCreateArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fives.
     *     @param {FiveCreateManyArgs} args - Arguments to create many Fives.
     *     @example
     *     // Create many Fives
     *     const five = await prisma.five.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FiveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiveCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Five.
     * @param {FiveDeleteArgs} args - Arguments to delete one Five.
     * @example
     * // Delete one Five
     * const Five = await prisma.five.delete({
     *   where: {
     *     // ... filter to delete one Five
     *   }
     * })
     * 
    **/
    delete<T extends FiveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FiveDeleteArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Five.
     * @param {FiveUpdateArgs} args - Arguments to update one Five.
     * @example
     * // Update one Five
     * const five = await prisma.five.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FiveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FiveUpdateArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fives.
     * @param {FiveDeleteManyArgs} args - Arguments to filter Fives to delete.
     * @example
     * // Delete a few Fives
     * const { count } = await prisma.five.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FiveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiveDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fives
     * const five = await prisma.five.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FiveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FiveUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Five.
     * @param {FiveUpsertArgs} args - Arguments to update or create a Five.
     * @example
     * // Update or create a Five
     * const five = await prisma.five.upsert({
     *   create: {
     *     // ... data to create a Five
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Five we want to update
     *   }
     * })
    **/
    upsert<T extends FiveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FiveUpsertArgs<ExtArgs>>
    ): Prisma__FiveClient<$Result.GetResult<Prisma.$FivePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveCountArgs} args - Arguments to filter Fives to count.
     * @example
     * // Count the number of Fives
     * const count = await prisma.five.count({
     *   where: {
     *     // ... the filter for the Fives we want to count
     *   }
     * })
    **/
    count<T extends FiveCountArgs>(
      args?: Subset<T, FiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Five.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FiveAggregateArgs>(args: Subset<T, FiveAggregateArgs>): Prisma.PrismaPromise<GetFiveAggregateType<T>>

    /**
     * Group by Five.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiveGroupByArgs['orderBy'] }
        : { orderBy?: FiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Five model
   */
  readonly fields: FiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Five.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Five model
   */ 
  interface FiveFieldRefs {
    readonly five_id: FieldRef<"Five", 'Int'>
    readonly f_year: FieldRef<"Five", 'Int'>
    readonly f_week: FieldRef<"Five", 'Int'>
    readonly f_total: FieldRef<"Five", 'BigInt'>
    readonly f_first: FieldRef<"Five", 'Int'>
    readonly f_second: FieldRef<"Five", 'Int'>
    readonly f_third: FieldRef<"Five", 'Int'>
    readonly f_fourth: FieldRef<"Five", 'Int'>
    readonly f_fifth: FieldRef<"Five", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Five findUnique
   */
  export type FiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * Filter, which Five to fetch.
     */
    where: FiveWhereUniqueInput
  }


  /**
   * Five findUniqueOrThrow
   */
  export type FiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * Filter, which Five to fetch.
     */
    where: FiveWhereUniqueInput
  }


  /**
   * Five findFirst
   */
  export type FiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * Filter, which Five to fetch.
     */
    where?: FiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fives to fetch.
     */
    orderBy?: FiveOrderByWithRelationInput | FiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fives.
     */
    cursor?: FiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fives.
     */
    distinct?: FiveScalarFieldEnum | FiveScalarFieldEnum[]
  }


  /**
   * Five findFirstOrThrow
   */
  export type FiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * Filter, which Five to fetch.
     */
    where?: FiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fives to fetch.
     */
    orderBy?: FiveOrderByWithRelationInput | FiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fives.
     */
    cursor?: FiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fives.
     */
    distinct?: FiveScalarFieldEnum | FiveScalarFieldEnum[]
  }


  /**
   * Five findMany
   */
  export type FiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * Filter, which Fives to fetch.
     */
    where?: FiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fives to fetch.
     */
    orderBy?: FiveOrderByWithRelationInput | FiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fives.
     */
    cursor?: FiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fives.
     */
    skip?: number
    distinct?: FiveScalarFieldEnum | FiveScalarFieldEnum[]
  }


  /**
   * Five create
   */
  export type FiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * The data needed to create a Five.
     */
    data: XOR<FiveCreateInput, FiveUncheckedCreateInput>
  }


  /**
   * Five createMany
   */
  export type FiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fives.
     */
    data: FiveCreateManyInput | FiveCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Five update
   */
  export type FiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * The data needed to update a Five.
     */
    data: XOR<FiveUpdateInput, FiveUncheckedUpdateInput>
    /**
     * Choose, which Five to update.
     */
    where: FiveWhereUniqueInput
  }


  /**
   * Five updateMany
   */
  export type FiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fives.
     */
    data: XOR<FiveUpdateManyMutationInput, FiveUncheckedUpdateManyInput>
    /**
     * Filter which Fives to update
     */
    where?: FiveWhereInput
  }


  /**
   * Five upsert
   */
  export type FiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * The filter to search for the Five to update in case it exists.
     */
    where: FiveWhereUniqueInput
    /**
     * In case the Five found by the `where` argument doesn't exist, create a new Five with this data.
     */
    create: XOR<FiveCreateInput, FiveUncheckedCreateInput>
    /**
     * In case the Five was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiveUpdateInput, FiveUncheckedUpdateInput>
  }


  /**
   * Five delete
   */
  export type FiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
    /**
     * Filter which Five to delete.
     */
    where: FiveWhereUniqueInput
  }


  /**
   * Five deleteMany
   */
  export type FiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fives to delete
     */
    where?: FiveWhereInput
  }


  /**
   * Five without action
   */
  export type FiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Five
     */
    select?: FiveSelect<ExtArgs> | null
  }



  /**
   * Model Six
   */

  export type AggregateSix = {
    _count: SixCountAggregateOutputType | null
    _avg: SixAvgAggregateOutputType | null
    _sum: SixSumAggregateOutputType | null
    _min: SixMinAggregateOutputType | null
    _max: SixMaxAggregateOutputType | null
  }

  export type SixAvgAggregateOutputType = {
    six_id: number | null
    s_year: number | null
    s_week: number | null
    s_total: number | null
    s_first: number | null
    s_second: number | null
    s_third: number | null
    s_fourth: number | null
    s_fifth: number | null
    s_sixth: number | null
  }

  export type SixSumAggregateOutputType = {
    six_id: number | null
    s_year: number | null
    s_week: number | null
    s_total: bigint | null
    s_first: number | null
    s_second: number | null
    s_third: number | null
    s_fourth: number | null
    s_fifth: number | null
    s_sixth: number | null
  }

  export type SixMinAggregateOutputType = {
    six_id: number | null
    s_year: number | null
    s_week: number | null
    s_total: bigint | null
    s_first: number | null
    s_second: number | null
    s_third: number | null
    s_fourth: number | null
    s_fifth: number | null
    s_sixth: number | null
  }

  export type SixMaxAggregateOutputType = {
    six_id: number | null
    s_year: number | null
    s_week: number | null
    s_total: bigint | null
    s_first: number | null
    s_second: number | null
    s_third: number | null
    s_fourth: number | null
    s_fifth: number | null
    s_sixth: number | null
  }

  export type SixCountAggregateOutputType = {
    six_id: number
    s_year: number
    s_week: number
    s_total: number
    s_first: number
    s_second: number
    s_third: number
    s_fourth: number
    s_fifth: number
    s_sixth: number
    _all: number
  }


  export type SixAvgAggregateInputType = {
    six_id?: true
    s_year?: true
    s_week?: true
    s_total?: true
    s_first?: true
    s_second?: true
    s_third?: true
    s_fourth?: true
    s_fifth?: true
    s_sixth?: true
  }

  export type SixSumAggregateInputType = {
    six_id?: true
    s_year?: true
    s_week?: true
    s_total?: true
    s_first?: true
    s_second?: true
    s_third?: true
    s_fourth?: true
    s_fifth?: true
    s_sixth?: true
  }

  export type SixMinAggregateInputType = {
    six_id?: true
    s_year?: true
    s_week?: true
    s_total?: true
    s_first?: true
    s_second?: true
    s_third?: true
    s_fourth?: true
    s_fifth?: true
    s_sixth?: true
  }

  export type SixMaxAggregateInputType = {
    six_id?: true
    s_year?: true
    s_week?: true
    s_total?: true
    s_first?: true
    s_second?: true
    s_third?: true
    s_fourth?: true
    s_fifth?: true
    s_sixth?: true
  }

  export type SixCountAggregateInputType = {
    six_id?: true
    s_year?: true
    s_week?: true
    s_total?: true
    s_first?: true
    s_second?: true
    s_third?: true
    s_fourth?: true
    s_fifth?: true
    s_sixth?: true
    _all?: true
  }

  export type SixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Six to aggregate.
     */
    where?: SixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sixes to fetch.
     */
    orderBy?: SixOrderByWithRelationInput | SixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sixes
    **/
    _count?: true | SixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SixMaxAggregateInputType
  }

  export type GetSixAggregateType<T extends SixAggregateArgs> = {
        [P in keyof T & keyof AggregateSix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSix[P]>
      : GetScalarType<T[P], AggregateSix[P]>
  }




  export type SixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SixWhereInput
    orderBy?: SixOrderByWithAggregationInput | SixOrderByWithAggregationInput[]
    by: SixScalarFieldEnum[] | SixScalarFieldEnum
    having?: SixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SixCountAggregateInputType | true
    _avg?: SixAvgAggregateInputType
    _sum?: SixSumAggregateInputType
    _min?: SixMinAggregateInputType
    _max?: SixMaxAggregateInputType
  }

  export type SixGroupByOutputType = {
    six_id: number
    s_year: number
    s_week: number
    s_total: bigint
    s_first: number
    s_second: number
    s_third: number
    s_fourth: number
    s_fifth: number
    s_sixth: number
    _count: SixCountAggregateOutputType | null
    _avg: SixAvgAggregateOutputType | null
    _sum: SixSumAggregateOutputType | null
    _min: SixMinAggregateOutputType | null
    _max: SixMaxAggregateOutputType | null
  }

  type GetSixGroupByPayload<T extends SixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SixGroupByOutputType[P]>
            : GetScalarType<T[P], SixGroupByOutputType[P]>
        }
      >
    >


  export type SixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    six_id?: boolean
    s_year?: boolean
    s_week?: boolean
    s_total?: boolean
    s_first?: boolean
    s_second?: boolean
    s_third?: boolean
    s_fourth?: boolean
    s_fifth?: boolean
    s_sixth?: boolean
  }, ExtArgs["result"]["six"]>

  export type SixSelectScalar = {
    six_id?: boolean
    s_year?: boolean
    s_week?: boolean
    s_total?: boolean
    s_first?: boolean
    s_second?: boolean
    s_third?: boolean
    s_fourth?: boolean
    s_fifth?: boolean
    s_sixth?: boolean
  }


  export type $SixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Six"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      six_id: number
      s_year: number
      s_week: number
      s_total: bigint
      s_first: number
      s_second: number
      s_third: number
      s_fourth: number
      s_fifth: number
      s_sixth: number
    }, ExtArgs["result"]["six"]>
    composites: {}
  }


  type SixGetPayload<S extends boolean | null | undefined | SixDefaultArgs> = $Result.GetResult<Prisma.$SixPayload, S>

  type SixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SixFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SixCountAggregateInputType | true
    }

  export interface SixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Six'], meta: { name: 'Six' } }
    /**
     * Find zero or one Six that matches the filter.
     * @param {SixFindUniqueArgs} args - Arguments to find a Six
     * @example
     * // Get one Six
     * const six = await prisma.six.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SixFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SixFindUniqueArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Six that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SixFindUniqueOrThrowArgs} args - Arguments to find a Six
     * @example
     * // Get one Six
     * const six = await prisma.six.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SixFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SixFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Six that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixFindFirstArgs} args - Arguments to find a Six
     * @example
     * // Get one Six
     * const six = await prisma.six.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SixFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SixFindFirstArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Six that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixFindFirstOrThrowArgs} args - Arguments to find a Six
     * @example
     * // Get one Six
     * const six = await prisma.six.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SixFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SixFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sixes
     * const sixes = await prisma.six.findMany()
     * 
     * // Get first 10 Sixes
     * const sixes = await prisma.six.findMany({ take: 10 })
     * 
     * // Only select the `six_id`
     * const sixWithSix_idOnly = await prisma.six.findMany({ select: { six_id: true } })
     * 
    **/
    findMany<T extends SixFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SixFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Six.
     * @param {SixCreateArgs} args - Arguments to create a Six.
     * @example
     * // Create one Six
     * const Six = await prisma.six.create({
     *   data: {
     *     // ... data to create a Six
     *   }
     * })
     * 
    **/
    create<T extends SixCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SixCreateArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sixes.
     *     @param {SixCreateManyArgs} args - Arguments to create many Sixes.
     *     @example
     *     // Create many Sixes
     *     const six = await prisma.six.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SixCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SixCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Six.
     * @param {SixDeleteArgs} args - Arguments to delete one Six.
     * @example
     * // Delete one Six
     * const Six = await prisma.six.delete({
     *   where: {
     *     // ... filter to delete one Six
     *   }
     * })
     * 
    **/
    delete<T extends SixDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SixDeleteArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Six.
     * @param {SixUpdateArgs} args - Arguments to update one Six.
     * @example
     * // Update one Six
     * const six = await prisma.six.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SixUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SixUpdateArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sixes.
     * @param {SixDeleteManyArgs} args - Arguments to filter Sixes to delete.
     * @example
     * // Delete a few Sixes
     * const { count } = await prisma.six.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SixDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SixDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sixes
     * const six = await prisma.six.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SixUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SixUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Six.
     * @param {SixUpsertArgs} args - Arguments to update or create a Six.
     * @example
     * // Update or create a Six
     * const six = await prisma.six.upsert({
     *   create: {
     *     // ... data to create a Six
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Six we want to update
     *   }
     * })
    **/
    upsert<T extends SixUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SixUpsertArgs<ExtArgs>>
    ): Prisma__SixClient<$Result.GetResult<Prisma.$SixPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixCountArgs} args - Arguments to filter Sixes to count.
     * @example
     * // Count the number of Sixes
     * const count = await prisma.six.count({
     *   where: {
     *     // ... the filter for the Sixes we want to count
     *   }
     * })
    **/
    count<T extends SixCountArgs>(
      args?: Subset<T, SixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Six.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SixAggregateArgs>(args: Subset<T, SixAggregateArgs>): Prisma.PrismaPromise<GetSixAggregateType<T>>

    /**
     * Group by Six.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SixGroupByArgs['orderBy'] }
        : { orderBy?: SixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Six model
   */
  readonly fields: SixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Six.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Six model
   */ 
  interface SixFieldRefs {
    readonly six_id: FieldRef<"Six", 'Int'>
    readonly s_year: FieldRef<"Six", 'Int'>
    readonly s_week: FieldRef<"Six", 'Int'>
    readonly s_total: FieldRef<"Six", 'BigInt'>
    readonly s_first: FieldRef<"Six", 'Int'>
    readonly s_second: FieldRef<"Six", 'Int'>
    readonly s_third: FieldRef<"Six", 'Int'>
    readonly s_fourth: FieldRef<"Six", 'Int'>
    readonly s_fifth: FieldRef<"Six", 'Int'>
    readonly s_sixth: FieldRef<"Six", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Six findUnique
   */
  export type SixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * Filter, which Six to fetch.
     */
    where: SixWhereUniqueInput
  }


  /**
   * Six findUniqueOrThrow
   */
  export type SixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * Filter, which Six to fetch.
     */
    where: SixWhereUniqueInput
  }


  /**
   * Six findFirst
   */
  export type SixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * Filter, which Six to fetch.
     */
    where?: SixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sixes to fetch.
     */
    orderBy?: SixOrderByWithRelationInput | SixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sixes.
     */
    cursor?: SixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sixes.
     */
    distinct?: SixScalarFieldEnum | SixScalarFieldEnum[]
  }


  /**
   * Six findFirstOrThrow
   */
  export type SixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * Filter, which Six to fetch.
     */
    where?: SixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sixes to fetch.
     */
    orderBy?: SixOrderByWithRelationInput | SixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sixes.
     */
    cursor?: SixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sixes.
     */
    distinct?: SixScalarFieldEnum | SixScalarFieldEnum[]
  }


  /**
   * Six findMany
   */
  export type SixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * Filter, which Sixes to fetch.
     */
    where?: SixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sixes to fetch.
     */
    orderBy?: SixOrderByWithRelationInput | SixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sixes.
     */
    cursor?: SixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sixes.
     */
    skip?: number
    distinct?: SixScalarFieldEnum | SixScalarFieldEnum[]
  }


  /**
   * Six create
   */
  export type SixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * The data needed to create a Six.
     */
    data: XOR<SixCreateInput, SixUncheckedCreateInput>
  }


  /**
   * Six createMany
   */
  export type SixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sixes.
     */
    data: SixCreateManyInput | SixCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Six update
   */
  export type SixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * The data needed to update a Six.
     */
    data: XOR<SixUpdateInput, SixUncheckedUpdateInput>
    /**
     * Choose, which Six to update.
     */
    where: SixWhereUniqueInput
  }


  /**
   * Six updateMany
   */
  export type SixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sixes.
     */
    data: XOR<SixUpdateManyMutationInput, SixUncheckedUpdateManyInput>
    /**
     * Filter which Sixes to update
     */
    where?: SixWhereInput
  }


  /**
   * Six upsert
   */
  export type SixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * The filter to search for the Six to update in case it exists.
     */
    where: SixWhereUniqueInput
    /**
     * In case the Six found by the `where` argument doesn't exist, create a new Six with this data.
     */
    create: XOR<SixCreateInput, SixUncheckedCreateInput>
    /**
     * In case the Six was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SixUpdateInput, SixUncheckedUpdateInput>
  }


  /**
   * Six delete
   */
  export type SixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
    /**
     * Filter which Six to delete.
     */
    where: SixWhereUniqueInput
  }


  /**
   * Six deleteMany
   */
  export type SixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sixes to delete
     */
    where?: SixWhereInput
  }


  /**
   * Six without action
   */
  export type SixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Six
     */
    select?: SixSelect<ExtArgs> | null
  }



  /**
   * Model Skandi
   */

  export type AggregateSkandi = {
    _count: SkandiCountAggregateOutputType | null
    _avg: SkandiAvgAggregateOutputType | null
    _sum: SkandiSumAggregateOutputType | null
    _min: SkandiMinAggregateOutputType | null
    _max: SkandiMaxAggregateOutputType | null
  }

  export type SkandiAvgAggregateOutputType = {
    sk_id: number | null
    sk_year: number | null
    sk_week: number | null
    sk_total: number | null
    m_first: number | null
    m_second: number | null
    m_third: number | null
    m_fourth: number | null
    m_fifth: number | null
    m_sixth: number | null
    m_seventh: number | null
    h_first: number | null
    h_second: number | null
    h_third: number | null
    h_fourth: number | null
    h_fifth: number | null
    h_sixth: number | null
    h_seventh: number | null
  }

  export type SkandiSumAggregateOutputType = {
    sk_id: number | null
    sk_year: number | null
    sk_week: number | null
    sk_total: bigint | null
    m_first: number | null
    m_second: number | null
    m_third: number | null
    m_fourth: number | null
    m_fifth: number | null
    m_sixth: number | null
    m_seventh: number | null
    h_first: number | null
    h_second: number | null
    h_third: number | null
    h_fourth: number | null
    h_fifth: number | null
    h_sixth: number | null
    h_seventh: number | null
  }

  export type SkandiMinAggregateOutputType = {
    sk_id: number | null
    sk_year: number | null
    sk_week: number | null
    sk_total: bigint | null
    m_first: number | null
    m_second: number | null
    m_third: number | null
    m_fourth: number | null
    m_fifth: number | null
    m_sixth: number | null
    m_seventh: number | null
    h_first: number | null
    h_second: number | null
    h_third: number | null
    h_fourth: number | null
    h_fifth: number | null
    h_sixth: number | null
    h_seventh: number | null
  }

  export type SkandiMaxAggregateOutputType = {
    sk_id: number | null
    sk_year: number | null
    sk_week: number | null
    sk_total: bigint | null
    m_first: number | null
    m_second: number | null
    m_third: number | null
    m_fourth: number | null
    m_fifth: number | null
    m_sixth: number | null
    m_seventh: number | null
    h_first: number | null
    h_second: number | null
    h_third: number | null
    h_fourth: number | null
    h_fifth: number | null
    h_sixth: number | null
    h_seventh: number | null
  }

  export type SkandiCountAggregateOutputType = {
    sk_id: number
    sk_year: number
    sk_week: number
    sk_total: number
    m_first: number
    m_second: number
    m_third: number
    m_fourth: number
    m_fifth: number
    m_sixth: number
    m_seventh: number
    h_first: number
    h_second: number
    h_third: number
    h_fourth: number
    h_fifth: number
    h_sixth: number
    h_seventh: number
    _all: number
  }


  export type SkandiAvgAggregateInputType = {
    sk_id?: true
    sk_year?: true
    sk_week?: true
    sk_total?: true
    m_first?: true
    m_second?: true
    m_third?: true
    m_fourth?: true
    m_fifth?: true
    m_sixth?: true
    m_seventh?: true
    h_first?: true
    h_second?: true
    h_third?: true
    h_fourth?: true
    h_fifth?: true
    h_sixth?: true
    h_seventh?: true
  }

  export type SkandiSumAggregateInputType = {
    sk_id?: true
    sk_year?: true
    sk_week?: true
    sk_total?: true
    m_first?: true
    m_second?: true
    m_third?: true
    m_fourth?: true
    m_fifth?: true
    m_sixth?: true
    m_seventh?: true
    h_first?: true
    h_second?: true
    h_third?: true
    h_fourth?: true
    h_fifth?: true
    h_sixth?: true
    h_seventh?: true
  }

  export type SkandiMinAggregateInputType = {
    sk_id?: true
    sk_year?: true
    sk_week?: true
    sk_total?: true
    m_first?: true
    m_second?: true
    m_third?: true
    m_fourth?: true
    m_fifth?: true
    m_sixth?: true
    m_seventh?: true
    h_first?: true
    h_second?: true
    h_third?: true
    h_fourth?: true
    h_fifth?: true
    h_sixth?: true
    h_seventh?: true
  }

  export type SkandiMaxAggregateInputType = {
    sk_id?: true
    sk_year?: true
    sk_week?: true
    sk_total?: true
    m_first?: true
    m_second?: true
    m_third?: true
    m_fourth?: true
    m_fifth?: true
    m_sixth?: true
    m_seventh?: true
    h_first?: true
    h_second?: true
    h_third?: true
    h_fourth?: true
    h_fifth?: true
    h_sixth?: true
    h_seventh?: true
  }

  export type SkandiCountAggregateInputType = {
    sk_id?: true
    sk_year?: true
    sk_week?: true
    sk_total?: true
    m_first?: true
    m_second?: true
    m_third?: true
    m_fourth?: true
    m_fifth?: true
    m_sixth?: true
    m_seventh?: true
    h_first?: true
    h_second?: true
    h_third?: true
    h_fourth?: true
    h_fifth?: true
    h_sixth?: true
    h_seventh?: true
    _all?: true
  }

  export type SkandiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skandi to aggregate.
     */
    where?: SkandiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skandis to fetch.
     */
    orderBy?: SkandiOrderByWithRelationInput | SkandiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkandiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skandis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skandis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skandis
    **/
    _count?: true | SkandiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkandiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkandiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkandiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkandiMaxAggregateInputType
  }

  export type GetSkandiAggregateType<T extends SkandiAggregateArgs> = {
        [P in keyof T & keyof AggregateSkandi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkandi[P]>
      : GetScalarType<T[P], AggregateSkandi[P]>
  }




  export type SkandiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkandiWhereInput
    orderBy?: SkandiOrderByWithAggregationInput | SkandiOrderByWithAggregationInput[]
    by: SkandiScalarFieldEnum[] | SkandiScalarFieldEnum
    having?: SkandiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkandiCountAggregateInputType | true
    _avg?: SkandiAvgAggregateInputType
    _sum?: SkandiSumAggregateInputType
    _min?: SkandiMinAggregateInputType
    _max?: SkandiMaxAggregateInputType
  }

  export type SkandiGroupByOutputType = {
    sk_id: number
    sk_year: number
    sk_week: number
    sk_total: bigint
    m_first: number
    m_second: number
    m_third: number
    m_fourth: number
    m_fifth: number
    m_sixth: number
    m_seventh: number
    h_first: number
    h_second: number
    h_third: number
    h_fourth: number
    h_fifth: number
    h_sixth: number
    h_seventh: number
    _count: SkandiCountAggregateOutputType | null
    _avg: SkandiAvgAggregateOutputType | null
    _sum: SkandiSumAggregateOutputType | null
    _min: SkandiMinAggregateOutputType | null
    _max: SkandiMaxAggregateOutputType | null
  }

  type GetSkandiGroupByPayload<T extends SkandiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkandiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkandiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkandiGroupByOutputType[P]>
            : GetScalarType<T[P], SkandiGroupByOutputType[P]>
        }
      >
    >


  export type SkandiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sk_id?: boolean
    sk_year?: boolean
    sk_week?: boolean
    sk_total?: boolean
    m_first?: boolean
    m_second?: boolean
    m_third?: boolean
    m_fourth?: boolean
    m_fifth?: boolean
    m_sixth?: boolean
    m_seventh?: boolean
    h_first?: boolean
    h_second?: boolean
    h_third?: boolean
    h_fourth?: boolean
    h_fifth?: boolean
    h_sixth?: boolean
    h_seventh?: boolean
  }, ExtArgs["result"]["skandi"]>

  export type SkandiSelectScalar = {
    sk_id?: boolean
    sk_year?: boolean
    sk_week?: boolean
    sk_total?: boolean
    m_first?: boolean
    m_second?: boolean
    m_third?: boolean
    m_fourth?: boolean
    m_fifth?: boolean
    m_sixth?: boolean
    m_seventh?: boolean
    h_first?: boolean
    h_second?: boolean
    h_third?: boolean
    h_fourth?: boolean
    h_fifth?: boolean
    h_sixth?: boolean
    h_seventh?: boolean
  }


  export type $SkandiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skandi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sk_id: number
      sk_year: number
      sk_week: number
      sk_total: bigint
      m_first: number
      m_second: number
      m_third: number
      m_fourth: number
      m_fifth: number
      m_sixth: number
      m_seventh: number
      h_first: number
      h_second: number
      h_third: number
      h_fourth: number
      h_fifth: number
      h_sixth: number
      h_seventh: number
    }, ExtArgs["result"]["skandi"]>
    composites: {}
  }


  type SkandiGetPayload<S extends boolean | null | undefined | SkandiDefaultArgs> = $Result.GetResult<Prisma.$SkandiPayload, S>

  type SkandiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkandiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkandiCountAggregateInputType | true
    }

  export interface SkandiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skandi'], meta: { name: 'Skandi' } }
    /**
     * Find zero or one Skandi that matches the filter.
     * @param {SkandiFindUniqueArgs} args - Arguments to find a Skandi
     * @example
     * // Get one Skandi
     * const skandi = await prisma.skandi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkandiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SkandiFindUniqueArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Skandi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SkandiFindUniqueOrThrowArgs} args - Arguments to find a Skandi
     * @example
     * // Get one Skandi
     * const skandi = await prisma.skandi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkandiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkandiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Skandi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiFindFirstArgs} args - Arguments to find a Skandi
     * @example
     * // Get one Skandi
     * const skandi = await prisma.skandi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkandiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SkandiFindFirstArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Skandi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiFindFirstOrThrowArgs} args - Arguments to find a Skandi
     * @example
     * // Get one Skandi
     * const skandi = await prisma.skandi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkandiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkandiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Skandis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skandis
     * const skandis = await prisma.skandi.findMany()
     * 
     * // Get first 10 Skandis
     * const skandis = await prisma.skandi.findMany({ take: 10 })
     * 
     * // Only select the `sk_id`
     * const skandiWithSk_idOnly = await prisma.skandi.findMany({ select: { sk_id: true } })
     * 
    **/
    findMany<T extends SkandiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkandiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Skandi.
     * @param {SkandiCreateArgs} args - Arguments to create a Skandi.
     * @example
     * // Create one Skandi
     * const Skandi = await prisma.skandi.create({
     *   data: {
     *     // ... data to create a Skandi
     *   }
     * })
     * 
    **/
    create<T extends SkandiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SkandiCreateArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Skandis.
     *     @param {SkandiCreateManyArgs} args - Arguments to create many Skandis.
     *     @example
     *     // Create many Skandis
     *     const skandi = await prisma.skandi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkandiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkandiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skandi.
     * @param {SkandiDeleteArgs} args - Arguments to delete one Skandi.
     * @example
     * // Delete one Skandi
     * const Skandi = await prisma.skandi.delete({
     *   where: {
     *     // ... filter to delete one Skandi
     *   }
     * })
     * 
    **/
    delete<T extends SkandiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SkandiDeleteArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Skandi.
     * @param {SkandiUpdateArgs} args - Arguments to update one Skandi.
     * @example
     * // Update one Skandi
     * const skandi = await prisma.skandi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkandiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SkandiUpdateArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Skandis.
     * @param {SkandiDeleteManyArgs} args - Arguments to filter Skandis to delete.
     * @example
     * // Delete a few Skandis
     * const { count } = await prisma.skandi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkandiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkandiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skandis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skandis
     * const skandi = await prisma.skandi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkandiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SkandiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skandi.
     * @param {SkandiUpsertArgs} args - Arguments to update or create a Skandi.
     * @example
     * // Update or create a Skandi
     * const skandi = await prisma.skandi.upsert({
     *   create: {
     *     // ... data to create a Skandi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skandi we want to update
     *   }
     * })
    **/
    upsert<T extends SkandiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SkandiUpsertArgs<ExtArgs>>
    ): Prisma__SkandiClient<$Result.GetResult<Prisma.$SkandiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Skandis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiCountArgs} args - Arguments to filter Skandis to count.
     * @example
     * // Count the number of Skandis
     * const count = await prisma.skandi.count({
     *   where: {
     *     // ... the filter for the Skandis we want to count
     *   }
     * })
    **/
    count<T extends SkandiCountArgs>(
      args?: Subset<T, SkandiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkandiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skandi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkandiAggregateArgs>(args: Subset<T, SkandiAggregateArgs>): Prisma.PrismaPromise<GetSkandiAggregateType<T>>

    /**
     * Group by Skandi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkandiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkandiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkandiGroupByArgs['orderBy'] }
        : { orderBy?: SkandiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkandiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkandiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skandi model
   */
  readonly fields: SkandiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skandi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkandiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Skandi model
   */ 
  interface SkandiFieldRefs {
    readonly sk_id: FieldRef<"Skandi", 'Int'>
    readonly sk_year: FieldRef<"Skandi", 'Int'>
    readonly sk_week: FieldRef<"Skandi", 'Int'>
    readonly sk_total: FieldRef<"Skandi", 'BigInt'>
    readonly m_first: FieldRef<"Skandi", 'Int'>
    readonly m_second: FieldRef<"Skandi", 'Int'>
    readonly m_third: FieldRef<"Skandi", 'Int'>
    readonly m_fourth: FieldRef<"Skandi", 'Int'>
    readonly m_fifth: FieldRef<"Skandi", 'Int'>
    readonly m_sixth: FieldRef<"Skandi", 'Int'>
    readonly m_seventh: FieldRef<"Skandi", 'Int'>
    readonly h_first: FieldRef<"Skandi", 'Int'>
    readonly h_second: FieldRef<"Skandi", 'Int'>
    readonly h_third: FieldRef<"Skandi", 'Int'>
    readonly h_fourth: FieldRef<"Skandi", 'Int'>
    readonly h_fifth: FieldRef<"Skandi", 'Int'>
    readonly h_sixth: FieldRef<"Skandi", 'Int'>
    readonly h_seventh: FieldRef<"Skandi", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Skandi findUnique
   */
  export type SkandiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * Filter, which Skandi to fetch.
     */
    where: SkandiWhereUniqueInput
  }


  /**
   * Skandi findUniqueOrThrow
   */
  export type SkandiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * Filter, which Skandi to fetch.
     */
    where: SkandiWhereUniqueInput
  }


  /**
   * Skandi findFirst
   */
  export type SkandiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * Filter, which Skandi to fetch.
     */
    where?: SkandiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skandis to fetch.
     */
    orderBy?: SkandiOrderByWithRelationInput | SkandiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skandis.
     */
    cursor?: SkandiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skandis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skandis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skandis.
     */
    distinct?: SkandiScalarFieldEnum | SkandiScalarFieldEnum[]
  }


  /**
   * Skandi findFirstOrThrow
   */
  export type SkandiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * Filter, which Skandi to fetch.
     */
    where?: SkandiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skandis to fetch.
     */
    orderBy?: SkandiOrderByWithRelationInput | SkandiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skandis.
     */
    cursor?: SkandiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skandis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skandis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skandis.
     */
    distinct?: SkandiScalarFieldEnum | SkandiScalarFieldEnum[]
  }


  /**
   * Skandi findMany
   */
  export type SkandiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * Filter, which Skandis to fetch.
     */
    where?: SkandiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skandis to fetch.
     */
    orderBy?: SkandiOrderByWithRelationInput | SkandiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skandis.
     */
    cursor?: SkandiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skandis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skandis.
     */
    skip?: number
    distinct?: SkandiScalarFieldEnum | SkandiScalarFieldEnum[]
  }


  /**
   * Skandi create
   */
  export type SkandiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * The data needed to create a Skandi.
     */
    data: XOR<SkandiCreateInput, SkandiUncheckedCreateInput>
  }


  /**
   * Skandi createMany
   */
  export type SkandiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skandis.
     */
    data: SkandiCreateManyInput | SkandiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Skandi update
   */
  export type SkandiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * The data needed to update a Skandi.
     */
    data: XOR<SkandiUpdateInput, SkandiUncheckedUpdateInput>
    /**
     * Choose, which Skandi to update.
     */
    where: SkandiWhereUniqueInput
  }


  /**
   * Skandi updateMany
   */
  export type SkandiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skandis.
     */
    data: XOR<SkandiUpdateManyMutationInput, SkandiUncheckedUpdateManyInput>
    /**
     * Filter which Skandis to update
     */
    where?: SkandiWhereInput
  }


  /**
   * Skandi upsert
   */
  export type SkandiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * The filter to search for the Skandi to update in case it exists.
     */
    where: SkandiWhereUniqueInput
    /**
     * In case the Skandi found by the `where` argument doesn't exist, create a new Skandi with this data.
     */
    create: XOR<SkandiCreateInput, SkandiUncheckedCreateInput>
    /**
     * In case the Skandi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkandiUpdateInput, SkandiUncheckedUpdateInput>
  }


  /**
   * Skandi delete
   */
  export type SkandiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
    /**
     * Filter which Skandi to delete.
     */
    where: SkandiWhereUniqueInput
  }


  /**
   * Skandi deleteMany
   */
  export type SkandiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skandis to delete
     */
    where?: SkandiWhereInput
  }


  /**
   * Skandi without action
   */
  export type SkandiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skandi
     */
    select?: SkandiSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FiveScalarFieldEnum: {
    five_id: 'five_id',
    f_year: 'f_year',
    f_week: 'f_week',
    f_total: 'f_total',
    f_first: 'f_first',
    f_second: 'f_second',
    f_third: 'f_third',
    f_fourth: 'f_fourth',
    f_fifth: 'f_fifth'
  };

  export type FiveScalarFieldEnum = (typeof FiveScalarFieldEnum)[keyof typeof FiveScalarFieldEnum]


  export const SixScalarFieldEnum: {
    six_id: 'six_id',
    s_year: 's_year',
    s_week: 's_week',
    s_total: 's_total',
    s_first: 's_first',
    s_second: 's_second',
    s_third: 's_third',
    s_fourth: 's_fourth',
    s_fifth: 's_fifth',
    s_sixth: 's_sixth'
  };

  export type SixScalarFieldEnum = (typeof SixScalarFieldEnum)[keyof typeof SixScalarFieldEnum]


  export const SkandiScalarFieldEnum: {
    sk_id: 'sk_id',
    sk_year: 'sk_year',
    sk_week: 'sk_week',
    sk_total: 'sk_total',
    m_first: 'm_first',
    m_second: 'm_second',
    m_third: 'm_third',
    m_fourth: 'm_fourth',
    m_fifth: 'm_fifth',
    m_sixth: 'm_sixth',
    m_seventh: 'm_seventh',
    h_first: 'h_first',
    h_second: 'h_second',
    h_third: 'h_third',
    h_fourth: 'h_fourth',
    h_fifth: 'h_fifth',
    h_sixth: 'h_sixth',
    h_seventh: 'h_seventh'
  };

  export type SkandiScalarFieldEnum = (typeof SkandiScalarFieldEnum)[keyof typeof SkandiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FiveWhereInput = {
    AND?: FiveWhereInput | FiveWhereInput[]
    OR?: FiveWhereInput[]
    NOT?: FiveWhereInput | FiveWhereInput[]
    five_id?: IntFilter<"Five"> | number
    f_year?: IntFilter<"Five"> | number
    f_week?: IntFilter<"Five"> | number
    f_total?: BigIntFilter<"Five"> | bigint | number
    f_first?: IntFilter<"Five"> | number
    f_second?: IntFilter<"Five"> | number
    f_third?: IntFilter<"Five"> | number
    f_fourth?: IntFilter<"Five"> | number
    f_fifth?: IntFilter<"Five"> | number
  }

  export type FiveOrderByWithRelationInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
  }

  export type FiveWhereUniqueInput = Prisma.AtLeast<{
    five_id?: number
    AND?: FiveWhereInput | FiveWhereInput[]
    OR?: FiveWhereInput[]
    NOT?: FiveWhereInput | FiveWhereInput[]
    f_year?: IntFilter<"Five"> | number
    f_week?: IntFilter<"Five"> | number
    f_total?: BigIntFilter<"Five"> | bigint | number
    f_first?: IntFilter<"Five"> | number
    f_second?: IntFilter<"Five"> | number
    f_third?: IntFilter<"Five"> | number
    f_fourth?: IntFilter<"Five"> | number
    f_fifth?: IntFilter<"Five"> | number
  }, "five_id">

  export type FiveOrderByWithAggregationInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
    _count?: FiveCountOrderByAggregateInput
    _avg?: FiveAvgOrderByAggregateInput
    _max?: FiveMaxOrderByAggregateInput
    _min?: FiveMinOrderByAggregateInput
    _sum?: FiveSumOrderByAggregateInput
  }

  export type FiveScalarWhereWithAggregatesInput = {
    AND?: FiveScalarWhereWithAggregatesInput | FiveScalarWhereWithAggregatesInput[]
    OR?: FiveScalarWhereWithAggregatesInput[]
    NOT?: FiveScalarWhereWithAggregatesInput | FiveScalarWhereWithAggregatesInput[]
    five_id?: IntWithAggregatesFilter<"Five"> | number
    f_year?: IntWithAggregatesFilter<"Five"> | number
    f_week?: IntWithAggregatesFilter<"Five"> | number
    f_total?: BigIntWithAggregatesFilter<"Five"> | bigint | number
    f_first?: IntWithAggregatesFilter<"Five"> | number
    f_second?: IntWithAggregatesFilter<"Five"> | number
    f_third?: IntWithAggregatesFilter<"Five"> | number
    f_fourth?: IntWithAggregatesFilter<"Five"> | number
    f_fifth?: IntWithAggregatesFilter<"Five"> | number
  }

  export type SixWhereInput = {
    AND?: SixWhereInput | SixWhereInput[]
    OR?: SixWhereInput[]
    NOT?: SixWhereInput | SixWhereInput[]
    six_id?: IntFilter<"Six"> | number
    s_year?: IntFilter<"Six"> | number
    s_week?: IntFilter<"Six"> | number
    s_total?: BigIntFilter<"Six"> | bigint | number
    s_first?: IntFilter<"Six"> | number
    s_second?: IntFilter<"Six"> | number
    s_third?: IntFilter<"Six"> | number
    s_fourth?: IntFilter<"Six"> | number
    s_fifth?: IntFilter<"Six"> | number
    s_sixth?: IntFilter<"Six"> | number
  }

  export type SixOrderByWithRelationInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
  }

  export type SixWhereUniqueInput = Prisma.AtLeast<{
    six_id?: number
    AND?: SixWhereInput | SixWhereInput[]
    OR?: SixWhereInput[]
    NOT?: SixWhereInput | SixWhereInput[]
    s_year?: IntFilter<"Six"> | number
    s_week?: IntFilter<"Six"> | number
    s_total?: BigIntFilter<"Six"> | bigint | number
    s_first?: IntFilter<"Six"> | number
    s_second?: IntFilter<"Six"> | number
    s_third?: IntFilter<"Six"> | number
    s_fourth?: IntFilter<"Six"> | number
    s_fifth?: IntFilter<"Six"> | number
    s_sixth?: IntFilter<"Six"> | number
  }, "six_id">

  export type SixOrderByWithAggregationInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
    _count?: SixCountOrderByAggregateInput
    _avg?: SixAvgOrderByAggregateInput
    _max?: SixMaxOrderByAggregateInput
    _min?: SixMinOrderByAggregateInput
    _sum?: SixSumOrderByAggregateInput
  }

  export type SixScalarWhereWithAggregatesInput = {
    AND?: SixScalarWhereWithAggregatesInput | SixScalarWhereWithAggregatesInput[]
    OR?: SixScalarWhereWithAggregatesInput[]
    NOT?: SixScalarWhereWithAggregatesInput | SixScalarWhereWithAggregatesInput[]
    six_id?: IntWithAggregatesFilter<"Six"> | number
    s_year?: IntWithAggregatesFilter<"Six"> | number
    s_week?: IntWithAggregatesFilter<"Six"> | number
    s_total?: BigIntWithAggregatesFilter<"Six"> | bigint | number
    s_first?: IntWithAggregatesFilter<"Six"> | number
    s_second?: IntWithAggregatesFilter<"Six"> | number
    s_third?: IntWithAggregatesFilter<"Six"> | number
    s_fourth?: IntWithAggregatesFilter<"Six"> | number
    s_fifth?: IntWithAggregatesFilter<"Six"> | number
    s_sixth?: IntWithAggregatesFilter<"Six"> | number
  }

  export type SkandiWhereInput = {
    AND?: SkandiWhereInput | SkandiWhereInput[]
    OR?: SkandiWhereInput[]
    NOT?: SkandiWhereInput | SkandiWhereInput[]
    sk_id?: IntFilter<"Skandi"> | number
    sk_year?: IntFilter<"Skandi"> | number
    sk_week?: IntFilter<"Skandi"> | number
    sk_total?: BigIntFilter<"Skandi"> | bigint | number
    m_first?: IntFilter<"Skandi"> | number
    m_second?: IntFilter<"Skandi"> | number
    m_third?: IntFilter<"Skandi"> | number
    m_fourth?: IntFilter<"Skandi"> | number
    m_fifth?: IntFilter<"Skandi"> | number
    m_sixth?: IntFilter<"Skandi"> | number
    m_seventh?: IntFilter<"Skandi"> | number
    h_first?: IntFilter<"Skandi"> | number
    h_second?: IntFilter<"Skandi"> | number
    h_third?: IntFilter<"Skandi"> | number
    h_fourth?: IntFilter<"Skandi"> | number
    h_fifth?: IntFilter<"Skandi"> | number
    h_sixth?: IntFilter<"Skandi"> | number
    h_seventh?: IntFilter<"Skandi"> | number
  }

  export type SkandiOrderByWithRelationInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
  }

  export type SkandiWhereUniqueInput = Prisma.AtLeast<{
    sk_id?: number
    AND?: SkandiWhereInput | SkandiWhereInput[]
    OR?: SkandiWhereInput[]
    NOT?: SkandiWhereInput | SkandiWhereInput[]
    sk_year?: IntFilter<"Skandi"> | number
    sk_week?: IntFilter<"Skandi"> | number
    sk_total?: BigIntFilter<"Skandi"> | bigint | number
    m_first?: IntFilter<"Skandi"> | number
    m_second?: IntFilter<"Skandi"> | number
    m_third?: IntFilter<"Skandi"> | number
    m_fourth?: IntFilter<"Skandi"> | number
    m_fifth?: IntFilter<"Skandi"> | number
    m_sixth?: IntFilter<"Skandi"> | number
    m_seventh?: IntFilter<"Skandi"> | number
    h_first?: IntFilter<"Skandi"> | number
    h_second?: IntFilter<"Skandi"> | number
    h_third?: IntFilter<"Skandi"> | number
    h_fourth?: IntFilter<"Skandi"> | number
    h_fifth?: IntFilter<"Skandi"> | number
    h_sixth?: IntFilter<"Skandi"> | number
    h_seventh?: IntFilter<"Skandi"> | number
  }, "sk_id">

  export type SkandiOrderByWithAggregationInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
    _count?: SkandiCountOrderByAggregateInput
    _avg?: SkandiAvgOrderByAggregateInput
    _max?: SkandiMaxOrderByAggregateInput
    _min?: SkandiMinOrderByAggregateInput
    _sum?: SkandiSumOrderByAggregateInput
  }

  export type SkandiScalarWhereWithAggregatesInput = {
    AND?: SkandiScalarWhereWithAggregatesInput | SkandiScalarWhereWithAggregatesInput[]
    OR?: SkandiScalarWhereWithAggregatesInput[]
    NOT?: SkandiScalarWhereWithAggregatesInput | SkandiScalarWhereWithAggregatesInput[]
    sk_id?: IntWithAggregatesFilter<"Skandi"> | number
    sk_year?: IntWithAggregatesFilter<"Skandi"> | number
    sk_week?: IntWithAggregatesFilter<"Skandi"> | number
    sk_total?: BigIntWithAggregatesFilter<"Skandi"> | bigint | number
    m_first?: IntWithAggregatesFilter<"Skandi"> | number
    m_second?: IntWithAggregatesFilter<"Skandi"> | number
    m_third?: IntWithAggregatesFilter<"Skandi"> | number
    m_fourth?: IntWithAggregatesFilter<"Skandi"> | number
    m_fifth?: IntWithAggregatesFilter<"Skandi"> | number
    m_sixth?: IntWithAggregatesFilter<"Skandi"> | number
    m_seventh?: IntWithAggregatesFilter<"Skandi"> | number
    h_first?: IntWithAggregatesFilter<"Skandi"> | number
    h_second?: IntWithAggregatesFilter<"Skandi"> | number
    h_third?: IntWithAggregatesFilter<"Skandi"> | number
    h_fourth?: IntWithAggregatesFilter<"Skandi"> | number
    h_fifth?: IntWithAggregatesFilter<"Skandi"> | number
    h_sixth?: IntWithAggregatesFilter<"Skandi"> | number
    h_seventh?: IntWithAggregatesFilter<"Skandi"> | number
  }

  export type FiveCreateInput = {
    f_year: number
    f_week: number
    f_total: bigint | number
    f_first: number
    f_second: number
    f_third: number
    f_fourth: number
    f_fifth: number
  }

  export type FiveUncheckedCreateInput = {
    five_id?: number
    f_year: number
    f_week: number
    f_total: bigint | number
    f_first: number
    f_second: number
    f_third: number
    f_fourth: number
    f_fifth: number
  }

  export type FiveUpdateInput = {
    f_year?: IntFieldUpdateOperationsInput | number
    f_week?: IntFieldUpdateOperationsInput | number
    f_total?: BigIntFieldUpdateOperationsInput | bigint | number
    f_first?: IntFieldUpdateOperationsInput | number
    f_second?: IntFieldUpdateOperationsInput | number
    f_third?: IntFieldUpdateOperationsInput | number
    f_fourth?: IntFieldUpdateOperationsInput | number
    f_fifth?: IntFieldUpdateOperationsInput | number
  }

  export type FiveUncheckedUpdateInput = {
    five_id?: IntFieldUpdateOperationsInput | number
    f_year?: IntFieldUpdateOperationsInput | number
    f_week?: IntFieldUpdateOperationsInput | number
    f_total?: BigIntFieldUpdateOperationsInput | bigint | number
    f_first?: IntFieldUpdateOperationsInput | number
    f_second?: IntFieldUpdateOperationsInput | number
    f_third?: IntFieldUpdateOperationsInput | number
    f_fourth?: IntFieldUpdateOperationsInput | number
    f_fifth?: IntFieldUpdateOperationsInput | number
  }

  export type FiveCreateManyInput = {
    five_id?: number
    f_year: number
    f_week: number
    f_total: bigint | number
    f_first: number
    f_second: number
    f_third: number
    f_fourth: number
    f_fifth: number
  }

  export type FiveUpdateManyMutationInput = {
    f_year?: IntFieldUpdateOperationsInput | number
    f_week?: IntFieldUpdateOperationsInput | number
    f_total?: BigIntFieldUpdateOperationsInput | bigint | number
    f_first?: IntFieldUpdateOperationsInput | number
    f_second?: IntFieldUpdateOperationsInput | number
    f_third?: IntFieldUpdateOperationsInput | number
    f_fourth?: IntFieldUpdateOperationsInput | number
    f_fifth?: IntFieldUpdateOperationsInput | number
  }

  export type FiveUncheckedUpdateManyInput = {
    five_id?: IntFieldUpdateOperationsInput | number
    f_year?: IntFieldUpdateOperationsInput | number
    f_week?: IntFieldUpdateOperationsInput | number
    f_total?: BigIntFieldUpdateOperationsInput | bigint | number
    f_first?: IntFieldUpdateOperationsInput | number
    f_second?: IntFieldUpdateOperationsInput | number
    f_third?: IntFieldUpdateOperationsInput | number
    f_fourth?: IntFieldUpdateOperationsInput | number
    f_fifth?: IntFieldUpdateOperationsInput | number
  }

  export type SixCreateInput = {
    s_year: number
    s_week: number
    s_total: bigint | number
    s_first: number
    s_second: number
    s_third: number
    s_fourth: number
    s_fifth: number
    s_sixth: number
  }

  export type SixUncheckedCreateInput = {
    six_id?: number
    s_year: number
    s_week: number
    s_total: bigint | number
    s_first: number
    s_second: number
    s_third: number
    s_fourth: number
    s_fifth: number
    s_sixth: number
  }

  export type SixUpdateInput = {
    s_year?: IntFieldUpdateOperationsInput | number
    s_week?: IntFieldUpdateOperationsInput | number
    s_total?: BigIntFieldUpdateOperationsInput | bigint | number
    s_first?: IntFieldUpdateOperationsInput | number
    s_second?: IntFieldUpdateOperationsInput | number
    s_third?: IntFieldUpdateOperationsInput | number
    s_fourth?: IntFieldUpdateOperationsInput | number
    s_fifth?: IntFieldUpdateOperationsInput | number
    s_sixth?: IntFieldUpdateOperationsInput | number
  }

  export type SixUncheckedUpdateInput = {
    six_id?: IntFieldUpdateOperationsInput | number
    s_year?: IntFieldUpdateOperationsInput | number
    s_week?: IntFieldUpdateOperationsInput | number
    s_total?: BigIntFieldUpdateOperationsInput | bigint | number
    s_first?: IntFieldUpdateOperationsInput | number
    s_second?: IntFieldUpdateOperationsInput | number
    s_third?: IntFieldUpdateOperationsInput | number
    s_fourth?: IntFieldUpdateOperationsInput | number
    s_fifth?: IntFieldUpdateOperationsInput | number
    s_sixth?: IntFieldUpdateOperationsInput | number
  }

  export type SixCreateManyInput = {
    six_id?: number
    s_year: number
    s_week: number
    s_total: bigint | number
    s_first: number
    s_second: number
    s_third: number
    s_fourth: number
    s_fifth: number
    s_sixth: number
  }

  export type SixUpdateManyMutationInput = {
    s_year?: IntFieldUpdateOperationsInput | number
    s_week?: IntFieldUpdateOperationsInput | number
    s_total?: BigIntFieldUpdateOperationsInput | bigint | number
    s_first?: IntFieldUpdateOperationsInput | number
    s_second?: IntFieldUpdateOperationsInput | number
    s_third?: IntFieldUpdateOperationsInput | number
    s_fourth?: IntFieldUpdateOperationsInput | number
    s_fifth?: IntFieldUpdateOperationsInput | number
    s_sixth?: IntFieldUpdateOperationsInput | number
  }

  export type SixUncheckedUpdateManyInput = {
    six_id?: IntFieldUpdateOperationsInput | number
    s_year?: IntFieldUpdateOperationsInput | number
    s_week?: IntFieldUpdateOperationsInput | number
    s_total?: BigIntFieldUpdateOperationsInput | bigint | number
    s_first?: IntFieldUpdateOperationsInput | number
    s_second?: IntFieldUpdateOperationsInput | number
    s_third?: IntFieldUpdateOperationsInput | number
    s_fourth?: IntFieldUpdateOperationsInput | number
    s_fifth?: IntFieldUpdateOperationsInput | number
    s_sixth?: IntFieldUpdateOperationsInput | number
  }

  export type SkandiCreateInput = {
    sk_year: number
    sk_week: number
    sk_total: bigint | number
    m_first: number
    m_second: number
    m_third: number
    m_fourth: number
    m_fifth: number
    m_sixth: number
    m_seventh: number
    h_first: number
    h_second: number
    h_third: number
    h_fourth: number
    h_fifth: number
    h_sixth: number
    h_seventh: number
  }

  export type SkandiUncheckedCreateInput = {
    sk_id?: number
    sk_year: number
    sk_week: number
    sk_total: bigint | number
    m_first: number
    m_second: number
    m_third: number
    m_fourth: number
    m_fifth: number
    m_sixth: number
    m_seventh: number
    h_first: number
    h_second: number
    h_third: number
    h_fourth: number
    h_fifth: number
    h_sixth: number
    h_seventh: number
  }

  export type SkandiUpdateInput = {
    sk_year?: IntFieldUpdateOperationsInput | number
    sk_week?: IntFieldUpdateOperationsInput | number
    sk_total?: BigIntFieldUpdateOperationsInput | bigint | number
    m_first?: IntFieldUpdateOperationsInput | number
    m_second?: IntFieldUpdateOperationsInput | number
    m_third?: IntFieldUpdateOperationsInput | number
    m_fourth?: IntFieldUpdateOperationsInput | number
    m_fifth?: IntFieldUpdateOperationsInput | number
    m_sixth?: IntFieldUpdateOperationsInput | number
    m_seventh?: IntFieldUpdateOperationsInput | number
    h_first?: IntFieldUpdateOperationsInput | number
    h_second?: IntFieldUpdateOperationsInput | number
    h_third?: IntFieldUpdateOperationsInput | number
    h_fourth?: IntFieldUpdateOperationsInput | number
    h_fifth?: IntFieldUpdateOperationsInput | number
    h_sixth?: IntFieldUpdateOperationsInput | number
    h_seventh?: IntFieldUpdateOperationsInput | number
  }

  export type SkandiUncheckedUpdateInput = {
    sk_id?: IntFieldUpdateOperationsInput | number
    sk_year?: IntFieldUpdateOperationsInput | number
    sk_week?: IntFieldUpdateOperationsInput | number
    sk_total?: BigIntFieldUpdateOperationsInput | bigint | number
    m_first?: IntFieldUpdateOperationsInput | number
    m_second?: IntFieldUpdateOperationsInput | number
    m_third?: IntFieldUpdateOperationsInput | number
    m_fourth?: IntFieldUpdateOperationsInput | number
    m_fifth?: IntFieldUpdateOperationsInput | number
    m_sixth?: IntFieldUpdateOperationsInput | number
    m_seventh?: IntFieldUpdateOperationsInput | number
    h_first?: IntFieldUpdateOperationsInput | number
    h_second?: IntFieldUpdateOperationsInput | number
    h_third?: IntFieldUpdateOperationsInput | number
    h_fourth?: IntFieldUpdateOperationsInput | number
    h_fifth?: IntFieldUpdateOperationsInput | number
    h_sixth?: IntFieldUpdateOperationsInput | number
    h_seventh?: IntFieldUpdateOperationsInput | number
  }

  export type SkandiCreateManyInput = {
    sk_id?: number
    sk_year: number
    sk_week: number
    sk_total: bigint | number
    m_first: number
    m_second: number
    m_third: number
    m_fourth: number
    m_fifth: number
    m_sixth: number
    m_seventh: number
    h_first: number
    h_second: number
    h_third: number
    h_fourth: number
    h_fifth: number
    h_sixth: number
    h_seventh: number
  }

  export type SkandiUpdateManyMutationInput = {
    sk_year?: IntFieldUpdateOperationsInput | number
    sk_week?: IntFieldUpdateOperationsInput | number
    sk_total?: BigIntFieldUpdateOperationsInput | bigint | number
    m_first?: IntFieldUpdateOperationsInput | number
    m_second?: IntFieldUpdateOperationsInput | number
    m_third?: IntFieldUpdateOperationsInput | number
    m_fourth?: IntFieldUpdateOperationsInput | number
    m_fifth?: IntFieldUpdateOperationsInput | number
    m_sixth?: IntFieldUpdateOperationsInput | number
    m_seventh?: IntFieldUpdateOperationsInput | number
    h_first?: IntFieldUpdateOperationsInput | number
    h_second?: IntFieldUpdateOperationsInput | number
    h_third?: IntFieldUpdateOperationsInput | number
    h_fourth?: IntFieldUpdateOperationsInput | number
    h_fifth?: IntFieldUpdateOperationsInput | number
    h_sixth?: IntFieldUpdateOperationsInput | number
    h_seventh?: IntFieldUpdateOperationsInput | number
  }

  export type SkandiUncheckedUpdateManyInput = {
    sk_id?: IntFieldUpdateOperationsInput | number
    sk_year?: IntFieldUpdateOperationsInput | number
    sk_week?: IntFieldUpdateOperationsInput | number
    sk_total?: BigIntFieldUpdateOperationsInput | bigint | number
    m_first?: IntFieldUpdateOperationsInput | number
    m_second?: IntFieldUpdateOperationsInput | number
    m_third?: IntFieldUpdateOperationsInput | number
    m_fourth?: IntFieldUpdateOperationsInput | number
    m_fifth?: IntFieldUpdateOperationsInput | number
    m_sixth?: IntFieldUpdateOperationsInput | number
    m_seventh?: IntFieldUpdateOperationsInput | number
    h_first?: IntFieldUpdateOperationsInput | number
    h_second?: IntFieldUpdateOperationsInput | number
    h_third?: IntFieldUpdateOperationsInput | number
    h_fourth?: IntFieldUpdateOperationsInput | number
    h_fifth?: IntFieldUpdateOperationsInput | number
    h_sixth?: IntFieldUpdateOperationsInput | number
    h_seventh?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FiveCountOrderByAggregateInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
  }

  export type FiveAvgOrderByAggregateInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
  }

  export type FiveMaxOrderByAggregateInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
  }

  export type FiveMinOrderByAggregateInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
  }

  export type FiveSumOrderByAggregateInput = {
    five_id?: SortOrder
    f_year?: SortOrder
    f_week?: SortOrder
    f_total?: SortOrder
    f_first?: SortOrder
    f_second?: SortOrder
    f_third?: SortOrder
    f_fourth?: SortOrder
    f_fifth?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type SixCountOrderByAggregateInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
  }

  export type SixAvgOrderByAggregateInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
  }

  export type SixMaxOrderByAggregateInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
  }

  export type SixMinOrderByAggregateInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
  }

  export type SixSumOrderByAggregateInput = {
    six_id?: SortOrder
    s_year?: SortOrder
    s_week?: SortOrder
    s_total?: SortOrder
    s_first?: SortOrder
    s_second?: SortOrder
    s_third?: SortOrder
    s_fourth?: SortOrder
    s_fifth?: SortOrder
    s_sixth?: SortOrder
  }

  export type SkandiCountOrderByAggregateInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
  }

  export type SkandiAvgOrderByAggregateInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
  }

  export type SkandiMaxOrderByAggregateInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
  }

  export type SkandiMinOrderByAggregateInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
  }

  export type SkandiSumOrderByAggregateInput = {
    sk_id?: SortOrder
    sk_year?: SortOrder
    sk_week?: SortOrder
    sk_total?: SortOrder
    m_first?: SortOrder
    m_second?: SortOrder
    m_third?: SortOrder
    m_fourth?: SortOrder
    m_fifth?: SortOrder
    m_sixth?: SortOrder
    m_seventh?: SortOrder
    h_first?: SortOrder
    h_second?: SortOrder
    h_third?: SortOrder
    h_fourth?: SortOrder
    h_fifth?: SortOrder
    h_sixth?: SortOrder
    h_seventh?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FiveDefaultArgs instead
     */
    export type FiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FiveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SixDefaultArgs instead
     */
    export type SixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SixDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkandiDefaultArgs instead
     */
    export type SkandiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkandiDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}