---
title: "Agent"
description: "A single entity inside a Mission: soldiers, the player, horses, and their battlefield state, attributes, and behavior controls."
---
# Agent

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public class Agent : Entity, IAgent`  
**Base:** `Entity`  
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`Agent` represents a **concrete entity inside a Mission**: the player character, AI soldiers, horses, siege-engine operators, etc. Unlike `Hero` (the campaign character card), `Agent` is the real-time battlefield object with position, orientation, health, equipment, animation state, and AI controller.

It is one of the most commonly manipulated objects in combat mods: spawning troops, modifying health, giving weapons, controlling movement, playing animations, switching teams, and more.

## Mental Model

Think of `Agent` as a **controllable character instance inside the scene**:

- `Agent` exists only for the lifetime of the `Mission`; all agents are destroyed when the scene changes.
- The same `Hero` generates a different `Agent` instance in each battle.
- Do not `new Agent()`; create agents through `Mission.Current.SpawnAgent(...)`.
- It carries both **physics/rendering state** (position, animation) and **gameplay state** (health, team, equipment).

## How to Obtain an Agent

```csharp
// Player-controlled agent
Agent main = Mission.Current?.MainAgent;

// Iterate all agents
foreach (Agent agent in Mission.Current.Agents)
{
    if (agent.IsActive() && agent.IsHuman)
    {
        // ...
    }
}

// Get agents from event arguments
public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, ...)
{
    if (affectedAgent == Mission.Current.MainAgent)
    {
        // player got hit
    }
}
```

## Core Properties

| Property | Type | Description |
|----------|------|-------------|
| `Mission.MainAgent` | `Agent` | Player agent. |
| `IsActive` | `bool` | Is alive and still in the scene. |
| `IsHuman` | `bool` | Is a human (not a horse, etc.). |
| `IsMount` | `bool` | Is a mount. |
| `Team` | `Team` | Team this agent belongs to. |
| `Formation` | `Formation` | Formation this agent belongs to. |
| `Health` / `HealthLimit` | `float` | Current and max health. |
| `Character` | `CharacterObject` | Underlying character template. |
| `Hero` (extension) | `Hero` | If the agent corresponds to a hero, access via extension or `Character.HeroObject`. |
| `Position` / `LookDirection` | `Vec3` | Position and facing direction. |
| `WieldedWeapon` | `MissionWeapon` | Currently held weapon. |
| `Origin` | `IAgentOriginBase` | Spawn origin (party, hero, scene placement, etc.). |

## Key Methods

### `public bool IsActive()`
Check whether the agent is still alive and valid.

```csharp
Agent target = Mission.Current.Agents.FirstOrDefault(a => a.IsActive() && a.IsHuman);
```

### `public void TelegraphAttackToAgent(Agent target)`
Make the agent attack the target (AI-controlled).

```csharp
myAgent.TelegraphAttackToAgent(enemy);
```

### `public void SetTargetPosition(ref WorldPosition targetPosition)`
Set a movement target position.

```csharp
WorldPosition pos = new WorldPosition(Mission.Current.Scene, new Vec3(100f, 50f, 0f));
agent.SetTargetPosition(pos);
```

### `public void SetLookDirection(Vec3 direction)`
Set facing direction.

```csharp
agent.SetLookDirection(enemy.Position - agent.Position);
```

### `public void SetWeaponAmountInSlot(...)` / `public void WieldNextWeapon(...)`
Manage equipment and weapon switching.

```csharp
agent.WieldNextWeapon(Agent.HandIndex.MainHand);
```

### `public void Die(...)`
Kill the agent immediately. Useful for custom mission logic.

```csharp
agent.Die(new Blow(agent.Index), Agent.KillInfoFlags.None);
```

### `public void MakeVoice(...)` / `public void SetActionChannel(...)`
Play voice lines and animations.

```csharp
agent.MakeVoice(SkinVoiceManager.VoiceType.Yell, SkinVoiceManager.CombatVoiceNetworkPredictionType.NoPrediction);
```

## Typical Usage Examples

### Example 1: Heal the player agent

```csharp
Agent main = Mission.Current?.MainAgent;
if (main != null && main.IsActive())
{
    main.Health = main.HealthLimit;
}
```

### Example 2: Regenerate health for nearby allies

```csharp
public override void OnMissionTick(float dt)
{
    if (Mission.Current?.PlayerTeam == null) return;
    foreach (Agent agent in Mission.Current.Agents)
    {
        if (agent.IsActive() && agent.Team == Mission.Current.PlayerTeam && agent.IsHuman)
        {
            if (agent.Health < agent.HealthLimit)
            {
                agent.Health = Math.Min(agent.Health + 5f * dt, agent.HealthLimit);
            }
        }
    }
}
```

### Example 3: Detect player kills

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    if (affectorAgent == Mission.Current?.MainAgent && affectedAgent.IsHuman)
    {
        InformationManager.DisplayMessage(new InformationMessage($"Killed {affectedAgent.Name}"));
    }
}
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 core API is the same.
- v1.4.5 added more splits around `Agent.Controller` and `AgentComponent`; for complex AI behavior, prefer `AgentComponent` or `MissionLogic`.

## See Also

- [Mission](../Mission/) — the scene the agent lives in
- [Team](../Team/) — teams and sides
- [Formation](../Formation/) — formations
- [MissionBehavior](../MissionBehavior/) — receive agent-related events
- [MissionObject](../../mission-ext/MissionObject/) — scene interactables
