---
title: "CaptureTheFlagCapturePoint"
description: "CaptureTheFlagCapturePoint 的自动生成类参考。"
---
# CaptureTheFlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaptureTheFlagCapturePoint`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CaptureTheFlagCapturePoint.cs`

## 概述

`CaptureTheFlagCapturePoint` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Progress` | `public float Progress { get; }` |
| `Direction` | `public CaptureTheFlagFlagDirection Direction { get; }` |
| `Speed` | `public float Speed { get; }` |
| `InitialFlagFrame` | `public MatrixFrame InitialFlagFrame { get; }` |
| `FlagEntity` | `public GameEntity FlagEntity { get; }` |
| `FlagHolder` | `public SynchedMissionObject FlagHolder { get; }` |
| `FlagBottomBoundary` | `public GameEntity FlagBottomBoundary { get; }` |
| `FlagTopBoundary` | `public GameEntity FlagTopBoundary { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; set; }` |
| `Index` | `public int Index { get; set; }` |
| `UpdateFlag` | `public bool UpdateFlag { get; set; }` |

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 CaptureTheFlagCapturePoint 实例
CaptureTheFlagCapturePoint captureTheFlagCapturePoint = ...;
captureTheFlagCapturePoint.Reset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CaptureTheFlagCapturePoint captureTheFlagCapturePoint = ...;
captureTheFlagCapturePoint.Reset();
```

## 参见

- [本区域目录](../)