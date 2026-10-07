---
title: "AiMilitaryBehavior"
description: "战役军事 AI 行为，为阵营挑选最佳攻击目标并评估其价值。"
---
# AiMilitaryBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiMilitaryBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiMilitaryBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiMilitaryBehavior` 是战役层军事 AI 的主要扩展点，继承自 `CampaignBehaviorBase`。它负责在战役地图上为某个阵营（faction）评估「打谁最划算」：给定一支军队的任务类型（`Army.ArmyTypes`）与我方实力，它会遍历候选目标，算出每个目标的价值，并挑出最佳攻击目标。

它是 `AiPartyThinkBehavior` 调度链中的一环 —— 军事决策不是每帧独立发生的，而是由部队思考流程在合适的时机调用本行为暴露的入口方法。

## 心智模型

把本行为想象成「阵营参谋部」：

- **输入**：一个阵营、一支军队的任务类型（攻城 / 劫掠 / 追击等）、以及一个承载思考上下文的 `PartyThinkParams` 结构。
- **过程**：对每个候选目标估算「打它能得到多少价值」，价值通常综合了目标实力、距离、政治关系、战利品预期等因素。
- **输出**：最佳目标及其价值，写回 `PartyThinkParams`，供后续决策（是否出兵、派哪支军队）使用。

关键认知：本行为**不直接移动军队**。它只做「评估与推荐」，真正的行动由更高层的思考流程决定。这让它成为一个相对纯粹的决策单元，便于 mod 覆写或替换。

## 怎么用

### 怎么拿到

本行为由战役系统在启动时注册进行为列表。mod 侧通常**不需要手动实例化**它 —— 你通过 `CampaignBehaviorBase` 的注册机制挂载自己的逻辑，或在需要时从已注册的行为集合中取出它。

覆写 `RegisterEvents()` 来订阅战役事件；覆写 `SyncData(IDataStore)` 来在存档读档时恢复自定义状态。

### 典型用法

1. **覆写决策入口**：继承 `AiMilitaryBehavior`，重写 `FindBestTargetAndItsValueForFaction`，加入自己的价值评估规则（例如「优先打与我方有世仇的阵营」）。
2. **读取评估结果**：在自定义行为里调用公开入口，拿到最佳目标后做二次加工（例如记录日志、触发自定义事件）。
3. **配合 `PartyThinkParams`**：该结构是思考过程的共享上下文，理解它的字段是理解本行为输出如何被消费的前提。

### 坑

- **不要假设每帧都被调用**：军事评估由思考流程按小时（hourly tick）节奏触发，不是每帧。
- **价值是相对的**：`FindBestTargetAndItsValueForFaction` 返回的价值是同一轮评估内的相对值，跨轮次不可直接比较。
- **覆写后记得保留基类语义**：如果你完全替换评估逻辑，确保仍然写回 `PartyThinkParams`，否则下游决策会拿到空值。

## 关键成员

- `public class AiMilitaryBehavior : CampaignBehaviorBase` — `:15` 类声明，军事 AI 行为的根类型。
- `public override void RegisterEvents()` — `:18` 注册战役事件订阅，mod 扩展的第一入口。
- `public override void SyncData(IDataStore dataStore)` — `:114` 存档读档时同步自定义数据。
- `public void FindBestTargetAndItsValueForFaction(Army.ArmyTypes missionType, PartyThinkParams p, float ourStrength)` — `:119` 核心公开入口：为阵营找最佳攻击目标并算价值。

## 真实示例

```csharp
// 覆写军事决策：让 AI 优先攻击实力弱于我方的目标
public class MyMilitaryBehavior : AiMilitaryBehavior
{
    public override void FindBestTargetAndItsValueForFaction(
        Army.ArmyTypes missionType, PartyThinkParams p, float ourStrength)
    {
        // 先拿到基类评估结果作为兜底
        base.FindBestTargetAndItsValueForFaction(missionType, p, ourStrength);

        // 在这里加入自定义规则：例如过滤掉实力过强的目标
        // 实际字段名以 PartyThinkParams 的定义为准
    }
}
```

> 注意：上例展示的是**覆写模式**。`PartyThinkParams` 的具体字段请以 v1.4.6 源码为准，不要凭记忆臆造字段名。

## 参见

- [`../MBObjectBase`](../MBObjectBase) — 战役对象的基类，理解行为操作的对象模型。
- [`../MBObjectManager`](../MBObjectManager) — 对象管理器，行为获取战役对象的常见途径。
- [`../_index`](../_index) — 本桶（campaign-ext）索引，浏览同桶其他行为页。
- [`../../campaign/ChangeKingdomAction`](../../campaign/ChangeKingdomAction) — 跨桶参考：战役动作的写法对照。

## 导航

- 返回桶索引：`../_index`
- 同桶相邻页：`../MBObjectBase` · `../MBObjectManager` · `../MBGUID`
- 跨桶：`../../campaign/ChangeKingdomAction`
