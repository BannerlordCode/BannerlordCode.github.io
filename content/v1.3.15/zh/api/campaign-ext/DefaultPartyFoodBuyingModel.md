---
title: "DefaultPartyFoodBuyingModel"
description: "PartyFoodBuyingModel 的 Sandbox 默认实现：城镇 30 天、村庄 12 天目标，并按价格与物品价值加权选择粮食。"
---

# DefaultPartyFoodBuyingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`  
**Base:** `PartyFoodBuyingModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`  
**Contract:** [PartyFoodBuyingModel](../PartyFoodBuyingModel/)

## 一句话职责

它是 vanilla AI 购粮策略：城镇补粮目标为 `30` 天、村庄为 `12` 天、低价基准为 `30`，并从据点库存中按价格和物品价值加权挑选食物或活牲畜。

## 心智模型

该类实现的是 [PartyFoodBuyingModel](../PartyFoodBuyingModel/) 的“选目标、选物品”契约，而不是交易执行器。Sandbox 在战役初始化时注册它；[PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) 每小时读取目标天数，在据点条件满足后调用 `FindItemToBuy`。只有 Behavior 在确认返回物品和价格有效后，才调用 [SellItemsAction](../SellItemsAction/) 改变金币和库存。

因此，`FindItemToBuy` 可被预测性调用而不会自动购买。继承该类时，通常只覆盖天数属性或完整的候选选择方法；不要为了改目标天数而复制交易 Action，也不要在 Model 内做世界写入。

实际购买由 [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) 监听 `CampaignEvents.SettlementEntered` 和 `CampaignEvents.HourlyTickPartyEvent` 触发。行为先检查战役已开始、队伍有领袖、据点类型、食物消耗、军团附属关系、敌对关系和库存，再读取本模型；因此模型的返回值不能单独解释为“现在一定会买”。

## 何时使用，何时不要用

- 想把 AI 在城镇/村庄的安全粮食储备改成别的天数时，继承并覆盖对应属性。
- 想改变食物与牲畜的候选阈值或权重时，覆盖 `FindItemToBuy`，但仍返回有效副本/价格契约。
- 只想读取当前策略时，使用 `Campaign.Current.Models.PartyFoodBuyingModel`；不要自己 `new DefaultPartyFoodBuyingModel` 假定它就是当前生效实例。
- 不要在 `FindItemToBuy` 中调用 `SellItemsAction` 或操作 `Settlement.ItemRoster`，否则 Behavior 的循环会重复应用交易。

## 依赖与消费者

- [PartyFoodBuyingModel](../PartyFoodBuyingModel/) 定义三个阈值属性和 `FindItemToBuy`。
- [GameModels](../GameModels/) 在战役装配时保留 Sandbox 注册的默认实现或 mod 后注册的覆盖实现。
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) 根据缺粮量循环调用模型。
- [MobileParty](../../campaign/MobileParty/) 提供买方金币、食物消耗和队伍状态；[Settlement](../../campaign/Settlement/) 提供库存和价格。
- [SellItemsAction](../SellItemsAction/) 负责实际物品/金币转移。

## 成员说明

| 成员 | v1.3.15 默认行为 | 调用时机与副作用 |
|---|---|---|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | 返回 `30f`。 | Behavior 在城镇计算目标食物量时读取；不添加食物。 |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | 返回 `12f`。 | Behavior 在村庄计算目标食物量时读取；不保证村庄一定有库存。 |
| `LowCostFoodPriceAverage` | 返回 `30f`。 | AI 访问据点评估使用的低价基准；不直接设置交易价格。 |
| `FindItemToBuy` | 扫描据点库存，筛选食物/活牲畜、价格与买方金币条件，再按价格和物品价值权重随机选一项。 | 返回 `ItemRosterElement` 副本和价格；无候选返回 `Invalid`/`0`，不执行交易。 |

## Vanilla 选择细节

默认实现从 `settlement.ItemRoster` 遍历库存量大于零的元素。普通食物要求价格小于 `120`；拥有活牲畜组件的马可以进入牲畜分支。买方必须有足够 `PartyTradeGold`。普通食物权重由 `(120 - price)` 与 `(100 - itemValue)` 的归一化平方共同决定；牲畜先按每匹可提供的肉量折算，再进入同类权重。最后使用 `MBRandom.RandomFloat` 进行加权抽样，因此结果不是固定挑最便宜的一项。

如果没有满足条件的元素，输出保持 `ItemRosterElement.Invalid` 和 `0f`。调用方必须先检查物品是否为空，再把结果交给交易 Action。

## 真实读取与替换示例

先读取当前生效实例：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

MobileParty party = MobileParty.MainParty;
Settlement settlement = party.CurrentSettlement;
if (settlement != null)
{
    PartyFoodBuyingModel model = Campaign.Current.Models.PartyFoodBuyingModel;
    model.FindItemToBuy(party, settlement, out ItemRosterElement item, out float price);
    bool usable = item.EquipmentElement.Item != null && price <= party.PartyTradeGold;
}
```

只改变目标天数时，可以继承默认实现并在战役启动阶段注册：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MyPartyFoodBuyingModel : DefaultPartyFoodBuyingModel
{
    public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown => 45f;
}

public sealed class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddModel(new MyPartyFoodBuyingModel());
        }
    }
}
```

这个覆盖保留了默认的候选筛选和加权选择；实际金币/库存变更仍由购粮 Behavior 的 `SellItemsAction` 完成。

## 风险与版本边界

1. 修改目标天数为负数或极大值会让 `PartiesBuyFoodCampaignBehavior` 计算出不合理购买量，可能导致频繁购买或库存耗尽；应结合 `FoodChange` 与据点库存做边界测试。
2. 自定义 `FindItemToBuy` 必须在无候选时返回 `ItemRosterElement.Invalid`/`0f`，并保证返回价格与返回元素对应；否则 Behavior 可能对空物品读取组件或用错价格。
3. Model 只返回建议。若在其中调用交易 Action，Behavior 的外层循环会再次购买，造成重复扣款/扣库存。
4. `Settlement.ItemRoster` 和 `SettlementComponent` 只有在有效战役据点对象上才可用；不要把加载阶段或已销毁据点缓存进模型字段。
5. 这三个阈值不是玩家粮食系统的全局常量。主队排除、战争关系、军队附属状态、食物消耗和据点库存仍由 Behavior 检查。
6. `FindItemToBuy` 返回后，Behavior 在 `SellItemsAction.Apply` 内可能再次计算实际交易价格；价格变化可能使交易不执行，但活牲畜仍会按 `MeatCount` 推进本轮循环。不要把一次模型查询当作已完成交易。
7. 军团购粮按成员队伍的 `FoodChange` 分摊据点食物；自定义食物消耗模型必须避免军团总消耗为零时的除法边界。
8. v1.4.5 保持 `30/12/30` 和候选选择语义；底层 `GetItemPrice` 的反编译调用参数形式变化不应复制进 Mod 的业务假设。

## 导航

- [父级：campaign-ext](../)
- [契约：PartyFoodBuyingModel](../PartyFoodBuyingModel/)
- [模型家族手册](../models/)
- [同级：DefaultPartyTradeModel](../DefaultPartyTradeModel/) · [DefaultPartyImpairmentModel](../DefaultPartyImpairmentModel/)
- [消费者：PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) · [SellItemsAction](../SellItemsAction/)
- [注册容器：GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
