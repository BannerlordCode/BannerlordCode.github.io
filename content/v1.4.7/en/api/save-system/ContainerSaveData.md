---
title: "ContainerSaveData"
description: "ContainerSaveData — class in TaleWorlds.SaveSystem.Save. 24 public members (2 static)."
---

<!-- v147-skeleton -->
# ContainerSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class ContainerSaveData`  
**Source:** `TaleWorlds.SaveSystem/Save/ContainerSaveData.cs`

## Overview

`ContainerSaveData` is an internal class in TaleWorlds.SaveSystem.Save. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ContainerSaveData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ContainerSaveData`.
- **Static entry points** (2): `GetChildElements`, `GetChildObjects`.
- **Instance members** (21): `ObjectId`, `Context`, `Target`, `Type`, `CollectChildren`, `SaveHeaderTo`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetChildElements` | method (static) | Static entry point. Takes 2 arguments: `ContainerType containerType`, `object target`. Returns `IEnumerable<object>`. Read path: prefer it over reaching for the backing store. |
| `GetChildObjects` | method (static) | Static entry point. Takes 5 arguments: `ISaveContext context`, `ContainerDefinition containerDefinition`, `ContainerType containerType`, `object target`, …. Read path: prefer it over reaching for the backing store. |
| `CollectChildren` | method | Instance entry point. Takes no arguments. |
| `CollectMembers` | method | Instance entry point. Takes no arguments. |
| `CollectStrings` | method | Instance entry point. Takes no arguments. |
| `CollectStringsInto` | method | Instance entry point. Takes 1 argument: `List<string> collection`. |
| `CollectStructs` | method | Instance entry point. Takes no arguments. |
| `Context` | property | Instance entry point `ISaveContext` property. Read it for current state; a declared setter writes that state in place. |
| `GetChildElements` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<object>`. Read path: prefer it over reaching for the backing store. |
| `GetChildElementSaveDatas` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<ElementSaveData>`. Read path: prefer it over reaching for the backing store. |
| `GetChildObjects` | method | Instance entry point. Takes 1 argument: `ISaveContext context`. Returns `IEnumerable<object>`. Read path: prefer it over reaching for the backing store. |
| `GetDataSize` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetEntryCount` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetFolderCount` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetHeaderSize` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `ObjectId` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `SaveDataFolder` | method | Instance entry point. Takes 2 arguments: `BinaryWriter writer`, `ref int folderId`. |
| `SaveHeaderDataTo` | method | Instance entry point. Takes 2 arguments: `BinaryWriter headerWriter`, `int folderId`. |
| `SaveHeaderFolderTo` | method | Instance entry point. Takes 2 arguments: `BinaryWriter headerWriter`, `int folderId`. |
| `SaveHeaderTo` | method | Instance entry point. Takes 2 arguments: `SaveEntryFolder parentFolder`, `IArchiveContext archiveContext`. |
| `SaveTo` | method | Instance entry point. Takes 2 arguments: `BinaryWriter writer`, `ref int folderId`. |
| `Target` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `Type` property. Read it for current state; a declared setter writes that state in place. |
| `ContainerSaveData` | ctor | Instance entry point. Takes 4 arguments: `ISaveContext context`, `int objectId`, `object target`, `ContainerType containerType`. Returns ``. |

- Constructed as `public ContainerSaveData(ISaveContext context, int objectId, object target, ContainerType containerType)`.

## Usage Example

```csharp
// ContainerSaveData is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   ObjectId
//     int
//   Context
//     ISaveContext
//   Target
//     object
//   Type
//     Type
//   CollectChildren()
//     void
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Save/ContainerSaveData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ISaveContext](../ISaveContext/) — `TaleWorlds.SaveSystem.Save`.
- [ElementSaveData](../ElementSaveData/) — `TaleWorlds.SaveSystem.Save`.
- [Container](../../gui/Container/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [BinaryWriterFactory](../BinaryWriterFactory/) — `TaleWorlds.SaveSystem`.
- [ContainerDefinition](../ContainerDefinition/) — `TaleWorlds.SaveSystem.Definition`.

Section: [api/save-system/](../) — the other types in this bucket.
