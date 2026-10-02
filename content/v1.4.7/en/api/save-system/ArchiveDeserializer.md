---
title: "ArchiveDeserializer"
description: "ArchiveDeserializer — class in TaleWorlds.SaveSystem. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ArchiveDeserializer

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class ArchiveDeserializer`  
**Source:** `TaleWorlds.SaveSystem/ArchiveDeserializer.cs`

## Overview

`ArchiveDeserializer` is an internal class in TaleWorlds.SaveSystem. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ArchiveDeserializer` is a named type in the TaleWorlds.SaveSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArchiveDeserializer`.
- **Instance members** (2): `RootFolder`, `LoadFrom`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `LoadFrom` | method | Instance entry point. Takes 1 argument: `byte[] binaryArchive`. |
| `RootFolder` | property | Instance entry point `SaveEntryFolder` property. Read it for current state; a declared setter writes that state in place. |
| `ArchiveDeserializer` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ArchiveDeserializer()`.

## Usage Example

```csharp
// ArchiveDeserializer is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   RootFolder
//     SaveEntryFolder
//   LoadFrom(`byte[] binaryArchive`)
//     void
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.SaveSystem/ArchiveDeserializer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/save-system/](../) — the other types in this bucket.
