---
title: "BarterModel"
description: "以物易物议价规则的抽象模型：还价冷却、NPC 可动用金币上限、溢价换关系的价格与物品议价罚项。"
---

# BarterModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class BarterModel : MBGameModel<BarterModel>`
**基类：** `MBGameModel<BarterModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`（声明见第 9 行）

## 概述

`BarterModel` 是战役系统中"以物易物议价"这条链路的抽象契约。它只声明四个抽象成员，覆盖还价行为的四个可调面：两次还价之间隔多少天（`BarterCooldownWithHeroInDays`）、NPC 最多拿出百分之几的金币参与交易（`MaximumPercentageOfNpcGoldToSpendAtBarter`）、用溢价买关系时每点关系怎么计价（`CalculateOverpayRelationIncreaseCosts`）、一件物品在当前交易里附带多少议价罚项（`GetBarterPenalty`）。

读这个契约时要连带确认两层入口：官方实现是 `DefaultBarterModel`（位于 `GameComponents`，`bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs` 第 12 行声明继承），当前生效实例从 `Campaign.Current.Models` 上的 `BarterModel` 属性取（`bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameModels.cs` 第 44 行声明）。想改还价手感，先读本页确认能覆写哪四个量，再读默认实现确认原版数值。

## 心智模型

把 `BarterModel` 想象成交易桌上的"还价计算器"，它回答四个问题：

- **多久能再谈**：`BarterCooldownWithHeroInDays`。默认实现返回 3（`DefaultBarterModel.cs:20`），即和同一英雄还价后 3 天内不再接受新还价。
- **对方最多出多少金币**：`MaximumPercentageOfNpcGoldToSpendAtBarter`。默认实现返回 0.25（`DefaultBarterModel.cs:40`），即 NPC 最多拿出其金币的 25% 放进交易。
- **溢价买关系什么价**：`CalculateOverpayRelationIncreaseCosts` 把"多付的钱"折成"关系点数"。默认实现的阶梯是 `1000 + 100 * n²`（`DefaultBarterModel.cs:53`，n 为当前关系值），钱不够整一阶时按比例掷骰决定是否再涨一点；`MaximumOverpayRelationBonus` 私有属性把单次可买的关系封顶为 3 点；若主角点了 `Charm.Tribute` perk，最终点数还要乘 perk 加成。
- **这件货要加多少罚项**：`GetBarterPenalty` 返回一个 `ExplainedNumber`。默认实现的基线分两档：货物的派系与交易任一方同派系时基线 0.4（`DefaultBarterModel.cs:83`）；货物与双方都无关的"第三方货"时基线为负——普通货 -2.1（`DefaultBarterModel.cs:131`）、牲畜坐骑 -8.4（`DefaultBarterModel.cs:123`）、食物 -12.6（`DefaultBarterModel.cs:127`）、完全无关派系的货直接 0（`DefaultBarterModel.cs:116`）。买卖双方的 `Charm.EffortForThePeople`、`Charm.SlickNegotiator`、`Trade.SelfMadeMan` perk 会在此基础上加减修正项。

注意罚项的正负号含义：正数是"对方为这件货物的归属付出的溢价"，负数是"货物脱离原派系后的折价"。读数时先看基线判归属，再看 perk 修正项。

## 怎么用

1. **拿到当前实例**：读 `Campaign.Current.Models` 的 `BarterModel` 属性（声明在 `GameModels.cs:44`），不要自己 `new`，该槽位由模型替换机制管理。
2. **查冷却与上限**：读 `BarterCooldownWithHeroInDays` 决定 UI 是否允许发起还价；读 `MaximumPercentageOfNpcGoldToSpendAtBarter` 估算对方能出的金币。
3. **报价前先算罚项**：对交易中的每件物品调用 `GetBarterPenalty`，把返回的 `ExplainedNumber` 计入报价，避免开出对方必拒的价格。
4. **溢价换关系时先询价**：调用 `CalculateOverpayRelationIncreaseCosts`，用返回值判断"这点关系值不值这个溢价"，而不是先付款再看涨了几点。
5. **自定义规则**：继承 `BarterModel` 实现四个抽象成员并注入模型槽位；只想调数值时，抄 `DefaultBarterModel` 的结构改返回常量即可。

## 关键成员

| 成员 | 行号 | 用途 |
|------|------|------|
| `public abstract class BarterModel : MBGameModel<BarterModel>` | `BarterModel.cs:9` | 类型声明；继承 `MBGameModel<BarterModel>` 使其成为可替换的战役模型组件，官方实现是 `DefaultBarterModel` |
| `public abstract int BarterCooldownWithHeroInDays { get; }` | `BarterModel.cs:13` | 与同一英雄两次还价之间的冷却天数；默认实现返回 3（`DefaultBarterModel.cs:20`） |
| `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` | `BarterModel.cs:17` | NPC 在一次还价中最多拿出的金币占其总金币的比例；默认实现返回 0.25（`DefaultBarterModel.cs:40`） |
| `public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)` | `BarterModel.cs:20` | 把溢价金额折算成可获得的关系点数；默认实现按 `1000 + 100 * n²` 阶梯扣费（`DefaultBarterModel.cs:53`），单次封顶受私有 `MaximumOverpayRelationBonus`（3 点）限制 |
| `public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)` | `BarterModel.cs:23` | 计算一件物品在本次交易中的议价罚项；默认实现按货物归属给基线（同派系 0.4，第三方普通货 -2.1、牲畜坐骑 -8.4、食物 -12.6），再叠加买卖双方的魅力/交易 perk 修正 |

## 真实示例

```csharp
// 拿到当前战役的还价模型
BarterModel barterModel = Campaign.Current.Models.BarterModel;

// 查冷却：和对方英雄上次还价后过了几天，够不够再谈一次
int cooldownDays = barterModel.BarterCooldownWithHeroInDays;

// 报价前先算这件物品的罚项（faction 取交易发起方的派系）
ExplainedNumber penalty = barterModel.GetBarterPenalty(
    Hero.MainHero.MapFaction, itemBarterable, otherHero, otherHero.PartyBelongedTo);

// 把罚项计入报价：对方实际认的价值 = 物品价值 + 罚项修正
float effectiveValue = itemValue + penalty.ResultNumber;

// 溢价换关系：先询价，判断这点关系值不值这个溢价
int relationGain = barterModel.CalculateOverpayRelationIncreaseCosts(otherHero, overpayAmount);
if (relationGain > 0)
{
    // 溢价值得：确认交易，关系至少涨 relationGain 点
}
```

## 参见

- [Hero](../../campaign/Hero)
- [Campaign](../../campaign/Campaign)

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
