---
title: "MapBarShortcuts"
description: "MapBarShortcuts — struct in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# MapBarShortcuts

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public struct MapBarShortcuts`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarShortcuts.cs`

## Overview

`MapBarShortcuts` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Data and constants** (3): `PauseHotkey`, `PlayHotkey`, `FastForwardHotkey`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FastForwardHotkey` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `PauseHotkey` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `PlayHotkey` | field | Instance entry point `string` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarShortcuts.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
