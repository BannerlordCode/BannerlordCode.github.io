<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemCategory`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemCategory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ItemCategory` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsTradeGood` | `public bool IsTradeGood { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `CanSubstitute` | `public ItemCategory CanSubstitute { get; }` |
| `SubstitutionFactor` | `public float SubstitutionFactor { get; }` |
| `Properties` | `public ItemCategory.Property Properties { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `BaseDemand` | `public float BaseDemand { get; }` |
| `LuxuryDemand` | `public float LuxuryDemand { get; }` |


## Key Methods

### InitializeObject

```csharp
public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, ItemCategory.Property properties = ItemCategory.Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)
```

### GetName

```csharp
public override TextObject GetName()
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)