<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentPoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentPoint

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DeploymentPoint` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition { get; }` |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment { get; }` |
| `DeployableWeapons` | `public IEnumerable<SynchedMissionObject> DeployableWeapons { get; }` |
| `IsDeployed` | `public bool IsDeployed { get; }` |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon { get; }` |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon { get; }` |
| `DeployableWeaponTypes` | `public IEnumerable<Type> DeployableWeaponTypes { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)