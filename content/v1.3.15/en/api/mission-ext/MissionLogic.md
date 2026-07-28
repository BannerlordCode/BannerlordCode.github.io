---
title: "MissionLogic"
description: "MissionBehavior subclass for win/lose and end-of-mission: MissionEnded, leave confirmation, battle results. Agent-death hooks come from the base class."
---

# MissionLogic

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MissionLogic : MissionBehavior`  
**Base:** [MissionBehavior](../../mission/MissionBehavior)  
**File:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## Overview

`MissionLogic` is the **logic subclass** of `MissionBehavior`. It owns "when does this Mission end, what is the result, can the player leave?" style duties.

The source itself is thin (a set of empty `virtual`s). Real win/lose rules live in subclasses, for example vanilla [BattleEndLogic](../BattleEndLogic). In `Mission.CheckMissionEnded` the engine walks `Mission.MissionLogics` and calls `MissionEnded(ref MissionResult)` on each. The first `true` marks `MissionEnded` and raises `OnMissionResultReady`.

**Agent death, Tick, create** hooks are **not** new on `MissionLogic`. They come from `MissionBehavior` (`OnAgentRemoved`, `OnMissionTick`, and friends). You pick `MissionLogic` because you need the `MissionLogics` list and the end protocol. If you only count kills, a plain `MissionBehavior` (`BehaviorType.Other`) is usually the better fit.

## Mental Model

```
MissionBehavior                    ← general scene plugin (Tick / Agent events)
       │
       └── MissionLogic            ← BehaviorType = Logic
              │                    ← enters Mission.MissionLogics
              ├── BattleEndLogic   ← vanilla field-battle end
              ├── BasicLeaveMissionLogic
              └── your custom end conditions
```

| Dimension | Meaning |
|-----------|---------|
| Lifetime | One Mission; `AddMissionBehavior` also adds to `MissionLogics` when `BehaviorType == Logic` |
| Who creates | Mission start path / `MissionGameStarter` / runtime `Mission.Current.AddMissionBehavior` |
| Layer | Mission |
| End protocol | `MissionEnded` → write `MissionResult` → `OnMissionResultReady` → optional `ShowBattleResults` / `OnBattleEnded` |

### When to use

- Custom win/lose conditions (kill a boss, hold a point, timeout)
- Intercept "player presses leave": `OnEndMissionRequest` returns a confirm dialog or `canLeave = false`
- Retreat / surrender campaign write-back hooks (`OnRetreatMission` / `OnSurrenderMission`)
- You need `Mission.GetMissionBehavior<YourLogic>()` and to be scanned by the end check

### When not to use

| Don't | Use instead |
|-------|-------------|
| Only listen for kills, no end decision | Inherit `MissionBehavior`, `BehaviorType = Other` |
| Heavy kingdom/hero mutation inside `OnAgentRemoved` and assume it's safe | Put campaign Actions in post-battle write-back; see [crash boundaries](../../../architecture/crash-boundaries) |
| Multiple Logics all return `MissionEnded == true` with conflicting results | One authoritative end Logic, or coordinate `MissionResult` |
| Treat it like `CampaignBehaviorBase` (long-lived save state) | Campaign behavior + `SyncData`; MissionLogic is not saved |
| Forget to register, yet expect `CheckMissionEnded` to call you | Must `AddMissionBehavior`; base already fixes `BehaviorType.Logic` |

## Dependencies

```
Mission
  ├── MissionBehaviors (all behaviors)
  ├── MissionLogics (MissionLogic only)
  │     └── CheckMissionEnded() polls MissionEnded(ref result)
  └── MissionResult / MissionEnded flag
```

| Direction | Type | Relationship |
|-----------|------|--------------|
| Upstream | [Mission](../../mission/Mission) | `AddMissionBehavior`, `MissionLogics`, `CheckMissionEnded` |
| Base | [MissionBehavior](../../mission/MissionBehavior) | Agent / Tick / lifecycle hooks |
| Downstream example | [BattleEndLogic](../BattleEndLogic) | Vanilla field-battle end |
| Collaborators | [Team](../../mission/Team) / [Agent](../../mission/Agent) | End conditions often read team and unit state |
| Write-back | Campaign / MapEvent (via SandBox mission controllers) | Battle results return to the map; don't thrash the world mid-fight |

## Risks and crash boundaries

1. **Mission-only:** the `Mission` property is `null` after `RemoveMissionBehavior`.
2. **`MissionEnded` is the authority switch:** returning `true` sets `Mission.MissionEnded` and dispatches the result; false positives end the fight early.
3. **Agent hook timing:** in `OnAgentRemoved` the Agent is already leaving. Don't cache the reference long-term; persist Hero ids across battles. See [crash boundaries §4](../../../architecture/crash-boundaries).
4. **No unguarded `ChangeKingdomAction` / map reshuffles in death callbacks:** re-entrancy and bad saves. Push campaign consequences to `OnMissionResultReady` / map-side events.
5. **`OnEndMissionRequest`:** `canLeave = false` blocks leave; forgetting to restore traps the player in the scene.
6. **Coexistence with `BattleEndLogic`:** vanilla fights already have an end Logic. If you add another, decide who returns `true` first, or disable/replace the default (advanced, easy to break compat).

## How to register

### Path A: Mission starter (preferred, before combat)

```csharp
// In the factory or MissionGameStarter path that builds/opens the Mission:
missionStarter.AddBehavior(new MyBossFightLogic());
```

### Path B: Attach at runtime to the current Mission

```csharp
Mission mission = Mission.Current;
if (mission == null)
{
    return;
}

if (mission.GetMissionBehavior<MyBossFightLogic>() == null)
{
    mission.AddMissionBehavior(new MyBossFightLogic());
}
```

`AddMissionBehavior` source outline: sets `behavior.Mission = this`, if `BehaviorType == Logic` then `MissionLogics.Add`, then `OnCreated()`.

### Path C: Query an existing Logic

```csharp
BattleEndLogic endLogic = Mission.Current?.GetMissionBehavior<BattleEndLogic>();
bool playerWon = endLogic != null && endLogic.PlayerVictory;
```

## Key members

> `MissionLogic.cs` only defines the virtuals below. **Tick / OnAgentRemoved and friends live on the base class.**

| Member | Purpose and timing |
|--------|--------------------|
| `BehaviorType` | Always `MissionBehaviorType.Logic` (don't change to Other in a subclass or you leave `MissionLogics`) |
| `MissionEnded(ref MissionResult missionResult)` | **Core.** Return `true` when the mission should end and fill the result via `ref`; default `false` |
| `OnMissionResultReady(MissionResult)` | After the result is written on Mission; prep UI or cache the result |
| `OnBattleEnded()` | Battle flow wrap-up (subclass as needed) |
| `ShowBattleResults()` | Moment to show battle-result UI |
| `OnEndMissionRequest(out bool canLeave)` | Player asked to leave; return `InquiryData` for a confirm; default `canLeave = true`, return `null` |
| `OnRetreatMission()` | Retreat path |
| `OnSurrenderMission()` | Surrender path |
| `OnAutoDeployTeam(Team)` | When a Team auto-deploys |
| `GetExtraEquipmentElementsForCharacter(...)` | Extra equipment elements for a character; default `null` |

### Inherited from MissionBehavior, useful for end logic

| Hook | Typical use |
|------|-------------|
| `OnBehaviorInitialize` / `AfterStart` | Grab `IMissionAgentSpawnLogic`, cache Teams |
| `OnMissionTick` | Poll custom objectives (watch performance) |
| `OnAgentRemoved` | Record kills, flag boss death; still return the real end from `MissionEnded` |
| `OnEndMission` | Clear Agent caches |

## Real examples

### Example 1: Custom Logic that wins when a boss dies

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class BossKillMissionLogic : MissionLogic
{
    private bool _bossDead;
    private bool _resultSent;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        // Use Character string id; don't keep Agent refs past mission end
        if (affectedAgent?.Character != null
            && affectedAgent.Character.StringId == "my_mod_boss")
        {
            _bossDead = true;
        }
    }

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!_bossDead || _resultSent)
        {
            return false;
        }

        _resultSent = true;
        // Prefer the factory over hand-building BattleState
        missionResult = MissionResult.CreateSuccessful(Mission.Current, enemyRetreated: false);
        return true;
    }

    public override void OnMissionResultReady(MissionResult missionResult)
    {
        InformationManager.DisplayMessage(
            new InformationMessage(missionResult.PlayerVictory
                ? "Boss defeated. Mission complete."
                : "Mission ended."));
    }

    protected override void OnEndMission()
    {
        _bossDead = false;
        _resultSent = false;
    }
}
```

Register:

```csharp
Mission.Current?.AddMissionBehavior(new BossKillMissionLogic());
```

### Example 2: Confirm before leave (stop accidental exit)

```csharp
public sealed class ConfirmLeaveLogic : MissionLogic
{
    public override InquiryData OnEndMissionRequest(out bool canLeave)
    {
        if (Mission.Current != null
            && Mission.Current.MainAgent != null
            && Mission.Current.MainAgent.Health < Mission.Current.MainAgent.HealthLimit * 0.3f)
        {
            canLeave = false;
            return new InquiryData(
                "Confirm leave",
                "You are badly wounded. Leave the battlefield anyway?",
                true,
                true,
                "Leave",
                "Stay",
                () => { canLeave = true; Mission.Current.EndMission(); },
                null);
        }

        canLeave = true;
        return null;
    }
}
```

> In real projects, match `EndMission` / confirm callback signatures to your target version's `InquiryData` and Mission API. The point: **drive leave with `canLeave` and Inquiry, don't silently swallow input.**

### Example 3: Kill feed only. Don't force MissionLogic

```csharp
public sealed class KillFeedBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        if (affectorAgent != null && affectorAgent.IsMainAgent && affectedAgent != null)
        {
            InformationManager.DisplayMessage(
                new InformationMessage($"Killed {affectedAgent.Name}"));
        }
    }
}
```

## Cross-version notes

- The `MissionLogic` abstract surface is stable from 1.3.x through 1.4.5: `MissionEnded` / `OnMissionResultReady` / `OnEndMissionRequest`.
- `MissionResult` constructor parameters can shift by version; for cross-version mods check the target assembly, or reuse vanilla `BattleEndLogic`'s result path.
- Sandbox campaign fights usually end via SandBox mission controllers plus `BattleEndLogic`. If you replace that, test MapEvent settlement after return to the map.

## ↑ Parent Navigation

- [mission-ext index](./)
- [API root](../)
- [Crash and save boundaries](../../../architecture/crash-boundaries)

## 🔀 Sibling Navigation

| Page | Relationship |
|------|--------------|
| [MissionBehavior](../../mission/MissionBehavior) | Base: Agent/Tick hooks |
| [BattleEndLogic](../BattleEndLogic) | Vanilla end implementation |
| [Mission](../../mission/Mission) | `AddMissionBehavior` / `MissionLogics` |
| [Team](../../mission/Team) | Team state end conditions often read |
| [Agent](../../mission/Agent) | Death and alive checks |

## See also

- [Mission system guide](../../../guide/mission-system)
- [Module system](../../../architecture/module-system) — when behaviors register
- [SDK overview](../../../architecture/sdk-overview)
