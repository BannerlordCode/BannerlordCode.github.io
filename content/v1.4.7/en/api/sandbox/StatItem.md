---
title: "StatItem"
description: "StatItem — class in SandBox.ViewModelCollection.GameOver. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# StatItem

**Namespace:** `SandBox.ViewModelCollection.GameOver`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class StatItem`  
**Source:** `SandBox.ViewModelCollection/GameOver/StatItem.cs`

## Overview

`StatItem` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `StatItem`.
- **Instance members** (1): `StatType`.
- **Data and constants** (3): `ID`, `Value`, `Type`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `StatType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `StatItem` | ctor | Instance entry point. Takes 3 arguments: `string id`, `string value`, `StatItem.StatType type`. Returns ``. |
| `ID` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Type` | field | Instance entry point `StatItem.StatType` field — direct storage with no validation or notification. |
| `Value` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public StatItem(string id, string value, StatItem.StatType type = StatItem.StatType.None)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new StatItem(id, value, type);
// viewModel.StatType = ...;   // enum
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/GameOver/StatItem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
