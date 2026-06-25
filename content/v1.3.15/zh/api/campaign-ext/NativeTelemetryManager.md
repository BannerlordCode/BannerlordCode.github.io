---
title: "NativeTelemetryManager"
description: "NativeTelemetryManager 的自动生成类参考。"
---
# NativeTelemetryManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class NativeTelemetryManager : ITelemetryManager`
**Base:** `ITelemetryManager`
**File:** `TaleWorlds.DotNet/NativeTelemetryManager.cs`

## 概述

`NativeTelemetryManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `NativeTelemetryManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TelemetryLevelMask` | `public static TelemetryLevelMask TelemetryLevelMask { get; }` |

## 主要方法

### GetTelemetryLevelMask
`public TelemetryLevelMask GetTelemetryLevelMask()`

**用途 / Purpose:** 读取并返回当前对象中 「telemetry level mask」 的结果。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
var result = nativeTelemetryManager.GetTelemetryLevelMask();
```

### StartTelemetryConnection
`public void StartTelemetryConnection(bool showErrors)`

**用途 / Purpose:** 启动「telemetry connection」流程或状态机。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.StartTelemetryConnection(false);
```

### StopTelemetryConnection
`public void StopTelemetryConnection()`

**用途 / Purpose:** 停止「telemetry connection」流程或状态机。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.StopTelemetryConnection();
```

### BeginTelemetryScopeInternal
`public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.BeginTelemetryScopeInternal(levelMask, "example");
```

### EndTelemetryScopeInternal
`public void EndTelemetryScopeInternal()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.EndTelemetryScopeInternal();
```

### BeginTelemetryScopeBaseLevelInternal
`public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.BeginTelemetryScopeBaseLevelInternal(levelMask, "example");
```

### EndTelemetryScopeBaseLevelInternal
`public void EndTelemetryScopeBaseLevelInternal()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 NativeTelemetryManager 实例
NativeTelemetryManager nativeTelemetryManager = ...;
nativeTelemetryManager.EndTelemetryScopeBaseLevelInternal();
```

## 使用示例

```csharp
var manager = NativeTelemetryManager.Current;
```

## 参见

- [本区域目录](../)