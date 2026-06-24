<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageType

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class VillageType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageType.cs`

## Overview

`VillageType` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<VillageType> All { get; }` |
| `Productions` | `public MBReadOnlyList<ValueTuple<ItemObject, float>> Productions { get; }` |
| `PrimaryProduction` | `public ItemObject PrimaryProduction { get; }` |

## Key Methods

### Initialize
`public VillageType Initialize(TextObject shortName, string meshName, string meshNameUnderConstruction, string meshNameBurned, ValueTuple<ItemObject, float> productions)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### AddProductions
`public void AddProductions(IEnumerable<ValueTuple<ItemObject, float>> productions)`

**Purpose:** Adds `productions` to the current collection or state.

### GetProductionPerDay
`public float GetProductionPerDay(ItemObject item)`

**Purpose:** Gets the current value of `production per day`.

### GetProductionPerDay
`public float GetProductionPerDay(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `production per day`.

## Usage Example

```csharp
var value = new VillageType();
value.Initialize(shortName, "example", "example", "example", valueTuple<ItemObject, 0);
```

## See Also

- [Complete Class Catalog](../catalog)