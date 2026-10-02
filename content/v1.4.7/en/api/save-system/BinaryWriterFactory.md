---
title: "BinaryWriterFactory"
description: "BinaryWriterFactory — class in TaleWorlds.SaveSystem. 4 public members (4 static)."
---

<!-- v147-skeleton -->
# BinaryWriterFactory

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal static class BinaryWriterFactory`  
**Source:** `TaleWorlds.SaveSystem/BinaryWriterFactory.cs`

## Overview

`BinaryWriterFactory` is an internal class in TaleWorlds.SaveSystem. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`BinaryWriterFactory` is a named type in the TaleWorlds.SaveSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `GetBinaryWriter`, `ReleaseBinaryWriter`, `Initialize`, `Release`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetBinaryWriter` | method (static) | Static entry point. Takes no arguments. Returns `BinaryWriter`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method (static) | Static entry point. Takes no arguments. |
| `Release` | method (static) | Static entry point. Takes no arguments. |
| `ReleaseBinaryWriter` | method (static) | Static entry point. Takes 1 argument: `BinaryWriter writer`. |

## Usage Example

```csharp
// BinaryWriterFactory is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   GetBinaryWriter()
//     BinaryWriter
//   ReleaseBinaryWriter(`BinaryWriter writer`)
//     void
//   Initialize()
//     void
//   Release()
//     void
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.SaveSystem/BinaryWriterFactory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/save-system/](../) — the other types in this bucket.
