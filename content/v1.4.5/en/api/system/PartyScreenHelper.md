---
title: "PartyScreenHelper"
description: "The v1.4.5 campaign helper that builds party screens for troop, prisoner, loot, ransom, quest, and clan-party flows."
---
# PartyScreenHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PartyScreenHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## Responsibility

`PartyScreenHelper` is the campaign entry-point layer for troop and prisoner presentations. Its public methods create a [PartyState](../../campaign/PartyState), configure [PartyScreenLogic](../../campaign/PartyScreenLogic) with rosters, transfer rules, limits, and callbacks, then push the state through [GameStateManager](../../core-extra/GameStateManager). The helper is not a party model and does not make every transfer itself; the logic and done handlers decide what is applied when the screen closes.

## Mental model

Every screen method assembles a stateful transfer session:

```text
party/roster context -> PartyScreenLogicInitializationData -> PartyState -> GameStateManager.PushState
```

`PartyScreenMode` labels the session as normal, loot, ransom, prisoner management, troop management, or quest troop management. The helper wires mode-specific transfer delegates and completion handlers. `CloseScreen` calls `PartyScreenLogic.DoneLogic` unless the caller is cancelling, then invokes `OnPartyScreenClosed`, clears the logic, and pops the state.

Some completion handlers are deliberately mutating. The default handler processes released and taken prisoners; garrison and clan-party handlers can add parties, move heroes, transfer ships, or destroy an empty party. Treat this helper as a UI workflow boundary with campaign side effects, not as a read-only convenience API.

## When to use and when not to use

- **Use it** when a real campaign interaction already has the correct `MobileParty`, `PartyBase`, `TroopRoster`, transfer delegates, capacity, and close callback.
- **Use `OpenScreenWithCondition` or `OpenScreenAsQuest`** for mod-owned selection flows that need custom transfer predicates and button conditions; pass callbacks that match the source delegate contracts.
- **Do not instantiate it.** It is a static state factory.
- **Do not call a mode-specific method without its expected campaign context.** Ransom, donation, garrison, settlement, and clan-party methods read current settlement, main-party, clan, or hero state.
- **Do not assume closing is neutral.** `DefaultDoneHandler`, prisoner handlers, and clan-party handlers can dispatch actions and modify campaign parties after the UI returns.

## Public surface

### Party modes

```csharp
public enum PartyScreenMode
{
    Normal,
    Shared,
    Loot,
    Ransom,
    PrisonerManage,
    TroopsManage,
    QuestTroopManage
}
```

The mode is stored on `PartyState` and consumed by `PartyScreenLogic`. It is a presentation contract, not a permission flag by itself; transfer states and delegates still determine what can move.

### State access and closing

```csharp
public static PartyState GetActivePartyState()
public static void CloseScreen(bool isForced, bool fromCancel = false)
```

`GetActivePartyState` reads `GameStateManager.Current.ActiveState`. It emits a failed assertion and returns `null` when another game state is active. `CloseScreen` finds the active logic, runs `DoneLogic(isForced)` unless cancellation bypasses it, invokes `OnPartyScreenClosed(fromCancel)`, clears `PartyScreenLogic`, and pops the state.

## Standard and specialized entry points

| Entry points | Source-defined workflow |
| --- | --- |
| `OpenScreenAsNormal`, `OpenScreenAsCheat` | Build a main-party screen; normal mode branches to the cheat roster when `Game.Current.CheatMode` is enabled. |
| `OpenScreenAsLoot`, `OpenScreenAsRansom` | Configure loot or ransom transfer states and their completion handlers. |
| `OpenScreenAsManageTroops`, `OpenScreenAsManageTroopsAndPrisoners`, `OpenScreenAsReceiveTroops` | Build standard troop/prisoner transfer views around a real mobile party or supplied roster. |
| `OpenScreenAsDonateTroops`, `OpenScreenAsDonateGarrisonWithCurrentSettlement`, `OpenScreenAsDonatePrisoners`, `OpenScreenAsManagePrisoners` | Build donation and garrison flows with capacity checks and settlement callbacks. |
| `OpenScreenWithCondition`, `OpenScreenForManagingAlley`, `OpenScreenAsQuest` | Accept custom transfer predicates, button conditions, callbacks, limits, and mode-specific rosters. |
| `OpenScreenWithDummyRoster`, `OpenScreenWithDummyRosterWithMainParty`, `OpenScreenAsCreateClanPartyForHero` | Create controlled roster-selection flows, including the source clan-party creation path. |

All open methods create and push a new `PartyState`; they do not reuse the active state. The generic methods are the extension surface, but their delegates still run inside the stock `PartyScreenLogic` lifecycle.

## Real call-site examples

The town-visit campaign behavior opens a real garrison management screen from the current settlement:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

PartyScreenHelper.OpenScreenAsManageTroops(
    currentSettlement.Town.GarrisonParty);
```

The same source family uses `OpenScreenAsDonatePrisoners` and `OpenScreenAsDonateGarrisonWithCurrentSettlement` for settlement-side transfers. Those methods read `Hero.MainHero.CurrentSettlement`, create a garrison when required, and set the appropriate transfer states.

Encounter and caravan flows pass real rosters into loot screens:

```csharp
PartyScreenHelper.OpenScreenAsLoot(
    TroopRoster.CreateDummyTroopRoster(),
    troopRoster,
    encounteredMobileParty.Name,
    troopRoster.TotalManCount);
```

Issue and encounter behaviors use the generic condition entry point when the quest or encounter owns the transfer predicate and done callbacks:

```csharp
PartyScreenHelper.OpenScreenWithCondition(
    IsTroopTransferable,
    DoneButtonCondition,
    OnDoneClicked,
    null,
    PartyScreenLogic.TransferState.Transferable,
    PartyScreenLogic.TransferState.NotTransferable,
    base.QuestGiver.Name,
    requestedCount,
    showProgressBar: true,
    isDonating: false,
    screenMode: PartyScreenHelper.PartyScreenMode.PrisonerManage);
```

The callback names above belong to the owning behavior; the important contract is that the behavior supplies them rather than expecting `PartyScreenHelper` to infer quest rules.

## Dependencies and ownership

- [PartyState](../../campaign/PartyState) is the pushed state and stores `PartyScreenLogic`, `IsDonating`, and `PartyScreenMode`.
- [PartyScreenLogic](../../campaign/PartyScreenLogic) owns roster transfer validation, done-button evaluation, and the transfer history consumed by completion handlers.
- [GameStateManager](../../core-extra/GameStateManager) owns state creation and stack transitions; `PartyScreenHelper` only requests those transitions.
- [TroopRoster](../../campaign/TroopRoster), [FlattenedTroopRoster](../../campaign/FlattenedTroopRoster), [PartyBase](../../campaign/PartyBase), and [MobileParty](../../campaign/MobileParty) provide the real party-side inputs.
- Campaign actions such as prisoner taking, prisoner release, settlement entry, gold transfer, and party destruction are dispatched by the helper's done handlers or by the owning behavior after the callback.

## Risks and version boundaries

- `OpenScreenAsNormal` is cheat-sensitive: with `Game.Current.CheatMode` it opens a roster containing valid encyclopedia troops; otherwise it uses the normal main-party flow.
- `OpenScreenAsRansom` clones the main-party member and prisoner rosters and sets `DoNotApplyGoldTransactions`; it is not equivalent to a normal prisoner transfer.
- `OpenScreenAsManagePlayerClanPartyClosed` can transfer ships and destroy the left party when its member roster is empty. It must not be reused as a generic no-op close callback.
- Donation and garrison methods read `Hero.MainHero.CurrentSettlement` and may create a garrison party. Calling them outside a settlement context can fail before the state is usable.
- `CloseScreen` with `fromCancel` changes whether `DoneLogic` runs. The selected `isForced` value also changes the logic's close decision, so callers must preserve the UI's original close semantics.
- The generic methods accept nullable rosters and callbacks only where the v1.4.5 signature permits them. The helper fills dummy rosters in some paths, but it does not validate arbitrary custom delegate behavior.

## Version note

This page follows v1.4.5 `PartyScreenHelper.cs`. The helper orchestrates a temporary party-screen state; roster ownership, action dispatch, save behavior, and campaign event semantics remain in the linked logic, rosters, actions, and behaviors.

## Navigation

- [↑ API system index](../)
- [Sibling: InventoryScreenHelper](../InventoryScreenHelper)
- [Related: PartyState](../../campaign/PartyState)
- [Related: PartyScreenLogic](../../campaign/PartyScreenLogic)
- [Related: GameStateManager](../../core-extra/GameStateManager)
- [中文页面](../../../../zh/api/system/PartyScreenHelper)
