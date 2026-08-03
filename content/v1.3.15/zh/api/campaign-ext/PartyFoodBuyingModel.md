---
title: "PartyFoodBuyingModel"
description: "为战役队伍决定补粮目标和可购买食物/牲畜候选项的规则模型。"
---
# PartyFoodBuyingModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`  
**基类:** `MBGameModel<PartyFoodBuyingModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyFoodBuyingModel.cs`

## 一句话职责

它提供 AI 补粮的目标天数、低价粮食参考价和一次选购候选项；它不直接从据点扣物品、不转金币，也不改变队伍的 FoodChange。补粮行为会在事件和小时 tick 中反复消费这些规则，所以模型必须只做选择和计算，不能把交易副作用藏在回调里。

## 心智模型

把这个模型看成“补粮决策”的纯规则层。`PartiesBuyFoodCampaignBehavior` 在队伍进入据点或每小时 tick 时先读取目标天数，算出需要补多少食物；随后对非玩家队伍反复调用 `FindItemToBuy`，最后交给 `SellItemsAction.Apply` 完成物品、金币和库存变更。`AiVisitSettlementBehavior` 还用低价参考价影响队伍是否把某个城镇/村庄当作补粮目标。

```text
MobileParty 食物变化 / Settlement 物品库存 / PartyTradeGold
                         |
                         v
Campaign.Current.Models.PartyFoodBuyingModel
       +-----------------+------------------+
       v                                    v
补粮天数与低价参考                       FindItemToBuy
       |                                    |
       +--> PartiesBuyFoodCampaignBehavior -> SellItemsAction.Apply
```

默认实现把城镇目标设为 `30` 天、村庄目标设为 `12` 天、低价食物均值设为 `30`。候选项必须有库存，并且是食物或可按肉量消费的牲畜；普通食物价格要低于 `120` 且队伍买得起，牲畜放宽价格条件。通过价格和物品价值构成的随机权重选择候选，不保证每次返回同一个条目。

### 生命周期与注册

实例由 `Campaign.Current.Models` 持有，默认类型是 `DefaultPartyFoodBuyingModel`。`PartiesBuyFoodCampaignBehavior` 通过 `SettlementEntered` 和 `HourlyTickParty` 触发消费；模型本身不保存库存、不订阅事件。没有战役、据点或队伍时不要从静态初始化代码读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供当前 Model 注册表和战役生命周期。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供 FoodChange、库存食物、队伍交易金币和军队关系。 |
| [`Settlement`](../../campaign/Settlement) | 提供 `ItemRoster`、据点价格和城镇/村庄类型。 |
| `ItemRosterElement` / `ItemObject` | 描述候选物品、数量、食物属性、价值和牲畜肉量。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`PartiesBuyFoodCampaignBehavior`](../PartiesBuyFoodCampaignBehavior) | 在进入据点和小时 tick 中计算需求、调用选品并执行购买。 |
| [`AiVisitSettlementBehavior`](../AiVisitSettlementBehavior) | 使用三项数值估算补粮吸引力和可招募志愿兵成本。 |
| [`SellItemsAction`](../SellItemsAction) | 真正移动物品并通过 Gold Action 转移金币。 |
| [`MobilePartyFoodConsumptionModel`](../MobilePartyFoodConsumptionModel) | 产生 `FoodChange`，决定目标天数是否不足。 |

### Action、事件与存档边界

模型没有存档字段，也不派发进入据点事件。物品/金币交易必须由 `SellItemsAction.Apply` 和其下游财务 Action 完成；不要在 `FindItemToBuy` 中直接修改 `Settlement.ItemRoster`、`MobileParty.ItemRoster` 或金币，否则会和购买行为重复扣款/加物品。

## 成员契约

| 成员 | 用途 | 默认值/行为与调用时机 |
| --- | --- | --- |
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | 队伍在城镇补粮后希望维持的最低天数。 | 默认 `30f`；`PartiesBuyFoodCampaignBehavior` 用它计算需求，AI 也用它评估目标。 |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | 队伍在村庄补粮后希望维持的最低天数。 | 默认 `12f`；村庄补粮和 AI 目标计算使用。 |
| `LowCostFoodPriceAverage` | 将金钱余量换算为可买低价食物数量的参考均价。 | 默认 `30f`；主要影响 `AiVisitSettlementBehavior` 的目标分数，不是交易时的固定单价。 |
| `FindItemToBuy(MobileParty, Settlement, out ItemRosterElement, out float)` | 从据点库存中挑选一个可购买的食物/牲畜候选及其当前价格。 | 默认输出 `ItemRosterElement.Invalid`/`0f` 表示没有候选；按随机权重挑选，调用者随后决定是否执行交易。 |

默认 `FindItemToBuy` 会遍历 `settlement.ItemRoster`，只接受数量大于零的食物或 `HorseComponent.IsLiveStock` 的牲畜。普通食物要求据点价格小于 `120` 且不超过 `mobileParty.PartyTradeGold`；牲畜根据每只牲畜能提供的肉量参与权重。价格越低、物品价值越低，权重通常越高，但最终由 `MBRandom.RandomFloat` 进行加权随机选择。

## 真实消费路径

下面展示的是模型返回候选后由官方行为执行交易的最小路径；模型只负责前半段：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public bool BuyOneFood(MobileParty party, Settlement settlement)
{
    if (Campaign.Current == null || party == null || settlement == null)
    {
        return false;
    }

    PartyFoodBuyingModel model = Campaign.Current.Models.PartyFoodBuyingModel;
    model.FindItemToBuy(party, settlement,
        out ItemRosterElement item, out float price);
    if (item.EquipmentElement.Item == null || price > party.PartyTradeGold)
    {
        return false;
    }

    SellItemsAction.Apply(settlement.Party, party.Party, item, 1, null);
    return true;
}
```

游戏内完整行为还会先检查战役已开始、队伍有领袖、据点是城镇/村庄、队伍确实消耗食物、军队归属和外交状态，并按 `FoodChange` 计算缺口；军队补粮还会按领袖和附属队伍分配库存。上面的示例用于说明真实获取和交易边界，不应绕过这些前置条件作为完整 AI 行为的替代。

## 替换规则时的边界

如果只想改变 AI 更愿意囤多少粮，替换三个属性并保持 `FindItemToBuy` 的输出契约；如果要改变候选排序，保留 `ItemRosterElement.Invalid` 和 `price == 0f` 的“无候选”语义，并确认 `SellItemsAction` 能处理返回的物品。不要通过模型实现商队出售、据点库存刷新或玩家交易界面，那些属于交易 Action/行为。

## 风险与调试顺序

1. **模型中执行交易:** `FindItemToBuy` 可能每次补粮循环调用；直接改 roster/金币会在 `SellItemsAction.Apply` 后重复变更。
2. **返回不存在的物品:** `ItemRosterElement` 必须来自目标据点的当前库存；返回已被移除的元素会导致交易失败或库存不同步。
3. **忽略无候选语义:** `ItemRosterElement.Invalid` 或 `EquipmentElement.Item == null` 表示没有可买物品，调用者必须停止循环。
4. **把参考价当固定价格:** `LowCostFoodPriceAverage` 只影响 AI 目标分数；实际价格由 `SettlementComponent.GetItemPrice` 和交易行为计算。
5. **牲畜数量误算:** 牲畜一次可能转换为多个肉单位；购买循环会按 `MeatCount` 调整次数，不能把一次候选简单等同于一个食物单位。
6. **错误调用阶段:** 在战役不存在或据点没有完整 `SettlementComponent` 时不要手动调用默认模型。

## 版本与导航

v1.3.15 与 v1.4.5 保留四个公开入口以及 `30/12/30` 默认值；默认选品仍使用价格、物品价值和牲畜肉量的加权随机选择。若改写交易行为，应同时检查目标版本的 `PartiesBuyFoodCampaignBehavior` 和 `SellItemsAction`，不要只依据模型接口推断金币副作用。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ PartyNavigationModel](../PartyNavigationModel)
- [↔ PartyWageModel](../PartyWageModel)
- [MobileParty](../../campaign/MobileParty)
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior)
- [SellItemsAction](../SellItemsAction)
- [Settlement](../../campaign/Settlement)
