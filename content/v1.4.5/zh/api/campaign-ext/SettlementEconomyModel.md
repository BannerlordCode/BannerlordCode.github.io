---
title: "SettlementEconomyModel"
description: "把城镇繁荣、商品类别与市场价格转换为每日需求、供给、消费预算与金库漂移的可替换经济策略模型。"
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`  
**Base:** `MBGameModel<SettlementEconomyModel>`  
**源文件路径:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementEconomyModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSettlementEconomyModel`

## 一句话职责

它预测每个据点市场里「某种商品类别」的每日需求、平滑后的供给、本日消费预算与城镇金库的每日漂移量；它只做只读计算，不自己增删物品、不改库存、也不直接加减城镇金币。经济 Behavior 和市场数据把它的结果当作共享规则，因此自定义实现影响的是所有读取者，而不是某一个 UI 数字。

## 心智模型

这是城镇市场模拟的策略边界。`TownMarketData` 持有每类物品的供给、需求与库存快照，`ItemConsumptionBehavior` 读取本 Model 的需求、预算与金库漂移后，才去扣库存、改销售记录、并通过 `town.ChangeGold` 落地金币变化。繁荣、商品价值和库存是输入，不是该 Model 拥有的状态。

计算链是：城镇繁荣、`ItemCategory` 的需求属性、市场数据以及价格索引作为上游输入，进入 `Campaign.Current.Models.SettlementEconomyModel`，产出需求 / 供给 / 预算 / 金库增量，最后由 `ItemConsumptionBehavior`、`TownMarketData` 与 `CaravansCampaignBehavior` 把结果转成真实的世界变更。

```text
Town(繁荣/Gold/MarketData) + ItemCategory + 市场价格
        -> SettlementEconomyModel
        -> 需求 / 供给 / 消费预算 / 金库增量
        -> ItemConsumptionBehavior / TownMarketData / CaravansCampaignBehavior 落地变更
```

使用这个模型，是为了改变所有消费者看到的「计算结果」。如果目标是真的增删库存、改变城镇金币或写市场数据，应使用 `TownMarketData`、`town.ChangeGold` 或对应 Behavior/Action；不要在计算回调里调用它们，那会把一个只读查询变成每个市场 tick 都重复执行的副作用。模型必须保持无状态且确定性：供给/需求的指数平滑因子决定了市场滞后，替换实现若改变它，整个市场的反应速度都会变。

#### 生命周期与注册

`Campaign.Current.Models` 持有当前实例，属性名即 `SettlementEconomyModel`。默认实例是 `DefaultSettlementEconomyModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册它；自定义模型也必须在经济 Behavior 开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役和 `Models` 注册表。 |
| [`Town`](../../campaign/Town) | 提供繁荣、金币与 `MarketData` 上下文。 |
| [`Settlement`](../../campaign/Settlement) | 提供据点层级与所属城镇的归属上下文。 |
| [`ItemData`](../ItemData) | 承载单类别的供给/需求/库存快照，是 `GetEstimatedDemandForCategory` 的输入。 |
| [`ItemCategory`](../../core-extra/ItemCategory) | 提供 `BaseDemand`、`LuxuryDemand` 与价值等类别属性。 |
| [`ItemObject`](../../core-extra/ItemObject) | 提供商品价值，间接影响预算与供给。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`TownMarketData`](../TownMarketData) | 保存供需与库存，并在 `AddDemand` 中调用 `GetDemandChangeFromValue`。 |
| [`ItemConsumptionBehavior`](../ItemConsumptionBehavior) | 每日调用需求、预算、金库与供需更新方法并落地变更。 |
| [`CaravansCampaignBehavior`](../CaravansCampaignBehavior) | 在商队定价时调用 `CalculateDailySettlementBudgetForItemCategory`。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 繁荣由该模型计算，而繁荣是每日需求的直接输入。 |

### Action、事件与存档边界

模型本身没有存档字段，也不派发事件。合法的需求/供给变更经由 `TownMarketData` 与市场 Behavior 落地；金币变更经由 `town.ChangeGold`（在 `ItemConsumptionBehavior` 内）落地。自定义实现必须在相同输入下返回确定性结果，否则存档重载与战役重放时供需会与记录不一致。

## 成员契约

#### 需求与供给计算

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)` | 估计某类商品在给定城镇的「当前」需求快照；默认实现直接委托 `GetDailyDemandForCategory(town, category, extraProsperity: 1000)`，即在当前繁荣基础上叠加 1000 点繁荣做预览。 | `ItemConsumptionBehavior.UpdateSupplyAndDemand` 在每个市场 tick 用它估算供需平衡点（传入 `town.MarketData.GetCategoryData(category)` 作为 `itemData`）。只读计算，不修改供给/需求。 |
| `GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)` | 根据类别 `BaseDemand`/`LuxuryDemand` 与城镇繁荣计算每日需求；默认 `BaseDemand * max(0, prosperity+extra) + LuxuryDemand * max(0, prosperity-3000)`，若 `BaseDemand` 接近 0 则回退为 `prosperity * 0.01`。 | `ItemConsumptionBehavior` 在预算/消费阶段、`CaravansCampaignBehavior` 在商队定价时调用。只读查询；`extraProsperity` 仅用于「假设更繁荣」的预览，不是已发生的变化。 |
| `GetDemandChangeFromValue(float purchaseValue)` | 把一次购买的金额转换为需求增量；默认返回 `purchaseValue * 0.15`。 | `TownMarketData.AddDemand` 记录购买时调用，用返回值更新该类别需求。只读查询，但结果会被 `TownMarketData` 持久化进市场数据。 |
| `GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)` | 把「昨日供需」与「本日供需」做指数平滑，返回新的 `(supply, demand)`；默认 `newSupply = max(0.1, oldSupply*0.85 + dailySupply*0.15)`，`newDemand = oldDemand*0.85 + dailyDemand*0.15`。 | `ItemConsumptionBehavior.UpdateSupplyAndDemand` 每日市场更新时调用，结果写回 `marketData.SetSupplyDemand`。供给下限被钳到 `0.1`，平滑因子 `0.85/0.15` 决定市场滞后。 |

#### 预算与金库

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)` | 把「需求」与「类别价格指数」转换为本日消费预算（金额）；默认 `demand * pow(town.GetItemCategoryPriceIndex(category), 0.3)`。 | `ItemConsumptionBehavior` 与 `CaravansCampaignBehavior` 在决定城镇/商队能消费多少金额时调用。这是金额不是数量，不能和需求互换。只读。 |
| `GetTownGoldChange(Town town)` | 计算城镇金库向目标值漂移的金币增量；默认 `(10000 + prosperity*12 - gold)` 的 `0.25` 倍取整。 | `ItemConsumptionBehavior.UpdateTownGold` 每日调用，结果通过 `town.ChangeGold` 落地。模型本身不修改 `gold`；自定义实现返回无界值会在每日结算中创造或吞噬大量金币。 |

默认实现的可观察规律包括：需求随繁荣线性增长，且只对繁荣超过 `3000` 的部分叠加 `LuxuryDemand`；供需用 `0.85/0.15` 的指数平滑、供给下限 `0.1`；预算随需求与类别价格指数的 `0.3` 次幂同向变化；金库目标为 `10000 + prosperity*12`，每日取差额的四分之一。替换实现时，必须保持供给/需求/预算的单位一致，并为新城镇、缺失类别和零供给返回有界结果。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，获取路径与 `ItemConsumptionBehavior` 完全一致；等价地，`Campaign.Current.Models.GetModel<SettlementEconomyModel>()` 也能拿到同一实例：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public (float demand, float budget, int goldDelta) ReadTownEconomy(Town town, ItemCategory category)
{
    if (Campaign.Current == null || town == null || category == null)
    {
        return (0f, 0f, 0);
    }

    SettlementEconomyModel model = Campaign.Current.Models.SettlementEconomyModel;
    float demand = model.GetDailyDemandForCategory(town, category);
    float budget = model.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
    int goldDelta = model.GetTownGoldChange(town);
    return (demand, budget, goldDelta);
}
```

这段结果适合 UI 预览或调试；普通经济逻辑应直接读取 `TownMarketData` 与 `town.Gold`，不要自己重新把需求乘一遍。注意 `GetTownGoldChange` 返回的是「本日应变化的金币增量」而不是金库总额。

如果只想给预算加一个有限修正，保留原模型作为委托对象，让六个方法仍然成对执行：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class ModSettlementEconomyModel : SettlementEconomyModel
{
    private readonly SettlementEconomyModel _vanilla;

    public ModSettlementEconomyModel(SettlementEconomyModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)
        => _vanilla.GetEstimatedDemandForCategory(town, itemData, category);

    public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)
        => _vanilla.GetDailyDemandForCategory(town, category, extraProsperity);

    public override float GetDemandChangeFromValue(float purchaseValue)
        => _vanilla.GetDemandChangeFromValue(purchaseValue);

    public override (float, float) GetSupplyDemandForCategory(
        Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)
        => _vanilla.GetSupplyDemandForCategory(town, category, dailySupply, dailyDemand, oldSupply, oldDemand);

    public override int GetTownGoldChange(Town town)
        => _vanilla.GetTownGoldChange(town);

    public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)
    {
        float vanilla = _vanilla.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
        return vanilla * 1.1f;
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla 委托；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementEconomyModel` 查找自己，否则会递归。若要让替换覆盖整个经济链，优先委托当前版本默认模型，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型。
2. **单位混淆:** 需求、供给是「数量/类别」单位，预算是「金额」，金库增量是 `int` 金币差；四者不能互换，也不能把金库增量当成金库总额。
3. **无界结果:** 负数、NaN 或跳过供给下限 `0.1` 会让市场与商队定价失效；金库增量无界会在每日结算中创造或吞噬大量金币，破坏经济平衡。
4. **查询中修改世界:** 招募、库存增删、传送和金币转移必须在 `TownMarketData`、Behavior 或 Action 中执行，不能放进计算回调。
5. **平滑因子:** `0.85/0.15` 决定市场滞后；改变它会改变整个市场的反应速度，且与存档中的旧供需不兼容。
6. **确定性/存档:** 供给/需求保存在 `TownMarketData` 中并随存档落地；自定义实现必须是确定性的，否则重载或重放时供需会与记录漂移。

## 版本与导航

契约（六个抽象方法及其签名）在 `1.3.0`、`1.3.15` 与 `1.4.5` 三版中完全一致（已核对源码）。默认实现 `DefaultSettlementEconomyModel` 位于 `TaleWorlds.CampaignSystem.GameComponents`，其平滑常量（`0.85/0.15`、繁荣阈值 `3000`、金库目标 `10000 + prosperity*12`、预算指数 `0.3`）属于默认实现细节；跨版本替换模型时，应委托当前版本的 vanilla 实现，而不是把旧公式复制到新版本。

- ↑ [父级：Campaign 扩展 API](../)
- ↔ [PartySpeedModel](../PartySpeedModel) · [PartyWageModel](../PartyWageModel) · [TradeAgreementModel](../TradeAgreementModel) · [VillageTradeModel](../VillageTradeModel)
- 相关类：[Town](../../campaign/Town) · [TownMarketData](../TownMarketData) · [ItemConsumptionBehavior](../ItemConsumptionBehavior) · [SettlementProsperityModel](../SettlementProsperityModel) · [DefaultSettlementEconomyModel](../DefaultSettlementEconomyModel)
- [战役系统指南](../../../guide/campaign-system)
