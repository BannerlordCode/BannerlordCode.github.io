---
title: "Formation"
description: "sealed 的战斗阵型对象：把一批 Agent 组织成有序队列，管理移动/朝向/阵形/骑乘/射击命令与缓存统计。"
---
# Formation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Formation : IFormation`
**Source:** `TaleWorlds.MountAndBlade/Formation.cs`

## 概述

`Formation` 是战斗中「一支排队的人」的数据结构与命令入口。它把若干 `Agent` 组织成有纵深、有间距、有朝向的队列，并提供一整套下命令的方法：`SetMovementOrder` / `SetFacingOrder` / `SetArrangementOrder` / `SetFormOrder` / `SetRidingOrder` / `SetFiringOrder`。这些命令不是立即生效的赋值——它们只是写入命令对象，实际重排发生在后续的 `Tick` 与 `Rearrange` 中。

它是 `sealed` 的：不能继承，只能修改它的实例。因为 Formation 内部有大量互相引用的一致性缓存（`CachedAveragePosition`、`CachedMedianPosition`、`CachedCurrentVelocity` 等），允许派生类改字段会直接破坏这些不变量。想扩展行为请通过事件（`OnBeforeMovementOrderApplied`、`OnAfterArrangementOrderApplied` 等）或 `MissionBehavior`。

单位成员的类型是 `IFormationUnit` 接口而不是具体类，`Agent` 是它最常见的实现但不是唯一实现——「不可见的」抽象单位也实现它。

## 心智模型

创建：`new Formation(team, index)` —— 它并不自己往 `Team` 里登记，通常由 `Team` 的初始化流程创建并放进 `FormationsIncludingEmpty`。

常规使用顺序：`Team` 就绪 → `Formation.AddUnit(agent)`（或等 `Team` 批量填充）→ `SetMovementOrder(...)` / `SetFacingOrder(...)` → 每帧 `Formation.Tick(dt)` 让队形向目标收敛 → 需要时 `GetAveragePositionOfUnits(...)` / `CachedMedianPosition` 读当前位置 → 战斗结束 `Reset()`。

三个常见误用。一是**每帧 `GetCountOfUnitsWithCondition` 这类谓词查询**：它们要遍历全部单位，在 `OnMissionTick` 里逐帧调会明显拖慢战斗帧；用 `CountOfUnits` 与 `ForceCalculateCaches()` 的组合更好。二是**在 `Tick` 之外改单位列表**：`AddUnit` / `RemoveUnit` 会触发 `OnUnitAddedOrRemoved()`，缓存重算是批量的；在循环里频繁增删会让缓存一直处于脏状态。三是**命令写在 render 回调里**：`SetMovementOrder` 会走 `OnBeforeMovementOrderApplied`，若在这个事件里再发新命令，会形成重入。

`RetreatPositionCache` 只有 `RetreatPositionDistanceCacheCount`（2）个槽位，`GetRetreatPositionFromCache` 是近似匹配——它不是精确的历史位置表，依赖它做精确判定会出错。

## 关键成员

### 标识与基础状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Team` | `public readonly Team Team` | 所属队伍。阵型不脱离它的 Team 独立存在 |
| `Index` | `public readonly int Index` | 在 `Team.FormationsIncludingEmpty` 中的下标，稳定标识用这个 |
| `FormationIndex` | `public readonly FormationClass FormationIndex` | 该阵型代表的兵种分类（步兵/弓手/骑兵等） |
| `RepresentativeClass` | `public FormationClass RepresentativeClass { get; private set; }` | 用于显示/计算的代表兵种，初值为 `FormationClass.NumberOfAllFormations` |
| `LogicalClass` | `public FormationClass LogicalClass` | 逻辑分类，决定 AI 与命令如何解释它 |
| `SecondaryLogicalClasses` | `public IEnumerable<FormationClass> SecondaryLogicalClasses` | 额外的逻辑分类（复合兵种场景） |
| `PhysicalClass` | `public FormationClass PhysicalClass` | 物理分类，决定实际排队用的步距与间距 |
| `SecondaryPhysicalClasses` | `public IEnumerable<FormationClass> SecondaryPhysicalClasses` | 额外的物理分类 |
| `Arrangement` | `public IFormationArrangement Arrangement` | 当前使用的排队算法实例 |
| `Formation` | `public IFormationArrangement Formation { get; private set; }` | 与 `Arrangement` 并存的另一个只读引用（内部历史遗留），两者通常指向同一实例 |
| `IsAIControlled` | `public bool IsAIControlled { get; private set; }` | 初值 true。`SetControlledByAI` 会改它 |
| `IsAIOwned` | `public bool IsAIOwned` | 是否归 AI 所有 |
| `IsSplittableByAI` | `public bool IsSplittableByAI` | AI 是否可以把该阵型一分为二 |
| `IsConvenientForTransfer` | `public bool IsConvenientForTransfer` | 是否适合被整体转移 |
| `IsSpawning` | `public bool IsSpawning` | 是否处于 `BeginSpawn` / `EndSpawn` 之间 |
| `IsDeployment` | `public bool IsDeployment` | 是否还处于部署阶段 |
| `IsAITickedAfterSplit` | `public bool IsAITickedAfterSplit { get; set; }` | 拆分后该阵型的 AI 是否继续被 tick |
| `IsLoose` | `public bool IsLoose` | 是否为散兵状态（脱离阵型约束） |
| `PlayerOwner` | `public Agent PlayerOwner` | 玩家拥有的该阵型对应的 Agent；非玩家阵型为 null |
| `Captain` | `public Agent Captain` | 队长 Agent；阵型内没有时为 null |
| `HasPlayerControlledTroop` | `public bool HasPlayerControlledTroop { get; private set; }` | 是否含有玩家直接控制的单位 |
| `IsPlayerTroopInFormation` | `public bool IsPlayerTroopInFormation { get; private set; }` | 玩家部队是否在此阵型内 |
| `IsPlayerUnit` | `public bool IsPlayerUnit` | 该阵型是否属于玩家一方 |
| `OverridenUnitCount` | `public int? OverridenUnitCount { get; private set; }` | 覆盖单位数；为 null 表示不覆盖 |
| `ContainsAgentVisuals` | `public bool ContainsAgentVisuals { get; set; }` | 该阵型是否含有可见 Agent（纯逻辑单位没有） |
| `IsShieldUsageEncouraged` | `public bool IsShieldUsageEncouraged` | 是否鼓励用盾 |
| `HasBeenPositioned` | `public bool HasBeenPositioned` | 是否已被摆过位 |
| `ReferencePosition` | `public Vec2? ReferencePosition` | 参考位置；null 表示未设置 |
| `BannerCode` | `public string BannerCode` | 旗帜标识 |
| `Banner` | `public Banner Banner` | 该阵型的旗帜对象；没有旗帜时为 null |
| `FormationFileIndex` | `public int FormationFileIndex { get; set; }` | 当前队列在「纵列」中的排号，初值 -1 |
| `FormationRankIndex` | `public int FormationRankIndex { get; set; }` | 当前队列在「横排」中的排号，初值 -1 |
| `FollowedUnit` | `public IFormationUnit FollowedUnit { get; }` | 本阵型跟随的单位 |

### 命令入口

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SetMovementOrder` | `public void SetMovementOrder(MovementOrder input)` | 设置移动命令（走到某点、跟随、冲锋）。会触发 `OnBeforeMovementOrderApplied` |
| `SetFacingOrder` | `public void SetFacingOrder(FacingOrder order)` | 设置朝向命令 |
| `SetArrangementOrder` | `public void SetArrangementOrder(ArrangementOrder order)` | 设置排队形态（横排/楔形/纵列）。生效后触发 `OnAfterArrangementOrderApplied` |
| `SetFormOrder` | `public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)` | 设置整体阵形（含是否允许分散）。`updateDesiredFileCount` 为 false 时不重算期望排数 |
| `SetRidingOrder` | `public void SetRidingOrder(RidingOrder order)` | 设置骑乘状态命令 |
| `SetFiringOrder` | `public void SetFiringOrder(FiringOrder order)` | 设置射击命令 |
| `SetControlledByAI` | `public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)` | 切换 AI 控制权，同时改写 `IsAIControlled` 与 `IsSplittableByAI` |
| `SetTargetFormation` | `public void SetTargetFormation(Formation targetFormation)` | 指定目标阵型，用于「追击某个阵型」类命令 |
| `SetPositioning` | `public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)` | 直接设定排队位置、朝向、间距。三个参数都可为 null 表示保持不变 |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | 部署结束，把 `IsDeployment` 翻掉 |
| `ResetArrangementOrderTickTimer` | `public void ResetArrangementOrderTickTimer()` | 重置排队命令的计时器，用于立刻重新评估一次 |
| `ResetMovementOrderPositionCache` | `public void ResetMovementOrderPositionCache()` | 清空移动目标位置缓存 |
| `Reset` | `public void Reset()` | 把阵型恢复到初始状态（清命令、清缓存）。战后重用同一个 Formation 前必须调 |

### 单位集合操作

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddUnit` | `public void AddUnit(Agent unit)` | 加入一个单位并触发 `OnUnitAdded`。不在迭代中调用 |
| `RemoveUnit` | `public void RemoveUnit(Agent unit)` | 移除单位并触发 `OnUnitRemoved` |
| `DetachUnit` | `public void DetachUnit(Agent unit, bool isLoose)` | 让单位脱离队列。`isLoose` 决定是否变成散兵 |
| `AttachUnit` | `public void AttachUnit(Agent unit)` | 把单位收回队列 |
| `SwitchUnitLocations` | `public void SwitchUnitLocations(Agent firstUnit, Agent secondUnit)` | 交换两个单位在队列中的位置 |
| `ApplyActionOnEachUnit` | `public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)` | 遍历全部单位执行动作，可跳过指定单位。回调里增删单位是未定义行为 |
| `ApplyActionOnEachAttachedUnit` | `public void ApplyActionOnEachAttachedUnit(Action<Agent> action)` | 只遍历在队列内的单位 |
| `ApplyActionOnEachDetachedUnit` | `public void ApplyActionOnEachDetachedUnit(Action<Agent> action)` | 只遍历已脱离的单位 |
| `ApplyActionOnEachUnitViaBackupList` | `public void ApplyActionOnEachUnitViaBackupList(Action<Agent> action)` | 在备份副本上遍历，允许回调里安全地增删单位 |
| `ApplyActionOnEachUnit` | `public void ApplyActionOnEachUnit(Action<Agent, List<WorldPosition>> action, List<WorldPosition> list)` | 带位置列表的重载，供需要目标位置的逻辑使用 |
| `CollectUnitIndices` | `public int[] CollectUnitIndices()` | 返回所有单位索引的数组副本 |
| `CountUnitsOnNavMeshIDMod10` | `public int CountUnitsOnNavMeshIDMod10(int navMeshID, bool includeOnlyPositionedUnits)` | 按导航网格 ID 的个位数分桶计数，用于就近匹配 |
| `TransferUnits` | `public void TransferUnits(Formation target, int unitCount)` | 把 `unitCount` 个单位转移到目标阵型 |
| `TransferUnitsAux` | `public void TransferUnitsAux(Formation target, int unitCount, bool isPlayerOrder, bool useSelectivePop)` | 上者的底层实现。`isPlayerOrder` 走玩家路径，`useSelectivePop` 影响挑人策略 |
| `Split` | `public IEnumerable<Formation> Split(int count = 2)` | 把该阵型拆成 `count` 份，返回新 `Formation` 序列。原阵型会被消耗 |
| `OnMassUnitTransferStart` / `OnMassUnitTransferEnd` | `public void OnMassUnitTransferStart()` / `public void OnMassUnitTransferEnd()` | 成批转移的成对钩子，把内部的逐个更新换成批量 |
| `OnBatchUnitRemovalStart` / `OnBatchUnitRemovalEnd` | `public void OnBatchUnitRemovalStart()` / `public void OnBatchUnitRemovalEnd()` | 成批移除的成对钩子 |
| `OnUnitAddedOrRemoved` | `public void OnUnitAddedOrRemoved()` | 手动标记「成员变了」，让缓存重算 |
| `OnUndetachableNonPlayerUnitAdded` / `...Removed` | `public void OnUndetachableNonPlayerUnitAdded(Agent unit)` / `public void OnUndetachableNonPlayerUnitRemoved(Agent unit)` | 加入/移除不可脱离的玩家单位 |
| `OnUnitDetachmentChanged` | `public void OnUnitDetachmentChanged(Agent unit, bool isOldDetachmentLoose, bool isNewDetachmentLoose)` | 单位的脱离状态变化 |
| `OnAgentLostMount` | `public void OnAgentLostMount(Agent agent)` | 单位失去坐骑 |
| `OnAgentControllerChanged` | `public void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 单位控制者变化 |
| `OnFormationDispersed` | `public void OnFormationDispersed()` | 阵型被打散 |

### 计数与查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CountOfUnits` | `public int CountOfUnits` | 队列内单位总数（含脱离的） |
| `CountOfDetachedUnits` | `public int CountOfDetachedUnits` | 已脱离队列的单位数 |
| `CountOfUnitsWithoutDetachedOnes` | `public int CountOfUnitsWithoutDetachedOnes` | 不含脱离单位的数量 |
| `CountOfUnitsWithoutLooseDetachedOnes` | `public int CountOfUnitsWithoutLooseDetachedOnes` | 不含散兵的数量 |
| `CountOfDetachableNonPlayerUnits` | `public int CountOfDetachableNonPlayerUnits` | 可脱离的非玩家单位数 |
| `CountOfUndetachableNonPlayerUnits` | `public int CountOfUndetachableNonPlayerUnits` | 不可脱离的非玩家单位数 |
| `UnitsWithoutLooseDetachedOnes` | `public MBReadOnlyList<IFormationUnit> UnitsWithoutLooseDetachedOnes` | 排除散兵后的单位列表（只读视图） |
| `LooseDetachedUnits` | `public MBReadOnlyList<Agent> LooseDetachedUnits` | 散兵列表 |
| `DetachedUnits` | `public MBReadOnlyList<Agent> DetachedUnits` | 全部脱离队列的单位 |
| `GetFirstUnit` | `public Agent GetFirstUnit()` | 队首单位；空阵型返回 null |
| `GetUnitWithIndex` | `public Agent GetUnitWithIndex(int unitIndex)` | 按索引取单位；越界返回 null |
| `GetCountOfUnitsWithCondition` | `public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)` | 谓词计数。每次调用遍历全体 |
| `HasUnitsWithCondition` | `public bool HasUnitsWithCondition(Func<Agent, bool> function)` | 谓词存在性判断，命中即短路返回 |
| `HasUnitsWithCondition` | `public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)` | 同上并回传第一个命中的单位 |
| `HasUnitWithConditionLimitedRandom` | `public bool HasUnitWithConditionLimitedRandom(Func<Agent, bool> function, int startingIndex, int willBeCheckedUnitCount, out Agent resultAgent)` | 从 `startingIndex` 起最多检查 `willBeCheckedUnitCount` 个单位。用于分散采样而非穷举 |
| `HasAnyEnemyFormationsThatIsNotEmpty` | `public bool HasAnyEnemyFormationsThatIsNotEmpty()` | 是否存在非空的敌方阵型 |
| `GetCountOfUnitsBelongingToLogicalClass` | `public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)` | 按逻辑分类计数 |
| `GetCountOfUnitsBelongingToPhysicalClass` | `public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)` | 按物理分类计数，可排除旗手 |
| `GetUnitsWithoutDetachedOnes` | `public IEnumerable<Agent> GetUnitsWithoutDetachedOnes()` | 排除脱离单位的枚举 |
| `GetUnitsToPop` | `public List<IFormationUnit> GetUnitsToPop(int count)` | 取出 `count` 个可调离单位 |
| `GetUnitsToPopWithReferencePosition` | `public List<IFormationUnit> GetUnitsToPopWithReferencePosition(int count, Vec3 targetPosition)` | 上者按目标位置挑选版本 |

### 几何与布局

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Direction` | `public Vec2 Direction { get; private set; }` | 队列朝向 |
| `CurrentDirection` | `public Vec2 CurrentDirection` | 平滑后的实际朝向，与命令朝向有滞后 |
| `UnitSpacing` | `public int UnitSpacing { get; private set; }` | 单位间距档位（整数，不是距离） |
| `OrderPosition` | `public Vec2 OrderPosition` | 命令位置 |
| `OrderGroundPosition` | `public Vec3 OrderGroundPosition` | 命令位置的三维形式（带高度） |
| `OrderPositionIsValid` | `public bool OrderPositionIsValid` | 命令位置是否已确定 |
| `OrderLocalAveragePosition` | `public Vec2 OrderLocalAveragePosition` | 命令位置在本地坐标系下的平均位置 |
| `OrderPositionLock` | `public object OrderPositionLock { get; private set; }` | 保护命令位置的锁对象 |
| `SimulationFormationLock` | `public object SimulationFormationLock { get; private set; }` | 保护模拟状态的锁对象 |
| `Depth` | `public float Depth` | 队列纵深 |
| `Width` | `public float Width` | 队列宽度 |
| `MinimumWidth` / `MaximumWidth` | `public float MinimumWidth` / `public float MaximumWidth` | 当前间距档位下的宽度上下界 |
| `UnitDiameter` | `public float UnitDiameter` | 单个单位占位直径 |
| `Distance` / `MinimumDistance` / `MaximumDistance` | `public float Distance` / `MinimumDistance` / `MaximumDistance` | 单位间距（真实距离）及其上下界 |
| `Interval` / `MinimumInterval` / `MaximumInterval` | `public float Interval` / `MinimumInterval` / `MaximumInterval` | 单位间隔及其上下界 |
| `SmoothedAverageUnitPosition` | `public Vec2 SmoothedAverageUnitPosition` | 平滑后的平均位置，避免抖动 |
| `HasAnyMountedUnit` | `public bool HasAnyMountedUnit` | 是否含骑乘单位 |
| `CalculateHasSignificantNumberOfMounted` | `public bool CalculateHasSignificantNumberOfMounted` | 骑乘单位是否「多到足以改变排队」 |
| `CurrentPosition` | `public Vec2 CurrentPosition` | 队形当前位置 |
| `Distance`（查询） | `public float Distance` | 到目标阵型的距离 |
| `GetAveragePositionOfUnits` | `public Vec2 GetAveragePositionOfUnits(bool excludeDetachedUnits, bool excludePlayer)` | 单位平均位置 |
| `GetMedianAgent` | `public Agent GetMedianAgent(bool excludeDetachedUnits, bool excludePlayer, Vec2 averagePosition)` | 取离平均位置最近的中位单位 |
| `GetMiddleFrontUnitPositionOffset` | `public Vec2 GetMiddleFrontUnitPositionOffset()` | 队形前沿中点的偏移 |
| `GetWallDirectionOfRelativeFormationLocation` | `public Vec2 GetWallDirectionOfRelativeFormationLocation(Agent unit)` | 从单位位置看阵型「墙面」的朝向 |
| `GetDirectionOfUnit` | `public Vec2 GetDirectionOfUnit(Agent unit)` | 单位当前的朝向 |
| `GetOrderPositionOfUnit` | `public WorldPosition GetOrderPositionOfUnit(Agent unit)` | 按当前排队算法算出的该单位应在位置 |
| `GetCurrentGlobalPositionOfUnit` | `public Vec2 GetCurrentGlobalPositionOfUnit(Agent unit, bool blendWithOrderDirection)` | 单位的全局位置，可按命令朝向做混合 |
| `GetAverageMaximumMovementSpeedOfUnits` | `public float GetAverageMaximumMovementSpeedOfUnits()` | 单位平均最高速度 |
| `GetUnderAttackTypeOfUnits` | `public Agent.UnderAttackType GetUnderAttackTypeOfUnits(float timeLimit = 3f)` | 该阵型单位受攻击的类型统计 |
| `GetMovementTypeOfUnits` | `public Agent.MovementBehaviorType GetMovementTypeOfUnits()` | 该阵型单位当前的移动行为类型 |
| `GetMovementState` | `public MovementOrder.MovementStateEnum GetMovementState()` | 移动命令的当前状态 |
| `GetUnitSpawnFrameWithIndex` | `public void GetUnitSpawnFrameWithIndex(int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitCount, int unitSpacing, bool isMountedFormation, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)` | 部署时算第 `unitIndex` 个单位的生成位置与朝向 |
| `GetUnitPositionWithIndexAccordingToNewOrder` | `public void GetUnitPositionWithIndexAccordingToNewOrder(Formation simulationFormation, int unitIndex, in WorldPosition formationPosition, in Vec2 formationDirection, float width, int unitSpacing, out WorldPosition? unitSpawnPosition, out Vec2? unitSpawnDirection)` | 按新命令预测某单位应到位置（不传覆盖数量） |
| `GetUnitPositionWithIndexAccordingToNewOrder` | 同名重载，额外带 `int overridenUnitCount` | 按新命令预测位置，显式指定参与排队的单位数 |
| `GetUnitPositionWithIndexAccordingToNewOrder` | 同名重载，额外带 `out float actualWidth` | 同上并回传实际算出的宽度 |
| `GetUnavailableUnitPositionsAccordingToNewOrder` | `public IEnumerable<ValueTuple<WorldPosition, Vec2>> GetUnavailableUnitPositionsAccordingToNewOrder(Formation simulationFormation, in WorldPosition position, in Vec2 direction, float width, int unitSpacing)` | 按新命令列出「会落在障碍/冲突位置」的单位。攻城守方布防的常用工具 |
| `CreateNewOrderWorldPosition` | `public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)` | 按缓存策略造一个新的命令位置 |
| `GetDetachmentFrame` | `public WorldFrame? GetDetachmentFrame(Agent agent)` | 该单位所属脱离队列的坐标系；未脱离返回 null |

### 模拟与缓存

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Tick` | `public void Tick(float dt)` | 推进模拟：让单位朝排队位置收敛、更新缓存。由任务主循环调用 |
| `ForceCalculateCaches` | `public void ForceCalculateCaches()` | 强制立即重算全部缓存，必要时在读属性前调 |
| `SetHasPendingUnitPositions` | `public void SetHasPendingUnitPositions(bool hasPendingUnitPositions)` | 标记「单位位置还没定」，避免用中间值算缓存 |
| `GetHashCode` | `public override int GetHashCode()` | 基于身份的重写，供字典/集合使用 |
| `CachedAveragePosition` | `public Vec2 CachedAveragePosition { get; private set; }` | 缓存的平均位置。每帧更新，可能有若干帧延迟 |
| `CachedMedianPosition` | `public WorldPosition CachedMedianPosition { get; private set; }` | 缓存的中位位置（判断阵型中心用它比平均值稳） |
| `CachedCurrentVelocity` | `public Vec2 CachedCurrentVelocity { get; private set; }` | 缓存的移动速度向量 |
| `CachedMovementSpeed` | `public float CachedMovementSpeed { get; private set; }` | 缓存的移动速率，初值 1f |
| `CachedClosestEnemyFormation` | `public FormationQuerySystem CachedClosestEnemyFormation` | 最近的敌方阵型查询句柄；无敌方时可能为 null |
| `CachedClosestEnemyFormationDistanceSquared` | `public float CachedClosestEnemyFormationDistanceSquared { get; private set; }` | 上者的距离平方（缓存的是平方值，开根号前留意） |
| `CachedFormationIntegrityData` | `public Formation.FormationIntegrityDataGroup CachedFormationIntegrityData { get; private set; }` | 阵型一致性统计组 |
| `QuerySystem` | `public FormationQuerySystem QuerySystem { get; private set; }` | 空间查询入口，做邻近检索用 |
| `AI` | `public FormationAI AI { get; private set; }` | 该阵型的 AI 控制器 |
| `AttackEntityOrderSecondaryDetachment` | `public AttackEntityOrderSecondaryDetachment AttackEntityOrderSecondaryDetachment { get; private set; }` | 攻击实体命令的次级脱离队列 |
| `RetreatPositionCache` | `public Formation.RetreatPositionCacheSystem RetreatPositionCache { get; private set; }` | 撤退位置缓存系统，构造时容量为 2 |

### 脱离队列

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Detachments` | `public MBReadOnlyList<IDetachment> Detachments` | 当前所有脱离队列 |
| `JoinDetachment` | `public void JoinDetachment(IDetachment detachment)` | 加入一个脱离队列 |
| `LeaveDetachment` | `public void LeaveDetachment(IDetachment detachment)` | 离开一个脱离队列 |
| `FormAttackEntityDetachment` | `public void FormAttackEntityDetachment(GameEntity targetEntity)` | 针对某个场景实体组建攻击脱离队列 |
| `DisbandAttackEntityDetachment` | `public void DisbandAttackEntityDetachment()` | 解散上面那个攻击脱离队列 |

### 部署与生成

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BeginSpawn` | `public void BeginSpawn(int unitCount, bool isMounted)` | 声明将要生成 `unitCount` 个（可骑乘）单位，进入生成态 |
| `EndSpawn` | `public void EndSpawn()` | 结束生成态 |
| `SetSpawnIndex` | `public void SetSpawnIndex(int value = 0)` | 手动设置生成游标 |
| `GetNextSpawnIndex` | `public int GetNextSpawnIndex()` | 取下一个生成序号并推进游标 |

### 静态布局计算

这些静态方法把「步距档位 + 是否骑乘」换算成实际距离，部署布阵时直接调用即可，不需要自己推导。

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetDefaultUnitDiameter` | `public static float GetDefaultUnitDiameter(bool isMounted)` | 单位占位直径 |
| `GetDefaultUnitInterval` | `public static float GetDefaultUnitInterval(bool isMounted, int unitSpacing)` | 单位间隔 |
| `GetDefaultMinimumUnitInterval` | `public static float GetDefaultMinimumUnitInterval(bool isMounted)` | 最小单位间隔 |
| `GetDefaultUnitDistance` | `public static float GetDefaultUnitDistance(bool isMounted, int unitSpacing)` | 单位间距 |
| `GetDefaultMinimumUnitDistance` | `public static float GetDefaultMinimumUnitDistance(bool isMounted)` | 最小单位间距 |
| `GetDefaultFileWidth` | `public static float GetDefaultFileWidth(int fileUnitCount, int unitSpacing, bool isMounted)` | 一纵列的宽度 |
| `GetDefaultRankDepth` | `public static float GetDefaultRankDepth(int rankUnitCount, int unitSpacing, bool isMounted)` | 一横排的纵深 |
| `InfantryInterval` | `public static float InfantryInterval(int unitSpacing)` | 步兵间隔 |
| `CavalryInterval` | `public static float CavalryInterval(int unitSpacing)` | 骑兵间隔 |
| `InfantryDistance` | `public static float InfantryDistance(int unitSpacing)` | 步兵间距 |
| `CavalryDistance` | `public static float CavalryDistance(int unitSpacing)` | 骑兵间距 |
| `GetFormationFramesForBeforeFormationCreation` | `public static List<WorldFrame> GetFormationFramesForBeforeFormationCreation(float width, int manCount, bool areMounted, WorldPosition spawnOrigin, Mat3 spawnRotation)` | 在创建 `Formation` 之前，先算出每个单位的坐标系 |
| `GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth` | `public static float GetLastSimulatedFormationsOccupationWidthIfLesserThanActualWidth(Formation simulationFormation)` | 上一次模拟算出的占用宽度（仅当小于实际宽度时） |
| `IsDefenseRelatedAIDrivenComponent` | `public static bool IsDefenseRelatedAIDrivenComponent(DrivenProperty drivenProperty)` | 某个 AI 驱动属性是否属于防守相关集合 |
| `CalculateFormationDirectionEnforcingFactorForRank` | `public float CalculateFormationDirectionEnforcingFactorForRank(int rankIndex)` | 第 `rankIndex` 排的方向强制系数 |
| `Rearrange` | `public void Rearrange(IFormationArrangement arrangement)` | 换一套排队算法并立刻重排 |
| `TickForColumnArrangementInitialPositioning` | `public void TickForColumnArrangementInitialPositioning(Formation formation)` | 纵列排队下的初始摆位推进 |
| `DebugArrangements` | `public void DebugArrangements()` | 在调试构建里打印当前排队结果 |

### 事件

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnUnitAdded` | `public event Action<Formation, Agent>` | 单位加入阵型 |
| `OnUnitRemoved` | `public event Action<Formation, Agent>` | 单位离开阵型 |
| `OnUnitAttached` | `public event Action<Formation, Agent>` | 单位被收回队列 |
| `OnUnitCountChanged` | `public event Action<Formation>` | 单位数变化 |
| `OnUnitSpacingChanged` | `public event Action<Formation>` | 间距档位变化 |
| `OnTick` | `public event Action<Formation>` | 每帧 tick |
| `OnWidthChanged` | `public event Action<Formation>` | 宽度变化 |
| `OnBeforeMovementOrderApplied` | `public event Action<Formation, MovementOrder.MovementOrderEnum>` | 移动命令应用**之前**。可在这里否决或改写 |
| `OnAfterArrangementOrderApplied` | `public event Action<Formation, ArrangementOrder.ArrangementOrderEnum>` | 排队命令应用**之后** |

### 常量、字段与嵌套类型

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AveragePositionCalculatePeriod` | `public const float AveragePositionCalculatePeriod = 0.1f` | 平均位置的重算周期（秒）。这解释了为什么 `CachedAveragePosition` 总是「旧的」 |
| `MinimumUnitSpacing` | `public const int MinimumUnitSpacing = 0` | 间距档位下界 |
| `RetreatPositionDistanceCacheCount` | `public const int RetreatPositionDistanceCacheCount = 2` | 撤退位置缓存槽位数 |
| `RetreatPositionCacheUseDistanceSquared` | `public const float RetreatPositionCacheUseDistanceSquared = 400f` | 撤退缓存的命中距离平方阈值（对应 20 单位） |
| `Formation.RetreatPositionCacheSystem` | `public class RetreatPositionCacheSystem`，含 `GetRetreatPositionFromCache(Vec2 agentPosition)`、`AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)` 与构造函数 `RetreatPositionCacheSystem(int cacheCount)` | 撤退位置缓存。容量只有 2，命中是近似匹配 |
| `Formation.FormationIntegrityDataGroup` | `public struct FormationIntegrityDataGroup`，构造签名 `FormationIntegrityDataGroup(Vec2 averageVelocityExcludeFarAgents, float deviationOfPositionsExcludeFarAgents, float maxDeviationOfPositionExcludeFarAgents, float averageMaxUnlimitedSpeedExcludeFarAgents)` | 阵型一致性统计组。四个公开字段分别是排除远端后的平均速度、位置偏差、最大偏差、平均最大速度 |
| `Formation.AgentArrangementData` | `public class AgentArrangementData(int index, IFormationArrangement arrangement)`，属性 `IsPlayerUnit` | 记录某个 Agent 在排队算法中的位置信息 |

## 真实示例

```csharp
public class WallFormationBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void AfterAddTeam(Team team)
    {
        if (team.Side != BattleSideEnum.Defender)
        {
            return;
        }

        MBList<Formation> formations = team.FormationsIncludingEmpty;
        for (int i = 0; i < formations.Count; i++)
        {
            Formation formation = formations[i];
            if (formation.CountOfUnits == 0)
            {
                continue;
            }

            // 依据当前间距档位算出前排站位，再让整队走过去
            float spacing = Formation.GetDefaultUnitDistance(false, formation.UnitSpacing);
            formation.SetFacingOrder(FacingOrderFacingOrderLookAtEnemy);
            formation.SetMovementOrder(MovementOrderMove(formation.CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache.FixedPosition)));
            Debug.Print("[Wall] formation " + i + " interval " + spacing);
        }
    }

    public override void OnMissionTick(float dt)
    {
        Formation playerFormation = Mission.Current.PlayerTeam.GeneralsFormation;
        if (playerFormation == null || playerFormation.CountOfUnits == 0)
        {
            return;
        }

        // 用中位位置而不是平均值：有人掉队时中位数不会跟着漂
        WorldPosition center = playerFormation.CachedMedianPosition;
        int forward = playerFormation.GetCountOfUnitsBelongingToLogicalClass(FormationClass.NumberOfRegularFormations);
        if (forward > 0)
        {
            playerFormation.SetMovementOrder(MovementOrderMove(center));
        }
    }
}
```

`MovementOrder` 在 1.4.6 里不开放构造函数，一律用静态工厂：`MovementOrderMove(WorldPosition)`、`MovementOrderChargeToTarget(Formation)`、`MovementOrderFollow(Agent)`、`MovementOrderFollowEntity(GameEntity)`、`MovementOrderAttackEntity(GameEntity, bool surroundEntity)`。朝向命令同理，`FacingOrderLookAtEnemy` 是一个 `public static readonly FacingOrder` 字段而不是枚举值。`WorldPosition.AsVec2` 是取二维坐标的成员（没有 `ToVec2()`）。

部署时算站位：

```csharp
Formation.GetUnitPositionWithIndexAccordingToNewOrder(
    simulationFormation: defenderFormation,
    unitIndex: 3,
    formationPosition: wallCenter,
    formationDirection: facing,
    width: defenderFormation.MaximumWidth,
    unitSpacing: defenderFormation.UnitSpacing,
    out WorldPosition? spawnPos,
    out Vec2? spawnDir);
```

## 风险与边界

- **`sealed` 不可继承**：需要定制行为只能挂事件或用 `MissionBehavior` 包一层。
- **命令不是立即生效**：`SetMovementOrder` 之后 `OrderPosition` 可能不变，实际重排在 `Tick` 与 `Rearrange` 里发生。写「走到某点然后立刻读位置」的代码会读到旧值。
- **缓存在延迟**：`AveragePositionCalculatePeriod` 是 0.1 秒，`CachedAveragePosition` / `CachedMedianPosition` / `CachedCurrentVelocity` 都按周期重算。在同一帧里读多个缓存属性，它们可能来自不同的重算时刻。需要精确值时调 `ForceCalculateCaches()`。
- **事件里不要发命令**：`OnBeforeMovementOrderApplied` / `OnAfterArrangementOrderApplied` 内部再调 `SetMovementOrder` 会形成重入，表现是命令被静默丢弃或队列抖动。
- **`ApplyActionOnEachUnit` 里不能增删单位**：要在遍历中改成员用 `ApplyActionOnEachUnitViaBackupList`。
- **遍历时可能拿到已销毁的 Agent**：单位在 `OnAgentDeleted` 后不再有效；把 `Agent` 缓存进字典前要确认它仍在队列里。
- **`Split` 会消耗原阵型**：拆出来的 `Formation` 由 `Team` 接管，继续操作原引用会看到空的统计值。
- **`RetreatPositionCache` 只有 2 个槽位**：`GetRetreatPositionFromCache` 是近似匹配，阈值 `RetreatPositionCacheUseDistanceSquared = 400f`。不要用它做精确历史回溯。
- **`CachedClosestEnemyFormation` 可能为 null**：没有敌方阵型时未初始化。
- **命令与显示是两套**：`OrderPosition`（命令目标）与 `CachedAveragePosition`（实际位置）常有明显延迟，两者混用会让 UI 显示「已到达」而实际还在走。
- **无线程安全**：`OrderPositionLock` 与 `SimulationFormationLock` 是为任务内部多阶段访问准备的，不是给 mod 用的外部锁；在别的线程调用这些方法是未定义行为。
- **主线程与 native 边界**：`WorldPosition`、`Mat3`、`GameEntity` 相关成员最终都跨进 native 层，只能在任务主循环里调用。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/`。1.4.6 的 `Formation` 相对它把大量公开字段（`Team`、`Index`、`FormationIndex`、`Banner`、`HasBeenPositioned`、`ReferencePosition`）保留为 `readonly`/`public` 字段而非属性，并新增了 `GetReadonlyMovementOrderReference()`、`GetWallDirectionOfRelativeFormationLocation(Agent)`、`ApplyActionOnEachUnitViaBackupList(Action<Agent>)` 这几项。跨版本 mod 若依赖成员是属性还是字段（影响反射与序列化写法），需要在 1.4.5 上单独核对。

## 依赖关系

- 任务本体：[Mission](../Mission) — 阵型的宿主，`Mission.Current.PlayerTeam` 是最常见的入口。
- Behavior 基类：[MissionBehavior](../MissionBehavior) — 官方所有战斗逻辑都走这条扩展路径。
- 单位类型：[Agent](../Agent) — `Formation` 里绝大多数查询返回的就是它。
- 战役侧：[Campaign](../../campaign/Campaign) — 攻城布防参数通常取自 `Campaign.Current.Models.*Model`。
- 父级：[mission API 目录导览](../)