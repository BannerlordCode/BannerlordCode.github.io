---
title: "ArchiveSerializer"
description: "ArchiveSerializer — class in TaleWorlds.SaveSystem. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# ArchiveSerializer

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class ArchiveSerializer : IArchiveContext`  
**Base:** `IArchiveContext`  
**Source:** `TaleWorlds.SaveSystem/ArchiveSerializer.cs`

## Overview

`ArchiveSerializer` is an internal class in TaleWorlds.SaveSystem. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ArchiveSerializer` is a named type in the TaleWorlds.SaveSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IArchiveContext, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArchiveSerializer`.
- **Instance members** (5): `SerializeEntry`, `SerializeFolder`, `CreateFolder`, `FinalizeAndGetBinaryData`, `GetBinaryDataDebug`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateFolder` | method | Instance entry point. Takes 3 arguments: `SaveEntryFolder parentFolder`, `FolderId folderId`, `int entryCount`. Returns `SaveEntryFolder`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `FinalizeAndGetBinaryData` | method | Instance entry point. Takes no arguments. Returns `byte[]`. |
| `GetBinaryDataDebug` | method | Instance entry point. Takes no arguments. Returns `byte[]`. Read path: prefer it over reaching for the backing store. |
| `SerializeEntry` | method | Instance entry point. Takes 1 argument: `SaveEntry entry`. |
| `SerializeFolder` | method | Instance entry point. Takes 1 argument: `SaveEntryFolder folder`. |
| `ArchiveSerializer` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ArchiveSerializer()`.

## Usage Example

```csharp
// ArchiveSerializer is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   SerializeEntry(`SaveEntry entry`)
//     void
//   SerializeFolder(`SaveEntryFolder folder`)
//     void
//   CreateFolder(`SaveEntryFolder parentFolder`, `FolderId folderId`, `int entryCount`)
//     SaveEntryFolder
//   FinalizeAndGetBinaryData()
//     byte[]
//   GetBinaryDataDebug()
//     byte[]
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.SaveSystem/ArchiveSerializer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BinaryWriterFactory](../BinaryWriterFactory/) — `TaleWorlds.SaveSystem`.

Section: [api/save-system/](../) — the other types in this bucket.
