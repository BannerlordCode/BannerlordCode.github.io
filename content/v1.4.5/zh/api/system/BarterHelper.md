---
title: "BarterHelper"
description: "计算 AI barter 应添加或移除哪些 barterable，但不直接应用交易的辅助。"
---
# BarterHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class BarterHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## 一句话职责

`BarterHelper` 为 AI barter 计算要加入或移除的 [Barterable](../../campaign/Barterable) 及数量，但不会标记 offer、改变数量或应用交易。

## 心智模型

这个 helper 是围绕 [BarterData](../../campaign/BarterData) 的建议层。它从目标 [IFaction](../../campaign/IFaction) 的视角评估当前已提供的 barterable，再返回由调用方应用的 `(barterable, count)` 元组。

- `GetAutoBalanceBarterablesAdd` 计算 offerer 为满足负 balance 还需要加入的价值。它只考虑 `offererHero` 拥有的 barterable，避免重复的物品 entry，按价值比例选择候选，并在单个 `GoldBarterable` 足以满足缺口时使用直接路径。
- `GetAutoBalanceBarterablesToRemove` 计算从当前 offer 中移除哪些 barterable 及数量，来减少对目标 faction 提供的价值。它只操作本地候选列表，不从 `BarterData` 中移除对象。
- 两个方法在没有正价值候选时停止。因此当现有 barterable 无法完成平衡时，返回不完整的列表是合法结果。

## 什么时候使用，什么时候不要使用

- **适合：** 已拥有 `BarterData`、双方 faction 和 offerer Hero 的 AI barter 流程中调用。
- **适合：** 在调用方修改 `CurrentAmount` 前，先取得现有 barterable 和数量组成的建议计划。
- **不要：** 把它当作玩家 barter UI 校验器，或替代 `BarterManager` 的接受和应用流程。
- **不要假定：** 返回元组已经修改 `IsOffered` 或 `CurrentAmount`；调用方必须显式应用。
- **不要复用：** barter data、faction 价值或当前数量改变后的旧计划；它只代表计算当时的状态。

## 依赖关系

- 输入状态：[BarterData](../../campaign/BarterData)、其中已提供的 [Barterable](../../campaign/Barterable) 集合，以及 `CurrentAmount`/`MaxAmount`。
- 价值评估：[IFaction](../../campaign/IFaction)、每个 barterable 的 `GetValueForFaction` 和 `GetUnitValueForFaction`。
- 所有者筛选：[Hero](../../campaign/Hero) 和 `Barterable.OriginalOwner`；Item barterable 会按底层 `EquipmentElement.Item` 避免重复。
- 特殊情况：当可用价值足够覆盖剩余缺口时，`GoldBarterable` 会走直接候选路径。
- 直接调用方：`BarterManager.MakeBalanced` 应用 `GetAutoBalanceBarterablesAdd` 的结果；helper 不拥有这次修改，也不决定最终 `ApplyBarterOffer`。

## 公开成员

### GetAutoBalanceBarterablesAdd

`GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)` 返回能降低目标 faction 负 barter balance 的新增项。它先计算当前 offer 的价值，把负值乘以 `fulfillRatio`，再从 `offererHero` 可提供且尚未 offer 的项目中选取，直到达到目标或没有候选。

返回数量不会超过每个 barterable 的可用数量。该方法只构造并返回 `List<(Barterable, int)>`，不会调用 `SetIsOffered`，也不会更新 `CurrentAmount`。

```csharp
foreach (var (barterable, count) in BarterHelper.GetAutoBalanceBarterablesAdd(
    barterData,
    factionToBalanceFor,
    offerer,
    offererHero,
    fulfillRatio: 1f))
{
    if (!barterable.IsOffered)
    {
        barterable.SetIsOffered(true);
        barterable.CurrentAmount = 0;
    }

    barterable.CurrentAmount += count;
}
```

这就是 `BarterManager.MakeBalanced` 使用的修改边界：helper 返回建议之后，由调用方应用每一项。

### GetAutoBalanceBarterablesToRemove

`GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)` 返回从当前 offer 移除数量的建议。它从目标 faction 的价值和 offerer 的相对价值出发，对已有 offer 项排序，每项最多移除其 `CurrentAmount`，最后返回计划。

在 v1.4.5 方法体中会读取 `offerer` 来比较单位价值，但不会读取 `offererHero`；两者仍然保留在公开签名中。不要为该方法臆造 `offererHero` 所有者筛选，也不要认为它已经改变 barter。调用方必须扣减返回数量并重新验证 offer。

```csharp
foreach (var (barterable, count) in BarterHelper.GetAutoBalanceBarterablesToRemove(
    barterData,
    factionToBalanceFor,
    offerer,
    offererHero))
{
    barterable.CurrentAmount -= count;
    if (barterable.CurrentAmount == 0)
    {
        barterable.SetIsOffered(false);
    }
}
```

上例展示的是消费方的修改边界；helper 本身只返回建议。

## 真实示例

`BarterManager.ExecuteAIBarter` 建立 `BarterData` 上下文，再为双方 faction 调用平衡流程，最后检查双方 offer value 并应用交易。已经位于该流程中的 Campaign behavior 或扩展可以使用如下源码同形的调用：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

public static class AiBarterBalance
{
    public static void AddMissingOffer(
        BarterData barterData,
        IFaction factionToBalanceFor,
        IFaction offerer,
        Hero offererHero)
    {
        foreach (var (barterable, count) in BarterHelper.GetAutoBalanceBarterablesAdd(
            barterData,
            factionToBalanceFor,
            offerer,
            offererHero,
            fulfillRatio: 1f))
        {
            if (!barterable.IsOffered)
            {
                barterable.SetIsOffered(true);
                barterable.CurrentAmount = 0;
            }

            barterable.CurrentAmount += count;
        }
    }
}
```

这段代码要求传入 Campaign barter manager 创建的实时 `BarterData`；它不构造假的 barterable，也不绕过 `BarterManager` 的最终接受检查。

## 风险与存档边界

- **Campaign 阶段：** `BarterData` 会在 Campaign Model 和实时 faction/Hero 上下文中创建；不要在主菜单或 barter 上下文结束后调用。
- **即时价值：** faction 估值、offer 数量和物品重复检查会在返回后改变；offer 变化时应重新计算。
- **不是交易：** 返回的元组不是事件、存档记录或批准结果；绕过周边 barter 校验直接应用，可能形成对方拒绝的 offer。
- **零/负候选：** 平衡循环只接受正价值候选；必须处理空列表或部分结果，不能把它当成已完全平衡。
- **存档边界：** `BarterData`、barterable 和返回的元组列表都是短生命周期谈判状态；保存受支持的 Campaign 状态和最终 Action，不要保存缓存的平衡计划。

## 版本注记

本页按 v1.4.5 `Helpers/BarterHelper.cs` 编写。`GetAutoBalanceBarterablesToRemove` 会读取 `offerer` 做价值评估，但不会读取 `offererHero`；页面按实际方法体而不是参数名称解释。

## 导航

- [↑ API 系统索引](../)
- [相关：BarterData](../../campaign/BarterData)
- [相关：Barterable](../../campaign/Barterable)
- [相关：IFaction](../../campaign/IFaction)
- [相关：Hero](../../campaign/Hero)
- [相关：Campaign](../../campaign/Campaign)
