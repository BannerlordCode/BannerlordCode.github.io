---
title: "AiPatrollingBehavior"
description: "战役巡逻 AI 行为，管理部队在战役地图上的巡逻决策。"
---
# AiPatrollingBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiPatrollingBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiPatrollingBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiPatrollingBehavior` 是战役层巡逻 AI 的主要扩展点，继承自 `CampaignBehaviorBase`。它负责为部队生成巡逻相关的决策：何时巡逻、沿什么路线、在哪些区域停留。

它与 `AiMilitaryBehavior` 互补 —— 后者管「打谁」，本行为管「怎么巡」。两者都由 `AiPartyThinkBehavior` 在小时级 tick 中调度。

## 心智模型

把本行为想象成「巡逻队长」：

- **输入**：一个需要巡逻的部队、当前的战役地图状态、以及思考上下文。
- **过程**：评估巡逻目标（例如保护商队、威慑敌军、探索未知区域），生成巡逻路径或停留点。
- **输出**：巡逻决策，写回共享上下文，由调度层合成最终行动。

关键认知：本行为**只管巡逻这一类决策**。它不处理战斗、补给、外交 —— 那些由其他 `Ai*Behavior` 负责。这种单一职责让它相对独立，mod 可以单独覆写巡逻逻辑而不影响其他行为。

## 怎么用

### 怎么拿到

本行为由战役系统在启动时注册。mod 侧通常**不手动实例化**，而是通过行为注册机制挂载自定义逻辑，或从已注册行为集合中取出。

覆写 `RegisterEvents()` 订阅战役事件；覆写 `SyncData(IDataStore)` 在存档读档时恢复状态。

### 典型用法

1. **自定义巡逻规则**：继承本行为，重写决策逻辑，让部队按你的规则巡逻（例如「优先保护友方村庄」）。
2. **调整巡逻频率**：覆写相关逻辑，改变巡逻决策的触发条件。
3. **观察巡逻决策**：订阅本行为的事件，在决策点打日志，理解巡逻 AI 的行为模式。

### 坑

- **不要假设每帧都被调用**：巡逻决策由小时级 tick 触发，不是每帧。
- **巡逻与战斗的边界**：如果部队正在交战，巡逻决策通常会被抑制 —— 不要试图在战斗状态下强制巡逻。
- **覆写后记得保留基类语义**：如果你完全替换巡逻逻辑，确保仍然写回共享上下文，否则下游决策会拿到空值。

## 关键成员

- `public class AiPatrollingBehavior : CampaignBehaviorBase` — `:14` 类声明，巡逻 AI 行为的根类型。
- `public override void RegisterEvents()` — `:17` 注册战役事件订阅，mod 扩展的第一入口。
- `public override void SyncData(IDataStore dataStore)` — `:66` 存档读档时同步自定义数据。

## 真实示例

```csharp
// 自定义巡逻规则：让部队优先保护友方村庄
public class MyPatrollingBehavior : AiPatrollingBehavior
{
    public override void RegisterEvents()
    {
        base.RegisterEvents();
        // 订阅战役事件，注入自定义巡逻逻辑
        Campaign.Current.HourlyTick += OnHourlyTick;
    }

    private void OnHourlyTick()
    {
        foreach (MobileParty party in MobileParty.All)
        {
            if (party.IsAIControlled && party.IsPatrolling)
            {
                // 自定义巡逻决策
            }
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        base.SyncData(dataStore);
        // 恢复自定义巡逻状态
    }
}
```

> 注意：上例展示的是**覆写模式**。具体事件名与 `IDataStore` 用法请以 v1.4.6 源码为准。

## 参见

- [MBObjectBase](../MBObjectBase) — 战役对象的基类，理解行为操作的对象模型。
- [MBObjectManager](../MBObjectManager) — 对象管理器，行为获取战役对象的常见途径。
- [本桶索引](../_index) — campaign-ext 桶索引，浏览同桶其他行为页。
- [ChangeKingdomAction](../../campaign/ChangeKingdomAction) — 跨桶参考：战役动作的写法对照。

## 导航

- 返回桶索引：[../_index](../_index)
- 同桶相邻页：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager) · [MBGUID](../MBGUID)
- 跨桶：[ChangeKingdomAction](../../campaign/ChangeKingdomAction)
