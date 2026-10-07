---
title: "ChangeClanInfluenceAction"
description: "按有符号增量增加或减少指定家族影响力的静态行为类。"
---
# ChangeClanInfluenceAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeClanInfluenceAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeClanInfluenceAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeClanInfluenceAction` 是家族影响力的统一增减入口：给定一个 `Clan` 和一个浮点增量，按增量调整该家族的影响力。正数增加、负数减少，一次调用完成，不需要调用方自己去碰影响力字段。

## 心智模型

把家族影响力看成一根可正可负的滑杆，本类就是那根滑杆的 `+=`。它不做上下限裁剪，也不做「为什么加」的判定，只做数值变更与随之而来的派生状态刷新。所以心智模型很简单：

- 你提供 *哪个家族* 和 *变动多少*；
- 本类负责把变动写进去并广播给监听者。

需要「上限/下限」或「是否允许变负」这类规则时，请在调用方判断，而不是期望本类兜底。

## 怎么用

### 怎么拿到

静态类，直接调用：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
```

### 典型用法

```csharp
// 增加影响力
ChangeClanInfluenceAction.Apply(clan, 10f);

// 减少影响力
ChangeClanInfluenceAction.Apply(clan, -10f);
```

### 坑

- **`amount` 是有符号增量**，不是「设置成多少」；想设为固定值要先算差值。
- 传 `0f` 是无意义的空操作，不要用它做「占位刷新」。
- 影响力变动会触发家族/王国层的派生更新，不要在遍历集合时同步调用。
- 不要在家族对象尚未初始化完成时调用。

## 关键成员

- `Apply`（`ChangeClanInfluenceAction.cs:16`）—— `public static void Apply(Clan clan, float amount)`；对 `clan` 的影响力按 `amount` 做有符号增减，是本类唯一入口。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static class InfluenceReward
{
    // 战斗胜利后给家族加影响力
    public static void RewardVictory(Clan clan, float baseReward)
    {
        if (clan == null || baseReward <= 0f)
        {
            return;
        }

        ChangeClanInfluenceAction.Apply(clan, baseReward);
    }

    // 政治惩罚：扣除影响力
    public static void PunishClan(Clan clan, float penalty)
    {
        if (clan == null || penalty <= 0f)
        {
            return;
        }

        // 用负数表达「减少」
        ChangeClanInfluenceAction.Apply(clan, -penalty);
    }
}
```

## 参见

- [ChangeKingdomAction](../ChangeKingdomAction)——同属政治/势力层面的状态变更行为，可对照其参数化调用方式。
- [ActionNotes](../ActionNotes)——战役行为类的通用约定与调用时机说明。
- [BeHostileAction](../BeHostileAction)——改变势力关系的对照动作。

## 导航

- [战役行为索引](../_index)——返回同桶全部 Action 页。
