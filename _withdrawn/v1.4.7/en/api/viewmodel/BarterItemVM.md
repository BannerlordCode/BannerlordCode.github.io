---
title: "BarterItemVM"
description: "BarterItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Barter. 11 public members (2 static)."
---

<!-- v147-skeleton -->
# BarterItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class BarterItemVM : EncyclopediaLinkVM`  
**Base:** `EncyclopediaLinkVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs`

## Overview

`BarterItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends EncyclopediaLinkVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BarterItemVM`.
- **Instance members** (6): `RefreshValues`, `RefreshCompabilityWithItem`, `ExecuteAddOffered`, `ExecuteRemoveOffered`, `ExecuteAction`, `BarterTransferEventDelegate`.
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (4): `IsEntireStackModifierActive`, `IsFiveStackModifierActive`, `Barterable`, `_isOffered`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `BarterTransferEventDelegate` | method | Instance entry point. Takes 2 arguments: `BarterItemVM itemVM`, `bool transferAll`. Returns `delegate void`. |
| `ExecuteAction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteAddOffered` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRemoveOffered` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsEntireStackModifierActive` | field (static) | Static entry point `bool` field — direct storage with no validation or notification. |
| `IsFiveStackModifierActive` | field (static) | Static entry point `bool` field — direct storage with no validation or notification. |
| `RefreshCompabilityWithItem` | method | Instance entry point. Takes 2 arguments: `BarterItemVM item`, `bool isItemGotOffered`. Called from the owner’s update loop — do not assume a frame boundary. |
| `BarterItemVM` | ctor | Instance entry point. Takes 4 arguments: `Barterable barterable`, `BarterItemVM.BarterTransferEventDelegate OnTransfer`, `Action onAmountChange`, `bool isFixed`. Returns ``. |
| `_isOffered` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Barterable` | field | Instance entry point `Barterable` field — direct storage with no validation or notification. |

- Constructed as `public BarterItemVM(Barterable barterable, BarterItemVM.BarterTransferEventDelegate OnTransfer, Action onAmountChange, bool isFixed = false)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BarterItemVM(barterable, OnTransfer, onAmountChange, isFixed);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaLinkVM](../EncyclopediaLinkVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [Barterable](../../campaign/Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [GenericImageIdentifierVM](../GenericImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [FiefBarterable](../../campaign/FiefBarterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [ImageIdentifierVM](../ImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/viewmodel/](../) — the other types in this bucket.
