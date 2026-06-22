<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DeploymentPoint` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition { get; }` |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment { get; }` |
| `DeployableWeapons` | `public IEnumerable<SynchedMissionObject> DeployableWeapons { get; }` |
| `IsDeployed` | `public bool IsDeployed { get; }` |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon { get; }` |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon { get; }` |
| `DeployableWeaponTypes` | `public IEnumerable<Type> DeployableWeaponTypes { get; }` |


## Key Methods

### AfterMissionStart

```csharp
public override void AfterMissionStart()
```

### GetDeploymentOrigin

```csharp
public Vec3 GetDeploymentOrigin()
```

### GetDeploymentPointState

```csharp
public DeploymentPoint.DeploymentPointState GetDeploymentPointState()
```

### GetDeploymentPointType

```csharp
public DeploymentPoint.DeploymentPointType GetDeploymentPointType()
```

### GetAssociatedSiegeLadders

```csharp
public List<SiegeLadder> GetAssociatedSiegeLadders()
```

### GetWeaponsUnder

```csharp
public MBList<SynchedMissionObject> GetWeaponsUnder()
```

### GetSpawnersForEditor

```csharp
public IEnumerable<SpawnerBase> GetSpawnersForEditor()
```

### Deploy

```csharp
public void Deploy(Type t)
```

### Deploy

```csharp
public void Deploy(SiegeWeapon s)
```

### Disband

```csharp
public ScriptComponentBehavior Disband()
```

### Hide

```csharp
public void Hide()
```

### Show

```csharp
public void Show()
```

### ToggleWeaponVisibility

```csharp
public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)
```

### HideAllWeapons

```csharp
public void HideAllWeapons()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)