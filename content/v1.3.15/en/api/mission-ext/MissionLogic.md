---
title: "MissionLogic"
description: "The MissionBehavior subclass for end conditions, leave requests, retreat or surrender, and battle-result callbacks."
---
# MissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionLogic : MissionBehavior`  
**Base:** [`MissionBehavior`](../../mission/MissionBehavior/)  
**Source:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## Responsibility in one line

It adds the decision points for when a Mission ends, whether the player may leave, and when its result is ready to the normal scene-behavior lifecycle.

## Mental model

`MissionLogic` is not a second Agent system. It is the specialized subclass whose `BehaviorType` is fixed to `Logic`:

```text
Mission
├─ MissionBehaviors       every scene behavior
└─ MissionLogics          MissionLogic instances with BehaviorType == Logic
   ├─ MissionEnded(ref result)   polled by Mission.CheckMissionEnded
   ├─ OnMissionResultReady       result is ready
   ├─ ShowBattleResults          result-display stage
   └─ OnBattleEnded              post-battle logic notification
```

It is supplied by the Mission creation path or attached with `Mission.AddMissionBehavior`. That method adds the instance to `MissionBehaviors`, adds it to `MissionLogics` because of `BehaviorType == Logic`, and then calls `OnCreated`. If it is never registered, `CheckMissionEnded` will never call it.

## When to use and when not to

**Use it for:** custom win/lose conditions, ending after a boss is removed, intercepting a leave request, retreat/surrender notifications, extra Mission equipment, and result handling after `OnMissionResultReady`.

**Use another entry point when:**

| Need | Correct entry |
|---|---|
| Only count kills or observe hits, without deciding the end | Inherit [`MissionBehavior`](../../mission/MissionBehavior/) and return `MissionBehaviorType.Other` |
| Change campaign heroes, parties, kingdoms, or relations | Record the Mission result, then call the relevant `*Action.Apply` at a safe campaign phase; do not reorder the world in a death callback |
| Persist state across battles | `CampaignBehaviorBase.SyncData`, campaign objects, or the save system |
| Let vanilla `BattleEndLogic` and custom logic both decide the same result | Define one result owner; multiple logics returning `true` are resolved by the first one in `MissionLogics` order |

## Real registration and lookup

1. **Register while creating the Mission:** the source method `SandBoxMissions.OpenTownCenterMission` puts `BasicLeaveMissionLogic`, `BattleAgentLogic`, and other behaviors into the collection returned by the `MissionState.OpenNew` behavior factory. A custom logic belongs in that same `InitializeMissionBehaviorsDelegate` collection.
2. **Register at runtime:** the actual public Mission entry is:

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.CurrentState == Mission.State.Continuing)
{
    mission.AddMissionBehavior(new CaptureFlagLogic());
}
```

3. **Look up a registered logic:**

```csharp
MissionLogic logic = Mission.Current?.GetMissionBehavior<CaptureFlagLogic>();
if (logic != null)
{
    logic.OnRetreatMission();
}
```

Do not write `MissionGameStarter.AddBehavior(...)`. The inspected 1.3.15 and 1.4.5 MountAndBlade sources have no such Mission registration type. `CampaignGameStarter` belongs to Campaign startup and does not replace the Mission behavior factory.

## End protocol and lifetime

| Stage | What Mission does | Logic entry |
|---|---|---|
| Initialization | Binds the Mission and runs behavior initialization | `OnBehaviorInitialize`, `EarlyStart`, `AfterStart` inherited from MissionBehavior |
| Runtime | Drives every behavior each frame | `OnMissionTick`, `OnAgentRemoved`, and other inherited hooks |
| End check | Iterates `MissionLogics` | The first logic returning `true` writes the result and stops the check |
| Result ready | Delivers the result to every logic | `OnMissionResultReady(MissionResult)` |
| Result display | Asks logics to present results during the ending delay | `ShowBattleResults()` |
| Battle end | Notifies logic and follows retreat/surrender paths | `OnBattleEnded()`, `OnRetreatMission()`, or `OnSurrenderMission()` |
| Teardown | Cleans behaviors, scene units, teams, and native resources | `OnEndMissionInternal`, `OnRemoveBehavior` |

`MissionLogic.cs` itself is intentionally thin. It defines end/result/leave/equipment virtuals; Agent, Team, tick, and object events come from [`MissionBehavior`](../../mission/MissionBehavior/).

## Key members

| Member | Use and timing | Result or side effect |
|---|---|---|
| `BehaviorType` | Automatically returns `MissionBehaviorType.Logic` | Places the instance in `MissionLogics`; do not change it to `Other` in a subclass |
| `MissionEnded(ref MissionResult missionResult)` | Called during Mission end checks | Return `true` only with a real result; a false positive ends the fight early |
| `OnEndMissionRequest(out bool canLeave)` | Called when the player requests to leave | Return `InquiryData` for confirmation; `canLeave = false` blocks leaving |
| `OnRetreatMission`, `OnSurrenderMission` | Called on retreat or surrender paths | Good for Mission-scoped notifications; campaign write-back still needs campaign timing |
| `OnMissionResultReady` | Called after the result is determined | Pass temporary results to a handler; do not decide a second result here |
| `ShowBattleResults`, `OnBattleEnded` | Result display and post-battle stages | They can run after agents have been removed; do not assume agents remain active |
| `GetExtraEquipmentElementsForCharacter` | Mission asks logics for extra equipment during agent setup | `null` means no extras; do not return uninitialized elements |
| `OnAgentRemoved`, `OnMissionTick` | Inherited from MissionBehavior | Collect conditions here; make the final decision in `MissionEnded` |

## Agent-death example

The death hook belongs to the base class, but it commonly updates an end-condition flag:

```csharp
public sealed class BossDefeatLogic : MissionLogic
{
    private bool _bossRemoved;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        if (affectedAgent.IsHero && affectedAgent.Team?.Side == BattleSideEnum.Defender)
        {
            _bossRemoved = agentState == AgentState.Killed;
        }
    }

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!_bossRemoved || Mission == null)
        {
            return false;
        }

        missionResult = MissionResult.CreateSuccessful(Mission, enemyRetreated: false);
        return true;
    }
}
```

This stores only a boolean, not the removed Agent reference. Extract the needed Agent/Team identity immediately in `OnAgentRemoved`; apply campaign rewards, relations, or Hero changes only after the Mission result is handed back to the campaign layer.

## Dependencies and risks

- [`Mission`](../../mission/Mission/) owns `MissionBehaviors` and `MissionLogics`, and decides when to poll `MissionEnded`.
- [`MissionBehavior`](../../mission/MissionBehavior/) supplies Agent, Team, tick, interaction, and cleanup callbacks.
- [`Agent`](../../mission/Agent/), [`Team`](../../mission/Team/), and [`Formation`](../../mission/Formation/) are live objects often read by end conditions.
- [`BattleEndLogic`](../BattleEndLogic/) is a real vanilla end-logic example; adding another result owner requires an explicit priority decision.
- [`Campaign`](../../campaign/Campaign/), `MapEvent`, and campaign `*Action` types are downstream of the result. Do not perform re-entrant map reshuffles from `OnAgentRemoved`.

Potentially crashing or save-corrupting patterns include:

1. Reading `Mission.Current` in a constructor before the behavior is bound.
2. Adding a logic at runtime and assuming `OnBehaviorInitialize`, `EarlyStart`, or `AfterStart` will run retroactively.
3. Keeping an Agent or Team reference from `OnAgentRemoved` and using it after Mission teardown.
4. Letting multiple logics return `true` without coordination, or writing an incomplete `MissionResult`.
5. Leaving `canLeave = false` permanently, or mutating the active behavior list again from teardown.

## Cross-version notes

- 1.3.15 and 1.4.5 both place `MissionLogic` in `MissionLogics` and use `MissionEnded(ref MissionResult)` for end decisions.
- The cross-version-safe registration pattern is to return the logic from the Mission creation behavior collection, or call `AddMissionBehavior` on a confirmed current Mission.
- Concrete SandBox logics vary by game mode; do not treat one mode's end logic as the default behavior of every Mission.

## Navigation

- [↑ Mission extension module](./)
- [↔ Mission](../../mission/Mission/)
- [↔ MissionBehavior](../../mission/MissionBehavior/)
- [Related Agent](../../mission/Agent/) · [Team](../../mission/Team/) · [Formation](../../mission/Formation/)
- [Vanilla BattleEndLogic](../BattleEndLogic/)
- [Architecture: crash and save boundaries](../../../architecture/crash-boundaries/)
