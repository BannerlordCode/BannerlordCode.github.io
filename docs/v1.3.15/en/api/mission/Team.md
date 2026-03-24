# Team Class

**Namespace**: TaleWorlds.MountAndBlade  
**File**: `TaleWorlds.MountAndBlade/Team.cs` (~1,100 lines)  
**Purpose**: Represents a side/faction in battle. Manages all units and formations in the team.

## Overview

`Team` represents a side in battlefield combat. Typically there are two main sides:
- **Attacker**
- **Defender**

Each Team contains:
- Multiple Formations
- All Agents belonging to the team
- Team AI controller
- OrderController for commands
- Banner and color information

## Key Properties

### Basic Properties

| Property | Type | Description |
|----------|------|-------------|
| `Side` | `BattleSideEnum` | Side (attacker/defender) |
| `TeamSide` | `TeamSideEnum` | Team type (player team/ally/enemy) |
| `IsPlayerTeam` | `bool` | Whether this is the player team |
| `IsPlayerAlly` | `bool` | Whether this is an ally of player |
| `IsDefender` | `bool` | Whether defender side |
| `IsAttacker` | `bool` | Whether attacker side |
| `Mission` | `Mission` | The mission this team belongs to |
| `TeamIndex` | `int` | Team index |
| `MBTeam` | `MBTeam` | Underlying MBTeam object |

### Formations

| Property | Type | Description |
|----------|------|-------------|
| `FormationsIncludingEmpty` | `MBList` | All formations (including empty) |
| `FormationsIncludingSpecialAndEmpty` | `MBList` | All formations including special |
| `GetFormation(FormationClass)` | `Formation` | Get formation of specified type |

### Agent Lists

| Property | Type | Description |
|----------|------|-------------|
| `TeamAgents` | `MBReadOnlyList` | All agents in team |
| `ActiveAgents` | `MBReadOnlyList` | Active agents in team |
| `HasBots` | `bool` | Whether has bots |
| `Leader` | `Agent` | Team leader |
| `Heroes` | `IEnumerable` | Heroes in team |

### Special Formations

| Property | Type | Description |
|----------|------|-------------|
| `GeneralsFormation` | `Formation` | General's formation |
| `BodyGuardFormation` | `Formation` | Bodyguard formation |
| `GeneralAgent` | `Agent` | General Agent |

### AI and Orders

| Property | Type | Description |
|----------|------|-------------|
| `TeamAI` | `TeamAIComponent` | Team AI component |
| `HasTeamAi` | `bool` | Whether has Team AI |
| `MasterOrderController` | `OrderController` | Master order controller |
| `PlayerOrderController` | `OrderController` | Player order controller |

### Other Properties

| Property | Type | Description |
|----------|------|-------------|
| `Color` | `uint` | Team color |
| `Color2` | `uint` | Team color 2 |
| `Banner` | `Banner` | Banner |
| `QuerySystem` | `TeamQuerySystem` | Team query system |
| `DetachmentManager` | `DetachmentManager` | Detachment manager |
| `MoraleChangeFactor` | `float` | Morale change factor |
| `IsPlayerGeneral` | `bool` | Whether player is general |
| `IsPlayerSergeant` | `bool` | Whether player is sergeant |

## Key Methods

### Formation Management

| Method | Description |
|--------|-------------|
| `GetFormation(FormationClass)` | Get formation of specified type |
| `GetFormationCount()` | Get count of non-empty formations |
| `GetAIControlledFormationCount()` | Get count of AI-controlled formations |

### Agent Management

| Method | Description |
|--------|-------------|
| `AddAgentToTeam(Agent)` | Add Agent to team |
| `RemoveAgentFromTeam(Agent)` | Remove Agent from team |
| `DeactivateAgent(Agent)` | Deactivate Agent |

### Team Relations

| Method | Description |
|--------|-------------|
| `SetIsEnemyOf(Team, bool)` | Set enemy relationship |
| `IsEnemyOf(Team)` | Check if enemy |
| `IsFriendOf(Team)` | Check if friend |

### Position Queries

| Method | Description |
|--------|-------------|
| `GetAveragePosition()` | Get team average position |
| `GetAveragePositionOfEnemies()` | Get enemy average position |
| `GetMedianPosition(Vec2)` | Get median position |
| `GetWeightedAverageOfEnemies(Vec2)` | Get weighted average of enemies |

### AI Control

| Method | Description |
|--------|-------------|
| `AddTeamAI(TeamAIComponent, bool)` | Add Team AI |
| `DelegateCommandToAI()` | Delegate command to AI |
| `AddTacticOption(TacticComponent)` | Add tactic option |
| `RemoveTacticOption(Type)` | Remove tactic option |
| `ClearTacticOptions()` | Clear tactic options |
| `ResetTactic()` | Reset tactic |

### Other Methods

| Method | Description |
|--------|-------------|
| `Tick(float dt)` | Per-frame update |
| `Reset()` | Reset team |
| `Clear()` | Clear team |
| `OnMissionEnded()` | Called when mission ends |
| `GetOrderControllerOf(Agent)` | Get order controller for Agent |
| `SetPlayerRole(bool, bool)` | Set player role |
| `AssignPlayerAsSergeantOfFormation(...)` | Assign player as sergeant |
| `HasAnyEnemyTeamsWithAgents(bool)` | Whether has enemy teams with agents |
| `HasAnyFormationsIncludingSpecialThatIsNotEmpty()` | Whether has non-empty formations |
| `TriggerOnFormationsChanged(Formation)` | Trigger formations changed event |

## Important Events

| Event | Description |
|-------|-------------|
| `OnFormationsChanged` | When formations change |
| `OnOrderIssued` | When order is issued |
| `OnFormationAIActiveBehaviorChanged` | When formation AI behavior changes |

## Common Usage

### 1. Get Attacker and Defender

```csharp
// Get attacker
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);

// Get defender
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);

// Or check via Side
if (team.Side == BattleSideEnum.Attacker)
{
    // This is attacker
}
else if (team.Side == BattleSideEnum.Defender)
{
    // This is defender
}
```

### 2. Iterate All Agents in Team

```csharp
// Get all team agents
foreach (Agent agent in myTeam.TeamAgents)
{
    // Process each Agent
}

// Only active agents
foreach (Agent agent in myTeam.ActiveAgents)
{
    // Process
}

// Check if has bots
if (myTeam.HasBots)
{
    // Team has AI-controlled units
}
```

### 3. Get Team Formations

```csharp
// Get specific type of formation
Formation infantryFormation = team.GetFormation(FormationClass.Infantry);
Formation rangedFormation = team.GetFormation(FormationClass.Ranged);
Formation cavalryFormation = team.GetFormation(FormationClass.Cavalry);

// Iterate all formations
foreach (Formation formation in team.FormationsIncludingSpecialAndEmpty)
{
    if (formation.CountOfUnits > 0)
    {
        // Process non-empty formation
    }
}
```

### 4. Set Team Relations

```csharp
// Set enemy relationship
team.SetIsEnemyOf(otherTeam, true); // Set as enemy

// Check relationship
if (team.IsEnemyOf(otherTeam))
{
    // Enemy relationship
}

if (team.IsFriendOf(otherTeam))
{
    // Friendly relationship
}
```

### 5. Add Team AI

```csharp
// Add custom Team AI
team.AddTeamAI(new MyTeamAIComponent(), forceNotAIControlled: false);

// Add tactic option
team.AddTacticOption(new MyTacticComponent());

// Remove tactic option
team.RemoveTacticOption(typeof(MyTacticComponent));

// Reset tactic
team.ResetTactic();
```

### 6. Issue Orders

```csharp
// Get order controller
OrderController orderController = team.MasterOrderController;

// Or get specific Agent's order controller
OrderController agentController = team.GetOrderControllerOf(agent);

// Listen to order issued event
team.OnOrderIssued += (orderType, formations, controller, parameters) =>
{
    // Handle order issued
};
```

### 7. Position and Query

```csharp
// Get team average position
Vec2 avgPos = team.GetAveragePosition();

// Get enemy average position
Vec2 enemyAvgPos = team.GetAveragePositionOfEnemies();

// Get team median position
WorldPosition medianPos = team.GetMedianPosition(avgPos);

// Get team leader
Agent leader = team.Leader;
```

## TeamSideEnum Enum

| Value | Description |
|-------|-------------|
| `Defender` | Defending side |
| `Attacker` | Attacking side |
| `None` | None |

## BattleSideEnum Enum

| Value | Description |
|-------|-------------|
| `Defender` | Defending side |
| `Attacker` | Attacking side |
| `None` | None |

## Notes

1. **Team index** - `TeamIndex` is used for network sync and identification
2. **TeamAI** - Adding Team AI automatically controls formation behavior
3. **OrderController** - Commands are issued and managed through OrderController
4. **Agent references** - `TeamAgents` and `ActiveAgents` are live updated lists; do not store references long-term
5. **Team colors** - `Color` and `Color2` are ARGB format color values
