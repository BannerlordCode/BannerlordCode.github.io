---
title: "EncyclopediaHistoryEventVM"
description: "EncyclopediaHistoryEventVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaHistoryEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaHistoryEventVM : EncyclopediaLinkVM`  
**Base:** `EncyclopediaLinkVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs`

## Overview

`EncyclopediaHistoryEventVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends EncyclopediaLinkVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaHistoryEventVM`.
- **Instance members** (2): `RefreshValues`, `ExecuteLink`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteLink` | method | Instance entry point. Takes 1 argument: `string link`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `EncyclopediaHistoryEventVM` | ctor | Instance entry point. Takes 1 argument: `IEncyclopediaLog log`. Returns ``. |

- Constructed as `public EncyclopediaHistoryEventVM(IEncyclopediaLog log)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaHistoryEventVM(log);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaLinkVM](../EncyclopediaLinkVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
