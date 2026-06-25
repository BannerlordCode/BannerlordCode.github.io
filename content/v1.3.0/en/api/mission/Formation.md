---
title: "Formation"
description: "Auto-generated class reference for Formation."
---
# Formation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Formation : IFormation`
**Base:** `IFormation`
**File:** `TaleWorlds.MountAndBlade/Formation.cs`

## Overview

`Formation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RetreatPositionCache` | `public Formation.RetreatPositionCacheSystem RetreatPositionCache { get; }` |
| `RepresentativeClass` | `public FormationClass RepresentativeClass { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `UnitSpacing` | `public int UnitSpacing { get; }` |
| `OrderPositionLock` | `public object OrderPositionLock { get; }` |
| `CountOfUnits` | `public int CountOfUnits { get; }` |
| `CountOfDetachedUnits` | `public int CountOfDetachedUnits { get; }` |
| `CountOfUndetachableNonPlayerUnits` | `public int CountOfUndetachableNonPlayerUnits { get; }` |
| `CountOfUnitsWithoutDetachedOnes` | `public int CountOfUnitsWithoutDetachedOnes { get; }` |
| `UnitsWithoutLooseDetachedOnes` | `public MBReadOnlyList<IFormationUnit> UnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfUnitsWithoutLooseDetachedOnes` | `public int CountOfUnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfDetachableNonPlayerUnits` | `public int CountOfDetachableNonPlayerUnits { get; }` |
| `OrderPosition` | `public Vec2 OrderPosition { get; }` |
| `OrderGroundPosition` | `public Vec3 OrderGroundPosition { get; }` |
| `OrderPositionIsValid` | `public bool OrderPositionIsValid { get; }` |
| `Depth` | `public float Depth { get; }` |
| `MinimumWidth` | `public float MinimumWidth { get; }` |
| `MaximumWidth` | `public float MaximumWidth { get; }` |
| `UnitDiameter` | `public float UnitDiameter { get; }` |
| `CurrentDirection` | `public Vec2 CurrentDirection { get; }` |
| `SmoothedAverageUnitPosition` | `public Vec2 SmoothedAverageUnitPosition { get; }` |
| `LooseDetachedUnits` | `public MBReadOnlyList<Agent> LooseDetachedUnits { get; }` |
| `DetachedUnits` | `public MBReadOnlyList<Agent> DetachedUnits { get; }` |
| `AttackEntityOrderDetachment` | `public AttackEntityOrderDetachment AttackEntityOrderDetachment { get; }` |
| `AI` | `public FormationAI AI { get; }` |
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `QuerySystem` | `public FormationQuerySystem QuerySystem { get; }` |
| `CachedFormationIntegrityData` | `public Formation.FormationIntegrityDataGroup CachedFormationIntegrityData { get; }` |
| `CachedAveragePosition` | `public Vec2 CachedAveragePosition { get; }` |
| `CachedMedianPosition` | `public WorldPosition CachedMedianPosition { get; }` |
| `CachedCurrentVelocity` | `public Vec2 CachedCurrentVelocity { get; }` |
| `CachedMovementSpeed` | `public float CachedMovementSpeed { get; }` |
| `CachedClosestEnemyFormation` | `public FormationQuerySystem CachedClosestEnemyFormation { get; }` |
| `Detachments` | `public MBReadOnlyList<IDetachment> Detachments { get; }` |
| `OverridenUnitCount` | `public int? OverridenUnitCount { get; }` |
| `IsSpawning` | `public bool IsSpawning { get; }` |
| `IsAITickedAfterSplit` | `public bool IsAITickedAfterSplit { get; }` |
| `HasPlayerControlledTroop` | `public bool HasPlayerControlledTroop { get; }` |
| `IsPlayerTroopInFormation` | `public bool IsPlayerTroopInFormation { get; }` |
| `ContainsAgentVisuals` | `public bool ContainsAgentVisuals { get; set; }` |
| `PlayerOwner` | `public Agent PlayerOwner { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `IsSplittableByAI` | `public bool IsSplittableByAI { get; }` |
| `IsAIOwned` | `public bool IsAIOwned { get; }` |
| `IsConvenientForTransfer` | `public bool IsConvenientForTransfer { get; }` |
| `OrderLocalAveragePosition` | `public Vec2 OrderLocalAveragePosition { get; }` |
| `FacingOrder` | `public FacingOrder FacingOrder { get; }` |
| `ArrangementOrder` | `public ArrangementOrder ArrangementOrder { get; }` |
| `FormOrder` | `public FormOrder FormOrder { get; }` |
| `RidingOrder` | `public RidingOrder RidingOrder { get; }` |
| `FiringOrder` | `public FiringOrder FiringOrder { get; }` |
| `HasAnyMountedUnit` | `public bool HasAnyMountedUnit { get; }` |
| `Width` | `public float Width { get; }` |
| `IsDeployment` | `public bool IsDeployment { get; }` |
| `LogicalClass` | `public FormationClass LogicalClass { get; }` |
| `SecondaryLogicalClasses` | `public IEnumerable<FormationClass> SecondaryLogicalClasses { get; }` |
| `Arrangement` | `public IFormationArrangement Arrangement { get; set; }` |
| `PhysicalClass` | `public FormationClass PhysicalClass { get; }` |
| `SecondaryPhysicalClasses` | `public IEnumerable<FormationClass> SecondaryPhysicalClasses { get; }` |
| `Interval` | `public float Interval { get; }` |
| `CalculateHasSignificantNumberOfMounted` | `public bool CalculateHasSignificantNumberOfMounted { get; }` |
| `Distance` | `public float Distance { get; }` |
| `CurrentPosition` | `public Vec2 CurrentPosition { get; }` |
| `Captain` | `public Agent Captain { get; set; }` |
| `MinimumDistance` | `public float MinimumDistance { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `MinimumInterval` | `public float MinimumInterval { get; }` |
| `MaximumInterval` | `public float MaximumInterval { get; }` |
| `MaximumDistance` | `public float MaximumDistance { get; }` |
| `Formation` | `public IFormationArrangement Formation { get; }` |
| `FormationFileIndex` | `public int FormationFileIndex { get; set; }` |
| `FormationRankIndex` | `public int FormationRankIndex { get; set; }` |
| `FollowedUnit` | `public IFormationUnit FollowedUnit { get; }` |
| `IsShieldUsageEncouraged` | `public bool IsShieldUsageEncouraged { get; }` |
| `IsPlayerUnit` | `public bool IsPlayerUnit { get; }` |

## Key Methods

### CreateNewOrderWorldPosition
`public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**Purpose:** Constructs a new new order world position entity and returns it to the caller.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input)`

**Purpose:** Assigns a new value to movement order and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetMovementOrder(input);
```

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order)`

**Purpose:** Assigns a new value to facing order and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetFacingOrder(order);
```

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order)`

**Purpose:** Assigns a new value to arrangement order and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetArrangementOrder(order);
```

### SetFormOrder
`public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`

**Purpose:** Assigns a new value to form order and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetFormOrder(order, false);
```

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order)`

**Purpose:** Assigns a new value to riding order and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetRidingOrder(order);
```

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order)`

**Purpose:** Assigns a new value to firing order and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetFiringOrder(order);
```

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`

**Purpose:** Assigns a new value to controlled by a i and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetControlledByAI(false, false);
```

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation)`

**Purpose:** Assigns a new value to target formation and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetTargetFormation(targetFormation);
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnDeploymentFinished();
```

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer()`

**Purpose:** Returns arrangement order tick timer to its default or initial condition.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ResetArrangementOrderTickTimer();
```

### SetPositioning
`public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`

**Purpose:** Assigns a new value to positioning and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetPositioning(null, null, 0);
```

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`

**Purpose:** Reads and returns the count of units with condition value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetCountOfUnitsWithCondition(func<Agent, false);
```

### GetReadonlyMovementOrderReference
`public ref readonly MovementOrder GetReadonlyMovementOrderReference()`

**Purpose:** Reads and returns the readonly movement order reference value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetReadonlyMovementOrderReference();
```

### GetFirstUnit
`public Agent GetFirstUnit()`

**Purpose:** Reads and returns the first unit value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetFirstUnit();
```

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)`

**Purpose:** Reads and returns the count of units belonging to logical class value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetCountOfUnitsBelongingToLogicalClass(logicalClass);
```

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)`

**Purpose:** Reads and returns the count of units belonging to physical class value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetCountOfUnitsBelongingToPhysicalClass(physicalClass, false);
```

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0)`

**Purpose:** Assigns a new value to spawn index and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetSpawnIndex(0);
```

### GetNextSpawnIndex
`public int GetNextSpawnIndex()`

**Purpose:** Reads and returns the next spawn index value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetNextSpawnIndex();
```

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex)`

**Purpose:** Reads and returns the unit with index value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetUnitWithIndex(0);
```

### GetAveragePositionOfUnits
`public Vec2 GetAveragePositionOfUnits(bool excludeDetachedUnits, bool excludePlayer)`

**Purpose:** Reads and returns the average position of units value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetAveragePositionOfUnits(false, false);
```

### GetMedianAgent
`public Agent GetMedianAgent(bool excludeDetachedUnits, bool excludePlayer, Vec2 averagePosition)`

**Purpose:** Reads and returns the median agent value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetMedianAgent(false, false, averagePosition);
```

### GetUnderAttackTypeOfUnits
`public Agent.UnderAttackType GetUnderAttackTypeOfUnits(float timeLimit = 3f)`

**Purpose:** Reads and returns the under attack type of units value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetUnderAttackTypeOfUnits(0);
```

### GetMovementTypeOfUnits
`public Agent.MovementBehaviorType GetMovementTypeOfUnits()`

**Purpose:** Reads and returns the movement type of units value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetMovementTypeOfUnits();
```

### GetUnitsWithoutDetachedOnes
`public IEnumerable<Agent> GetUnitsWithoutDetachedOnes()`

**Purpose:** Reads and returns the units without detached ones value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetUnitsWithoutDetachedOnes();
```

### GetWallDirectionOfRelativeFormationLocation
`public Vec2 GetWallDirectionOfRelativeFormationLocation(Agent unit)`

**Purpose:** Reads and returns the wall direction of relative formation location value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetWallDirectionOfRelativeFormationLocation(unit);
```

### GetDirectionOfUnit
`public Vec2 GetDirectionOfUnit(Agent unit)`

**Purpose:** Reads and returns the direction of unit value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetDirectionOfUnit(unit);
```

### GetMovementState
`public MovementOrder.MovementStateEnum GetMovementState()`

**Purpose:** Reads and returns the movement state value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetMovementState();
```

### GetOrderPositionOfUnit
`public WorldPosition GetOrderPositionOfUnit(Agent unit)`

**Purpose:** Reads and returns the order position of unit value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetOrderPositionOfUnit(unit);
```

### GetCurrentGlobalPositionOfUnit
`public Vec2 GetCurrentGlobalPositionOfUnit(Agent unit, bool blendWithOrderDirection)`

**Purpose:** Reads and returns the current global position of unit value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetCurrentGlobalPositionOfUnit(unit, false);
```

### GetAverageMaximumMovementSpeedOfUnits
`public float GetAverageMaximumMovementSpeedOfUnits()`

**Purpose:** Reads and returns the average maximum movement speed of units value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetAverageMaximumMovementSpeedOfUnits();
```

### GetFormationPower
`public float GetFormationPower()`

**Purpose:** Reads and returns the formation power value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetFormationPower();
```

### GetFormationMeleeFightingPower
`public float GetFormationMeleeFightingPower()`

**Purpose:** Reads and returns the formation melee fighting power value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetFormationMeleeFightingPower();
```

### GetDetachmentOrDefault
`public IDetachment GetDetachmentOrDefault(Agent agent)`

**Purpose:** Reads and returns the detachment or default value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetDetachmentOrDefault(agent);
```

### GetDetachmentFrame
`public WorldFrame? GetDetachmentFrame(Agent agent)`

**Purpose:** Reads and returns the detachment frame value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetDetachmentFrame(agent);
```

### GetMiddleFrontUnitPositionOffset
`public Vec2 GetMiddleFrontUnitPositionOffset()`

**Purpose:** Reads and returns the middle front unit position offset value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetMiddleFrontUnitPositionOffset();
```

### GetUnitsToPopWithReferencePosition
`public List<IFormationUnit> GetUnitsToPopWithReferencePosition(int count, Vec3 targetPosition)`

**Purpose:** Reads and returns the units to pop with reference position value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetUnitsToPopWithReferencePosition(0, targetPosition);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**Purpose:** Reads and returns the units to pop value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetUnitsToPop(0);
```

### GetUnavailableUnitPositionsAccordingToNewOrder
`public IEnumerable<ValueTuple<WorldPosition, Vec2>> GetUnavailableUnitPositionsAccordingToNewOrder(Formation simulationFormation, in WorldPosition position, in Vec2 direction, float width, int unitSpacing)`

**Purpose:** Reads and returns the unavailable unit positions according to new order value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetUnavailableUnitPositionsAccordingToNewOrder(simulationFormation, position, direction, 0, 0);
```

### GetUnitSpawnFrameWithIndex
`public void GetUnitSpawnFrameWithIndex(int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitCount, int unitSpacing, bool isMountedFormation, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**Purpose:** Reads and returns the unit spawn frame with index value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.GetUnitSpawnFrameWithIndex(0, formationPosition, formationDirection, 0, 0, 0, false, unitSpawnPosition, unitSpawnDirection);
```

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**Purpose:** Reads and returns the unit position with index according to new order value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.GetUnitPositionWithIndexAccordingToNewOrder(simulationFormation, 0, formationPosition, formationDirection, 0, 0, unitSpawnPosition, unitSpawnDirection);
```

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, int overridenUnitCount, out WorldPosition? unitPosition, out Vec2? unitDirection)`

**Purpose:** Reads and returns the unit position with index according to new order value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.GetUnitPositionWithIndexAccordingToNewOrder(simulationFormation, 0, formationPosition, formationDirection, 0, 0, 0, unitPosition, unitDirection);
```

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection, out float actualWidth)`

**Purpose:** Reads and returns the unit position with index according to new order value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.GetUnitPositionWithIndexAccordingToNewOrder(simulationFormation, 0, formationPosition, formationDirection, 0, 0, unitSpawnPosition, unitSpawnDirection, actualWidth);
```

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function)`

**Purpose:** Determines whether the this instance already holds units with condition.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.HasUnitsWithCondition(func<Agent, false);
```

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)`

**Purpose:** Determines whether the this instance already holds units with condition.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.HasUnitsWithCondition(func<Agent, false, result);
```

### HasAnyEnemyFormationsThatIsNotEmpty
`public bool HasAnyEnemyFormationsThatIsNotEmpty()`

**Purpose:** Determines whether the this instance already holds any enemy formations that is not empty.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.HasAnyEnemyFormationsThatIsNotEmpty();
```

### HasUnitWithConditionLimitedRandom
`public bool HasUnitWithConditionLimitedRandom(Func<Agent, bool> function, int startingIndex, int willBeCheckedUnitCount, out Agent resultAgent)`

**Purpose:** Determines whether the this instance already holds unit with condition limited random.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.HasUnitWithConditionLimitedRandom(func<Agent, false, 0, 0, resultAgent);
```

### CollectUnitIndices
`public int CollectUnitIndices()`

**Purpose:** Executes the CollectUnitIndices logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.CollectUnitIndices();
```

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)`

**Purpose:** Applies the effect of action on each unit to the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ApplyActionOnEachUnit(action, null);
```

### ApplyActionOnEachAttachedUnit
`public void ApplyActionOnEachAttachedUnit(Action<Agent> action)`

**Purpose:** Applies the effect of action on each attached unit to the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ApplyActionOnEachAttachedUnit(action);
```

### ApplyActionOnEachDetachedUnit
`public void ApplyActionOnEachDetachedUnit(Action<Agent> action)`

**Purpose:** Applies the effect of action on each detached unit to the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ApplyActionOnEachDetachedUnit(action);
```

### ApplyActionOnEachUnitViaBackupList
`public void ApplyActionOnEachUnitViaBackupList(Action<Agent> action)`

**Purpose:** Applies the effect of action on each unit via backup list to the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ApplyActionOnEachUnitViaBackupList(action);
```

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent, List<WorldPosition>> action, List<WorldPosition> list)`

**Purpose:** Applies the effect of action on each unit to the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ApplyActionOnEachUnit(action<Agent, action, list);
```

### CountUnitsOnNavMeshIDMod10
`public int CountUnitsOnNavMeshIDMod10(int navMeshID, bool includeOnlyPositionedUnits)`

**Purpose:** Executes the CountUnitsOnNavMeshIDMod10 logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.CountUnitsOnNavMeshIDMod10(0, false);
```

### OnAgentControllerChanged
`public void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)`

**Purpose:** Invoked when the agent controller changed event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnAgentControllerChanged(agent, oldController);
```

### OnMassUnitTransferStart
`public void OnMassUnitTransferStart()`

**Purpose:** Invoked when the mass unit transfer start event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnMassUnitTransferStart();
```

### OnMassUnitTransferEnd
`public void OnMassUnitTransferEnd()`

**Purpose:** Invoked when the mass unit transfer end event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnMassUnitTransferEnd();
```

### OnBatchUnitRemovalStart
`public void OnBatchUnitRemovalStart()`

**Purpose:** Invoked when the batch unit removal start event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnBatchUnitRemovalStart();
```

### OnBatchUnitRemovalEnd
`public void OnBatchUnitRemovalEnd()`

**Purpose:** Invoked when the batch unit removal end event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnBatchUnitRemovalEnd();
```

### OnUnitAddedOrRemoved
`public void OnUnitAddedOrRemoved()`

**Purpose:** Invoked when the unit added or removed event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnUnitAddedOrRemoved();
```

### OnAgentLostMount
`public void OnAgentLostMount(Agent agent)`

**Purpose:** Invoked when the agent lost mount event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnAgentLostMount(agent);
```

### OnFormationDispersed
`public void OnFormationDispersed()`

**Purpose:** Invoked when the formation dispersed event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnFormationDispersed();
```

### OnUnitDetachmentChanged
`public void OnUnitDetachmentChanged(Agent unit, bool isOldDetachmentLoose, bool isNewDetachmentLoose)`

**Purpose:** Invoked when the unit detachment changed event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnUnitDetachmentChanged(unit, false, false);
```

### OnUndetachableNonPlayerUnitAdded
`public void OnUndetachableNonPlayerUnitAdded(Agent unit)`

**Purpose:** Invoked when the undetachable non player unit added event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnUndetachableNonPlayerUnitAdded(unit);
```

### OnUndetachableNonPlayerUnitRemoved
`public void OnUndetachableNonPlayerUnitRemoved(Agent unit)`

**Purpose:** Invoked when the undetachable non player unit removed event is raised.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.OnUndetachableNonPlayerUnitRemoved(unit);
```

### ResetMovementOrderPositionCache
`public void ResetMovementOrderPositionCache()`

**Purpose:** Returns movement order position cache to its default or initial condition.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ResetMovementOrderPositionCache();
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.Reset();
```

### Split
`public IEnumerable<Formation> Split(int count = 2)`

**Purpose:** Splits split into multiple parts or sub-items.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.Split(0);
```

### TransferUnits
`public void TransferUnits(Formation target, int unitCount)`

**Purpose:** Executes the TransferUnits logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.TransferUnits(target, 0);
```

### TransferUnitsAux
`public void TransferUnitsAux(Formation target, int unitCount, bool isPlayerOrder, bool useSelectivePop)`

**Purpose:** Executes the TransferUnitsAux logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.TransferUnitsAux(target, 0, false, false);
```

### DebugArrangements
`public void DebugArrangements()`

**Purpose:** Executes the DebugArrangements logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.DebugArrangements();
```

### AddUnit
`public void AddUnit(Agent unit)`

**Purpose:** Adds unit to the current collection or state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.AddUnit(unit);
```

### RemoveUnit
`public void RemoveUnit(Agent unit)`

**Purpose:** Removes unit from the current collection or state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.RemoveUnit(unit);
```

### DetachUnit
`public void DetachUnit(Agent unit, bool isLoose)`

**Purpose:** Executes the DetachUnit logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.DetachUnit(unit, false);
```

### AttachUnit
`public void AttachUnit(Agent unit)`

**Purpose:** Executes the AttachUnit logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.AttachUnit(unit);
```

### SwitchUnitLocations
`public void SwitchUnitLocations(Agent firstUnit, Agent secondUnit)`

**Purpose:** Executes the SwitchUnitLocations logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SwitchUnitLocations(firstUnit, secondUnit);
```

### ForceCalculateCaches
`public void ForceCalculateCaches()`

**Purpose:** Executes the ForceCalculateCaches logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.ForceCalculateCaches();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.Tick(0);
```

### SetHasPendingUnitPositions
`public void SetHasPendingUnitPositions(bool hasPendingUnitPositions)`

**Purpose:** Assigns a new value to has pending unit positions and updates the object's internal state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.SetHasPendingUnitPositions(false);
```

### JoinDetachment
`public void JoinDetachment(IDetachment detachment)`

**Purpose:** Joins several detachment items into a single whole.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.JoinDetachment(detachment);
```

### FormAttackEntityDetachment
`public void FormAttackEntityDetachment(GameEntity targetEntity)`

**Purpose:** Executes the FormAttackEntityDetachment logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.FormAttackEntityDetachment(targetEntity);
```

### LeaveDetachment
`public void LeaveDetachment(IDetachment detachment)`

**Purpose:** Executes the LeaveDetachment logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.LeaveDetachment(detachment);
```

### DisbandAttackEntityDetachment
`public void DisbandAttackEntityDetachment()`

**Purpose:** Executes the DisbandAttackEntityDetachment logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.DisbandAttackEntityDetachment();
```

### Rearrange
`public void Rearrange(IFormationArrangement arrangement)`

**Purpose:** Executes the Rearrange logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.Rearrange(arrangement);
```

### TickForColumnArrangementInitialPositioning
`public void TickForColumnArrangementInitialPositioning(Formation formation)`

**Purpose:** Advances the for column arrangement initial positioning state each frame or update cycle.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.TickForColumnArrangementInitialPositioning(formation);
```

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int rankIndex)`

**Purpose:** Calculates the current value or result of formation direction enforcing factor for rank.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.CalculateFormationDirectionEnforcingFactorForRank(0);
```

### BeginSpawn
`public void BeginSpawn(int unitCount, bool isMounted)`

**Purpose:** Executes the BeginSpawn logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.BeginSpawn(0, false);
```

### EndSpawn
`public void EndSpawn()`

**Purpose:** Executes the EndSpawn logic.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.EndSpawn();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetHashCode();
```

### GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth
`public static float GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(Formation simulationFormation)`

**Purpose:** Reads and returns the last simulated formations occupation width if lesser than actual width value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(simulationFormation);
```

### GetFormationFramesForBeforeFormationCreation
`public static List<WorldFrame> GetFormationFramesForBeforeFormationCreation(float width, int manCount, bool areMounted, WorldPosition spawnOrigin, Mat3 spawnRotation)`

**Purpose:** Reads and returns the formation frames for before formation creation value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetFormationFramesForBeforeFormationCreation(0, 0, false, spawnOrigin, spawnRotation);
```

### GetDefaultUnitDiameter
`public static float GetDefaultUnitDiameter(bool isMounted)`

**Purpose:** Reads and returns the default unit diameter value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultUnitDiameter(false);
```

### GetDefaultMinimumUnitInterval
`public static float GetDefaultMinimumUnitInterval(bool isMounted)`

**Purpose:** Reads and returns the default minimum unit interval value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultMinimumUnitInterval(false);
```

### GetDefaultUnitInterval
`public static float GetDefaultUnitInterval(bool isMounted, int unitSpacing)`

**Purpose:** Reads and returns the default unit interval value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultUnitInterval(false, 0);
```

### GetDefaultMinimumUnitDistance
`public static float GetDefaultMinimumUnitDistance(bool isMounted)`

**Purpose:** Reads and returns the default minimum unit distance value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultMinimumUnitDistance(false);
```

### GetDefaultUnitDistance
`public static float GetDefaultUnitDistance(bool isMounted, int unitSpacing)`

**Purpose:** Reads and returns the default unit distance value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultUnitDistance(false, 0);
```

### GetDefaultFileWidth
`public static float GetDefaultFileWidth(int fileUnitCount, int unitSpacing, bool isMounted)`

**Purpose:** Reads and returns the default file width value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultFileWidth(0, 0, false);
```

### GetDefaultRankDepth
`public static float GetDefaultRankDepth(int rankUnitCount, int unitSpacing, bool isMounted)`

**Purpose:** Reads and returns the default rank depth value held by the this instance.

```csharp
// Static call; no instance required
Formation.GetDefaultRankDepth(0, 0, false);
```

### InfantryInterval
`public static float InfantryInterval(int unitSpacing)`

**Purpose:** Executes the InfantryInterval logic.

```csharp
// Static call; no instance required
Formation.InfantryInterval(0);
```

### CavalryInterval
`public static float CavalryInterval(int unitSpacing)`

**Purpose:** Executes the CavalryInterval logic.

```csharp
// Static call; no instance required
Formation.CavalryInterval(0);
```

### InfantryDistance
`public static float InfantryDistance(int unitSpacing)`

**Purpose:** Executes the InfantryDistance logic.

```csharp
// Static call; no instance required
Formation.InfantryDistance(0);
```

### CavalryDistance
`public static float CavalryDistance(int unitSpacing)`

**Purpose:** Executes the CavalryDistance logic.

```csharp
// Static call; no instance required
Formation.CavalryDistance(0);
```

### IsDefenseRelatedAIDrivenComponent
`public static bool IsDefenseRelatedAIDrivenComponent(DrivenProperty drivenProperty)`

**Purpose:** Determines whether the this instance is in the defense related a i driven component state or condition.

```csharp
// Static call; no instance required
Formation.IsDefenseRelatedAIDrivenComponent(drivenProperty);
```

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**Purpose:** Reads and returns the retreat position from cache value held by the this instance.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
var result = formation.GetRetreatPositionFromCache(agentPosition);
```

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**Purpose:** Adds new position to cache to the current collection or state.

```csharp
// Obtain an instance of Formation from the subsystem API first
Formation formation = ...;
formation.AddNewPositionToCache(agentPostion, retreatingPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Formation formation = ...;
formation.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

## See Also

- [Area Index](../)