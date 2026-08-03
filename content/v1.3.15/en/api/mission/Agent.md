---
title: "Agent"
description: "The native-backed representation of one live Mission unit: identity, team, formation, state, health, and combat control."
---
# Agent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`  
**Base:** `DotNetObject`  
**Source:** `TaleWorlds.MountAndBlade/Agent.cs`

## Responsibility in one line

It connects one person, mount, or other controllable unit in the scene to its Mission, Team, Formation, character source, and native combat object.

## Mental model

`Agent` is a **single-Mission, native-backed combat entity**, not the `Hero` or `CharacterObject` itself.

- Mission's creation path produces Agents and exposes them through `Mission.Agents`/`AllAgents` and `OnAgentCreated`; a mod should not call `new Agent()`.
- `Character`/`Origin` describe the source character or party, while `Team`/`Formation` describe the unit's live battlefield organization. `State`/`IsActive()` describe whether it is currently active.
- `Agent.Main` is the convenience path for `Mission.Current?.MainAgent`. It is useful only while a current Mission and player Agent exist.
- After lethal damage, routing, or engine removal, the Agent is deactivated from its Team, removal callbacks run, and then `OnRemove`/`OnDelete` clean it up. Never carry the object reference across Missions.

## How to obtain an Agent

```csharp
Mission mission = Mission.Current;
if (mission == null)
{
    return;
}

Agent main = mission.MainAgent;
Agent sameMain = Agent.Main;
Agent firstActive = mission.Agents.FirstOrDefault(agent => agent.IsActive());
if (main == null || main != sameMain || firstActive == null)
{
    return;
}

Team team = firstActive.Team;
Formation formation = firstActive.Formation;
```

New units must come through the Mission spawn/agent-origin path. Direct construction misses the native pointer, equipment, Team, and Formation bindings that the engine establishes.

## Key members

| Member | Use and timing | Boundary |
|---|---|---|
| `Main`, `IsMainAgent` | Find the current player Agent | `null` outside a Mission; invalid after the main Agent is removed |
| `Mission` | Find the scene that owns the Agent | Not a campaign-lifetime dependency after teardown |
| `Team`, `Formation` | Resolve current side and formation | Can change on team changes or become `null` during removal |
| `Character`, `Origin` | Read the character template or spawn source | Neither replaces a stable campaign identity or save object |
| `State`, `IsActive()` | Distinguish Active, Killed, Routed, Unconscious, Deleted, and other phases | A state check is not a guarantee that every native call remains safe |
| `Health`, `HealthLimit` | Read health or make a confirmed in-mission combat adjustment | Direct health changes do not replace campaign casualty or save logic |
| `Position`, `Frame`, `MovementVelocity` | Read live spatial and movement state | Reading after end/delete can touch an invalid native object |
| `Equipment`, `SpawnEquipment` | Read current and initial equipment | Equipment changes during build, weapon changes, and drops |
| `IsHuman`, `IsMount`, `IsHero` | Filter unit kinds | `IsHero` depends on `Character`; not every Agent is a campaign Hero |
| `KillCount` | Read or record Mission-local kills | Not the campaign battle result; write-back belongs to Mission result handling |

## Agent state and death ordering

The 1.4.5 `Mission.OnAgentRemoved` implementation sets `affectedAgent.State`, increments the opposing affector's kill count, calls `affectedAgent.Team.DeactivateAgent`, notifies every `MissionBehavior.OnEarlyAgentRemoved` and `OnAgentRemoved`, removes the Agent from the active list, and calls `affectedAgent.OnRemove`. Later `OnAgentDeleted` removes it from the Mission's full collection and clears it.

Death handling therefore belongs in [`MissionBehavior.OnAgentRemoved`](../MissionBehavior/) or a subclass:

```csharp
public sealed class AgentRemovalRecorder : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        bool killed = agentState == AgentState.Killed;
        int agentIndex = affectedAgent.Index;
        bool wasHero = affectedAgent.IsHero;
        BattleSideEnum side = affectedAgent.Team?.Side ?? BattleSideEnum.None;
        bool playerCausedIt = affectorAgent?.IsMainAgent ?? false;

        RecordRemoval(agentIndex, side, wasHero, killed, playerCausedIt);
    }

    private void RecordRemoval(
        int agentIndex,
        BattleSideEnum side,
        bool wasHero,
        bool killed,
        bool playerCausedIt)
    {
        // Store value data in a Mission-scoped record; do not store Agent.
    }
}
```

The callback may extract values such as `Index`, `IsHero`, and `Team.Side`, but it must not use the removed Agent to track a character after the Mission or write it as a campaign `Hero` into a save.

## Common control methods

| Method | Correct use | Risk |
|---|---|---|
| `IsActive()` | Exclude inactive units in a tick or query | The Agent can still be removed later in the same frame; keep the operation short |
| `SetTargetPosition(ref WorldPosition)` | Set a target for AI/control logic | The position must belong to the current Scene |
| `SetLookDirection(Vec3)` | Adjust the look direction | Call only for a built Agent in a running Mission |
| `TelegraphAttackToAgent(Agent)` | Show an attack telegraph toward another target | The target must belong to the same valid Mission |
| `SetWeaponAmountInSlot`, `WieldNextWeapon` | Change live ammunition or wield state | Do not turn temporary combat equipment into save equipment |
| `Die(Blow, KillInfo)` | Enter the engine's Blow-based death path | It triggers the full removal pipeline; do not re-enter it for the same Agent from `OnAgentRemoved` |
| `MakeVoice`, `SetActionChannel` | Play voice or set an animation action | Requires a valid native Agent and Mission time |

## When to use and when not to

**Use it for:** reading position/state in a Mission tick, immediate combat control for a valid Agent, short-lived indexes in `OnAgentCreated`/`OnAgentRemoved`, and filtering active units inside a Team or Formation.

**Do not use it for:** treating an Agent as a persistent Hero, caching it across scenes, deriving permanent campaign casualties directly from `Health`, or replacing campaign `*Action` and event timing with Agent fields.

## Dependencies

- Upstream: [`Mission`](../Mission/) creates, owns, and removes Agents; [`MissionBehavior`](../MissionBehavior/) broadcasts lifecycle events.
- Organization: [`Team`](../Team/) manages side membership and active Agents; [`Formation`](../Formation/) manages formation membership and orders.
- Downstream: `MissionLogic` can collect end conditions in `OnAgentRemoved`; Campaign/SandBox behaviors return the Mission result to campaign state.
- Related model: `CharacterObject`/`BasicCharacterObject` supply the character template; durable identity belongs to campaign objects or the save system.

## Risks and teardown

1. **Null Mission:** `Agent.Main`, `Mission`, and `Team` may be null during menus, loading, or ending.
2. **Post-death references:** In `OnAgentRemoved` the Agent has already been deactivated from its Team; after `OnAgentDeleted` it is no longer in the Mission's complete set. Do not access it asynchronously.
3. **Team/formation changes:** Team and Formation are not permanent ownership; team changes, splits, retreat, and cleanup can all change them.
4. **Native handles:** Position, Frame, Equipment, and control methods reach the native object. `IsActive()` narrows the window but cannot guarantee validity across frames.
5. **Campaign consistency:** Direct combat-property writes are not a safe Hero, party, or casualty update. Campaign write-back belongs after Mission result handling and the correct Action timing.

## Cross-version notes

- 1.3.15 and 1.4.5 both provide `Agent.Main`, `Mission.Current`, `Team`, `Formation`, `State`, and `IsActive()` as the normal access path.
- The 1.4.5 source makes the `OnAgentRemoved`/`OnRemove`/`OnDelete` boundaries explicit; 1.3.15 code should follow the same short-lived reference rule.

## Navigation

- [↑ Mission API module](./)
- [↔ Mission](../Mission/)
- [↔ MissionBehavior](../MissionBehavior/)
- [Owning Team](../Team/) · [Owning Formation](../Formation/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [Campaign layer](../../campaign/Campaign/)
