---
title: "AutoPinner"
description: "AutoPinner — class in TaleWorlds.TwoDimension.Standalone.Native. 3 public members (1 static)."
---

<!-- v147-skeleton -->
# AutoPinner

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `internal class AutoPinner : IDisposable`  
**Base:** `IDisposable`  
**Source:** `TaleWorlds.TwoDimension.Standalone/Native/AutoPinner.cs`

## Overview

`AutoPinner` is an internal class in TaleWorlds.TwoDimension.Standalone.Native. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`AutoPinner` is a named type in the TaleWorlds.TwoDimension.Standalone.Native namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IDisposable, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AutoPinner`.
- **Static entry points** (1): `IntPtr`.
- **Instance members** (1): `Dispose`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IntPtr` | method (static) | Static entry point. Takes 1 argument: `AutoPinner autoPinner`. Returns `implicit operator`. |
| `Dispose` | method | Instance entry point. Takes no arguments. |
| `AutoPinner` | ctor | Instance entry point. Takes 1 argument: `object obj`. Returns ``. |

- Constructed as `public AutoPinner(object obj)`.

## Usage Example

```csharp
// AutoPinner is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   IntPtr(`AutoPinner autoPinner`)
//     implicit operator
//   Dispose()
//     void
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.TwoDimension.Standalone/Native/AutoPinner.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
