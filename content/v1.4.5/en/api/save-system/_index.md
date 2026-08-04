---
title: "save-system index"
description: Save system class reference index
---

## Saveable attribute family: members, roots, and definitions

### Mental model

These three attributes describe different layers of the save schema and are not interchangeable. `SaveableRootClassAttribute` marks a class as a possible object-graph root; `SaveableFieldAttribute` and `SaveablePropertyAttribute` say which field or property of an already registered type enters the save with a member-local ID. They do not create a `DefinitionContext`, register a `SaveableTypeDefiner` for a mod, or turn an arbitrary CLR object into a saveable object.

### Shared contract and dependency boundary

The actual registration chain is: [SaveManager](./SaveManager) creates a [DefinitionContext](./DefinitionContext), discovers and runs [SaveableTypeDefiner](./SaveableTypeDefiner), and then lets [TypeDefinition](./TypeDefinition) reflect fields and properties carrying these attributes. A member local ID must remain stable and unique within its declaring type and inheritance levels; its field type, closed generic, and container must still be defined by a definer. Small pieces of campaign behavior state should normally use [`CampaignBehaviorBase.SyncData(IDataStore)`](../campaign/CampaignBehaviorBase) and [IDataStore](../campaign/IDataStore), rather than adding Saveable attributes just to persist a primitive.

| Namespace | Type | Handwritten purpose | Typical timing |
| --- | --- | --- | --- |
| `TaleWorlds.SaveSystem` | [`SaveableFieldAttribute`](./SaveableFieldAttribute) | Assigns a `LocalSaveId` to an instance field collected by `TypeDefinition.CollectFields()`; use it when a registered type deliberately persists field state, including a private field. | It is read while `DefinitionContext` collects field metadata after type definitions are registered; it is not a runtime field-tagging API. |
| `TaleWorlds.SaveSystem` | [`SaveablePropertyAttribute`](./SaveablePropertyAttribute) | Assigns a `LocalSaveId` to an instance property collected by `TypeDefinition.CollectProperties()`; use it for persisted state exposed through a property getter/setter. | It is collected after type registration and before object-graph serialization or loading; the property must still have a usable access contract. |
| `TaleWorlds.SaveSystem` | [`SaveableRootClassAttribute`](./SaveableRootClassAttribute) | Declares a class-level root marker and its `SaveId` in source; it is not the complete root definition by itself. | The marker is not the v1.4.5 registration entry; the actual root definition is created when `SaveableCoreTypeDefiner.DefineRootClassTypes()` calls `SaveableTypeDefiner.AddRootClassDefinition`. |

The source `Game` class and `SaveableCoreTypeDefiner` show the three layers separately:

```csharp
[SaveableRootClass(5000)]
public sealed class Game
{
    [SaveableField(11)]
    private int _nextUniqueTroopSeed = 1;

    [SaveableProperty(3)]
    public GameType GameType { get; private set; }
}
```

```csharp
public class SaveableCoreTypeDefiner : SaveableTypeDefiner
{
protected override void DefineRootClassTypes()
{
    AddRootClassDefinition(typeof(Game), 4001);
}
}
```

Here `5000` is the root-attribute marker, `11` and `3` are member-local IDs, and `4001` is the local root-definition ID registered by `SaveableCoreTypeDefiner` under base ID `10000`. Do not treat these numbers as interchangeable, and do not casually change them after a save schema is released.

### Risk boundary

- **IDs are save contracts:** changing a released root, type, field, or property ID changes how old saves are interpreted; renaming a member is not the same as preserving its compatibility ID.
- **Fields and properties are separate paths:** `SaveableFieldAttribute` targets fields and `SaveablePropertyAttribute` targets properties. `TypeDefinition` checks duplicate `MemberTypeId` values in separate field/property dictionaries and records errors; do not assume that reusing a number across a field and a property triggers the same duplicate check. Keep every member-local ID clear and stable when publishing a schema.
- **An attribute is not a type definition:** referenced classes, structs, enums, generic instances, and containers must be registered by [SaveableTypeDefiner](./SaveableTypeDefiner) first. Otherwise the schema has a member number but no resolvable type definition.
- **Do not force behavior state into the object schema:** custom campaign state should normally use [IDataStore](../campaign/IDataStore) and stable keys through `SyncData`; do not cache runtime `Settlement` or `MobileParty` references during save and assume object references will be restored as-is.

The practical rule is: for behavior-owned state, start with `SyncData`; for a member of an already registered object graph, use a field/property attribute; for root and type identity, use [SaveableTypeDefiner](./SaveableTypeDefiner).

<!-- BEGIN SECTION INDEX -->

## Parent Navigation

- [API Reference](../)
- [Version Home](../../)

## Child Classes — Alphabetical

### A

- [ArchiveConcurrentSerializer](./ArchiveConcurrentSerializer)
- [ArchiveDeserializer](./ArchiveDeserializer)
- [ArchiveSerializer](./ArchiveSerializer)
- [AsyncFileSaveDriver](./AsyncFileSaveDriver)
- [AutoGeneratedSaveManager](./AutoGeneratedSaveManager)

### B

- [BasicTypeDefinition](./BasicTypeDefinition)
- [BinaryWriterFactory](./BinaryWriterFactory)
- [BoolBasicTypeSerializer](./BoolBasicTypeSerializer)
- [ByteBasicTypeSerializer](./ByteBasicTypeSerializer)

### C

- [ColorBasicTypeSerializer](./ColorBasicTypeSerializer)
- [ContainerDefinition](./ContainerDefinition)
- [ContainerHeaderLoadData](./ContainerHeaderLoadData)
- [ContainerLoadData](./ContainerLoadData)
- [ContainerSaveData](./ContainerSaveData)
- [ContainerSaveId](./ContainerSaveId)
- [ContainerType](./ContainerType)
- [CustomField](./CustomField)

### D

- [DefinitionContext](./DefinitionContext)
- [DoubleBasicTypeSerializer](./DoubleBasicTypeSerializer)

### E

- [ElementLoadData](./ElementLoadData)
- [ElementSaveData](./ElementSaveData)
- [EntryId](./EntryId)
- [EnumDefinition](./EnumDefinition)

### F

- [FieldDefinition](./FieldDefinition)
- [FieldLoadData](./FieldLoadData)
- [FieldSaveData](./FieldSaveData)
- [FileDriver](./FileDriver)
- [FloatBasicTypeSerializer](./FloatBasicTypeSerializer)
- [FolderId](./FolderId)

### G

- [GameData](./GameData)
- [GenericSaveId](./GenericSaveId)
- [GenericTypeDefinition](./GenericTypeDefinition)

### I

- [IArchiveContext](./IArchiveContext)
- [IAutoGeneratedSaveManager](./IAutoGeneratedSaveManager)
- [IBasicTypeSerializer](./IBasicTypeSerializer)
- [IConflictResolver](./IConflictResolver)
- [IEnumResolver](./IEnumResolver)
- [InMemDriver](./InMemDriver)
- [IntBasicTypeSerializer](./IntBasicTypeSerializer)
- [InterfaceDefinition](./InterfaceDefinition)
- [IObjectResolver](./IObjectResolver)
- [ISaveContext](./ISaveContext)
- [ISaveDriver](./ISaveDriver)
- [ISavedStruct](./ISavedStruct)

### L

- [LateLoadInitializationCallback](./LateLoadInitializationCallback)
- [LegacyGameDataDeserializer](./LegacyGameDataDeserializer)
- [LegacySaveContext](./LegacySaveContext)
- [LoadCallbackInitializator](./LoadCallbackInitializator)
- [LoadContext](./LoadContext)
- [LoadData](./LoadData)
- [LoadError](./LoadError)
- [LoadInitializationCallback](./LoadInitializationCallback)
- [LoadResult](./LoadResult)
- [LongBasicTypeSerializer](./LongBasicTypeSerializer)

### M

- [Mat2BasicTypeSerializer](./Mat2BasicTypeSerializer)
- [Mat3BasicTypeSerializer](./Mat3BasicTypeSerializer)
- [MatrixFrameBasicTypeSerializer](./MatrixFrameBasicTypeSerializer)
- [MemberDefinition](./MemberDefinition)
- [MemberLoadData](./MemberLoadData)
- [MemberSaveData](./MemberSaveData)
- [MemberTypeId](./MemberTypeId)
- [MetaData](./MetaData)
- [MetaDataExtensions](./MetaDataExtensions)

### O

- [ObjectHeaderLoadData](./ObjectHeaderLoadData)
- [ObjectLoadData](./ObjectLoadData)
- [ObjectSaveData](./ObjectSaveData)

### P

- [PropertyDefinition](./PropertyDefinition)
- [PropertyLoadData](./PropertyLoadData)
- [PropertySaveData](./PropertySaveData)

### Q

- [QuaternionBasicTypeSerializer](./QuaternionBasicTypeSerializer)

### S

- [SaveableBasicTypeDefiner](./SaveableBasicTypeDefiner)
- [SaveableFieldAttribute](./SaveableFieldAttribute)
- [SaveableInterfaceAttribute](./SaveableInterfaceAttribute)
- [SaveablePropertyAttribute](./SaveablePropertyAttribute)
- [SaveableRootClassAttribute](./SaveableRootClassAttribute)
- [SaveableTypeDefiner](./SaveableTypeDefiner)
- [SaveCodeGenerationContext](./SaveCodeGenerationContext)
- [SaveCodeGenerationContextAssembly](./SaveCodeGenerationContextAssembly)
- [SaveContext](./SaveContext)
- [SavedMemberType](./SavedMemberType)
- [SaveEntry](./SaveEntry)
- [SaveEntryExtension](./SaveEntryExtension)
- [SaveEntryFolder](./SaveEntryFolder)
- [SaveError](./SaveError)
- [SaveFolderExtension](./SaveFolderExtension)
- [SaveGameFileInfo](./SaveGameFileInfo)
- [SaveId](./SaveId)
- [SaveManager](./SaveManager)
- [SaveOutput](./SaveOutput)
- [SaveStatistics](./SaveStatistics)
- [SbyteBasicTypeSerializer](./SbyteBasicTypeSerializer)
- [ShortBasicTypeSerializer](./ShortBasicTypeSerializer)
- [StringSerializer](./StringSerializer)
- [StructDefinition](./StructDefinition)

### T

- [TypeDefinition](./TypeDefinition)
- [TypeDefinitionBase](./TypeDefinitionBase)
- [TypeExtensions](./TypeExtensions)
- [TypeSaveId](./TypeSaveId)

### U

- [UintBasicTypeSerializer](./UintBasicTypeSerializer)
- [UlongBasicTypeSerializer](./UlongBasicTypeSerializer)
- [UshortBasicTypeSerializer](./UshortBasicTypeSerializer)

### V

- [VariableLoadData](./VariableLoadData)
- [VariableSaveData](./VariableSaveData)
- [Vec2BasicTypeSerializer](./Vec2BasicTypeSerializer)
- [Vec2iBasicTypeSerializer](./Vec2iBasicTypeSerializer)
- [Vec3BasicTypeSerializer](./Vec3BasicTypeSerializer)
- [Vec3iBasicTypeSerializer](./Vec3iBasicTypeSerializer)

### Z

- [ZipExtensions](./ZipExtensions)


<!-- END SECTION INDEX -->
