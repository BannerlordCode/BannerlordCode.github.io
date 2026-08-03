---
title: "MissionLogic"
description: "The Mission logic base for rules, victory, results, retreat, and surrender; polled through MissionLogics to drive the end sequence."
---

# MissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionLogic : MissionBehavior`  
**Base:** [`MissionBehavior`](../../mission/MissionBehavior)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLogic.cs`

## One-line responsibility

`MissionLogic` specializes `MissionBehavior` for rules: it lets Mission poll victory, ask whether leaving is allowed, aggregate extra equipment, and distribute the battle result to every Logic behavior.

## Mental model

Treat it as a **rules participant of Mission**, not merely as an event listener. When `Mission.AddMissionBehavior` sees `BehaviorType == Logic`, it puts the object in `MissionLogics`; Mission's end checks iterate that collection. Deriving from `MissionLogic` therefore opts the class into the Mission victory and end protocol.

Ownership still belongs to the host `Mission`: a factory delegate returns the object, or an already-open Mission adds it dynamically. Do not read `Mission` in the constructor. When `MissionEnded` returns `true`, the same call must supply a real `MissionResult` through `ref`; `false` means the rule is not complete. Once the result is ready, Mission calls `OnMissionResultReady` on every Logic before showing results and tearing down.

## When to use, when not to

**Use it for:**

- Victory checks, player-leave policy, surrender/retreat handling, and `MissionResult` creation.
- Rule cleanup in `OnBattleEnded`, `OnRetreatMission`, `OnSurrenderMission`, or `OnMissionResultReady`.
- Supplying extra equipment elements for a `BasicCharacterObject` during Mission aggregation.

**Do not use it for:**

- Pure Agent hit, scene entity, or camera observation that does not participate in rules; derive from [`MissionBehavior`](../../mission/MissionBehavior) and return `Other`.
- Campaign map war, gold, or relation changes; use the appropriate Campaign Action/Behavior instead of putting save-world mutations in result polling.
- Ending a Mission while the result is incomplete; `MissionEnded` must remain `false` until a valid result can be written.

## The `Logic` classification contract

The source fixes `BehaviorType` to `MissionBehaviorType.Logic`. Mission therefore puts the object in both `MissionBehaviors` and `MissionLogics`, then calls `OnCreated` when it is attached. Do not override the property in a subclass to change the routing.

The dependency chain is: a Mission factory or `AddMissionBehavior` creates and attaches Logic -> Mission polls it during runtime -> Logic writes `MissionResult` -> Mission broadcasts result and end callbacks -> Mission enters `EndMissionInternal` and runs inherited `MissionBehavior` cleanup.

## Callbacks and timing

### Initialization, start, and common ticks

`OnBehaviorInitialize`, `OnCreated`, `EarlyStart`, `AfterStart`, `OnPreMissionTick`, and `OnMissionTick` are inherited from `MissionBehavior`. Use them to prepare teams, cache current Mission state, or drive rules, but do not use `Mission` from the constructor. A Logic's rule callbacks should read Agents only after the scene and deployment state they depend on are available.

### End request: `OnEndMissionRequest`

When Mission receives a leave request it asks each Logic. The `out bool canLeave` and return value express the policy:

- `canLeave = false`: Mission immediately rejects leaving and does not show the returned inquiry.
- `canLeave = true` with an `InquiryData` return: Mission pauses active state and shows the confirmation inquiry.
- `canLeave = true` with `null`: this Logic does not block leaving, so other Logic objects are asked.

This is not the victory entry point; it controls whether a leave/retreat request may proceed. The real `BaseBattleMissionController` blocks leaving when the player is close to an enemy, otherwise creates a retreat inquiry whose confirmation callback is `Mission.OnEndMissionResult`.

### Result check: `MissionEnded`

Mission's `CheckMissionEnded` iterates `MissionLogics`, creates an empty `MissionResult` reference for each Logic, and calls `MissionEnded(ref missionResult)`. The first Logic returning `true` becomes the result source. Mission sets `MissionEnded`, stores the result, and calls `OnMissionResultReady` on every Logic.

The implementation must therefore return `false` until its condition is met, assign `missionResult` in the same call that returns `true`, and avoid depending on a particular sibling Logic order. Do not call `EndMission` directly from this method.

### Result display and battle end

- `ShowBattleResults`: Mission has recognized the end and is still before final teardown. Mission calls it from its end-check cycle; it is not a one-time constructor hook.
- `OnMissionResultReady`: the result is fixed, so this is the point to pass it to Campaign settlement code or prepare UI data.
- `OnBattleEnded`: `Mission.OnEndMissionResult` notifies every Logic and then calls `RetreatMission`; it marks the result flow entering its end phase.

### Retreat, surrender, and final teardown

`OnRetreatMission` and `OnSurrenderMission` are called from their respective Mission entry points, after which Mission normally calls `EndMission()`. The next phase enters `EndMissionInternal`, which calls inherited `OnEndMissionInternal` on all behaviors. Do not create Agents or Teams, or retain Mission-owned objects for another Mission, during these phases.

## Key members and side effects

| Member | Purpose and timing |
|---|---|
| `BehaviorType` | Fixed to `MissionBehaviorType.Logic`, routing the object into `MissionLogics`. |
| `OnEndMissionRequest(out bool canLeave)` | Decides whether a leave request is blocked, confirmed with `InquiryData`, or allowed; an inquiry pauses active state. |
| `MissionEnded(ref MissionResult missionResult)` | End-condition entry; a `true` return must write the result in the same call. The first successful Logic owns the result. |
| `OnBattleEnded()` | Result-flow callback from `OnEndMissionResult`, followed by retreat/end processing. |
| `ShowBattleResults()` | Display phase after a result is recognized and before final Mission cleanup. |
| `OnRetreatMission()` / `OnSurrenderMission()` | Rule cleanup for the corresponding leave reason; neither replaces `OnEndMissionInternal`. |
| `GetExtraEquipmentElementsForCharacter(...)` | Mission merges every non-null list from every Logic; the default is `null` when this Logic contributes nothing. |
| `OnMissionResultReady(MissionResult)` | All Logic objects see the final result; use it to prepare downstream settlement without changing the result. |

## Dependencies

- **Host:** [`Mission`](../../mission/Mission) owns `MissionLogics` and controls result polling, display, retreat/surrender, and `EndMissionInternal`.
- **Base contract:** [`MissionBehavior`](../../mission/MissionBehavior) supplies the `Mission` back-reference, general Agent/Team/tick callbacks, and `OnRemoveBehavior` cleanup.
- **Scene data:** [`Agent`](../../mission/Agent), [`Team`](../Team), and [`Formation`](../../mission/Formation) are common runtime inputs for victory and deployment rules.
- **Registration upstream:** SandBox's `OpenBattleMission` uses `MissionState.OpenNew` and `InitializeMissionBehaviorsDelegate` to return Logic objects; StoryMode's `AchievementsCampaignBehavior` dynamically calls `AddMissionBehavior` after a Mission starts.
- **Result downstream:** `MissionResult`, `InquiryData`, and Campaign settlement behaviors consume the callbacks; do not bypass Mission to end the outer Campaign from inside Logic.

## Risks and crash boundaries

1. **Missing Logic classification:** A listener that does not derive from `MissionLogic` never enters `MissionLogics`; an ordinary `MissionBehavior` will not receive result polling.
2. **Returning true without a result:** If `MissionEnded` returns `true` while `missionResult` is still `null`, result display and Campaign settlement can run on invalid state.
3. **Double-ending:** Do not call `EndMission` from `MissionEnded`, or re-run and overwrite the result in `OnMissionResultReady`; Mission owns the state machine.
4. **Misused leave inquiry:** `canLeave = false` immediately blocks the flow, while an `InquiryData` return pauses active state. Return an inquiry only when the rule truly needs confirmation.
5. **Phase-sensitive Agent references:** By `OnMissionResultReady`, retreat, or final teardown, Agents, Teams, and Formations may already be near removal. Do not carry them into another Mission.
6. **Null-list semantics:** `null` from `GetExtraEquipmentElementsForCharacter` means this Logic contributes nothing and is skipped by Mission; returning a shared mutable list exposes later mutations to the aggregate.

## Real factory registration example

`SandBoxMissions.OpenBattleMission(MissionInitializerRecord rec)` uses this exact entry: `MissionState.OpenNew` creates the Mission, `InitializeMissionBehaviorsDelegate` returns `MissionBehavior` objects, and the list includes `BattleEndLogic`, `BattleObserverMissionLogic`, and other `MissionLogic` subclasses.

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public sealed class CounterBattleLogic : BaseBattleMissionController
{
    public CounterBattleLogic(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!Mission.IsDeploymentFinished)
        {
            return false;
        }

        if (Mission.MainAgent == null || !Mission.MainAgent.IsActive())
        {
            missionResult = MissionResult.CreateDefeated(Mission);
            return true;
        }

        return base.MissionEnded(ref missionResult);
    }
}

public static Mission OpenBattleWithCounterLogic(
    MissionInitializerRecord rec,
    bool isPlayerAttacker)
{
    return MissionState.OpenNew(
        "Battle",
        rec,
        (Mission mission) => new MissionBehavior[]
        {
            new CounterBattleLogic(isPlayerAttacker),
            new BattleEndLogic()
        },
        true,
        true);
}
```

This is the same acquisition path as the source factory: the delegate receives the newly created `Mission`, while the behaviors use their host reference only after `AddMissionBehavior` attaches them. For a live Mission, the StoryMode shape is `Mission.Current.AddMissionBehavior(new AchievementMissionLogic(...))` from `OnMissionStarted`.

## See also and bidirectional navigation

- ↑ Parent (module index): [Mission extensions module home](./)
- ↔ Related entries: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- Scene dependencies: [Agent](../../mission/Agent) · [Team](../Team) · [Formation](../../mission/Formation)
- Upstream modules: [Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase)
- Writing contract: [Doc Contract](../../../architecture/doc-contract)
