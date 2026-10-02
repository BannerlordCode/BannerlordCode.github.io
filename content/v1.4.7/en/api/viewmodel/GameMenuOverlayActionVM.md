---
title: "GameMenuOverlayActionVM"
description: "GameMenuOverlayActionVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# GameMenuOverlayActionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class GameMenuOverlayActionVM : StringItemWithEnabledAndHintVM`  
**Base:** `StringItemWithEnabledAndHintVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs`

## Overview

`GameMenuOverlayActionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends StringItemWithEnabledAndHintVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuOverlayActionVM`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GameMenuOverlayActionVM` | ctor | Instance entry point. Takes 5 arguments: `Action<object> onExecute`, `string item`, `bool isEnabled`, `object identifier`, …. Returns ``. |

- Constructed as `public GameMenuOverlayActionVM(Action<object> onExecute, string item, bool isEnabled, object identifier, TextObject hint = null)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameMenuOverlayActionVM(onExecute, item, isEnabled, identifier, hint);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [StringItemWithEnabledAndHintVM](../StringItemWithEnabledAndHintVM/) — `TaleWorlds.Core.ViewModelCollection.Generic`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.

Section: [api/viewmodel/](../) — the other types in this bucket.
