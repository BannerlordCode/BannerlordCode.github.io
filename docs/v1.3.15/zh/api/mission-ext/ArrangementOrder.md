<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArrangementOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArrangementOrder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ArrangementOrder` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)