
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Village / 村庄`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Village / 村庄

## 心智模型

先把 `Village` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.CampaignSystem.Settlements  
**File**: 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/Settlements/Village.cs

`  
**Purpose**: A village attached to a Settlement that produces goods and maintains hearth/militia  
**Base class**: 

`SettlementComponent

` (?

`MBObjectBase

`)

## Overview / 概述

Village represents a village attached to a town or castle Settlement. It produces goods according to its 

`VillageType

`, accumulates hearth (population) and militia, and trades through its 

`TradeBound

`. A village is one of the 

`SettlementComponent

` subclasses stored on a 

`Settlement

` (alongside 

`Town

`, 

`Hideout

`, etc.) and is exposed via 

`Settlement.Village

`.

Village 代表依附于城镇或城堡定居点的村庄。它根据 

`VillageType

` 生产商品，积累炉火（人口）与民兵，并通过 

`TradeBound

` 进行贸易。Village 是存放在 

`Settlement

` 上的 

`SettlementComponent

` 子类之一（与 

`Town

`、`Hideout

` 等并列），可通过 

`Settlement.Village

` 访问?
## 常量 / Constants

\| Name \| Type \| Value \| Description \|
\|------\|------\|-------\|-------------\|
\| 

`MidHearthThreshold

` \| 

`int

` \| 

`600

` \| Hearth threshold for the "high" prosperity level \|
\| 

`LowHearthThreshold

` \| 

`int

` \| 

`200

` \| Hearth threshold for the "mid" prosperity level \|
\| 

`NumberOfDaysToFillVillageStocks

` \| 

`int

` \| 

`5

` \| Number of days to fill village stocks \|

## 关键属?/ Key Properties

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| 

`All

` (static) \| 

`MBReadOnlyList&lt;Village&gt;

` \| All villages in the campaign (

`Campaign.Current.AllVillages

`) \|
\| 

`Hearth

` \| 

`float

` \| Current hearth (population); clamped to a minimum of 10 in 

`DailyTick

`. SaveableProperty 108 \|
\| 

`HearthChange

` \| 

`float

` \| Daily hearth change from 

`SettlementProsperityModel.CalculateHearthChange

` \|
\| 

`HearthChangeExplanation

` \| 

`ExplainedNumber

` \| Detailed daily hearth change (with breakdown) \|
\| 

`Militia

` \| 

`float

` \| Current militia, read from 

`Owner.Settlement.Militia

` \|
\| 

`MilitiaChange

` \| 

`float

` \| Daily militia change from 

`SettlementMilitiaModel.CalculateMilitiaChange

` \|
\| 

`MilitiaChangeExplanation

` \| 

`ExplainedNumber

` \| Detailed daily militia change (with breakdown) \|
\| 

`VillageState

` \| 

`VillageStates

` \| Current state. Setter fires campaign events (

`OnVillageBecomeNormal

`, 

`OnVillageBeingRaided

`, 

`OnVillageLooted

`) \|
\| 

`IsDeserted

` \| 

`bool

` \| 

`true

` when 

`VillageState == Looted

` \|
\| 

`Bound

` \| 

`Settlement

` \| The town/castle settlement this village is bound to (private setter maintains the bound-village lists) \|
\| 

`TradeBound

` \| 

`Settlement

` \| Settlement whose market sets trade prices. Returns 

`Bound

` when 

`Bound.IsTown

`, otherwise the separate 

`_tradeBound

` \|
\| 

`MapFaction

` (override) \| 

`IFaction

` \| 

`Bound.MapFaction

` \|
\| 

`MarketData

` \| 

`VillageMarketData

` \| Market data for this village \|
\| 

`TradeTaxAccumulated

` \| 

`int

` \| Accumulated trade tax. SaveableProperty 110 \|
\| 

`LastDemandSatisfiedTime

` \| 

`float

` \| Campaign time the last demand was satisfied (

`-1

` initially). SaveableProperty 105 \|
\| 

`VillageType

` \| 

`VillageType

` \| Village type defining production (public field) \|
\| 

`VillagerPartyComponent

` \| 

`VillagerPartyComponent

` \| Cached villager party component (

`[CachedData]

`) \|
\| 

`Owner

` (inherited) \| 

`PartyBase

` \| Owning party (the settlement's party) \|
\| 

`Settlement

` (inherited) \| 

`Settlement

` \| The settlement this component belongs to (

`Owner.Settlement

`) \|
\| 

`Name

` (inherited) \| 

`TextObject

` \| Village name (

`Owner.Name

`) \|
\| 

`Gold

` (inherited) \| 

`int

` \| Village gold (SaveableProperty 50) \|
\| 

`Banner

` (inherited) \| 

`Banner

` \| Settlement banner \|

## 关键方法 / Key Methods

\| Method \| Description \|
\|--------\|-------------\|
\| 

`GetHearthLevel()

` \| Returns 

`0

` (&lt; 200), 

`1

` (?200), or 

`2

` (?600) based on 

`Hearth

` \|
\| 

`GetProsperityLevel()

` \| Maps hearth level to 

`Low

` / 

`Mid

` / 

`High

` \|
\| 

`GetWarehouseCapacity()

` \| Warehouse capacity = 

`ceil(max(1, daily production) * 5)

` \|
\| 

`IsProducing(ItemObject item)

` \| 

`true

` if 

`VillageType.Productions

` contains 

`item

` \|
\| 

`GetItemPrice(ItemObject, MobileParty, bool)

` \| Item price via 

`TradeBound.Town.MarketData

`; returns 

`1

` if 

`TradeBound

` is null \|
\| 

`GetItemPrice(EquipmentElement, MobileParty, bool)

` \| Overload for an 

`EquipmentElement

` \|
\| 

`GetDefenderParties(MapEvent.BattleTypes battleType)

` \| Enumerates defender parties for a map event of the given type \|
\| 

`GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)

` \| Returns the next defender party by index \|
\| 

`DailyTick()

` \| Daily update: adds 

`HearthChange

` to 

`Hearth

` (min 10), adds 

`MilitiaChange

` to the owner settlement's militia, clamps gold to ?1000 \|
\| 

`OnInit()

` \| Sets state to 

`Normal

` (via 

`ChangeVillageStateAction

`) and grants 1000 gold \|
\| 

`ChangeGold(int changeAmount)

` (inherited) \| Adjusts 

`Gold

`, clamped at 0 \|
\| 

`ToString()

` \| Returns 

`Name.ToString()

` \|

## VillageStates 枚举 / VillageStates Enum

\| Member \| Description \|
\|--------\|-------------\|
\| 

`Normal

` \| Village is operating normally \|
\| 

`BeingRaided

` \| Village is currently being raided \|
\| 

`ForcedForVolunteers

` \| Volunteers are being forced from the village \|
\| 

`ForcedForSupplies

` \| Supplies are being forced from the village \|
\| 

`Looted

` \| Village has been looted (treated as deserted) \|

## 使用示例 / Usage Example

`

`

`csharp
// Iterate all villages and report economy / state
foreach (Village village in Village.All)
{
    // Bound is the town or castle this village is attached to
    Settlement bound = village.Bound;
    bool boundToTown = bound != null && bound.IsTown;

    // TradeBound is the settlement whose market sets this village's prices
    Settlement tradeBound = village.TradeBound;

    Debug.Print($"{village.Name}: Hearth={village.Hearth:F0} " +
                $"Militia={village.Militia:F0} State={village.VillageState} " +
                $"BoundToTown={boundToTown}");
}

// Inspect a specific village's production and prosperity
Settlement settlement = Settlement.Find("village_V1");
if (settlement != null && settlement.IsVillage)
{
    Village village = settlement.Village;

    // Prosperity is driven by hearth: &gt;=600 High, &gt;=200 Mid, else Low
    SettlementComponent.ProsperityLevel level = village.GetProsperityLevel();
    int hearthLevel = village.GetHearthLevel();

    // Daily changes come from the prosperity / militia models
    ExplainedNumber hearthChange = village.HearthChangeExplanation;
    ExplainedNumber militiaChange = village.MilitiaChangeExplanation;

    // List what the village produces
    foreach (var production in village.VillageType.Productions)
    {
        ItemObject output = production.Item1;
        bool stillProducing = village.IsProducing(output);
    }

    // A looted village is deserted
    if (village.IsDeserted)
    {
        Debug.Print($"{village.Name} has been looted.");
    }
}
`

`

`

&gt; State changes: assigning 

`VillageState

` directly fires the corresponding campaign events, but the canonical path is 

`ChangeVillageStateAction

` (e.g. 

`ChangeVillageStateAction.ApplyBySettingToNormal(settlement)

`), as used by 

`OnInit

`.

&gt; 状态变更：直接赋?

`VillageState

` 会触发对应战役事件，但推荐的做法是使?

`ChangeVillageStateAction

`（如 

`OnInit

` 中使用的 

`ChangeVillageStateAction.ApplyBySettingToNormal(settlement)

`）?
## 参见 / See Also

- [Settlement](./Settlement.md)
- [Workshop](./Workshop.md)
