<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageType

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `VillageType` is a class in the `TaleWorlds.CampaignSystem.Settlements` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<VillageType> All { get; }` |
| `Productions` | `public MBReadOnlyList<ValueTuple<ItemObject, float>> Productions { get; }` |
| `PrimaryProduction` | `public ItemObject PrimaryProduction { get; }` |


## Key Methods

### Initialize

```csharp
public VillageType Initialize(TextObject shortName, string meshName, string meshNameUnderConstruction, string meshNameBurned, ValueTuple<ItemObject, float> productions)
```

### ToString

```csharp
public override string ToString()
```

### AddProductions

```csharp
public void AddProductions(IEnumerable<ValueTuple<ItemObject, float>> productions)
```

### GetProductionPerDay

```csharp
public float GetProductionPerDay(ItemObject item)
```

### GetProductionPerDay

```csharp
public float GetProductionPerDay(ItemCategory itemCategory)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)