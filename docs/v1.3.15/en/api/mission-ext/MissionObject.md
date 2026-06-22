<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionObject` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public MissionObjectId Id { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime { get; }` |


## Key Methods

### SetAbilityOfFaces

```csharp
public virtual void SetAbilityOfFaces(bool enabled)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### AfterMissionStart

```csharp
public virtual void AfterMissionStart()
```

### OnMissionEnded

```csharp
public virtual void OnMissionEnded()
```

### OnDeploymentFinished

```csharp
public virtual void OnDeploymentFinished()
```

### SetEnabled

```csharp
public void SetEnabled(bool isParentObject = false)
```

### SetEnabledAndMakeVisible

```csharp
public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)
```

### SetDisabled

```csharp
public void SetDisabled(bool isParentObject = false)
```

### SetDisabledAndMakeInvisible

```csharp
public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)
```

### OnEndMission

```csharp
public virtual void OnEndMission()
```

### AddStuckMissile

```csharp
public virtual void AddStuckMissile(GameEntity missileEntity)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)