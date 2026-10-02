---
title: "MapNotificationVM"
description: "MapNotificationVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Map. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# MapNotificationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class MapNotificationVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs`

## Overview

`MapNotificationVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapNotificationVM`.
- **Instance members** (8): `RefreshValues`, `RegisterMapNotificationType`, `OnFinalize`, `OnFrameTick`, `OnMenuModeTick`, `AddMapNotification`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (1): `ReceiveNewNotification`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddMapNotification` | method | Instance entry point. Takes 1 argument: `InformationData data`. Adds to the collection or relation this type owns. |
| `OnFrameTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMenuModeTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RegisterMapNotificationType` | method | Instance entry point. Takes 2 arguments: `Type data`, `Type item`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RemoveAllNotifications` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetRemoveInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `MapNotificationVM` | ctor | Instance entry point. Takes 2 arguments: `INavigationHandler navigationHandler`, `Action<CampaignVec2> fastMoveCameraToPosition`. Returns ``. |
| `ReceiveNewNotification` | field | Instance entry point `Action<MapNotificationItemBaseVM>` field — direct storage with no validation or notification. |

- Constructed as `public MapNotificationVM(INavigationHandler navigationHandler, Action<CampaignVec2> fastMoveCameraToPosition)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapNotificationVM(navigationHandler, fastMoveCameraToPosition);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ArmyDispersionMapNotification](../../campaign/ArmyDispersionMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [ArmyDispersionItemVM](../ArmyDispersionItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`.
- [ArmyCreationMapNotification](../../campaign/ArmyCreationMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`.
- [AlleyLeaderDiedMapNotification](../../campaign/AlleyLeaderDiedMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`.
- [AlleyUnderAttackMapNotification](../../campaign/AlleyUnderAttackMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`.
- [AllianceOfferMapNotification](../../campaign/AllianceOfferMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`.

Section: [api/viewmodel/](../) — the other types in this bucket.
