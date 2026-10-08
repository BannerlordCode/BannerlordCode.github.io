---
title: "Village"
description: "战役地图上的村庄实体，作为 SettlementComponent 挂在城镇聚落上，负责村庄的产出、炉灶繁荣度与劫掠状态。"
---
# Village

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Type:** `public class Village : SettlementComponent`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Village.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`Village` 是战役地图上的**村庄实体**：它描述一个村庄「生产什么、有多繁荣、正处于什么处境」。

最容易踩错的点是它的继承关系：`Village` 派生自 `SettlementComponent`，而**不是**派生自 `Settlement`。聚落本体（名字、位置、驻军、民兵、金币）在 `Settlement` 上；`Village` 只是挂在这个聚落上的一个「经济身份」组件。一个聚落是不是村庄，取决于它身上有没有挂 `Village` 组件。

每个村庄通过 `Bound` 绑定到一座城镇，通过 `VillageType` 决定产出类型，通过 `Hearth`（炉灶值）衡量繁荣度，并通过 `VillageState` 状态机表达正常、被劫掠、被强征等状态。

## 心智模型

**聚落与组件分离。** `Settlement` 是本体，`Village` 是组件。想拿聚落本体要走 `village.Settlement`（基类 `SettlementComponent` 的属性），想拿所属城镇要走 `village.Bound`。`Village` 自己不持有驻军、金币这些数据——`DailyTick` 里给聚落加民兵、把金币封顶到 1000，操作的都是 `base.Owner.Settlement` 上的字段。

**Hearth 是村庄的核心数值。** 它类似「户数」：每天 `DailyTick` 把 `HearthChange`（由 `SettlementProsperityModel` 算出）累加到 `Hearth` 上，下限 10。`Hearth` 按 200 / 600 两个阈值分成 0/1/2 三级（`GetHearthLevel`），再映射为 Low/Mid/High 繁荣度。炉灶等级变化会把聚落等级掩码标记为脏，影响地图上的显示。`Hearth` 同时驱动每日产出、税收与民兵增长——它是村庄经济的心脏。

**VillageType 决定产出。** `VillageType.Productions` 是一组 (ItemObject, 数量) 对，`IsProducing` 用它判断某物品是否由该村产出。每日产出量由 `VillageProductionCalculatorModel` 按村庄当前状态计算，仓库容量（`GetWarehouseCapacity`）也由此推导（日产总量 × 5，至少 1）。

**VillageState 是状态机。** 五种状态：`Normal`（正常）、`BeingRaided`（正在被劫掠）、`ForcedForVolunteers` / `ForcedForSupplies`（被强征志愿兵 / 物资）、`Looted`（已被劫掠成废墟）。给 `VillageState` 赋值时 setter 会派发战役事件（`OnVillageBeingRaided` / `OnVillageLooted` / `OnVillageBecomeNormal`），`IsDeserted` 就是「状态为 Looted」的语法糖。

**阵营与交易都借道城镇。** `MapFaction` 直接返回 `Bound.MapFaction`——村庄没有独立阵营。`TradeBound` 是村庄的贸易城镇：若 `Bound` 本身是城镇，`TradeBound` 直接返回 `Bound`；村庄的物品定价（`GetItemPrice`）完全委托给 `TradeBound.Town.MarketData`。

## 怎么用

### 怎么拿到

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

// 1) 全图遍历：All 是 Campaign.Current.AllVillages 的只读封装
foreach (Village village in Village.All)
{
    Settlement homeTown = village.Bound; // 所属城镇
}

// 2) 按所属城镇反查村庄组件（没有村庄组件的聚落返回 null）
Village village = Village.All.FirstOrDefault(v => v.Bound == targetTown);
```

### 典型用法

```csharp
Village village = Village.All.FirstOrDefault(v => v.Bound == targetTown);
if (village == null) return;

// 状态检查：被劫掠中的村庄不应再触发产出
if (village.VillageState != Village.VillageStates.Normal) return;

// 产出检查：该村庄类型是否生产某物品
bool producesGrain = village.IsProducing(someItemObject);

// 繁荣度：炉灶等级与每日变化（含逐项解释，可喂给 UI）
int level = village.GetHearthLevel();
ExplainedNumber hearthDelta = village.HearthChangeExplanation;

// 交易定价：实际由 TradeBound 城镇市场报价
int buyPrice = village.GetItemPrice(someItemObject, tradingParty: null, isSelling: false);
```

### 坑

```csharp
// ❌ 把 Village 当 Settlement 用——它不是聚落本体，编译期就不成立
// Settlement s = (Settlement)village;

// ✅ 要聚落本体就走 Settlement 属性
Settlement body = village.Settlement;

// ❌ 直接改 Hearth 绕过模型：HearthChange 由 SettlementProsperityModel 计算，
//    手改会与每日结算、税收、民兵、繁荣度显示脱节
// village.Hearth = 9999f;

// ✅ 要干预就走模型或行为基类，让每日结算自然生效
int currentLevel = village.GetHearthLevel();
```

其他坑：

- `TradeBound` 为 null 时 `GetItemPrice` 直接返回 1，交易前必须判空。
- `Bound` 的 setter 会维护城镇与村庄的双向绑定（`AddBoundVillageInternal` / `RemoveBoundVillageInternal`），不要手动调内部方法。
- `VillageState` 的 setter 只对 Normal / BeingRaided / Looted 派发事件，ForcedForVolunteers / ForcedForSupplies 是静默切换。
- `LastDemandSatisfiedTime` 是防止连续强征的冷却时间，改动它等于绕过征兵 / 征粮限制。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `All` | `public static MBReadOnlyList<Village> All` | 全图村庄只读列表，遍历入口 | `Village.cs:70` |
| `GetDefenderParties` | `public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)` | 被劫掠 / 被强征时提供防守方队伍序列 | `Village.cs:79` |
| `GetNextDefenderParty` | `public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)` | 按索引逐个取防守方，供战斗系统迭代 | `Village.cs:95` |
| `VillageState` | `public Village.VillageStates VillageState` | 状态机开关；setter 派发劫掠 / 恢复事件 | `Village.cs:117` |
| `IsDeserted` | `public bool IsDeserted` | 是否已成废墟（状态为 Looted） | `Village.cs:151` |
| `LastDemandSatisfiedTime` | `public float LastDemandSatisfiedTime { get; private set; }` | 上次满足强征需求的时间，连续强征的冷却 | `Village.cs:163` |
| `Bound` | `public Settlement Bound` | 所属城镇；setter 维护双向绑定 | `Village.cs:168` |
| `TradeBound` | `public Settlement TradeBound` | 交易城镇；Bound 是城镇时直接返回 Bound | `Village.cs:197` |
| `MapFaction` | `public override IFaction MapFaction` | 阵营取自所属城镇，村庄无独立阵营 | `Village.cs:229` |
| `MarketData` | `public VillageMarketData MarketData` | 村庄市场数据；定价实际走 TradeBound 城镇市场 | `Village.cs:239` |
| `Hearth` | `public float Hearth { get; set; }` | 炉灶值（户数 / 繁荣度），驱动产出、税收、民兵 | `Village.cs:251` |
| `TradeTaxAccumulated` | `public int TradeTaxAccumulated { get; set; }` | 累计交易税，城镇收税的来源 | `Village.cs:257` |
| `DailyTick` | `public void DailyTick()` | 每日结算：Hearth 增长、民兵变化、金币封顶 1000 | `Village.cs:267` |
| `OnInit` | `public override void OnInit()` | 初始化：状态置 Normal、注入 1000 初始金币 | `Village.cs:287` |
| `GetWarehouseCapacity` | `public int GetWarehouseCapacity()` | 按每日食物 + 产出计算仓库容量（日产 × 5，至少 1） | `Village.cs:294` |
| `GetItemPrice` | `public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)` | 物品定价，委托 TradeBound 城镇市场；无交易城镇返回 1 | `Village.cs:306` |
| `IsProducing` | `public bool IsProducing(ItemObject item)` | 该村庄类型是否生产指定物品 | `Village.cs:359` |
| `HearthChange` | `public float HearthChange` | 每日炉灶变化量，由 SettlementProsperityModel 计算 | `Village.cs:376` |
| `Militia` | `public float Militia` | 当前民兵数（实际存于所属聚落） | `Village.cs:386` |
| `MilitiaChange` | `public float MilitiaChange` | 每日民兵变化量 | `Village.cs:396` |
| `MilitiaChangeExplanation` | `public ExplainedNumber MilitiaChangeExplanation` | 民兵变化逐项解释，UI 悬浮提示用 | `Village.cs:406` |
| `HearthChangeExplanation` | `public ExplainedNumber HearthChangeExplanation` | 炉灶变化逐项解释 | `Village.cs:416` |
| `GetHearthLevel` | `public int GetHearthLevel()` | 炉灶等级 0 / 1 / 2（阈值 200 / 600） | `Village.cs:425` |
| `GetProsperityLevel` | `public override SettlementComponent.ProsperityLevel GetProsperityLevel()` | 炉灶等级映射为 Low / Mid / High 繁荣度 | `Village.cs:439` |
| `MidHearthThreshold` | `public const int MidHearthThreshold = 600` | 高等炉灶阈值 | `Village.cs:453` |
| `LowHearthThreshold` | `public const int LowHearthThreshold = 200` | 中等炉灶阈值 | `Village.cs:456` |
| `NumberOfDaysToFillVillageStocks` | `public const int NumberOfDaysToFillVillageStocks = 5` | 补满村庄库存所需天数 | `Village.cs:462` |
| `VillagerPartyComponent` | `public VillagerPartyComponent VillagerPartyComponent` | 村民队伍组件，村庄遇袭时村民逃跑 / 参战 | `Village.cs:466` |
| `VillageType` | `public VillageType VillageType` | 村庄类型（渔村 / 农庄等），决定产出与守卫 | `Village.cs:477` |
| `VillageStates` | `public enum VillageStates` | 状态枚举：Normal / BeingRaided / ForcedForVolunteers / ForcedForSupplies / Looted | `Village.cs:487` |
| `ToString` | `public override string ToString()` | 返回聚落名 | `Village.cs:326` |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 存档反序列化：恢复 Hearth、VillageType、Bound 等 | `Village.cs:332` |

## 真实示例

**示例一：每日巡查村庄状态，村庄被劫掠后触发重建补贴**

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public class VillageWatchBehavior : CampaignBehaviorBase
{
    private readonly Dictionary<Village, Village.VillageStates> _lastStates = new();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    private void OnDailyTick()
    {
        foreach (Village village in Village.All)
        {
            Village.VillageStates current = village.VillageState;
            if (_lastStates.TryGetValue(village, out var previous) && previous != current)
            {
                if (current == Village.VillageStates.Looted)
                {
                    // 村庄刚被劫掠：给所属城镇发放重建补贴
                    village.Bound.ChangeGold(500);
                }
            }
            _lastStates[village] = current;
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

**示例二：在村庄做贸易报价**

```csharp
// 村庄本身没有独立市场：报价来自 TradeBound 城镇的 MarketData
Village village = settlement.Village;
if (village == null || village.TradeBound == null) return;

int buyPrice = village.GetItemPrice(item, tradingParty: null, isSelling: false);
int sellPrice = village.GetItemPrice(item, tradingParty: null, isSelling: true);
```

## 参见

- [`../Settlement`](../Settlement) —— 聚落本体；`Village` 是挂在它上面的组件，`village.Settlement` 取回本体。
- [`../MobileParty`](../MobileParty) —— 村民队伍（`VillagerPartyComponent`）与贸易商队都挂在聚落上。
- [`../MapEvent`](../MapEvent) —— 劫掠 / 强征战斗，`GetDefenderParties` 为村庄提供防守方。
- [`../Campaign`](../Campaign) —— `Campaign.Current` 提供 `AllVillages` 与各种计算模型。
- [`../CampaignTime`](../CampaignTime) —— `LastDemandSatisfiedTime` 的时间单位。
- `ItemRoster`（尚未入库，本批不链） —— 村庄库存与产出物品的容器。
- [`../TroopRoster`](../TroopRoster) —— 村庄守卫与民兵的兵力表。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) —— `Deserialize` 的反序列化基类。
- [`../../campaign-ext/MBObjectManager`](../../campaign-ext/MBObjectManager) —— `Deserialize` 的 objectManager 参数，负责读对象引用。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../Settlement`](../Settlement) · [`../MobileParty`](../MobileParty)
- 父索引：[`../_index`](../_index)
