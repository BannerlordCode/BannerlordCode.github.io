---
title: "Team"
description: "Auto-generated class reference for Team."
---
# Team

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Team : IMissionTeam`
**Base:** `IMissionTeam`
**File:** `TaleWorlds.MountAndBlade/Team.cs`

## Overview

`Team` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Side` | `public BattleSideEnum Side { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `FormationsIncludingEmpty` | `public MBList<Formation> FormationsIncludingEmpty { get; }` |
| `FormationsIncludingSpecialAndEmpty` | `public MBList<Formation> FormationsIncludingSpecialAndEmpty { get; }` |
| `TeamAI` | `public TeamAIComponent TeamAI { get; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; }` |
| `IsPlayerAlly` | `public bool IsPlayerAlly { get; }` |
| `TeamSide` | `public TeamSideEnum TeamSide { get; }` |
| `IsDefender` | `public bool IsDefender { get; }` |
| `IsAttacker` | `public bool IsAttacker { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MasterOrderController` | `public OrderController MasterOrderController { get; }` |
| `PlayerOrderController` | `public OrderController PlayerOrderController { get; }` |
| `QuerySystem` | `public TeamQuerySystem QuerySystem { get; }` |
| `DetachmentManager` | `public DetachmentManager DetachmentManager { get; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; }` |
| `ActiveAgents` | `public MBReadOnlyList<Agent> ActiveAgents { get; }` |
| `TeamAgents` | `public MBReadOnlyList<Agent> TeamAgents { get; }` |
| `CachedEnemyDataForFleeing` | `public MBReadOnlyList<ValueTuple<float, WorldPosition, int, Vec2, Vec2, bool>> CachedEnemyDataForFleeing { get; }` |
| `TeamIndex` | `public int TeamIndex { get; }` |
| `MoraleChangeFactor` | `public float MoraleChangeFactor { get; }` |
| `GeneralsFormation` | `public Formation GeneralsFormation { get; set; }` |
| `BodyGuardFormation` | `public Formation BodyGuardFormation { get; set; }` |
| `GeneralAgent` | `public Agent GeneralAgent { get; set; }` |
| `Heroes` | `public IEnumerable<Agent> Heroes { get; }` |
| `HasBots` | `public bool HasBots { get; }` |
| `Leader` | `public Agent Leader { get; }` |
| `Invalid` | `public static Team Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `HasTeamAi` | `public bool HasTeamAi { get; }` |

## Key Methods

### SetCustomOrderController
`public void SetCustomOrderController(OrderController customMasterOrderController, OrderController customPlayerOrderController)`

**Purpose:** Assigns a new value to custom order controller and updates the object's internal state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.SetCustomOrderController(customMasterOrderController, customPlayerOrderController);
```

### UpdateCachedEnemyDataForFleeing
`public void UpdateCachedEnemyDataForFleeing()`

**Purpose:** Recalculates and stores the latest representation of cached enemy data for fleeing.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.UpdateCachedEnemyDataForFleeing();
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.Reset();
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.Clear();
```

### DoesFirstFormationClassContainSecond
`public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)`

**Purpose:** Returns a boolean answer to whether first formation class contain second is true for the this instance.

```csharp
// Static call; no instance required
Team.DoesFirstFormationClassContainSecond(f1, f2);
```

### GetFormationFormationClass
`public static FormationClass GetFormationFormationClass(Formation f)`

**Purpose:** Reads and returns the formation formation class value held by the this instance.

```csharp
// Static call; no instance required
Team.GetFormationFormationClass(f);
```

### GetPlayerTeamFormationClass
`public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)`

**Purpose:** Reads and returns the player team formation class value held by the this instance.

```csharp
// Static call; no instance required
Team.GetPlayerTeamFormationClass(mainAgent);
```

### AssignPlayerAsSergeantOfFormation
`public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)`

**Purpose:** Executes the AssignPlayerAsSergeantOfFormation logic.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.AssignPlayerAsSergeantOfFormation(peer, formationClass);
```

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**Purpose:** Adds tactic option to the current collection or state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.AddTacticOption(tacticOption);
```

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**Purpose:** Removes tactic option from the current collection or state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.RemoveTacticOption(tacticType);
```

### ClearTacticOptions
`public void ClearTacticOptions()`

**Purpose:** Removes all tactic options from the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.ClearTacticOptions();
```

### ResetTactic
`public void ResetTactic()`

**Purpose:** Returns tactic to its default or initial condition.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.ResetTactic();
```

### AddTeamAI
`public void AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)`

**Purpose:** Adds team a i to the current collection or state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.AddTeamAI(teamAI, false);
```

### DelegateCommandToAI
`public void DelegateCommandToAI()`

**Purpose:** Executes the DelegateCommandToAI logic.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.DelegateCommandToAI();
```

### RearrangeFormationsAccordingToFilter
`public void RearrangeFormationsAccordingToFilter( { "formation", "troopCount", "troopFilter", "excludedAgents" })`

**Purpose:** Executes the RearrangeFormationsAccordingToFilter logic.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.RearrangeFormationsAccordingToFilter("formation", "troopCount", "troopFilter", });
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.Tick(0);
```

### GetFormation
`public Formation GetFormation(FormationClass formationIndex)`

**Purpose:** Reads and returns the formation value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetFormation(formationIndex);
```

### SetIsEnemyOf
`public void SetIsEnemyOf(Team otherTeam, bool isEnemyOf)`

**Purpose:** Assigns a new value to is enemy of and updates the object's internal state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.SetIsEnemyOf(otherTeam, false);
```

### IsEnemyOf
`public bool IsEnemyOf(Team otherTeam)`

**Purpose:** Determines whether the this instance is in the enemy of state or condition.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.IsEnemyOf(otherTeam);
```

### IsFriendOf
`public bool IsFriendOf(Team otherTeam)`

**Purpose:** Determines whether the this instance is in the friend of state or condition.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.IsFriendOf(otherTeam);
```

### AddAgentToTeam
`public void AddAgentToTeam(Agent unit)`

**Purpose:** Adds agent to team to the current collection or state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.AddAgentToTeam(unit);
```

### RemoveAgentFromTeam
`public void RemoveAgentFromTeam(Agent unit)`

**Purpose:** Removes agent from team from the current collection or state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.RemoveAgentFromTeam(unit);
```

### DeactivateAgent
`public void DeactivateAgent(Agent agent)`

**Purpose:** Deactivates the resource, state, or feature associated with agent.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.DeactivateAgent(agent);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.OnAgentRemoved(agent);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.ToString();
```

### OnMissionEnded
`public void OnMissionEnded()`

**Purpose:** Invoked when the mission ended event is raised.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.OnMissionEnded();
```

### TriggerOnFormationsChanged
`public void TriggerOnFormationsChanged(Formation formation)`

**Purpose:** Triggers the logic or event associated with on formations changed.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.TriggerOnFormationsChanged(formation);
```

### GetOrderControllerOf
`public OrderController GetOrderControllerOf(Agent agent)`

**Purpose:** Reads and returns the order controller of value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetOrderControllerOf(agent);
```

### SetPlayerRole
`public void SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)`

**Purpose:** Assigns a new value to player role and updates the object's internal state.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.SetPlayerRole(false, false);
```

### HasAnyEnemyTeamsWithAgents
`public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`

**Purpose:** Determines whether the this instance already holds any enemy teams with agents.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.HasAnyEnemyTeamsWithAgents(false);
```

### HasAnyFormationsIncludingSpecialThatIsNotEmpty
`public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()`

**Purpose:** Determines whether the this instance already holds any formations including special that is not empty.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.HasAnyFormationsIncludingSpecialThatIsNotEmpty();
```

### GetFormationCount
`public int GetFormationCount()`

**Purpose:** Reads and returns the formation count value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetFormationCount();
```

### GetAIControlledFormationCount
`public int GetAIControlledFormationCount()`

**Purpose:** Reads and returns the a i controlled formation count value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetAIControlledFormationCount();
```

### GetAveragePositionOfEnemies
`public Vec2 GetAveragePositionOfEnemies()`

**Purpose:** Reads and returns the average position of enemies value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetAveragePositionOfEnemies();
```

### GetAveragePosition
`public Vec2 GetAveragePosition()`

**Purpose:** Reads and returns the average position value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetAveragePosition();
```

### GetMedianPosition
`public WorldPosition GetMedianPosition(Vec2 averagePosition)`

**Purpose:** Reads and returns the median position value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetMedianPosition(averagePosition);
```

### GetWeightedAverageOfEnemies
`public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)`

**Purpose:** Reads and returns the weighted average of enemies value held by the this instance.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
var result = team.GetWeightedAverageOfEnemies(basePoint);
```

### DisableDetachmentTicking
`public void DisableDetachmentTicking()`

**Purpose:** Executes the DisableDetachmentTicking logic.

```csharp
// Obtain an instance of Team from the subsystem API first
Team team = ...;
team.DisableDetachmentTicking();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Team team = ...;
team.SetCustomOrderController(customMasterOrderController, customPlayerOrderController);
```

## See Also

- [Area Index](../)