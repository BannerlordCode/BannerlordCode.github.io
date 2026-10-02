---
title: "EncyclopediaPageChangedEvent"
description: "EncyclopediaPageChangedEvent — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaPageChangedEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaPageChangedEvent : EventBase`  
**Base:** `EventBase`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs`

## Overview

`EncyclopediaPageChangedEvent` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends EventBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaPageChangedEvent`.
- **Instance members** (2): `NewPage`, `NewPageHasHiddenInformation`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `NewPage` | property | Instance entry point `EncyclopediaPages` property. Read it for current state; a declared setter writes that state in place. |
| `NewPageHasHiddenInformation` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `EncyclopediaPageChangedEvent` | ctor | Instance entry point. Takes 2 arguments: `EncyclopediaPages newPage`, `bool hasHiddenInformation`. Returns ``. |

- Constructed as `public EncyclopediaPageChangedEvent(EncyclopediaPages newPage, bool hasHiddenInformation = false)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaPageChangedEvent(newPage, hasHiddenInformation);
// viewModel.NewPage = ...;   // EncyclopediaPages
// viewModel.NewPageHasHiddenInformation = ...;   // bool
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventBase](../../core-extra/EventBase/) — `TaleWorlds.Library.EventSystem`.
- [EncyclopediaPages](../EncyclopediaPages/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
