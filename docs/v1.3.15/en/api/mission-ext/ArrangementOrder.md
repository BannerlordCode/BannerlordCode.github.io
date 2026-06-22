<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArrangementOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ArrangementOrder` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |


## Key Methods

### GetUnitSpacingOf

```csharp
public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a)
```

### GetUnitLooseness

```csharp
public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)
```

### GetMovementSpeedRestriction

```csharp
public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)
```

### GetArrangement

```csharp
public IFormationArrangement GetArrangement(Formation formation)
```

### OnApply

```csharp
public unsafe void OnApply(Formation formation)
```

### SoftUpdate

```csharp
public void SoftUpdate(Formation formation)
```

### GetShieldDirectionOfUnit

```csharp
public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrder.ArrangementOrderEnum orderEnum)
```

### GetUnitSpacing

```csharp
public int GetUnitSpacing()
```

### Rearrange

```csharp
public void Rearrange(Formation formation)
```

### RearrangeAux

```csharp
public void RearrangeAux(Formation formation, bool isDirectly)
```

### TransposeLineFormation

```csharp
public unsafe static void TransposeLineFormation(Formation formation)
```

### OnCancel

```csharp
public void OnCancel(Formation formation)
```

### TickOccasionally

```csharp
public void TickOccasionally(Formation formation)
```

### GetNativeEnum

```csharp
public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### OnOrderPositionChanged

```csharp
public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)
```

### GetArrangementOrderDefensiveness

```csharp
public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)
```

### GetArrangementOrderDefensivenessChange

```csharp
public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum, ArrangementOrder.ArrangementOrderEnum nextOrderEnum)
```

### CalculateFormationDirectionEnforcingFactorForRank

```csharp
public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)