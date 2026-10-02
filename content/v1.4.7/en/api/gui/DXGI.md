---
title: "DXGI"
description: "DXGI — class in TaleWorlds.TwoDimension.Standalone.Native.Windows. 2 public members (2 static)."
---

<!-- v147-skeleton -->
# DXGI

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public static class DXGI`  
**Source:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`

## Overview

`DXGI` is a named type in the TaleWorlds.TwoDimension.Standalone.Native.Windows namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `IID_IDXGIAdapter`, `IID_IDXGIFactory`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IID_IDXGIAdapter` | property (static) | Static entry point `Guid` property. Read it for current state; a declared setter writes that state in place. |
| `IID_IDXGIFactory` | property (static) | Static entry point `Guid` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// DXGI exposes no public members in TaleWorlds.TwoDimension.Standalone.Native.Windows.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
