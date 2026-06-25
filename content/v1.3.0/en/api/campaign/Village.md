---
title: "Village"
description: "Auto-generated class reference for Village."
---
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

**Purpose:** Reads and returns the defender parties value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetDefenderParties(battleType);
```

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**Purpose:** Reads and returns the next defender party value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetNextDefenderParty(partyIndex, battleType);
```

### DailyTick
`public void DailyTick()`

**Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
village.DailyTick();
```

### OnInit
`public override void OnInit()`

**Purpose:** Invoked when the init event is raised.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
village.OnInit();
```

### GetWarehouseCapacity
`public int GetWarehouseCapacity()`

**Purpose:** Reads and returns the warehouse capacity value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetWarehouseCapacity();
```

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Reads and returns the item price value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetItemPrice(item, null, false);
```

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Reads and returns the item price value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetItemPrice(itemRosterElement, null, false);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
village.Deserialize(objectManager, node);
```

### IsProducing
`public bool IsProducing(ItemObject item)`

**Purpose:** Determines whether the this instance is in the producing state or condition.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.IsProducing(item);
```

### GetHearthLevel
`public int GetHearthLevel()`

**Purpose:** Reads and returns the hearth level value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetHearthLevel();
```

### GetProsperityLevel
`public override SettlementComponent.ProsperityLevel GetProsperityLevel()`

**Purpose:** Reads and returns the prosperity level value held by the this instance.

```csharp
// Obtain an instance of Village from the subsystem API first
Village village = ...;
var result = village.GetProsperityLevel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Village village = ...;
village.GetDefenderParties(battleType);
```

## See Also

- [Area Index](../)