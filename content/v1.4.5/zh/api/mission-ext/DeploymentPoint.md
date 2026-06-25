---
title: "DeploymentPoint"
description: "DeploymentPoint 的自动生成类参考。"
---
# DeploymentPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentPoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentPoint.cs`

## 概述

`DeploymentPoint` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition { get; }` |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment { get; }` |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon { get; }` |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon { get; }` |

## 主要方法

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.AfterMissionStart();
```

### GetDeploymentOrigin
`public Vec3 GetDeploymentOrigin()`

**用途 / Purpose:** 读取并返回当前对象中 「deployment origin」 的结果。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetDeploymentOrigin();
```

### GetDeploymentPointState
`public DeploymentPointState GetDeploymentPointState()`

**用途 / Purpose:** 读取并返回当前对象中 「deployment point state」 的结果。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetDeploymentPointState();
```

### GetDeploymentPointType
`public DeploymentPointType GetDeploymentPointType()`

**用途 / Purpose:** 读取并返回当前对象中 「deployment point type」 的结果。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetDeploymentPointType();
```

### GetAssociatedSiegeLadders
`public List<SiegeLadder> GetAssociatedSiegeLadders()`

**用途 / Purpose:** 读取并返回当前对象中 「associated siege ladders」 的结果。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetAssociatedSiegeLadders();
```

### GetWeaponsUnder
`public MBList<SynchedMissionObject> GetWeaponsUnder()`

**用途 / Purpose:** 读取并返回当前对象中 「weapons under」 的结果。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetWeaponsUnder();
```

### GetSpawnersForEditor
`public IEnumerable<SpawnerBase> GetSpawnersForEditor()`

**用途 / Purpose:** 读取并返回当前对象中 「spawners for editor」 的结果。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetSpawnersForEditor();
```

### Deploy
`public void Deploy(Type t)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Deploy(t);
```

### Deploy
`public void Deploy(SiegeWeapon s)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Deploy(s);
```

### Disband
`public ScriptComponentBehavior Disband()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.Disband();
```

### Hide
`public void Hide()`

**用途 / Purpose:** 隐藏当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Hide();
```

### Show
`public void Show()`

**用途 / Purpose:** 显示当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Show();
```

### ToggleWeaponVisibility
`public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.ToggleWeaponVisibility(false, weapon);
```

### HideAllWeapons
`public void HideAllWeapons()`

**用途 / Purpose:** 隐藏「all weapons」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 DeploymentPoint 实例
DeploymentPoint deploymentPoint = ...;
deploymentPoint.HideAllWeapons();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DeploymentPoint deploymentPoint = ...;
deploymentPoint.AfterMissionStart();
```

## 参见

- [本区域目录](../)