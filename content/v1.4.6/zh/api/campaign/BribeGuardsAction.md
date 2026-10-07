---
title: "BribeGuardsAction"
description: "支付金币贿赂定居点守卫以换取进入权限的静态行为类。"
---
# BribeGuardsAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BribeGuardsAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/BribeGuardsAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BribeGuardsAction` 是「花钱买路」的最小实现：给定一个定居点和一笔金币，让守卫放行，从而允许玩家势力进入本不该随意进入的定居点。它只有一个入口 `Apply(Settlement, int gold)`，把「扣多少钱、守卫是否接受、是否放行」全部封装在一次调用里。

## 心智模型

把它想成一道闸机：定居点是闸机，金币是票。你不需要自己从金库扣钱，也不需要自己改守卫态度——本类负责扣款、判定守卫是否接受以及放行。因此调用方的职责只有两件：

1. 确认这个定居点 *确实需要* 贿赂才能进（否则调用只是白白浪费金币）；
2. 传入你愿意支付的金币数额。

金额由你决定，成败由本类决定。

## 怎么用

### 怎么拿到

静态类，直接调用：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
```

### 典型用法

```csharp
// 贿赂守卫进入定居点
BribeGuardsAction.Apply(settlement, 500);
```

### 坑

- **`gold` 是你要付出的金额，不是结算结果**；不要把它当作「成功后返还」的字段。
- 调用前应确认玩家有足够金币——本类不会替你做「付不起」的 UI 交互。
- 这是**一次性**动作，不是持久化的通行许可；离开后再进可能需要重新处理。
- 只有存在守卫可贿赂的定居点才有意义，对己方定居点调用通常没有意义。

## 关键成员

- `Apply`（`BribeGuardsAction.cs:26`）—— `public static void Apply(Settlement settlement, int gold)`；对 `settlement` 的守卫支付 `gold` 金币以换取进入权限，是本类唯一入口。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static class GateEntry
{
    // 尝试用金币进入一个敌对/受限定居点
    public static bool TryEnterByBribe(Settlement settlement, int gold, out string reason)
    {
        reason = null;

        if (settlement == null)
        {
            reason = "settlement 为空";
            return false;
        }

        if (gold <= 0)
        {
            reason = "贿赂金额必须为正";
            return false;
        }

        // 由本类负责扣款、判定守卫是否接受并放行
        BribeGuardsAction.Apply(settlement, gold);
        return true;
    }
}
```

## 参见

- [BeHostileAction](../BeHostileAction)——与定居点/势力进入敌对状态的对照动作，贿赂失败后的常见走向。
- [ActionNotes](../ActionNotes)——战役行为类的通用约定与调用时机说明。
- [ChangeKingdomAction](../ChangeKingdomAction)——改变势力归属的另一类政治/外交行为，可对照其参数化风格。

## 导航

- [战役行为索引](../_index)——返回同桶全部 Action 页。
