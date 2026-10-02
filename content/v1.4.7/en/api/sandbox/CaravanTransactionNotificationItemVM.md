---
title: "CaravanTransactionNotificationItemVM"
description: "CaravanTransactionNotificationItemVM — class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# CaravanTransactionNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class CaravanTransactionNotificationItemVM : SettlementNotificationItemBaseVM`  
**Base:** `SettlementNotificationItemBaseVM`  
**Source:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/CaravanTransactionNotificationItemVM.cs`

## Overview

`CaravanTransactionNotificationItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends SettlementNotificationItemBaseVM, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CaravanTransactionNotificationItemVM`.
- **Instance members** (2): `CaravanParty`, `AddNewItems`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddNewItems` | method | Instance entry point. Takes 2 arguments: `List<ValueTuple<EquipmentElement`, `int>> newItems`. Adds to the collection or relation this type owns. |
| `CaravanParty` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `CaravanTransactionNotificationItemVM` | ctor | Instance entry point. Takes 5 arguments: `Action<SettlementNotificationItemBaseVM> onRemove`, `MobileParty caravanParty`, `List<ValueTuple<EquipmentElement`, `int>> items`, …. Returns ``. |

- Constructed as `public CaravanTransactionNotificationItemVM(Action<SettlementNotificationItemBaseVM> onRemove, MobileParty caravanParty, List<ValueTuple<EquipmentElement, int>> items, int createdTick)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CaravanTransactionNotificationItemVM(onRemove, caravanParty, theTarget, items, createdTick);
// viewModel.CaravanParty = ...;   // MobileParty

// Command the widget invokes on confirm:
viewModel.AddNewItems(theTarget, newItems);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/CaravanTransactionNotificationItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [SandBoxUIHelper](../SandBoxUIHelper/) — `SandBox.ViewModelCollection`.
- [CharacterImageIdentifierVM](../../viewmodel/CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/sandbox/](../) — the other types in this bucket.
