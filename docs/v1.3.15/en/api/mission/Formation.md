<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Formation`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Formation](/versions/Formation)
<!-- END BREADCRUMB -->
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
| `AttackEntityOrderSecondaryDetachment` | `public AttackEntityOrderSecondaryDetachment AttackEntityOrderSecondaryDetachment { get; }` |
| `AI` | `public FormationAI AI { get; }` |
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `QuerySystem` | `public FormationQuerySystem QuerySystem { get; }` |
| `CachedFormationIntegrityData` | `public Formation.FormationIntegrityDataGroup CachedFormationIntegrityData { get; }` |
| `CachedAveragePosition` | `public Vec2 CachedAveragePosition { get; }` |
| `CachedMedianPosition` | `public WorldPosition CachedMedianPosition { get; }` |
| `CachedCurrentVelocity` | `public Vec2 CachedCurrentVelocity { get; }` |
| `CachedMovementSpeed` | `public float CachedMovementSpeed { get; }` |
| `CachedClosestEnemyFormationDistanceSquared` | `public float CachedClosestEnemyFormationDistanceSquared { get; }` |
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

**Purpose:** Creates a new `new order world position` instance or object.

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input)`

**Purpose:** Sets the value or state of `movement order`.

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order)`

**Purpose:** Sets the value or state of `facing order`.

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order)`

**Purpose:** Sets the value or state of `arrangement order`.

### SetFormOrder
`public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`

**Purpose:** Sets the value or state of `form order`.

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order)`

**Purpose:** Sets the value or state of `riding order`.

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order)`

**Purpose:** Sets the value or state of `firing order`.

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`

**Purpose:** Sets the value or state of `controlled by a i`.

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation)`

**Purpose:** Sets the value or state of `target formation`.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer()`

**Purpose:** Resets `arrangement order tick timer` to its initial state.

### SetPositioning
`public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`

**Purpose:** Sets the value or state of `positioning`.

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`

**Purpose:** Gets the current value of `count of units with condition`.

### GetReadonlyMovementOrderReference
`public readonly ref MovementOrder GetReadonlyMovementOrderReference()`

**Purpose:** Gets the current value of `readonly movement order reference`.

### GetFirstUnit
`public Agent GetFirstUnit()`

**Purpose:** Gets the current value of `first unit`.

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)`

**Purpose:** Gets the current value of `count of units belonging to logical class`.

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)`

**Purpose:** Gets the current value of `count of units belonging to physical class`.

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0)`

**Purpose:** Sets the value or state of `spawn index`.

### GetNextSpawnIndex
`public int GetNextSpawnIndex()`

**Purpose:** Gets the current value of `next spawn index`.

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex)`

**Purpose:** Gets the current value of `unit with index`.

### GetAveragePositionOfUnits
`public Vec2 GetAveragePositionOfUnits(bool excludeDetachedUnits, bool excludePlayer)`

**Purpose:** Gets the current value of `average position of units`.

### GetMedianAgent
`public Agent GetMedianAgent(bool excludeDetachedUnits, bool excludePlayer, Vec2 averagePosition)`

**Purpose:** Gets the current value of `median agent`.

### GetUnderAttackTypeOfUnits
`public Agent.UnderAttackType GetUnderAttackTypeOfUnits(float timeLimit = 3f)`

**Purpose:** Gets the current value of `under attack type of units`.

### GetMovementTypeOfUnits
`public Agent.MovementBehaviorType GetMovementTypeOfUnits()`

**Purpose:** Gets the current value of `movement type of units`.

### GetUnitsWithoutDetachedOnes
`public IEnumerable<Agent> GetUnitsWithoutDetachedOnes()`

**Purpose:** Gets the current value of `units without detached ones`.

### GetWallDirectionOfRelativeFormationLocation
`public Vec2 GetWallDirectionOfRelativeFormationLocation(Agent unit)`

**Purpose:** Gets the current value of `wall direction of relative formation location`.

### GetDirectionOfUnit
`public Vec2 GetDirectionOfUnit(Agent unit)`

**Purpose:** Gets the current value of `direction of unit`.

### GetMovementState
`public MovementOrder.MovementStateEnum GetMovementState()`

**Purpose:** Gets the current value of `movement state`.

### GetOrderPositionOfUnit
`public WorldPosition GetOrderPositionOfUnit(Agent unit)`

**Purpose:** Gets the current value of `order position of unit`.

### GetCurrentGlobalPositionOfUnit
`public Vec2 GetCurrentGlobalPositionOfUnit(Agent unit, bool blendWithOrderDirection)`

**Purpose:** Gets the current value of `current global position of unit`.

### GetAverageMaximumMovementSpeedOfUnits
`public float GetAverageMaximumMovementSpeedOfUnits()`

**Purpose:** Gets the current value of `average maximum movement speed of units`.

### GetFormationPower
`public float GetFormationPower()`

**Purpose:** Gets the current value of `formation power`.

### GetFormationMeleeFightingPower
`public float GetFormationMeleeFightingPower()`

**Purpose:** Gets the current value of `formation melee fighting power`.

### GetDetachmentOrDefault
`public IDetachment GetDetachmentOrDefault(Agent agent)`

**Purpose:** Gets the current value of `detachment or default`.

### GetDetachmentFrame
`public WorldFrame? GetDetachmentFrame(Agent agent)`

**Purpose:** Gets the current value of `detachment frame`.

### GetMiddleFrontUnitPositionOffset
`public Vec2 GetMiddleFrontUnitPositionOffset()`

**Purpose:** Gets the current value of `middle front unit position offset`.

### GetUnitsToPopWithReferencePosition
`public List<IFormationUnit> GetUnitsToPopWithReferencePosition(int count, Vec3 targetPosition)`

**Purpose:** Gets the current value of `units to pop with reference position`.

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**Purpose:** Gets the current value of `units to pop`.

### GetUnavailableUnitPositionsAccordingToNewOrder
`public IEnumerable<ValueTuple<WorldPosition, Vec2>> GetUnavailableUnitPositionsAccordingToNewOrder(Formation simulationFormation, in WorldPosition position, in Vec2 direction, float width, int unitSpacing)`

**Purpose:** Gets the current value of `unavailable unit positions according to new order`.

### GetUnitSpawnFrameWithIndex
`public void GetUnitSpawnFrameWithIndex(int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitCount, int unitSpacing, bool isMountedFormation, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**Purpose:** Gets the current value of `unit spawn frame with index`.

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**Purpose:** Gets the current value of `unit position with index according to new order`.

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, int overridenUnitCount, out WorldPosition? unitPosition, out Vec2? unitDirection)`

**Purpose:** Gets the current value of `unit position with index according to new order`.

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection, out float actualWidth)`

**Purpose:** Gets the current value of `unit position with index according to new order`.

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function)`

**Purpose:** Checks whether the current object has/contains `units with condition`.

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)`

**Purpose:** Checks whether the current object has/contains `units with condition`.

### HasAnyEnemyFormationsThatIsNotEmpty
`public bool HasAnyEnemyFormationsThatIsNotEmpty()`

**Purpose:** Checks whether the current object has/contains `any enemy formations that is not empty`.

### HasUnitWithConditionLimitedRandom
`public bool HasUnitWithConditionLimitedRandom(Func<Agent, bool> function, int startingIndex, int willBeCheckedUnitCount, out Agent resultAgent)`

**Purpose:** Checks whether the current object has/contains `unit with condition limited random`.

### CollectUnitIndices
`public int CollectUnitIndices()`

**Purpose:** Handles logic related to `collect unit indices`.

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)`

**Purpose:** Applies `action on each unit` to the current object.

### ApplyActionOnEachAttachedUnit
`public void ApplyActionOnEachAttachedUnit(Action<Agent> action)`

**Purpose:** Applies `action on each attached unit` to the current object.

### ApplyActionOnEachDetachedUnit
`public void ApplyActionOnEachDetachedUnit(Action<Agent> action)`

**Purpose:** Applies `action on each detached unit` to the current object.

### ApplyActionOnEachUnitViaBackupList
`public void ApplyActionOnEachUnitViaBackupList(Action<Agent> action)`

**Purpose:** Applies `action on each unit via backup list` to the current object.

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent, List<WorldPosition>> action, List<WorldPosition> list)`

**Purpose:** Applies `action on each unit` to the current object.

### CountUnitsOnNavMeshIDMod10
`public int CountUnitsOnNavMeshIDMod10(int navMeshID, bool includeOnlyPositionedUnits)`

**Purpose:** Handles logic related to `count units on nav mesh i d mod10`.

### OnAgentControllerChanged
`public void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)`

**Purpose:** Called when the `agent controller changed` event is raised.

### OnMassUnitTransferStart
`public void OnMassUnitTransferStart()`

**Purpose:** Called when the `mass unit transfer start` event is raised.

### OnMassUnitTransferEnd
`public void OnMassUnitTransferEnd()`

**Purpose:** Called when the `mass unit transfer end` event is raised.

### OnBatchUnitRemovalStart
`public void OnBatchUnitRemovalStart()`

**Purpose:** Called when the `batch unit removal start` event is raised.

### OnBatchUnitRemovalEnd
`public void OnBatchUnitRemovalEnd()`

**Purpose:** Called when the `batch unit removal end` event is raised.

### OnUnitAddedOrRemoved
`public void OnUnitAddedOrRemoved()`

**Purpose:** Called when the `unit added or removed` event is raised.

### OnAgentLostMount
`public void OnAgentLostMount(Agent agent)`

**Purpose:** Called when the `agent lost mount` event is raised.

### OnFormationDispersed
`public void OnFormationDispersed()`

**Purpose:** Called when the `formation dispersed` event is raised.

### OnUnitDetachmentChanged
`public void OnUnitDetachmentChanged(Agent unit, bool isOldDetachmentLoose, bool isNewDetachmentLoose)`

**Purpose:** Called when the `unit detachment changed` event is raised.

### OnUndetachableNonPlayerUnitAdded
`public void OnUndetachableNonPlayerUnitAdded(Agent unit)`

**Purpose:** Called when the `undetachable non player unit added` event is raised.

### OnUndetachableNonPlayerUnitRemoved
`public void OnUndetachableNonPlayerUnitRemoved(Agent unit)`

**Purpose:** Called when the `undetachable non player unit removed` event is raised.

### ResetMovementOrderPositionCache
`public void ResetMovementOrderPositionCache()`

**Purpose:** Resets `movement order position cache` to its initial state.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Split
`public IEnumerable<Formation> Split(int count = 2)`

**Purpose:** Handles logic related to `split`.

### TransferUnits
`public void TransferUnits(Formation target, int unitCount)`

**Purpose:** Handles logic related to `transfer units`.

### TransferUnitsAux
`public void TransferUnitsAux(Formation target, int unitCount, bool isPlayerOrder, bool useSelectivePop)`

**Purpose:** Handles logic related to `transfer units aux`.

### DebugArrangements
`public void DebugArrangements()`

**Purpose:** Handles logic related to `debug arrangements`.

### AddUnit
`public void AddUnit(Agent unit)`

**Purpose:** Adds `unit` to the current collection or state.

### RemoveUnit
`public void RemoveUnit(Agent unit)`

**Purpose:** Removes `unit` from the current collection or state.

### DetachUnit
`public void DetachUnit(Agent unit, bool isLoose)`

**Purpose:** Handles logic related to `detach unit`.

### AttachUnit
`public void AttachUnit(Agent unit)`

**Purpose:** Handles logic related to `attach unit`.

### SwitchUnitLocations
`public void SwitchUnitLocations(Agent firstUnit, Agent secondUnit)`

**Purpose:** Handles logic related to `switch unit locations`.

### ForceCalculateCaches
`public void ForceCalculateCaches()`

**Purpose:** Handles logic related to `force calculate caches`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### SetHasPendingUnitPositions
`public void SetHasPendingUnitPositions(bool hasPendingUnitPositions)`

**Purpose:** Sets the value or state of `has pending unit positions`.

### JoinDetachment
`public void JoinDetachment(IDetachment detachment)`

**Purpose:** Handles logic related to `join detachment`.

### FormAttackEntityDetachment
`public void FormAttackEntityDetachment(GameEntity targetEntity)`

**Purpose:** Handles logic related to `form attack entity detachment`.

### LeaveDetachment
`public void LeaveDetachment(IDetachment detachment)`

**Purpose:** Handles logic related to `leave detachment`.

### DisbandAttackEntityDetachment
`public void DisbandAttackEntityDetachment()`

**Purpose:** Handles logic related to `disband attack entity detachment`.

### Rearrange
`public void Rearrange(IFormationArrangement arrangement)`

**Purpose:** Handles logic related to `rearrange`.

### TickForColumnArrangementInitialPositioning
`public void TickForColumnArrangementInitialPositioning(Formation formation)`

**Purpose:** Handles logic related to `tick for column arrangement initial positioning`.

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int rankIndex)`

**Purpose:** Handles logic related to `calculate formation direction enforcing factor for rank`.

### BeginSpawn
`public void BeginSpawn(int unitCount, bool isMounted)`

**Purpose:** Handles logic related to `begin spawn`.

### EndSpawn
`public void EndSpawn()`

**Purpose:** Handles logic related to `end spawn`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth
`public static float GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(Formation simulationFormation)`

**Purpose:** Gets the current value of `last simulated formations occupation width if lesser than actual width`.

### GetFormationFramesForBeforeFormationCreation
`public static List<WorldFrame> GetFormationFramesForBeforeFormationCreation(float width, int manCount, bool areMounted, WorldPosition spawnOrigin, Mat3 spawnRotation)`

**Purpose:** Gets the current value of `formation frames for before formation creation`.

### GetDefaultUnitDiameter
`public static float GetDefaultUnitDiameter(bool isMounted)`

**Purpose:** Gets the current value of `default unit diameter`.

### GetDefaultMinimumUnitInterval
`public static float GetDefaultMinimumUnitInterval(bool isMounted)`

**Purpose:** Gets the current value of `default minimum unit interval`.

### GetDefaultUnitInterval
`public static float GetDefaultUnitInterval(bool isMounted, int unitSpacing)`

**Purpose:** Gets the current value of `default unit interval`.

### GetDefaultMinimumUnitDistance
`public static float GetDefaultMinimumUnitDistance(bool isMounted)`

**Purpose:** Gets the current value of `default minimum unit distance`.

### GetDefaultUnitDistance
`public static float GetDefaultUnitDistance(bool isMounted, int unitSpacing)`

**Purpose:** Gets the current value of `default unit distance`.

### GetDefaultFileWidth
`public static float GetDefaultFileWidth(int fileUnitCount, int unitSpacing, bool isMounted)`

**Purpose:** Gets the current value of `default file width`.

### GetDefaultRankDepth
`public static float GetDefaultRankDepth(int rankUnitCount, int unitSpacing, bool isMounted)`

**Purpose:** Gets the current value of `default rank depth`.

### InfantryInterval
`public static float InfantryInterval(int unitSpacing)`

**Purpose:** Handles logic related to `infantry interval`.

### CavalryInterval
`public static float CavalryInterval(int unitSpacing)`

**Purpose:** Handles logic related to `cavalry interval`.

### InfantryDistance
`public static float InfantryDistance(int unitSpacing)`

**Purpose:** Handles logic related to `infantry distance`.

### CavalryDistance
`public static float CavalryDistance(int unitSpacing)`

**Purpose:** Handles logic related to `cavalry distance`.

### IsDefenseRelatedAIDrivenComponent
`public static bool IsDefenseRelatedAIDrivenComponent(DrivenProperty drivenProperty)`

**Purpose:** Handles logic related to `is defense related a i driven component`.

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**Purpose:** Gets the current value of `retreat position from cache`.

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**Purpose:** Adds `new position to cache` to the current collection or state.

## Usage Example

```csharp
var value = new Formation();
value.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

## See Also

- [Complete Class Catalog](../catalog)