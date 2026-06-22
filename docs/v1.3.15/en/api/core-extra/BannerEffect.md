<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEffect`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerEffect

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `BannerEffect` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)
```

### GetBonusAtLevel

```csharp
public float GetBonusAtLevel(int bannerLevel)
```

### GetBonusStringAtLevel

```csharp
public string GetBonusStringAtLevel(int bannerLevel)
```

### GetDescription

```csharp
public TextObject GetDescription(int bannerLevel)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)