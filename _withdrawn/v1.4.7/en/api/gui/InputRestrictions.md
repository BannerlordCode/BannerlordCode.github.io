---
title: "InputRestrictions"
description: "InputRestrictions — class in TaleWorlds.ScreenSystem. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# InputRestrictions

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public class InputRestrictions`  
**Source:** `TaleWorlds.ScreenSystem/InputRestrictions.cs`

## Overview

`InputRestrictions` is a named type in the TaleWorlds.ScreenSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `InputRestrictions`.
- **Instance members** (7): `Order`, `Id`, `MouseVisibility`, `InputUsageMask`, `SetMouseVisibility`, `SetInputRestrictions`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Id` | property | Instance entry point `Guid` property. Read it for current state; a declared setter writes that state in place. |
| `InputUsageMask` | property | Instance entry point `InputUsageMask` property. Read it for current state; a declared setter writes that state in place. |
| `MouseVisibility` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `Order` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ResetInputRestrictions` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetInputRestrictions` | method | Instance entry point. Takes 2 arguments: `bool isMouseVisible`, `InputUsageMask mask`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMouseVisibility` | method | Instance entry point. Takes 1 argument: `bool isVisible`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `InputRestrictions` | ctor | Instance entry point. Takes 1 argument: `int order`. Returns ``. |

- Constructed as `public InputRestrictions(int order)`.

## Usage Example

```csharp
var inputRestrictions = new InputRestrictions(order);
inputRestrictions.SetMouseVisibility(isVisible);
// Read current state through inputRestrictions.Order.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.ScreenSystem/InputRestrictions.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
