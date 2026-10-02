---
title: "LegacySaveContext"
description: "LegacySaveContext — class in TaleWorlds.SaveSystem.Save. 13 public members (2 static)."
---

<!-- v147-skeleton -->
# LegacySaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class LegacySaveContext : ISaveContext`  
**Base:** `ISaveContext`  
**Source:** `TaleWorlds.SaveSystem/Save/LegacySaveContext.cs`

## Overview

`LegacySaveContext` is a named type in the TaleWorlds.SaveSystem.Save namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ISaveContext, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LegacySaveContext`.
- **Static entry points** (2): `GetStatistics`, `EnableSaveStatistics`.
- **Instance members** (10): `RootObject`, `SaveData`, `DefinitionContext`, `AddStrings`, `AddOrGetStringId`, `GetObjectId`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `EnableSaveStatistics` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `GetStatistics` | method (static) | Static entry point. Takes no arguments. Returns `LegacySaveContext.SaveStatistics`. Read path: prefer it over reaching for the backing store. |
| `AddOrGetStringId` | method | Instance entry point. Takes 1 argument: `string text`. Returns `int`. Adds to the collection or relation this type owns. |
| `AddStrings` | method | Instance entry point. Takes 1 argument: `List<string> texts`. Adds to the collection or relation this type owns. |
| `DefinitionContext` | property | Instance entry point `DefinitionContext` property. Read it for current state; a declared setter writes that state in place. |
| `GetContainerId` | method | Instance entry point. Takes 1 argument: `object target`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetObjectId` | method | Instance entry point. Takes 1 argument: `object target`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetStringId` | method | Instance entry point. Takes 1 argument: `string target`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `RootObject` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `Save` | method | Instance entry point. Takes 3 arguments: `object target`, `MetaData metaData`, `out string errorMessage`. Returns `bool`. |
| `SaveData` | property | Instance entry point `GameData` property. Read it for current state; a declared setter writes that state in place. |
| `SaveStatistics` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `LegacySaveContext` | ctor | Instance entry point. Takes 1 argument: `DefinitionContext definitionContext`. Returns ``. |

- Constructed as `public LegacySaveContext(DefinitionContext definitionContext)`.

## Usage Example

```csharp
// Static entry points on LegacySaveContext:
LegacySaveContext.GetStatistics();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.SaveSystem/Save/LegacySaveContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ISaveContext](../ISaveContext/) — `TaleWorlds.SaveSystem.Save`.
- [ContainerDefinition](../ContainerDefinition/) — `TaleWorlds.SaveSystem.Definition`.
- [ContainerSaveData](../ContainerSaveData/) — `TaleWorlds.SaveSystem.Save`.
- [BinaryWriterFactory](../BinaryWriterFactory/) — `TaleWorlds.SaveSystem`.
- [ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer/) — `TaleWorlds.SaveSystem`.
- [ArchiveSerializer](../ArchiveSerializer/) — `TaleWorlds.SaveSystem`.
- [Error](../../core-extra/Error/) — `TaleWorlds.LinQuick`.

Section: [api/save-system/](../) — the other types in this bucket.
