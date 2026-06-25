---
title: "FlagCapturePoint"
description: "FlagCapturePoint 的自动生成类参考。"
---
# FlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagCapturePoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs`

## 概述

`FlagCapturePoint` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec3 Position { get; }` |
| `FlagChar` | `public int FlagChar { get; }` |
| `IsContested` | `public bool IsContested { get; }` |
| `IsFullyRaised` | `public bool IsFullyRaised { get; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; }` |

## 主要方法

### ResetPointAsServer
`public void ResetPointAsServer(uint defaultColor, uint defaultColor2)`

**用途 / Purpose:** 将 point as server 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.ResetPointAsServer(0, 0);
```

### RemovePointAsServer
`public void RemovePointAsServer()`

**用途 / Purpose:** 从当前容器或状态中移除 point as server。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.RemovePointAsServer();
```

### OnAfterTick
`public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)`

**用途 / Purpose:** 在 after tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.OnAfterTick(false, ownerTeamChanged);
```

### SetMoveFlag
`public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)`

**用途 / Purpose:** 为 move flag 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetMoveFlag(directionTo, 0);
```

### ChangeMovementSpeed
`public void ChangeMovementSpeed(float speedMultiplier)`

**用途 / Purpose:** 调用 ChangeMovementSpeed 对应的操作。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.ChangeMovementSpeed(0);
```

### SetMoveNone
`public void SetMoveNone()`

**用途 / Purpose:** 为 move none 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetMoveNone();
```

### SetVisibleWithAllSynched
`public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)`

**用途 / Purpose:** 为 visible with all synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetVisibleWithAllSynched(false, false);
```

### SetTeamColorsWithAllSynched
`public void SetTeamColorsWithAllSynched(uint color, uint color2)`

**用途 / Purpose:** 为 team colors with all synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetTeamColorsWithAllSynched(0, 0);
```

### GetFlagColor
`public uint GetFlagColor()`

**用途 / Purpose:** 读取并返回当前对象中 flag color 的结果。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
var result = flagCapturePoint.GetFlagColor();
```

### GetFlagColor2
`public uint GetFlagColor2()`

**用途 / Purpose:** 读取并返回当前对象中 flag color2 的结果。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
var result = flagCapturePoint.GetFlagColor2();
```

### GetFlagProgress
`public float GetFlagProgress()`

**用途 / Purpose:** 读取并返回当前对象中 flag progress 的结果。

```csharp
// 先通过子系统 API 拿到 FlagCapturePoint 实例
FlagCapturePoint flagCapturePoint = ...;
var result = flagCapturePoint.GetFlagProgress();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.ResetPointAsServer(0, 0);
```

## 参见

- [本区域目录](../)