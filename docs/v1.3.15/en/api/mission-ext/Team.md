<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Team`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `custom order controller`.

### UpdateCachedEnemyDataForFleeing
`public void UpdateCachedEnemyDataForFleeing()`

**Purpose:** Updates the state or data of `cached enemy data for fleeing`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### DoesFirstFormationClassContainSecond
`public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)`

**Purpose:** Handles logic related to `does first formation class contain second`.

### GetFormationFormationClass
`public static FormationClass GetFormationFormationClass(Formation f)`

**Purpose:** Gets the current value of `formation formation class`.

### GetPlayerTeamFormationClass
`public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)`

**Purpose:** Gets the current value of `player team formation class`.

### AssignPlayerAsSergeantOfFormation
`public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)`

**Purpose:** Handles logic related to `assign player as sergeant of formation`.

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**Purpose:** Adds `tactic option` to the current collection or state.

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**Purpose:** Removes `tactic option` from the current collection or state.

### ClearTacticOptions
`public void ClearTacticOptions()`

**Purpose:** Handles logic related to `clear tactic options`.

### ResetTactic
`public void ResetTactic()`

**Purpose:** Resets `tactic` to its initial state.

### AddTeamAI
`public void AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)`

**Purpose:** Adds `team a i` to the current collection or state.

### DelegateCommandToAI
`public void DelegateCommandToAI()`

**Purpose:** Handles logic related to `delegate command to a i`.

### RearrangeFormationsAccordingToFilter
`public void RearrangeFormationsAccordingToFilter( { "formation", "troopCount", "troopFilter", "excludedAgents" })`

**Purpose:** Handles logic related to `rearrange formations according to filter`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### GetFormation
`public Formation GetFormation(FormationClass formationIndex)`

**Purpose:** Gets the current value of `formation`.

### SetIsEnemyOf
`public void SetIsEnemyOf(Team otherTeam, bool isEnemyOf)`

**Purpose:** Sets the value or state of `is enemy of`.

### IsEnemyOf
`public bool IsEnemyOf(Team otherTeam)`

**Purpose:** Handles logic related to `is enemy of`.

### IsFriendOf
`public bool IsFriendOf(Team otherTeam)`

**Purpose:** Handles logic related to `is friend of`.

### AddAgentToTeam
`public void AddAgentToTeam(Agent unit)`

**Purpose:** Adds `agent to team` to the current collection or state.

### RemoveAgentFromTeam
`public void RemoveAgentFromTeam(Agent unit)`

**Purpose:** Removes `agent from team` from the current collection or state.

### DeactivateAgent
`public void DeactivateAgent(Agent agent)`

**Purpose:** Handles logic related to `deactivate agent`.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### OnMissionEnded
`public void OnMissionEnded()`

**Purpose:** Called when the `mission ended` event is raised.

### TriggerOnFormationsChanged
`public void TriggerOnFormationsChanged(Formation formation)`

**Purpose:** Handles logic related to `trigger on formations changed`.

### GetOrderControllerOf
`public OrderController GetOrderControllerOf(Agent agent)`

**Purpose:** Gets the current value of `order controller of`.

### SetPlayerRole
`public void SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)`

**Purpose:** Sets the value or state of `player role`.

### HasAnyEnemyTeamsWithAgents
`public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`

**Purpose:** Checks whether the current object has/contains `any enemy teams with agents`.

### HasAnyFormationsIncludingSpecialThatIsNotEmpty
`public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()`

**Purpose:** Checks whether the current object has/contains `any formations including special that is not empty`.

### GetFormationCount
`public int GetFormationCount()`

**Purpose:** Gets the current value of `formation count`.

### GetAIControlledFormationCount
`public int GetAIControlledFormationCount()`

**Purpose:** Gets the current value of `a i controlled formation count`.

### GetAveragePositionOfEnemies
`public Vec2 GetAveragePositionOfEnemies()`

**Purpose:** Gets the current value of `average position of enemies`.

### GetAveragePosition
`public Vec2 GetAveragePosition()`

**Purpose:** Gets the current value of `average position`.

### GetMedianPosition
`public WorldPosition GetMedianPosition(Vec2 averagePosition)`

**Purpose:** Gets the current value of `median position`.

### GetWeightedAverageOfEnemies
`public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)`

**Purpose:** Gets the current value of `weighted average of enemies`.

### DisableDetachmentTicking
`public void DisableDetachmentTicking()`

**Purpose:** Handles logic related to `disable detachment ticking`.

## Usage Example

```csharp
var value = new Team();
value.SetCustomOrderController(customMasterOrderController, customPlayerOrderController);
```

## See Also

- [Complete Class Catalog](../catalog)