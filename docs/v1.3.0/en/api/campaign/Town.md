<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Town`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/Town](/versions/Town)
<!-- END BREADCRUMB -->
# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Town : Fief`
**Base:** `Fief`
**File:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

## Overview

`Town` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `defender parties`.

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `next defender party`.

### FoodStocksUpperLimit
`public int FoodStocksUpperLimit()`

**Purpose:** Handles logic related to `food stocks upper limit`.

### OnInit
`public override void OnInit()`

**Purpose:** Called when the `init` event is raised.

### OnSessionStart
`public override void OnSessionStart()`

**Purpose:** Called when the `session start` event is raised.

### InitializeWorkshops
`public void InitializeWorkshops(int count)`

**Purpose:** Initializes the state, resources, or bindings for `workshops`.

### AddEffectOfBuildings
`public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**Purpose:** Adds `effect of buildings` to the current collection or state.

### GetWallLevel
`public int GetWallLevel()`

**Purpose:** Gets the current value of `wall level`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### SetSoldItems
`public void SetSoldItems(IEnumerable<Town.SellLog> logList)`

**Purpose:** Sets the value or state of `sold items`.

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Gets the current value of `item price`.

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Gets the current value of `item price`.

### GetProsperityLevel
`public override SettlementComponent.ProsperityLevel GetProsperityLevel()`

**Purpose:** Gets the current value of `prosperity level`.

### GetItemCategoryPriceIndex
`public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `item category price index`.

### GetNeighborFortifications
`public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType navigationType)`

**Purpose:** Gets the current value of `neighbor fortifications`.

### AutoGeneratedStaticCollectObjectsSellLog
`public static void AutoGeneratedStaticCollectObjectsSellLog(object o, List<object> collectedObjects)`

**Purpose:** Handles logic related to `auto generated static collect objects sell log`.

## Usage Example

```csharp
var value = new Town();
value.GetDefenderParties(battleType);
```

## See Also

- [Complete Class Catalog](../catalog)