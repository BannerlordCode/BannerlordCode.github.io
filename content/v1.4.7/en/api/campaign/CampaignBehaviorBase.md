---
title: "CampaignBehaviorBase"
description: "The standard base class for campaign-layer extensions: lets one Behavior subscribe to events when the campaign is created and synchronise its own fields on save and load. Almost every piece of campaign-level mod logic derives from it."
---
# CampaignBehaviorBase

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** implements `TaleWorlds.CampaignSystem.ICampaignBehavior` (no base class)
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs` (declared at line 6)

## Overview

`CampaignBehaviorBase` is the only officially recommended extension vehicle on the campaign layer. It does exactly two things, and those two cover the hard requirements of most mod logic: subscribe to [CampaignEvents](../CampaignEvents) once the campaign object exists, and synchronise your own fields into and out of the save. Alliances, lord AI, siege logic and the quest system in the base game derive from it. As long as a mod follows the same lifecycle as the base game, it will not blow up on load.

The interface is deliberately tiny — two constructors, two abstract methods, one static accessor, one `StringId` field — and that smallness is the point: the constraints are unambiguous. Subclasses must implement `RegisterEvents()` and `SyncData(IDataStore)`. Skipping the first means events never fire; skipping the second means fields are not persisted and reset on load. `StringId` identifies the Behavior inside `CampaignBehaviorManager`, and two Behaviors sharing a string ID collide there.

Its position in the stack: [MBSubModuleBase](../../core/MBSubModuleBase) receives an `IGameStarter`, which in campaign mode is a [CampaignGameStarter](../CampaignGameStarter); that calls `AddBehavior` to attach your instance to [Campaign](../Campaign). Once campaign initialisation completes the engine calls `RegisterEvents`, and at save time it calls `SyncData`. A Behavior is **not** a global singleton — `Campaign.Current.GetCampaignBehavior<T>()` fetches by type and returns null when nothing is registered.

## Mental Model

Deriving a Behavior is four steps, and skipping any one of them fails at a specific moment:

1. **Declare an ID and derive.** Prefer `public MyBehavior() : base("MyModId.MyBehavior") {}`. An explicit string ID is debuggable and survives refactors; the parameterless base constructor falls back to the class name, so renaming the class renames the ID.
2. **`RegisterEvents()` subscribes and nothing else.** It runs after the campaign object is created but while many Managers are still being assembled. Iterating `FactionManager` and caching results here captures incomplete data. Subscribe to `OnAfterSessionLaunchedEvent` or a tick event instead and do the work there.
3. **`SyncData(IDataStore)` must cover every persistent field.** `IDataStore` exposes exactly three members: `SyncData<T>(string key, ref T data)`, `IsSaving` and `IsLoading`. Reading and writing use the *same* `SyncData` call — the direction is decided by the save system, not by you. A field you never pass here does not reach the save; a field you pass but the engine cannot resolve comes back as a default.
4. **Keep subscription and removal symmetric.** When the campaign is destroyed the engine calls `CampaignEvents.RemoveListeners(owner)`, which strips every listener registered by that owner — **provided you pass the same owner you registered with**. Passing `this` from a Behavior is the simplest and safest choice.

The common mistakes: treating `RegisterEvents` as an initialisation hook; calling `Campaign.Current.GetCampaignBehavior<Other>()` from inside `SyncData` (Behavior registration order is not guaranteed, so you get null); mutating business objects directly in `SyncData` instead of only moving data into local fields; and caching mission-scoped references past the campaign lifetime.

## When to Use / When Not To

- **Use**: for any logic that must hold for as long as the campaign exists — diplomacy rule changes, daily economic settlement, event reactions, custom UI state.
- **Use**: for any campaign-level state that must survive a save (custom counters, toggles, player markers).
- **Use**: as a host for static helper methods (the convenience `public static T GetCampaignBehavior<T>()`).
- **Don't**: derive it for in-mission logic. The battle layer has `MissionBehavior`, whose lifecycle is completely different and which does not participate in saves. It has no English page — the Chinese [zh `MissionBehavior`](../../../../zh/api/mission/MissionBehavior) is the only one on disk.
- **Don't**: create a Behavior for a one-shot initialisation. [MBSubModuleBase](../../core/MBSubModuleBase) lifecycle callbacks (`OnCampaignStart` / `OnGameStart`) are enough.
- **Don't**: do heavy rebuilds inside `SyncData` (regenerating map objects, bulk `AddGameMenu`). Loading is a half-initialised state and such work reliably produces NREs.

## Member Guide

| Member | What it is for, side effects, timing |
| --- | --- |
| `CampaignBehaviorBase(string stringId)` | Constructor with an explicit ID. **Prefer this**: stable, readable, unchanged across refactors. |
| `CampaignBehaviorBase()` | Parameterless constructor; sets `StringId` to `GetType().Name`. Renaming the class silently changes the ID that the manager and debug logs key on. |
| `readonly string StringId` | The Behavior's string identity, exposed read-only so `CampaignBehaviorManager` and debug output can identify it. |
| `abstract void RegisterEvents()` | Called once after campaign creation; **subscribe only**. Doing real initialisation here is the single most common timing error. |
| `abstract void SyncData(IDataStore dataStore)` | Called at save time (`IsSaving`) and load time (`IsLoading`). **Must be symmetric**: every field you pass must be passed back. |
| `static T GetCampaignBehavior<T>()` | Static convenience forwarding to `Campaign.Current.GetCampaignBehavior<T>()`. **Returns null when the campaign is absent or the Behavior was never registered** — there is no null check inside. |

Implementing `ICampaignBehavior` is what lets the engine manage instances through one interface, but mods rarely touch its members directly. Per-tick logic is normally expressed by subscribing to the tick events on [CampaignEvents](../CampaignEvents) (`HourlyTickEvent`, `DailyTickEvent`, …) rather than by overriding interface methods.

## Examples

### Example 1: A complete Behavior — subscribe, persist, release

This is the standard skeleton. Note that `SyncData` uses the same call shape in both directions.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.SaveSystem;

public class VisitCounterBehavior : CampaignBehaviorBase
{
    private int _settlementVisits;

    public VisitCounterBehavior() : base("MyMod.VisitCounter")
    {
    }

    public override void RegisterEvents()
    {
        // Subscribe only — many Managers are not assembled yet at this point
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // IDataStore has only SyncData<T>(string, ref T), IsSaving and IsLoading.
        // Read and write use the same method; the save system picks the direction.
        dataStore.SyncData("VisitCounter.Visits", ref _settlementVisits);
    }

    private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        _settlementVisits++;
    }
}
```

### Example 2: Registering a Behavior and fetching it back safely

Registration goes through [CampaignGameStarter](../CampaignGameStarter) during campaign creation; fetching at runtime requires a null check.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        if (gameStarterObject is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new VisitCounterBehavior());
        }
    }

    protected override void OnCampaignStart(Game game, object starterObject)
    {
        base.OnCampaignStart(game, starterObject);

        // Null when not registered — never dereference without checking
        VisitCounterBehavior behavior = Campaign.Current.GetCampaignBehavior<VisitCounterBehavior>();
        if (behavior != null)
        {
            // The static accessor is equivalent, and equally null-unsafe
            VisitCounterBehavior viaStatic = VisitCounterBehavior.GetCampaignBehavior<VisitCounterBehavior>();
        }
    }
}
```

## Risks and Boundaries

- **A missing field in `SyncData` is the number-one source of load-time crashes and state corruption.** Because `IDataStore.SyncData<T>` is the same call in both directions, forgetting a field means the engine never sees it — and a partially-restored Behavior is the result.
- **The `RegisterEvents` timing window.** It fires immediately after the campaign object is created, before many `Campaign.Current` internals finish assembling. Do initialisation on `OnAfterSessionLaunchedEvent`, not here.
- **`GetCampaignBehavior<T>()` returns null in three situations**: `Campaign.Current` is null, the Behavior was never registered, or it was removed with `RemoveBehaviors<T>()`. The static `CampaignBehaviorBase.GetCampaignBehavior<T>()` offers no additional safety.
- **`StringId` collisions.** Two Behaviors with the same string ID corrupt `CampaignBehaviorManager`'s bookkeeping in a way that is very hard to debug. Always namespace the ID.
- **Never cache a Behavior instance in a static across campaigns.** Instances are created and destroyed with the campaign; a static field points at a dead object on the next game.
- **Never hold mission-scoped objects in a Behavior.** `Agent`, `MissionWeapon` and `MissionAgentHandler` all die when the mission ends, while the Behavior's lifetime spans many missions. In-mission logic belongs in `MissionBehavior` ([zh `MissionBehavior`](../../../../zh/api/mission/MissionBehavior); no English page).
- **Single-thread.** `RegisterEvents`, `SyncData` and every event callback run on the main game thread. Behavior logic triggered from a multiplayer sync callback must hop to the main thread first.
- **Repeated campaign loads.** Loading two campaigns in one process calls `RegisterEvents` again. Anything "one-shot" inside it — an `AddGameMenu`, for example — produces duplicate entries the second time.

## Dependencies

- Upstream / providers:
  - [CampaignGameStarter](../CampaignGameStarter)'s `AddBehavior` is the official registration path, attaching the instance to [Campaign](../Campaign).
  - [Campaign](../Campaign)'s `GetCampaignBehavior<T>()` / `GetCampaignBehaviors<T>()` are the retrieval paths and hold every instance.
- Peers / downstream:
  - [CampaignEvents](../CampaignEvents) is the main target of the subscriptions made in `RegisterEvents`.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnGameStart` supplies the `IGameStarter` that is the registration moment.
  - `SaveManager` → `SaveContext` / `LoadContext` invoke `SyncData` with the `IDataStore`. The save-system bucket has no English pages at all — all three are Chinese-only: [zh `SaveManager`](../../../../zh/api/save-system/SaveManager) · [zh `SaveContext`](../../../../zh/api/save-system/SaveContext) · [zh `LoadContext`](../../../../zh/api/save-system/LoadContext).
  - The battle-layer counterpart is `MissionBehavior`; do not mix the two.

## See Also

- ↑ Parent: [Campaign API index](../)
- ↔ Related: [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignGameStarter](../CampaignGameStarter) · [MBSubModuleBase](../../core/MBSubModuleBase) · zh [SaveManager](../../../../zh/api/save-system/SaveManager) · zh [MissionBehavior](../../../../zh/api/mission/MissionBehavior) (the two `zh` entries have no English pages; see [the gap list](../../../../GAPS))