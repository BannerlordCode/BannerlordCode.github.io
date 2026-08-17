---
title: "SettlementFoodModel"
description: "裁决定居点（城镇/城堡）每日食物存量增减、食物储量上限以及居民与驻军消耗食物速率的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementFoodModel 解析，被 Town 的食物属性、城镇管理界面、驻军上限与饥荒判定在每日结算/刷新时调用。"
---

# SettlementFoodModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementFoodModel.cs

## 概述

该模型集中裁决“一个定居点每天食物是变多还是变少”：它给出食物存量的硬上限、繁荣度与驻军各自按多少比例消耗食物，并计算出城镇每日食物净变化（`CalculateTownFoodStocksChange`）。它只做纯计算，不持有任何会被写进存档的世界状态——真正的 `Town.FoodStocks` 数值由领地行为与每日结算读写，模型只负责推导“下一天该加还是该减、加/减多少”。

## 心智模型

SettlementFoodModel 是一个纯计算的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultSettlementFoodModel`）并缓存，运行时统一用 `Campaign.Current.Models.SettlementFoodModel` 取得，它不参与存档序列化，也不会在每个 tick 被重新构造。每日结算与界面刷新时，`Town` 的 `FoodChange` / `FoodChangeWithoutMarketStocks` / `FoodChangeExplanation` 属性直接把 `this` 传给 `CalculateTownFoodStocksChange` 来读取净变化；城镇管理 VM（`TownManagementVM`）用它向玩家展示食物趋势；`GarrisonTroopsCampaignBehavior.CalculateMaxGarrisonSizeTownCanFeed` 借它反推城镇能养活多少驻军；`SettlementHelper.IsGarrisonStarving` 借 `NumberOfProsperityToEatOneFood` 判定是否陷入饥荒。要改食物规则就继承并注册一个替换实现，要读结果就走模型；绝不要把模型当成写世界的入口或直接改 `Town.FoodStocks`，修改世界状态应走领地行为（如 `GarrisonTroopsCampaignBehavior`）与对应的 `*Action`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“城镇/城堡每天食物如何增减、食物上限是多少、繁荣度与驻军各消耗多少”的规则时，读取 `Campaign.Current.Models.SettlementFoodModel` 的返回值，或提供一个新的派生类覆盖其抽象成员（四个属性 + 一个方法）并通过子模块注册替换默认实现。
- **不要使用**：不要亲自给 `Town.FoodStocks` 或其它世界状态赋值来“让某个定居点不缺粮”——模型是无状态的纯函数，真正的状态在 [Town](../Town) 上。要改变世界状态应走领地行为或对应的 `*Action`，而不是篡改模型；也不要在 Mission/战斗层取 `Campaign.Current.Models`（模型只存在于 Campaign 层）；更不要缓存模型实例到静态字段（见风险）。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementFoodModel>()` 解析并缓存实例。
- [Town](../Town) —— 主要被计算对象；其 `FoodChange` / `FoodStocksUpperLimit()` 等方法直接调用本模型。
- [Settlement](../Settlement) —— `Town` 的归属定居点；饥荒判定 `SettlementHelper.IsGarrisonStarving` 经由 `Settlement.Town.FoodChange` 间接依赖本模型。
- [Village](../Village) —— `CalculateTownFoodStocksChange` 遍历 `town.Owner.Settlement.BoundVillages`，按各村庄的炉灶等级与状态（正常/被劫掠/被围）累加食物产量。

下游与协同系统：

- [GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior) —— `CalculateMaxGarrisonSizeTownCanFeed` 调用 `CalculateTownFoodStocksChange` 反推城镇能容纳的驻军规模。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `GarrisonTroopsCampaignBehavior` 的基类，是实际驱动调用方。
- [IssueModel](../IssueModel) —— `DefaultSettlementFoodModel` 在 `GetSettlementFoodChangeDueToIssues` 中通过 `Campaign.Current.Models.IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementFood, ...)` 注入议题对食物的影响。
- [Building](../Building) —— `CalculateTownFoodStocksChange` 通过 `Town.AddEffectOfBuildings(BuildingEffectEnum.FoodProduction / FoodConsumption)`，把建筑（如粮仓、农场）效果累加进食物变化。

共享/相关类型：

- [ExplainedNumber](../ExplainedNumber) —— `CalculateTownFoodStocksChange` 的返回类型，用于携带带说明项的数值分解（传入 `includeDescriptions: true` 时给出“繁荣消耗”“驻军消耗”“周边土地”“村庄”等明细）。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— 同属定居点规则模型簇，常一起被派生替换。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) / [SettlementSecurityModel](../SettlementSecurityModel) —— 同样以 `Town` 为参数的定居点规则模型，每日结算时与本模型并列被读取。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementFoodModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用（`GarrisonTroopsCampaignBehavior` 自己都做了 `if (settlementFoodModel == null) return 0;` 的防御）。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了消耗或产量公式，但真正把结果累加到 `Town.FoodStocks` 的是领地行为与每日结算。只替换模型、却让调用方按旧假设处理驻军规模或饥荒阈值，会出现“预测不缺粮却仍在挨饿”或驻军上限与实际脱节。
- **`includeMarketStocks` 与食用人口口径必须一致**：`FoodChange`（含市场库存）与 `FoodChangeWithoutMarketStocks`（不含）给出的是不同口径的净变化；`SettlementHelper.IsGarrisonStarving` 用 `NumberOfProsperityToEatOneFood` 计算“繁荣度消耗的食物量”来与负数 `FoodChange` 比较，若你改了消耗常数却没同步改对应派生逻辑，饥荒判定会失真。
- **城堡上限偏移**：`FoodStocksUpperLimit` 基础 300，城堡额外 +150（`CastleFoodStockUpperLimitBonus`）。`Town.FoodStocksUpperLimit()` 会在 `IsCastle` 时再加上这个偏移，若你覆盖基础值却忘了城堡分支，城堡与城镇会共用同一上限。

## 成员说明

### 食物储量上限

- **`FoodStocksUpperLimit`**（属性，返回 `int`）
  - 用途：食物存量的硬上限基数。默认实现 `DefaultSettlementFoodModel` 返回 `300`；`Town.FoodStocksUpperLimit()` 以它为初始值，城堡再叠加 `CastleFoodStockUpperLimitBonus`，最后加上 `BuildingEffectEnum.FoodStock` 建筑效果得到实际上限。
  - 副作用：无，纯计算。
  - 调用时机：`Town.FoodStocksUpperLimit()` 在初始化/读写 `Town.FoodStocks` 上限时读取；城镇管理界面展示容量时也会用到。

- **`CastleFoodStockUpperLimitBonus`**（属性，返回 `int`）
  - 用途：城堡相较城镇额外享有的食物储量上限加成。默认实现返回 `150`，仅在 `Town.IsCastle` 为真时由 `Town.FoodStocksUpperLimit()` 加入。
  - 副作用：无。
  - 调用时机：仅由 `Town.FoodStocksUpperLimit()` 在城堡分支读取。

### 消耗速率常数

- **`NumberOfProsperityToEatOneFood`**（属性，返回 `int`）
  - 用途：每累积这么多繁荣度，城镇每日要多消耗 1 单位食物。默认实现返回 `40`；`CalculateTownFoodStocksChange` 用它把 `town.Prosperity / 40` 作为“繁荣消耗”项从产量中扣除。
  - 副作用：无。
  - 调用时机：食物变化计算内部读取；`SettlementHelper.IsGarrisonStarving` 也用它反算“繁荣度吃掉的食物量”来判定饥荒。

- **`NumberOfMenOnGarrisonToEatOneFood`**（属性，返回 `int`）
  - 用途：每这么多驻军成员，城镇每日要多消耗 1 单位食物。默认实现返回 `20`；`CalculateTownFoodStocksChange` 用 `garrisonParty.Party.NumberOfAllMembers / 20`（无驻军时按 0）作为“驻军消耗”项扣除。
  - 副作用：无。
  - 调用时机：食物变化计算内部读取；被围城时还会叠加 `DefaultPerks.Steward.Gourmet`（减少消耗）与 `DefaultPerks.Medicine.TriageTent` 的加成。

### 每日食物净变化

- **`CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)`**
  - 用途：返回该城镇/城堡明日食物存量的净变化（`ExplainedNumber`）。默认实现先算“消耗侧”：繁荣消耗（`Prosperity`/`NumberOfProsperityToEatOneFood`，受 `Steward.MasterOfWarcraft` 影响）与驻军消耗（`NumberOfAllMembers`/`NumberOfMenOnGarrisonToEatOneFood`，被围城时受 `Steward.Gourmet`、`Medicine.TriageTent` 影响）；再算“生产侧”：非围城时周边土地基础产出（城镇 +15、城堡 +10）加上每个附庸村庄按炉灶等级 `(hearthLevel+1)*6` 的产量（被劫掠/被围村庄为 0），叠加 `BuildingEffectEnum.FoodProduction` 建筑效果，围城时则改为 `Roguery.DirtyFighting` 加成；若 `includeMarketStocks` 为真，还会累加市场上 `ItemCategory.Property.BonusToFoodStores` 类别商品的售出量；最后减去 `HuntingRights` 政策（+2 产量）并注入议题效果（`IssueModel`）。结果 = 产量 − 消耗，可能为正（增）或负（减）。
  - 副作用：无，纯计算；内部用 `ExplainedNumber` 累积带说明项的数值，但仅在 `includeDescriptions: true` 时对外暴露明细。
  - 调用时机：`Town.FoodChange`（含市场）、`Town.FoodChangeWithoutMarketStocks`（不含市场）、`Town.FoodChangeExplanation`（含说明）三个属性直接调用；`TownManagementVM` 在刷新城镇管理面板时调用以展示食物趋势；`GarrisonTroopsCampaignBehavior.CalculateMaxGarrisonSizeTownCanFeed` 用来反推可养活的驻军规模。

## 示例

读取某城镇明日食物净变化（含市场库存），并判断它是增产还是减产：

```csharp
Town town = Settlement.CurrentSettlement.Town;
ExplainedNumber foodChange = Campaign.Current.Models.SettlementFoodModel
    .CalculateTownFoodStocksChange(town, includeMarketStocks: true, includeDescriptions: false);
bool isStarving = foodChange.ResultNumber < 0f;
```

查询城镇的食物储量上限与繁荣度消耗系数（用于自定义饥荒/补给逻辑）：

```csharp
int upperLimit = town.IsCastle
    ? Campaign.Current.Models.SettlementFoodModel.FoodStocksUpperLimit
        + Campaign.Current.Models.SettlementFoodModel.CastleFoodStockUpperLimitBonus
    : Campaign.Current.Models.SettlementFoodModel.FoodStocksUpperLimit;

float prosperityFoodCost = town.Prosperity /
    (float)Campaign.Current.Models.SettlementFoodModel.NumberOfProsperityToEatOneFood;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Town](../Town) · [Settlement](../Settlement) · [Village](../Village) · [GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [IssueModel](../IssueModel) · [Building](../Building) · [ExplainedNumber](../ExplainedNumber) · [DefaultSettlementFoodModel](../DefaultSettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel)
