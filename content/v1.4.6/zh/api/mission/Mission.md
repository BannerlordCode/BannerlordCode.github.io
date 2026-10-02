---
title: "Mission"
description: "sealed 的任务运行时根对象：Current 单例持有场景、队伍、Agent 与投射物集合，并提供生成、伤害、寻路、相机与事件钩子。"
---
# Mission

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Source:** `TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`Mission` 是一场战斗任务的运行时根对象，继承 `DotNetObject`（这是 native 层与托管层之间的桥基类）。它持有三样东西：场景（`Scene` 与一批 `MissionObject`）、队伍（`Teams` 集合与七个具名队伍属性）、Agent 与投射物集合（`AllAgents`、`MissilesList`）。加上相机、伤害、寻路、生成、声音等一整套服务入口。

它是 `sealed` 的，并且有 **400+ 个公开成员**——本类的正确用法不是逐个记忆，而是记住三条主线：**当前任务是谁**（`Mission.Current`）、**人都在哪**（`Teams` / `AllAgents`）、**我怎么改**（`AddMissionBehavior`）。

它是 `IMission` 的实现，因此战役层通过接口拿到它；而战斗内的 mod 通常直接用静态 `Mission.Current`。

## 心智模型

生命周期由 `Mission.State` 描述：`NewlyCreated` → `Initializing` → `Continuing` → `EndingNextFrame` → `Over`。`new Mission(rec, missionState, needsMemoryCleanup)` 只构造；`Initialize()` 做初始化；`InitializeStartingBehaviors(...)` 挂上 Behavior；`AfterStart()` 表示可开打；`OnEndMissionRequest()` 请求结束；`EndMission()` 真正进入 `EndingNextFrame`。

每帧由 `OnTick(dt, realDt, updateCamera, doAsyncAITick)` 驱动，内部顺序大致是：`TickAgentsAndTeamsAsync`（AI，异步）→ `TickAgentsAndTeamsImp`（Agent 与队伍，含暂停的）→ Behavior 的 `OnMissionTick` → 相机更新 → 渲染。

扩展路径是 `AddMissionBehavior(MissionBehavior)`：它会注入 `Mission`、调 `OnCreated()`、并按 `BehaviorType` 把 `Logic` 类别的同时塞进 `MissionLogics`。取回用 `GetMissionBehavior<T>()`，移除用 `RemoveMissionBehavior(...)`。

三个常见误用。一是**在任务外访问 `Mission.Current`**：它为 null，从战役 tick 里调任务方法直接崩。二是**在 `OnTick` 之外改 Agent 集合**：增删 Agent 必须走 `SpawnAgent` / `SpawnMonster` 这类方法，直接改 `AllAgents` 拿不到的是只读列表。三是**在 Behavior 的 `OnMissionTick` 里做重活**：那是每帧调用且不可跳过，`OnFixedMissionTick` 或事件钩子更合适。

## 关键成员

### 单例、状态与配置

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Current` | `public static Mission Current` | 当前任务。任务外为 null |
| `Mission` | `public Mission(MissionInitializerRecord rec, MissionState missionState, bool needsMemoryCleanup)` | 由引擎构造。`needsMemoryCleanup` 控制结束时是否清理 GPU 资源 |
| `CurrentState` | `public Mission.State CurrentState { get; private set; }` | 任务状态机位置 |
| `Mission.State` | `NewlyCreated` / `Initializing` / `Continuing` / `EndingNextFrame` / `Over` | 五态状态机 |
| `MissionEnded` | `public bool MissionEnded` | 是否已结束 |
| `MissionIsEnding` | `public bool MissionIsEnding { get; private set; }` | 是否正在结束 |
| `IsMissionEnding` | `public bool IsMissionEnding` | 与上一条同义的另一个属性，读它判断收尾阶段 |
| `IsFinalized` | `public bool IsFinalized` | 是否已 finalize |
| `IsLoadingFinished` | `public bool IsLoadingFinished` | 场景是否加载完毕 |
| `NeedsMemoryCleanup` | `public bool NeedsMemoryCleanup { get; private set; }` | 是否需要清理显存 |
| `SceneName` | `public string SceneName` | 场景名（关卡标识） |
| `SceneLevels` | `public string SceneLevels` | 场景层级串 |
| `Scene` | `public Scene Scene { get; private set; }` | 场景对象。所有实体都挂在这里 |
| `HasValidTerrainType` | `public bool HasValidTerrainType` | 地形类型是否已确定 |
| `TerrainType` | `public TerrainType TerrainType` | 地形类型 |
| `Mode` | `public MissionMode Mode` | 任务模式（战斗 / 观战 / 部署） |
| `SetMissionMode` | `public void SetMissionMode(MissionMode newMode, bool atStart)` | 切换任务模式。`atStart` 表示「进入」该模式 |
| `CombatType` | `public Mission.MissionCombatType CombatType` | 战斗类型 |
| `SetMissionCombatType` | `public void SetMissionCombatType(Mission.MissionCombatType missionCombatType)` | 设置战斗类型 |
| `Mission.MissionCombatType` | `Combat` / `ArenaCombat` / `NoCombat` | 战斗类型枚举。`NoCombat` 表示不结算伤害 |
| `BattleSizeType` | `public enum BattleSizeType`，值 `Battle` / `Siege` / `SallyOut` | 战役层指定的战斗规模类型 |
| `Mission.BattleSizeQualifier` | `Small` / `Medium` | 战斗规模档位 |
| `IsFieldBattle` / `IsSiegeBattle` / `IsSallyOutBattle` / `IsNavalBattle` / `IsNavalRaidBattle` | 各自 `public bool` | 战场类型判定。分支逻辑用它们而不是自己猜 |
| `MissionTeamAIType` | `public Mission.MissionTeamAITypeEnum MissionTeamAIType { get; set; }` | 队伍 AI 类型，可写 |
| `Mission.MissionTeamAITypeEnum` | `NoTeamAI` / `FieldBattle` / `Siege` / `SallyOut` / `NavalBattle` / `NavalRaid` | 队伍 AI 类型枚举 |
| `CurrentTime` | `public float CurrentTime` | 任务内已过秒数 |
| `IsFastForward` | `public bool IsFastForward` | 是否处于快进 |
| `FixedDeltaTimeMode` | `public bool FixedDeltaTimeMode { get; set; }` | 固定步长模式开关 |
| `FixedDeltaTime` | `public float FixedDeltaTime { get; set; }` | 固定步长步长值 |
| `AllowAiTicking` | `public bool AllowAiTicking = true` | 是否允许 AI tick。调试时置 false 可冻结 AI |
| `PauseAITick` | `public bool PauseAITick` | 是否暂停 AI tick |
| `IsPlayerCloseToAnEnemy` | `public bool IsPlayerCloseToAnEnemy(float distance = 5f)` | 玩家是否靠近敌人。用于触发「背水一战」类效果 |
| `DisableDying` | `public bool DisableDying` | 调试开关：禁用死亡 |
| `ForceNoFriendlyFire` | `public bool ForceNoFriendlyFire` | 调试开关：强制关闭友伤 |
| `IsFriendlyMission` | `public bool IsFriendlyMission = true` | 是否为友方演示任务（不结算） |
| `MaxDamage` | `public const int MaxDamage = 2000` | 单次伤害上限常量 |
| `MaxRuntimeMissionObjects` | `public const int MaxRuntimeMissionObjects = 8191` | 运行时任务对象数量上限常量 |
| `MaxNavMeshId` | `public const int MaxNavMeshId = 1000000` | 动态导航网格 ID 上限常量 |

### 队伍

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Teams` | `public Mission.TeamCollection Teams { get; private set; }` | 全部队伍的集合（继承 `List<Team>`）。判断「某队伍属于哪一方」用 `Team.Side` |
| `AttackerTeam` | `public Team AttackerTeam` | 主攻方 |
| `DefenderTeam` | `public Team DefenderTeam` | 主守方 |
| `AttackerAllyTeam` | `public Team AttackerAllyTeam` | 攻方盟友 |
| `DefenderAllyTeam` | `public Team DefenderAllyTeam` | 守方盟友 |
| `PlayerTeam` | `public Team PlayerTeam` | 玩家所在队伍 |
| `PlayerEnemyTeam` | `public Team PlayerEnemyTeam` | 玩家敌对队伍 |
| `PlayerAllyTeam` | `public Team PlayerAllyTeam` | 玩家友方队伍 |
| `SpectatorTeam` | `public Team SpectatorTeam { get; set; }` | 观战队伍，可写 |
| `RetreatSide` | `public BattleSideEnum RetreatSide { get; private set; }` | 已撤退的一方。判 `None` 表示无人撤退 |
| `GetTeam` | `public static Team GetTeam(TeamSideEnum teamSide)` | 按 `TeamSideEnum` 取队伍 |
| `GetTeamsOfSide` | `public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum side)` | 取某战斗方的全部队伍（含盟友） |
| `GetAgentTeam` | `public static Team GetAgentTeam(IAgentOriginBase troopOrigin, bool isPlayerSide)` | 按来源与阵营推出所属队伍 |
| `Mission.TeamCollection` | `public sealed class TeamCollection : List<Team>`，成员 `Attacker` / `Defender` / `AttackerAlly` / `DefenderAlly` / `Player` / `PlayerEnemy` / `PlayerAlly`、`Add(BattleSideEnum side, uint color = uint.MaxValue, uint color2 = uint.MaxValue, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`、`Find(MBTeam mbTeam)`、`ClearResources()`、`new void Add(Team t)`、`new void Clear()`、事件 `OnPlayerTeamChanged`、构造 `TeamCollection(Mission mission)` | 队伍集合的强类型封装。`Add(BattleSideEnum, ...)` 是自定义任务里造队伍的唯一入口；`new` 修饰的 `Add`/`Clear` 屏蔽了 `List<T>` 版本，绕过它们会漏掉内部维护 |
| `TeamCollection.Add(BattleSideEnum, ...)` 返回值 | `Team` | 返回新建的队伍对象 |

### Agent 与投射物

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MainAgent` | `public Agent MainAgent` | 玩家控制的 Agent。无玩家时为 null |
| `MainAgentServer` | `public Agent MainAgentServer { get; set; }` | 服务端视角的主 Agent |
| `AllAgents` | `public AgentReadOnlyList AllAgents` | 全部 Agent（含尸体与无主坐骑） |
| `Agents` | `public AgentReadOnlyList Agents` | 存活且在场的 Agent |
| `GetMemberCountOfSide` | `public int GetMemberCountOfSide(BattleSideEnum side)` | 某方存活成员数。结算与 AI 都用它 |
| `GetRemovedAgentRatioForSide` | `public float GetRemovedAgentRatioForSide(BattleSideEnum side)` | 某方损失比例（0..1）。判断溃败用它 |
| `FindAgentWithIndex` | `public Agent FindAgentWithIndex(int agentId)` | 按索引取 Agent；不存在返回 null |
| `MissionNetworkHelper.GetAgentFromIndex` | `public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)` | 网络索引取 Agent。`canBeNull` 为 false 时找不到会走断言 |
| `GetClosestEnemyAgent` | `public Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)` | 指定队伍视野内最近的敌人 |
| `GetClosestAllyAgent` | `public Agent GetClosestAllyAgent(Team team, Vec3 position, float radius)` | 最近的友军 |
| `GetNearbyEnemyAgentCount` | `public int GetNearbyEnemyAgentCount(Team team, Vec2 position, float radius)` | 半径内敌人数量 |
| `GetNearbyAllyAgentsCount` | `public int GetNearbyAllyAgentsCount(Vec2 center, float radius, Team team)` | 半径内友军数量 |
| `GetNearbyAllyAgents` | `public MBList<Agent> GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` | 把结果填进传入的列表并返回。复用列表可避免每帧分配 |
| `GetNearbyEnemyAgents` | `public MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` | 同上，敌方 |
| `GetNearbyAgents` | `public MBList<Agent> GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)` | 不分阵营的全部 |
| `GetAveragePositionOfAgents` | `public Vec2 GetAveragePositionOfAgents(List<Agent> agents)` | 一组 Agent 的平均位置 |
| `MountsWithoutRiders` | `public MBReadOnlyList<KeyValuePair<Agent, MissionTime>> MountsWithoutRiders` | 无骑手的坐骑及其出现时间 |
| `AddMountWithoutRider` / `RemoveMountWithoutRider` | `public void AddMountWithoutRider(Agent mount)` / `public void RemoveMountWithoutRider(Agent mount)` | 登记/注销无骑手坐骑 |
| `UpdateMountReservationsAfterRiderMounts` | `public void UpdateMountReservationsAfterRiderMounts(Agent rider, Agent mount)` | 上马后刷新坐骑预约关系 |
| `MissilesList` | `public MBReadOnlyList<Mission.Missile> MissilesList` | 当前所有投射物 |
| `AddCustomMissile` | `public Mission.Missile AddCustomMissile(Agent shooterAgent, MissionWeapon missileWeapon, Vec3 position, Vec3 direction, Mat3 orientation, float baseSpeed, float speed, bool addRigidBody, MissionObject missionObjectToIgnore, int forcedMissileIndex = -1)` | 手工创建投射物。返回 `Mission.Missile`，注意 `baseSpeed` 与 `speed` 两个速度参数含义不同 |
| `RemoveMissileAsClient` | `public void RemoveMissileAsClient(int missileIndex)` | 客户端侧移除投射物 |
| `ClearMissiles` | `public void ClearMissiles()` | 清空全部投射物 |
| `TryGetMissileVelocityFromMissileIndex` | `public bool TryGetMissileVelocityFromMissileIndex(int missileIndex, out Vec3 velocity)` | 取投射物速度；无此索引返回 false |
| `GetMissileCollisionPoint` | `public Vec3 GetMissileCollisionPoint(Vec3 missileStartingPosition, Vec3 missileDirection, float missileSpeed, in WeaponData weaponData)` | 预测弹道命中点 |
| `GetMissileVerticalAimCorrection` | `public static float GetMissileVerticalAimCorrection(Vec3 vecToTarget, float missileStartingSpeed, ref WeaponStatsData weaponStatsData, float airFrictionConstant)` | 计算抛射仰角修正 |
| `GetMissileRange` | `public static float GetMissileRange(float missileStartingSpeed, float heightDifference)` | 抛射射程估算 |
| `SetBowMissileSpeedModifier` / `SetCrossbowMissileSpeedModifier` / `SetThrowingMissileSpeedModifier` / `SetMissileRangeModifier` | 各自 `public void SetXxxModifier(float modifier)` | 各类投射物的速度与射程倍率。调试与玩法平衡用 |
| `PrepareMissileWeaponForDrop` | `public void PrepareMissileWeaponForDrop(int missileIndex)` | 把某发投射物准备成掉落物 |
| `SpawnWeaponAsDropFromMissile` | `public MissionObjectId SpawnWeaponAsDropFromMissile(int missileIndex, MissionObject attachedMissionObject, in MatrixFrame attachLocalFrame, Mission.WeaponSpawnFlags spawnFlags, in Vec3 velocity, in Vec3 angularVelocity, int forcedSpawnIndex)` | 从投射物掉出武器 |
| `SpawnWeaponAsDropFromAgentAux` | `public void SpawnWeaponAsDropFromAgentAux(Agent agent, EquipmentIndex equipmentIndex, ref Vec3 globalVelocity, ref Vec3 globalAngularVelocity, Mission.WeaponSpawnFlags spawnFlags, int forcedSpawnIndex)` | 从 Agent 装备槽掉出武器 |
| `SpawnAttachedWeaponOnCorpse` | `public SpawnedItemEntity SpawnAttachedWeaponOnCorpse(Agent agent, int attachedWeaponIndex, int forcedSpawnIndex)` | 在尸体上附着武器 |
| `SpawnWeaponWithNewEntity` | `public GameEntity SpawnWeaponWithNewEntity(ref MissionWeapon weapon, Mission.WeaponSpawnFlags spawnFlags, MatrixFrame frame)` | 以武器为模板生成实体 |
| `SpawnWeaponWithNewEntityAux` | `public GameEntity SpawnWeaponWithNewEntityAux(MissionWeapon weapon, Mission.WeaponSpawnFlags spawnFlags, MatrixFrame frame, int forcedSpawnIndex, MissionObject attachedMissionObject, bool hasLifeTime, bool spawnedOnACorpse = false)` | 上者的完整重载，额外控制生命周期与尸体场景 |
| `AttachWeaponWithNewEntityToSpawnedWeapon` | `public void AttachWeaponWithNewEntityToSpawnedWeapon(MissionWeapon weapon, SpawnedItemEntity spawnedItem, MatrixFrame attachLocalFrame)` | 把武器实体挂到已有武器上 |
| `SpawnAttachedWeaponOnSpawnedWeapon` | `public void SpawnAttachedWeaponOnSpawnedWeapon(SpawnedItemEntity spawnedWeapon, int attachmentIndex, int forcedSpawnIndex)` | 在已生成武器上挂副武器 |
| `Mission.WeaponSpawnFlags` | `public enum WeaponSpawnFlags : uint` | 生成武器时的位标志组合（是否带刚体、是否附着等） |

### Agent 生成与部署

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SpawnAgent` | `public Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)` | 按构建数据生成 Agent。**唯一合法的 Agent 生成入口** |
| `SpawnMonster` | `public Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)` | 生成野兽/坐骑类 Agent |
| `SpawnMonster` | `public Agent SpawnMonster(EquipmentElement equipmentElement, EquipmentElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)` | 同上，装备形式 |
| `SpawnTroop` | `public Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)` | 按来源生成士兵。参数极多，`formationTroopCount` / `formationTroopIndex` 决定它在阵型里的站位 |
| `ReplaceBotWithPlayer` | `public Agent ReplaceBotWithPlayer(Agent botAgent, MissionPeer missionPeer)` | 把一个 bot 换成玩家操控 |
| `TakeControlOfAgent` | `public void TakeControlOfAgent(Agent agentToTakeControlOf)` | 夺取某个 Agent 的控制权 |
| `CanTakeControlOfAgent` | `public bool CanTakeControlOfAgent(Agent agentToTakeControlOf)` | 是否允许夺取 |
| `SetPlayerCanTakeControlOfAnotherAgentWhenDead` | `public void SetPlayerCanTakeControlOfAnotherAgentWhenDead()` | 允许死亡后继续操控 |
| `CanPlayerTakeControlOfAnotherAgentWhenDead` | `public bool CanPlayerTakeControlOfAnotherAgentWhenDead` | 上一条的开关状态 |
| `DeploymentPlan` | `public IMissionDeploymentPlan DeploymentPlan` | 当前部署计划 |
| `GetDeploymentPlan` | `public bool GetDeploymentPlan<T>(out T deploymentPlan) where T : IMissionDeploymentPlan` | 取指定类型的部署计划；类型不匹配返回 false |
| `OnDeploymentPlanMade` | `public void OnDeploymentPlanMade(Team team, bool isFirstPlan)` | 某队部署计划生成完毕 |
| `IsDeploymentFinished` | `public bool IsDeploymentFinished { get; private set; }` | 部署是否完成 |
| `IsBattleSpawnPathSelectorInitialized` | `public bool IsBattleSpawnPathSelectorInitialized` | 生成路径选择器是否就绪 |
| `HasSpawnPath` | `public bool HasSpawnPath` | 是否有生成路径 |
| `GetInitialSpawnPath` | `public Path GetInitialSpawnPath()` | 初始生成路径 |
| `GetInitialSpawnPathData` | `public SpawnPathData GetInitialSpawnPathData(BattleSideEnum battleSide)` | 某方的初始生成数据 |
| `GetReinforcementPathsDataOfSide` | `public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum battleSide)` | 增援生成路径 |
| `GetSpawnPathFrame` | `public WorldFrame GetSpawnPathFrame(BattleSideEnum battleSide, float pathOffset = 0f, float targetOffset = 0f)` | 生成路径坐标系 |
| `GetTroopSpawnFrameWithIndex` | `public void GetTroopSpawnFrameWithIndex(AgentBuildData buildData, int troopSpawnIndex, int troopSpawnCount, out Vec3 troopSpawnPosition, out Vec2 troopSpawnDirection)` | 算第 `troopSpawnIndex` 个士兵的生成位 |
| `GetFormationSpawnFrame` | `public void GetFormationSpawnFrame(Team team, FormationClass formationClass, bool isReinforcement, out WorldPosition spawnPosition, out Vec2 spawnDirection, bool useDefaultClassIfNotFound = true)` | 算整队阵型的生成坐标系 |
| `GetFormationSpawnPosition` | `public Vec2 GetFormationSpawnPosition(Team team, FormationClass formationClass)` | 阵型生成位置的二维值 |
| `GetFormationSpawnClass` | `public FormationClass GetFormationSpawnClass(Team team, FormationClass formationClass, bool isReinforcement = false)` | 阵型生成时实际使用的兵种分类 |
| `SetFormationPositioningFromDeploymentPlan` | `public void SetFormationPositioningFromDeploymentPlan(Formation formation)` | 按部署计划摆好某阵型 |
| `SetBattleAgentCount` | `public void SetBattleAgentCount(int agentCount)` | 设置战斗规模 |
| `SetInitialAgentCountForSide` | `public void SetInitialAgentCountForSide(BattleSideEnum side, int agentCount)` | 设置某方初始 Agent 数 |
| `ComputeSpawnPathDeploymentOffset` | `public static float ComputeSpawnPathDeploymentOffset(int troopCount, Path path)` | 按人数算部署偏移 |

### 伤害与战斗结果

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `DamageToPlayerMultiplier` | `public float DamageToPlayerMultiplier` | 对玩家造成的伤害倍率 |
| `DamageToFriendsMultiplier` | `public float DamageToFriendsMultiplier` | 对友军造成的伤害倍率 |
| `DamageFromPlayerToFriendsMultiplier` | `public float DamageFromPlayerToFriendsMultiplier` | 玩家对友军造成的伤害倍率 |
| `GetDamageMultiplierOfCombatDifficulty` | `public float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)` | 按战斗难度计算的伤害倍率 |
| `GetShootDifficulty` | `public float GetShootDifficulty(Agent affectedAgent, Agent affectorAgent, bool isHeadShot)` | 命中难度评分。射术类技能生效时读它 |
| `AddCombatLogSafe` | `public void AddCombatLogSafe(Agent attackerAgent, Agent victimAgent, CombatLogData combatLog)` | 安全地写入战斗日志（内部吞掉重复与非法参数） |
| `MissionResult` | `public MissionResult MissionResult { get; private set; }` | 战斗结算结果。任务结束后读它 |
| `KillAgentsOnEntity` | `public void KillAgentsOnEntity(GameEntity entity, Agent destroyerAgent, bool burnAgents)` | 杀死站在某实体上的全部 Agent |
| `KillAgentCheat` | `public void KillAgentCheat(Agent agent)` | 作弊：杀死指定 Agent |
| `KillCheats` | `public bool KillCheats(bool killAll, bool killEnemy, bool killHorse, bool killYourself)` | 作弊批量击杀 |
| `GetUnderAttackTypeOfAgents` | `public static Agent.UnderAttackType GetUnderAttackTypeOfAgents(IEnumerable<Agent> agents, float timeLimit = 3f)` | 一组 Agent 正在受的攻击类型 |

### 寻路与空间查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `RayCastForClosestAgent` | `public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)` | 沿线段找最近的 Agent。返回 null 表示没打到 |
| `RayCastForClosestAgentsLimbs` | `public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)` | 同上并返回命中骨骼索引 |
| `RayCastForGivenAgentsLimbs` | `public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)` | 只检测指定 Agent 是否在射线上 |
| `IsPositionInsideBoundaries` | `public bool IsPositionInsideBoundaries(Vec2 position)` | 是否在软边界内 |
| `IsPositionInsideHardBoundaries` | `public bool IsPositionInsideHardBoundaries(Vec2 position)` | 是否在硬边界内。越界位置会被强推回场内 |
| `IsPositionInsideAnyBlockerNavMeshFace2D` | `public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)` | 是否落在阻挡导航网格上 |
| `IsPositionOnAnyBlockerNavMeshFace` | `public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)` | 三维版本 |
| `GetClosestBoundaryPosition` | `public Vec2 GetClosestBoundaryPosition(Vec2 position)` | 把越界位置拉回边界内 |
| `GetWaterLevelAtPosition` | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)` | 某处水位高度 |
| `GetWaterLevelAtPositionMT` | `public float GetWaterLevelAtPositionMT(Vec2 position, bool useWaterRenderer)` | 多线程版本 |
| `GetStraightPathToTarget` | `public WorldPosition GetStraightPathToTarget(Vec2 targetPosition, WorldPosition startingPosition, float samplingDistance = 1f, bool stopAtObstacle = true)` | 从起点到目标的直线路径 |
| `GetPathBetweenPositions` | `public bool GetPathBetweenPositions(ref NavigationData navData)` | 填充 `NavigationData` 的寻路结果；失败返回 false |
| `SetNavigationFaceCostWithIdAroundPosition` | `public void SetNavigationFaceCostWithIdAroundPosition(int navigationFaceId, Vec3 position, float cost)` | 临时抬高某导航面代价，制造「绕路」效果 |
| `GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition` | `public WorldPosition GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(Vec2 directionTowards, WorldPosition originalPosition, ref float positionPenalty)` | 给无导航网格或越界的位置找替代落点 |
| `GetNextDynamicNavMeshIdStart` | `public int GetNextDynamicNavMeshIdStart()` | 分配下一个动态导航网格 ID 起点 |
| `IsOrderPositionAvailable` | `public bool IsOrderPositionAvailable(in WorldPosition orderPosition, Team team)` | 某命令位置对某队是否可用 |
| `IsFormationUnitPositionAvailable` | `public bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)` | 阵型单位位置是否可用 |
| `IsFormationUnitPositionAvailableMT` | `public bool IsFormationUnitPositionAvailableMT(ref WorldPosition formationPosition, ref WorldPosition unitPosition, ref WorldPosition nearestAvailableUnitPosition, float manhattanDistance, Team team)` | 多线程版本，额外回传最近的可用位置 |
| `GetRandomPositionAroundPoint` | `public Vec3 GetRandomPositionAroundPoint(Vec3 center, float minDistance, float maxDistance, bool nearFirst = false)` | 在中心附近取随机点 |
| `GetWeightedPointOfEnemies` | `public Vec2 GetWeightedPointOfEnemies(Agent agent, Vec2 basePoint)` | 以敌人分布加权的参考点 |
| `ComputeSpawnPathDeploymentOffset`（部署） | 见上文 | 不重复列 |

### 逃跑位置与地形

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetFleePositionsForSide` | `public MBReadOnlyList<FleePosition> GetFleePositionsForSide(BattleSideEnum side)` | 某方的逃跑点集合 |
| `AddFleePosition` | `public void AddFleePosition(FleePosition fleePosition)` | 追加一个逃跑点 |
| `GetClosestFleePositionForAgent` | `public WorldPosition GetClosestFleePositionForAgent(Agent agent)` | 某个 Agent 最近的逃跑点 |
| `GetClosestFleePositionForFormation` | `public WorldPosition GetClosestFleePositionForFormation(Formation formation)` | 某阵型的逃跑点 |
| `FindBestDefendingPosition` | `public WorldPosition FindBestDefendingPosition(WorldPosition enemyPosition, WorldPosition defendedPosition)` | 找出最优防守位 |
| `GetBestSlopeTowardsDirection` | `public WorldPosition GetBestSlopeTowardsDirection(ref WorldPosition centerPosition, float halfSize, ref WorldPosition referencePosition)` | 朝某方向坡度最好的位置 |
| `GetBestSlopeAngleHeightPosForDefending` | `public WorldPosition GetBestSlopeAngleHeightPosForDefending(WorldPosition enemyPosition, WorldPosition defendingPosition, int sampleSize, float distanceRatioAllowedFromDefendedPos, float distanceSqrdAllowedFromBoundary, float cosinusOfBestSlope, float cosinusOfMaxAcceptedSlope, float minSlopeScore, float maxSlopeScore, float excessiveSlopePenalty, float nearConeCenterRatio, float nearConeCenterBonus, float heightDifferenceCeiling, float maxDisplacementPenalty)` | 完整参数的防守位评分。参数多到不该手写，通常由 AI 模型包一层 |
| `FindPositionWithBiggestSlopeTowardsDirectionInSquare` | `public WorldPosition FindPositionWithBiggestSlopeTowardsDirectionInSquare(ref WorldPosition center, float halfSize, ref WorldPosition referencePosition)` | 方框范围内找最优位 |

### 相机

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetCameraFrame` | `public MatrixFrame GetCameraFrame()` | 相机当前坐标系。计算弹道与命中时需要它 |
| `SetCameraFrame` | `public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor)` | 覆盖相机坐标系 |
| `SetCameraFrame` | `public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor, ref Vec3 attenuationPosition)` | 额外指定声音衰减位置 |
| `CameraIsFirstPerson` | `public bool CameraIsFirstPerson` | 当前是否第一人称 |
| `CameraAddedDistance` | `public static float CameraAddedDistance` | 相机额外拉远距离，静态可读 |
| `GetFirstPersonFov` | `public static float GetFirstPersonFov()` | 第一人称视场角 |
| `GetMainAgentMaxCameraZoom` | `public float GetMainAgentMaxCameraZoom()` | 主 Agent 允许的最大缩放 |
| `ResetFirstThirdPersonView` | `public void ResetFirstThirdPersonView()` | 恢复默认视角 |
| `CustomCameraLocalOffset` / `CustomCameraLocalOffset2` / `CustomCameraTargetLocalOffset` / `CustomCameraGlobalOffset` / `CustomCameraLocalRotationalOffset` | 各自 `{ get; private set; }`，类型 `Vec3` | 相机各段偏移。只能通过对应 `SetCustomCameraXxx` 修改 |
| `CustomCameraIgnoreCollision` | `public bool CustomCameraIgnoreCollision { get; private set; }` | 相机是否忽略碰撞 |
| `CustomCameraFovMultiplier` | `public float CustomCameraFovMultiplier { get; private set; }` | 视场角倍率，初值 1f |
| `CustomCameraFixedDistance` | `public float CustomCameraFixedDistance { get; private set; }` | 固定相机距离，初值 `float.MinValue` 表示未设置 |
| `IgnoredEntityForCamera` | `public GameEntity IgnoredEntityForCamera { get; private set; }` | 相机忽略碰撞的实体（通常是玩家自己的 Agent） |
| `ListenerAndAttenuationPosBlendFactor` | `public float ListenerAndAttenuationPosBlendFactor { get; private set; }` | 听者位置与衰减位置的混合系数 |
| `SetCustomCameraLocalOffset` / `SetCustomCameraTargetLocalOffset` / `SetCustomCameraLocalOffset2` / `SetCustomCameraLocalRotationalOffset` / `SetCustomCameraGlobalOffset` | 各自 `public void SetCustomCameraXxx(Vec3 ...)` | 对应的写入方法 |
| `SetCustomCameraFovMultiplier` | `public void SetCustomCameraFovMultiplier(float newFovMultiplier)` | 设置视场角倍率 |
| `SetCustomCameraFixedDistance` | `public void SetCustomCameraFixedDistance(float distance)` | 固定相机距离 |
| `SetIgnoredEntityForCamera` | `public void SetIgnoredEntityForCamera(GameEntity ignoredEntity)` | 设置相机忽略的实体 |
| `SetCustomCameraIgnoreCollision` | `public void SetCustomCameraIgnoreCollision(bool ignoreCollision)` | 设置是否忽略碰撞 |
| `SetListenerAndAttenuationPosBlendFactor` | `public void SetListenerAndAttenuationPosBlendFactor(float factor)` | 设置混合系数 |

### 场景对象与实体

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MissionObjects` | `public MBReadOnlyList<MissionObject> MissionObjects` | 全部任务对象（含未激活的） |
| `ActiveMissionObjects` | `public MBReadOnlyList<MissionObject> ActiveMissionObjects` | 已激活的任务对象 |
| `AddActiveMissionObject` | `public void AddActiveMissionObject(MissionObject missionObject)` | 登记并立即激活一个任务对象 |
| `ActivateMissionObject` | `public void ActivateMissionObject(MissionObject missionObject)` | 激活任务对象（启用其实体与脚本） |
| `DeactivateMissionObject` | `public void DeactivateMissionObject(MissionObject missionObject)` | 停用任务对象 |
| `OnMissionObjectRemoved` | `public bool OnMissionObjectRemoved(MissionObject missionObject, int removeReason)` | 任务对象被移除时的回调。返回 true 表示已处理 |
| `CreateMissionObjectFromPrefab` | `public MissionObject CreateMissionObjectFromPrefab(string prefab, MatrixFrame frame, bool hasCustomRestOffset, float restOffset, Action<GameEntity> actionAppliedBeforeScriptInitialization)` | 从 prefab 创建任务对象。`actionAppliedBeforeScriptInitialization` 在脚本初始化前施加 |
| `GetActiveEntitiesWithScriptComponentOfType` | `public IEnumerable<WeakGameEntity> GetActiveEntitiesWithScriptComponentOfType<T>()` | 取所有挂了 `T` 脚本组件的活动实体 |
| `AddDynamicallySpawnedMissionObjectInfo` | `public void AddDynamicallySpawnedMissionObjectInfo(Mission.DynamicallyCreatedEntity entityInfo)` | 登记运行时生成的对象 |
| `AddedEntitiesInfo` | `public MBReadOnlyList<Mission.DynamicallyCreatedEntity> AddedEntitiesInfo` | 运行时生成对象的记录 |
| `Mission.DynamicallyCreatedEntity` | `public class`，公开字段 `Prefab` / `ObjectId` / `Frame` / `ChildObjectIds`，构造 `DynamicallyCreatedEntity(string prefab, MissionObjectId objectId, MatrixFrame frame, ref List<MissionObjectId> childObjectIds)` | 运行时生成对象的描述 |
| `GetFreeRuntimeMissionObjectId` | `public int GetFreeRuntimeMissionObjectId()` | 分配一个空闲的运行时对象 ID。上限 `MaxRuntimeMissionObjects` |
| `GetFreeSceneMissionObjectId` | `public int GetFreeSceneMissionObjectId()` | 分配一个空闲的场景对象 ID |
| `Boundaries` | `public Mission.MBBoundaryCollection Boundaries { get; private set; }` | 战场边界集合（实现 `IDictionary<string, ICollection<Vec2>>`） |
| `Mission.MBBoundaryCollection` | `public class`，成员 `Add(string name, ICollection<Vec2> points)` / `Add(string name, ICollection<Vec2> points, bool isAllowanceInside)` / `ContainsKey` / `Remove` / `TryGetValue` / `Keys` / `Values` / `this[string name]` / `Count` / `IsReadOnly` / `GetBoundaryRadius(string name)` / `GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)` / `Clear` / `CopyTo` / `Contains` / `Remove(KeyValuePair<...>)` / `Add(KeyValuePair<...>)` / `GetEnumerator` / 事件 `CollectionChanged` | 边界集合。`isAllowanceInside` 决定这条边界是「内圈允许区」还是「外圈禁止区」 |
| `OnObjectDisabled` | `public void OnObjectDisabled(DestructableComponent destructionComponent)` | 可破坏组件被摧毁 |
| `AddTimerToDynamicEntity` | `public void AddTimerToDynamicEntity(GameEntity gameEntity, float timeToKill = 10f)` | 给运行时实体加自动销毁计时器 |
| `OnObjectUsed` / `OnObjectStoppedBeingUsed` | `public void OnObjectUsed(Agent userAgent, UsableMissionObject usableGameObject)` / `public void OnObjectStoppedBeingUsed(...)` | 可用对象被使用/停止使用 |
| `HasSceneMapPatch` / `GetPatchSceneEncounterPosition` / `GetPatchSceneEncounterDirection` | `public bool HasSceneMapPatch()` / `public bool GetPatchSceneEncounterPosition(out Vec3 position)` / `public bool GetPatchSceneEncounterDirection(out Vec2 direction)` | 补丁场景（mod 自定义战场）的接触点位置与朝向 |
| `IsTeleportingAgents` | `public bool IsTeleportingAgents { get; set; }` | 是否正在传送 Agent。传送期间逻辑要暂停 |
| `RemoveSpawnedItemsAndMissiles` | `public void RemoveSpawnedItemsAndMissiles()` | 清掉生成物与投射物 |
| `ClearCorpses` | `public void ClearCorpses(bool isMissionReset)` | 清除尸体。`isMissionReset` 表示这是任务重置而非结束 |
| `ClearUnreferencedResources` | `public void ClearUnreferencedResources(bool forceClearGPUResources)` | 回收未被引用的资源 |
| `ClearAgentActions` | `public void ClearAgentActions()` | 清空所有 Agent 的当前动作 |

### Behavior 与事件

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MissionBehaviors` | `public List<MissionBehavior> MissionBehaviors { get; }` | 已注册的全部 Behavior 列表 |
| `MissionLogics` | `public List<MissionLogic> MissionLogics { get; }` | 其中 `BehaviorType == Logic` 的部分 |
| `AddMissionBehavior` | `public void AddMissionBehavior(MissionBehavior missionBehavior)` | 注册 Behavior。**会立刻调 `OnCreated()`**，且不检查重复 |
| `GetMissionBehavior` | `public T GetMissionBehavior<T>() where T : class, IMissionBehavior` | 取指定类型 Behavior；找不到返回 null |
| `HasMissionBehavior` | `public bool HasMissionBehavior<T>() where T : MissionBehavior` | 是否已注册某类型 |
| `RemoveMissionBehavior` | `public void RemoveMissionBehavior(MissionBehavior missionBehavior)` | 移除并触发 `OnRemoveBehavior()` |
| `InitializeStartingBehaviors` | `public void InitializeStartingBehaviors(MissionLogic[] logicBehaviors, MissionBehavior[] otherBehaviors, MissionNetwork[] networkBehaviors)` | 批量初始化起始 Behavior，按数组类别分别归位 |
| `OnBeforeAgentRemoved` | `public event OnBeforeAgentRemovedDelegate OnBeforeAgentRemoved` | Agent 被移除前 |
| `IsFormationUnitPositionAvailable_AdditionalCondition` | `public event Func<WorldPosition, Team, bool> IsFormationUnitPositionAvailable_AdditionalCondition` | 给阵型占位判定追加条件 |
| `CanAgentRout_AdditionalCondition` | `public event Func<Agent, bool> CanAgentRout_AdditionalCondition` | 给「Agent 能否溃逃」追加条件 |
| `OnAddSoundAlarmFactorToAgents` | `public event OnAddSoundAlarmFactorToAgentsDelegate OnAddSoundAlarmFactorToAgents` | 向周边 Agent 传播警报 |
| `IsAgentInteractionAllowed_AdditionalCondition` | `public event Func<bool> IsAgentInteractionAllowed_AdditionalCondition` | 追加交互许可条件 |
| `OnMainAgentChanged` | `public event OnMainAgentChangedDelegate OnMainAgentChanged` | 主 Agent 变化 |
| `OnCameraShakeTriggered` | `public event OnCameraShakeTriggeredDelegate OnCameraShakeTriggered` | 相机震动 |
| `OnComputeTroopBodyProperties` | `public event ComputeTroopBodyPropertiesDelegate OnComputeTroopBodyProperties` | 自定义士兵体型计算 |
| `GetAgentTroopClass_Override` | `public event Func<BattleSideEnum, BasicCharacterObject, FormationClass> GetAgentTroopClass_Override` | 覆写兵种到阵型的映射 |
| `DeploymentFinishedEvent` | `public event Action DeploymentFinishedEvent` | 部署完成 |
| `OnItemPickUp` / `OnItemDrop` | `public event Action<Agent, SpawnedItemEntity> OnItemPickUp` / `OnItemDrop` | 拾取/丢弃场景物品 |
| `FormationCaptainChanged` | `public event Action<Formation> FormationCaptainChanged` | 阵型队长变化 |
| `GetOverriddenFleePositionForAgent` | `public event Func<Agent, WorldPosition?> GetOverriddenFleePositionForAgent` | 覆写逃跑位置。返回 null 表示用默认 |
| `AreOrderGesturesEnabled_AdditionalCondition` | `public event Func<bool> AreOrderGesturesEnabled_AdditionalCondition` | 追加「允许手势下令」条件 |
| `IsBattleInRetreatEvent` | `public event Func<bool> IsBattleInRetreatEvent` | 覆写「战斗是否处于撤退状态」判定 |
| `OnMissileRemovedEvent` | `public event Action<int> OnMissileRemovedEvent` | 投射物被移除，参数是槽位索引 |
| `OnMissionReset` | `public event PropertyChangedEventHandler OnMissionReset` | 任务被重置 |
| `AddListener` / `RemoveListener` | `public void AddListener(IMissionListener listener)` / `public void RemoveListener(IMissionListener listener)` | 注册任务监听器。也要对称退订 |
| `Mission.OnBeforeAgentRemovedDelegate` | `public delegate void OnBeforeAgentRemovedDelegate(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | `OnBeforeAgentRemoved` 的委托签名 |
| `Mission.OnAddSoundAlarmFactorToAgentsDelegate` | `public delegate void OnAddSoundAlarmFactorToAgentsDelegate(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)` | 警报传播委托 |
| `Mission.OnMainAgentChangedDelegate` | `public delegate void OnMainAgentChangedDelegate(Agent oldAgent)` | 主 Agent 变化委托 |
| `Mission.OnCameraShakeTriggeredDelegate` | `public delegate void OnCameraShakeTriggeredDelegate(in Vec3 position, float radius)` | 相机震动委托 |
| `Mission.ComputeTroopBodyPropertiesDelegate` | `public delegate BodyProperties ComputeTroopBodyPropertiesDelegate(AgentBuildData agentBuildData, BasicCharacterObject characterObject, Equipment equipment, int seed)` | 体型计算委托 |
| `IsAgentInteractionAllowed` | `public bool IsAgentInteractionAllowed()` | 当前是否允许 Agent 交互（合并事件条件） |
| `IsOrderGesturesEnabled` | `public bool IsOrderGesturesEnabled()` | 是否允许手势下令 |
| `CanAgentRout` | `public bool CanAgentRout(Agent agent)` | 某 Agent 能否溃逃 |
| `OnAgentInteraction` | `public void OnAgentInteraction(Agent requesterAgent, Agent targetAgent, sbyte agentBoneIndex)` | Agent 间骨骼交互 |
| `OnAgentFleeing` / `OnAgentPanicked` | `public void OnAgentFleeing(Agent agent)` / `public void OnAgentPanicked(Agent agent)` | Agent 逃跑/恐慌 |
| `OnAgentMount` / `OnAgentDismount` | `public void OnAgentMount(Agent agent)` / `public void OnAgentDismount(Agent agent)` | 上马/下马 |
| `AgentLookingAtAgent` | `public bool AgentLookingAtAgent(Agent agent1, Agent agent2)` | 一号 Agent 是否在看二号 |

### 流程与时间

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Initialize` | `public void Initialize()` | 初始化。由引擎调用 |
| `AfterStart` | `public void AfterStart()` | 可开打 |
| `OnTick` | `public void OnTick(float dt, float realDt, bool updateCamera, bool doAsyncAITick)` | 主 tick。mod 不应手动调 |
| `TickAgentsAndTeamsAsync` | `public void TickAgentsAndTeamsAsync(float dt)` | 异步 AI tick |
| `TickAgentsAndTeamsImp` | `public void TickAgentsAndTeamsImp(float dt, bool tickPaused)` | Agent 与队伍的同步 tick |
| `AddTickAction` / `AddTickActionMT` | `public void AddTickAction(Mission.MissionTickAction action, Agent agent, int param1, int param2)` / `AddTickActionMT(...)` | 排队一个 tick 动作。`MissionTickAction` 枚举值含摘武器、收武器、丢物品、登记溺毙/烧伤 |
| `Mission.MissionTickAction` | `TryToSheathWeaponInHand` / `RemoveEquippedWeapon` / `TryToWieldWeaponInSlot` / `DropItem` / `RegisterDrownBlow` / `RegisterBurnBlow` | 可排队的动作枚举 |
| `ResetMission` | `public void ResetMission()` | 重置任务到初始状态（不重建对象） |
| `OnEndMissionRequest` | `public void OnEndMissionRequest()` | 请求结束任务 |
| `EndMission` | `public void EndMission()` | 进入结束流程 |
| `OnEndMissionResult` | `public void OnEndMissionResult()` | 结算结果处理完毕 |
| `GetMissionEndTimeInSeconds` | `public float GetMissionEndTimeInSeconds()` | 计划的结束时间点 |
| `GetMissionEndTimerValue` | `public float GetMissionEndTimerValue()` | 结束倒计时当前值 |
| `RetreatMission` | `public void RetreatMission()` | 触发撤退 |
| `SurrenderMission` | `public void SurrenderMission()` | 触发投降 |
| `CheckIfBattleInRetreat` | `public bool CheckIfBattleInRetreat()` | 是否处于撤退状态 |
| `JoinEnemyTeam` | `public void JoinEnemyTeam()` | 把玩家队伍并入敌方 |
| `SetFastForwardingFromUI` | `public void SetFastForwardingFromUI(bool fastForwarding)` | 由 UI 触发的快进 |
| `SkipForwardMissionReplay` | `public void SkipForwardMissionReplay(float startTime, float endTime)` | 回放快进 |
| `OnDeploymentFinished` / `OnAfterDeploymentFinished` | `public void OnDeploymentFinished()` / `public void OnAfterDeploymentFinished()` | 部署完成两阶段回调 |
| `OnTeamDeployed` / `OnBattleSideDeployed` | `public void OnTeamDeployed(Team team)` / `public void OnBattleSideDeployed(BattleSideEnum side)` | 单队/单方部署完成 |
| `OnFormationCaptainChanged` | `public void OnFormationCaptainChanged(Formation formation)` | 阵型队长变化 |
| `OnMissionStateActivate` / `OnMissionStateDeactivate` / `OnMissionStateFinalize` | `public void OnMissionStateActivate()` / `OnMissionStateDeactivate()` / `public void OnMissionStateFinalize(bool forceClearGPUResources)` | `MissionState` 三段生命周期 |
| `OnRenderingStarted` | `public void OnRenderingStarted()` | 首次渲染开始 |
| `ShowInMissionLoadingScreen` | `public void ShowInMissionLoadingScreen(int durationInSecond, Action onLoadingEndedAction)` | 借用任务加载画面显示一段提示 |
| `ClearSceneTimerElapsedTime` | `public float ClearSceneTimerElapsedTime` | 场景清理计时 |
| `ConversationCharacterChanged` | `public void ConversationCharacterChanged()` | 对话中的角色发生变化 |
| `GetAverageFps` | `public float GetAverageFps()` | 任务内平均帧率 |
| `GetFallAvoidSystemActive` / `SetFallAvoidSystemActive` | `public bool GetFallAvoidSystemActive()` / `public void SetFallAvoidSystemActive(bool fallAvoidActive)` | 防跌落系统开关。地形边缘有悬崖时要确保它开着 |
| `GetBiggestAgentCollisionPadding` | `public float GetBiggestAgentCollisionPadding()` | 最大碰撞半径，用于射线粗细估算 |
| `MissionTimeTracker` | `public MissionTimeTracker MissionTimeTracker { get; private set; }` | 任务内计时器集合 |
| `Recorder` | `public MissionRecorder Recorder` | 任务录制器，回放与调试用 |
| `AddTimeSpeedRequest` | `public void AddTimeSpeedRequest(Mission.TimeSpeedRequest request)` | 申请改变任务时间流速 |
| `RemoveTimeSpeedRequest` | `public void RemoveTimeSpeedRequest(int timeSpeedRequestID)` | 撤销流速申请 |
| `GetRequestedTimeSpeed` | `public bool GetRequestedTimeSpeed(int timeSpeedRequestID, out float requestedTime)` | 查询某个流速申请 |
| `Mission.TimeSpeedRequest` | `public struct`，成员 `RequestedTimeSpeed` / `RequestID` / 构造 `TimeSpeedRequest(float requestedTime, int requestID)` | 流速申请的数据载体 |
| `SetLastMovementKeyPressed` | `public void SetLastMovementKeyPressed(Agent.MovementControlFlag lastMovementKeyPressed)` | 设置上次按下的移动键 |
| `SetRandomDecideTimeOfAgentsWithIndices` | `public void SetRandomDecideTimeOfAgentsWithIndices(int[] agentIndices, float? minAIReactionTime = null, float? maxAIReactionTime = null)` | 打乱指定 Agent 的 AI 反应时间。用于制造不同步的战场节奏 |

### 声音与其它

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MakeSound` | `public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2)` | 播放音效 |
| `MakeSound` | `public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2, ref SoundEventParameter parameter)` | 上者重载，可回写声音参数 |
| `MakeSoundOnlyOnRelatedPeer` | `public void MakeSoundOnlyOnRelatedPeer(int soundIndex, Vec3 position, int relatedAgent)` | 只对指定 Agent 的所属端播放 |
| `AddParticleSystemBurstByName` | `public void AddParticleSystemBurstByName(string particleSystem, MatrixFrame frame, bool synchThroughNetwork)` | 播一次粒子爆发 |
| `RecalculateBody` | `public void RecalculateBody(ref WeaponData weaponData, ItemComponent itemComponent, WeaponDesign craftedWeaponData, ref Mission.WeaponSpawnFlags spawnFlags)` | 按武器设计重算外观模型 |
| `OnEquipItemsFromSpawnEquipmentBegin` / `OnEquipItemsFromSpawnEquipment` | `public void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType)` / `(Agent, Agent.CreationType)` | 生成时装备物品的两阶段回调 |
| `GetExtraEquipmentElementsForCharacter` | `public List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)` | 取得某人物的附加装备元素（武器/箭矢等） |
| `DoesMissionRequireCivilianEquipment` | `public bool DoesMissionRequireCivilianEquipment` | 任务是否需要民用装备（vs 战斗装备） |
| `MusicCulture` | `public BasicCultureObject MusicCulture` | 音乐文化 |
| `AgentVisualCreator` | `public IAgentVisualCreator AgentVisualCreator` | Agent 视觉创建器，替换外观实现 |
| `MissionCloseTimeAfterFinish` | `public float MissionCloseTimeAfterFinish = 30f` | 结束后自动关闭任务的等待秒数 |
| `NextCheckTimeEndMission` | `public float NextCheckTimeEndMission = 10f` | 下一次检查是否结束的时间 |
| `NumOfFormationsSpawnedTeamOne` / `NumOfFormationsSpawnedTeamTwo` | 各自 `public int` | 两队已生成的阵型计数 |
| `DamageToPlayerMultiplier` 附近字段 | 见上文伤害段 | 不重复列 |
| `IsOrderMenuOpen` / `IsTransferMenuOpen` / `IsInPhotoMode` | 各自 `public bool` | UI 状态：命令菜单、传送菜单、拍照模式 |
| `IsMainAgentObjectInteractionEnabled` / `IsMainAgentItemInteractionEnabled` | 各自 `public bool` | 主 Agent 是否可与场景物体/物品交互 |
| `IsInventoryAccessAllowed` / `IsInventoryAccessible` / `IsQuestScreenAccessAllowed` / `IsQuestScreenAccessible` / `IsCharacterWindowAccessAllowed` / `IsCharacterWindowAccessible` / `IsPartyWindowAccessAllowed` / `IsPartyWindowAccessible` / `IsKingdomWindowAccessAllowed` / `IsKingdomWindowAccessible` / `IsClanWindowAccessAllowed` / `IsClanWindowAccessible` / `IsEncyclopediaWindowAccessAllowed` / `IsEncyclopediaWindowAccessible` / `IsBannerWindowAccessAllowed` / `IsBannerWindowAccessible` | 各自 `public bool`（`Accessible` 侧是 `{ get; private set; }`） | 任务中各类界面是否允许访问。`Allowed` 是策略，`Accessible` 是当前实际状态 |
| `FocusableObjectInformationProvider` | `public MissionFocusableObjectInformationProvider FocusableObjectInformationProvider { get; private set; }` | 可聚焦对象的信息提供器 |
| `GetDamageMultiplierOfCombatDifficulty` / `GetShootDifficulty` | 见上文伤害段 | 难度相关的两个计算入口，不重复列 |

### 调试与作弊命令

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetDebugAgent` / `SetDebugAgent` | `public int GetDebugAgent()` / `public void SetDebugAgent(int index)` | 当前调试选中的 Agent 索引 |
| `AddAiDebugText` | `public void AddAiDebugText(string str)` | 在 AI 调试面板追加一行 |
| `SetReportStuckAgentsMode` | `public void SetReportStuckAgentsMode(bool value)` | 卡住 Agent 上报模式 |
| `SetCloseProximityWaveSoundsEnabled` | `public void SetCloseProximityWaveSoundsEnabled(bool value)` | 近距离浪声音效开关 |
| `ForceDisableOcclusion` | `public void ForceDisableOcclusion(bool value)` | 强制关闭遮挡剔除。调试穿墙用 |
| `CanPhysicsCollideBetweenTwoEntities` | `public bool CanPhysicsCollideBetweenTwoEntities(UIntPtr entity0Ptr, UIntPtr entity1Ptr)` | 两个原生实体之间是否会碰撞。参数是原生指针，只能从引擎侧调用 |
| `MakeEnemiesFleeCheat` / `MakeTeamFleeCheat` | `public static string MakeEnemiesFleeCheat(List<string> strings)` / `MakeTeamFleeCheat(List<string> strings)` | 控制台作弊：让敌人/整队逃跑，返回写回文本 |
| `KillNAllies` / `KillAllAllies` | `public static string KillNAllies(List<string> strings)` / `KillAllAllies(List<string> strings)` | 控制台作弊：杀若干/全部友军 |
| `KillAgent` | `public static string KillAgent(List<string> strings)` | 控制台作弊：杀指定 Agent |
| `ToggleDisableDying` / `ToggleDisableDyingTeam` | `public static string ToggleDisableDying(List<string> strings)` / `ToggleDisableDyingTeam(List<string> strings)` | 控制台作弊：切换免死 |
| `IncreaseBatteringRamSpeeds` / `IncreaseSiegeTowerSpeed` | `public static string IncreaseBatteringRamSpeeds(List<string> strings)` / `IncreaseSiegeTowerSpeed(List<string> strings)` | 控制台作弊：加速攻城器械 |
| `LoadParamsDebug` | `public static string LoadParamsDebug(List<string> strings)` | 控制台：加载调试参数 |
| `EnableSpeedAdjustmentCommand` | `public static string EnableSpeedAdjustmentCommand(List<string> strings)` | 控制台：开关速度调整 |
| `SetFacialAnimToAgent` | `public static string SetFacialAnimToAgent(List<string> strings)` | 控制台：设置面部动画 |
| `SetMissionCorpseFadeOutTimeInSeconds` | `public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)` | 设置尸体淡出时间 |
| `GetCurrentVolumeGeneratorVersion` | `public static int GetCurrentVolumeGeneratorVersion()` | 音量生成器版本号 |

### 嵌套类型

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Mission.Missile` | `public class Missile : MBMissile`，成员 `Entity` / `Weapon` / `ShooterAgent` / `MissionObjectToIgnore` / `AlreadyHitEntityToIgnore` / 构造 `Missile(Mission mission, int index, GameEntity entity, Agent shooterAgent, MissionWeapon weapon, MissionObject missionObjectToIgnore)` / `CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)` / `CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)` / `PassThroughEntity(GameEntity entity)` | 单发投射物。`PassThroughEntity` 用于「穿甲不生效」的弹种 |
| `Mission.MissileCollisionReaction` | `Invalid = -1` / `Stick` / `PassThrough` / `BounceBack` / `BecomeInvisible` / `Count` | 弹丸碰撞反应枚举。`Count` 是哨兵值 |
| `Mission.SpectatorData` | `public struct`，成员 `AgentToFollow` / `IAgentVisual AgentVisualToFollow` / `SpectatorCameraTypes CameraType` / 构造 `SpectatorData(Agent, IAgentVisual, SpectatorCameraTypes)` | 观战相机跟随信息 |
| `Mission.NetworkHelper`（`MissionNetworkHelper`） | `public static class`，成员 `GetAgentFromIndex(int, bool canBeNull = false)` / `GetMBTeamFromTeamIndex(int)` / `GetTeamFromTeamIndex(int)` / `GetMissionObjectFromMissionObjectId(MissionObjectId)` / `GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage)` | 网络索引与运行时对象的映射。多人相关逻辑走它 |
| `Mission.BattleSizeQualifier` | `Small` / `Medium` | 战斗规模档位 |

## 真实示例

```csharp
public class LastStand : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.CurrentState != Mission.State.Continuing)
        {
            return;
        }

        BattleSideEnum side = mission.PlayerTeam.Side;
        float aliveRatio = 1f - mission.GetRemovedAgentRatioForSide(side);
        if (aliveRatio > 0.2f)
        {
            return;
        }

        // 阵型层面的强化，而不是逐个改 Agent
        MBList<Formation> formations = mission.PlayerTeam.FormationsIncludingEmpty;
        for (int i = 0; i < formations.Count; i++)
        {
            Formation formation = formations[i];
            if (formation.CountOfUnits > 0)
            {
                formation.SetFiringOrder(FiringOrder.FiringOrderHoldYourFire);
                formation.SetRidingOrder(RidingOrder.RidingOrderDismount);
            }
        }
    }

    public override void OnAgentDeleted(Agent affectedAgent)
    {
        // 实体已销毁，只做记账
        Debug.Print("[LastStand] agent deleted: " + affectedAgent.Index);
    }
}
```

注册与取回：

```csharp
Mission mission = Mission.Current;
if (!mission.HasMissionBehavior<LastStand>())
{
    mission.AddMissionBehavior(new LastStand());
}

LastStand behavior = mission.GetMissionBehavior<LastStand>();
if (behavior != null)
{
    Debug.Print("[LastStand] active");
}
```

## 风险与边界

- **sealed + 继承 `DotNetObject`**：不能派生，且基类带原生指针语义。所有扩展走 `MissionBehavior`。
- **`Mission.Current` 为 null**：战役 tick、菜单回调、异步任务里访问都会崩。所有 `Mission.Current.X` 的调用点都要么保证在任务内，要么判空。
- **`AddMissionBehavior` 不去重**：注册两次会让所有钩子跑两遍。挂载前用 `HasMissionBehavior<T>()` 检查。
- **`AddMissionBehavior` 会立刻调 `OnCreated()`**：此时 `Mission` 属性已注入，但场景尚未建好。在 `OnCreated` 里访问 `Scene` 或 Agent 集合会拿到不完整数据。
- **Agent 只读集合**：`AllAgents` / `Agents` 是 `AgentReadOnlyList`。增删 Agent 只能走 `SpawnAgent` / `SpawnMonster` / `SpawnTroop`。
- **Agent 引用会失效**：`OnAgentDeleted` 之后引用指向已销毁实体。之后读它的属性会跨进 native 未定义行为。
- **投射物索引会复用**：`MissilesList` 的索引在投射物移除后会被新投射物占用，`OnMissileRemovedEvent` 的索引不能当长期标识。
- **围城与战斗类型判定不可逆**：`IsSiegeBattle` 等由战役层决定，`SetMissionMode` 不能把野战变成攻城。
- **相机偏移要成组设置**：只调 `SetCustomCameraLocalOffset` 而不调 `SetCustomCameraTargetLocalOffset` 会让相机与注视点错位，表现为镜头抽搐。
- **`CanPhysicsCollideBetweenTwoEntities` 收原生指针**：从托管层传普通对象会直接崩，只在引擎侧调用。
- **`TimeSpeedRequest` 必须成对**：`AddTimeSpeedRequest` 与 `RemoveTimeSpeedRequest` 不配对会让任务时间流速永久改变。
- **调试开关影响所有玩家**：`DisableDying`、`ForceNoFriendlyFire`、`AllowAiTicking`、`TrueSight` 之类的公开字段不要留到发布版。
- **主线程与 native 亲和**：`GetWaterLevelAtPositionMT` 名字带 MT，但绝大多数成员只能在任务主循环调用；后台线程触碰实体是未定义行为。
- **`DotNetObject` 的生命周期**：`Mission` 销毁后仍持有它会在 GC 阶段触发原生资源问题，不要把任务对象存进跨任务的静态缓存。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/`。1.4.6 相对它新增了 `GetBestSlopeAngleHeightPosForDefending`（完整参数的防守位评分）、`GetPatchSceneEncounterPosition` / `GetPatchSceneEncounterDirection`（补丁场景接触点）、`AddParticleSystemBurstByName`、`SetLastMovementKeyPressed` 这几项，并把 `GetFormationSpawnClass`、`SetCustomCameraLocalOffset2` 等成员补齐。核心的 `Current`、`AddMissionBehavior`、`GetMissionBehavior<T>`、`Teams`、`PlayerTeam`、`AllAgents`、`MissilesList`、`AddCustomMissile`、`RetreatMission` / `SurrenderMission` / `EndMission` 跨版本一致。

## 依赖关系

- 扩展基类：[MissionBehavior](../MissionBehavior) — 所有战斗逻辑的官方扩展点。
- 单位：[Agent](../Agent) · 阵型：[Formation](../Formation)。
- 战役侧入口：[Campaign](../../campaign/Campaign) · [CampaignEvents](../../campaign/CampaignEvents) — `OnMissionStartedEvent` / `OnMissionEndedEvent` 是把战役与任务接起来的事件。
- 界面：[ScreenManager](../../gui/ScreenManager) — 任务内弹出的结算界面从那里推入。
- 父级：[mission API 目录导览](../)