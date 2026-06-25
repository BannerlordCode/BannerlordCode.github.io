---
title: "MissionBehavior"
description: "Base class for Mission/scene behaviors: listen for combat events, agent lifecycle, tick, weapon interactions, and more."
---
# MissionBehavior

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MissionBehavior`  
**Base:** —  
**File:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`

## Overview

`MissionBehavior` is the most important extension point for Bannerlord combat/scene systems. It is created each time you enter a `Mission` (battle, town scene, campaign encounter, etc.) and lives as long as the current scene.

By inheriting from it, you can:

- Listen for agent creation, damage, death, flee, mount, dismount, etc.
- Run logic every frame or on a fixed timestep.
- React to Mission start/end/mode changes.
- Interact with scene objects (`UsableMissionObject`), missiles, melee/ranged hits.

## Mental Model

Think of `MissionBehavior` as a **temporary plugin for the current scene**:

- Created when entering the scene, either by the engine or by your registration, and destroyed when the scene ends.
- Unlike `CampaignBehaviorBase`, which persists across the campaign map, a `MissionBehavior` only exists for one Mission.
- It is not created automatically; register it in `MBSubModuleBase.OnGameStart` via `MissionGameStarter.AddBehavior(...)`.
- Multiple `MissionBehavior`s can run in one scene, each handling different logic.

## How to Register

```csharp
protected override void OnGameStart(Game game, IGameStarter starterObject)
{
    base.OnGameStart(game, starterObject);
    if (starterObject is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddBehavior(new MyCampaignBehavior());
    }
    if (starterObject is MissionGameStarter missionStarter)
    {
        missionStarter.AddBehavior(new MyMissionBehavior());
    }
}
```

## Core Lifecycle Methods

| Method | Description |
|--------|-------------|
| `OnBehaviorInitialize()` | Behavior initialization. |
| `OnCreated()` | Behavior was created. |
| `EarlyStart()` | Early in Mission start. |
| `AfterStart()` | After Mission start completes. |
| `OnMissionTick(float dt)` | Every frame. |
| `OnFixedMissionTick(float fixedDt)` | Fixed-timestep update. |
| `OnEndMissionInternal()` | Mission is about to end. |
| `OnRemoveBehavior()` | Behavior is being removed. |

## Main Event Hooks

### Agent-related

```csharp
public override void OnAgentCreated(Agent agent)
{
    // agent just created (may not be fully spawned yet)
}

public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
{
    if (affectorAgent == Mission.Current?.MainAgent)
    {
        InformationManager.DisplayMessage(new InformationMessage($"Killed {affectedAgent.Name}"));
    }
}

public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
{
    // agent was hit
}
```

### Mission mode changes

```csharp
public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)
{
    if (Mission.Current.Mode == MissionMode.Battle)
    {
        // entered battle mode
    }
}
```

### Object interaction

```csharp
public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)
{
    // player/AI used a scene object (door, ladder, etc.)
}
```

## Typical Usage Examples

### Example 1: Track player kills

```csharp
public class PlayerKillTrackerBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        if (affectorAgent?.IsMainAgent ?? false)
        {
            int count = GetCurrentKillCount() + 1;
            InformationManager.DisplayMessage(new InformationMessage($"Kill #{count}"));
            SetCurrentKillCount(count);
        }
    }
}
```

### Example 2: Slowly heal the player during a Mission

```csharp
public override void OnMissionTick(float dt)
{
    Agent main = Mission.Current?.MainAgent;
    if (main != null && main.IsActive() && main.Health < main.HealthLimit)
    {
        main.Health = Math.Min(main.Health + 2f * dt, main.HealthLimit);
    }
}
```

## `BehaviorType`

Override `BehaviorType` to decide the behavior category: `Other`, `Logic`, `Battle`, etc. The category affects call order and whether the engine auto-enables it.

```csharp
public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 core API is the same; event signatures may add `in`/`ref` parameters.
- v1.4.5 is stricter about `MissionBehavior` creation/destruction order; avoid accessing `Mission.Current` in the constructor.

## See Also

- [Mission](../Mission/) — the scene the behavior lives in
- [Agent](../Agent/) — entities in the scene
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — campaign-level counterpart
- [MissionLogic](../../mission-ext/MissionLogic/) — another Mission logic extension
- [MissionObject](../../mission-ext/MissionObject/) — scene interactables
