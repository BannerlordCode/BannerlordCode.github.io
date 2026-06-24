<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Village`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Village](/versions/Village)
<!-- END BREADCRUMB -->
# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Village : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Village.cs`

## Overview

`Village` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<Village> All { get; }` |
| `VillageState` | `public Village.VillageStates VillageState { get; set; }` |
| `IsDeserted` | `public bool IsDeserted { get; }` |
| `LastDemandSatisfiedTime` | `public float LastDemandSatisfiedTime { get; }` |
| `Bound` | `public Settlement Bound { get; }` |
| `TradeBound` | `public Settlement TradeBound { get; set; }` |
| `MapFaction` | `public override IFaction MapFaction { get; set; }` |
| `MarketData` | `public VillageMarketData MarketData { get; set; }` |
| `Hearth` | `public float Hearth { get; set; }` |
| `TradeTaxAccumulated` | `public int TradeTaxAccumulated { get; set; }` |
| `HearthChange` | `public float HearthChange { get; }` |
| `Militia` | `public float Militia { get; }` |
| `MilitiaChange` | `public float MilitiaChange { get; }` |
| `MilitiaChangeExplanation` | `public ExplainedNumber MilitiaChangeExplanation { get; }` |
| `HearthChangeExplanation` | `public ExplainedNumber HearthChangeExplanation { get; }` |

## Key Methods

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `defender parties`.

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `next defender party`.

### DailyTick
`public void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### OnInit
`public override void OnInit()`

**Purpose:** Called when the `init` event is raised.

### GetWarehouseCapacity
`public int GetWarehouseCapacity()`

**Purpose:** Gets the current value of `warehouse capacity`.

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Gets the current value of `item price`.

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Gets the current value of `item price`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### IsProducing
`public bool IsProducing(ItemObject item)`

**Purpose:** Handles logic related to `is producing`.

### GetHearthLevel
`public int GetHearthLevel()`

**Purpose:** Gets the current value of `hearth level`.

### GetProsperityLevel
`public override SettlementComponent.ProsperityLevel GetProsperityLevel()`

**Purpose:** Gets the current value of `prosperity level`.

## Usage Example

```csharp
var value = new Village();
value.GetDefenderParties(battleType);
```

## See Also

- [Complete Class Catalog](../catalog)