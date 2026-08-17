---
title: "SettlementEconomyModel"
description: "城镇经济规则模型：依据城镇繁荣度与物品价格指数为每种商品类别估算需求、供给、每日消费预算与城镇金库净流入，是 ItemConsumptionBehavior 与 CaravansCampaignBehavior 计算市场供需的只读纯函数接口。"
---
# SettlementEconomyModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**源文件：** `bannerlord-1.4.5/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementEconomyModel.cs`

## 概述

为城镇（Town）市场计算物品类别维度上的供需与预算：根据繁荣度估算每个类别的每日需求量，用价格指数换算城镇愿意消费的金额预算，并推算城镇金库每日的净流入，从而驱动商品生产、消耗与商队买卖等经济决策。

## 心智模型

该类型属于 Campaign 层的规则（Model）抽象，自身没有需要保存的字段，也不参与存档序列化。引擎在开局初始化 `GameModels` 时通过 `GetGameModel<SettlementEconomyModel>()` 解析出游戏注册的派生实例（默认是 `DefaultSettlementEconomyModel`），并挂到 `Campaign.Current.Models.SettlementEconomyModel` 上。运行期间所有经济体系行为（如 `ItemConsumptionBehavior`、`CaravansCampaignBehavior`）都通过这条路径以只读方式调用它来取数，而不是自己持有或缓存一个引用。它是一组纯函数：输入城镇与类别，输出数值，从不修改传入对象。

## 何时使用 / 何时不要使用

在需要**读取**城镇经济计算结果时使用：通过 `Campaign.Current.Models.SettlementEconomyModel` 调用其方法，例如估算某类别的日需求、换算商队预算、取得金库变动。需要**改变世界状态**（金库、市场供需）时，不要编辑模型字段——模型是无状态规则，真正的写入应走 `Town.ChangeGold`、或 `Town.MarketData` 的 `AddDemand` / `AddSupply` / `SetSupplyDemand` 等接口。若要替换经济算法，应在游戏初始化阶段注册你自己的 `SettlementEconomyModel` 派生类，而不是在战役运行时改写默认实例。

## 依赖图

- 上游类型：[Town](../Town)（繁荣度与价格指数驱动计算）、[Settlement](../Settlement)（城镇归属的聚落）、`ItemCategory` / `ItemData`（市场供需记录）、`MBGameModel<>`（基类）。
- 持有与暴露：[GameModels](../GameModels) 在初始化时解析并挂接该实例。
- 下游调用方：[CampaignBehaviorBase](../CampaignBehaviorBase) 派生的 `ItemConsumptionBehavior` 与 `CaravansCampaignBehavior` 调用它来结算供需与商队定价。
- 协同模型：同类经济模型 [SettlementLoyaltyModel](../SettlementLoyaltyModel)、[SettlementSecurityModel](../SettlementSecurityModel)、[BuildingEffectModel](../BuildingEffectModel) 以及 `Town.MarketData` 共同决定城镇的经济与产出。

## 风险

- **跨战役重载后缓存失效**：模型实例在每次 `Campaign` 初始化时由 `GameModels` 重新解析，重载存档或开新档后旧引用会指向失效对象，应每次现取 `Campaign.Current.Models.SettlementEconomyModel`。
- **战役开始前访问为空**：在 `Campaign.Current` 可用之前（主菜单、模块加载、开局初始化早期）访问会触发空引用。
- **直接改写模型字段**：模型是无状态纯函数，任何“状态”都在 `Town` / `Town.MarketData` 上；改模型不会改变游戏世界，只会误导自己。
- **自定义派生类造成递归**：默认实现 `GetEstimatedDemandForCategory` 内部又回调了 `Campaign.Current.Models.SettlementEconomyModel.GetDailyDemandForCategory`，自定义实现若再次走同一条回路会形成无限递归并栈溢出。
- **误当作可存档对象**：该模型无 `[SaveableField]`，重载存档不会恢复你运行期对派生实例做的任何赋值。

## 成员说明

### 需求估算

- **`GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)`**
  - 用途：估算城镇对某物品类别的每日需求总量。基础需求随繁荣度线性增长，奢侈需求仅在该类别 `LuxuryDemand > 0` 且繁荣度超过 3000 后才出现。
  - 副作用：无，纯计算。
  - 调用时机：`ItemConsumptionBehavior` 在每日商品消耗结算时以 `extraProsperity = 0` 调用。

- **`GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`**
  - 用途：估算“已有库存”前提下该类别的需求；默认实现直接以 `extraProsperity = 1000` 调用 `GetDailyDemandForCategory`。
  - 副作用：无；但默认实现内部会再次访问 `Campaign.Current.Models.SettlementEconomyModel`，注意递归风险。
  - 调用时机：`ItemConsumptionBehavior` 在更新市场供需之前调用，结果用于 `GetSupplyDemandForCategory`。

### 供给 / 需求更新

- **`GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)`**
  - 用途：用指数平滑（旧值权重 0.85、当日值权重 0.15）把当日供需与历史供需融合成新的供需值，作为市场下一步状态。
  - 副作用：返回 `(float supply, float demand)` 元组，调用方需自行写入（如 `TownMarketData.SetSupplyDemand`）。
  - 调用时机：每日消费结算时由 `ItemConsumptionBehavior` 调用。

- **`GetDemandChangeFromValue(float purchaseValue)`**
  - 用途：计算一次购买对需求的边际影响（默认 = `purchaseValue * 0.15`）。
  - 副作用：无。
  - 调用时机：`TownMarketData.AddDemand` 在记录购买量后调用，用于调整该类别的需求。

### 预算与金币

- **`CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`**
  - 用途：把日需求换算成城镇在该类别上愿意消费的“预算”（默认 = `demand * MathF.Pow(town.GetItemCategoryPriceIndex(category), 0.3f)`）。
  - 副作用：无。
  - 调用时机：`ItemConsumptionBehavior` 的生产结算与 `CaravansCampaignBehavior` 的商队定价都调用它来决定生产/采购额度。

- **`GetTownGoldChange(Town town)`**
  - 用途：估算城镇金库每日净流入（默认 = `MathF.Round(0.25f * (10000f + town.Prosperity * 12f - town.Gold))`），趋向一个平衡值。
  - 副作用：无；由调用方负责真正改金库。
  - 调用时机：`ItemConsumptionBehavior` 的每日消耗结算调用，结果传入 `Town.ChangeGold`。

## 示例

```csharp
// 取得主角当前所在城镇
Town town = Hero.MainHero.CurrentSettlement.Town;

// 取得一个物品类别（取第一个物品所属类别）
ItemCategory category = Items.All[0].GetItemCategory();

SettlementEconomyModel economy = Campaign.Current.Models.SettlementEconomyModel;

float dailyDemand = economy.GetDailyDemandForCategory(town, category, 0);
float budget = economy.CalculateDailySettlementBudgetForItemCategory(town, dailyDemand, category);
int goldDelta = economy.GetTownGoldChange(town);

// 把模型算出的金币变动真正写入世界：不要直接改模型
town.ChangeGold(goldDelta);
```

```csharp
// 镜像 ItemConsumptionBehavior：融合当日与历史供需后写回市场
Town town = Hero.MainHero.CurrentSettlement.Town;
ItemCategory category = Items.All[0].GetItemCategory();

ItemData data = town.MarketData.GetCategoryData(category);
float estimated = Campaign.Current.Models.SettlementEconomyModel
    .GetEstimatedDemandForCategory(town, data, category);
(float supply, float demand) = Campaign.Current.Models.SettlementEconomyModel
    .GetSupplyDemandForCategory(town, category, data.InStoreValue, estimated, data.Supply, data.Demand);

town.MarketData.SetSupplyDemand(category, supply, demand);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[GameModels](../GameModels) · [Town](../Town) · [Settlement](../Settlement) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [BuildingEffectModel](../BuildingEffectModel)
