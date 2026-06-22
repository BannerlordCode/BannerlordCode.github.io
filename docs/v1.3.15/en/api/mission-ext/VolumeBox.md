<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VolumeBox`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VolumeBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `VolumeBox` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### AddToCheckList

```csharp
public void AddToCheckList(Agent agent)
```

### RemoveFromCheckList

```csharp
public void RemoveFromCheckList(Agent agent)
```

### SetIsOccupiedDelegate

```csharp
public void SetIsOccupiedDelegate(VolumeBox.VolumeBoxDelegate volumeBoxDelegate)
```

### HasAgentsInAttackerSide

```csharp
public bool HasAgentsInAttackerSide()
```

### IsPointIn

```csharp
public bool IsPointIn(Vec3 point)
```

### VolumeBoxDelegate

```csharp
public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent> agentsInVolume)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)