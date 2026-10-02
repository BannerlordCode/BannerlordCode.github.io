---
title: "EncyclopediaListItemVM"
description: "EncyclopediaListItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaListItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaListItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs`

## Overview

`EncyclopediaListItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaListItemVM`.
- **Instance members** (7): `Object`, `ListItem`, `RefreshValues`, `Execute`, `SetComparedValue`, `ExecuteBeginTooltip`, ….
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Execute` | method | Instance entry point. Takes no arguments. |
| `ExecuteBeginTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteEndTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ListItem` | property | Instance entry point `EncyclopediaListItem` property. Read it for current state; a declared setter writes that state in place. |
| `Object` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `SetComparedValue` | method | Instance entry point. Takes 1 argument: `EncyclopediaListItemComparerBase comparer`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `EncyclopediaListItemVM` | ctor | Instance entry point. Takes 1 argument: `EncyclopediaListItem listItem`. Returns ``. |

- Constructed as `public EncyclopediaListItemVM(EncyclopediaListItem listItem)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaListItemVM(listItem);
// viewModel.Object = ...;   // object
// viewModel.ListItem = ...;   // EncyclopediaListItem

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItem](../../campaign/EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaListItemComparerBase](../../campaign/EncyclopediaListItemComparerBase/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
