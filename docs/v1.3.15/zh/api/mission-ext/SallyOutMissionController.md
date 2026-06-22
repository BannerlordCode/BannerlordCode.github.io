<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SallyOutMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## 概述

`SallyOutMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BesiegerSiegeEngines` | `public MBReadOnlyList<SiegeWeapon> BesiegerSiegeEngines { get { return this._besiegerSiegeEngines; }` |

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

### GetBesiegerSiegeEngines
```csharp
public static MBReadOnlyList<SiegeWeapon> GetBesiegerSiegeEngines()
```

### DisableSiegeEngines
```csharp
public static void DisableSiegeEngines()
```

## 使用示例

```csharp
// SallyOutMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<SallyOutMissionController>();
```

## 参见

- [完整类目录](../catalog)