---
title: "mission-ext 桶 — TaleWorlds.MountAndBlade 扩展面（尚未手写）"
description: "mission-ext 桶收拢 TaleWorlds.MountAndBlade 及其子命名空间，单是 TaleWorlds.MountAndBlade 这一个命名空间实测就有 835 个顶层类型。本页说明它与 mission 桶的分工、mod 什么时候会掉进这个大桶，以及为什么它不能按类平铺。"
---
# mission-ext：TaleWorlds.MountAndBlade 的扩展面

> **本桶当前没有任何已撰写页面。** 这是全部 18 个桶里类型数最多的一个，也是最需要「先想清楚再动手」的一个。

## 这个桶对应源码里的什么

权威映射 `tools/_dir-map-canonical.json` 里，`TaleWorlds.MountAndBlade` → `mission-ext` 是一条**最长的兜底前缀规则**。含义是：凡是命名空间以 `TaleWorlds.MountAndBlade` 开头、又没被更长规则截走的类型，全部落进本桶。实测规模：

| 范围 | 顶层类型数（实测） |
| --- | --- |
| `TaleWorlds.MountAndBlade` 本身 | **835** |
| 加上一批未被更长规则截走的子命名空间（`Objects` / `Objects.Siege` / `ComponentInterfaces` / `Missions.*` / `MissionSpawnHandlers` / `Source.*` 等） | 数百，量级相当 |
| 已被更长规则截走、不属于本桶的 | `*.ViewModelCollection*` → [viewmodel](../viewmodel)；`*.CustomBattle*` → [custombattle](../custombattle)；`*.Multiplayer*`、`*.DedicatedCustomServer*` 按噪声清单排除 |

**835 是单命名空间的实测数**，已经超过整个 [campaign](../campaign) 桶的公开面。这就是本桶排在手写队列最后一段、且不适合按类平铺的根本原因。

## mission-ext 和 mission 桶的分工

这是 mod 作者最容易搞混的一处。两者同源（`TaleWorlds.MountAndBlade`），靠**类型名覆写**分成两桶：

[mission](../mission) 桶是 mod 的**入口四件套**——`Mission`、`Agent`、`Formation`、`MissionBehavior`（`MissionState` 也被覆写进来）。权威映射的 `entryPointDirs` 就是专门为这四个类型开的口子，因为它们是 mod 写战斗逻辑时**必然要继承或持有的那四个**。

mission-ext 是剩下的部分。它们大致分三类：

1. **战斗流程骨架**：`MissionLogic`、`MBGameManager`、`MissionManager`、`MissionInfo`、`MissionGameModels`、`MissionCombatType` — 引擎自己在推进一局战斗时用的东西，mod 读它们的状态，不改它们
2. **攻城与器械**：`SiegeWeapon`、`SiegeLadder`、`SiegeTower`、`SiegeDeploymentMissionController`、`SiegeMissionPreparationHandler`、`SiegeSpawningBehavior`、`SiegeWeaponController` — 做攻城战相关 mod 时会用到
3. **单位与队伍**：`Side`、`Team`、`TeamCollection`、`AgentHelper`、`AgentStatCalculateModel`、`FormationAI`、`FormationDeploymentOrder` — 「这场战斗里谁和谁是一队」的问题在这里回答，而不是在 `Agent` 上

## mod 什么时候会碰到它

诚实的结论：**只有当你在 [mission](../mission) 桶那四张页上撞到墙时，才会掉进本桶。**

典型触发场景，按发生频率：

1. **「我怎么拿到玩家队伍里的所有 agent」** → 需要 `Side` / `Team` / `TeamCollection` 来从 `Mission` 走到具体单位。`Mission.GetTeamsOfSide(BattleSideEnum side)` 给的是 `Team`，不是 `Agent`，这一步转换在本桶
2. **「战斗什么时候结束 / 哪一方赢了」** → `MBGameManager` 或 `MissionLogic` 上的回调，而不是 `Mission` 的属性
3. **「攻城里我要控制某个器械」** → `SiegeWeapon` / `SiegeLadder` 这一族
4. **「我加的生成点怎么算」** → `CustomMissionSpawnHandler` / `MissionSpawnSettings` 这一族（同命名空间 `TaleWorlds.MountAndBlade.MissionSpawnHandlers`）
5. **「我加的单位血量/属性怎么结算」** → `AgentHelper` / `AgentStatCalculateModel` 这类计算模型

**心智模型**：mission-ext 是「一局战斗的机器内部」。mission 桶给你的是**接口面**（你能拿到什么、能注册什么行为），mission-ext 给的是**机械面**（引擎自己怎么转）。判断一个需求属于哪边，问一句：我是要「拿到一个东西并改它」，还是「要知道引擎下一步要干什么」？前者看 [mission](../mission)，后者看本桶。

**边界**：这一桶里绝大多数类型是引擎内部协作对象，没有稳定性保证，跨版本改动频繁。**优先用 [mission](../mission) 的公开面**（`MissionBehavior` 的生命周期回调已经覆盖了绝大多数需求），实在绕不过再进本桶。

## 待写清单（节选，21 条、覆盖 26 个类型名）

下面每个名字都在 `bannerlord-1.4.6/` 核实过确实声明在 `TaleWorlds.MountAndBlade`（或紧邻的子命名空间）里。**这是节选，不是索引**——本桶候选超过 835 个，全列无意义。挑的是 mod 实际会卡住的那几个。真要写某页时用 `grep -rn "class <名字>" ../bannerlord-1.4.6/` 核对签名。

战斗流程骨架：

- `MissionLogic` — 战斗逻辑的基类，`MissionBehavior` 之外的另一条挂载路径；引擎用它跑一局战斗的主循环
- `MBGameManager` — 单局战斗的管理者，战斗结束、胜负结算一类回调的来源
- `MissionManager` — 全局意义上的 mission 生命周期管理者（区别于单局的 `MBGameManager`）
- `MissionInfo` — 一局战斗的静态配置信息（战场类型、参与方规则等）
- `MissionGameModels` — 战斗用的计算模型集合（伤害、士气等从哪取）
- `MissionCombatType` — 战斗类型（单挑 / 团队战 / 攻城等）的枚举
- `MissionMethod` / `MissionTime` / `MissionTimer` — 战斗内的时间与计时工具

单位与队伍：

- `Side` — 阵营（攻击方 / 防守方 / 中立）
- `Team` — 队伍，`Mission` 侧拿到的就是它
- `TeamCollection` — 一局战斗里所有 `Team` 的集合
- `AgentHelper` — agent 的静态工具集，**注意它实际在 `TaleWorlds.MountAndBlade.Helpers` 命名空间**，按最长前缀规则仍归本桶
- `AgentStatCalculateModel` — 单位属性（血量、护甲等）的计算模型
- `FormationAI` — 队形 AI，战斗里单位自动移动的决策
- `FormationDeploymentOrder` / `FormationDeploymentFlank` — 战前布阵的指令与侧翼配置
- `FormationExtensions` — `Formation` 的扩展方法集合（本桶里少见的、以扩展方法形式提供便利的类型）

攻城与器械：

- `SiegeWeapon` — 攻城器械的基类
- `SiegeLadder` / `SiegeTower` — 云梯 / 箭塔的具体实现
- `SiegeWeaponController` — 器械的控制逻辑
- `SiegeDeploymentMissionController` — 攻城战中的布阵阶段控制器
- `SiegeMissionPreparationHandler` — 攻城战开始前的准备流程
- `SiegeSpawningBehavior` / `SiegeSpawnFrameBehavior` — 攻城部队的生成行为

**没有页面**。写的时候优先考虑「以一个具体场景为主线的专题页」（例如「从 `Mission` 走到玩家队伍的所有 agent」），而不是 835 张单类页。

## 为什么现在还没有页面

三个原因叠加，都指向同一个结论：**本桶不适合按类平铺。**

1. **规模不允许。** 835+ 个类型，逐类写页产出的会是签名罗列，而签名罗列对 mod 作者没有增量信息——真正有用的「我该用哪个类型」需要跨类型的心智模型。
2. **入口已经在别处写好了。** mod 真正要继承和持有的四个类型（`Mission`、`Agent`、`Formation`、`MissionBehavior`）已被覆写进 [mission](../mission) 桶并写了页。本桶剩下的是引擎内部协作面，优先级天然更低。
3. **稳定性差。** 这一桶里大量类型是引擎实现细节，跨版本变动频繁，密集写页的维护成本高于收益。

所以本桶排在 1.4.6 手写队列的后段。**这一页不是占位符**——归属规则、与 mission 桶的分工边界、触发场景、以及上面这 21 条逐个核实过的类型名，都是可以直接拿来写具体类页的素材。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
