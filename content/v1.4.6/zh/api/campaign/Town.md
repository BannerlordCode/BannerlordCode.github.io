---
title: "Town"
description: "城镇是聚落体系中的经济与治理核心，负责管理市场物价、繁荣度、驻军民兵、建筑工坊与税收，是玩家经营领地的主要抓手。"
---
# Town

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Type:** `public class Town : Fief`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`Town` 是《骑马与砍杀2：霸主》战役层中「城镇」这一聚落的 C# 类型。它继承自中间基类 `Fief`（封地），而 `Fief` 又继承自 `SettlementComponent`。在游戏的聚落层级中，`Settlement` 是最外层对象，代表一个完整的聚落（城镇或城堡）；`Town` 则是 `Settlement` 内部专门承载「城镇特有逻辑」的组件——市场、繁荣度、总督、工坊、贸易税等经济与治理机制都挂在这里。

一个 `Settlement` 同时持有一个 `Town` 和一个 `Castle` 实例，通过 `IsTown` / `IsCastle` 属性区分当前聚落是城镇还是城堡。`Town` 和 `Castle` 共享 `Fief` 的驻军、食物、城墙等基础能力，但各自扩展了不同的经济与建筑系统。

## 心智模型

把 `Town` 想象成一个「领地经营仪表盘」：

- **它是什么**：`Settlement` 的经济与治理引擎。你看到的城镇界面——市场物价、繁荣度、总督头像、工坊列表、建筑队列——背后都是这个类的数据在驱动。
- **它不是什么**：它不是聚落本身。聚落是 `Settlement`，`Town` 只是 `Settlement` 的一个组件。访问聚落名称、位置、驻军等通用信息要走 `Settlement`；访问市场、繁荣度、总督等城镇特有信息才走 `Town`。
- **继承链**：`SettlementComponent` → `Fief` → `Town`。`Fief` 提供了驻军、食物、城墙、所有者等封地通用能力；`Town` 在其上叠加了市场、工坊、贸易税、总督、繁荣度等城镇专属系统。
- **与 Castle 的关系**：`Town` 和 `Castle` 是兄弟类，都继承 `Fief`。一个 `Settlement` 同时拥有两者，但只有一个处于「激活」状态（由 `IsTown` / `IsCastle` 决定）。城镇有市场和工坊，城堡没有；但两者共享驻军和城墙逻辑。

mod 作者什么时候该用 `Town`？当你需要读写城镇的经济数据（物价、繁荣度、总督、工坊）时。什么时候该用 `Settlement`？当你需要聚落本身的信息（名称、位置、驻军、围攻状态）时。

## 怎么用

### 怎么拿到

```csharp
// 从聚落获取 Town 组件
Settlement settlement = hero.CurrentSettlement;
Town town = settlement.Town;

// 遍历所有城镇
foreach (Town t in Town.AllTowns)
{
    Debug.Log(t.Name);
}

// 遍历所有封地（城镇 + 城堡）
foreach (Town f in Town.AllFiefs)
{
    Debug.Log(f.Name);
}
```

### 典型用法

```csharp
// 读取城镇经济状态
Town town = settlement.Town;
float prosperity = town.Prosperity;
float loyalty = town.Loyalty;
float security = town.Security;
Hero governor = town.Governor;

// 查看繁荣度每日变化及归因
float dailyChange = town.ProsperityChange;
ExplainedNumber breakdown = town.ProsperityChangeExplanation;

// 获取物品在该城镇的买卖价
int price = town.GetItemPrice(itemObject, tradingParty, isSelling: false);

// 查看城镇建筑列表
foreach (Building b in town.Buildings)
{
    Debug.Log($"{b.BuildingType.Name} Lv{b.CurrentLevel}");
}
```

### 坑

- `Town` 和 `Castle` 同时存在于一个 `Settlement` 上，但只有一个「激活」。对城镇调用 `IsCastle` 为 `false` 不代表该聚落没有城堡组件——它只是当前不是城堡。
- `Prosperity`、`Loyalty`、`Security` 的 setter 会自动 clamp 到 `[0, 100]`（繁荣度只 clamp 下限 0），但 `TradeTaxAccumulated` 没有 clamp。
- `Governor` 的 setter 会同步更新 `Hero.GovernorOf` 双向引用；直接改 `_governor` 字段（internal）会破坏这个一致性。
- `AllTowns` 和 `AllCastles` 返回的是 `Campaign.Current` 的缓存列表，不是副本——不要尝试修改返回的集合。
- `DailyTick` 是 `internal` 方法，mod 作者无法直接调用；游戏每天自动触发一次。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Prosperity` | `public float Prosperity { get; set; }` | 城镇繁荣度，驱动物价、人口与建筑上限。setter 自动 clamp 到 ≥0。 | `Town.cs:137` |
| `ProsperityChange` | `public float ProsperityChange { get; }` | 每日繁荣度变化量，由 `SettlementProsperityModel` 计算。 | `Town.cs:201` |
| `ProsperityChangeExplanation` | `public ExplainedNumber ProsperityChangeExplanation { get; }` | 繁荣度变化的归因分解，用于 UI 展示与调试。 | `Town.cs:211` |
| `FoodChange` | `public float FoodChange { get; }` | 每日食物库存变化量，含市场库存消耗。 | `Town.cs:221` |
| `FoodChangeExplanation` | `public ExplainedNumber FoodChangeExplanation { get; }` | 食物变化的归因分解。 | `Town.cs:241` |
| `LoyaltyChange` | `public float LoyaltyChange { get; }` | 每日忠诚度变化量，由 `SettlementLoyaltyModel` 计算。 | `Town.cs:251` |
| `LoyaltyChangeExplanation` | `public ExplainedNumber LoyaltyChangeExplanation { get; }` | 忠诚度变化的归因分解。 | `Town.cs:261` |
| `SecurityChange` | `public float SecurityChange { get; }` | 每日安全度变化量，由 `SettlementSecurityModel` 计算。 | `Town.cs:271` |
| `SecurityChangeExplanation` | `public ExplainedNumber SecurityChangeExplanation { get; }` | 安全度变化的归因分解。 | `Town.cs:281` |
| `MilitiaChange` | `public float MilitiaChange { get; }` | 每日民兵数量变化量。 | `Town.cs:291` |
| `MilitiaChangeExplanation` | `public ExplainedNumber MilitiaChangeExplanation { get; }` | 民兵变化的归因分解。 | `Town.cs:301` |
| `Construction` | `public float Construction { get; }` | 每日建造力，由 `BuildingConstructionModel` 计算。 | `Town.cs:311` |
| `ConstructionExplanation` | `public ExplainedNumber ConstructionExplanation { get; }` | 建造力的归因分解。 | `Town.cs:321` |
| `OwnerClan` | `public Clan OwnerClan { get; set; } | 拥有该城镇的氏族。setter 会触发 `ChangeClanInternal`，更新氏族与聚落的关联。 | `Town.cs:332` |
| `Security` | `public float Security { get; set; }` | 城镇安全度，范围 [0, 100]。影响繁荣度与叛乱概率。 | `Town.cs:350` |
| `Loyalty` | `public float Loyalty { get; set; }` | 城镇忠诚度，范围 [0, 100]。低于阈值会触发叛乱。 | `Town.cs:374` |
| `TradeBoundVillages` | `public MBReadOnlyList<Village> TradeBoundVillages { get; }` | 与该城镇贸易绑定的村庄列表，决定食物与税收来源。 | `Town.cs:397` |
| `FoodStocksUpperLimit` | `public int FoodStocksUpperLimit()` | 计算食物库存上限，受城堡加成与建筑效果影响。 | `Town.cs:418` |
| `Workshops` | `public Workshop[] Workshops { get; protected set; }` | 城镇工坊数组，工坊是城镇的被动收入来源。 | `Town.cs:433` |
| `CurrentBuilding` | `public Building CurrentBuilding { get; }` | 当前正在建造的建筑（队列头部），无建造队列时返回当前默认建筑。 | `Town.cs:437` |
| `CurrentDefaultBuilding` | `public Building CurrentDefaultBuilding { get; }` | 当前默认建筑（无建造队列时生效）。 | `Town.cs:451` |
| `MarketData` | `public TownMarketData MarketData { get; }` | 城镇市场数据，管理物价、价格因子与库存。 | `Town.cs:465` |
| `TradeTaxAccumulated` | `public int TradeTaxAccumulated { get; set; }` | 累计贸易税，城镇特有收入。 | `Town.cs:476` |
| `Governor` | `public Hero Governor { get; set; }` | 城镇总督，提供繁荣度、忠诚度等加成。setter 同步更新 `Hero.GovernorOf`。 | `Town.cs:491` |
| `AvailableShips` | `public MBReadOnlyList<Ship> AvailableShips { get; }` | 聚落可用的船只列表（通过 `Settlement.Party.Ships` 获取）。 | `Town.cs:516` |
| `AllFiefs` | `public static IEnumerable<Town> AllFiefs { get; }` | 所有封地（城镇 + 城堡）的枚举。 | `Town.cs:536` |
| `AllTowns` | `public static MBReadOnlyList<Town> AllTowns { get; }` | 所有城镇的只读列表。 | `Town.cs:557` |
| `AllCastles` | `public static MBReadOnlyList<Town> AllCastles { get; }` | 所有城堡的只读列表。 | `Town.cs:567` |
| `IsTown` | `public override bool IsTown { get; }` | 当前聚落是否为城镇（非城堡）。 | `Town.cs:577` |
| `IsCastle` | `public override bool IsCastle { get; }` | 当前聚落是否为城堡。 | `Town.cs:587` |
| `OnInit` | `public override void OnInit()` | 聚落初始化时调用，设置初始忠诚度、安全度与贸易税。 | `Town.cs:596` |
| `InitializeWorkshops` | `public void InitializeWorkshops(int count)` | 按数量初始化工坊数组，仅在存档加载时调用。 | `Town.cs:615` |
| `SoldItems` | `public IReadOnlyCollection<Town.SellLog> SoldItems { get; }` | 城镇已售物品记录，用于市场 UI 展示。 | `Town.cs:690` |
| `MapFaction` | `public override IFaction MapFaction { get; }` | 城镇所属地图派系（通过 `OwnerClan.MapFaction` 获取）。 | `Town.cs:700` |
| `IsUnderSiege` | `public bool IsUnderSiege { get; }` | 城镇是否正在被围攻。 | `Town.cs:715` |
| `Villages` | `public MBReadOnlyList<Village> Villages { get; }` | 聚落绑定的所有村庄（通过 `Settlement.BoundVillages` 获取）。 | `Town.cs:726` |
| `LastCapturedBy` | `public Clan LastCapturedBy { get; set; }` | 最后捕获该城镇的氏族，用于 UI 展示与历史记录。 | `Town.cs:738` |
| `AddEffectOfBuildings` | `public void AddEffectOfBuildings(BuildingEffectEnum, ref ExplainedNumber)` | 遍历所有建筑，将指定效果累加到 `ExplainedNumber`。 | `Town.cs:755` |
| `HasTournament` | `public bool HasTournament { get; }` | 城镇是否正在举办锦标赛（仅城镇，城堡无此机制）。 | `Town.cs:786` |
| `GetWallLevel` | `public int GetWallLevel()` | 获取城墙等级，城镇找 `SettlementFortifications`，城堡找 `CastleFortifications`。 | `Town.cs:858` |
| `GetItemPrice` | `public override int GetItemPrice(ItemObject, MobileParty, bool)` | 获取物品在该城镇的买卖价格，委托给 `MarketData.GetPrice`。 | `Town.cs:933` |
| `GetItemPrice` | `public override int GetItemPrice(EquipmentElement, MobileParty, bool)` | 获取装备栏元素在该城镇的买卖价格。 | `Town.cs:939` |
| `GetProsperityLevel` | `public override SettlementComponent.ProsperityLevel GetProsperityLevel()` | 将繁荣度数值映射为 Low / Mid / High 三档。 | `Town.cs:945` |
| `GetItemCategoryPriceIndex` | `public float GetItemCategoryPriceIndex(ItemCategory)` | 获取指定物品类别的价格因子，用于市场 UI 显示涨跌。 | `Town.cs:965` |
| `GetNeighborFortifications` | `public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType)` | 获取邻近防御工事列表，用于地图距离计算。 | `Town.cs:971` |
| `Buildings` | `public MBList<Building> Buildings` | 城镇所有已建建筑列表。 | `Town.cs:1022` |
| `BuildingsInProgress` | `public Queue<Building> BuildingsInProgress` | 正在建造的建筑队列。 | `Town.cs:1026` |
| `BoostBuildingProcess` | `public int BoostBuildingProcess` | 建造加速点数，可注入以加快建筑进度。 | `Town.cs:1030` |
| `InRebelliousState` | `public bool InRebelliousState` | 城镇是否处于叛乱状态。 | `Town.cs:1042` |
| `GarrisonAutoRecruitmentIsEnabled` | `public bool GarrisonAutoRecruitmentIsEnabled` | 驻军是否自动招募新兵。 | `Town.cs:1002` |
| `BesiegerCampPositions1` | `public MatrixFrame[] BesiegerCampPositions1` | 围攻者营地位置数组（第一组），用于 siege 场景布局。 | `Town.cs:991` |
| `BesiegerCampPositions2` | `public MatrixFrame[] BesiegerCampPositions2` | 围攻者营地位置数组（第二组）。 | `Town.cs:995` |
| `SellLog` | `public struct SellLog` | 销售记录结构体，包含物品类别与数量。 | `Town.cs:1053` |
| `SellLog.Category` | `public ItemCategory Category { get; private set; }` | 销售记录的物品类别。 | `Town.cs:1083` |
| `SellLog.Number` | `public int Number { get; private set; }` | 销售记录的物品数量。 | `Town.cs:1089` |
| `GetDefenderParties` | `public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes)` | 获取城镇防御方列表（驻军 + 符合条件的友方部队）。 | `Town.cs:154` |
| `GetNextDefenderParty` | `public PartyBase GetNextDefenderParty(ref int, MapEvent.BattleTypes)` | 按索引逐个获取防御方，用于战斗遍历。 | `Town.cs:170` |
| `Culture` | `public CultureObject Culture { get; }` | 城镇文化（通过 `Owner.Settlement.Culture` 获取）。 | `Town.cs:191` |
| `FoodChangeWithoutMarketStocks` | `public float FoodChangeWithoutMarketStocks { get; }` | 不含市场库存消耗的每日食物变化量。 | `Town.cs:231` |

## 真实示例

```csharp
// 示例：检查城镇是否处于危险状态并输出诊断信息
public static void DiagnoseTown(Town town)
{
    Debug.Log($"=== {town.Name} 诊断 ===");
    Debug.Log($"繁荣度: {town.Prosperity:F1} (每日 {town.ProsperityChange:F1})");
    Debug.Log($"忠诚度: {town.Loyalty:F1} (每日 {town.LoyaltyChange:F1})");
    Debug.Log($"安全度: {town.Security:F1} (每日 {town.SecurityChange:F1})");
    Debug.Log($"总督: {town.Governor?.Name ?? "无"}");
    Debug.Log($"拥有者: {town.OwnerClan?.Name ?? "无"}");
    Debug.Log($"被围攻: {town.IsUnderSiege}");
    Debug.Log($"叛乱中: {town.InRebelliousState}");

    if (town.Loyalty < 20f)
        Debug.LogWarning($"警告：{town.Name} 忠诚度极低，可能爆发叛乱！");

    if (town.ProsperityChange < 0f)
        Debug.LogWarning($"警告：{town.Name} 繁荣度持续下降，当前每日 {town.ProsperityChange:F1}");
}
```

```csharp
// 示例：比较两个城镇的市场价格
public static int CompareItemPrice(Town townA, Town townB, ItemObject item)
{
    int priceA = townA.GetItemPrice(item, null, false);
    int priceB = townB.GetItemPrice(item, null, false);
    return priceA - priceB;
}
```

## 参见

- [`../Settlement`](../Settlement) —— 聚落最外层对象，`Town` 是它的组件；访问名称、位置、驻军等通用信息用 `Settlement`。
- [`../Village`](../Village) —— 村庄是城镇的贸易绑定对象，为城镇提供食物与税收。
- [`../Clan`](../Clan) —— 氏族是城镇的拥有者，`OwnerClan` 属性指向它。
- [`../Kingdom`](../Kingdom) —— 王国是氏族的上层政治实体，城镇通过氏族间接属于王国。
- [`../Hero`](../Hero) —— 英雄可以担任城镇总督，`Governor` 属性指向 `Hero`。
- [`../MobileParty`](../MobileParty) —— 移动部队可以在城镇交易，`GetItemPrice` 接受 `MobileParty` 参数。
- [`../PartyBase`](../PartyBase) —— 队伍基类，`GetDefenderParties` 返回防御方 `PartyBase` 列表。
- [`../Campaign`](../Campaign) —— 战役静态入口，`AllTowns` / `AllCastles` 等静态属性通过它访问。
- [`../ItemRoster`](../ItemRoster) —— 物品栏，城镇市场交易涉及 `ItemRoster` 的读写。
- [`../TroopRoster`](../TroopRoster) —— 部队栏，驻军与民兵的兵力数据存放在这里。
- [`../CampaignObjectManager`](../CampaignObjectManager) —— 对象管理器，`Deserialize` 时通过它加载建筑类型。
- [`../ExplainedNumber`](../ExplainedNumber) —— 带归因的数值类型，所有 `*Explanation` 属性返回它。
- [`../CampaignTime`](../CampaignTime) —— 战役时间，`DailyTick` 每天由游戏时钟触发。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) —— 所有 MB 对象的基类，`Town` 的保存/加载机制依赖它。
- [`../../campaign-ext/MBObjectManager`](../../campaign-ext/MBObjectManager) —— 对象管理器，`Deserialize` 时通过它加载建筑类型。
- [`../../core-extra/Game`](../../core-extra/Game) —— 游戏入口，`Campaign.Current` 是访问战役层数据的起点。

## 导航

- 同桶：[`../Settlement`](../Settlement) · [`../Village`](../Village)
- 父索引：[`../_index`](../_index)
