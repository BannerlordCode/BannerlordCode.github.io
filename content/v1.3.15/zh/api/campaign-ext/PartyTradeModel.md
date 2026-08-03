---
title: "PartyTradeModel"
description: "为商队候选数量和队伍交易价格惩罚提供规则的可替换战役模型。"
---
# PartyTradeModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`  
**基类:** `MBGameModel<PartyTradeModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTradeModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTradeModel.cs`

## 一句话职责

它提供两项交易策略输入：商队高价值交易候选的数量上限，以及按队伍技能计算的交易价格惩罚因子；它不移动物品、不扣金币，也不代表一笔交易已经完成。价格模型、商队流程和交易 UI 可能重复读取这些值，因此实现必须保持纯计算语义。

## 心智模型

把 `PartyTradeModel` 放在 `GameModels` 的价格计算层，而不是把它当成交易服务。Sandbox 在战役启动阶段注册 `DefaultPartyTradeModel`，随后消费者通过 `Campaign.Current.Models.PartyTradeModel` 读取当前实例。`GetTradePenaltyFactor` 会被 `DefaultTradeItemPriceFactorModel` 放进完整价格链：它先把队伍交易惩罚乘入基础惩罚，再按买入或卖出方向换算价格。

```text
MobileParty / Trade skill / caravan policy
                 |
                 v
Campaign.Current.Models.PartyTradeModel
          +------+------------------+
          v                         v
CaravanTransactionHighestValueItemCount   GetTradePenaltyFactor
          |                         |
          v                         v
商队候选数量上限          DefaultTradeItemPriceFactorModel
                                    |
                                    v
Settlement / ItemObject / 买卖价格
```

惩罚因子改变的是价格计算输入，不是库存或金币状态。买入时价格链使用基础价格因子乘以 `1 + tradePenalty`，卖出时使用基础价格因子除以 `1 + tradePenalty`；后续还会叠加据点、物品类别、文化和其它 Perk 规则。商队数量属性是契约值，不是所有队伍的容量，也不是一个自动执行交易的命令。

## 何时使用，何时不要用

- 想改变某类队伍的交易价格惩罚、队伍技能对价格的影响，或商队高价值候选数量上限时，替换这个 Model。
- 想在 UI 或诊断中查看当前队伍的惩罚时，从 `Campaign.Current.Models.PartyTradeModel` 查询，不要在每个调用方复制 vanilla 技能公式。
- 不要在 Model 中扣金币、移动库存、刷新市场或调用交易 Action；真实状态变更属于交易流程和 `SellItemsAction` 等入口。
- 不要在 `OnSubModuleLoad` 或战役尚未装配时读取 `Campaign.Current.Models`；模型注册应在 `CampaignGameStarter` 的初始化阶段完成。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供运行期的 `Current.Models` 容器。 |
| [`GameModels`](../GameModels) | 按类型保存战役构造阶段注册的 Model。 |
| [`MobileParty`](../../campaign/MobileParty) | 是 `GetTradePenaltyFactor` 的输入，默认实现从它读取队伍技能效果。 |
| `DefaultSkillEffects.TradePenaltyReduction` | 默认模型加入 `ExplainedNumber` 的技能效果。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`DefaultTradeItemPriceFactorModel`](../DefaultTradeItemPriceFactorModel) | 将队伍惩罚因子乘入完整的买卖价格惩罚链。 |
| [`SellItemsAction`](../SellItemsAction) | 执行实际物品和金币变化；它不由本 Model 调用。 |
| `Caravan` 交易流程 | 读取 `CaravanTransactionHighestValueItemCount` 作为高价值候选上限；属性本身不执行交易。 |
| [`Settlement`](../../campaign/Settlement) | 提供商人、村庄/城镇和市场价格上下文。 |

### Action、事件与存档边界

模型没有自己的存档字段，也不派发交易事件。`DefaultTradeItemPriceFactorModel` 可能在一次 UI 预览或实际交易前多次计算价格，所以 `GetTradePenaltyFactor` 必须纯函数式；金币、库存和税收应由交易流程及其 Action 完成。

## 成员契约

| 成员 | 用途与调用时机 | 副作用边界 |
| --- | --- | --- |
| `CaravanTransactionHighestValueItemCount` | 为商队交易选择逻辑提供高价值物品候选数量上限。 | 默认返回 `3`；只返回整数，不添加物品、不扣金币。 |
| `GetTradePenaltyFactor(MobileParty party)` | 在价格模型计算某个客户队伍的买卖价格时，返回该队伍的交易惩罚因子。 | 默认从 `1` 的 `ExplainedNumber` 加入 `TradePenaltyReduction` 后取倒数；只返回 `float`，不修改队伍或市场。 |

默认 1.3.15/1.4.5 实现都以 `1f` 初始化 `ExplainedNumber`，调用 `SkillHelper.AddSkillBonusForParty(DefaultSkillEffects.TradePenaltyReduction, party, ref explainedNumber)`，再返回 `1f / explainedNumber.ResultNumber`。技能修正通常会降低惩罚因子，但最终价格仍由完整价格模型决定；不能把这个返回值直接当成金币金额或最终物品价格。

## 真实获取路径

下面的代码从当前战役读取两个实际公开入口，适合价格诊断或展示：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public bool TryReadTradePolicy(out int caravanLimit, out float penaltyFactor)
{
    caravanLimit = 0;
    penaltyFactor = 1f;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyTradeModel model = Campaign.Current.Models.PartyTradeModel;
    caravanLimit = model.CaravanTransactionHighestValueItemCount;
    penaltyFactor = model.GetTradePenaltyFactor(MobileParty.MainParty);
    return true;
}
```

真实价格消费者还会走 `Campaign.Current.Models.TradeItemPriceFactorModel` 和据点/物品上下文；如果需要显示最终价格，应调用完整价格模型，而不是把 `penaltyFactor` 直接乘到 `ItemObject.Value` 上。

## 替换模型的安全边界

自定义模型应在 `InitializeGameStarter` 注册，保存清晰的 vanilla delegate，避免在运行中的 `CampaignBehaviorBase` 里调用 `AddModel` 期待它重建已有的 `GameModels`。如果只是调整队伍技能修正，委托 vanilla `GetTradePenaltyFactor` 后加有限因子；如果修改商队候选上限，不要把这个值复用成普通队伍容量。

## 风险与排错顺序

1. **战役尚未建立:** 过早读取 `Campaign.Current` 或强类型 Model 属性可能为空；跨模式代码应使用 `GetGameModel<PartyTradeModel>()` 并判空。
2. **把因子当最终价格:** `GetTradePenaltyFactor` 只是价格链中的输入，方向、据点、物品类别和其它 Perk 仍会继续改变结果。
3. **计算中产生副作用:** 价格评估可能重复执行，在这里改金币、库存或据点会造成重复交易或坏状态。
4. **运行期替换失败:** `CampaignBehaviorBase` 中的 `AddModel` 不会重建已经装配的 `Campaign.Current.Models`；替换时机和模块注册顺序决定最终实例。
5. **错误复用商队上限:** `CaravanTransactionHighestValueItemCount` 默认 `3` 只表达商队交易契约，不是 party size、库存容量或 UI 通用限制。
6. **零或负因子:** 返回无界、负数或语义相反的因子会把价格链推到异常范围，应在完整买入/卖出价格路径上验证边界。

## 版本与导航

v1.3.15 与 v1.4.5 的两个抽象成员相同，默认商队上限仍为 `3`，惩罚因子仍是 `TradePenaltyReduction` 修正后 `ExplainedNumber` 的倒数。实际调用方和其它价格因素可能随模块版本变化，跨版本实现应委托目标版本的默认模型。

- [父级：Campaign 扩展 API](../)
- [队伍模型目录](../models/)
- [↔ PartyImpairmentModel](../PartyImpairmentModel)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [GameModels](../GameModels)
- [CampaignGameStarter](../CampaignGameStarter)
- [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel)
- [MobileParty](../../campaign/MobileParty)
- [SellItemsAction](../SellItemsAction)
