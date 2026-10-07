---
title: "DefaultPartyTradeModel"
description: "商队交易规则模型：CaravanTransactionHighestValueItemCount 硬编码 3，GetTradePenaltyFactor 用 TradePenaltyReduction 技能加成算惩罚因子后取倒数。"
---
# DefaultPartyTradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyTradeModel : PartyTradeModel`
**Base:** `PartyTradeModel`（抽象基类，定义 2 个 abstract 成员）
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`（全文 29 行）

## 概述

`DefaultPartyTradeModel` 是**商队交易规则**的默认实现。它回答两个问题：**一次商队交易里最多涉及几种高价值物品**，以及**某个阵营的交易惩罚因子是多少**。

**两个成员，各管一件事。** `CaravanTransactionHighestValueItemCount` 是一个硬编码常量 `3`——商队交易界面里「高价值物品」分类的数量上限。`GetTradePenaltyFactor(MobileParty party)` 则是一个计算：先拿 `TradePenaltyReduction` 技能加成，再取倒数。

**惩罚因子的含义。** 返回值是一个**乘数**，在 `DefaultTradeItemPriceFactorModel` 里被直接乘到物品价格上。`TradePenaltyReduction` 技能越高 → `explainedNumber.ResultNumber` 越大 → `1f / result` 越小 → 惩罚越轻。**没有技能加成时返回 `1f`（即无惩罚）。**

**注册与持有。** 在 `SandBoxManager` 里通过 `gameStarter.AddModel<PartyTradeModel>(new DefaultPartyTradeModel())` 注册，由 `GameModels` 的 `PartyTradeModel` 属性持有，通过 `Campaign.Current.Models.PartyTradeModel` 全局访问。

## 心智模型

把它当成**「商队交易的两条规则」**，三段定位：

**第一段：谁创建它。** `SandBoxManager` 在初始化时 `new DefaultPartyTradeModel()` 并注册到模型容器。**你不需要自己创建它**——它已经在 `Campaign.Current.Models.PartyTradeModel` 上了。

**第二段：谁调用它。** 唯一的业务调用方是 `DefaultTradeItemPriceFactorModel`。在 `GetItemPrice` 的计算链里，`GetTradePenaltyFactor` 的返回值被乘到物品价格上。**这是它存在的唯一理由**——给物品定价模型提供「这个阵营交易时被惩罚多少」的系数。

**第三段：你怎么改它。** 两条路：继承 `PartyTradeModel` 写自己的实现，然后通过 `Game.Current.ReplaceModel<PartyTradeModel>(new MyModel())` 替换；或者直接继承 `DefaultPartyTradeModel` 只覆写其中一个成员。**注意注册时用的是基类类型 `PartyTradeModel`**，所以 `ReplaceModel` 也要用 `PartyTradeModel` 而不是 `DefaultPartyTradeModel`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CaravanTransactionHighestValueItemCount` | `public override int CaravanTransactionHighestValueItemCount { get; }` | 硬编码返回 `3`。商队交易界面里「高价值物品」分类的数量上限。**没有计算逻辑，就是一个常量。** |
| `GetTradePenaltyFactor` | `public override float GetTradePenaltyFactor(MobileParty party)` | 用 `ExplainedNumber` 从 `1f` 起步，调 `SkillHelper.AddSkillBonusForParty(DefaultSkillEffects.TradePenaltyReduction, party, ref explainedNumber)` 加上交易惩罚减免技能加成，最后 `return 1f / explainedNumber.ResultNumber;`。**返回值是惩罚乘数：技能越高，值越小，惩罚越轻。** |

## 真实示例

**读取当前交易惩罚因子**（最常见的用法——你想知道某个阵营现在交易时被惩罚多少）：

```csharp
MobileParty party = MobileParty.PlayerParty;
float penalty = Campaign.Current.Models.PartyTradeModel.GetTradePenaltyFactor(party);

// penalty 是一个乘数，1f = 无惩罚，0.5f = 价格减半，2f = 价格翻倍。
Debug.Print("trade penalty factor = " + penalty, 0);
```

**在物品定价链里使用**（这是官方的实际调用方式，来自 `DefaultTradeItemPriceFactorModel.cs:76`）：

```csharp
// 官方调用链：先算出基础价格，再乘上交易惩罚因子。
float basePrice = GetBasePrice(item, settlement);
float penaltyFactor = (clientParty != null)
    ? Campaign.Current.Models.PartyTradeModel.GetTradePenaltyFactor(clientParty)
    : 1f;
float finalPrice = basePrice * penaltyFactor;
```

**自定义模型替换**（继承 `DefaultPartyTradeModel` 只改惩罚计算）：

```csharp
public class MyPartyTradeModel : DefaultPartyTradeModel
{
    public override float GetTradePenaltyFactor(MobileParty party)
    {
        // 原版：1f / (1 + TradePenaltyReduction 加成)
        // 改版：惩罚减半，即乘数更接近 1。
        float base = base.GetTradePenaltyFactor(party);
        return 1f - (1f - base) * 0.5f;
    }
}

// 注册（注意用基类类型）：
Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel());
```

## 风险与边界

- **`CaravanTransactionHighestValueItemCount` 是硬编码 `3`。** 没有配置、没有存档字段、没有技能加成。**想改只能继承覆写。**
- **`GetTradePenaltyFactor` 返回的是乘数不是百分比。** `1f` 表示无惩罚，`0.5f` 表示价格减半。**不要当百分比用。**
- **`ReplaceModel` 要用 `PartyTradeModel` 而不是 `DefaultPartyTradeModel`。** 注册时 `SandBoxManager` 用的是 `AddModel<PartyTradeModel>`，所以替换也必须用基类类型，否则模型容器里会有两个实例。
- **`GetTradePenaltyFactor` 的 `party` 参数可以是 null。** 官方调用方 `DefaultTradeItemPriceFactorModel` 做了 null 检查后才调用。**但 `GetTradePenaltyFactor` 本身不做 null 检查**——传 null 会 NRE。
- **`ExplainedNumber` 的 `ResultNumber` 是 `float`。** 除法 `1f / result` 在 `result` 为 0 时会得到 `Infinity`。**但 `ExplainedNumber` 从 `1f` 起步，`AddSkillBonusForParty` 只会加正数，所以 `result` 至少为 `1f`，不会除零。**

## 怎么用

### 怎么拿到它

不需要创建。**它已经在 `Campaign.Current.Models.PartyTradeModel` 上了。** 直接通过 `Campaign.Current.Models.PartyTradeModel` 访问。

### 典型用法

**只读查询**——想知道当前交易惩罚：

```csharp
float penalty = Campaign.Current.Models.PartyTradeModel.GetTradePenaltyFactor(MobileParty.PlayerParty);
```

**替换模型**——想改规则：

```csharp
Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel());
```

### 最容易踩的坑

**用 `DefaultPartyTradeModel` 而不是 `PartyTradeModel` 做 `ReplaceModel`。**

`SandBoxManager` 注册时用的是 `AddModel<PartyTradeModel>(new DefaultPartyTradeModel())`。模型容器按**基类类型**索引。如果你写 `Game.Current.ReplaceModel<DefaultPartyTradeModel>(new MyPartyTradeModel())`，容器里会同时存在 `PartyTradeModel` 和 `DefaultPartyTradeModel` 两个槽位，而 `Campaign.Current.Models.PartyTradeModel` 读的是前者——**你的替换根本不会生效。**

正确写法：

```csharp
Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel());
```

## 跨版本提示

`DefaultPartyTradeModel` 的 public 表面在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全稳定**：同样 2 个 `public override` 成员、同样硬编码的 `3`、同样的 `1f / result` 计算。跨三个大版本没有签名级变化。

**变的是 `TradePenaltyReduction` 技能的加成幅度。** `SkillHelper.AddSkillBonusForParty` 的数值在不同版本有过调整，但调用方式不变。**如果你的 mod 对惩罚精度敏感，注意跨版本测试。**

## 依赖关系

- 基类：[PartyTradeModel](../PartyTradeModel) 定义 2 个 abstract 成员，`DefaultPartyTradeModel` 是它们唯一的官方实现
- 调用方：[DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel) 在 `GetItemPrice` 计算链里调用 `GetTradePenaltyFactor`
- 注册方：[SandBoxManager](../SandBoxManager) 通过 `AddModel<PartyTradeModel>` 注册
- 持有方：[GameModels](../GameModels) 的 `PartyTradeModel` 属性，通过 `Campaign.Current.Models.PartyTradeModel` 全局访问
- 技能系统：[SkillHelper](../../system/SkillHelper).AddSkillBonusForParty + [DefaultSkillEffects](../DefaultSkillEffects).TradePenaltyReduction
- 数值容器：[ExplainedNumber](../ExplainedNumber)（`TaleWorlds.Core`）
- 桶首页：[campaign API 分区](../)

## 导航

- [本区域目录](../)
- [API 参考](../../)
- [版本首页](../../../)
