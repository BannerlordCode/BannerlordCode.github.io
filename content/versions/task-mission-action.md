---
title: "处理一场战斗（Mission 侧）"
description: "开发者视角总览：战斗场景内做事——Mission 生命周期、MissionBehavior 挂载点、Agent 与 Formation 的关系，以及战斗逻辑和战役逻辑的边界。"
extra:
  sidebar: auto
---

# 处理一场战斗（Mission 侧）

> **这条路径解决什么**：一场战斗开始后，你要往里塞逻辑 —— 控制谁参战、生成什么单位、
> 改谁的数值、战斗结束后把结果带回战役世界。

## 心智模型：Mission 是一个「有始有终的独立世界」

这是理解战斗代码最重要的一件事：

```text
Game       ── 全局，进程级，一个游戏进程只有一个
 └── Campaign   ── 战役世界，一次存档对应一个，跨整场战役活着
      └── Mission ── 战斗世界，一次战斗一个，战斗结束就销毁
```

`Mission` **不是** `Campaign` 的子对象持有关系，而是并列的生命周期。
战斗开始时游戏从战役世界**拷贝**一份参战方数据进战斗世界，战斗结束时游戏把结果**回写**。

这带来两个直接后果：

1. **你在战斗里改 `Hero` 的属性，改的不是战役世界里的那个 `Hero`。** 战斗结束时的回写是
   按「结果」走的，不是按「你在战斗中改过的字段」逐个同步的。
2. **战斗里可以访问战役世界，但不要在战斗中途写它。** 中途写会被回写覆盖，或者造成两侧不一致。

所以第一个决定永远是：**我这个逻辑属于「战斗内」还是「战斗结果」？**
属于战斗内的挂在 Mission 行为里；属于结果的等战斗结束后回到战役侧再处理。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 建立战斗系统的整体概念 | [任务系统](../../v1.3.15/zh/guide/mission-system) |
| 2 | 知道战斗世界有哪些入口类型、生命周期怎么走 | [Mission](../../v1.3.15/zh/api/mission/Mission) |
| 3 | 找到你的挂载点：行为在哪些阶段被回调 | [MissionBehavior](../../v1.3.15/zh/api/mission/MissionBehavior) |
| 4 | 知道战场上的「人」是什么 | [Agent](../../v1.3.15/zh/api/mission/Agent) · [Formation](../../v1.3.15/zh/api/mission/Formation) |
| 5 | 改「谁参战 / 生成什么」 | [MissionAgentSpawnLogic](../../v1.3.15/zh/api/mission-ext/MissionAgentSpawnLogic) · [BattleSpawnLogic](../../v1.3.15/zh/api/mission-ext/BattleSpawnLogic) |
| 6 | 改「数值怎么算」 | [AgentStatCalculateModel](../../v1.3.15/zh/api/mission-ext/AgentStatCalculateModel) |
| 7 | 战斗结束后处理结果（这一步已经回到战役侧） | [做一个新的战役动作](../task-campaign-action) · [MissionResult](../../v1.3.15/zh/api/core-extra/MissionResult) |
| 8 | 战斗场景里的 AI | [改 AI 决策](../task-ai) |

## 关键类型就这几个

- [Mission](../../v1.3.15/zh/api/mission/Mission) —— 战斗世界的门面。`Mission.Current` 是访问器。
- [MissionBehavior](../../v1.3.15/zh/api/mission/MissionBehavior) —— **战斗内的挂载点**，与战役侧的
  [CampaignBehaviorBase](../../v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase) 是两套并行体系。
- [Agent](../../v1.3.15/zh/api/mission/Agent) —— 战场上的一个战斗单位。
- [Formation](../../v1.3.15/zh/api/mission/Formation) —— 一组 `Agent` 的编队。
  「谁参战」通常是编队级的决定，不是单个 `Agent` 级的。
- [MissionState](../../v1.3.15/zh/api/mission-ext/MissionState) —— 战斗进行到哪一步。

## 你要注意什么

- **两套 Behavior 别搞混。** `MissionBehavior` 在战斗里跑，`CampaignBehaviorBase` 在战役里跑，
  生命周期完全不相交。想在战斗结束后做事，挂战役行为，不是在战斗行为里等。
- **`Mission.Current` 在战斗外是 `null`。** 挂战役行为时读它会拿到空值。
- **战斗中改 `Hero` 不等于改战役里的 `Hero`。** 见上面心智模型第 1 条。
- **`Agent` 和战役里的 `Hero` 不是一对一也不是恒等映射。** 一个英雄在战斗里对应一个（或多个）`Agent`，
  但两者是不同类型的对象，字段不通用。
- **`Formation` 是决策单位。** 「让某支部部队参战」通常改编队，不是遍历改每个 `Agent`。
- **战斗行为注册时机比战役行为更早。** 战斗可能在战役 tick 之前就开打，
  依赖战役侧初始化完成的行为要判空。

## 最小可运行形状

```csharp
public class MyMissionBehavior : MissionBehavior
{
    public override void MissionInitialize(Mission mission) { /* 战斗刚开始 */ }
    public override void MissionTick(Mission mission)      { /* 每帧 */ }
    // 具体可重写点与签名以类型页为准
}
```

## 战斗内 vs 战役侧速查

| 问题 | 归属 |
| --- | --- |
| 谁参战、怎么站位 | 战斗内 · [Formation](../../v1.3.15/zh/api/mission/Formation) |
| 伤害怎么算 | 战斗内 · [AgentStatCalculateModel](../../v1.3.15/zh/api/mission-ext/AgentStatCalculateModel) |
| 战斗中 AI 怎么决策 | 战斗内 · [AgentHumanAILogic](../../v1.3.15/zh/api/mission-ext/AgentHumanAILogic) |
| 战后谁死了、谁被俘 | 战役侧 · [MissionResult](../../v1.3.15/zh/api/core-extra/MissionResult) |
| 战后发奖励 | 战役侧 · [做一个新的战役动作](../task-campaign-action) |
| 地图上的部队 AI | 战役侧 · [改 AI 决策](../task-ai) |

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [任务系统](../../v1.3.15/zh/guide/mission-system) · [Mission](../../v1.3.15/zh/api/mission/Mission)
