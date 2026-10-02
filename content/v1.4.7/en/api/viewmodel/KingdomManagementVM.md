---
title: "KingdomManagementVM"
description: "KingdomManagementVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement. 22 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class KingdomManagementVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs`

## Overview

`KingdomManagementVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomManagementVM`.
- **Instance members** (21): `Kingdom`, `CreateSettlementVM`, `RefreshValues`, `OnRefresh`, `OnFrameTick`, `ExecuteClose`, ….
- **Extension points** (3): `CreateSettlementVM`, `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CreateSettlementVM` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `Action<KingdomDecision> forceDecision`, `Action<Settlement> onGrantFief`. Returns `KingdomSettlementVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DoneInputKey` | property | Instance entry point `InputKeyItemVM` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteClose` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Kingdom` | property | Instance entry point `Kingdom` property. Read it for current state; a declared setter writes that state in place. |
| `NextTabInputKey` | property | Instance entry point `InputKeyItemVM` property. Read it for current state; a declared setter writes that state in place. |
| `OnFrameTick` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRefresh` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreviousTabInputKey` | property | Instance entry point `InputKeyItemVM` property. Read it for current state; a declared setter writes that state in place. |
| `SelectArmy` | method | Instance entry point. Takes 1 argument: `Army army`. |
| `SelectClan` | method | Instance entry point. Takes 1 argument: `Clan clan`. |
| `SelectKingdom` | method | Instance entry point. Takes 1 argument: `Kingdom kingdom`. |
| `SelectNextCategory` | method | Instance entry point. Takes no arguments. |
| `SelectPolicy` | method | Instance entry point. Takes 1 argument: `PolicyObject policy`. |
| `SelectPreviousCategory` | method | Instance entry point. Takes no arguments. |
| `SelectSettlement` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetNextTabInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetPreviousTabInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `KingdomManagementVM` | ctor | Instance entry point. Takes 3 arguments: `Action onClose`, `Action onManageArmy`, `Action<Army> onShowArmyOnMap`. Returns ``. |

- Constructed as `public KingdomManagementVM(Action onClose, Action onManageArmy, Action<Army> onShowArmyOnMap)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new KingdomManagementVM(onClose, onManageArmy, onShowArmyOnMap);
// viewModel.Kingdom = ...;   // Kingdom
// viewModel.DoneInputKey = ...;   // InputKeyItemVM
// viewModel.PreviousTabInputKey = ...;   // InputKeyItemVM

// Command the widget invokes on confirm:
viewModel.CreateSettlementVM(forceDecision, onGrantFief);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [KingdomArmyVM](../KingdomArmyVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`.
- [KingdomClanVM](../KingdomClanVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`.
- [KingdomPoliciesVM](../KingdomPoliciesVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`.
- [KingdomDiplomacyVM](../KingdomDiplomacyVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`.
- [KingdomGiftFiefPopupVM](../KingdomGiftFiefPopupVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [KingdomDecisionsVM](../KingdomDecisionsVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`.
- [LeaveKingdomPermissionEvent](../LeaveKingdomPermissionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [KingdomSettlementVM](../KingdomSettlementVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`.
- [BannerImageIdentifierVM](../BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/viewmodel/](../) — the other types in this bucket.
