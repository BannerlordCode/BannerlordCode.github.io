---
title: "Source Mission Handlers 源码家族"
description: "MountAndBlade.Source 的真实 Mission 处理器索引；用于追踪官方调用顺序，不把易变实现当作稳定 SDK。"
---

# Source Mission Handlers 源码家族

## Mental Model

这些类型属于 MountAndBlade 源码模块的 Mission 实现层。Mission 通过
`Mission`、`MissionBehavior` 和各种控制器创建并调度它们；它们适合追踪官方
调用顺序，但具体实现可能随游戏版本变化。v1.4.5 的来源是
`bannerlord-1.4.5/Bannerlord.Source/Modules.Native` 及其 source mission 目录，
下表链接的是库存中的 v1.3.15 托管类型页面。

先读 [Mission](../../mission/Mission)、[MissionBehavior](../../mission/MissionBehavior) 和
[MissionState](../MissionState)。控制器不能直接改写战役持久状态；持久变更必须回到
Campaign Action，并在 Mission 结束时释放 Agent、Scene 和计时器引用。

## Dependencies

- [Mission](../../mission/Mission) 拥有场景生命周期并分发 Mission Behavior 回调。
- [MissionBehavior](../../mission/MissionBehavior) 是 Mission 实例的扩展点。
- [Agent](../../mission/Agent)、[Team](../../mission/Team)、[Formation](../../mission/Formation) 暴露实时战场状态。
- [Actions](../../campaign-ext/actions-index) 仍是战役世界变更的边界。

## Source-backed entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.MountAndBlade.Source.Missions | [BaseBattleMissionController](../BaseBattleMissionController) | 协调通用战斗 Mission 初始化，并把事件交给已配置的控制器。 | Mission 创建与战斗收尾 |
| TaleWorlds.MountAndBlade.Source.Missions | [BattleSpawnLogic](../BattleSpawnLogic) | 选择战场出生点并处理进行中的增援决定。 | 首次出生与增援波次 |
| TaleWorlds.MountAndBlade.Source.Missions | [CaravanBattleMissionHandler](../CaravanBattleMissionHandler) | 将商队遭遇数据接入战斗 Mission，并处理退出路径。 | 商队战斗创建与完成 |
| TaleWorlds.MountAndBlade.Source.Missions | [DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController) | 提供源码模块的调试 Agent 传送控制，不写入战役状态。 | 仅调试 Mission |
| TaleWorlds.MountAndBlade.Source.Missions | [DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController) | 为源码诊断和测试场景移除选中的 Mission 对象。 | Mission 内显式调试输入 |
| TaleWorlds.MountAndBlade.Source.Missions | [EquipmentTestMissionController](../EquipmentTestMissionController) | 组织装备测试 Mission，并让测试 Actor 留在 Mission 生命周期内。 | 测试 Mission 启动与重置 |
| TaleWorlds.MountAndBlade.Source.Missions | [HideoutPhasedMissionController](../HideoutPhasedMissionController) | 驱动藏身处阶段切换以及各阶段的 Mission 控制器交接。 | 阶段变化与 Mission 结束 |
| TaleWorlds.MountAndBlade.Source.Missions | [MissionOptionsComponent](../MissionOptionsComponent) | 向 Mission 控制器和选项 UI 提供选项状态。 | 选项创建与刷新 |
| TaleWorlds.MountAndBlade.Source.Missions | [SimpleMountedPlayerMissionController](../SimpleMountedPlayerMissionController) | 提供聚焦流程使用的最小骑乘玩家控制器。 | 玩家出生至 Mission 收尾 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [BasicMissionHandler](../BasicMissionHandler) | 安装源码 Mission 入口共用的基础处理器集合。 | Mission 初始化 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [IBoardGameHandler](../IBoardGameHandler) | 把桌游 Mission 接到处理器回调和结果交接。 | 桌游 Mission 设置与结果 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [LordsHallFightMissionController](../LordsHallFightMissionController) | 控制领主大厅战斗场景及其 Mission 完成路径。 | 场景进入、战斗和退出 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [MissionFacialAnimationHandler](../MissionFacialAnimationHandler) | 为当前 Mission 的 Actor 注册面部动画工作。 | Actor 出生与动画更新 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | [AgentMoraleInteractionLogic](../AgentMoraleInteractionLogic) | 在不改变战斗所有权的前提下处理 Agent 间士气互动。 | 战斗事件与士气 tick |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | [AmmoSupplyLogic](../AmmoSupplyLogic) | 按 Mission 规则供应并刷新战斗弹药。 | 出生、补给与 Mission 重置 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | [BattleMissionAgentInteractionLogic](../BattleMissionAgentInteractionLogic) | 解析战斗 Mission 专属的 Agent 互动回调。 | 战斗中的 Agent 互动事件 |
| TaleWorlds.MountAndBlade.Source.Objects | [NavigationMeshDeactivator](../NavigationMeshDeactivator) | 当源码 Mission 对象改变通行区域时停用选定导航网格区域。 | 场景设置与对象生命周期 |
| TaleWorlds.MountAndBlade.Source.Objects | [SceneLeveler](../SceneLeveler) | 应用源码场景对象设置所需的场景高度调整。 | Agent 出生前的场景加载 |
| TaleWorlds.MountAndBlade.Source.Objects.Siege | [AgentPathNavMeshChecker](../AgentPathNavMeshChecker) | 为诊断和布置检查 Agent 路径与攻城导航网格。 | 攻城场景设置与路径检查 |
| TaleWorlds.MountAndBlade.Source.Objects.Siege | [Direction](../Direction) | 编码攻城对象布置逻辑所消费的方向值。 | 攻城对象创建与布置 |

## Navigation

- [Parent: Mission extensions](..)
- [Related: Mission](../../mission/Mission) · [Mission behaviors](../../mission/MissionBehavior)
- [Policy: SandBox / StoryMode / Native](../../../architecture/sandbox-native-policy)
