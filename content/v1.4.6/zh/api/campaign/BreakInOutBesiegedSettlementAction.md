---
title: "BreakInOutBesiegedSettlementAction"
description: "结算攻城方破城突入或守方突围离开被围定居点的伤亡与围城状态变更。"
---
# BreakInOutBesiegedSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BreakInOutBesiegedSettlementAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/BreakInOutBesiegedSettlementAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

围城战里「谁穿过了城墙」这件事由本类统一收口。`ApplyBreakIn` 处理攻城方突入被围定居点，`ApplyBreakOut` 处理守方突围逃离；两者都会结算战斗伤亡，并通过 `out` 参数把结果回传给调用方。类为纯静态，不保存围城状态本身——状态归属围城系统，本类只负责一次「破门」动作的结算与广播。

## 心智模型

把围城看成一道「有向门」：门可以被从外向内推开（Break In），也可以被从内向外撞开（Break Out）。本类不判断该不该破门，只负责在破门已经发生之后：

1. 结算这次冲突的伤亡；
2. 通过 `out` 参数把伤亡清单和军队级伤亡计数交回给你；
3. 更新围城状态机（围城是否继续、守军是否还在城内）。

因为伤亡是 `out` 返回而不是内部保存，调用方必须自己接住返回值——这是本类最容易踩的点。

## 怎么用

### 怎么拿到

静态类，直接调用：

```csharp
using TaleWorlds.CampaignSystem.Actions;
```

### 典型用法

```csharp
TroopRoster casualties;
int armyCasualtiesCount;

// 攻城方破城而入
BreakInOutBesiegedSettlementAction.ApplyBreakIn(
    out casualties, out armyCasualtiesCount, isFromPort: false);

// 守方从城内突围
BreakInOutBesiegedSettlementAction.ApplyBreakOut(
    out casualties, out armyCasualtiesCount, isFromPort: true);
```

### 坑

- **`out` 参数必须在调用处接收**：`out casualties` 不能省略，也不能当成可选结果忽略，否则你拿不到伤亡数据。
- **`isFromPort` 表示这次行动是否经由港口发生**，会改变行动的位置与路径语义，不要随手传 `false`。
- 两个方法是对称但**不可互换**的：传错方向会让围城状态机走向相反的结局。
- 不要在非围城语境下调用；本类假定目标定居点正处于被围状态。

## 关键成员

- `ApplyBreakIn`（`BreakInOutBesiegedSettlementAction.cs:15`）—— `public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)`；攻城方突入被围定居点，回传本次冲突的伤亡清单与军队级伤亡计数。
- `ApplyBreakOut`（`BreakInOutBesiegedSettlementAction.cs:21`）—— `public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)`；守方突围离开被围定居点，回传本次冲突的伤亡清单与军队级伤亡计数。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Roster;

public static class SiegeBreach
{
    // 攻城方从陆路破城：结算伤亡并拿到清单
    public static void AttackersBreakIn()
    {
        TroopRoster casualties;
        int armyCasualtiesCount;

        BreakInOutBesiegedSettlementAction.ApplyBreakIn(
            out casualties,
            out armyCasualtiesCount,
            isFromPort: false);

        // casualties 现在装着本次破城产生的伤亡单位
        // armyCasualtiesCount 是军队层级的伤亡总数，可用于战报
        ReportBreach(casualties, armyCasualtiesCount);
    }

    // 守方从港口突围
    public static void DefendersBreakOutFromPort()
    {
        TroopRoster casualties;
        int armyCasualtiesCount;

        BreakInOutBesiegedSettlementAction.ApplyBreakOut(
            out casualties,
            out armyCasualtiesCount,
            isFromPort: true);

        ReportBreach(casualties, armyCasualtiesCount);
    }

    private static void ReportBreach(TroopRoster casualties, int armyCasualtiesCount)
    {
        // 交给战报 / UI 层使用
    }
}
```

## 参见

- [BeHostileAction](../BeHostileAction)——把两方推入敌对状态的入口，围城冲突的上游行为。
- [ActionNotes](../ActionNotes)——战役行为类的通用约定，含 `out` 参数这类接口惯例。
- [AddHeroToPartyAction](../AddHeroToPartyAction)——战斗后调整部队成员的常见后续动作。

## 导航

- [战役行为索引](../_index)——返回同桶全部 Action 页。
