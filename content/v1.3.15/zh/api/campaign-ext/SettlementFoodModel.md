---
title: "SettlementFoodModel"
description: "把繁荣、驻军、绑定村庄、建筑、市场卖出物和任务效果折算成城镇每日粮食净变化的据点模型契约。"
---
# SettlementFoodModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`  
**基类:** `MBGameModel<SettlementFoodModel>`  
**源文件路径:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementFoodModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementFoodModel.cs`

## 一句话职责

它回答“这座城镇今天净产/净耗多少粮食”，返回带可选解释数字的 `ExplainedNumber`；它只算账，不写库存、不判饥荒、不挪动任何世界状态。城镇每日 tick 与 UI 粮食面板都消费同一个模型的结果，所以自定义实现影响的是所有读者，而不是某一个界面数字。

## 心智模型

把它看成“城镇粮食账本的只读计算器”。`Town.FoodChange`、`Town.FoodChangeWithoutMarketStocks`、`Town.FoodChangeExplanation` 三个属性都通过 `Campaign.Current.Models.SettlementFoodModel` 把同一个模型的结果取出来，随后 `Town.DailyTick` 才把 `FoodChange` 加到 `FoodStocks` 上、在库存低于 0 时归零并标记主人 `RemainingFoodPercentage = -100`、在超过 `FoodStocksUpperLimit()` 时截断。模型处在 Campaign Model 层，处于库存/交易 Action 层之上、UI 之下。

计算链是：繁荣（`Prosperity / NumberOfProsperityToEatOneFood`）与驻军（`GarrisonParty.NumberOfAllMembers / NumberOfMenOnGarrisonToEatOneFood`）构成消耗侧；领地周围产出（城镇 +15、城堡 +10）、绑定村庄产出、建筑 `FoodProduction` 效果与王国政策（如 `HuntingRights` +2）构成生产侧；`includeMarketStocks` 为真时再把 `Town.SoldItems` 中标记为 `BonusToFoodStores` 的卖出量并入；最后通过 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementFood)` 叠加任务效果。结果是“生产 − 消耗 + 任务”，不是新库存值。

使用这个模型，是为了改变所有消费者看到的“粮食变化计算”。如果目标是直接改库存、触发饥荒事件或转移粮食，应使用 `Town` 的库存 API、对应 `*Action` 或 `FoodConsumptionBehavior`/`GarrisonTroopsCampaignBehavior`；不要在计算回调里写 `FoodStocks`、发事件或扣金币。那会把一个只读查询变成每次 tick 重复执行的副作用。`includeDescriptions` 只控制 `ExplainedNumber` 是否保留因素说明文本，不应改变数值；`includeMarketStocks` 是有真实语义的开关：关闭时排除市场卖出物的粮食贡献，适合比较“土地与建筑自身的产出”。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例，默认实例是 `DefaultSettlementFoodModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel`（即 `CampaignGameStarter.AddModel`）注册它；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或 `OnSubModuleLoad` 里无条件读取它。`FoodStocksUpperLimit`、`CastleFoodStockUpperLimitBonus` 等常量由模型持有，但真正的“最终上限”在 `Town.FoodStocksUpperLimit()` 里再叠加城堡加成与建筑 `FoodStock` 效果，所以不要用模型常量直接当成城镇上限。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表；所有读取入口都在 `Campaign.Current` 之上。 |
| [`Town`](../../campaign/Town) | 提供繁荣、驻军、是否城堡、是否被围、绑定村庄、建筑效果与市场卖出记录；并消费返回的粮食变化量。 |
| [`Settlement`](../../campaign/Settlement) | 通过 `Settlement.OwnerClan`、`BoundVillages` 与 `IsTown` 等向模型提供归属与村庄输入。 |
| [`IssueModel`](../IssueModel) | 默认实现把 `DefaultIssueEffects.SettlementFood` 的全局/据点任务效果并入最终变化。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Town`](../../campaign/Town) | `FoodChange`/`FoodChangeWithoutMarketStocks`/`FoodChangeExplanation` 直接取自本模型；`DailyTick` 把 `FoodChange` 写入库存并处理断粮。 |
| [`FoodConsumptionBehavior`](../FoodConsumptionBehavior) | 在据点每日逻辑中驱动库存消耗/补充周期，是模型结果的上游应用者。 |
| [`GarrisonTroopsCampaignBehavior`](../GarrisonTroopsCampaignBehavior) | 管理驻军规模，从而间接影响“驻军人数 → 粮食消耗”这一输入。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 繁荣变化会反馈到下一次粮食消耗计算（繁荣越高吃得越多）。 |
| [`DefaultPartyFoodBuyingModel`](../DefaultPartyFoodBuyingModel) | 相邻的食物经济模型；它处理队伍买粮，不应被据点粮食计算隐式触发。 |

### Action、事件与存档边界

模型结果本身没有存档字段，也不派发事件。合法的库存变更走 `Town` 库存 API 或对应 Behavior/Action；自定义模型应在相同输入下保持确定性，避免每日 tick 重放时粮食缓存与存档不一致。替换模型时不要改变“负值代表断粮、正值代表积余”的符号语义，否则 `DailyTick` 的归零与截断逻辑会失真。

## 成员契约

### 配置类（只读常量）

| 成员 | 默认实现值 | 用途与调用时机 | 副作用 |
| --- | --- | --- | --- |
| `FoodStocksUpperLimit` | `300` | 城镇（非城堡）粮食库存的基础上限；`Town.FoodStocksUpperLimit()` 会在此基础上再加城堡加成与建筑效果。 | 无。只读常量；不要把它当成最终上限。 |
| `NumberOfProsperityToEatOneFood` | `40` | 把繁荣折算为每日粮食消耗的分母：繁荣每达到该值，每日多耗 1 单位粮食。 | 无。 |
| `NumberOfMenOnGarrisonToEatOneFood` | `20` | 把驻军人数折算为每日粮食消耗的分母：驻军每达到该值，每日多耗 1 单位粮食。 | 无。 |
| `CastleFoodStockUpperLimitBonus` | `150` | 城堡（相对城镇）额外的库存上限加成，仅在 `Town.IsCastle` 时由 `Town.FoodStocksUpperLimit()` 叠加。 | 无。 |

### 计算类

| 成员 | 用途与调用时机 | 副作用 |
| --- | --- | --- |
| `CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | 返回该据点当日的粮食净变化（`ExplainedNumber`）。`Town.FoodChange`/`FoodChangeWithoutMarketStocks`/`FoodChangeExplanation` 在 get 时调用；UI 面板与每日 tick 也读取它。 | 无。纯计算；只读取 `town` 的状态并返回新数字，不修改库存、不派发事件。`includeDescriptions` 仅影响解释文本。 |

默认实现的可观察因素：繁荣与驻军是消耗侧（越多越费粮）；领地周围产出、绑定村庄产出、建筑 `FoodProduction` 与 `HuntingRights` 等政策是生产侧；`includeMarketStocks` 为真时并入 `SoldItems` 中 `BonusToFoodStores` 的卖出量；`DefaultIssueEffects.SettlementFood` 通过 `IssueModel` 叠加任务效果；被围城时领地产出为 0 并改用围城相关的 Perk/效果。替换模型时不要只复制旧公式——新版本可能新增 Perk、政策或建筑效果的合并路径。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，等价于 `Town.FoodChange` 与 `Town.FoodChangeExplanation` 的内部取数方式：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownFood(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    // 两种等价获取方式：直接属性 或 泛型检索
    SettlementFoodModel byProperty = Campaign.Current.Models.SettlementFoodModel;
    SettlementFoodModel byGeneric = Campaign.Current.Models.GetModel<SettlementFoodModel>();

    // 带解释文本的变化量（生产 - 消耗 + 任务），用于 UI 粮食面板
    ExplainedNumber change = byProperty.CalculateTownFoodStocksChange(
        town, includeMarketStocks: true, includeDescriptions: true);
    return change;
}
```

若只想比较“去掉市场卖出物后的土地与建筑产出”，把 `includeMarketStocks` 设为 `false`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

public float StructuralDailyChange(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return 0f;
    }

    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float net = model.CalculateTownFoodStocksChange(town, includeMarketStocks: false).ResultNumber;
    int limit = town.FoodStocksUpperLimit();
    return net;
}
```

这段结果仅表示“今天净变化”，要预测明天的库存请用 `town.FoodStocks + net` 并考虑 `FoodStocksUpperLimit()` 上限；不要把它再写回 `FoodStocks`，否则每日 tick 会重复累加。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让 `CalculateTownFoodStocksChange` 仍然返回完整的“生产 − 消耗 + 任务”结果：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementFoodModel : SettlementFoodModel
{
    private readonly SettlementFoodModel _vanilla;

    public ModSettlementFoodModel(SettlementFoodModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int FoodStocksUpperLimit => _vanilla.FoodStocksUpperLimit;
    public override int NumberOfProsperityToEatOneFood => _vanilla.NumberOfProsperityToEatOneFood;
    public override int NumberOfMenOnGarrisonToEatOneFood => _vanilla.NumberOfMenOnGarrisonToEatOneFood;
    public override int CastleFoodStockUpperLimitBonus => _vanilla.CastleFoodStockUpperLimitBonus;

    public override ExplainedNumber CalculateTownFoodStocksChange(
        Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateTownFoodStocksChange(
            town, includeMarketStocks, includeDescriptions);
        // 有界修正：在结果上叠加一个明确因素，不改变负值（断粮）语义
        result.AddFactor(0.05f, new TextObject("Mod: granary efficiency"));
        return result;
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementFoodModel` 查找自己，否则会递归。若要让替换覆盖新的 Perk、政策与建筑效果，优先委托当前版本默认模型，再叠加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型，不要在 `OnSubModuleLoad` 里查询。
2. **把变化当库存:** `CalculateTownFoodStocksChange` 返回的是每日增量，不是新的库存值；把它写回 `FoodStocks` 或再累加一次会让粮食产出被放大。
3. **破坏断粮语义:** `Town.DailyTick` 在结果小于 0 时把库存归零并标记主人 `RemainingFoodPercentage = -100`；替换模型应保持负值含义，不要把断粮静默改成正值。
4. **误用上限常量:** `FoodStocksUpperLimit` 不是最终上限，城堡加成与建筑 `FoodStock` 效果在 `Town.FoodStocksUpperLimit()` 中另行合并；UI 上限比较应调用 `Town.FoodStocksUpperLimit()`。
5. **查询中修改世界:** 招募、发事件、扣金币或写库存必须在 Behavior、Roster API 或 Action 中执行，不能放进计算回调。
6. **陈旧解释面板:** 合法改变繁荣/驻军/建筑后，解释面板应重新读取 `FoodChangeExplanation`，不要缓存旧的 `ExplainedNumber`。

## 版本与导航

v1.3.0、v1.3.15 与 v1.4.5 的契约（四个 `int` 只读属性与 `CalculateTownFoodStocksChange` 签名）保持一致，跨版本可安全替换默认实现。差异主要在默认公式内部的 Perk、政策与建筑效果集合——以目标游戏版本 `DefaultSettlementFoodModel` 源码为准。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本。

- [↑ 父级：Campaign 扩展 API](../)
- [↔ 同级：DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- [↔ 同级：SettlementProsperityModel](../SettlementProsperityModel)
- [↔ 同级：SettlementGarrisonModel](../SettlementGarrisonModel)
- [↔ 同级：PartyWageModel](../PartyWageModel)
- [↔ 同级：PartySpeedModel](../PartySpeedModel)
- [相关类：Town](../../campaign/Town)
- [相关类：Settlement](../../campaign/Settlement)
- [相关类：Campaign](../../campaign/Campaign)
- [下游：FoodConsumptionBehavior](../FoodConsumptionBehavior) · [GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior)
- [相邻模型：DefaultPartyFoodBuyingModel](../DefaultPartyFoodBuyingModel)
- [队伍与据点模型目录](../models/)
- [战役系统指南](../../../guide/campaign-system)
