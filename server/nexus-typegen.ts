/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Genre: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Movie: { // root type
    genres?: Array<NexusGenRootTypes['Genre'] | null> | null; // [Genre]
    id: number; // Int!
    posterPath?: string | null; // String
    releaseDate: string; // String!
    title: string; // String!
  }
  Movies: { // root type
    page: number; // Int!
    results: NexusGenRootTypes['Movie'][]; // [Movie!]!
    totalPages: number; // Int!
    totalResults: number; // Int!
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Genre: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  Movie: { // field return type
    genres: Array<NexusGenRootTypes['Genre'] | null> | null; // [Genre]
    id: number; // Int!
    posterPath: string | null; // String
    releaseDate: string; // String!
    title: string; // String!
  }
  Movies: { // field return type
    page: number; // Int!
    results: NexusGenRootTypes['Movie'][]; // [Movie!]!
    totalPages: number; // Int!
    totalResults: number; // Int!
  }
  Query: { // field return type
    movieDetails: NexusGenRootTypes['Movie']; // Movie!
    movies: NexusGenRootTypes['Movies']; // Movies!
  }
}

export interface NexusGenFieldTypeNames {
  Genre: { // field return type name
    id: 'Int'
    name: 'String'
  }
  Movie: { // field return type name
    genres: 'Genre'
    id: 'Int'
    posterPath: 'String'
    releaseDate: 'String'
    title: 'String'
  }
  Movies: { // field return type name
    page: 'Int'
    results: 'Movie'
    totalPages: 'Int'
    totalResults: 'Int'
  }
  Query: { // field return type name
    movieDetails: 'Movie'
    movies: 'Movies'
  }
}

export interface NexusGenArgTypes {
  Query: {
    movieDetails: { // args
      id?: number | null; // Int
    }
    movies: { // args
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}