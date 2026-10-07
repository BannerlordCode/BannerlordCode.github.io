---
title: "AiPartyThinkBehavior"
description: "部队 AI 总调度行为，汇总各 Ai*Behavior 的每小时 tick 形成最终决策。"
---
# AiPartyThinkBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiPartyThinkBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiPartyThinkBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiPartyThinkBehavior` 是战役部队 AI 的**总调度**。它本身不做具体决策，而是把各个 `Ai*Behavior`（军事、巡逻、补给等）的 `AiHourlyTick` 汇总起来，在每小时（hourly tick）为每个部队形成最终决策。

它是 `AiBehaviors` 命名空间下其他行为的「指挥者」：其他行为提供能力，本行为负责编排。

## 心智模型

把本行为想象成「部队参谋部的值班军官」：

- **每小时一次**：战役时间每推进一小时，本行为被触发一次。
- **遍历部队**：对每个需要 AI 决策的部队，依次调用相关 `Ai*Behavior` 的小时 tick。
- **汇总决策**：各行为把评估结果写回共享上下文，本行为负责把它们合成最终行动。

关键认知：**本行为是编排层，不是决策层**。如果你要改「AI 怎么想」，通常应该改具体的 `Ai*Behavior`；如果你要改「AI 什么时候想、按什么顺序想」，才动本行为。

## 怎么用

### 怎么拿到

本行为由战役系统在启动时注册。mod 侧一般**不手动实例化**，而是通过行为注册机制挂载自定义逻辑，或从已注册行为集合中取出。

覆写 `RegisterEvents()` 订阅战役事件；覆写 `SyncData(IDataStore)` 在存档读档时恢复状态。

### 典型用法

1. **调整决策节奏**：覆写相关逻辑，改变每小时 tick 的触发条件或顺序。
2. **注入自定义决策**：在汇总流程中插入自己的评估步骤，影响最终决策。
3. **观察决策过程**：订阅本行为的事件，在决策点打日志，理解 AI 行为链。

### 坑

- **不要在每帧逻辑里调用本行为**：它是小时级调度，帧级调用会导致性能问题。
- **覆写编排顺序要谨慎**：各 `Ai*Behavior` 之间可能有隐含依赖，乱序会导致决策异常。
- **共享上下文的生命周期**：汇总用的上下文通常按小时重建，不要跨 tick 缓存引用。

## 关键成员

- `public class AiPartyThinkBehavior : CampaignBehaviorBase` — `:14` 类声明，部队 AI 总调度的根类型。
- `public override void RegisterEvents()` — `:17` 注册战役事件订阅，mod 扩展的第一入口。
- `public override void SyncData(IDataStore dataStore)` — `:47` 存档读档时同步自定义数据。

## 真实示例

```csharp
// 观察部队思考过程：订阅小时 tick 事件并打日志
public class MyThinkObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 订阅战役小时事件，在 AI 决策点输出日志
        Campaign.Current.HourlyTick += OnHourlyTick;
    }

    private void OnHourlyTick()
    {
        foreach (MobileParty party in MobileParty.All)
        {
            if (party.IsAIControlled)
            {
                // 在决策点打日志
            }
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 恢复观察者状态
    }
}
```

> 注意：上例展示的是**观察者模式**。具体事件名与 `IDataStore` 用法请以 v1.4.6 源码为准。

## 参见

- [MBObjectBase](../MBObjectBase) — 战役对象的基类，理解行为操作的对象模型。
- [MBObjectManager](../MBObjectManager) — 对象管理器，行为获取战役对象的常见途径。
- [本桶索引](../_index) — campaign-ext 桶索引，浏览同桶其他行为页。
- [ChangeKingdomAction](../../campaign/ChangeKingdomAction) — 跨桶参考：战役动作的写法对照。

## 导航

- 返回桶索引：[../_index](../_index)
- 同桶相邻页：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager) · [MBGUID](../MBGUID)
- 跨桶：[ChangeKingdomAction](../../campaign/ChangeKingdomAction)
