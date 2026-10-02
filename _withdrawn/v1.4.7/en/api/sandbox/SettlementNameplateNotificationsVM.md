---
title: "SettlementNameplateNotificationsVM"
description: "SettlementNameplateNotificationsVM — class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# SettlementNameplateNotificationsVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class SettlementNameplateNotificationsVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs`

## Overview

`SettlementNameplateNotificationsVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SettlementNameplateNotificationsVM`.
- **Instance members** (6): `IsEventsRegistered`, `Tick`, `RegisterEvents`, `UnloadEvents`, `IsValidItemForNotification`, `Notifications`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsEventsRegistered` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsValidItemForNotification` | method | Instance entry point. Takes 1 argument: `ItemRosterElement item`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Notifications` | property | Instance entry point `MBBindingList<SettlementNotificationItemBaseVM>` property. Read it for current state; a declared setter writes that state in place. |
| `RegisterEvents` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UnloadEvents` | method | Instance entry point. Takes no arguments. |
| `SettlementNameplateNotificationsVM` | ctor | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns ``. |

- Constructed as `public SettlementNameplateNotificationsVM(Settlement settlement)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SettlementNameplateNotificationsVM(settlement);
viewModel.IsEventsRegistered = true;
// viewModel.Notifications = ...;   // MBBindingList<SettlementNotificationItemBaseVM>

// Command the widget invokes on confirm:
viewModel.Tick();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/SettlementNameplateNotificationsVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`.
- [ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`.
- [IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`.
- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [ShipSoldNotificationItemVM](../ShipSoldNotificationItemVM/) — `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`.

Section: [api/sandbox/](../) — the other types in this bucket.
