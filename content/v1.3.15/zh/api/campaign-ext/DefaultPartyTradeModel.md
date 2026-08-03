---
title: "DefaultPartyTradeModel"
description: "PartyTradeModel 的 Sandbox 默认实现：以商队数量上限 3 和 TradePenaltyReduction 技能计算队伍交易惩罚因子。"
---

# DefaultPartyTradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyTradeModel : PartyTradeModel`  
**Base:** `PartyTradeModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`  
**Contract:** [PartyTradeModel](../PartyTradeModel/)

## 一句话职责

它是 Sandbox 注册的 vanilla 交易策略：把商队高价值交易数量限制为 `3`，并把队伍的 `TradePenaltyReduction` 技能效果转换为交易价格惩罚因子。

## 心智模型

`DefaultPartyTradeModel` 不是应该由 mod 在运行期自行 `new` 出来调用的服务，而是 [PartyTradeModel](../PartyTradeModel/) 契约的默认实现。SandboxManager 在战役初始化时通过 `AddModel(new DefaultPartyTradeModel())` 注册它；`GameModels` 随后把最后注册的同类型实例暴露到 `Campaign.Current.Models.PartyTradeModel`。

价格模型调用它时只得到一个因子。默认实现不触碰 `MobileParty` 的金币、据点库存或交易 Action。若 mod 只想调整一项规则，应继承它并覆盖最小成员，再在 `InitializeGameStarter` 中追加自己的模型，让官方实现继续承担未改部分。

## 何时使用，何时不要用

- 以 vanilla 行为为基线，只改商队数量上限或交易惩罚公式时，继承 `DefaultPartyTradeModel` 最省风险。
- 只想读当前规则时，读取 `Campaign.Current.Models.PartyTradeModel`，不要额外创建一个默认实例，因为它可能不是当前注册顺序下的最终模型。
- 不要在 `GetTradePenaltyFactor` 中修改队伍或市场状态；价格计算可能被多个消费者重复调用。
- 不要在战役运行期调用 `AddModel` 期待热替换。覆盖必须发生在 `InitializeGameStarter`，并考虑其他模块的注册顺序。

## 依赖与消费者

- [PartyTradeModel](../PartyTradeModel/) 定义两个必须实现的成员。
- [GameModels](../GameModels/) 按类型收集并暴露最终实例。
- [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/) 调用 `GetTradePenaltyFactor`，把结果乘入买卖价格因子。
- [MobileParty](../../campaign/MobileParty/) 提供默认公式所需的队伍技能效果。

## 成员说明

| 成员 | Vanilla 行为 | 调用时机与副作用 |
|---|---|---|
| `CaravanTransactionHighestValueItemCount` | 始终返回 `3`。 | 商队交易选择逻辑读取；只返回上限，不执行交易。 |
| `GetTradePenaltyFactor(MobileParty party)` | 创建初始值为 `1` 的 `ExplainedNumber`，加入 `DefaultSkillEffects.TradePenaltyReduction` 的队伍技能加成，返回 `1 / ResultNumber`。 | 价格因子计算期间调用；只读队伍技能，不改队伍或市场。 |

这个结果只是价格链中的一个乘数。城镇/村庄、交易品类别、买卖方向和其他 perk 的修正仍由 [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/) 处理。

## 真实获取与覆盖示例

运行中的读取应拿到 `GameModels` 中的实例：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

PartyTradeModel tradeModel = Campaign.Current.Models.PartyTradeModel;
float penalty = tradeModel.GetTradePenaltyFactor(MobileParty.MainParty);
```

如果需要保留 vanilla 公式，只覆盖商队上限，可以在 SubModule 的 `InitializeGameStarter` 中追加派生实现：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;

public sealed class MyPartyTradeModel : DefaultPartyTradeModel
{
    public override int CaravanTransactionHighestValueItemCount => 5;
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyTradeModel());
}
```

模型注册后，战役装配的同类型属性才会指向 `MyPartyTradeModel`；不要写 `Game.Current.ReplaceModel` 这种不存在于该契约中的运行期入口。

## 风险与版本边界

1. 覆盖 `GetTradePenaltyFactor` 时若不保留合理的正数边界，后续价格模型会收到异常乘数，可能让交易价格变成负数或失去平衡。
2. 完整替换默认类会丢掉 `TradePenaltyReduction` 的技能修正。只改一个成员时优先继承默认实现并调用 `base`。
3. 两个模块都注册同类 Model 时，后注册者胜出；这不是方法级合并。需要叠加逻辑时，使用 `MBGameModel<T>` 的包装/委托模式并明确 `BaseModel`。
4. `Campaign.Current.Models.PartyTradeModel` 只有在战役完成初始化后才可靠；自定义战斗或过早的 SubModule 加载阶段应判空或通过 `GetGameModel<T>()` 获取。
5. v1.3.15 与 v1.4.5 的默认常量和两个公开成员保持一致；v1.4.5 的 `ExplainedNumber` 构造调用被反编译为更短形式，但 Mod 可见语义不变。

## 导航

- [父级：campaign-ext](../)
- [契约：PartyTradeModel](../PartyTradeModel/)
- [模型家族手册](../models/)
- [同级：DefaultPartyFoodBuyingModel](../DefaultPartyFoodBuyingModel/) · [DefaultPartyImpairmentModel](../DefaultPartyImpairmentModel/)
- [注册容器：GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
- [消费者：DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/)
