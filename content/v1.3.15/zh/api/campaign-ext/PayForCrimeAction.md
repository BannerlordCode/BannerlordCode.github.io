---
title: "PayForCrimeAction"
description: "结清玩家对指定阵营犯罪值的战役动作：按支付方式扣除金币或影响力、执行惩罚，并通过下游 Action 更新持久状态。"
---
# PayForCrimeAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PayForCrimeAction`  
**Base:** `System.Object`（静态类，不可实例化）  
**Source:** `TaleWorlds.CampaignSystem/Actions/PayForCrimeAction.cs`

## 概述

`PayForCrimeAction` 是玩家向一个 `IFaction` 处理犯罪值的事务入口。它不只是把 `MainHeroCrimeRating` 写低：入口会按 `CrimeModel.PaymentMethod` 的标志依次支付金币、扣除玩家氏族影响力、让主角受伤或死亡，最后在主角仍存活时通过 `ChangeCrimeRatingAction` 更新犯罪值。官方 `CrimeCampaignBehavior` 在城镇或城堡的犯罪处置菜单后果中调用它。

## 心智模型

把一次调用看成“先报价，后提交”的战役事务。`GetClearCrimeCost` 只向当前 `CrimeModel` 查询指定方式的价格；`Apply` 不检查菜单条件、余额、当前定居点，也不会确认传入阵营是否就是玩家正在处理指控的阵营。官方流程先用同一阵营和支付方式显示价格并检查资源，玩家确认后才提交动作。

不要直接写 `Hero.MainHero.Gold`、`Clan.PlayerClan.Influence` 或 `IFaction.MainHeroCrimeRating`。这些字段分别有金币交易事件、影响力动作和犯罪值事件等下游契约；绕过 Action 会让监听这些变化的 Behavior、通知和其他模组看不到完整事务。

## 入口契约与官方调用时机

```csharp
public static float GetClearCrimeCost(
    IFaction faction,
    CrimeModel.PaymentMethod paymentMethod)

public static void Apply(
    IFaction faction,
    CrimeModel.PaymentMethod paymentMethod)
```

`Apply` 立即进入私有 `ApplyInternal`，没有延迟队列，也不返回成功状态。`PaymentMethod` 是 `[Flags]` 枚举；组合方式会按金币、影响力、惩罚、处决的固定顺序执行。`CrimeCampaignBehavior` 的菜单条件先调用 `GetClearCrimeCost`，金币、影响力、肉刑以及金币加肉刑等菜单后果再调用 `Apply`。这意味着模组也应在玩家确认操作的后果回调中调用，而不是在菜单条件、每日 tick 或存档同步阶段调用。

## 状态变更与事件级联

| 分支 | `ApplyInternal` 的状态变更 | 下游级联 |
| --- | --- | --- |
| `Gold` | 以 `Hero.MainHero` 为付款者，将模型报价截为 `int` 后支付 | `GiveGoldAction.ApplyBetweenCharacters` 修改金币并派发金币交易事件；随后调用 `SkillLevelingManager.OnBribeGiven` |
| `Influence` | 从 `Clan.PlayerClan` 扣除模型报价 | `ChangeClanInfluenceAction.Apply` 负责影响力变更及其事件 |
| `Punishment` | 按主角当前生命值计算死亡概率；未死亡则让主角负伤，并有 50% 概率记录受刑技能效果 | 死亡路径调用 `KillCharacterAction.ApplyByMurder`；存活路径继续降低犯罪值 |
| `Execution` | 无条件标记死亡路径并谋杀主角 | 交给 `KillCharacterAction` 完成英雄死亡级联，不再执行清罪步骤 |
| 主角未死亡 | 目标犯罪值取“当前值”和模型 `GetCrimeRatingAfterPunishment()` 的较小者 | `ChangeCrimeRatingAction.Apply` 写入犯罪值并派发 `OnCrimeRatingChanged`；该 Action 自身还负责犯罪值越界触发的关系和宣战逻辑 |

`GiveGoldAction` 会把实际付款额限制为主角现有金币，但 `PayForCrimeAction` 仍会继续清罪。因此余额检查属于调用者契约，不能因为下游会 clamp 就省略。影响力分支同样应由 UI 或 Behavior 先确认可支付。

## 关键成员、副作用与调用时机

| 成员 | 何时调用 | 需要承担的副作用 |
| --- | --- | --- |
| `GetClearCrimeCost(faction, method)` | 展示选项、构造 tooltip 或在提交前复核价格 | 读取 `Campaign.Current.Models.CrimeModel`；需要有效战役、阵营和模型，不会改变状态 |
| `Apply(faction, method)` | 玩家已确认并且调用者已验证阵营、方式与资源后 | 可能同时扣金币和影响力、伤害或杀死主角、降低犯罪值，并同步触发多个下游事件 |
| `ApplyInternal` | 仅由 `Apply` 同步调用，模组不可直接访问 | 决定分支顺序和死亡后是否跳过清罪，是整个事务的真实边界 |

## 真实获取路径示例

下面的形状对应官方犯罪菜单的金币分支：阵营来自当前定居点，价格来自当前战役模型，余额检查发生在提交动作之前。

```csharp
public static void PayCurrentSettlementFine()
{
    if (Campaign.Current == null)
    {
        return;
    }

    Settlement settlement = Settlement.CurrentSettlement;
    IFaction faction = settlement?.MapFaction;
    if (faction == null)
    {
        return;
    }

    CrimeModel.PaymentMethod method = CrimeModel.PaymentMethod.Gold;
    int cost = (int)PayForCrimeAction.GetClearCrimeCost(faction, method);
    if (Hero.MainHero.Gold >= cost)
    {
        PayForCrimeAction.Apply(faction, method);
    }
}
```

这个方法应由战役菜单的 consequence 或等价的一次性确认回调调用。不要把同一调用同时挂到条件回调和后果回调，否则会提交两次持久状态变更。

## 生命周期、存档与坏档风险

- `Campaign.Current`、`Hero.MainHero`、`Clan.PlayerClan` 和传入阵营必须已经建立；主菜单、模块加载早期或战役卸载阶段调用会遇到空单例或无效模型。
- `Apply` 没有幂等保护。重复调用会重复扣资源、重复掷惩罚死亡概率，并再次触发事件；在 `SyncData`、加载回调或可重复的菜单条件中调用会把重复结果写进存档。
- `Punishment` 和 `Execution` 是英雄生命周期入口，不是视觉演出。调用返回后必须重新检查 `Hero.MainHero.DeathMark`，不要继续假设玩家英雄仍可进入菜单或遭遇流程。
- 不要传入未经 `CrimeModel` 支持的任意标志组合。尤其 `ExMachina` 没有资源支付分支，却仍会落入未死亡后的犯罪值更新；它应只由理解该模型契约的系统流程使用。
- 金币、影响力、生命/死亡和犯罪值都是持久战役状态。直接改字段或在半加载对象上调用，可能造成资源、事件消费者与存档状态不同步，而不是一次可安全回滚的 UI 操作。

## 版本注记

v1.3.15 与 v1.4.5 的公开入口、支付分支顺序和主要副作用一致。v1.4.5 源码把部分下游 Action 的默认参数省略在调用点，但没有改变 `GetClearCrimeCost` 或 `Apply` 的公开契约；跨版本模组仍应重新编译，并让当前版本的 `CrimeModel` 决定价格和阈值。

## 依赖关系与导航

- 上游：官方 [CrimeCampaignBehavior](../CrimeCampaignBehavior/) 从 [Settlement](../../campaign/Settlement/) 的 `MapFaction` 取得目标阵营，并在菜单条件中先报价。
- 下游：[CrimeModel](../CrimeModel/) 决定价格和犯罪阈值；[GiveGoldAction](../GiveGoldAction/)、[ChangeClanInfluenceAction](../ChangeClanInfluenceAction/)、[KillCharacterAction](../KillCharacterAction/) 与 [ChangeCrimeRatingAction](../ChangeCrimeRatingAction/) 承担实际状态和事件级联。
- Parent（父级）：[campaign-ext API](../)
- Children（子项）：无独立子页；`GetClearCrimeCost` 与 `Apply` 的调用时机已在本页成员章节说明
- Sibling（同级）：[CrimeModel](../CrimeModel/) · [ChangeCrimeRatingAction](../ChangeCrimeRatingAction/)
- Related（相关）：[Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/) · [CampaignEvents](../CampaignEvents/)
