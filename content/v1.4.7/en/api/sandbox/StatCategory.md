---
title: "StatCategory"
description: "StatCategory — class in SandBox.ViewModelCollection.GameOver. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# StatCategory

**Namespace:** `SandBox.ViewModelCollection.GameOver`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class StatCategory`  
**Source:** `SandBox.ViewModelCollection/GameOver/StatCategory.cs`

## Overview

`StatCategory` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `StatCategory`.
- **Data and constants** (2): `Items`, `ID`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `StatCategory` | ctor | Instance entry point. Takes 2 arguments: `string id`, `IEnumerable<StatItem> items`. Returns ``. |
| `ID` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Items` | field | Instance entry point `IEnumerable<StatItem>` field — direct storage with no validation or notification. |

- Constructed as `public StatCategory(string id, IEnumerable<StatItem> items)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new StatCategory(id, items);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/GameOver/StatCategory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [StatItem](../StatItem/) — `SandBox.ViewModelCollection.GameOver`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/sandbox/](../) — the other types in this bucket.
