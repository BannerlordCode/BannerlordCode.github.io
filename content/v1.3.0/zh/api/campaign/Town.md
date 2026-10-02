---
title: "Town"
description: "封地聚落组件：繁荣、忠诚、安全、民兵、粮食、工坊、建筑、总督与物价。"
---

# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Town : Fief`
**Base:** `Fief`
**File:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

## 概述

`Town` 是所有封地（既有设防城镇也有城堡）的 [Settlement](../Settlement) 组件。它继承自 `Fief`，而 `Fief` 又继承自 `SettlementComponent`，因此 `Town` 永远通过 `settlement.Town` 访问，本身从来不是独立的地图对象。

让一座封地“活起来”的一切都在这里体现为四个互相耦合的分数，加上推动它们的建筑：

| 分数 | 由谁驱动 | 含义 |
|------|-----------|------|
| `Prosperity` | `SettlementProsperityModel` | 村庄产出流入城镇的效率 |
| `Loyalty` | `SettlementLoyaltyModel` | 民心对统治的接受程度 |
| `Security` | `SettlementSecurityModel` | 民兵、城墙与守备军的有效性 |
| `Militia` | `SettlementMilitiaModel` | 未训练守备力量的规模 |
| `Food` | `SettlementFoodModel` | 粮食储备与消耗 |

每个分数都有一对匹配的解释数值（`ProsperityChange` / `ProsperityChangeExplanation` 等），以便城镇界面能显示“为什么变了”。只读裸 `float` 而不读解释，正是那些做出“为什么繁荣度掉了 3 点却说不清原因”mod 的根源。

与之并列的还有：`Workshops`（生产）、`Buildings` / `BuildingsInProgress`（建设）、`MarketData`（价格）、`Governor`（本地所有者）以及 `AvailableShips`（港口库存）。

## 心智模型

```
Settlement (IsFortification)
  └─ SettlementComponent
       └─ Fief
            └─ Town
                 ├─ Prosperity / Loyalty / Security / Militia（+ ExplainedNumber 变化）
                 ├─ Buildings[] / BuildingsInProgress / CurrentBuilding
                 ├─ Workshops[]          ──► 生产
                 ├─ MarketData           ──► 价格
                 ├─ Governor ──► Hero ──► Clan (OwnerClan)
                 ├─ Villages / TradeBoundVillages
                 └─ AvailableShips       （仅港口城镇）
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Town.OnInit() 已执行；Town.AllTowns / AllCastles 已填充
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.DailyTickTownEvent / HourlyTickEvent
DailyTick（直接传入城镇对象）
    读取 town.Prosperity、town.Loyalty、town.Security
    模型重算（SettlementProsperityModel.GetProsperityChange 等）
    town.ProsperityChange 携带供城镇界面显示的增量
```

实际开发中最容易踩的坑：

- **`Town` 不是 `Settlement`。** 回到地图对象的唯一方式是 `town.Settlement`。在需要 `Settlement` 的地方传 `Town`，是城镇代码里最常见的编译错误。
- **要读解释，而不只是读增量。** `ProsperityChange` 是净值；`ProsperityChangeExplanation` 是贡献列表。只报 `ProsperityChange` 的 mod 会说“繁荣 -3”却说不出原因。
- **`Workshops` 是 protected setter 的数组。** 它由 `InitializeWorkshops(int count)` 分配。调用两次会让旧数组连同其中的 `Workshop` 对象一起泄漏，而生产逻辑仍引用着它们。
- **`GetItemPrice` 有两个重载，两个都要紧。** `ItemObject` 重载处理可堆叠商品，`EquipmentElement` 重载处理装备与战马。传错会静默返回错误价格。
- **`BuildingsInProgress` 是活动队列。** 直接从中移除建筑既不退款也不取消建设；请走建筑动作。
- **城镇与城堡共用同一个类。** 行为不同时（城堡没有比武大会，城镇没有攻城城墙），请按 `settlement.IsCastle` / `settlement.IsTown` 分支，而不是按类型分支。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 基类 | `Fief` → `SettlementComponent` → [Settlement](../Settlement) | `town.Settlement` 回到上层 |
| 人物 | [Hero](../Hero) | `Governor`、`LastCapturedBy` |
| 政治 | [Clan](../Clan)、[Kingdom](../Kingdom) | `OwnerClan`、`MapFaction` |
| 村庄 | [Village](../Village) | `Villages`（绑定）、`TradeBoundVillages` |
| 模型 | `SettlementProsperityModel`、`SettlementLoyaltyModel`、`SettlementSecurityModel`、`SettlementMilitiaModel`、`SettlementFoodModel` | 分数计算 |
| 经济 | `TownMarketData`、`Workshop`、`Building` | 价格、生产、建设 |
| 事件 | [CampaignEvents](../CampaignEvents) | `DailyTickTownEvent`、`RulingClanChanged` |

## 主要成员

### 分数

#### `public float Prosperity`

村庄到城镇的生产健康度。由绑定村庄推导，公式归模型所有。

#### `public float ProsperityChange` / `public ExplainedNumber ProsperityChangeExplanation`

今日净增量及其逐项来源。城镇界面应从这里取数，而不是自行重算差值。

#### `public float Loyalty` / `public float LoyaltyChange` / `public ExplainedNumber LoyaltyChangeExplanation`

民心好感。由税收、文化匹配、民兵存在与近期战斗驱动。

#### `public float Security` / `public float SecurityChange` / `public ExplainedNumber SecurityChangeExplanation`

防御有效性，由民兵、城墙与守备军推导。

#### `public float Militia` / `public float MilitiaChange` / `public ExplainedNumber MilitiaChangeExplanation`

城镇自身的防卫力量。`Settlement.Militia` 转发到这里。

#### `public float Food` / `public float FoodChange` / `public float FoodChangeWithoutMarketStocks` / `public ExplainedNumber FoodChangeExplanation`

粮食储备及其每日增量。`FoodChangeWithoutMarketStocks` 把生产 / 消耗与市场采购隔离开来——想知道城镇是否靠自己就养得起自己，就用这个数。

#### `public SettlementComponent.ProsperityLevel GetProsperityLevel()`

界面显示的分档（`VeryLow`……`VeryHigh`）。属于推导值，不要跨天缓存。

### 人物与政治

#### `public Hero Governor`

本地行政长官。叛军控制下的城镇为 `null`。

#### `public Clan OwnerClan`（重写）

政治所有者。通过聚落易主动作变更。

#### `public Clan LastCapturedBy { get; set; }`

上一次夺取该城镇的氏族。征服链在存档中依赖它，请不要随手重置。

#### `public override IFaction MapFaction`

经由聚落解析控制派系，并尊重叛乱状态。

### 生产与建筑

#### `public Workshop[] Workshops { get; protected set; }`

城镇的生产场所。由 `InitializeWorkshops` 一次性分配。

#### `public void InitializeWorkshops(int count)`

分配工坊数组并填入默认值。每个城镇在创建时调用一次。

#### `public MBList<Building> Buildings` / `public Queue<Building> BuildingsInProgress` / `public Building CurrentBuilding` / `public Building CurrentDefaultBuilding`

建设状态。`BuildingsInProgress` 是队列；`BoostBuildingProcess` 加速队首。

#### `public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

把某类效果下所有建筑的贡献累加进一个 `ExplainedNumber`。这是“这些建筑给城镇带来了什么”的入口。

### 经济

#### `public TownMarketData MarketData`

价格数据。请通过市场数据模型写入，不要直接赋值。

#### `public int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

可堆叠商品的价格。`tradingParty` 应用该部队的交易加成；`isSelling` 翻转利润方向。

#### `public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

装备与战马的价格。与 `ItemObject` 重载是不同的东西。

#### `public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`

整类商品的归一化指数，供价格趋势界面使用。

#### `public IReadOnlyCollection<Town.SellLog> SoldItems` / `public void SetSoldItems(IEnumerable<Town.SellLog> logList)`

聚落的交易日志。可序列化；`SetSoldItems` 会整体替换该集合。

### 地理与库存

#### `public MBReadOnlyList<Village> Villages` / `public MBReadOnlyList<Village> TradeBoundVillages`

绑定村庄（供给繁荣度）与贸易绑定村庄（供给市场）。二者是不同的集合，都很重要。

#### `public MBReadOnlyList<Ship> AvailableShips`

港口当前可以提供的船只。只有港口城镇才会填充。

#### `public bool HasTournament` / `public int GetWallLevel()`

基于建筑与城墙的便捷查询。

#### `public MatrixFrame[] BesiegerCampPositions1` / `BesiegerCampPositions2`

攻城场景使用的预设围攻营地锚点。

## 使用示例

### 示例 1：由每日 tick 驱动的城镇经济报告

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class TownReportBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // IMbEvent<Town> —— 城镇直接传给你，无需扫描。
        CampaignEvents.DailyTickTownEvent.AddNonSerializedListener(this, OnDailyTickTown);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTickTown(Town town)
    {
        if (town == null || !town.IsUnderSiege)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"{town.Settlement.Name}：繁荣 {town.Prosperity:0}（{town.ProsperityChange:0.00}），" +
            $"忠诚 {town.Loyalty:0}（{town.LoyaltyChange:0.00}），粮食 {town.Food:0}"));
    }
}
```

### 示例 2：统计你拥有的建筑带来的效果

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;

public static string BuildingEffectSummary(Town town)
{
    ExplainedNumber result = new ExplainedNumber(0f, false);
    foreach (BuildingEffectEnum effect in Enum.GetValues(typeof(BuildingEffectEnum)))
    {
        town.AddEffectOfBuildings(effect, ref result);
    }

    return $"{town.Settlement.Name} 建筑合计：{result.ResultNumber:0.00}";
}
```

### 示例 3：分别计算买入价与卖出价

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static void QuoteWheat(Town town, MobileParty trader)
{
    CharacterObject wheat = MBObjectManager.Instance.GetObject<CharacterObject>("wheat");
    if (town == null || wheat == null)
    {
        return;
    }

    int buyPrice = town.GetItemPrice(wheat, trader, false);
    int sellPrice = town.GetItemPrice(wheat, trader, true);
    InformationManager.DisplayMessage(
        new InformationMessage($"{town.Settlement.Name}：买入 {buyPrice}，卖出 {sellPrice}"));
}
```

### 示例 4：判断城镇能否自给自足

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static bool IsSelfSustaining(Town town)
{
    if (town == null)
    {
        return false;
    }

    // 排除市场采购：为负说明无论交易如何都挨饿。
    return town.FoodChangeWithoutMarketStocks >= 0f;
}
```

## 风险与崩溃边界

1. **`Town` 永远不是 `Settlement`。** `town.Settlement` 是唯一的回溯路径。任何接受 `Settlement` 的 API 都不会接受 `Town`。
2. **类型判别。** 村庄的 `settlement.Town` 为 `null`。`AllTowns` 与 `AllCastles` 是同一批对象的不同过滤视图，请优先使用它们而不是基于 `Type` 的判断。
3. **`InitializeWorkshops` 不幂等。** 第二次调用会替换工坊数组，而旧的 `Workshop` 引用仍存活于生产与存档代码中。
4. **价格重载错配。** `GetItemPrice(ItemObject, ...)` 与 `GetItemPrice(EquipmentElement, ...)` 对同一概念返回不同结果；本意传 `EquipmentElement` 却传了 `ItemObject`，经过一次转换后就能编译，但数字是错的。
5. **建筑队列操作。** 从 `BuildingsInProgress` 中移除条目或直接改 `Buildings` 会跳过建设动作，于是进度、成本与城镇界面三方不一致。
6. **与存档耦合。** 繁荣、忠诚、安全、民兵、粮食、`LastCapturedBy`、工坊与建筑全部序列化。改动存档布局会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
7. **模型依赖。** 五个分数的增量都由已注册的 `Settlement*Model` 实现产生。替换模型的 mod 必须保留 `ExplainedNumber` 契约，否则城镇界面会坏掉。
8. **跨域依赖。** `MarketData` 只在交易系统内部才有意义；在地图回调里算价格会绕过交易利润与声望规则。

## 跨版本提示

- 五个分数、它们的 `ExplainedNumber` 配对模式以及两个 `GetItemPrice` 重载在 1.3.x 与 1.4.x 中完全一致。
- 后续构建增加了工坊阶级字段与更多 `BuildingEffectEnum` 成员。由于效果遍历是枚举驱动的，遍历 `Enum.GetValues` 的 mod 代码无需改动即可继续工作。

## 参见

- [Settlement](../Settlement) — 该组件所属的地图对象
- [Village](../Village) — 供给城镇繁荣度的生产来源
- [Clan](../Clan) — `OwnerClan`
- [Hero](../Hero) — `Governor`、`LastCapturedBy`
- [MobileParty](../MobileParty) — `tradingParty` 参数
- [Campaign](../Campaign) — 城镇注册表与战役时钟
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南