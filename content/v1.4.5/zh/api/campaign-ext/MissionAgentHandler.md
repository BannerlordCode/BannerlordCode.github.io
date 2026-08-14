---
title: "MissionAgentHandler"
description: "MissionAgentHandler 是 SandBox 的任务逻辑，负责索引可用点、生成地点角色并维护战役地点的 Agent 流程。"
---
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics  
**Module:** SandBox.Missions  
**Type:** public class MissionAgentHandler : MissionLogic  
**Base:** [MissionLogic](../../mission-ext/MissionLogic)  
**Source file:** Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentHandler.cs

## 一句话定位

它把场景中的 UsableMachine 和战役 LocationCharacter 数据转换为 spawn-point 查询、Agent 生成/模拟、通道使用和地点转换行为。

## 心智模型

这是 SandBox 的任务行为，不是通用 Agent 服务。适用的 SandBox 任务工厂会把一个 MissionAgentHandler 放进传给 MissionState.OpenNew 的行为数组；EarlyStart 扫描场景 props，并可能建立成对 animation point 列表；OnMissionTick 推进通道使用和延迟 wandering Agent 生成。内部字典按 spawn tag 索引当前场景发现的 UsableMachine。所有公共方法都只在同一个 Mission 和战役地点仍然活动时有意义。

TownPassageProps 是 npc_passage 标签下的子集。UsablePoints 会从普通和成对字典重新组装一个新列表，修改返回列表不会改动 handler 索引。生成方法会消耗点位和战役角色 origin，不是战斗任务中直接构造 Agent 的替代方案。

## 何时使用，何时不要使用

- 城镇、室内、村庄、藏身处、对话或伪装任务需要地点 Agent 或可用点查询时，使用已经挂在 Mission.Current 上的行为。
- 用 FindUnusedPointWithTagForAgent、FindUnusedPoints 和 FindAllUnusedPoints 遵守 StandingPoint 占用及 Agent 专属禁用规则。
- 只有在 CampaignMission.Current.Location 和地点任务行为准备好后，才调用 SpawnLocationCharacters。
- 不要在战役行为中自己构造 handler，也不要把它当全局 spawn manager；索引属于一个场景/Mission。
- 不要把 UsablePoints 当存档数据，也不要把已结束 Mission 的 Agent 或 LocationCharacter 传回来。

## 依赖

任务工厂 -> MissionState.OpenNew -> Mission 行为中的 MissionAgentHandler -> 标签索引和成对点位 -> LocationCharacter/Agent 生成 -> OnEndMission 清空索引。

- 持有者：[Mission](../../mission/Mission) 保存行为以及活动 Agent/场景上下文。
- 任务基类：[MissionLogic](../../mission-ext/MissionLogic) 提供任务回调生命周期。
- 战役上下文：[CampaignMission](../../campaign/CampaignMission) 提供地点生成使用的活动 Location。
- 可用点模型：[UsableMachine](../../mission-ext/UsableMachine) 保存 StandingPoint 候选及占用状态。
- 工厂组合：[SandBoxMissions](../SandBoxMissions) 把该行为加入适用任务类型。

## 公共面与生命周期

| 范围 | 成员 | 源码语义 |
| --- | --- | --- |
| 点位集合 | TownPassageProps、DisabledPassages、UsablePoints | 读取当前 Mission 的通道、不可用通道和合并后的可用机器集合。 |
| 可用性 | HasPassages、HasUsablePointWithTag、GetAllSpawnTags、GetAllUsablePointsWithTag | 查询标签索引，不生成 Agent。 |
| 选择 | FindUnusedUsablePointCount、FindUnusedPointWithTagForAgent、FindUnusedPoints、FindAllUnusedPoints | 根据使用标记、用户、移动中的 Agent 和 Agent 禁用状态计数或选择点位。 |
| 地点生成 | SpawnLocationCharacters、SpawnDefaultLocationCharacter、SpawnWanderingAgent、SpawnWanderingAgentWithDelay、SpawnWanderingAgentWithInitialFrame | 在场景点位生成战役地点角色；延迟参数必须为正数。 |
| 转换 | FadeoutExitingLocationCharacter、SpawnEnteringLocationCharacter | 地点切换时淡出或生成角色。 |
| 模拟 | SimulateAgent | 对已经生成的人类 Agent 做短暂本地导航模拟。 |
| 定位 | TeleportTargetAgentNearReferenceAgent | 把 Agent 及可选跟随者移到参考 Agent 附近。 |
| 诊断 | DetectMissingEntities | DEBUG-only 地检查角色 target tag 和点位数量。 |
| 静态表现 | GetRandomTournamentTeamColor、GetAgentSettlementColors、GetPointCountOfUsableMachine | 用于地点/赛事表现和点位统计的工具计算。 |

EarlyStart 会调用 GetAllProps，把 passage usage 设为当前任务时间加 30 秒，并只在不属于排除天气值时初始化成对可用对象。OnEndMission 会清空点位字典、禁用通道和已使用 spawn 点。

## 真实示例

下面遵循 SandBox 任务逻辑使用的获取路径：从当前 Mission 取 handler，再查询真实场景标签和当前 Agent。

```csharp
using System.Collections.Generic;
using SandBox.Missions.MissionLogics;
using SandBox.Objects.Usables;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public static List<UsableMachine> GetFreePassageCandidates(Agent agent)
{
    List<UsableMachine> empty = new List<UsableMachine>();
    Mission mission = Mission.Current;
    MissionAgentHandler handler = mission?.GetMissionBehavior<MissionAgentHandler>();
    if (handler == null || agent == null || CampaignMission.Current == null || CampaignMission.Current.Location == null)
    {
        return empty;
    }

    List<UsableMachine> tagged = handler.GetAllUsablePointsWithTag("npc_passage");
    UsableMachine preferred = handler.FindUnusedPointWithTagForAgent(agent, "npc_passage");
    if (preferred != null && !tagged.Contains(preferred))
    {
        tagged.Add(preferred);
    }

    return tagged;
}
```

返回列表只是查询结果。真正的生成路径仍是 SpawnLocationCharacters 或其生成方法，并且要求地点任务已经提供真实的 LocationCharacter 和场景数据。

## 风险与生命周期边界

- EarlyStart 假定战役聚落/天气上下文和场景可用机已经加载；脱离 Mission 自己调用公共方法不是有效初始化路径。
- SpawnLocationCharacters 读取 CampaignMission.Current.Location，发送战役 receiver 回调，临时停用通道并模拟现有 Agent，会同时改变场景和战役状态。
- SpawnWanderingAgentWithDelay 会断言 delay 大于零；不需要延迟时使用 SpawnWanderingAgent 或 initial-frame 重载。
- FindUnused 方法受占用状态影响：点位可能仍在标签索引中，但因为有用户、移动 Agent、已用 spawn 标记或 Agent 禁用规则而不可用。
- TeleportTargetAgentNearReferenceAgent 会移动 Agent 和跟随者，只能在活动任务转换中使用，不能从任务结束后的战役 tick 调用。
- OnEndMission 会清空索引；不要把 UsableMachine 列表或 Agent 缓存为战役存档状态。

## 版本说明

本页遵循 v1.4.5 SandBox 实现，以及城镇、室内、村庄、藏身处、对话、伪装和地点任务对它的使用。切换版本时请重新核对标签名、天气门控和生成行为。

## 导航

- 父级：[Campaign 扩展 API](../)
- 同级：[CampaignMissionComponent](../CampaignMissionComponent) · [UsableMachine](../../mission-ext/UsableMachine)
- 相关：[Mission](../../mission/Mission) · [MissionLogic](../../mission-ext/MissionLogic) · [CampaignMission](../../campaign/CampaignMission) · [UsableMachineAIBase](../../mission-ext/UsableMachineAIBase)
