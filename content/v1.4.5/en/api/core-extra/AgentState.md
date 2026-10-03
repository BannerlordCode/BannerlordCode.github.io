---
title: "AgentState"
description: "The life-state axis of an agent: None / Active / Routed / Unconscious / Killed / Deleted. It is largely one-way -- Routed can be written back to Active, but nothing on the managed side rejects a write from Killed or Deleted back to Active."
---

# AgentState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentState`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentState.cs`

## Overview

`AgentState` is the **life-state axis** of an agent inside a mission. It sits below [AgentControllerType](../AgentControllerType) in importance: control ownership decides "who is operating", while this decides "can this unit still be hit". `BattleEndLogic` uses it to decide whether the battle is over, the damage pipeline in `Mission` uses it to decide whether to run a death animation, and `OnBeforeAgentRemoved` hands it to subscribers as a parameter.

The role it plays is **"which stage of life this unit is in"**, and its six members form a **largely one-way** axis: `None` (not in play) → `Active` (alive and fighting) → `Routed` (fleeing, still killable) → `Unconscious` (down, out of combat but executable) → `Killed` → `Deleted`. It is native-defined and native-owned (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11` carries `DefineAsEngineStruct(..., "Agent_state", false, ...)`), **yet managed code can write it**, because `Agent.State` is a property with a setter (`Agent.cs:1529-1541`). That writability is the single thing to be most careful about on this page.

## Mental Model

Treat it as **a timeline that only runs in one direction**, not as six interchangeable labels. The only legitimate reason to write it is **"bring a unit that has already routed back into the fight"**. Everything else is read-only.

**Why it is one-way.** The `Agent.State` setter (`Agent.cs:1534-1541`) does exactly two things: skip the write if the value is unchanged (`if (State != value)`), otherwise call `MBAPI.IMBAgent.SetStateFlags(GetPtr(), value)`. **There is no transition validation on the managed side at all** — it does not check whether you may go from `Killed` to `Active`. So "one-way" is not enforced by the type; it is a physical fact of the native side: a unit already judged `Killed` is playing its ragdoll animation, and a `Deleted` unit has left the mission's agent list and may be recycled. **Writing `Killed` back to `Active` from managed code raises no exception; it produces a unit whose ragdoll is still playing while its state claims it is alive.** That is the most expensive conclusion on this page.

**Read it with equality, never with magnitude.** The six members happen to be numerically ordered along the life axis, but every official comparison is an equality test: `state == AgentState.Routed` at `BannerBearerLogic.cs:723`, `BattleEndLogic.cs:191`, `CustomBattleAgentLogic.cs:19`, and `Mission.cs:3025`. `Enum.CompareTo` has no semantic warrant here — on an enum owned by native it is entirely possible for a new member to be inserted in the middle, which would silently invalidate every numeric comparison.

Four practical conclusions follow. First, **`None` and `Active` answer different questions**: `None` means "not in play", `Active` means "in play and fighting". The difference between "is this agent still on the field" and "is this reference non-null" is exactly what `MultiplayerItemTestMissionController.cs:86` — `if (mainAgent == null || mainAgent.State != AgentState.Active)` — is guarding. Never test one and assume the other. Second, **`Routed` is not "dead".** A routed unit is still alive, still chaseable, and still a valid kill target; `BattleEndLogic.cs:191` uses `agentState == AgentState.Routed` specifically to decide whether the enemy side is still contesting the field. Third, **`Unconscious` and `Killed` are usually folded together downstream.** `BattleObserverMissionLogic.cs:72` and `MissionMultiplayerFlagDomination.cs:1064` both write `(agentState == AgentState.Unconscious || agentState == AgentState.Killed)`, because their consequences coincide: out of combat, counted as a result. Fourth, **`Deleted` is the recycling state.** It means this `Agent` may be reused by the mission, at which point reading any of its business fields is unsafe — which is exactly why `Mission.OnBeforeAgentRemoved` fires *before* removal.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `None` | `None = 0` | Not in play. The initial value of an agent that has been constructed but not yet entered the combat sequence. **Note that it is not the same as a null check**: `mainAgent != null` does not imply `State == Active`. |
| `Active` | `Active = 1` | Alive and participating in combat. Almost every "can this unit still be hit" question lands on this value. `Agent.IsActive()` (`Agent.cs:3296-3299`) is nothing but the equality test wrapped up — **prefer `IsActive()` over hand-writing `State == AgentState.Active`**. |
| `Routed` | `Routed = 2` | Fleeing. The unit is alive but has left the fight and can be run down. **This is the only target state you have a legitimate reason to write back to `Active` from outside** (think "the commander routed, call him back"). `BannerBearerLogic.cs:723` uses it to decide whether a standard-bearer drops the banner while routing. |
| `Unconscious` | `Unconscious = 3` | Down but not dead. Out of combat, **still executable**, and normally lumped together with `Killed` for result accounting — `BattleObserverMissionLogic.cs:72` writes `agentState == AgentState.Unconscious \|\| agentState == AgentState.Killed`. |
| `Killed` | `Killed = 4` | Killed; the death sequence has begun. `Mission.cs:3025` short-circuits part of the post-damage handling at this state. **Writing `Active` back will not throw** — it will just produce a unit whose state contradicts its animation. |
| `Deleted` | `Deleted = 5` | Removed from the mission; the object is now recyclable. **This is the only value at which reading other fields stops being safe**, and it is precisely why `Mission.OnBeforeAgentRemoved` fires before the removal rather than after. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentState), "Agent_state", false, null, null)]`, at `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11` | Binds it to the native `Agent_state` struct; `false` means "not a flag set". Like [AgentAttackType](../AgentAttackType) it is **a mirror of a native definition** — but unlike that enum, `Agent.State` has a setter, so managed code genuinely can write it. |

## Real Example

The canonical read is "null check, then state check", mirroring the structure at `MultiplayerItemTestMissionController.cs:86`:

```csharp
private void DoSomethingWithMainAgent()
{
    Agent mainAgent = Mission.Current.MainAgent;
    if (mainAgent == null || mainAgent.State != AgentState.Active)
    {
        Debug.Print("main agent is gone or already out of the fight", 0);
        return;
    }

    Debug.Print("main agent alive, hp = " + mainAgent.Health, 0);
}
```

Subscribe to `Mission.OnBeforeAgentRemoved`, which hands you `AgentState` together with `KillingBlow` — **this event is the only moment at which reading everything on the agent is still safe**:

> ⚠️ One timing detail you must know: `Mission.OnAgentRemoved` (`Mission.cs:2985-2989`, an `[MBCallback] internal`) `Invoke`s the event first and only **on the next line** writes `affectedAgent.State = agentState`. So **inside the callback, reading `affectedAgent.State` yields the OLD value** — always use the `agentState` parameter.

```csharp
public class MyDeathWatcher : MissionBehavior
{
    public override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();
        Mission.Current.OnBeforeAgentRemoved += HandleAgentRemoved;
    }
}

private void HandleAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    switch (agentState)
    {
        case AgentState.Routed:
            Debug.Print("routed out, still killable, killer = " + killingBlow.OwnerId, 0);
            break;
        case AgentState.Unconscious:
        case AgentState.Killed:
            // Downstream consequences are identical, so the engine code itself
            // folds these two together -- see BattleObserverMissionLogic, line 72.
            Debug.Print("down for the count, body part = " + killingBlow.VictimBodyPart, 0);
            break;
        case AgentState.Deleted:
            Debug.Print("removed from the mission, nothing more to read", 0);
            break;
        default:
            Debug.Print("unhandled state = " + agentState, 0);
            break;
    }
}
```

Calling a routed unit back into the fight — the one transition this page actually recommends (`Routed` → `Active`):

```csharp
private void RallyRoutedUnit(Agent unit)
{
    if (unit == null || unit.State != AgentState.Routed)
    {
        return;
    }

    // Routed -> Active is the one transition the engine actually supports from
    // outside. Do NOT try Killed -> Active: nothing rejects it and the result is
    // a unit whose ragdoll is still playing while its state claims it is alive.
    unit.State = AgentState.Active;
    Debug.Print("unit " + unit.Index + " rallied back into the fight", 0);
}
```

## Risks and Boundaries

- **The axis has no managed-side validation.** The `Agent.State` setter only checks "did the value change" (`Agent.cs:1534`) and then calls `MBAPI.IMBAgent.SetStateFlags`. **Writing from `Killed` or `Deleted` back to `Active` raises nothing**, and you get a unit whose state contradicts its animation and physics. That is the easiest way to create a "ghost unit".
- **Do not compare numerically.** The six values ascend, but official code tests by equality everywhere. `<` / `>` carries no semantic guarantee on a native-owned enum — a new member changes the ordering silently.
- **Handle `Unconscious` and `Killed` as a pair.** Result accounting, experience distribution, and AI target culling all treat them as one thing (`BattleObserverMissionLogic.cs:72`, `MissionMultiplayerFlagDomination.cs:1064`). Testing only one of them loses half the cases.
- **`Routed` is not death.** A routed unit can still be chased down and killed, and it is still a valid target — as well as a condition `BattleEndLogic` uses to judge whether the battle is still live.
- **Reading business fields after `Deleted` is unsafe.** The object has entered a recyclable state. If you need the full picture at death time, take it inside the `Mission.OnBeforeAgentRemoved` callback.
- **A null check does not replace a state check.** `mainAgent != null` only guarantees a valid reference, not `State == Active`. `MultiplayerItemTestMissionController.cs:86` checks both; copy that shape.
- **Prefer `Agent.IsActive()`.** It (`Agent.cs:3296-3299`) is the semantic wrapper around `State == AgentState.Active` and is less likely to drift than hand-written equality checks.
- **The callback parameter and the property disagree at that instant.** `Mission.cs:2988-2989` fires the event before writing `affectedAgent.State`, so reading the property inside `OnBeforeAgentRemoved` gets you the **previous** state. Always use the `agentState` argument.
- **Do not confuse it with [AgentControllerType](../AgentControllerType).** A routed unit's `Controller` is still `AI`; a dead player agent's `Controller` is still `Player`. The two enums evolve independently and have no relationship.

## Cross-Version Notes

`AgentState.cs` is 11 lines with 6 members in 1.4.5, part of that version's batch of tiny files (`AgentAttackType.cs` at 10 lines and `AgentControllerType.cs` at 9 lines are siblings), in original-source form. The 1.3.x / 1.4.6 counterparts are decompiled output, considerably longer, while carrying the same member set and the same native binding name `"Agent_state"`. Two things are worth checking when migrating across versions: whether native added any state members (if it did, **a `switch` you wrote without a `default` arm breaks silently**), and whether `DefineAsEngineStruct`'s third argument is still `false` — if it ever becomes `true`, native has turned this into a flag set, and this page's "compare with equality, not bit operations" conclusion would need re-examining.

## Dependencies

- Definition source: `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11`'s `DefineAsEngineStruct` binds it to native's `Agent_state`
- Read/write entry point: [Agent](../../mission/Agent)'s `State` property (`Agent.cs:1529-1541`), getter via `AgentHelper.GetAgentState(_statePointer)`
- Semantic wrappers: `Agent.IsActive()` (`Agent.cs:3296`), and `AgentState State { get; }` in `TaleWorlds.Core/IAgent.cs:7`
- Key consumers (battle layer): `BattleEndLogic.cs:191`, `BattleObserverMissionLogic.cs:72`, `BannerBearerLogic.cs:723`, `CustomBattleAgentLogic.cs:19`
- Damage pipeline: `Mission.cs:3025` returns early from post-damage handling on `AgentState.Routed`
- Event exit: the `Mission.OnBeforeAgentRemoved` delegate signature (`Mission.cs:1535`) carries `AgentState` alongside `KillingBlow`
- Easily-confused enums: [AgentControllerType](../AgentControllerType) (control ownership), [AgentAttackType](../AgentAttackType) (hit channel)
- Bucket index: [core-extra API section](../)