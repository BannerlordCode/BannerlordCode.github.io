---
title: "Formation"
description: "Formation 的自动生成类参考。"
---
# Formation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Formation : IFormation`
**Base:** `IFormation`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## 概述

`Formation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Formation` | `public IFormationArrangement Formation { get; }` |
| `FormationFileIndex` | `public int FormationFileIndex { get; set; }` |
| `FormationRankIndex` | `public int FormationRankIndex { get; set; }` |
| `FollowedUnit` | `public IFormationUnit FollowedUnit { get; }` |
| `RetreatPositionCache` | `public RetreatPositionCacheSystem RetreatPositionCache { get; }` |
| `RepresentativeClass` | `public FormationClass RepresentativeClass { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `UnitSpacing` | `public int UnitSpacing { get; }` |
| `OrderPositionLock` | `public object OrderPositionLock { get; }` |
| `SimulationFormationLock` | `public object SimulationFormationLock { get; }` |
| `AttackEntityOrderSecondaryDetachment` | `public AttackEntityOrderSecondaryDetachment AttackEntityOrderSecondaryDetachment { get; }` |
| `AI` | `public FormationAI AI { get; }` |
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `QuerySystem` | `public FormationQuerySystem QuerySystem { get; }` |
| `CachedFormationIntegrityData` | `public FormationIntegrityDataGroup CachedFormationIntegrityData { get; }` |
| `CachedAveragePosition` | `public Vec2 CachedAveragePosition { get; }` |
| `CachedMedianPosition` | `public WorldPosition CachedMedianPosition { get; }` |
| `CachedCurrentVelocity` | `public Vec2 CachedCurrentVelocity { get; }` |
| `CachedMovementSpeed` | `public float CachedMovementSpeed { get; }` |
| `CachedClosestEnemyFormationDistanceSquared` | `public float CachedClosestEnemyFormationDistanceSquared { get; }` |
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
| `SecondaryLogicalClasses` | `public IEnumerable<FormationClass> SecondaryLogicalClasses { get; }` |
| `Arrangement` | `public IFormationArrangement Arrangement { get; set; }` |
| `SecondaryPhysicalClasses` | `public IEnumerable<FormationClass> SecondaryPhysicalClasses { get; }` |
| `Interval` | `public float Interval { get; }` |
| `CalculateHasSignificantNumberOfMounted` | `public bool CalculateHasSignificantNumberOfMounted { get; }` |
| `Distance` | `public float Distance { get; }` |
| `CurrentPosition` | `public Vec2 CurrentPosition { get; }` |
| `Captain` | `public Agent Captain { get; set; }` |

## 主要方法

### FormationIntegrityDataGroup
`public struct FormationIntegrityDataGroup(Vec2 averageVelocityExcludeFarAgents, float deviationOfPositionsExcludeFarAgents, float maxDeviationOfPositionExcludeFarAgents, float averageMaxUnlimitedSpeedExcludeFarAgents)`

**用途 / Purpose:** 将「ion integrity data group」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「retreat position from cache」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetRetreatPositionFromCache(agentPosition);
```

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**用途 / Purpose:** 将 「new position to cache」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.AddNewPositionToCache(agentPostion, retreatingPosition);
```

### CreateNewOrderWorldPosition
`public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 构建一个新的 「new order world position」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input)`

**用途 / Purpose:** 为 「movement order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetMovementOrder(input);
```

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order)`

**用途 / Purpose:** 为 「facing order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetFacingOrder(order);
```

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order)`

**用途 / Purpose:** 为 「arrangement order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetArrangementOrder(order);
```

### SetFormOrder
`public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`

**用途 / Purpose:** 为 「form order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetFormOrder(order, false);
```

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order)`

**用途 / Purpose:** 为 「riding order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetRidingOrder(order);
```

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order)`

**用途 / Purpose:** 为 「firing order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetFiringOrder(order);
```

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`

**用途 / Purpose:** 为 「controlled by a i」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetControlledByAI(false, false);
```

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation)`

**用途 / Purpose:** 为 「target formation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetTargetFormation(targetFormation);
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnDeploymentFinished();
```

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer()`

**用途 / Purpose:** 将 「arrangement order tick timer」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ResetArrangementOrderTickTimer();
```

### SetPositioning
`public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`

**用途 / Purpose:** 为 「positioning」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetPositioning(null, null, 0);
```

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`

**用途 / Purpose:** 读取并返回当前对象中 「count of units with condition」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetCountOfUnitsWithCondition(func<Agent, false);
```

### GetReadonlyMovementOrderReference
`public ref readonly MovementOrder GetReadonlyMovementOrderReference()`

**用途 / Purpose:** 读取并返回当前对象中 「readonly movement order reference」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetReadonlyMovementOrderReference();
```

### GetFirstUnit
`public Agent GetFirstUnit()`

**用途 / Purpose:** 读取并返回当前对象中 「first unit」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetFirstUnit();
```

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)`

**用途 / Purpose:** 读取并返回当前对象中 「count of units belonging to logical class」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetCountOfUnitsBelongingToLogicalClass(logicalClass);
```

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)`

**用途 / Purpose:** 读取并返回当前对象中 「count of units belonging to physical class」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetCountOfUnitsBelongingToPhysicalClass(physicalClass, false);
```

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0)`

**用途 / Purpose:** 为 「spawn index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetSpawnIndex(0);
```

### GetNextSpawnIndex
`public int GetNextSpawnIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「next spawn index」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetNextSpawnIndex();
```

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「unit with index」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetUnitWithIndex(0);
```

### GetAveragePositionOfUnits
`public Vec2 GetAveragePositionOfUnits(bool excludeDetachedUnits, bool excludePlayer)`

**用途 / Purpose:** 读取并返回当前对象中 「average position of units」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetAveragePositionOfUnits(false, false);
```

### GetMedianAgent
`public Agent GetMedianAgent(bool excludeDetachedUnits, bool excludePlayer, Vec2 averagePosition)`

**用途 / Purpose:** 读取并返回当前对象中 「median agent」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetMedianAgent(false, false, averagePosition);
```

### GetUnderAttackTypeOfUnits
`public Agent.UnderAttackType GetUnderAttackTypeOfUnits(float timeLimit = 3f)`

**用途 / Purpose:** 读取并返回当前对象中 「under attack type of units」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetUnderAttackTypeOfUnits(0);
```

### GetMovementTypeOfUnits
`public Agent.MovementBehaviorType GetMovementTypeOfUnits()`

**用途 / Purpose:** 读取并返回当前对象中 「movement type of units」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetMovementTypeOfUnits();
```

### GetUnitsWithoutDetachedOnes
`public IEnumerable<Agent> GetUnitsWithoutDetachedOnes()`

**用途 / Purpose:** 读取并返回当前对象中 「units without detached ones」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetUnitsWithoutDetachedOnes();
```

### GetWallDirectionOfRelativeFormationLocation
`public Vec2 GetWallDirectionOfRelativeFormationLocation(Agent unit)`

**用途 / Purpose:** 读取并返回当前对象中 「wall direction of relative formation location」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetWallDirectionOfRelativeFormationLocation(unit);
```

### GetDirectionOfUnit
`public Vec2 GetDirectionOfUnit(Agent unit)`

**用途 / Purpose:** 读取并返回当前对象中 「direction of unit」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetDirectionOfUnit(unit);
```

### GetMovementState
`public MovementOrder.MovementStateEnum GetMovementState()`

**用途 / Purpose:** 读取并返回当前对象中 「movement state」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetMovementState();
```

### GetOrderPositionOfUnit
`public WorldPosition GetOrderPositionOfUnit(Agent unit)`

**用途 / Purpose:** 读取并返回当前对象中 「order position of unit」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetOrderPositionOfUnit(unit);
```

### GetCurrentGlobalPositionOfUnit
`public Vec2 GetCurrentGlobalPositionOfUnit(Agent unit, bool blendWithOrderDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「current global position of unit」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetCurrentGlobalPositionOfUnit(unit, false);
```

### GetAverageMaximumMovementSpeedOfUnits
`public float GetAverageMaximumMovementSpeedOfUnits()`

**用途 / Purpose:** 读取并返回当前对象中 「average maximum movement speed of units」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetAverageMaximumMovementSpeedOfUnits();
```

### GetFormationPower
`public float GetFormationPower()`

**用途 / Purpose:** 读取并返回当前对象中 「formation power」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetFormationPower();
```

### GetFormationMeleeFightingPower
`public float GetFormationMeleeFightingPower()`

**用途 / Purpose:** 读取并返回当前对象中 「formation melee fighting power」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetFormationMeleeFightingPower();
```

### GetDetachmentFrame
`public WorldFrame? GetDetachmentFrame(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「detachment frame」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetDetachmentFrame(agent);
```

### GetMiddleFrontUnitPositionOffset
`public Vec2 GetMiddleFrontUnitPositionOffset()`

**用途 / Purpose:** 读取并返回当前对象中 「middle front unit position offset」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetMiddleFrontUnitPositionOffset();
```

### GetUnitsToPopWithReferencePosition
`public List<IFormationUnit> GetUnitsToPopWithReferencePosition(int count, Vec3 targetPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「units to pop with reference position」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetUnitsToPopWithReferencePosition(0, targetPosition);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**用途 / Purpose:** 读取并返回当前对象中 「units to pop」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetUnitsToPop(0);
```

### GetUnitSpawnFrameWithIndex
`public void GetUnitSpawnFrameWithIndex(int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitCount, int unitSpacing, bool isMountedFormation, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「unit spawn frame with index」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.GetUnitSpawnFrameWithIndex(0, formationPosition, formationDirection, 0, 0, 0, false, unitSpawnPosition, unitSpawnDirection);
```

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「unit position with index according to new order」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.GetUnitPositionWithIndexAccordingToNewOrder(simulationFormation, 0, formationPosition, formationDirection, 0, 0, unitSpawnPosition, unitSpawnDirection);
```

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, int overridenUnitCount, out WorldPosition? unitPosition, out Vec2? unitDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「unit position with index according to new order」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.GetUnitPositionWithIndexAccordingToNewOrder(simulationFormation, 0, formationPosition, formationDirection, 0, 0, 0, unitPosition, unitDirection);
```

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection, out float actualWidth)`

**用途 / Purpose:** 读取并返回当前对象中 「unit position with index according to new order」 的结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.GetUnitPositionWithIndexAccordingToNewOrder(simulationFormation, 0, formationPosition, formationDirection, 0, 0, unitSpawnPosition, unitSpawnDirection, actualWidth);
```

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function)`

**用途 / Purpose:** 判断当前对象是否已经持有 「units with condition」。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.HasUnitsWithCondition(func<Agent, false);
```

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)`

**用途 / Purpose:** 判断当前对象是否已经持有 「units with condition」。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.HasUnitsWithCondition(func<Agent, false, result);
```

### HasAnyEnemyFormationsThatIsNotEmpty
`public bool HasAnyEnemyFormationsThatIsNotEmpty()`

**用途 / Purpose:** 判断当前对象是否已经持有 「any enemy formations that is not empty」。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.HasAnyEnemyFormationsThatIsNotEmpty();
```

### HasUnitWithConditionLimitedRandom
`public bool HasUnitWithConditionLimitedRandom(Func<Agent, bool> function, int startingIndex, int willBeCheckedUnitCount, out Agent resultAgent)`

**用途 / Purpose:** 判断当前对象是否已经持有 「unit with condition limited random」。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.HasUnitWithConditionLimitedRandom(func<Agent, false, 0, 0, resultAgent);
```

### CollectUnitIndices
`public int CollectUnitIndices()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.CollectUnitIndices();
```

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)`

**用途 / Purpose:** 将 「action on each unit」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ApplyActionOnEachUnit(action, null);
```

### ApplyActionOnEachAttachedUnit
`public void ApplyActionOnEachAttachedUnit(Action<Agent> action)`

**用途 / Purpose:** 将 「action on each attached unit」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ApplyActionOnEachAttachedUnit(action);
```

### ApplyActionOnEachDetachedUnit
`public void ApplyActionOnEachDetachedUnit(Action<Agent> action)`

**用途 / Purpose:** 将 「action on each detached unit」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ApplyActionOnEachDetachedUnit(action);
```

### ApplyActionOnEachUnitViaBackupList
`public void ApplyActionOnEachUnitViaBackupList(Action<Agent> action)`

**用途 / Purpose:** 将 「action on each unit via backup list」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ApplyActionOnEachUnitViaBackupList(action);
```

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent, List<WorldPosition>> action, List<WorldPosition> list)`

**用途 / Purpose:** 将 「action on each unit」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ApplyActionOnEachUnit(action<Agent, action, list);
```

### CountUnitsOnNavMeshIDMod10
`public int CountUnitsOnNavMeshIDMod10(int navMeshID, bool includeOnlyPositionedUnits)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.CountUnitsOnNavMeshIDMod10(0, false);
```

### OnAgentControllerChanged
`public void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)`

**用途 / Purpose:** 在 「agent controller changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnAgentControllerChanged(agent, oldController);
```

### OnMassUnitTransferStart
`public void OnMassUnitTransferStart()`

**用途 / Purpose:** 在 「mass unit transfer start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnMassUnitTransferStart();
```

### OnMassUnitTransferEnd
`public void OnMassUnitTransferEnd()`

**用途 / Purpose:** 在 「mass unit transfer end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnMassUnitTransferEnd();
```

### OnBatchUnitRemovalStart
`public void OnBatchUnitRemovalStart()`

**用途 / Purpose:** 在 「batch unit removal start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnBatchUnitRemovalStart();
```

### OnBatchUnitRemovalEnd
`public void OnBatchUnitRemovalEnd()`

**用途 / Purpose:** 在 「batch unit removal end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnBatchUnitRemovalEnd();
```

### OnUnitAddedOrRemoved
`public void OnUnitAddedOrRemoved()`

**用途 / Purpose:** 在 「unit added or removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnUnitAddedOrRemoved();
```

### OnAgentLostMount
`public void OnAgentLostMount(Agent agent)`

**用途 / Purpose:** 在 「agent lost mount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnAgentLostMount(agent);
```

### OnFormationDispersed
`public void OnFormationDispersed()`

**用途 / Purpose:** 在 「formation dispersed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnFormationDispersed();
```

### OnUnitDetachmentChanged
`public void OnUnitDetachmentChanged(Agent unit, bool isOldDetachmentLoose, bool isNewDetachmentLoose)`

**用途 / Purpose:** 在 「unit detachment changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnUnitDetachmentChanged(unit, false, false);
```

### OnUndetachableNonPlayerUnitAdded
`public void OnUndetachableNonPlayerUnitAdded(Agent unit)`

**用途 / Purpose:** 在 「undetachable non player unit added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnUndetachableNonPlayerUnitAdded(unit);
```

### OnUndetachableNonPlayerUnitRemoved
`public void OnUndetachableNonPlayerUnitRemoved(Agent unit)`

**用途 / Purpose:** 在 「undetachable non player unit removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.OnUndetachableNonPlayerUnitRemoved(unit);
```

### ResetMovementOrderPositionCache
`public void ResetMovementOrderPositionCache()`

**用途 / Purpose:** 将 「movement order position cache」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ResetMovementOrderPositionCache();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.Reset();
```

### Split
`public IEnumerable<Formation> Split(int count = 2)`

**用途 / Purpose:** 将「split」拆分为多个部分或子项。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.Split(0);
```

### TransferUnits
`public void TransferUnits(Formation target, int unitCount)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.TransferUnits(target, 0);
```

### TransferUnitsAux
`public void TransferUnitsAux(Formation target, int unitCount, bool isPlayerOrder, bool useSelectivePop)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.TransferUnitsAux(target, 0, false, false);
```

### DebugArrangements
`public void DebugArrangements()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.DebugArrangements();
```

### AddUnit
`public void AddUnit(Agent unit)`

**用途 / Purpose:** 将 「unit」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.AddUnit(unit);
```

### RemoveUnit
`public void RemoveUnit(Agent unit)`

**用途 / Purpose:** 从当前容器或状态中移除 「unit」。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.RemoveUnit(unit);
```

### DetachUnit
`public void DetachUnit(Agent unit, bool isLoose)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.DetachUnit(unit, false);
```

### AttachUnit
`public void AttachUnit(Agent unit)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.AttachUnit(unit);
```

### SwitchUnitLocations
`public void SwitchUnitLocations(Agent firstUnit, Agent secondUnit)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SwitchUnitLocations(firstUnit, secondUnit);
```

### ForceCalculateCaches
`public void ForceCalculateCaches()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.ForceCalculateCaches();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.Tick(0);
```

### SetHasPendingUnitPositions
`public void SetHasPendingUnitPositions(bool hasPendingUnitPositions)`

**用途 / Purpose:** 为 「has pending unit positions」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.SetHasPendingUnitPositions(false);
```

### JoinDetachment
`public void JoinDetachment(IDetachment detachment)`

**用途 / Purpose:** 把若干「detachment」连接成一个整体。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.JoinDetachment(detachment);
```

### FormAttackEntityDetachment
`public void FormAttackEntityDetachment(GameEntity targetEntity)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.FormAttackEntityDetachment(targetEntity);
```

### LeaveDetachment
`public void LeaveDetachment(IDetachment detachment)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.LeaveDetachment(detachment);
```

### DisbandAttackEntityDetachment
`public void DisbandAttackEntityDetachment()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.DisbandAttackEntityDetachment();
```

### Rearrange
`public void Rearrange(IFormationArrangement arrangement)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.Rearrange(arrangement);
```

### TickForColumnArrangementInitialPositioning
`public void TickForColumnArrangementInitialPositioning(Formation formation)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「for column arrangement initial positioning」的状态。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.TickForColumnArrangementInitialPositioning(formation);
```

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int rankIndex)`

**用途 / Purpose:** 计算「formation direction enforcing factor for rank」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.CalculateFormationDirectionEnforcingFactorForRank(0);
```

### BeginSpawn
`public void BeginSpawn(int unitCount, bool isMounted)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.BeginSpawn(0, false);
```

### EndSpawn
`public void EndSpawn()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
formation.EndSpawn();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Formation 实例
Formation formation = ...;
var result = formation.GetHashCode();
```

### GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth
`public static float GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(Formation simulationFormation)`

**用途 / Purpose:** 读取并返回当前对象中 「last simulated formations occupation width if lesser than actual width」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(simulationFormation);
```

### GetFormationFramesForBeforeFormationCreation
`public static List<WorldFrame> GetFormationFramesForBeforeFormationCreation(float width, int manCount, bool areMounted, WorldPosition spawnOrigin, Mat3 spawnRotation)`

**用途 / Purpose:** 读取并返回当前对象中 「formation frames for before formation creation」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetFormationFramesForBeforeFormationCreation(0, 0, false, spawnOrigin, spawnRotation);
```

### GetDefaultUnitDiameter
`public static float GetDefaultUnitDiameter(bool isMounted)`

**用途 / Purpose:** 读取并返回当前对象中 「default unit diameter」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultUnitDiameter(false);
```

### GetDefaultMinimumUnitInterval
`public static float GetDefaultMinimumUnitInterval(bool isMounted)`

**用途 / Purpose:** 读取并返回当前对象中 「default minimum unit interval」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultMinimumUnitInterval(false);
```

### GetDefaultUnitInterval
`public static float GetDefaultUnitInterval(bool isMounted, int unitSpacing)`

**用途 / Purpose:** 读取并返回当前对象中 「default unit interval」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultUnitInterval(false, 0);
```

### GetDefaultMinimumUnitDistance
`public static float GetDefaultMinimumUnitDistance(bool isMounted)`

**用途 / Purpose:** 读取并返回当前对象中 「default minimum unit distance」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultMinimumUnitDistance(false);
```

### GetDefaultUnitDistance
`public static float GetDefaultUnitDistance(bool isMounted, int unitSpacing)`

**用途 / Purpose:** 读取并返回当前对象中 「default unit distance」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultUnitDistance(false, 0);
```

### GetDefaultFileWidth
`public static float GetDefaultFileWidth(int fileUnitCount, int unitSpacing, bool isMounted)`

**用途 / Purpose:** 读取并返回当前对象中 「default file width」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultFileWidth(0, 0, false);
```

### GetDefaultRankDepth
`public static float GetDefaultRankDepth(int rankUnitCount, int unitSpacing, bool isMounted)`

**用途 / Purpose:** 读取并返回当前对象中 「default rank depth」 的结果。

```csharp
// 静态调用，不需要实例
Formation.GetDefaultRankDepth(0, 0, false);
```

### InfantryInterval
`public static float InfantryInterval(int unitSpacing)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Formation.InfantryInterval(0);
```

### CavalryInterval
`public static float CavalryInterval(int unitSpacing)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Formation.CavalryInterval(0);
```

### InfantryDistance
`public static float InfantryDistance(int unitSpacing)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Formation.InfantryDistance(0);
```

### CavalryDistance
`public static float CavalryDistance(int unitSpacing)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Formation.CavalryDistance(0);
```

### IsDefenseRelatedAIDrivenComponent
`public static bool IsDefenseRelatedAIDrivenComponent(DrivenProperty drivenProperty)`

**用途 / Purpose:** 判断当前对象是否处于 「defense related a i driven component」 状态或条件。

```csharp
// 静态调用，不需要实例
Formation.IsDefenseRelatedAIDrivenComponent(drivenProperty);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Formation formation = ...;
formation.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

## 参见

- [本区域目录](../)