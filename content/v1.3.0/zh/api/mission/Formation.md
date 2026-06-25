---
title: "Formation"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Formation`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Formation](/versions/Formation)
<!-- END BREADCRUMB -->
# Formation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Formation : IFormation`
**Base:** `IFormation`
**File:** `TaleWorlds.MountAndBlade/Formation.cs`

## 概述

`Formation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### CreateNewOrderWorldPosition
`public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 创建一个 `new order world position` 实例或对象。

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input)`

**用途 / Purpose:** 设置 `movement order` 的值或状态。

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order)`

**用途 / Purpose:** 设置 `facing order` 的值或状态。

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order)`

**用途 / Purpose:** 设置 `arrangement order` 的值或状态。

### SetFormOrder
`public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`

**用途 / Purpose:** 设置 `form order` 的值或状态。

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order)`

**用途 / Purpose:** 设置 `riding order` 的值或状态。

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order)`

**用途 / Purpose:** 设置 `firing order` 的值或状态。

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`

**用途 / Purpose:** 设置 `controlled by a i` 的值或状态。

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation)`

**用途 / Purpose:** 设置 `target formation` 的值或状态。

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer()`

**用途 / Purpose:** 将 `arrangement order tick timer` 重置为初始状态。

### SetPositioning
`public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`

**用途 / Purpose:** 设置 `positioning` 的值或状态。

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`

**用途 / Purpose:** 获取 `count of units with condition` 的当前值。

### GetReadonlyMovementOrderReference
`public ref readonly MovementOrder GetReadonlyMovementOrderReference()`

**用途 / Purpose:** 获取 `readonly movement order reference` 的当前值。

### GetFirstUnit
`public Agent GetFirstUnit()`

**用途 / Purpose:** 获取 `first unit` 的当前值。

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)`

**用途 / Purpose:** 获取 `count of units belonging to logical class` 的当前值。

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)`

**用途 / Purpose:** 获取 `count of units belonging to physical class` 的当前值。

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0)`

**用途 / Purpose:** 设置 `spawn index` 的值或状态。

### GetNextSpawnIndex
`public int GetNextSpawnIndex()`

**用途 / Purpose:** 获取 `next spawn index` 的当前值。

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex)`

**用途 / Purpose:** 获取 `unit with index` 的当前值。

### GetAveragePositionOfUnits
`public Vec2 GetAveragePositionOfUnits(bool excludeDetachedUnits, bool excludePlayer)`

**用途 / Purpose:** 获取 `average position of units` 的当前值。

### GetMedianAgent
`public Agent GetMedianAgent(bool excludeDetachedUnits, bool excludePlayer, Vec2 averagePosition)`

**用途 / Purpose:** 获取 `median agent` 的当前值。

### GetUnderAttackTypeOfUnits
`public Agent.UnderAttackType GetUnderAttackTypeOfUnits(float timeLimit = 3f)`

**用途 / Purpose:** 获取 `under attack type of units` 的当前值。

### GetMovementTypeOfUnits
`public Agent.MovementBehaviorType GetMovementTypeOfUnits()`

**用途 / Purpose:** 获取 `movement type of units` 的当前值。

### GetUnitsWithoutDetachedOnes
`public IEnumerable<Agent> GetUnitsWithoutDetachedOnes()`

**用途 / Purpose:** 获取 `units without detached ones` 的当前值。

### GetWallDirectionOfRelativeFormationLocation
`public Vec2 GetWallDirectionOfRelativeFormationLocation(Agent unit)`

**用途 / Purpose:** 获取 `wall direction of relative formation location` 的当前值。

### GetDirectionOfUnit
`public Vec2 GetDirectionOfUnit(Agent unit)`

**用途 / Purpose:** 获取 `direction of unit` 的当前值。

### GetMovementState
`public MovementOrder.MovementStateEnum GetMovementState()`

**用途 / Purpose:** 获取 `movement state` 的当前值。

### GetOrderPositionOfUnit
`public WorldPosition GetOrderPositionOfUnit(Agent unit)`

**用途 / Purpose:** 获取 `order position of unit` 的当前值。

### GetCurrentGlobalPositionOfUnit
`public Vec2 GetCurrentGlobalPositionOfUnit(Agent unit, bool blendWithOrderDirection)`

**用途 / Purpose:** 获取 `current global position of unit` 的当前值。

### GetAverageMaximumMovementSpeedOfUnits
`public float GetAverageMaximumMovementSpeedOfUnits()`

**用途 / Purpose:** 获取 `average maximum movement speed of units` 的当前值。

### GetFormationPower
`public float GetFormationPower()`

**用途 / Purpose:** 获取 `formation power` 的当前值。

### GetFormationMeleeFightingPower
`public float GetFormationMeleeFightingPower()`

**用途 / Purpose:** 获取 `formation melee fighting power` 的当前值。

### GetDetachmentOrDefault
`public IDetachment GetDetachmentOrDefault(Agent agent)`

**用途 / Purpose:** 获取 `detachment or default` 的当前值。

### GetDetachmentFrame
`public WorldFrame? GetDetachmentFrame(Agent agent)`

**用途 / Purpose:** 获取 `detachment frame` 的当前值。

### GetMiddleFrontUnitPositionOffset
`public Vec2 GetMiddleFrontUnitPositionOffset()`

**用途 / Purpose:** 获取 `middle front unit position offset` 的当前值。

### GetUnitsToPopWithReferencePosition
`public List<IFormationUnit> GetUnitsToPopWithReferencePosition(int count, Vec3 targetPosition)`

**用途 / Purpose:** 获取 `units to pop with reference position` 的当前值。

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**用途 / Purpose:** 获取 `units to pop` 的当前值。

### GetUnavailableUnitPositionsAccordingToNewOrder
`public IEnumerable<ValueTuple<WorldPosition, Vec2>> GetUnavailableUnitPositionsAccordingToNewOrder(Formation simulationFormation, in WorldPosition position, in Vec2 direction, float width, int unitSpacing)`

**用途 / Purpose:** 获取 `unavailable unit positions according to new order` 的当前值。

### GetUnitSpawnFrameWithIndex
`public void GetUnitSpawnFrameWithIndex(int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitCount, int unitSpacing, bool isMountedFormation, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**用途 / Purpose:** 获取 `unit spawn frame with index` 的当前值。

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**用途 / Purpose:** 获取 `unit position with index according to new order` 的当前值。

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, int overridenUnitCount, out WorldPosition? unitPosition, out Vec2? unitDirection)`

**用途 / Purpose:** 获取 `unit position with index according to new order` 的当前值。

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection, out float actualWidth)`

**用途 / Purpose:** 获取 `unit position with index according to new order` 的当前值。

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `units with condition`。

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `units with condition`。

### HasAnyEnemyFormationsThatIsNotEmpty
`public bool HasAnyEnemyFormationsThatIsNotEmpty()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any enemy formations that is not empty`。

### HasUnitWithConditionLimitedRandom
`public bool HasUnitWithConditionLimitedRandom(Func<Agent, bool> function, int startingIndex, int willBeCheckedUnitCount, out Agent resultAgent)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `unit with condition limited random`。

### CollectUnitIndices
`public int CollectUnitIndices()`

**用途 / Purpose:** 处理 `collect unit indices` 相关逻辑。

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)`

**用途 / Purpose:** 将 `action on each unit` 应用到当前对象。

### ApplyActionOnEachAttachedUnit
`public void ApplyActionOnEachAttachedUnit(Action<Agent> action)`

**用途 / Purpose:** 将 `action on each attached unit` 应用到当前对象。

### ApplyActionOnEachDetachedUnit
`public void ApplyActionOnEachDetachedUnit(Action<Agent> action)`

**用途 / Purpose:** 将 `action on each detached unit` 应用到当前对象。

### ApplyActionOnEachUnitViaBackupList
`public void ApplyActionOnEachUnitViaBackupList(Action<Agent> action)`

**用途 / Purpose:** 将 `action on each unit via backup list` 应用到当前对象。

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent, List<WorldPosition>> action, List<WorldPosition> list)`

**用途 / Purpose:** 将 `action on each unit` 应用到当前对象。

### CountUnitsOnNavMeshIDMod10
`public int CountUnitsOnNavMeshIDMod10(int navMeshID, bool includeOnlyPositionedUnits)`

**用途 / Purpose:** 处理 `count units on nav mesh i d mod10` 相关逻辑。

### OnAgentControllerChanged
`public void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)`

**用途 / Purpose:** 当 `agent controller changed` 事件触发时调用此方法。

### OnMassUnitTransferStart
`public void OnMassUnitTransferStart()`

**用途 / Purpose:** 当 `mass unit transfer start` 事件触发时调用此方法。

### OnMassUnitTransferEnd
`public void OnMassUnitTransferEnd()`

**用途 / Purpose:** 当 `mass unit transfer end` 事件触发时调用此方法。

### OnBatchUnitRemovalStart
`public void OnBatchUnitRemovalStart()`

**用途 / Purpose:** 当 `batch unit removal start` 事件触发时调用此方法。

### OnBatchUnitRemovalEnd
`public void OnBatchUnitRemovalEnd()`

**用途 / Purpose:** 当 `batch unit removal end` 事件触发时调用此方法。

### OnUnitAddedOrRemoved
`public void OnUnitAddedOrRemoved()`

**用途 / Purpose:** 当 `unit added or removed` 事件触发时调用此方法。

### OnAgentLostMount
`public void OnAgentLostMount(Agent agent)`

**用途 / Purpose:** 当 `agent lost mount` 事件触发时调用此方法。

### OnFormationDispersed
`public void OnFormationDispersed()`

**用途 / Purpose:** 当 `formation dispersed` 事件触发时调用此方法。

### OnUnitDetachmentChanged
`public void OnUnitDetachmentChanged(Agent unit, bool isOldDetachmentLoose, bool isNewDetachmentLoose)`

**用途 / Purpose:** 当 `unit detachment changed` 事件触发时调用此方法。

### OnUndetachableNonPlayerUnitAdded
`public void OnUndetachableNonPlayerUnitAdded(Agent unit)`

**用途 / Purpose:** 当 `undetachable non player unit added` 事件触发时调用此方法。

### OnUndetachableNonPlayerUnitRemoved
`public void OnUndetachableNonPlayerUnitRemoved(Agent unit)`

**用途 / Purpose:** 当 `undetachable non player unit removed` 事件触发时调用此方法。

### ResetMovementOrderPositionCache
`public void ResetMovementOrderPositionCache()`

**用途 / Purpose:** 将 `movement order position cache` 重置为初始状态。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Split
`public IEnumerable<Formation> Split(int count = 2)`

**用途 / Purpose:** 处理 `split` 相关逻辑。

### TransferUnits
`public void TransferUnits(Formation target, int unitCount)`

**用途 / Purpose:** 处理 `transfer units` 相关逻辑。

### TransferUnitsAux
`public void TransferUnitsAux(Formation target, int unitCount, bool isPlayerOrder, bool useSelectivePop)`

**用途 / Purpose:** 处理 `transfer units aux` 相关逻辑。

### DebugArrangements
`public void DebugArrangements()`

**用途 / Purpose:** 处理 `debug arrangements` 相关逻辑。

### AddUnit
`public void AddUnit(Agent unit)`

**用途 / Purpose:** 向当前集合/状态中添加 `unit`。

### RemoveUnit
`public void RemoveUnit(Agent unit)`

**用途 / Purpose:** 从当前集合/状态中移除 `unit`。

### DetachUnit
`public void DetachUnit(Agent unit, bool isLoose)`

**用途 / Purpose:** 处理 `detach unit` 相关逻辑。

### AttachUnit
`public void AttachUnit(Agent unit)`

**用途 / Purpose:** 处理 `attach unit` 相关逻辑。

### SwitchUnitLocations
`public void SwitchUnitLocations(Agent firstUnit, Agent secondUnit)`

**用途 / Purpose:** 处理 `switch unit locations` 相关逻辑。

### ForceCalculateCaches
`public void ForceCalculateCaches()`

**用途 / Purpose:** 处理 `force calculate caches` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### SetHasPendingUnitPositions
`public void SetHasPendingUnitPositions(bool hasPendingUnitPositions)`

**用途 / Purpose:** 设置 `has pending unit positions` 的值或状态。

### JoinDetachment
`public void JoinDetachment(IDetachment detachment)`

**用途 / Purpose:** 处理 `join detachment` 相关逻辑。

### FormAttackEntityDetachment
`public void FormAttackEntityDetachment(GameEntity targetEntity)`

**用途 / Purpose:** 处理 `form attack entity detachment` 相关逻辑。

### LeaveDetachment
`public void LeaveDetachment(IDetachment detachment)`

**用途 / Purpose:** 处理 `leave detachment` 相关逻辑。

### DisbandAttackEntityDetachment
`public void DisbandAttackEntityDetachment()`

**用途 / Purpose:** 处理 `disband attack entity detachment` 相关逻辑。

### Rearrange
`public void Rearrange(IFormationArrangement arrangement)`

**用途 / Purpose:** 处理 `rearrange` 相关逻辑。

### TickForColumnArrangementInitialPositioning
`public void TickForColumnArrangementInitialPositioning(Formation formation)`

**用途 / Purpose:** 处理 `tick for column arrangement initial positioning` 相关逻辑。

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int rankIndex)`

**用途 / Purpose:** 处理 `calculate formation direction enforcing factor for rank` 相关逻辑。

### BeginSpawn
`public void BeginSpawn(int unitCount, bool isMounted)`

**用途 / Purpose:** 处理 `begin spawn` 相关逻辑。

### EndSpawn
`public void EndSpawn()`

**用途 / Purpose:** 处理 `end spawn` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth
`public static float GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(Formation simulationFormation)`

**用途 / Purpose:** 获取 `last simulated formations occupation width if lesser than actual width` 的当前值。

### GetFormationFramesForBeforeFormationCreation
`public static List<WorldFrame> GetFormationFramesForBeforeFormationCreation(float width, int manCount, bool areMounted, WorldPosition spawnOrigin, Mat3 spawnRotation)`

**用途 / Purpose:** 获取 `formation frames for before formation creation` 的当前值。

### GetDefaultUnitDiameter
`public static float GetDefaultUnitDiameter(bool isMounted)`

**用途 / Purpose:** 获取 `default unit diameter` 的当前值。

### GetDefaultMinimumUnitInterval
`public static float GetDefaultMinimumUnitInterval(bool isMounted)`

**用途 / Purpose:** 获取 `default minimum unit interval` 的当前值。

### GetDefaultUnitInterval
`public static float GetDefaultUnitInterval(bool isMounted, int unitSpacing)`

**用途 / Purpose:** 获取 `default unit interval` 的当前值。

### GetDefaultMinimumUnitDistance
`public static float GetDefaultMinimumUnitDistance(bool isMounted)`

**用途 / Purpose:** 获取 `default minimum unit distance` 的当前值。

### GetDefaultUnitDistance
`public static float GetDefaultUnitDistance(bool isMounted, int unitSpacing)`

**用途 / Purpose:** 获取 `default unit distance` 的当前值。

### GetDefaultFileWidth
`public static float GetDefaultFileWidth(int fileUnitCount, int unitSpacing, bool isMounted)`

**用途 / Purpose:** 获取 `default file width` 的当前值。

### GetDefaultRankDepth
`public static float GetDefaultRankDepth(int rankUnitCount, int unitSpacing, bool isMounted)`

**用途 / Purpose:** 获取 `default rank depth` 的当前值。

### InfantryInterval
`public static float InfantryInterval(int unitSpacing)`

**用途 / Purpose:** 处理 `infantry interval` 相关逻辑。

### CavalryInterval
`public static float CavalryInterval(int unitSpacing)`

**用途 / Purpose:** 处理 `cavalry interval` 相关逻辑。

### InfantryDistance
`public static float InfantryDistance(int unitSpacing)`

**用途 / Purpose:** 处理 `infantry distance` 相关逻辑。

### CavalryDistance
`public static float CavalryDistance(int unitSpacing)`

**用途 / Purpose:** 处理 `cavalry distance` 相关逻辑。

### IsDefenseRelatedAIDrivenComponent
`public static bool IsDefenseRelatedAIDrivenComponent(DrivenProperty drivenProperty)`

**用途 / Purpose:** 处理 `is defense related a i driven component` 相关逻辑。

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**用途 / Purpose:** 获取 `retreat position from cache` 的当前值。

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**用途 / Purpose:** 向当前集合/状态中添加 `new position to cache`。

## 使用示例

```csharp
var value = new Formation();
value.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

## 参见

- [完整类目录](../catalog)