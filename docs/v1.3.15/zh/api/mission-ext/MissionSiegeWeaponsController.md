<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeWeaponsController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**Base:** `IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`

## 概述

`MissionSiegeWeaponsController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### GetMaxDeployableWeaponCount
```csharp
public int GetMaxDeployableWeaponCount(Type t)
```

### GetSiegeWeapons
```csharp
public IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()
```

### OnWeaponDeployed
```csharp
public void OnWeaponDeployed(SiegeWeapon missionWeapon)
```

### OnWeaponUndeployed
```csharp
public void OnWeaponUndeployed(SiegeWeapon missionWeapon)
```

### GetWeaponType
```csharp
public static Type GetWeaponType(ScriptComponentBehavior weapon)
```

## 使用示例

```csharp
// MissionSiegeWeaponsController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<MissionSiegeWeaponsController>();
```

## 参见

- [完整类目录](../catalog)