---
title: "Town"
description: "Town 的自动生成类参考。"
---
# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Town : Fief`
**Base:** `Fief`
**File:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

## 概述

`Town` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Prosperity` | `public float Prosperity { get; set; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `ProsperityChange` | `public float ProsperityChange { get; }` |
| `ProsperityChangeExplanation` | `public ExplainedNumber ProsperityChangeExplanation { get; }` |
| `FoodChange` | `public float FoodChange { get; }` |
| `FoodChangeWithoutMarketStocks` | `public float FoodChangeWithoutMarketStocks { get; }` |
| `FoodChangeExplanation` | `public ExplainedNumber FoodChangeExplanation { get; }` |
| `LoyaltyChange` | `public float LoyaltyChange { get; }` |
| `LoyaltyChangeExplanation` | `public ExplainedNumber LoyaltyChangeExplanation { get; }` |
| `SecurityChange` | `public float SecurityChange { get; }` |
| `SecurityChangeExplanation` | `public ExplainedNumber SecurityChangeExplanation { get; }` |
| `MilitiaChange` | `public float MilitiaChange { get; }` |
| `MilitiaChangeExplanation` | `public ExplainedNumber MilitiaChangeExplanation { get; }` |
| `Construction` | `public float Construction { get; }` |
| `ConstructionExplanation` | `public ExplainedNumber ConstructionExplanation { get; }` |
| `OwnerClan` | `public Clan OwnerClan { get; set; }` |
| `Security` | `public float Security { get; set; }` |
| `Loyalty` | `public float Loyalty { get; set; }` |
| `TradeBoundVillages` | `public MBReadOnlyList<Village> TradeBoundVillages { get; }` |
| `Workshops` | `public Workshop Workshops { get; set; }` |
| `CurrentBuilding` | `public Building CurrentBuilding { get; }` |
| `CurrentDefaultBuilding` | `public Building CurrentDefaultBuilding { get; }` |
| `MarketData` | `public TownMarketData MarketData { get; set; }` |
| `TradeTaxAccumulated` | `public int TradeTaxAccumulated { get; set; }` |
| `Governor` | `public Hero Governor { get; set; }` |
| `AvailableShips` | `public MBReadOnlyList<Ship> AvailableShips { get; }` |
| `AllFiefs` | `public static IEnumerable<Town> AllFiefs { get; }` |
| `AllTowns` | `public static MBReadOnlyList<Town> AllTowns { get; }` |
| `AllCastles` | `public static MBReadOnlyList<Town> AllCastles { get; }` |
| `IsTown` | `public override bool IsTown { get; }` |
| `IsCastle` | `public override bool IsCastle { get; }` |
| `SoldItems` | `public IReadOnlyCollection<Town.SellLog> SoldItems { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsUnderSiege` | `public bool IsUnderSiege { get; }` |
| `Villages` | `public MBReadOnlyList<Village> Villages { get; set; }` |
| `LastCapturedBy` | `public Clan LastCapturedBy { get; set; }` |
| `HasTournament` | `public bool HasTournament { get; }` |
| `Category` | `public ItemCategory Category { get; }` |
| `Number` | `public int Number { get; }` |

## 主要方法

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 读取并返回当前对象中 「defender parties」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetDefenderParties(battleType);
```

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 读取并返回当前对象中 「next defender party」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetNextDefenderParty(partyIndex, battleType);
```

### FoodStocksUpperLimit
`public int FoodStocksUpperLimit()`

**用途 / Purpose:** 处理与 「food stocks upper limit」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.FoodStocksUpperLimit();
```

### OnInit
`public override void OnInit()`

**用途 / Purpose:** 在 「init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
town.OnInit();
```

### OnSessionStart
`public override void OnSessionStart()`

**用途 / Purpose:** 在 「session start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
town.OnSessionStart();
```

### InitializeWorkshops
`public void InitializeWorkshops(int count)`

**用途 / Purpose:** 为 「workshops」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
town.InitializeWorkshops(0);
```

### AddEffectOfBuildings
`public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**用途 / Purpose:** 将 「effect of buildings」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
town.AddEffectOfBuildings(buildingEffect, result);
```

### GetWallLevel
`public int GetWallLevel()`

**用途 / Purpose:** 读取并返回当前对象中 「wall level」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetWallLevel();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
town.Deserialize(objectManager, node);
```

### SetSoldItems
`public void SetSoldItems(IEnumerable<Town.SellLog> logList)`

**用途 / Purpose:** 为 「sold items」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
town.SetSoldItems(logList);
```

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetItemPrice(item, null, false);
```

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetItemPrice(itemRosterElement, null, false);
```

### GetProsperityLevel
`public override SettlementComponent.ProsperityLevel GetProsperityLevel()`

**用途 / Purpose:** 读取并返回当前对象中 「prosperity level」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetProsperityLevel();
```

### GetItemCategoryPriceIndex
`public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`

**用途 / Purpose:** 读取并返回当前对象中 「item category price index」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetItemCategoryPriceIndex(itemCategory);
```

### GetNeighborFortifications
`public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 读取并返回当前对象中 「neighbor fortifications」 的结果。

```csharp
// 先通过子系统 API 拿到 Town 实例
Town town = ...;
var result = town.GetNeighborFortifications(navigationType);
```

### AutoGeneratedStaticCollectObjectsSellLog
`public static void AutoGeneratedStaticCollectObjectsSellLog(object o, List<object> collectedObjects)`

**用途 / Purpose:** 处理与 「auto generated static collect objects sell log」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Town.AutoGeneratedStaticCollectObjectsSellLog(o, collectedObjects);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Town town = ...;
town.GetDefenderParties(battleType);
```

## 参见

- [本区域目录](../)