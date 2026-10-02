---
title: "CustomParameter"
description: "CustomParameter — class in TaleWorlds.DotNet. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomParameter

**Namespace:** `TaleWorlds.DotNet`  
**Module:** `TaleWorlds.DotNet`  
**Type:** `internal class CustomParameter<T> : DotNetObject`  
**Base:** `DotNetObject`  
**Source:** `TaleWorlds.DotNet/CustomParameter.cs`

## Overview

`CustomParameter` is an internal class in TaleWorlds.DotNet. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`CustomParameter` is a named type in the TaleWorlds.DotNet namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends DotNetObject, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomParameter`.
- **Instance members** (1): `Target`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Target` | property | Instance entry point `T` property. Read it for current state; a declared setter writes that state in place. |
| `CustomParameter` | ctor | Instance entry point. Takes 1 argument: `T target`. Returns ``. |

- Constructed as `public CustomParameter(T target)`.

## Usage Example

```csharp
// CustomParameter is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Target
//     T
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.DotNet/CustomParameter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
