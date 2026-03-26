---
title: Mission System
description: Complete guide to Mission, MissionBehavior, Agent, Formation, Team
---

# Mission System

**Namespace**: TaleWorlds.MountAndBlade
**Key Classes**: `Mission`, `MissionBehavior`, `Agent`, `Formation`, `Team`, `AgentComponent`

## Overview

Bannerlord's combat system is built on **Mission** (battle). Every battle scene is a Mission containing core concepts like Agent (units), Formation (formations), and Team (sides).

## Core Concepts

| Concept | Class | Description |
|---------|-------|-------------|
| Mission | `Mission` | Container for a single battle/scenario |
| Behavior | `MissionBehavior` | Modular component for mission logic |
| Unit | `Agent` | Single unit on the battlefield (soldier, hero) |
| Formation | `Formation` | A group of Agents in formation |
| Team | `Team` | One side in battle |

## Contents

1. [MissionBehavior Pattern](#missionbehavior-pattern)
2. [Agent System](#agent-system)
3. [Formation and Team](#formation-and-team)
4. [Mission Examples](#mission-examples)
5. [Related API](#related-api)

---

## MissionBehavior Pattern

### Create Custom Behavior

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule.Missions
{
    // ⭐ Key: Inherit MissionBehavior
    public class MyMissionBehavior : MissionBehavior
    {
        // Mission starts
        public override void OnMissionStart()
        {
            base.OnMissionStart();
            
            // Initialization logic
            Debug.Print("MyMissionBehavior started!");
        }
        
        // After mission initialization
        public override void OnMissionInitialize()
        {
            base.OnMissionInitialize();
        }
        
        // Per-frame call (early)
        public override void OnPreMissionTick(float dt)
        {
            base.OnPreMissionTick(dt);
            // Put per-frame update logic here
        }
        
        // Per-frame call (late)
        public override void OnMissionTick(float dt)
        {
            base.OnMissionTick(dt);
        }
        
        // Mission ends
        public override void OnMissionFinish(bool isHeroParty)
        {
            base.OnMissionFinish(isHeroParty);
        }
    }
}
```

### Register Behavior

Register in SubModule:

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    
    // Add mission behavior
    gameStarter.AddBehavior(new MyMissionBehavior());
}
```

Or add in Mission:

```csharp
public override void OnMissionStart()
{
    base.OnMissionStart();
    
    // Get current Mission and add behavior
    Mission.Current.AddMissionBehavior(new MyMissionBehavior());
}
```

### MissionBehavior Lifecycle

```
Mission Created
    │
    ├─► OnMissionStart()         ← When mission begins
    │
    ├─► OnMissionInitialize()   ← Mission initialization
    │
    ├─► OnPreMissionTick(dt)     ← Every frame early (before all Ticks)
    │
    ├─► OnMissionTick(dt)        ← Every frame late (after all Ticks)
    │
    └─► OnMissionFinish()       ← When mission ends
```

### Common MissionBehavior Types

| Type | Purpose |
|------|---------|
| `AgentStatusBehavior` | Manage Agent health, death |
| `AgentWeaponEquippingBehavior` | Weapon switching logic |
| `FormationEnrollmentBehavior` | Formation management |
| `TeamAIBehavior` | AI team behavior |
| `CombatTypeCalculator` | Damage calculation |
| `MountCapabilityModel` | Mount capability |

---

## Agent System

### Agent Overview

`Agent` is a single unit on the battlefield. Heroes, soldiers, and enemies are all Agents.

### Create Agent

```csharp
// Get Mission
Mission mission = Mission.Current;

// Create Agent via CharacterObject
AgentBuildData agentBuildData = new AgentBuildData(characterObject);
agentBuildData.Equipment(equipment);
agentBuildData.Team(team);

Agent agent = mission.SpawnAgent(agentBuildData, false, 0);

// Set Agent position
agent.TeleportToPosition(new Vec3(x, y, z));
```

### Agent Components

```csharp
// Agent contains multiple components
AgentComponent[] components = agent.Components;

// Common components
HorseComponent horse = agent.GetComponent<HorseComponent>();
AgentAvatarData avatar = agent.GetComponent<AgentAvatarData>();
```

### Agent Controllers

```csharp
// Default controller (AI controlled)
agent.Controller = Agent.ControllerTypeEnum.None;

// Player control
agent.Controller = Agent.ControllerTypeEnum.Player;

// AI control
agent.Controller = Agent.ControllerTypeEnum.AI;

// Scripted control
agent.Controller = Agent.ControllerTypeEnum.Scripted;
```

### Common Agent Operations

```csharp
// Get/set position
Vec3 position = agent.Position;
agent.TeleportToPosition(newPosition);

// Get facing direction
Vec2 facing = agent.LookDirection;

// Health
float health = agent.Health;
float maxHealth = agent.HealthLimit;

// Set target
agent.TargetPosition = targetPosition;
agent.SetScriptedPositionAndFace(queryPosition, facing);

// Weapon operations
MissionWeapon equippedWeapon = agent.Equipment[EquipmentIndex.WeaponItemPrimarySlot];
agent.TrySetWeaponIndexAsWielded(EquipmentIndex.WeaponItemPrimarySlot);

// Death
agent.FatalPush(Mission.DamageTypes.Invalid);
```

### Listen to Agent Events

```csharp
public class MyAgentLogic : MissionBehavior
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        
        // Listen to specific Agent
        if (agent.Character.Name == "MyHero")
        {
            agent.AgentHit += OnAgentHit;
            agent.AgentMounted += OnAgentMounted;
            agent.AgentDied += OnAgentDied;
        }
    }
    
    private void OnAgentHit(Agent victim, Agent attacker, int damage, 
        Vec3 impactPoint, bool isBlocked, bool isSiegeEngineHit)
    {
        Debug.Print($"Agent hit: {victim.Name} took {damage} damage");
    }
    
    private void OnAgentDied(Agent victim, Agent attacker, 
        AgentState agentState, BitWriter writer)
    {
        Debug.Print($"Agent died: {victim.Name}");
    }
}
```

---

## Formation and Team

### Team

```csharp
// Get all teams
Team[] teams = Mission.Current.Teams;

// Get enemy team
Team enemyTeam = Mission.Current.Teams.Where(t => t.Side != myTeam.Side).First();

// Set team relations
myTeam.SetIsEnemyOf(enemyTeam, true);  // Set as enemy
```

### Formation

```csharp
// Create formation
Formation formation = myTeam.CreateFormation("MyFormation");

// Set formation position
formation.SetPositioning(new Vec3(x, y, z), 
                         new Vec3(x2, y2, z2),  // Forward direction
                         new Vec3(x3, y3, z3));   // Width direction

// Add Agent to formation
formation.AddAgent(agent, false);

// Formation orders
formation.SetMovementOrder(MovementOrder.MovementOrderCharge);
formation.SetFacingOrder(FacingOrder.FacingOrderLookAtEnemy);

// AI behavior
formation.AI.SetBehaviorWeight<ChargeBehavior>(1.0f);
```

### Formation Behaviors

```csharp
// Common formation behaviors
formation.AI.SetBehaviorWeight<DefaultFormationBehavior>(1.0f);
formation.AI.SetBehaviorWeight<ChargeBehavior>(1.0f);
formation.AI.SetBehaviorWeight<LineFacingBehavior>(0.5f);
formation.AI.SetBehaviorWeight<ArrowFormationBehavior>(0.8f);
```

---

## Mission Examples

### Custom Battle Logic

```csharp
public class CustomBattleLogic : MissionBehavior
{
    private Team _playerTeam;
    private Team _enemyTeam;
    private int _killsRequired = 10;
    private int _currentKills = 0;
    
    public override void OnMissionStart()
    {
        base.OnMissionStart();
        
        // Create teams
        _playerTeam = Mission.Current.CreateNewTeam(Team.Side.Defender);
        _enemyTeam = Mission.Current.CreateNewTeam(Team.Side.Attacker);
        
        // Initialize enemies
        SpawnEnemies();
    }
    
    public override void OnAgentDied(Agent victim, Agent attacker, 
        AgentState agentState, BitWriter writer)
    {
        base.OnAgentDied(victim, attacker, agentState, writer);
        
        if (victim.Team == _enemyTeam && attacker != null)
        {
            _currentKills++;
            
            if (_currentKills >= _killsRequired)
            {
                // Victory condition met
                EndBattle(true);
            }
        }
    }
    
    private void SpawnEnemies()
    {
        // Create enemy Agents
        foreach (var spawnPoint in GetEnemySpawnPoints())
        {
            Agent enemy = CreateEnemyAgent(spawnPoint);
            enemy.Team = _enemyTeam;
        }
    }
    
    private void EndBattle(bool playerWon)
    {
        // End battle
        Mission.Current.EndBattle();
    }
}
```

### Register Custom Mission

```csharp
// In SubModule
public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        
        // Add custom logic
        gameStarter.AddBehavior(new CustomBattleLogic());
    }
}
```

---

## Related API

- [Mission API](../api/mission/Mission.md)
- [MissionBehavior API](../api/mission-ext/MissionBehavior.md)
- [Agent API](../api/mission/Agent.md)
- [Formation API](../api/mission/Formation.md)
- [Team API](../api/mission/Team.md)

---

## Next Section

- [Campaign System](./campaign-system.md) - Learn Campaign world map gameplay
- [Gauntlet UI](./gauntlet-ui.md) - Create custom interfaces
