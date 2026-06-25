---
title: "Production"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Production`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Production

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct Production`
**Area:** campaign-ext

## Overview

`Production` lives in `TaleWorlds.CampaignSystem.Settlements.Workshops`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Workshops` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentCost` | `public int EquipmentCost { get; }` |
| `Frequency` | `public int Frequency { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `JobName` | `public TextObject JobName { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |
| `SignMeshName` | `public string SignMeshName { get; }` |
| `PropMeshName1` | `public string PropMeshName1 { get; }` |
| `PropMeshName2` | `public string PropMeshName2 { get; }` |
| `PropMeshName3List` | `public List<string> PropMeshName3List { get; }` |
| `PropMeshName4` | `public string PropMeshName4 { get; }` |
| `PropMeshName5` | `public string PropMeshName5 { get; }` |
| `PropMeshName6` | `public string PropMeshName6 { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Productions` | `public MBReadOnlyList<WorkshopType.Production> Productions { get; }` |
| `All` | `public static MBReadOnlyList<WorkshopType> All { get; }` |
| `Inputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Inputs { get; }` |
| `Outputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Outputs { get; }` |
| `ConversionSpeed` | `public float ConversionSpeed { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Initialize
`public override void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### Find
`public static WorkshopType Find(string idString)`

**Purpose:** Handles logic related to `find`.

### FindFirst
`public static WorkshopType FindFirst(Func<WorkshopType, bool> predicate)`

**Purpose:** Handles logic related to `find first`.

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**Purpose:** Adds `input` to the current collection or state.

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**Purpose:** Adds `output` to the current collection or state.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
// First obtain a Production instance from game state, then call one of its public methods
var value = new Production();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
