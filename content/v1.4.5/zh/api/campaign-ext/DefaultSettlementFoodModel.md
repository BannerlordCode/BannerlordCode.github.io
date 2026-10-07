---
title: "DefaultSettlementFoodModel"
description: "Bannerlord 默认城镇粮食收支、驻军消耗、村庄供给与库存上限规则。"
---
# DefaultSettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`  
**Base:** [`SettlementFoodModel`](../SettlementFoodModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementFoodModel` 将城镇繁荣、驻军人数、绑定村庄状态、建筑、政策、Perk、围城状态和市场粮食卖出记录合成为每日粮食净变化。

## 心智模型

默认实现计算两本账：`bonuses` 是粮食来源，`bonuses2` 是繁荣和驻军等消耗，最终再合并问题效果。非围城时，城镇从周边土地和绑定村庄获得基础供给；围城时这条供给路径关闭，只保留围城相关的规则和可售粮食记录。`Town.DailyTick` 才把结果写到 `FoodStocks`，所以这个类不是补粮 Action。

默认常量也决定了许多 UI 解释：粮食库存基础上限为 `300`，繁荣每 `40` 点消耗一份粮食，驻军每 `20` 人消耗一份，城堡库存上限额外增加 `150`。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementFoodModel`](../SettlementFoodModel) / [`GameModels`](../GameModels) | 抽象契约与注册/替换入口。 |
| [`Town`](../../campaign/Town) | 读取 `FoodChange`、库存上限，并在每日 tick 中写回库存。 |
| `Village` / `BuildingEffectEnum` | 提供绑定村庄炉灶、粮食生产和库存/消耗建筑效果。 |
| `PerkHelper` / `DefaultPolicies.HuntingRights` | 在围城、驻军和政策条件满足时添加解释项。 |
| `IssueModel` | 通过 `DefaultIssueEffects.SettlementFood` 注入问题效果。 |

## 默认规则

| 成员/阶段 | 1.4.5 行为 |
| --- | --- |
| `FoodStocksUpperLimit` | 返回 `300`；`CastleFoodStockUpperLimitBonus` 返回 `150`。 |
| 繁荣与驻军消耗 | 分别为 `town.Prosperity / 40` 与 `garrisonMembers / 20`；围城时相关 Steward/Medicine Perk 可改变解释值。 |
| 非围城供给 | 城镇基础为 `15`、城堡/村庄路径使用相应基础值；绑定村庄正常状态按 `(hearth + 1) * 6` 增加，并叠加粮食生产建筑。 |
| 围城供给 | 不计算周边土地和绑定村庄供给，而使用围城相关 Perk；卖出类别带 `BonusToFoodStores` 的物品仍可进入库存加成。 |
| 其他效果 | Hunting Rights 政策增加 `2`；建筑粮食消耗、问题效果和相应 Perk 通过 `ExplainedNumber` 合并。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null)
{
    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float explainedChange = model
        .CalculateTownFoodStocksChange(town, includeDescriptions: true)
        .ResultNumber;
    int capacity = town.FoodStocksUpperLimit();
}
```

要改默认规则，继承 `DefaultSettlementFoodModel` 或 `SettlementFoodModel`，在 `InitializeGameStarter` 中用 `gameStarter.AddModel(new MySettlementFoodModel())` 注册；不要在模型中直接改 `town.FoodStocks` 或调用补给 Action。

## 风险与版本边界

- `includeMarketStocks` 读取的是 `Town.SoldItems`，它反映已发生的市场行为；不要在每帧预览中把带市场记录的结果当成确定的每日产出。
- 围城分支会关闭村庄和土地供给；若自定义实现无条件加上村庄粮食，围城粮食压力会失真并连带改变忠诚、繁荣和民兵。
- `Town.DailyTick` 会在断粮时更新 `RemainingFoodPercentage`；保持结果可解释且不要把库存直接 clamp 到上限以外。
- 该类只计算，不负责保存粮食状态；在模型里添加持久字段会引入不必要的存档兼容面。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementFoodModel.cs`（全文 103 行）。
**抽象契约：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementFoodModel.cs:16`（唯一 abstract 成员）。
**入口：** `Town.FoodChange`（`Town.cs:134`）与 `Town.FoodChangeWithoutMarketStocks`（`Town.cs:136`）。

**两个入口的唯一区别就是第二个参数。** `FoodChange` 调 `CalculateTownFoodStocksChange(this)`（`Town.cs:134`）——`includeMarketStocks` 吃默认 true；`FoodChangeWithoutMarketStocks` 显式传 `false`（`Town.cs:136`）。**所以「含不含市场」在这两个属性上是唯一变量，而 `includeDescriptions` 两者都没传、吃默认 false。**

四个常量全是 `override` 而非 `virtual`：`FoodStocksUpperLimit => 300`（`DefaultSettlementFoodModel.cs:30`）、`NumberOfProsperityToEatOneFood => 40`（`:32`）、`NumberOfMenOnGarrisonToEatOneFood => 20`（`:34`）、`CastleFoodStockUpperLimitBonus => 150`（`:36`）。

**而第五个常量 `private const int FoodProductionPerVillage = 10`（`:28`）是死代码——它在本文件里零引用。** 真正生效的村庄公式在 `:72`，是 `(GetHearthLevel() + 1) * 6`。

### 典型用法

`CalculateTownFoodStocksChange`（`:38`）是一行转发（`:40`），全部逻辑在 `CalculateTownFoodChangeInternal`（`:43`）。**核心结构是四个 `ExplainedNumber` 变量而不是两本账：**

- `bonuses`（`:45`）= 粮食**来源**
- `bonuses2`（`:46`）= 繁荣与驻军等**消耗**
- `bonuses3`（`:47`）= 繁荣折算量、`bonuses4`（`:48`）= 驻军折算量——**这两个是中间量**

**它们在 `:55`-`:56` 就已经被折进 `bonuses2` 了**，最终只做两步合并：`AddFromExplainedNumber(bonuses, null)`（`:93`）与 `SubtractFromExplainedNumber(bonuses2, null)`（`:94`）。**读代码时看到四个 `bonuses` 开头很容易误以为有四条独立账本。**

**围城是本模型最大的分叉，`town.IsUnderSiege` 出现两次。** 第一次在 `:49`：加 Steward.Gourmet Perk 到驻军（`:51`）、Medicine.TriageTent Perk 到消耗（`:52`）。第二次在 `:63`：`if (!town.IsUnderSiege)` 包住了整个供给段（`:65`-`:76`），走围城分支则是 `Roguery.DirtyFighting` Perk（`:80`）。

**但 `:82` 的市场卖出那段在这个 if 外面**——所以围城时市场加成仍然生效，**只有周边土地与绑定村庄被关掉**。

`includeDescriptions` 唯一影响的是 `:88`：

```
bonuses.Add(soldItem.Number, includeDescriptions ? soldItem.Category.GetName() : null);
```

**即 `includeDescriptions=false` 时每一条市场加成都没有名字**，在 UI 上退化成无名行。

想分离市场那一段，最省事的是调两次相减，而不是去数 `town.SoldItems`：

```csharp
public static void DumpTownFood(Town town)
{
    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float withMarket = model.CalculateTownFoodStocksChange(town, true, false).ResultNumber;
    float withoutMarket = model.CalculateTownFoodStocksChange(town, false, false).ResultNumber;
    Debug.Print(town.Settlement.Name + " withMarket=" + withMarket + " withoutMarket=" + withoutMarket, 0);
    Debug.Print("delta=" + (withMarket - withoutMarket) + " = the BonusToFoodStores sold log only", 0);
    Debug.Print("upperLimit=" + model.FoodStocksUpperLimit
        + " perProsperity=" + model.NumberOfProsperityToEatOneFood
        + " perMan=" + model.NumberOfMenOnGarrisonToEatOneFood, 0);
}
```

**上例第二行的 `delta` 正好就是市场那一段**（`DefaultSettlementFoodModel.cs:82`-`:91`），因为其余项在两次调用里逐字节相同。**这比去读 `town.SoldItems` 更稳——它跟着模型走，不依赖你猜对字段。**

真实消费方有三处：`Town.cs:134` 与 `Town.cs:136` 是两个属性，`GarrisonTroopsCampaignBehavior.cs:446` 调 `settlementFoodModel.CalculateTownFoodStocksChange(town, includeMarketStocks)`——**那处只传了一个位置参数，`includeDescriptions` 吃默认 false，所以驻军补给 UI 拿到的全是无名加成。**

### 最容易踩的坑

- `includeMarketStocks` 读取的是 `Town.SoldItems`，它反映已发生的市场行为；不要在每帧预览中把带市场记录的结果当成确定的每日产出。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementFoodModel](../SettlementFoodModel)
- [相关：SettlementProsperityModel](../SettlementProsperityModel) · [SettlementGarrisonModel](../SettlementGarrisonModel)
- [下游：Town](../../campaign/Town)

