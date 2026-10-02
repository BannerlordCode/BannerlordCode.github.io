---
title: "MBDotNet"
description: "MBDotNet — class in TaleWorlds.Starter.Library. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# MBDotNet

**Namespace:** `TaleWorlds.Starter.Library`  
**Module:** `TaleWorlds.Starter.Library`  
**Type:** `internal static class MBDotNet`  
**Source:** `TaleWorlds.Starter.Library/MBDotNet.cs`

## Overview

`MBDotNet` is an internal class in TaleWorlds.Starter.Library. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`MBDotNet` is a named type in the TaleWorlds.Starter.Library namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Data and constants** (1): `MainDllName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MainDllName` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
// MBDotNet is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Starter.Library/MBDotNet.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
