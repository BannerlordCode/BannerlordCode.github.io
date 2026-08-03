---
title: "mission 目录"
description: TaleWorlds.MountAndBlade 战斗系统类参考目录
---
## 模块心智模型

`mission` 桶承载的是 Bannerlord 的**实时战斗/场景层**——它和战役层（`campaign`）是同一枚硬币的两面：战役层决定“势力在地图上如何演变”，`mission` 层负责“进入战场后，每一个士兵、每一支编队、每一次挥砍到底怎么动”。

这个桶属于 `TaleWorlds.MountAndBlade` 模块，顶层对象是 `Mission`：一场正在运行的战斗或场景实例，持有 `Scene`、运行状态，以及三大类运行时实体——`Team`（阵营）、`Formation`（编队）和 `Agent`（单个士兵/玩家/坐骑）。`Mission` 由引擎在加载场景时创建，是可通过 `Mission.Current` 全局访问的实时单例；切换场景（进入战斗、返回大地图）会销毁旧实例并新建实例。

理解本桶的关键是**层级归属关系**：`Mission` 管一堆 `Team`，`Team` 持有若干 `Formation` 与成百上千个 `Agent`，`Formation` 再把“移动/冲锋/阵型”命令翻译为对每个 `Agent` 的底层设置。它不参与战役存档——所有对象只在 Mission 存活期间存在，战斗结束即销毁。换言之，`mission` 是游戏的“实时模拟心脏”，而 `campaign` 是它的“世界状态记忆”。

## 核心入口类型

- [Mission](./Mission)：当前战斗/场景实例的协调中心，通过 `Mission.Current` 访问。
- [Agent](./Agent)：场景中的单个实体（玩家、AI 士兵、马匹），承载位置、血量、装备与动画等实时状态。
- [Team](./Team)：Mission 内的一方阵营，持有 `Formation` 与 `Agent`，挂载 `OrderController` 与 `TeamAI`。
- [Formation](./Formation)：按兵种划分的战术编队，把移动/冲锋/阵型指令下发给每个 `Agent`。
- [MissionBehavior](./MissionBehavior)：挂载到 Mission 上的行为模块基类，用于扩展或改写战斗逻辑。
- [MissionLogic](../mission-ext/MissionLogic/)：**跨桶**，位于 `mission-ext`；`MissionLogic : MissionBehavior`，是玩法/战役逻辑接入战斗现场的核心扩展点。
- [FormationSpawnData](./FormationSpawnData)：描述一支编队如何被刷入战场的数据结构。
- [GenericMissionObjective](./GenericMissionObjective)：Mission 的通用目标/胜负条件载体。
- [AgentHelper](./AgentHelper)：Agent 相关的工具与辅助方法集合。
- [Target](./Target)：战斗中选择/锁定的目标实体抽象。
- [MBNetworkPeer](./MBNetworkPeer)：多人模式下代表一个网络玩家的对等端，连接 Agent 与联网状态。

## 与其他模块的关系

`mission` 并非孤立：玩法和逻辑扩展（如 `MissionLogic`、各类 `AgentComponent`）放在相邻的 `../mission-ext/` 桶里，它们以 `MissionBehavior` 子类形式挂载进当前 Mission，是 mod 接入战斗现场的主要入口。战斗本身由 `../campaign/` 桶触发——战役系统在大地图上决定遭遇并发起一场 Mission，战斗结果再回写战役状态。

由于 `Agent`/`Mission` 是高频实时对象，其生命周期极易成为崩溃源头（如 `Mission.Current` 为空时访问、Agent 已销毁仍持有引用）；相关崩溃边界与最佳实践见 `../../architecture/crash-boundaries/`。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

### A

- [ActionIndexCache](./ActionIndexCache)
- [Agent](./Agent)
- [AgentCreationResult](./AgentCreationResult)
- [AgentHelper](./AgentHelper)

### D

- [DefineGameNetworkMessageType](./DefineGameNetworkMessageType)
- [DefineSynchedMissionObjectType](./DefineSynchedMissionObjectType)
- [DropExtraWeaponOnStopUsageComponent](./DropExtraWeaponOnStopUsageComponent)
- [DynamicNavmeshLocalIds](./DynamicNavmeshLocalIds)

### F

- [Formation](./Formation)
- [FormationSpawnData](./FormationSpawnData)

### G

- [GenericMissionObjective](./GenericMissionObjective)
- [GenericMissionObjectiveTarget](./GenericMissionObjectiveTarget)

### I

- [IMBActionSet](./IMBActionSet)
- [IMBAgent](./IMBAgent)
- [IMBAgentVisuals](./IMBAgentVisuals)
- [IMBAnimation](./IMBAnimation)
- [IMBBannerlordChecker](./IMBBannerlordChecker)
- [IMBBannerlordConfig](./IMBBannerlordConfig)
- [IMBBannerlordTableauManager](./IMBBannerlordTableauManager)
- [IMBDebugExtensions](./IMBDebugExtensions)
- [IMBDelegate](./IMBDelegate)
- [IMBEditor](./IMBEditor)
- [IMBFaceGen](./IMBFaceGen)
- [IMBGame](./IMBGame)
- [IMBGameEntityExtensions](./IMBGameEntityExtensions)
- [IMBItem](./IMBItem)
- [IMBMapScene](./IMBMapScene)
- [IMBMessageManager](./IMBMessageManager)
- [IMBMission](./IMBMission)
- [IMBMultiplayerData](./IMBMultiplayerData)
- [IMBNetwork](./IMBNetwork)
- [IMBPeer](./IMBPeer)
- [IMBScreen](./IMBScreen)
- [IMBSkeletonExtensions](./IMBSkeletonExtensions)
- [IMBSoundEvent](./IMBSoundEvent)
- [IMBTeam](./IMBTeam)
- [IMBTestRun](./IMBTestRun)
- [IMBVoiceManager](./IMBVoiceManager)
- [IMBWindowManager](./IMBWindowManager)
- [IMBWorld](./IMBWorld)
- [ItemInnerData](./ItemInnerData)
- [ItemList](./ItemList)
- [ItemType](./ItemType)

### M

- [MBNetworkPeer](./MBNetworkPeer)
- [Mission](./Mission)
- [MissionBehavior](./MissionBehavior)
- [MultiplayerBattleColors](./MultiplayerBattleColors)
- [MultiplayerCultureColorInfo](./MultiplayerCultureColorInfo)

### O

- [OnPlatformRequestedMultiplayerJob](./OnPlatformRequestedMultiplayerJob)
- [OnSessionInvitationAcceptedJob](./OnSessionInvitationAcceptedJob)

### P

- [PerkAssemblyCollection](./PerkAssemblyCollection)
- [PlayerTypes](./PlayerTypes)
- [ProximityMapSearchStructInternal](./ProximityMapSearchStructInternal)

### S

- [ScriptingInterfaceBase](./ScriptingInterfaceBase)

### T

- [TacticOption](./TacticOption)
- [Target](./Target)
- [Team](./Team)
- [ToolDebugManager](./ToolDebugManager)


<!-- END SECTION INDEX -->
