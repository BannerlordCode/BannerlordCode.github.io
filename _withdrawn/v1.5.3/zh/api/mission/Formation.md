---
title: "Formation"
description: "Formation 的自动生成类参考。"
---
# Formation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Formation : IFormation `
**Base:** IFormation
**Source:** TaleWorlds.MountAndBlade/Formation.cs

## 概述

`Formation` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Formation.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateNewOrderWorldPosition
`public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache) `

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache) `

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input) `

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order) `

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order) `

### SetFormOrder
`public void SetFormOrder(FormOrder order,bool updateDesiredFileCount = true) `

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order) `

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order) `

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI,bool enforceNotSplittableByAI = false) `

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation) `

### OnDeploymentFinished
`public void OnDeploymentFinished() `

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer() `

### SetPositioning
`public void SetPositioning(WorldPosition? position = null,Vec2? direction = null,int? unitSpacing = null) `

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent,bool> function) `

### GetReadonlyMovementOrderReference
`public readonly ref MovementOrder GetReadonlyMovementOrderReference() `

### GetFirstUnit
`public Agent GetFirstUnit() `

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass) `

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass,bool excludeBannerBearers) `

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0) `

### GetNextSpawnIndex
`public int GetNextSpawnIndex() `

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex) `

### GetAveragePositionOfUnits
`public Vec2 GetAveragePositionOfUnits(bool excludeDetachedUnits,bool excludePlayer) `

### GetMedianAgent
`public Agent GetMedianAgent(bool excludeDetachedUnits,bool excludePlayer,Vec2 averagePosition) `

### HasUnitWithLastRecievedAttackType
`public bool HasUnitWithLastRecievedAttackType(Agent.LastRecievedAttackType type,float timeLimit = 3f) `

### GetLastRecievedHitTypeOfUnits
`public Agent.LastRecievedAttackType GetLastRecievedHitTypeOfUnits(float timeLimit = 3f) `

### GetLastRecievedContactTypeOfUnits
`public Agent.LastRecievedAttackType GetLastRecievedContactTypeOfUnits(float timeLimit = 3f) `

### GetMovementTypeOfUnits
`public Agent.MovementBehaviorType GetMovementTypeOfUnits() `

### GetUnitsWithoutDetachedOnes
`public IEnumerable<Agent> GetUnitsWithoutDetachedOnes() `

### GetWallDirectionOfRelativeFormationLocation
`public Vec2 GetWallDirectionOfRelativeFormationLocation(Agent unit) `

### GetDirectionOfUnit
`public Vec2 GetDirectionOfUnit(Agent unit) `

### GetMovementState
`public MovementOrder.MovementStateEnum GetMovementState() `

### GetOrderPositionOfUnit
`public WorldPosition GetOrderPositionOfUnit(Agent unit) `

### GetCurrentGlobalPositionOfUnit
`public Vec2 GetCurrentGlobalPositionOfUnit(Agent unit,bool blendWithOrderDirection) `

### GetAverageMaximumMovementSpeedOfUnits
`public float GetAverageMaximumMovementSpeedOfUnits() `

### GetFormationPower
`public float GetFormationPower() `

### GetFormationMeleeFightingPower
`public float GetFormationMeleeFightingPower() `

### GetDetachmentFrame
`public WorldFrame? GetDetachmentFrame(Agent agent) `

### GetMiddleFrontUnitPositionOffset
`public Vec2 GetMiddleFrontUnitPositionOffset() `

### GetUnitsToPopWithReferencePosition
`public List<IFormationUnit> GetUnitsToPopWithReferencePosition(int count,Vec3 targetPosition) `

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count) `

### GetUnavailableUnitPositionsAccordingToNewOrder
`public IEnumerable<ValueTuple<WorldPosition,Vec2>> GetUnavailableUnitPositionsAccordingToNewOrder(Formation simulationFormation,in WorldPosition position,in Vec2 direction,float width,int unitSpacing) `

### GetUnitSpawnFrameWithIndex
`public void GetUnitSpawnFrameWithIndex(int unitIndex,in WorldPosition formationPosition,in Vec2 formationDirection,float width,int unitCount,int unitSpacing,bool isMountedFormation,out WorldPosition? unitSpawnPosition,out Vec2? unitSpawnDirection) `

### GetUnitPositionWithIndexAccordingToNewOrder
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation,int unitIndex,in WorldPosition formationPosition,in Vec2 formationDirection,float width,int unitSpacing,out WorldPosition? unitSpawnPosition,out Vec2? unitSpawnDirection) `
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation,int unitIndex,in WorldPosition formationPosition,in Vec2 formationDirection,float width,int unitSpacing,int overridenUnitCount,out WorldPosition? unitPosition,out Vec2? unitDirection) `
`public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation,int unitIndex,in WorldPosition formationPosition,in Vec2 formationDirection,float width,int unitSpacing,out WorldPosition? unitSpawnPosition,out Vec2? unitSpawnDirection,out float actualWidth) `

### HasUnitsWithCondition
`public bool HasUnitsWithCondition(Func<Agent,bool> function) `
`public bool HasUnitsWithCondition(Func<Agent,bool> function,out Agent result) `

### HasAnyEnemyFormationsThatIsNotEmpty
`public bool HasAnyEnemyFormationsThatIsNotEmpty() `

### HasUnitWithConditionLimitedRandom
`public bool HasUnitWithConditionLimitedRandom(Func<Agent,bool> function,int startingIndex,int willBeCheckedUnitCount,out Agent resultAgent) `

### CollectUnitIndices
`public int[] CollectUnitIndices() `

### ApplyActionOnEachUnit
`public void ApplyActionOnEachUnit(Action<Agent> action,Agent ignoreAgent = null) `
`public void ApplyActionOnEachUnit(Action<Agent,List<WorldPosition>> action,List<WorldPosition> list) `

### ApplyActionOnEachAttachedUnit
`public void ApplyActionOnEachAttachedUnit(Action<Agent> action) `

### ApplyActionOnEachDetachedUnit
`public void ApplyActionOnEachDetachedUnit(Action<Agent> action) `

### ApplyActionOnEachUnitViaBackupList
`public void ApplyActionOnEachUnitViaBackupList(Action<Agent> action) `

### CountUnitsOnNavMeshIDMod10
`public int CountUnitsOnNavMeshIDMod10(int navMeshID,bool includeOnlyPositionedUnits) `

### OnAgentControllerChanged
`public void OnAgentControllerChanged(Agent agent,AgentControllerType oldController) `

### OnMassUnitTransferStart
`public void OnMassUnitTransferStart() `

### OnMassUnitTransferEnd
`public void OnMassUnitTransferEnd() `

### OnBatchUnitRemovalStart
`public void OnBatchUnitRemovalStart() `

### OnBatchUnitRemovalEnd
`public void OnBatchUnitRemovalEnd() `

### OnUnitAddedOrRemoved
`public void OnUnitAddedOrRemoved() `

### OnAgentLostMount
`public void OnAgentLostMount(Agent agent) `

### OnFormationDispersed
`public void OnFormationDispersed() `

### OnUnitDetachmentChanged
`public void OnUnitDetachmentChanged(Agent unit,bool isOldDetachmentLoose,bool isNewDetachmentLoose) `

### OnUndetachableNonPlayerUnitAdded
`public void OnUndetachableNonPlayerUnitAdded(Agent unit) `

### OnUndetachableNonPlayerUnitRemoved
`public void OnUndetachableNonPlayerUnitRemoved(Agent unit) `

### ResetMovementOrderPositionCache
`public void ResetMovementOrderPositionCache() `

### TestTaskForce
`public void TestTaskForce(Agent victimAgent,Agent attackerAgent) `

### Reset
`public void Reset() `

### Split
`public IEnumerable<Formation> Split(int count = 2) `

### TransferUnits
`public void TransferUnits(Formation target,int unitCount) `

### TransferUnitsAux
`public void TransferUnitsAux(Formation target,int unitCount,bool isPlayerOrder,bool useSelectivePop) `

### DebugArrangements
`public void DebugArrangements() `

### AddUnit
`public void AddUnit(Agent unit) `

### RemoveUnit
`public void RemoveUnit(Agent unit) `

### DetachUnit
`public void DetachUnit(Agent unit,bool isLoose) `

### AttachUnit
`public void AttachUnit(Agent unit) `

### SwitchUnitLocations
`public void SwitchUnitLocations(Agent firstUnit,Agent secondUnit) `

### ForceCalculateCaches
`public void ForceCalculateCaches() `

### Tick
`public void Tick(float dt) `

### SetHasPendingUnitPositions
`public void SetHasPendingUnitPositions(bool hasPendingUnitPositions) `

### JoinDetachment
`public void JoinDetachment(IDetachment detachment) `

### FormAttackEntityDetachment
`public void FormAttackEntityDetachment(GameEntity targetEntity) `

### LeaveDetachment
`public void LeaveDetachment(IDetachment detachment) `

### DisbandAttackEntityDetachment
`public void DisbandAttackEntityDetachment() `

### Rearrange
`public void Rearrange(IFormationArrangement arrangement) `

### TickForColumnArrangementInitialPositioning
`public void TickForColumnArrangementInitialPositioning(Formation formation) `

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int rankIndex) `

### BeginSpawn
`public void BeginSpawn(int unitCount,bool isMounted) `

### EndSpawn
`public void EndSpawn() `

### GetHashCode
`public override int GetHashCode() `

### GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth
`public static float GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(Formation simulationFormation) `

### GetFormationFramesForBeforeFormationCreation
`public static List<WorldFrame> GetFormationFramesForBeforeFormationCreation(float width,int manCount,bool areMounted,WorldPosition spawnOrigin,Mat3 spawnRotation) `

### GetDefaultUnitDiameter
`public static float GetDefaultUnitDiameter(bool isMounted) `

### GetDefaultMinimumUnitInterval
`public static float GetDefaultMinimumUnitInterval(bool isMounted) `

### GetDefaultUnitInterval
`public static float GetDefaultUnitInterval(bool isMounted,int unitSpacing) `

### GetDefaultMinimumUnitDistance
`public static float GetDefaultMinimumUnitDistance(bool isMounted) `

### GetDefaultUnitDistance
`public static float GetDefaultUnitDistance(bool isMounted,int unitSpacing) `

### GetDefaultFileWidth
`public static float GetDefaultFileWidth(int fileUnitCount,int unitSpacing,bool isMounted) `

### GetDefaultRankDepth
`public static float GetDefaultRankDepth(int rankUnitCount,int unitSpacing,bool isMounted) `

### InfantryInterval
`public static float InfantryInterval(int unitSpacing) `

### CavalryInterval
`public static float CavalryInterval(int unitSpacing) `

### InfantryDistance
`public static float InfantryDistance(int unitSpacing) `

### CavalryDistance
`public static float CavalryDistance(int unitSpacing) `

### IsDefenseRelatedAIDrivenComponent
`public static bool IsDefenseRelatedAIDrivenComponent(DrivenProperty drivenProperty) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
