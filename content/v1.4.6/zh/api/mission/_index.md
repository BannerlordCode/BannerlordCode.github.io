---
title: "mission 桶：一场战斗的入口类"
description: "mission 是有意的入口类 carve-out，只收 mod 真正会继承或直接拿到的 4 个类型：Mission、MissionBehavior、Agent、Formation。同命名空间的其余任务 API 全在 mission-ext 桶（尚未撰写）。"
---
# mission 桶：一场战斗的入口类

**先说清这个桶为什么这么小。** `TaleWorlds.MountAndBlade` 有 669 个顶层 `.cs`，按命名空间前缀本该整体落进 `mission-ext`。但 mod 作者在一场战斗里真正会**继承**或**直接持有**的类型就那么几个，于是权威映射 `tools/_dir-map-canonical.json` 的 `entryPointDirs` 用类型名覆写把 `Mission`、`MissionBehavior`、`Agent`、`Formation`、`MissionState` 单独摘到这个桶，其余按前缀留在 `mission-ext`。这是一个**有意为之的入口类 carve-out**，不是漏写：1.4.5 的 `mission/` 桶有 78 页，其中 52 页是普通 `TaleWorlds.MountAndBlade` 类型，那个手挑清单没有任何命名空间规则能复现，硬凑只会把近 850 页的 `mission-ext` 撕碎。完整取舍记录在 `tools/_dir-map-canonical.json` 的 `parityGaps` 里。

因此：**这个桶是入口，不是全集。** 任务部署、生成点、攻城器械、`MissionLogic`、`MBGameManager` 这些都在 [mission-ext](../mission-ext/) 桶——那才是 `TaleWorlds.MountAndBlade` 的完整 API 面，实测顶层类型 835 个。它的导览页已经写好（桶内类页仍待补），两边在这里双向互链：读不动某个任务内部机制时，从本页的入口类跳过去。

## 已手写的类页（4 张）

- [Mission](./Mission) — 任务运行时根对象：`Mission.Current` 单例持有场景、队伍、Agent 与投射物集合，并提供生成、伤害、寻路、相机与事件钩子。进入战斗先拿它。
- [MissionBehavior](./MissionBehavior) — 战斗内逻辑的官方抽象基类：数十个 `OnXxx` 钩子覆盖 Agent 生死、命中判定、部署阶段与每帧 tick，`Mission` 属性指回所属任务。绝大多数战斗 mod 的代码就落在这一个类里。（`OnXxx` 是钩子族的简写，不是类型名；实际覆写的是 `MissionBehavior` 上以 `On` 开头的虚方法。）
- [Agent](./Agent) — 战场单位：`Agent.Main` 单例代表一个人或一匹马，承载动作通道、AI 状态、装备、外观、命中累计与阵型归属。
- [Formation](./Formation) — 战斗阵型：把一批 Agent 组织成有序队列，管理移动 / 朝向 / 阵形 / 骑乘 / 射击命令与缓存统计。

## 尚未撰写的部分

**属于本桶、但还没有类页**（`entryPointDirs` 已判定它归 `mission/`，只是页没写）：

- `MissionState` — 任务状态机。写「什么时候算任务结束、什么时候切回地图」时会碰到它。

**属于 [mission-ext](../mission-ext/)、尚未撰写**（列在这里是为了告诉你去哪儿找，那一页已存在但桶内类页还全待补）：`MissionLogic`、`MBGameManager`、`Team`、`MissionTime`、`MissionManager`、`MissionBoundaryPlacer`、`MissionHardBorderPlacer`、`MissionDeploymentPlanningLogic`、`MissionWeapon`、`MissionObject`、`MissionSpawnSettings`、`BattleDeploymentMissionController`、`SiegeDeploymentMissionController`、`CustomMissionSpawnHandler`、`FormationAI`、`FormationQuerySystem`、`TeamQuerySystem`、`AgentStatCalculateModel`、`AgentBuildData`、`MBAgentVisuals`、`MissionBehaviorType`、`MissionMethod`、`MBInitialScreenBase`。

还有两个相关的桶同样尚未撰写：官方战斗界面与 ViewModel 在 `viewmodel/`，沙盒侧的任务拼装在 `sandbox/`。模组入口两张页（`MBSubModuleBase`、`Module`）虽然源码也在 `TaleWorlds.MountAndBlade`，但按类型名覆写落在 [core](../core/)。

## 与邻桶的分工

- [campaign](../campaign/) — 战役侧。两侧靠 [CampaignEvents](../campaign/CampaignEvents) 的任务开始 / 结束事件搭桥，跨任务要保留的状态放 [CampaignBehaviorBase](../campaign/CampaignBehaviorBase) 而不是 Behavior 本身。
- [gui](../gui/) — 任务内的结算与提示界面从 [ScreenManager](../gui/ScreenManager) 推入。
- [mission-ext](../mission-ext/) — 本桶 4 个入口类之外的 `TaleWorlds.MountAndBlade` 全集：`MissionLogic`、`MBGameManager`、`Team`、部署与生成都在那边。
- [campaign-ext](../campaign-ext/) — 攻城布防参数通常取自那里的 `*Model` 接口。

## 参见

- ↑ [API 首页](../) — 全部 9 个桶的入口表
- ↔ [模块地图](../../architecture/module-map) — 「前缀直落 + 类型名覆写」怎么落到 mission / mission-ext
- ↑ [中文版本首页](../../)
- ↑ [v1.4.6 版本首页](../../../)
