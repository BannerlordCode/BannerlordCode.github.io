<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemModifierGroup`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemModifierGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ItemModifierGroup` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NoModifierLootScore` | `public int NoModifierLootScore { get; }` |
| `NoModifierProductionScore` | `public int NoModifierProductionScore { get; }` |
| `ItemModifiers` | `public MBReadOnlyList<ItemModifier> ItemModifiers { get; }` |


## Key Methods

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### AddItemModifier

```csharp
public void AddItemModifier(ItemModifier itemModifier)
```

### GetRandomItemModifierLootScoreBased

```csharp
public ItemModifier GetRandomItemModifierLootScoreBased()
```

### GetRandomItemModifierProductionScoreBased

```csharp
public ItemModifier GetRandomItemModifierProductionScoreBased()
```

### GetModifiersBasedOnQuality

```csharp
public List<ItemModifier> GetModifiersBasedOnQuality(ItemQuality quality)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)