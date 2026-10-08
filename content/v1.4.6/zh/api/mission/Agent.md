---
title: "Agent"
description: "sealed 的战场单位：Main 单例代表一个人或一匹马，承载动作通道、AI 状态、装备、外观、命中累计与阵型归属。"
---
# Agent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Source:** `TaleWorlds.MountAndBlade/Agent.cs`

## 概述

`Agent` 是战场上的「一个人」——或者一匹马、一个野兽。它继承 `DotNetObject`，因此持有原生实体指针。它同时实现五个接口：`IAgent`（战斗）、`IFocusable`（可被相机聚焦）、`IUsable`（可被使用）、`IFormationUnit`（是阵型的组成单位）、`ITrackableBase`（可被追踪）。

**`Agent` 与战役层的 [Hero](../../campaign/Hero) 不是一回事。** `Hero` 跨越整局战役，是人物；`Agent` 只存在于一场任务的生命周期内，任务结束就销毁。战场上的「玩家角色」由 `Agent.Main`（静态）指向那个 `Agent`，它的 `IsHero` 为真时对应某个 `Hero`，但两者没有自动同步——战斗结果要等任务结束时由战役层结算。

它是 `sealed` 的，公开成员超过 500 个。本类的实用读法是按四条主线：**它是谁**（`Index`、`Character`、`Team`、`Formation`）、**它在哪**（`Position`、`Frame`、`VisualPosition`）、**它能做什么**（`SetActionChannel`、`SetAIBehaviorParams`、`UseGameObject`）、**它怎么样**（`Health`、`AIStateFlags`、`MortalityState`）。

## 心智模型

生命周期：`Mission.SpawnAgent(AgentBuildData)` → `InitializeAgentProperties(...)` → `InitializeMissionEquipment(...)` → `EquipItemsFromSpawnEquipment(...)` → `WieldInitialWeapons()` → `SetInitialFrame(...)` 落位 → 战斗中 `Tick(dt)` / `TickParallel(dt)` 每帧推进 → `MakeDead(...)` → 尸体淡出 → 任务结束，`OnAgentDeleted` 通知后引用失效。

动作系统是**通道式**的：`SetActionChannel(channelNo, actionIndexCache, ...)` 给某个通道塞一个动作，通道之间可以混合。`GetCurrentActionType(channelNo)` / `GetCurrentActionStage(channelNo)` 读当前状态，`GetActionChannelWeight(channelNo)` 读混合权重。攻击方向与防御方向分别用 `MovementFlags` 位标志表达（`Agent.MovementControlFlag` 是 `: uint` 位域，带 `AttackMask` / `DefendMask` / `MoveMask` 掩码）。

AI 侧走 `AIStateFlags`（同样是位域，`AlarmStateMask = 3` 用来取警戒档位）+ `SetAIBehaviorParams(...)` / `SetAllBehaviorParams(...)`。`SetScriptedPosition` / `SetScriptedPositionAndDirection` 可以把单位钉死在脚本位置上，这是做剧情演出与「指定谁先上」的标准手段。

三个常见误用。一是**缓存 `Agent` 引用跨帧跨任务**：`OnAgentDeleted` 之后引用即失效，且每场任务都是新实例，跨任务缓存毫无意义。二是**直接改 `Health` 绕过命中累计**：伤害判定还依赖 `AddHitter` / `RemoveHitter` 累计的 `HitterList`，只改血量会造成「血量与战报对不上」。三是**在 `MissionBehavior.OnMissionTick` 里遍历 `Mission.Current.AllAgents` 做重活**：那是每帧调用且 Agent 数量可能上百，配合射向检测与导航查询会明显拖帧。

## 关键成员

### 身份与阵营

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Main` | `public static Agent Main` | 玩家当前操控的 Agent。无人操控时为 null |
| `Index` | `public int Index { get; }` | 任务内唯一索引。网络同步与 `Mission.FindAgentWithIndex` 都靠它 |
| `Character` | `public BasicCharacterObject Character` | 该单位的人物/怪物模板 |
| `IsHero` | `public bool IsHero` | 是否对应一个战役 `Hero` |
| `Monster` | `public Monster Monster { get; }` | 若为怪物则非 null |
| `IsHuman` | `public bool IsHuman` | 是否为人形 |
| `IsMount` | `public bool IsMount` | 是否为坐骑 |
| `IsPlayerTroop` | `public bool IsPlayerTroop` | 是否属于玩家部队 |
| `IsMainAgent` | `public bool IsMainAgent` | 是否就是 `Agent.Main` |
| `IsPlayerControlled` | `public bool IsPlayerControlled` | 是否被玩家直接操控 |
| `IsMine` | `public bool IsMine` | 是否属于玩家一方（比 `IsPlayerTroop` 宽，含玩家盟友） |
| `IsAIControlled` | `public bool IsAIControlled` | 是否由 AI 驱动 |
| `Controller` | `public AgentControllerType Controller` | 当前控制者类型（玩家 / AI / 无） |
| `Team` | `public Team Team { get; private set; }` | 所属队伍。判敌我用 `IsEnemyOf` 而不是比 `Team` |
| `SetTeam` | `public void SetTeam(Team team, bool sync)` | 换队。`sync` 为 true 会同步到所有端 |
| `IsEnemyOf` | `public bool IsEnemyOf(Agent otherAgent)` | 与另一单位是否敌对 |
| `IsFriendOf` | `public bool IsFriendOf(Agent otherAgent)` | 与另一单位是否友方 |
| `CanLeadFormationsRemotely` | `public bool CanLeadFormationsRemotely` | 能否远程指挥阵型 |
| `SetCanLeadFormationsRemotely` | `public void SetCanLeadFormationsRemotely(bool value)` | 设置远程指挥能力 |
| `Origin` | `public IAgentOriginBase Origin { get; set; }` | 来源（哪个队伍生成、哪种兵种） |
| `Mission` | `public Mission Mission { get; private set; }` | 所属任务 |
| `OwningAgentMissionPeer` | `public MissionPeer OwningAgentMissionPeer { get; private set; }` | 归属的网络端 |
| `MissionPeer` | `public MissionPeer MissionPeer` | 该单位代表的网络端 |
| `MissionRepresentative` | `public MissionRepresentativeBase MissionRepresentative { get; private set; }` | 任务代表对象 |

### 位置、朝向与运动

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Position` | `public Vec3 Position` | 物理位置 |
| `VisualPosition` | `public Vec3 VisualPosition` | 渲染位置。与 `Position` 有插值滞后 |
| `GetWorldPosition` | `public WorldPosition GetWorldPosition()` | 带缓存校验的世界坐标。导航相关计算用它 |
| `GetWorldFrame` | `public WorldFrame GetWorldFrame()` | 单位的世界坐标系 |
| `Frame` | `public MatrixFrame Frame` | 本地坐标系 |
| `LookFrame` | `public MatrixFrame LookFrame` | 朝向坐标系 |
| `LookDirection` | `public Vec3 LookDirection` | 朝向向量 |
| `LookDirectionAsAngle` | `public float LookDirectionAsAngle` | 朝向角 |
| `LookRotation` | `public Mat3 LookRotation` | 朝向旋转矩阵 |
| `IsLookDirectionLocked` | `public bool IsLookDirectionLocked` | 朝向是否被锁定 |
| `GetEyeGlobalPosition` / `GetEyeGlobalHeight` | `public Vec3 GetEyeGlobalPosition()` / `public float GetEyeGlobalHeight()` | 眼睛位置与离地高度 |
| `GetChestGlobalPosition` | `public Vec3 GetChestGlobalPosition()` | 胸口位置。射向判定常用它 |
| `GetLookDownLimit` | `public float GetLookDownLimit()` | 俯视角度上限 |
| `MovementVelocity` | `public Vec2 MovementVelocity` | 水平移动速度 |
| `Velocity` | `public Vec3 Velocity` | 三维速度 |
| `AverageVelocity` | `public Vec3 AverageVelocity` | 平滑后的平均速度 |
| `GetCurrentVelocity` | `public Vec2 GetCurrentVelocity()` | 当前速度 |
| `GetRealGlobalVelocity` / `GetAverageRealGlobalVelocity` | `public Vec3 GetRealGlobalVelocity()` / `public Vec3 GetAverageRealGlobalVelocity()` | 真实全局速度与其平滑值 |
| `MovementMode` | `public AgentMovementMode MovementMode` | 移动模式（走路 / 奔跑 / 蹲伏） |
| `CrouchMode` / `WalkMode` | `public bool CrouchMode` / `public bool WalkMode` | 是否蹲伏 / 是否步行 |
| `SetCrouchMode` / `SetDraggingMode` | `public void SetCrouchMode(bool set)` / `public void SetDraggingMode(bool set)` | 设置蹲伏 / 拖拽 |
| `IsCrouchingAllowed` | `public bool IsCrouchingAllowed()` | 当前场景是否允许蹲伏 |
| `WalkingSpeedLimitOfMountable` | `public float WalkingSpeedLimitOfMountable` | 可骑乘单位的步行限速 |
| `MovementDirectionAsAngle` | `public float MovementDirectionAsAngle` | 移动方向角 |
| `MovementFlags` | `public Agent.MovementControlFlag MovementFlags` | 移动与攻防输入的位标志 |
| `MovementInputVector` | `public Vec2 MovementInputVector` | 移动输入向量 |
| `GetMovementDirection` | `public Vec2 GetMovementDirection()` | 移动方向 |
| `AttackDirection` | `public Agent.UsageDirection AttackDirection` | 当前攻击方向 |
| `GetAttackDirection` | `public Agent.UsageDirection GetAttackDirection()` | 上一条的读取方法形式 |
| `AttackDirectionToMovementFlag` / `DefendDirectionToMovementFlag` / `MovementFlagToDirection` | `public static Agent.MovementControlFlag AttackDirectionToMovementFlag(Agent.UsageDirection direction)` 等 | 方向与位标志之间的转换 |
| `GetDefendMovementFlag` | `public Agent.MovementControlFlag GetDefendMovementFlag()` | 当前防御标志 |
| `PlayerAttackDirection` | `public Agent.UsageDirection PlayerAttackDirection()` | 玩家输入的攻击方向 |
| `CurrentWatchState` | `public Agent.WatchState CurrentWatchState` | 观察状态（警惕方向） |
| `SetWatchState` | `public void SetWatchState(Agent.WatchState watchState)` | 设置观察状态 |
| `SetTargetPosition` / `SetTargetZ` / `SetTargetUp` / `SetTargetPositionAndDirection` | `public void SetTargetPosition(Vec2 value)` / `SetTargetZ(float)` / `SetTargetUp(in Vec3)` / `SetTargetPositionAndDirection(in Vec2, in Vec3)` | 设置目标点各分量 |
| `GetTargetPosition` / `GetTargetDirection` | `public Vec2 GetTargetPosition()` / `public Vec3 GetTargetDirection()` | 读取目标点 |
| `ClearTargetFrame` / `ClearTargetZ` | `public void ClearTargetFrame()` / `public void ClearTargetZ()` | 清除目标点 |
| `SetTargetPositionSynched` / `SetTargetPositionAndDirectionSynched` | `public void SetTargetPositionSynched(ref Vec2 targetPosition)` 等 | 同步版目标点设置 |
| `TeleportToPosition` | `public void TeleportToPosition(Vec3 position)` | 传送。**会打断动作**，慎用 |
| `SetInitialFrame` | `public void SetInitialFrame(in Vec3 initialPosition, in Vec2 initialDirection, bool canSpawnOutsideOfMissionBoundary = false)` | 设定初始位姿 |
| `SetMovementDirection` | `public void SetMovementDirection(in Vec2 direction)` | 设置移动方向 |
| `AddAcceleration` | `public void AddAcceleration(in Vec3 acceleration)` | 施加加速度 |
| `ComputeAnimationDisplacement` | `public Vec3 ComputeAnimationDisplacement(float dt)` | 按动画推进计算位移 |
| `SetExcludedFromGravity` | `public void SetExcludedFromGravity(bool exclude, bool applyAverageGlobalVelocity)` | 关闭重力。做飞行/浮空单位时用 |
| `GetPathDistanceToPoint` | `public float GetPathDistanceToPoint(ref Vec3 point)` | 沿导航网格到某点的路径长度 |
| `GetCurrentNavigationFaceId` | `public int GetCurrentNavigationFaceId()` | 当前所在导航面 ID |
| `IsTargetNavigationFaceIdBetween` | `public bool IsTargetNavigationFaceIdBetween(int navigationFaceIdStart, int navigationFaceIdEnd)` | 目标是否落在指定导航面区间 |
| `HasPathThroughNavigationFaceIdFromDirection` | `public bool HasPathThroughNavigationFaceIdFromDirection(int navigationFaceId, Vec2 direction)` | 从某方向出发能否穿过指定导航面 |
| `HasPathThroughNavigationFacesIDFromDirection` | `public bool HasPathThroughNavigationFacesIDFromDirection(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)` | 三个面一起判定 |
| `HasPathThroughNavigationFaceIdFromDirectionMT` / `HasPathThroughNavigationFacesIDFromDirectionMT` | 同名的多线程版本 | 大规模寻路时用它们 |
| `CanMoveDirectlyToPosition` | `public bool CanMoveDirectlyToPosition(in Vec2 position)` | 能否直线走到某点 |
| `GetDistanceTo` | `public float GetDistanceTo(Agent other)` | 与另一单位的距离 |
| `IsOnLand` / `IsInWater` | `public bool IsOnLand()` / `public bool IsInWater()` | 位于陆地 / 水域 |
| `GetWaterLevelAtPosition`（任务侧） | 见 [Mission](../Mission) | 水位查询走任务 |
| `SetIsPhysicsForceClosed` | `public void SetIsPhysicsForceClosed(bool isPhysicsForceClosed)` | 关闭物理推挤 |
| `SetShouldCatchUpWithFormation` | `public void SetShouldCatchUpWithFormation(bool value)` | 是否追赶阵型 |
| `CanBeAssignedForScriptedMovement` | `public bool CanBeAssignedForScriptedMovement()` | 是否可被脚本移动 |

### 阵型与脱离队列

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | 所属阵型。无阵型时为 null |
| `IsDetachedFromFormation` | `public bool IsDetachedFromFormation` | 是否已脱离阵型 |
| `IsDetachableFromFormation` | `public bool IsDetachableFromFormation` | 是否允许脱离 |
| `SetDetachableFromFormation` | `public void SetDetachableFromFormation(bool value)` | 设置可否脱离 |
| `TryAttachToFormation` | `public bool TryAttachToFormation()` | 尝试回到阵型队列 |
| `Detachment` | `public IDetachment Detachment` | 所属脱离队列 |
| `DetachmentIndex` | `public int DetachmentIndex { get; private set; }` | 脱离队列中的槽位，初值 -1 |
| `SetDetachmentIndex` | `public void SetDetachmentIndex(int newDetachmentIndex)` | 设置槽位 |
| `DetachmentWeight` | `public float DetachmentWeight { get; private set; }` | 脱离队列权重 |
| `SetDetachmentWeight` | `public void SetDetachmentWeight(float newDetachmentWeight)` | 设置权重 |
| `LocalPositionError` | `public Vec2 LocalPositionError` | 相对阵型位置的误差 |
| `UpdateLocalPositionError` | `public void UpdateLocalPositionError()` | 重算位置误差 |
| `TryRemoveAllDetachmentScores` | `public bool TryRemoveAllDetachmentScores()` | 清空脱离评分 |
| `IsFormationFrameEnabled` | `public bool IsFormationFrameEnabled { get; private set; }` | 阵型坐标系是否启用 |
| `SetFormationFrameEnabled` | `public void SetFormationFrameEnabled(WorldPosition position, Vec2 direction, Vec2 positionVelocity, float formationDirectionEnforcingFactor)` | 启用并设置阵型坐标系 |
| `SetFormationFrameDisabled` | `public void SetFormationFrameDisabled()` | 关闭阵型坐标系 |
| `TrySetFormationFrame` | `public bool TrySetFormationFrame(in WorldPosition formationPosition, in Vec2 formationDirection)` | 尝试按给定参数建立阵型坐标系 |
| `GetBaseFormationFrame` | `public bool GetBaseFormationFrame(out WorldPosition formationPosition, out Vec2 formationDirection)` | 读取当前阵型坐标系 |
| `GetFormationFileAndRankInfo` | `public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex)` | 队列中的排号与纵列号 |
| `GetFormationFileAndRankInfo` | 同名重载，额外 `out int fileCount, out int rankCount` | 上一条加行列总数 |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; set; }` | 阵型站位偏好（左/右/中） |
| `UpdateFormationOrders` | `public void UpdateFormationOrders()` | 让单位按阵型命令移动 |
| `IsInLadderQueue` | `public bool IsInLadderQueue { get; private set; }` | 是否在攻城梯队列中 |
| `SetIsInLadderQueue` / `SetIsLadderQueueUsing` | `public void SetIsInLadderQueue(bool isInLadderQueue)` / `SetIsLadderQueueUsing(bool)` | 梯队列状态维护 |
| `SetColumnwiseFollowAgent` | `public void SetColumnwiseFollowAgent(Agent followAgent, ref Vec2 followPosition)` | 指定纵列跟随的单位与偏移 |
| `LastDetachmentTickAgentTime` | `public float LastDetachmentTickAgentTime { get; private set; }` | 上次脱离 tick 时间 |
| `SetLastDetachmentTickAgentTime` | `public void SetLastDetachmentTickAgentTime(float lastDetachmentTickAgentTime)` | 设置该时间 |

### 动作与动画通道

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SetActionChannel` | `public bool SetActionChannel(int channelNo, in ActionIndexCache actionIndexCache, bool ignorePriority = false, AnimFlags additionalFlags = 0, float blendWithNextActionFactor = 0f, float actionSpeed = 1f, float blendInPeriod = -0.2f, float blendOutPeriodToNoAnim = 0.4f, float startProgress = 0f, bool useLinearSmoothing = false, float blendOutPeriod = -0.2f, int actionShift = 0, bool forceFaceMorphRestart = true)` | 给某个通道设置动作。**返回值 false 表示被优先级拒绝**——这是「为什么我的动作没播出来」的唯一答案 |
| `GetCurrentAction` | `public ActionIndexCache GetCurrentAction(int channelNo)` | 通道当前动作 |
| `GetCurrentActionType` | `public Agent.ActionCodeType GetCurrentActionType(int channelNo)` | 通道当前动作类型（枚举，便于按类型分支） |
| `GetCurrentActionStage` | `public Agent.ActionStage GetCurrentActionStage(int channelNo)` | 通道当前动作阶段（起手 / 释放 / 收招） |
| `GetCurrentActionDirection` | `public Agent.UsageDirection GetCurrentActionDirection(int channelNo)` | 通道当前动作方向 |
| `GetCurrentActionPriority` | `public int GetCurrentActionPriority(int channelNo)` | 通道当前优先级 |
| `GetCurrentActionProgress` | `public float GetCurrentActionProgress(int channelNo)` | 通道动作进度（0..1） |
| `GetActionChannelWeight` | `public float GetActionChannelWeight(int channelNo)` | 通道混合权重 |
| `GetActionChannelCurrentActionWeight` | `public float GetActionChannelCurrentActionWeight(int channelNo)` | 当前动作在该通道内的权重 |
| `SetCurrentActionProgress` | `public void SetCurrentActionProgress(int channelNo, float progress)` | 手动设进度（跳段） |
| `SetCurrentActionSpeed` | `public void SetCurrentActionSpeed(int channelNo, float speed)` | 设置动作播放速度 |
| `GetCurrentAnimationFlag` | `public AnimFlags GetCurrentAnimationFlag(int channelNo)` | 通道动画标志 |
| `ActionSet` | `public MBActionSet ActionSet` | 该单位的动作集（动画资源） |
| `SetActionSet` | `public void SetActionSet(ref AnimationSystemData animationSystemData)` | 替换动作集 |
| `TickActionChannels` | `public void TickActionChannels(float dt)` | 推进所有动作通道 |
| `Agent.ActionStage` | `None = -1` / `AttackReady` / `AttackQuickReady` / `AttackRelease` / `ReloadMidPhase` / `ReloadLastPhase` / `Defend` / `DefendParry` / `NumActionStages` | 动作阶段枚举 |
| `Agent.ActionCodeType` | 60+ 个值，从 `Other` 到各防御、攻击、跳跃、骑乘动作，含区间常量 `StrikeBegin = 48` / `StrikeEnd = 52` / `CombatAllBegin = 1` / `CombatAllEnd = 23` 等 | 动作类型枚举。用区间常量做范围判断 |

### 装备与武器

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `WieldedWeapon` | `public MissionWeapon WieldedWeapon` | 主手当前握持的武器 |
| `WieldedOffhandWeapon` | `public MissionWeapon WieldedOffhandWeapon` | 副手当前握持的武器 |
| `Equipment` | `public MissionEquipment Equipment { get; private set; }` | 任务内装备容器 |
| `SpawnEquipment` | `public Equipment SpawnEquipment { get; private set; }` | 生成时的基础装备 |
| `InitializeMissionEquipment` | `public void InitializeMissionEquipment(MissionEquipment missionEquipment, Banner banner)` | 初始化任务装备 |
| `InitializeSpawnEquipment` | `public void InitializeSpawnEquipment(Equipment spawnEquipment)` | 初始化生成装备 |
| `UpdateSpawnEquipmentAndRefreshVisuals` | `public void UpdateSpawnEquipmentAndRefreshVisuals(Equipment newSpawnEquipment)` | 换装并刷新外观 |
| `EquipItemsFromSpawnEquipment` | `public void EquipItemsFromSpawnEquipment(bool neededBatchedItems, bool prepareImmediately, bool useFaceCache, int faceCacheID)` | 按生成装备填充实际装备槽 |
| `WieldInitialWeapons` | `public void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = InstantAfterPickUp, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = Any)` | 初始握持武器 |
| `TryToWieldWeaponInSlot` | `public void TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)` | 请求握持某槽位武器。**是请求**，可能因优先级失败 |
| `WieldNextWeapon` | `public void WieldNextWeapon(Agent.HandIndex weaponIndex, Agent.WeaponWieldActionType wieldActionType = WithAnimation)` | 切到下一把武器 |
| `TryToSheathWeaponInHand` | `public void TryToSheathWeaponInHand(Agent.HandIndex handIndex, Agent.WeaponWieldActionType type)` | 请求收武器 |
| `RemoveEquippedWeapon` | `public void RemoveEquippedWeapon(EquipmentIndex slotIndex)` | 卸下武器 |
| `EquipWeaponWithNewEntity` | `public void EquipWeaponWithNewEntity(EquipmentIndex slotIndex, ref MissionWeapon weapon)` | 用新实体装备武器 |
| `EquipWeaponFromSpawnedItemEntity` | `public void EquipWeaponFromSpawnedItemEntity(EquipmentIndex slotIndex, SpawnedItemEntity spawnedItemEntity, bool removeWeapon)` | 拾取场景武器装备 |
| `EquipWeaponToExtraSlotAndWield` | `public void EquipWeaponToExtraSlotAndWield(ref MissionWeapon weapon)` | 装备到副槽并握持 |
| `RemoveEquippedWeapon` / `EquipWeaponToExtraSlotAndWield` | 见上 | 与上一行同，不重复列 |
| `SetWeaponAmountInSlot` | `public void SetWeaponAmountInSlot(EquipmentIndex equipmentSlot, short amount, bool enforcePrimaryItem)` | 设置槽内数量（箭矢堆栈等） |
| `SetWeaponAmmoAsClient` | `public void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)` | 客户端侧设弹药 |
| `SetWeaponReloadPhaseAsClient` | `public void SetWeaponReloadPhaseAsClient(EquipmentIndex equipmentIndex, short reloadState)` | 客户端侧设装填阶段 |
| `SetReloadAmmoInSlot` | `public void SetReloadAmmoInSlot(EquipmentIndex equipmentIndex, EquipmentIndex ammoSlotIndex, short reloadedAmmo)` | 装填弹药 |
| `SetUsageIndexOfWeaponInSlotAsClient` | `public void SetUsageIndexOfWeaponInSlotAsClient(EquipmentIndex slotIndex, int usageIndex)` | 设置武器使用方式（刺击/劈砍） |
| `SetWieldedItemIndexAsClient` | `public void SetWieldedItemIndexAsClient(Agent.HandIndex handIndex, EquipmentIndex equipmentIndex, bool isWieldedInstantly, bool isWieldedOnSpawn, int mainHandCurrentUsageIndex)` | 客户端侧设握持 |
| `StartSwitchingWeaponUsageIndexAsClient` | `public void StartSwitchingWeaponUsageIndexAsClient(EquipmentIndex equipmentIndex, int usageIndex, Agent.UsageDirection currentMovementFlagUsageDirection)` | 客户端侧切换使用方式 |
| `GetPrimaryWieldedItemIndex` / `GetOffhandWieldedItemIndex` | `public EquipmentIndex GetPrimaryWieldedItemIndex()` / `GetOffhandWieldedItemIndex()` | 主/副手当前槽位 |
| `GetWieldedWeaponInfo` | `public WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex)` | 武器详细信息（伤害、长度、破甲） |
| `GetOldWieldedItemInfo` | `public void GetOldWieldedItemInfo(out int rightHandSlotIndex, out int rightHandUsageIndex, out int leftHandSlotIndex, out int leftHandUsageIndex)` | 换武器前的槽位信息 |
| `HasWeapon` | `public bool HasWeapon()` | 是否持有武器 |
| `HasRangedWeapon` | `public bool HasRangedWeapon(bool checkHasAmmo = false)` | 是否持有远程武器 |
| `GetWeaponEntityFromEquipmentSlot` | `public WeakGameEntity GetWeaponEntityFromEquipmentSlot(EquipmentIndex slotIndex)` | 槽内武器的实体 |
| `GetWeaponInaccuracy` | `public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)` | 武器不准度。距离越远越大 |
| `GetWeaponToReplaceOnQuickAction` | `public ItemObject GetWeaponToReplaceOnQuickAction(SpawnedItemEntity spawnedItem, out EquipmentIndex possibleSlotIndex)` | 快速拾取时会被替换的武器 |
| `ChangeWeaponHitPoints` | `public void ChangeWeaponHitPoints(EquipmentIndex slotIndex, short hitPoints)` | 修改武器耐久 |
| `PrepareWeaponForDropInEquipmentSlot` | `public void PrepareWeaponForDropInEquipmentSlot(EquipmentIndex slotIndex, bool dropWithHolster)` | 准备丢出武器 |
| `OnWeaponDrop` | `public void OnWeaponDrop(EquipmentIndex equipmentSlot)` | 武器掉落回调 |
| `DropItem` | `public void DropItem(EquipmentIndex itemIndex, WeaponClass pickedUpItemType = WeaponClass.Undefined)` | 丢弃槽内物品 |
| `OnItemPickup` | `public void OnItemPickup(SpawnedItemEntity spawnedItemEntity, EquipmentIndex weaponPickUpSlotIndex, out bool removeWeapon)` | 拾取物品。`out bool removeWeapon` 控制是否从场景移除 |
| `CanInteractableWeaponBePickedUp` / `CanQuickPickUp` | `public bool CanInteractableWeaponBePickedUp(SpawnedItemEntity spawnedItem)` / `public bool CanQuickPickUp(SpawnedItemEntity spawnedItem)` | 能否拾取 / 能否快速拾取 |
| `ClearEquipment` | `public void ClearEquipment()` | 清空全部装备 |
| `SaveEquipmentsOnHand` | `public void SaveEquipmentsOnHand()` | 记录手上装备状态（回滚用） |
| `UpdateWeapons` | `public void UpdateWeapons()` | 刷新武器相关状态 |
| `HasLostShield` / `RestoreShieldHitPoints` | `public bool HasLostShield()` / `public void RestoreShieldHitPoints()` | 盾是否已丢 / 恢复盾耐久 |
| `WillDropWieldedShield` | `public bool WillDropWieldedShield(SpawnedItemEntity spawnedItem)` | 当前动作是否会掉落盾 |
| `HadSameTypeOfConsumableOrShieldOnSpawn` | `public bool HadSameTypeOfConsumableOrShieldOnSpawn(WeaponClass weaponClass)` | 生成时是否带同类物品 |
| `GetFiringOrder` / `GetRidingOrder` | `public int GetFiringOrder()` / `public int GetRidingOrder()` | 读取射击/骑乘命令 |
| `SetFiringOrder` / `SetRidingOrder` | `public void SetFiringOrder(FiringOrder.RangedWeaponUsageOrderEnum order)` / `public void SetRidingOrder(RidingOrder.RidingOrderEnum order)` | 设置射击/骑乘命令 |
| `GetSelectedMountIndex` / `SetSelectedMountIndex` | `public int GetSelectedMountIndex()` / `public void SetSelectedMountIndex(int mountIndex)` | 选中的坐骑槽位 |
| `CanPerformBrace` | `public bool CanPerformBrace()` | 能否架枪（长矛/弩的架射） |
| `EnforceShieldUsage` | `public void EnforceShieldUsage(Agent.UsageDirection shieldDirection)` | 强制持盾于指定方向 |
| `IsShieldUsageEncouraged` / `IsPlayerUnit` | `public bool IsShieldUsageEncouraged` / `public bool IsPlayerUnit` | 是否鼓励用盾 / 是否玩家单位 |
| `CurrentGuardMode` | `public Agent.GuardMode CurrentGuardMode` | 当前防御姿态 |
| `SetWeaponGuard` | `public void SetWeaponGuard(Agent.UsageDirection direction)` | 设置防御姿态 |
| `ResetGuard` | `public void ResetGuard()` | 重置防御姿态 |
| `Agent.GuardMode` | `MarkForDeletion = -2` / `None` / `Up` / `Down` / `Left` / `Right` | 防御姿态枚举 |
| `Agent.HandIndex` | `MainHand` / `OffHand` | 手别枚举 |
| `Agent.WeaponWieldActionType` | `WithAnimation` / `Instant` / `InstantAfterPickUp` / `WithAnimationUninterruptible` | 握持动作类型 |

### 附着武器与身体部件

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetAttachedWeaponsCount` | `public int GetAttachedWeaponsCount()` | 附着武器数量（箭、飞斧等） |
| `GetAttachedWeapon` | `public MissionWeapon GetAttachedWeapon(int index)` | 按槽位取附着武器 |
| `GetAttachedWeaponFrame` | `public MatrixFrame GetAttachedWeaponFrame(int index)` | 附着武器的坐标系 |
| `GetAttachedWeaponBoneIndex` | `public sbyte GetAttachedWeaponBoneIndex(int index)` | 附着武器的骨骼索引 |
| `DeleteAttachedWeapon` | `public void DeleteAttachedWeapon(int index)` | 删除某个附着武器 |
| `ClearAttachedWeapons` | `public void ClearAttachedWeapons()` | 清空全部附着武器 |
| `AttachWeaponToBone` | `public void AttachWeaponToBone(MissionWeapon weapon, GameEntity weaponEntity, sbyte boneIndex, ref MatrixFrame attachLocalFrame)` | 把武器附着到骨骼 |
| `AttachWeaponToWeapon` | `public void AttachWeaponToWeapon(EquipmentIndex slotIndex, MissionWeapon weapon, GameEntity weaponEntity, ref MatrixFrame attachLocalFrame)` | 把武器附着到另一把武器上 |
| `GetBoneEntitialFrame` | `public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex, bool useBoneMapping)` | 骨骼实体坐标系 |
| `GetBoneEntitialFrameAtAnimationProgress` | `public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)` | 按动画进度取骨骼位置。命中判定用 |
| `SetHandInverseKinematicsFrame` | `public bool SetHandInverseKinematicsFrame(in MatrixFrame leftGlobalFrame, in MatrixFrame rightGlobalFrame)` | 设置双手 IK |
| `SetHandInverseKinematicsFrameForMissionObjectUsage` | `public void SetHandInverseKinematicsFrameForMissionObjectUsage(in MatrixFrame localIKFrame, in MatrixFrame boundEntityGlobalFrame, float animationHeightDifference = 0f)` | 使用场景物体时的 IK |
| `ClearHandInverseKinematics` | `public void ClearHandInverseKinematics()` | 清除 IK |
| `SetBodyArmorMaterialType` | `public void SetBodyArmorMaterialType(ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType)` | 设置护甲材质类型 |
| `GetBaseArmorEffectivenessForBodyPart` | `public float GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType bodyPart)` | 指定身体部位的护甲防护系数 |
| `GetTotalEncumbrance` / `GetTotalMass` | `public float GetTotalEncumbrance()` / `public float GetTotalMass()` | 负重惩罚 / 总质量 |
| `GetArmLength` / `GetArmWeight` | `public float GetArmLength()` / `public float GetArmWeight()` | 臂长与臂重 |
| `AddPrefabComponentToBone` / `AddSynchedPrefabComponentToBone` | `public CompositeComponent AddPrefabComponentToBone(string prefabName, sbyte boneIndex)` / `public int AddSynchedPrefabComponentToBone(string prefabName, sbyte boneIndex)` | 往骨骼挂 prefab 组件（刀光、箭羽） |
| `SetSynchedPrefabComponentVisibility` / `IsSynchedPrefabComponentVisible` | `public void SetSynchedPrefabComponentVisibility(int componentIndex, bool visibility)` / `public bool IsSynchedPrefabComponentVisible(int componentIndex)` | prefab 组件可见性 |
| `SetCapeClothSimulator` | `public void SetCapeClothSimulator(GameEntityComponent clothSimulatorComponent)` | 设置披风布料模拟器 |
| `CheckEquipmentForCapeClothSimulationStateChange` | `public void CheckEquipmentForCapeClothSimulationStateChange()` | 检查披风模拟状态是否需变更 |
| `IsAgentParentEntitySameAs` | `public bool IsAgentParentEntitySameAs(GameEntity toBeChecked)` | 父实体是否与给定实体相同 |
| `SetForceAttachedEntity` | `public void SetForceAttachedEntity(WeakGameEntity willBeAttached)` | 强制附着到某实体 |

### 生命、死亡与伤害

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Health` | `public float Health` | 当前生命值 |
| `HealthLimit` | `public float HealthLimit { get; set; }` | 生命上限 |
| `BaseHealthLimit` | `public float BaseHealthLimit { get; set; }` | 基础生命上限 |
| `SetMaximumSpeedLimit` | `public void SetMaximumSpeedLimit(float maximumSpeedLimit, bool isMultiplier)` | 设置速度上限。`isMultiplier` 决定参数是绝对值还是倍率 |
| `DebugGetHealth` | `public float DebugGetHealth()` | 从底层读真实血量，与 `Health` 不一致时用它排查 |
| `GetMaximumForwardUnlimitedSpeed` / `GetMaximumSpeedLimit` / `GetCurrentSpeedLimit` | `public float GetMaximumForwardUnlimitedSpeed()` / `GetMaximumSpeedLimit()` / `GetCurrentSpeedLimit()` | 三种口径的速度上限 |
| `GetTurnSpeed` | `public float GetTurnSpeed()` | 转向速度 |
| `GetRunningSimulationDataUntilMaximumSpeedReached` | `public void GetRunningSimulationDataUntilMaximumSpeedReached(ref float combatAccelerationTime, ref float maxSpeed, float[] speedValues)` | 采样加速过程曲线 |
| `CurrentMortalityState` | `public Agent.MortalityState CurrentMortalityState { get; private set; }` | 死亡状态 |
| `SetMortalityState` | `public void SetMortalityState(Agent.MortalityState newState)` | 设置死亡状态 |
| `Agent.MortalityState` | `Mortal` / `Invulnerable` / `Immortal` | 死亡状态枚举 |
| `MakeDead` | `public void MakeDead(bool isKilled, ActionIndexCache action, int corpsesToFadeIndex = -1)` | 杀死单位。**这是「处决/击杀」的正规入口**，会走完整的死亡动画与战报流程 |
| `ToggleInvulnerable` | `public void ToggleInvulnerable()` | 切换无敌状态（调试） |
| `IsActive` | `public bool IsActive()` | 是否仍活跃（未死未淡出）。**1.4.6 的 `Agent` 上没有 `IsDead` 属性**，判死活用这个或 `CurrentMortalityState` |
| `IsFadingOut` | `public bool IsFadingOut()` | 是否正在淡出 |
| `StartFadingOut` / `FadeOut` / `FadeIn` | `public void StartFadingOut()` / `public void FadeOut(bool hideInstantly, bool hideMount)` / `public void FadeIn()` | 淡出/淡入 |
| `AddHitter` | `public void AddHitter(MissionPeer peer, float damage, bool isFriendlyHit)` | 累计一次命中贡献。战报统计靠它 |
| `RemoveHitter` | `public void RemoveHitter(MissionPeer peer, bool isFriendlyHit)` | 撤销命中贡献 |
| `HitterList` | `public MBReadOnlyList<Agent.Hitter> HitterList` | 全部命中贡献记录 |
| `Agent.Hitter` | `public class`，成员 `Damage` / `HitterPeer` / `IsFriendlyHit` / 构造 `Hitter(MissionPeer peer, float damage, bool isFriendlyHit)` / `IncreaseDamage(float amount)`；常量 `AssistMinDamage = 35f` | 单条命中贡献。达到 `AssistMinDamage` 才算助攻 |
| `ImmediateEnemy` | `public Agent ImmediateEnemy` | 当前直接威胁的敌人 |
| `ResetEnemyCaches` | `public void ResetEnemyCaches()` | 清空敌人缓存 |
| `GetLastTargetVisibilityState` | `public AITargetVisibilityState GetLastTargetVisibilityState()` | 上次看到目标的可见状态 |
| `GetMissileRange` / `MaximumMissileRange` / `MissileRangeAdjusted` | `public float GetMissileRange()` / `public float MaximumMissileRange` / `public float MissileRangeAdjusted` | 射程三态：当前 / 上限 / 修正后 |
| `GetMissileRangeWithHeightDifferenceAux` | `public float GetMissileRangeWithHeightDifferenceAux(float targetZ)` | 按高差修正射程 |
| `LastRangedHitTime` / `LastMeleeHitTime` / `LastRangedAttackTime` / `LastMeleeAttackTime` | 各自 `{ get; private set; }`，初值 `float.MinValue` | 最近一次命中/攻击的时间。射速与攻速判定读它们 |
| `UpdateLastRangedAttackTimeDueToAnAttack` | `public void UpdateLastRangedAttackTimeDueToAnAttack(float newTime)` | 修正上次远程攻击时间 |
| `CurrentAimingError` / `CurrentAimingTurbulance` | `public float CurrentAimingError` / `public float CurrentAimingTurbulance` | 当前瞄准误差与抖动 |
| `GetAimingTimer` | `public float GetAimingTimer()` | 瞄准计时 |
| `SetPreciseRangedAimingEnabled` | `public void SetPreciseRangedAimingEnabled(bool set)` | 开关精确瞄准（AI 用） |
| `IsDoingPassiveAttack` / `IsPassiveUsageConditionsAreMet` | `public bool IsDoingPassiveAttack` / `public bool IsPassiveUsageConditionsAreMet` | 被动攻击状态 |
| `RegisterBlow` | `public void RegisterBlow(Blow blow, in AttackCollisionData collisionData)` | 登记一次打击结算 |
| `CreateBlowFromBlowAsReflection` | `public void CreateBlowFromBlowAsReflection(in Blow blow, in AttackCollisionData collisionData, out Blow outBlow, out AttackCollisionData outCollisionData)` | 生成反弹版本的打击结算 |
| `OnAgentHealthChanged` | `public event OnAgentHealthChangedDelegate OnAgentHealthChanged` | 血量变化事件（含旧值与新值） |
| `OnMountHealthChanged` | `public event OnMountHealthChangedDelegate OnMountHealthChanged` | 坐骑血量变化事件 |
| `OnAgentHealthChangedDelegate` | `public delegate void OnAgentHealthChangedDelegate(Agent agent, float oldHealth, float newHealth)` | 血量变化委托 |
| `OnMountHealthChangedDelegate` | `public delegate void OnMountHealthChangedDelegate(Agent agent, Agent mount, float oldHealth, float newHealth)` | 坐骑血量变化委托 |
| `Agent.AgentLastHitInfo` | `public struct`，成员 `LastBlowOwnerId` / `LastBlowAttackType` / `CanOverrideBlow` / `Initialize()` / `RegisterLastBlow(int ownerId, AgentAttackType attackType)` | 最近一次打击的归属记录 |
| `Agent.KillInfo` | `public enum KillInfo : sbyte` | 击杀信息来源（玩家 / 队友 / 环境等） |
| `HealthDyingThreshold` | `public const float HealthDyingThreshold = 1f` | 濒死血量阈值常量 |
| `SyncHealthToAllClients` | `public bool SyncHealthToAllClients { get; private set; }` | 血量是否全端同步 |
| `UpdateSyncHealthToAllClients` | `public void UpdateSyncHealthToAllClients(bool value)` | 设置血量同步策略 |

### 尸体、布娃娃与淡出

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddAsCorpse` | `public void AddAsCorpse()` | 标记为尸体 |
| `IsAddedAsCorpse` | `public bool IsAddedAsCorpse()` | 是否已是尸体 |
| `StartRagdollAsCorpse` / `EndRagdollAsCorpse` | `public void StartRagdollAsCorpse()` / `public void EndRagdollAsCorpse()` | 启用/关闭尸体布娃娃 |
| `ApplyForceOnRagdoll` | `public void ApplyForceOnRagdoll(sbyte boneIndex, in Vec3 force)` | 对尸体骨骼施力（箭矢插在尸体上） |
| `SetVelocityLimitsOnRagdoll` | `public void SetVelocityLimitsOnRagdoll(float linearVelocityLimit, float angularVelocityLimit)` | 设置布娃娃速度上限 |
| `SetOverridenStrikeAndDeathAction` | `public void SetOverridenStrikeAndDeathAction(in ActionIndexCache strikeAction, in ActionIndexCache deathAction)` | 覆写击杀与死亡动作 |

### AI 状态与脚本移动

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AIStateFlags` | `public Agent.AIStateFlag AIStateFlags` | AI 状态位标志 |
| `Agent.AIStateFlag` | `None = 0` / `Cautious = 1` / `PatrollingCautious = 2` / `Alarmed = 3` / `Paused = 8` / `UseObjectMoving = 16` / `UseObjectUsing = 32` / `UseObjectWaiting = 64` / `ColumnwiseFollow = 256` / 掩码 `AlarmStateMask = 3` | AI 状态位域。警戒档位用 `flags & AlarmStateMask` 取 |
| `SetAlarmState` | `public bool SetAlarmState(Agent.AIStateFlag alarmStateFlag)` | 设置警戒档位。返回 false 表示当前状态不允许切换 |
| `IsAlarmStateNormal` | `public bool IsAlarmStateNormal()` | 是否处于正常警戒（未察觉） |
| `IsCautious` | `public bool IsCautious()` | 是否谨慎 |
| `IsPatrollingCautious` | `public bool IsPatrollingCautious()` | 是否巡逻谨慎 |
| `IsAlarmed` | `public bool IsAlarmed()` | 是否已警觉 |
| `IsWandering` | `public bool IsWandering()` | 是否在游荡 |
| `IsRunningAway` | `public bool IsRunningAway { get; private set; }` | 是否正在逃跑 |
| `Retreat` | `public void Retreat(WorldPosition retreatPos)` | 命令撤退到某点 |
| `StopRetreating` | `public void StopRetreating()` | 取消撤退 |
| `IsRetreating` | `public bool IsRetreating()` | 是否在撤退 |
| `GetRetreatPos` | `public WorldPosition GetRetreatPos()` | 撤退目标点 |
| `GetAIMoveDestination` | `public WorldPosition GetAIMoveDestination()` | AI 移动目标点 |
| `IsAIAtMoveDestination` | `public bool IsAIAtMoveDestination()` | AI 是否已到目标点 |
| `GetAIMoveStartTolerance` / `GetAIMoveStopTolerance` | `public float GetAIMoveStartTolerance()` / `GetAIMoveStopTolerance()` | 移动起止容差 |
| `FindLongestDirectMoveToPosition` | `public Vec2 FindLongestDirectMoveToPosition(Vec2 targetPosition, bool checkBoundaries, bool checkFriendlyAgents, out bool isCollidedWithAgent)` | 找出能直线走到的最远点。避障推进用 |
| `GetAILastSuspiciousPosition` | `public WorldPosition GetAILastSuspiciousPosition()` | AI 最后怀疑位置 |
| `SetAILastSuspiciousPosition` | `public void SetAILastSuspiciousPosition(WorldPosition lastSuspiciousPosition, bool checkNavMeshForCorrection)` | 设置怀疑位置 |
| `SetIsAIPaused` | `public void SetIsAIPaused(bool isPaused)` | 暂停 AI |
| `IsPaused` | `public bool IsPaused` | AI 是否已暂停 |
| `SetAIBehaviorParams` | `public void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | 设置单个 AI 行为参数 |
| `SetAllBehaviorParams` | `public void SetAllBehaviorParams(HumanAIComponent.BehaviorValues[] behaviorParams)` | 批量设置全部 AI 行为参数 |
| `SetScriptedFlags` | `public void SetScriptedFlags(Agent.AIScriptedFrameFlags flags)` | 设置脚本化标志 |
| `SetScriptedCombatFlags` | `public void SetScriptedCombatFlags(Agent.AISpecialCombatModeFlags flags)` | 设置脚本战斗标志 |
| `GetScriptedFlags` / `GetScriptedCombatFlags` | `public Agent.AIScriptedFrameFlags GetScriptedFlags()` / `public Agent.AISpecialCombatModeFlags GetScriptedCombatFlags()` | 读取上述标志 |
| `SetScriptedPosition` | `public void SetScriptedPosition(ref WorldPosition position, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = None)` | 把单位钉在指定位置 |
| `SetScriptedPositionAndDirection` | `public void SetScriptedPositionAndDirection(ref WorldPosition scriptedPosition, float scriptedDirection, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = None)` | 钉死位置与朝向。做「定身」效果的入口 |
| `SetScriptedTargetEntity` | `public void SetScriptedTargetEntity(WeakGameEntity target, Agent.AISpecialCombatModeFlags additionalFlags = None, bool ignoreIfAlreadyAttacking = false)` | 指定脚本目标 |
| `DisableScriptedMovement` / `DisableScriptedCombatMovement` | `public void DisableScriptedMovement()` / `public void DisableScriptedCombatMovement()` | 解除脚本控制 |
| `ForceAiBehaviorSelection` | `public void ForceAiBehaviorSelection()` | 强制 AI 重新选择行为 |
| `Agent.AIScriptedFrameFlags` | `public enum` | 脚本化帧标志 |
| `Agent.AISpecialCombatModeFlags` | `public enum` | 特殊战斗模式标志 |
| `CommonAIComponent` / `HumanAIComponent` | `public CommonAIComponent CommonAIComponent { get; private set; }` / `public HumanAIComponent HumanAIComponent { get; private set; }` | AI 组件。`HumanAIComponent` 非 null 表示是人形单位 |
| `AgentDrivenProperties` | `public AgentDrivenProperties AgentDrivenProperties { get; private set; }` | 驱动属性容器（速度、伤害加成等） |
| `GetAgentDrivenPropertyValue` | `public float GetAgentDrivenPropertyValue(DrivenProperty type)` | 读驱动属性值 |
| `SetAgentDrivenPropertyValueFromConsole` | `public void SetAgentDrivenPropertyValueFromConsole(DrivenProperty type, float val)` | 控制台设驱动属性 |
| `UpdateCustomDrivenProperties` | `public void UpdateCustomDrivenProperties()` | 刷新自定义驱动属性 |
| `PropertyModifiers` | `public Agent.AgentPropertiesModifiers PropertyModifiers` | 属性修正结构体 |
| `CharacterPowerCached` / `WalkSpeedCached` | `public float CharacterPowerCached { get; private set; }` / `public float WalkSpeedCached { get; private set; }` | 缓存的战力与步行速度 |
| `GetBattleImportance` | `public float GetBattleImportance()` | 战斗重要性评分。AI 选目标时用它 |
| `GetTraitsMask` | `public TroopTraitsMask GetTraitsMask()` | 兵种特性掩码 |
| `SetDirectionChangeTendency` / `UpdateDirectionChangeTendency` | `public void SetDirectionChangeTendency(float tendency)` / `public void UpdateDirectionChangeTendency()` | 转向倾向 |

### 外观、渲染与组件

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AgentVisuals` | `public MBAgentVisuals AgentVisuals` | 外观对象。模型、材质、特效都挂在它上面 |
| `Components` | `public MBReadOnlyList<AgentComponent> Components` | 已挂载的组件 |
| `GetComponent` | `public T GetComponent<T>() where T : AgentComponent` | 按类型取组件；没有返回 null |
| `AddComponent` / `RemoveComponent` | `public void AddComponent(AgentComponent agentComponent)` / `public bool RemoveComponent(AgentComponent agentComponent)` | 增删组件 |
| `BodyPropertiesValue` | `public BodyProperties BodyPropertiesValue { get; private set; }` | 体型属性快照 |
| `UpdateBodyProperties` | `public void UpdateBodyProperties(BodyProperties bodyProperties)` | 更新体型 |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; internal set; }` | 体型随机种子。`internal set` |
| `InitializeAgentProperties` | `public void InitializeAgentProperties(Equipment spawnEquipment, AgentBuildData agentBuildData)` | 初始化全部属性 |
| `UpdateAgentProperties` / `UpdateAgentStats` / `ResetAgentProperties` | `public void UpdateAgentProperties()` / `UpdateAgentStats()` / `ResetAgentProperties()` | 刷新/重算/重置属性 |
| `ForceUpdateCachedAndFormationValues` | `public void ForceUpdateCachedAndFormationValues(bool updateOnlyMovement, bool arrangementChangeAllowed)` | 强制重算缓存与阵型值 |
| `AgentScale` | `public float AgentScale` | 模型缩放 |
| `ClothingColor1` / `ClothingColor2` | `public uint ClothingColor1` / `public uint ClothingColor2` | 两套布料主色索引 |
| `SetClothingColor1` / `SetClothingColor2` | `public void SetClothingColor1(uint color)` / `SetClothingColor2(uint)` | 设置布料颜色 |
| `RandomizeColors` | `public bool RandomizeColors { get; private set; }` | 是否随机配色 |
| `SetRandomizeColors` | `public void SetRandomizeColors(bool shouldRandomize)` | 设置是否随机配色 |
| `Banner` / `FormationBanner` | `public ItemObject Banner` / `public ItemObject FormationBanner` | 个人旗帜 / 阵型旗帜 |
| `SetFormationBanner` | `public void SetFormationBanner(ItemObject banner)` | 设置阵型旗帜 |
| `SetAgentFlags` / `GetAgentFlags` | `public void SetAgentFlags(AgentFlag agentFlags)` / `public AgentFlag GetAgentFlags()` | 外观相关的实体标志 |
| `SetNativeFormationNo` | `public void SetNativeFormationNo(int formationNo)` | 设置底层阵型编号（模型 LOD） |
| `SetAgentExcludeStateForFaceGroupId` | `public void SetAgentExcludeStateForFaceGroupId(int faceGroupId, bool isExcluded)` | 表情组排除 |
| `SetAgentFacialAnimation` | `public void SetAgentFacialAnimation(Agent.FacialAnimChannel channel, string animationName, bool loop)` | 播放面部动画 |
| `GetAgentFacialAnimation` | `public string GetAgentFacialAnimation()` | 读当前面部动画名 |
| `SetAgentIdleAnimationStatus` | `public void SetAgentIdleAnimationStatus(bool idleEnabled)` | 开关待机动画 |
| `Agent.FacialAnimChannel` | `public enum` | 面部动画通道 |
| `PreloadForRendering` | `public void PreloadForRendering()` | 预加载渲染资源 |
| `SetRenderCheckEnabled` / `GetRenderCheckEnabled` | `public void SetRenderCheckEnabled(bool value)` / `public bool GetRenderCheckEnabled()` | 渲染可见性检查开关 |
| `HeadCameraMode` | `public bool HeadCameraMode` | 是否头部相机模式 |
| `IsCameraAttachable` | `public bool IsCameraAttachable()` | 相机是否可附着 |
| `MakeVoice` | `public void MakeVoice(SkinVoiceManager.SkinVoiceType voiceType, SkinVoiceManager.CombatVoiceNetworkPredictionType predictionType)` | 播放语音 |
| `GetAgentVoiceDefinition` | `public string GetAgentVoiceDefinition()` | 语音配置名 |
| `YellAfterDelay` / `YellingBehaviour` / `SetWantsToYell` | `public void YellAfterDelay(float delayTimeInSecond)` / `YellingBehaviour()` / `SetWantsToYell()` | 喊话 |
| `CreateBloodBurstAtLimb` / `GetRandomPairOfRealBloodBurstBoneIndices` | `public void CreateBloodBurstAtLimb(sbyte realBoneIndex, float scale)` / `public ValueTuple<sbyte, sbyte> GetRandomPairOfRealBloodBurstBoneIndices()` | 血迹特效 |
| `GetDescriptionText` / `GetInfoTextForBeingNotInteractable` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` / `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | 交互提示文本 |

### 交互与场景物体

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsUsingGameObject` | `public bool IsUsingGameObject` | 是否正在使用场景物体 |
| `CurrentlyUsedGameObject` | `public UsableMissionObject CurrentlyUsedGameObject { get; private set; }` | 当前使用的物体 |
| `UseGameObject` | `public void UseGameObject(UsableMissionObject usedObject, int preferenceIndex = -1)` | 开始使用场景物体 |
| `StopUsingGameObject` | `public void StopUsingGameObject(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = AutoAttachAfterStoppingUsingGameObject)` | 停止使用 |
| `StopUsingGameObjectMT` | `public void StopUsingGameObjectMT(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = AutoAttachAfterStoppingUsingGameObject)` | 多线程版本 |
| `HandleStartUsingAction` / `HandleStopUsingAction` | `public void HandleStartUsingAction(UsableMissionObject targetObject, int preferenceIndex)` / `public void HandleStopUsingAction()` | 使用动作的起止处理 |
| `Agent.StopUsingGameObjectFlags` | `None = 0` / `AutoAttachAfterStoppingUsingGameObject = 1` / `DoNotWieldWeaponAfterStoppingUsingGameObject = 2` / `DefendAfterStoppingUsingGameObject = 4` | 停止使用后的行为标志 |
| `CanUseObject` / `CanReachObject` / `CanReachObjectFromPosition` / `CanReachAndUseObject` | 各自 `public bool CanXxxObject(...)` | 能否使用/触及场景物体 |
| `ObjectHasVacantPosition` | `public bool ObjectHasVacantPosition(UsableMissionObject gameObject)` | 该物体是否还有空位 |
| `InteractingWithAnyGameObject` | `public bool InteractingWithAnyGameObject()` | 是否与任何物体交互中 |
| `GetInteractionDistanceToUsable` | `public float GetInteractionDistanceToUsable(IUsable usable)` | 到可交互目标的距离 |
| `SetUsedGameObjectForClient` | `public void SetUsedGameObjectForClient(UsableMissionObject usedObject)` | 客户端侧设置使用中的物体 |
| `OnUse` / `OnUseStopped` | `public void OnUse(Agent userAgent, sbyte agentBoneIndex)` / `public void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 使用起止回调 |
| `SetAsConversationAgent` / `OnConversationStarted` | `public void SetAsConversationAgent(bool set)` / `public void OnConversationStarted()` | 对话角色设置 |
| `SetLookAgent` / `GetLookAgent` / `ResetLookAgent` | `public void SetLookAgent(Agent agent)` / `public Agent GetLookAgent()` / `public void ResetLookAgent()` | 注视目标 |
| `SetInteractionAgent` / `GetTargetAgent` / `SetTargetAgent` / `InvalidateTargetAgent` | `public void SetInteractionAgent(Agent agent)` / `public Agent GetTargetAgent()` / `public void SetTargetAgent(Agent agent)` / `public void InvalidateTargetAgent()` | 目标维护 |
| `SetLookToPointOfInterest` / `DisableLookToPointOfInterest` | `public void SetLookToPointOfInterest(Vec3 point)` / `public void DisableLookToPointOfInterest()` | 注视兴趣点 |
| `OnFocusGain` / `OnFocusLose` | `public void OnFocusGain(Agent userAgent)` / `public void OnFocusLose(Agent userAgent)` | 相机焦点得失 |
| `IsMainAgentObjectInteractionEnabled`（任务侧） | 见 [Mission](../Mission) | 判定在任务成员上 |
| `CanReachAgent` / `CanInteractWithAgent` | `public bool CanReachAgent(Agent otherAgent)` / `public bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)` | 与另一 Agent 的触及/交互判定 |
| `AgentLookingAtAgent`（任务侧） | 见 [Mission](../Mission) | 视线判定走任务 |
| `KickClear` | `public bool KickClear()` | 踢击是否命中 |
| `HandleTaunt` / `HandleBark` | `public void HandleTaunt(int tauntIndex, bool isDefaultTaunt)` / `public void HandleBark(int indexOfBark)` | 嘲讽与呼喝 |
| `DefaultTauntActions` | `public static readonly ActionIndexCache[] DefaultTauntActions` | 默认嘲讽动作表 |

### 骑乘

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MountAgent` | `public Agent MountAgent` | 骑乘的坐骑；未骑乘时为 null |
| `RiderAgent` | `public Agent RiderAgent` | 骑手；未被骑时为 null |
| `HasMount` | `public bool HasMount` | 是否有坐骑 |
| `Mount` | `public void Mount(Agent mountAgent)` | 上马 |
| `OnAgentMountedStateChanged` | `public Action OnAgentMountedStateChanged` | 骑乘状态变化事件 |
| `CheckSkillForMounting` | `public bool CheckSkillForMounting(Agent mountAgent)` | 按骑术技能判定能否上这匹马 |
| `MaxMountInteractionDistance` | `public const float MaxMountInteractionDistance = 1.75f` | 上马交互距离常量 |
| `DismountVelocityLimit` | `public const float DismountVelocityLimit = 0.5f` | 下马所需速度上限常量 |

### 控制器与组件扩展

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetController` | `public T GetController<T>() where T : AgentController` | 按类型取控制器 |
| `AddController` | `public AgentController AddController(Type type)` | 挂一个控制器（可换成自定义实现） |
| `RemoveController` | `public AgentController RemoveController(Type type)` | 摘掉控制器 |
| `SetLastMovementKeyPressed`（任务侧） | 见 [Mission](../Mission) | 移动键记录在任务上 |

### 附着武器生成

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnMainAgentWieldedItemChange` | `public Agent.OnMainAgentWieldedItemChangeDelegate OnMainAgentWieldedItemChange` | 主 Agent 换武器事件 |
| `OnAgentWieldedItemChange` | `public Action OnAgentWieldedItemChange` | 任意 Agent 换武器事件 |
| `Agent.OnMainAgentWieldedItemChangeDelegate` | `public delegate void OnMainAgentWieldedItemChangeDelegate()` | 无参委托 |
| `OnItemRemovedFromScene` | `public void OnItemRemovedFromScene()` | 场景物品被移除时回调 |

### 碰撞、其它状态与常量

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CollisionCapsule` | `public CapsuleData CollisionCapsule` | 碰撞胶囊 |
| `CollisionCapsuleCenter` | `public Vec3 CollisionCapsuleCenter` | 碰撞胶囊中心 |
| `GetBiggestAgentCollisionPadding`（任务侧） | 见 [Mission](../Mission) | 最大碰撞半径在任务上 |
| `EventControlFlags` | `public Agent.EventControlFlag EventControlFlags` | 事件控制位标志 |
| `Agent.EventControlFlag` | `public enum EventControlFlag : uint` | 事件控制位域 |
| `IsSitting` / `IsSliding` | `public bool IsSitting()` / `public bool IsSliding()` | 坐姿 / 滑行状态 |
| `IsReleasingChainAttackInMultiplayer` | `public bool IsReleasingChainAttackInMultiplayer()` | 多人中连击释放状态 |
| `IsAbleToUseMachine` | `public bool IsAbleToUseMachine()` | 能否使用攻城器械 |
| `GetSteppedEntity` / `GetSteppedRootEntity` / `GetSteppedBodyFlags` / `GetSteppedMachine` | `public WeakGameEntity GetSteppedEntity()` / `GetSteppedRootEntity()` / `public BodyFlags GetSteppedBodyFlags()` / `public UsableMachine GetSteppedMachine()` | 当前踩着/接触的实体信息 |
| `AgentScale`（重复说明） | 见外观段 | 不重复列 |
| `Name` / `NameTextObject` | `public string Name` / `public TextObject NameTextObject` | 单位名。调试与战报用 |
| `AgentRole` | `public TextObject AgentRole { get; set; }` | 单位在战场上的角色描述 |
| `GetSoundAndCollisionInfoClassName` | `public string GetSoundAndCollisionInfoClassName()` | 声音与碰撞配置类名 |
| `Age` | `public float Age` | 年龄 |
| `BecomeTeenagerAge` | `public const float BecomeTeenagerAge = 14f` | 青少年年龄阈值常量 |
| `MaxInteractionDistance` | `public const float MaxInteractionDistance = 3f` | 最大交互距离常量 |
| `MaxFocusDistance` | `public const float MaxFocusDistance = 10f` | 最大聚焦距离常量 |
| `CachedAndFormationValuesUpdateTime` | `public const float CachedAndFormationValuesUpdateTime = 0.5f` | 缓存与阵型值的更新周期常量 |
| `SetAveragePingInMilliseconds` | `public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)` | 设置平均延迟。多人下影响 AI 补偿 |
| `GetHasOnAiInputSetCallback` / `SetHasOnAiInputSetCallback` | `public bool GetHasOnAiInputSetCallback()` / `public void SetHasOnAiInputSetCallback(bool value)` | AI 输入回调标记 |
| `InvalidateAIWeaponSelections` | `public void InvalidateAIWeaponSelections()` | 让 AI 重新选择武器 |
| `ResetAiWaitBeforeShootFactor` | `public void ResetAiWaitBeforeShootFactor()` | 重置 AI 射击前等待系数 |
| `State` | `public AgentState State` | 底层动画状态机对象 |
| `DebugMore` | `public void DebugMore()` | 输出更详细的调试信息 |
| `Tick` / `TickParallel` | `public void Tick(float dt)` / `public void TickParallel(float dt)` | 推进该单位。由任务调用，mod 不要手动调 |
| `Agent.MovementBehaviorType` | `public enum` | 移动行为类型（由 `Mission.GetMovementTypeOfAgents` 返回） |
| `Agent.UnderAttackType` | `public enum` | 受攻击类型 |
| `Agent.WatchState` | `public enum` | 观察状态 |
| `Agent.CreationType` | `public enum` | 创建类型（生成 / 复活等） |
| `Agent.StackArray8Agent` | `public struct`，索引器 `Agent this[int index]`，常量 `Length = 8` | 固定 8 长度的 Agent 数组。`Agent.Struct` 内部用它避免分配 |
| `SetActionChannel` 之外的攻击状态 | `public void SetAttackState(int attackState)` | 设置攻击状态编号 |
| `GetAssistingHitter` | `public Agent.Hitter GetAssistingHitter(MissionPeer killerPeer)` | 找出贡献最大的击杀者记录 |
| `TryGetImmediateEnemyAgentMovementData` | `public bool TryGetImmediateEnemyAgentMovementData(out float maximumForwardUnlimitedSpeed, out Vec3 position)` | 取当前威胁的运动数据 |
| `CheckToDropFlaggedItem` | `public void CheckToDropFlaggedItem()` | 检查并丢弃被标记的物品 |
| `IsItemUseDisabled` | `public bool IsItemUseDisabled { get; set; }` | 是否禁用物品使用 |
| `CombatActionsEnabled` | `public bool CombatActionsEnabled` | 是否允许战斗动作 |
| `CanLogCombatFor` | `public bool CanLogCombatFor` | 是否可写战报 |
| `SetAveragePingInMilliseconds`（重复说明） | 见上 | 不重复列 |
| `LockAgentReplicationTableDataWithCurrentReliableSequenceNo` | `public void LockAgentReplicationTableDataWithCurrentReliableSequenceNo(NetworkCommunicator peer)` | 锁定复制表数据。多人大规模同步用 |
| `Agent.IsActive()` 与 `IsReleasingChainAttackInMultiplayer()` | 见上 | 与上文同，不重复列 |

## 怎么用

### 怎么拿到它

`Agent` 是 `TaleWorlds.MountAndBlade/Agent.cs:15` 的 `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`——**sealed**。它继承 `DotNetObject`，所以有 `GetPtr()`，很多行为最终转给 `MBAPI.IMBAgent.*`。

**它由 native 侧创建，模组永远不 new。** 取用的四条路：

- `public static Agent Main`（`:19`）——getter 先 `Mission mission = Mission.Current; if (mission == null) return null;` 再 `return mission.MainAgent;`（`:21-28`）。**所以战斗之外它返回 null。**
- 从 [Team](../../mission-ext/Team) / [Formation](../Formation) 反查：`Team` 有按 Agent 找的查询，`Formation` 的 `OnUnitAdded` 事件会给你实例。
- 从 [MissionBehavior](../MissionBehavior) 的回调参数拿：`OnAgentCreated(Agent agent)`（`MissionBehavior.cs:78`）、`OnAgentHit(Agent affectedAgent, Agent affectorAgent, ...)`（`:98`）等，这些参数就是现成的。
- 从物品/装备交互：`Formation` 那一层的 pickup 事件。

常用成员：`public Team Team { get; private set; }`（`:665`）、`public int KillCount { get; set; }`（`:669`）、`public float Health`（`:1558`）、`public float HealthLimit { get; set; }`（`:690`）、`public IAgentOriginBase Origin { get; set; }`（`:660`）。

**注意两个判断方法是方法而不是属性**：`public bool IsActive()`（`:3565`，实现是 `return this.State == AgentState.Active;`）、`IsRetreating()`（`:3572`）、`IsFadingOut()`（`:3578`）、`CanTeleport()`（`:3560`）。写成 `agent.IsActive` 会编译失败——这挡住了一类 bug。

### 典型用法

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

// 玩家角色：战斗外是 null
Agent player = Agent.Main;                                   // Agent.cs:19
if (player != null && player.IsActive())                     // :3565，注意是方法
{
    float hp = player.Health;                                 // :1558
    float max = player.HealthLimit;                           // :690
    Team t = player.Team;                                     // :665
    int kills = player.KillCount;                             // :669
}

// 更可靠的做法：在 MissionBehavior 里挂回调拿实例
public class MyLogic : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnAgentCreated(Agent agent)          // MissionBehavior.cs:78
    {
        if (agent == Agent.Main)
        {
            Debug.Print("player hp = " + agent.Health, 0);
        }
    }

    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
                                    in MissionWeapon affectorWeapon, in Blow blow,
                                    in AttackCollisionData attackCollisionData) { }   // :98
}
```

### 最容易踩的坑

**把 `Agent` 的引用跨战斗缓存。** 它是 `DotNetObject` 的一层包装，底层是 native 指针——战斗结束、mission 卸载之后，这个引用指向的对象已经没了。缓存它再在下一次战斗里读 `Health`，得到的是上一场的数据或直接崩。`Agent.Main`（`:19`）的实现也印证了这一点：**它每次都先取 `Mission.Current`，`Mission.Current` 为 null 就返回 null**（`:22-25`）——这个 getter 本身就承认「引用不该被留住」。

第二个坑是把 `IsActive()` 当属性用，或者——更实际的问题——**用 `IsActive()` 当「这个单位还活着」的判断**。它只是 `State == AgentState.Active`（`:3567`），而 `AgentState` 至少还有 `Dead`、`Deleted`、`Disabled` 之类。单位死了但还没从 mission 里清理时，`State` 已经是别的值；反过来，**已经被删除的 Agent 对象上调用任何方法都不保证安全**。判断存活请组合 `State` 与 mission 的清理时机，不要只靠 `IsActive()`。

第三，`Team`（`:665`）和 `HealthLimit`（`:690`）的属性不同——前者 setter 是 **private**（队伍分配完就不能改），后者是 **public set**（`:690` 就是 `{ get; set; }`）。想手动改某个 Agent 的血量上限可以走 `HealthLimit`，但改队伍归属**编译期就不允许**。

第四，`CanTeleport()`（`:3560`）内部读 `this.Mission.IsTeleportingAgents` 和 `this.Formation`——**mission 或 formation 为 null 时它就空引用**，而不是返回 false。它在你准备做传送逻辑之前是个必须先判空的前置条件。

## 真实示例

```csharp
public class FocusFire : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        Agent main = Agent.Main;
        if (mission == null || main == null || !main.IsPlayerControlled)
        {
            return;
        }

        // 用 BattleImportance 选出最该打的目标，而不是最近的那个
        AgentReadOnlyList agents = mission.Agents;
        Agent best = null;
        float bestScore = 0f;
        for (int i = 0; i < agents.Count; i++)
        {
            Agent candidate = agents[i];
            if (candidate == null || candidate.IsMount || !candidate.IsActive())
            {
                continue;
            }

            if (!main.IsEnemyOf(candidate))
            {
                continue;
            }

            float score = candidate.GetBattleImportance() / (1f + main.GetDistanceTo(candidate));
            if (score > bestScore)
            {
                bestScore = score;
                best = candidate;
            }
        }

        if (best != null)
        {
            main.SetTargetAgent(best);
            main.SetLookAgent(best);
        }
    }

    public override void OnAgentDeleted(Agent affectedAgent)
    {
        // 实体已销毁：只能清指针，不能再读它的属性
        Agent main = Agent.Main;
        if (main != null)
        {
            main.InvalidateTargetAgent();
        }
    }
}
```

锁定与血量监听：

```csharp
public sealed class Warden : MissionBehavior
{
    private readonly Dictionary<Agent, float> _lastHealth = new Dictionary<Agent, float>();

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnBehaviorInitialize()
    {
        Agent main = Agent.Main;
        if (main != null)
        {
            main.OnAgentHealthChanged += OnHealthChanged;
        }
    }

    public override void OnRemoveBehavior()
    {
        Agent main = Agent.Main;
        if (main != null)
        {
            main.OnAgentHealthChanged -= OnHealthChanged;
        }
    }

    private void OnHealthChanged(Agent agent, float oldHealth, float newHealth)
    {
        // 掉血超过阈值就把守卫钉在原地
        if (oldHealth - newHealth > 30f)
        {
            WorldPosition here = agent.GetWorldPosition();
            agent.SetScriptedPositionAndDirection(ref here, agent.LookDirectionAsAngle, false);
        }
    }
}
```

## 风险与边界

- **sealed + `DotNetObject`**：不能派生。定制外观走 `AgentComponent`，定制控制走 `AddController(Type)`。
- **每场任务都是新实例**：跨任务缓存 `Agent` 毫无意义。长期引用只能缓存 `Hero`（战役层）。
- **`OnAgentDeleted` 之后引用即失效**：此后读任何属性都跨进 native 未定义行为。所有字段都要在此时置空。
- **`SetActionChannel` 返回 false 就是没生效**：动作优先级是硬约束，脚本抢不过当前动作。先看返回值再决定下一步。
- **伤害必须走 `AddHitter` 链**：直接改 `Health` 会让战报、助攻统计（`AssistMinDamage = 35f`）与实际不一致。要「扣血但不杀」用 `MakeDead` 的逆操作或专门的伤害 API。
- **`MakeDead` 是正规死亡入口**：它走完整动画与结算流程。直接调 `Mission.KillAgentCheat` 只适合调试。
- **`TeleportToPosition` 会打断动作**：剧情演出里用它会让受击/攻击动作被强行切断。
- **位域不要直接算术**：`MovementControlFlag` 与 `AIStateFlag` 都是 `: uint` 位域，取警戒档位要用 `& AlarmStateMask`，手动 `== 3` 会在未来版本失效。
- **`AIStateFlag` 的档位不是单调的**：`Cautious = 1` / `PatrollingCautious = 2` / `Alarmed = 3` 是枚举值而非位（同一字段里的位是 `Paused = 8` 起）。混用会得到错误的警戒判定。
- **`SetScriptedPositionAndDirection` 需要 `ref`**：参数是 `ref WorldPosition`，先取局部变量再传；直接传属性会编译不过。
- **`Component` 增删会影响行为**：`AddComponent` / `RemoveComponent` 在战斗中途改会让 AI 与动画状态不同步。
- **原生边界**：多数成员最终跨进 native，只能在任务主循环访问；名字带 `MT` 的多线程版本是给引擎内部用的，不是给 mod 的并发接口。
- **主线程与性能**：`MissionBehavior.OnMissionTick` 里遍历 `mission.Agents` 并对每个做导航查询，是战斗中常见的帧率杀手。用 `Formation` 层的命令而不是逐个 Agent。
- **`Agent` 与 `Hero` 不同步**：战斗中的血量变化不会实时反映到战役层的 `Hero.HitPoints`，要等任务结束结算。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/`。1.4.6 相对它新增了 `SetScriptedPositionAndDirection`、`SetBodyArmorMaterialType`、`GetSoundAndCollisionInfoClassName`、`SetAveragePingInMilliseconds` 这几项，并新增了 `CommonAIComponent` 与 `HumanAIComponent` 两个显式属性（原先只有类型判断）。核心的 `Main`、`Index`、`Health`、`Team`、`Formation`、`Position`、`SetActionChannel`、`MakeDead`、`AddHitter`、`GetComponent<T>` 跨版本一致。

## 依赖关系

- 任务本体：[Mission](../Mission) — 生成、伤害、寻路、投射物都挂在它上面。
- 阵型：[Formation](../Formation) — `Agent.Formation` 的类型；整队命令从这里下。
- Behavior 基类：[MissionBehavior](../MissionBehavior) — 所有战斗逻辑的官方扩展点。
- 战役侧对应物：[Hero](../../campaign/Hero) — `IsHero` 为真时对应的那个人。
- 事件桥：[CampaignEvents](../../campaign/CampaignEvents) — `OnMissionStartedEvent` / `OnMissionEndedEvent` 把任务与战役接起来。
- 父级：[mission API 目录导览](../)

## 导航

- 同桶：[`../Mission`](../Mission) · [`../Formation`](../Formation) · [`../MissionBehavior`](../MissionBehavior)
- 父索引：[`../_index`](../_index)
