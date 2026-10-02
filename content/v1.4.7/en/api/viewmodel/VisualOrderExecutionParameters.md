---
title: "VisualOrderExecutionParameters"
description: "VisualOrderExecutionParameters — struct in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# VisualOrderExecutionParameters

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public readonly struct VisualOrderExecutionParameters`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderExecutionParameters.cs`

## Overview

`VisualOrderExecutionParameters` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `VisualOrderExecutionParameters`.
- **Data and constants** (6): `HasWorldPosition`, `WorldPosition`, `HasAgent`, `Agent`, `HasFormation`, `Formation`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `VisualOrderExecutionParameters` | ctor | Instance entry point. Takes 3 arguments: `Agent agent`, `Formation formation`, `WorldPosition? worldPosition`. Returns ``. |
| `Agent` | field | Instance entry point `Agent` field — direct storage with no validation or notification. |
| `Formation` | field | Instance entry point `Formation` field — direct storage with no validation or notification. |
| `HasAgent` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `HasFormation` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `HasWorldPosition` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `WorldPosition` | field | Instance entry point `WorldPosition` field — direct storage with no validation or notification. |

- Constructed as `public VisualOrderExecutionParameters(Agent agent = null, Formation formation = null, WorldPosition? worldPosition = null)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new VisualOrderExecutionParameters(agent, formation, theTarget);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderExecutionParameters.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
