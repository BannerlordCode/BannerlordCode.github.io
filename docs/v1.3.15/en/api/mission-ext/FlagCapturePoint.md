<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FlagCapturePoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `FlagCapturePoint` is a class in the `TaleWorlds.MountAndBlade.Objects` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec3 Position { get; }` |
| `FlagChar` | `public int FlagChar { get; }` |
| `IsContested` | `public bool IsContested { get; }` |
| `IsFullyRaised` | `public bool IsFullyRaised { get; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; }` |


## Key Methods

### ResetPointAsServer

```csharp
public void ResetPointAsServer(uint defaultColor, uint defaultColor2)
```

### RemovePointAsServer

```csharp
public void RemovePointAsServer()
```

### OnAfterTick

```csharp
public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)
```

### SetMoveFlag

```csharp
public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)
```

### ChangeMovementSpeed

```csharp
public void ChangeMovementSpeed(float speedMultiplier)
```

### SetMoveNone

```csharp
public void SetMoveNone()
```

### SetVisibleWithAllSynched

```csharp
public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)
```

### SetTeamColorsWithAllSynched

```csharp
public void SetTeamColorsWithAllSynched(uint color, uint color2)
```

### GetFlagColor

```csharp
public uint GetFlagColor()
```

### GetFlagColor2

```csharp
public uint GetFlagColor2()
```

### GetFlagProgress

```csharp
public float GetFlagProgress()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)