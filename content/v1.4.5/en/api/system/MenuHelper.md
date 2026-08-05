---
title: "MenuHelper: campaign menu state and encounter callbacks"
description: "MenuHelper connects campaign menu callbacks to option flags, location transitions, encounter decisions, and mission or battle consequences in v1.4.5."
---
# MenuHelper

**Namespace:** `Helpers`
<br>**Module:** `TaleWorlds.CampaignSystem`
<br>**Type:** `public static class MenuHelper`
<br>**Base:** `System.Object`
<br>**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## One-sentence responsibility

`MenuHelper` is the campaign menu callback layer: it writes option metadata, reads live encounter state, moves between settlement locations, and dispatches the battle or mission transition owned by the callback.

## Mental Model

Treat this class as a group of callbacks, not as a menu service with an independent lifetime. The game owns `MenuCallbackArgs`, `Campaign.Current.GameMenuManager`, `PlayerEncounter`, and `MapEvent`; `MenuHelper` reads those objects and sometimes changes them. The safe split is important: `SetOptionProperties`, the quest-flag helpers, and most `*Condition` methods prepare or answer a menu question, while `EncounterAttackConsequence`, `EncounterOrderAttackConsequence`, `EncounterCaptureTheEnemyOnConsequence`, and `EncounterLeaveConsequence` advance the encounter.

## When to use and when not to use

- Use `SetOptionProperties` when a menu callback already has a `canPlayerDo` decision and needs the standard disabled state and tooltip behavior.
- Use `SetIssueAndQuestDataForHero` or `SetIssueAndQuestDataForLocations` while constructing menu option metadata; they merge flags into the supplied `MenuCallbackArgs`.
- Use the encounter conditions as the callback for the corresponding campaign menu option, after the campaign has created `PlayerEncounter` and its `MapEvent`.
- Do not call an encounter consequence from a tooltip, render loop, or speculative calculation. Those methods can apply hostility, start a battle or siege mission, simulate a round, finish an encounter, or switch the active menu.
- Do not use `CheckAndOpenNextLocation` without the live `MapState` and a pending `GameMenuManager.NextLocation`; it creates the location mission controller and clears the pending locations.

## Dependencies and call chain

```text
GameMenu callback -> MenuCallbackArgs
        |                 |
        v                 v
Campaign.Current    PlayerEncounter / MapEvent
        \                 /
         v               v
             MenuHelper
                 |
     GameMenu, Mission, siege, or encounter transition
```

- [`Campaign`](../../campaign/Campaign) and [`CampaignEvents`](../../campaign/CampaignEvents) provide the campaign lifetime and event-owned state that callbacks must not outlive.
- [`MapEvent`](../../campaign/MapEvent), [`Settlement`](../../campaign/Settlement), [`MobileParty`](../../campaign/MobileParty), and [`Hero`](../../campaign/Hero) supply the live encounter, location, and party inputs.
- [`CampaignMission`](../../campaign/CampaignMission) and [`EncounterGameMenuModel`](../../campaign/EncounterGameMenuModel) are downstream boundaries: the helper can select or start a route, but the mission and model systems own their own lifecycle and calculations.

## Public members by contract

| Group | Members | Source-confirmed behavior |
|---|---|---|
| Option metadata | `SetOptionProperties`, `SetIssueAndQuestDataForHero`, `SetIssueAndQuestDataForLocations` | Mutate `MenuCallbackArgs` enabled state, tooltip, or issue/quest flags. `SetOptionProperties` returns `true` for an allowed action, returns `false` when it should remain enabled but unavailable, and disables the option when `shouldBeDisabled` is true. |
| Location flow | `CheckAndOpenNextLocation`, `DecideMenuState` | Opens the pending location controller and selects the next settlement menu, or switches to the model-provided generic encounter menu and otherwise exits to the last menu. These are state transitions, not string lookups. |
| Encounter conditions | `EncounterAttackCondition`, `EncounterCaptureEnemyCondition`, `EncounterOrderAttackCondition`, `CheckEnemyAttackableHonorably` | Read the current map event, wounded/raft/army state, siege preparation, morale, and attackability. They also write leave type, disabled state, tooltip, and text variables into callback arguments. |
| Encounter consequences | `EncounterAttackConsequence`, `EncounterOrderAttackConsequence`, `EncounterCaptureTheEnemyOnConsequence`, `EncounterLeaveConsequence` | Apply hostility, start or simulate combat, override a winner, update/finish an encounter, clear a besieger camp, or re-enter a settlement encounter. Call only from the owning menu action. |
| Presentation | `GetEncounterCultureBackgroundMesh` | Returns the culture encounter mesh and appends `_naval` for a naval map event. Invalid or missing culture mesh returns an empty string after a failed assertion. |

## Real example: keep menu preparation and transition separate

The following is shaped like a real game-menu callback. The callback receives the engine-owned arguments, prepares their option state, and returns the condition result without constructing a fake menu or mission:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.Localization;

public static bool CanPlayerAttack(MenuCallbackArgs args)
{
    TextObject disabledText = new TextObject("{=custom_attack_disabled}Attack is unavailable.");
    bool canPlayerDo = MenuHelper.EncounterAttackCondition(args);
    return MenuHelper.SetOptionProperties(args, canPlayerDo, shouldBeDisabled: false, disabledText);
}
```

`EncounterAttackCondition` already writes the hostile leave type, tooltip, and several live-state decisions. The later menu consequence is the point at which `EncounterAttackConsequence` may call `BeHostileAction`, open `CampaignMission` routes, or start a siege mission; do not substitute it into this predicate.

## Lifecycle and mutation boundaries

`CheckAndOpenNextLocation` requires `GameStateManager.Current.ActiveState` to be a `MapState`, then calls `PlayerEncounter.LocationEncounter.CreateAndOpenMissionController`. It maps location IDs such as `center`, `tavern`, `arena`, `lordshall`, `prison`, and `port` to the next campaign menu and clears both pending location fields.

`EncounterAttackConsequence` can branch into village, hideout, siege, naval, caravan, and ordinary battle missions. `EncounterOrderAttackConsequence` applies hostility and starts battle simulation through the active map state. `EncounterLeaveConsequence` may finish the encounter, clear `MobileParty.MainParty.BesiegerCamp`, simulate a battle round, and start a settlement encounter. These methods are not idempotent UI helpers.

## Risks and save boundaries

- Call conditions only while the relevant `Campaign.Current`, `PlayerEncounter`, `MapEvent`, and active `GameState` exist. Menu teardown and save/load boundaries can leave those references unavailable.
- `EncounterAttackCondition` and `EncounterOrderAttackCondition` inspect raft state, siege preparation, morale, healthy troop counts, naval ships, and attackability timestamps. A cached boolean can be stale after a tick or action.
- `EncounterCaptureEnemyCondition` intentionally excludes settlement parties and accepts an opponent whose healthy members are zero or whose mobile party is in raft state; it is not a generic "all enemies defeated" query.
- `GetEncounterCultureBackgroundMesh` returns `string.Empty` after an assertion for a missing mesh. Treat that as invalid presentation data rather than a valid fallback asset.
- The helper does not define save schema. Persist campaign-owned state through its owner; never serialize `MenuCallbackArgs`, `MapEvent`, an active mission, or a callback delegate as mod state.

## Version note

This page follows v1.4.5 `MenuHelper.cs`, including naval encounter branches, the `MapState` requirement for location opening, and the `_naval` presentation suffix. Recheck all consequence paths when targeting another Bannerlord build.

## Navigation

- [↑ API system index](../)
- [↔ SettlementHelper](../SettlementHelper)
- [↔ PersuasionHelper](../PersuasionHelper)
- [Related: Campaign](../../campaign/Campaign)
- [Related: MapEvent](../../campaign/MapEvent)
- [Related: CampaignMission](../../campaign/CampaignMission)
- [Related: EncounterGameMenuModel](../../campaign/EncounterGameMenuModel)
- [中文页面](../../../../zh/api/system/MenuHelper)
