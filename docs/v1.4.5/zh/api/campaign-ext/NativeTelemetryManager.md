<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeTelemetryManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NativeTelemetryManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class NativeTelemetryManager : ITelemetryManager`
**Base:** `ITelemetryManager`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeTelemetryManager.cs`

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

**用途 / Purpose:** 获取 `telemetry level mask` 的当前值。

### StartTelemetryConnection
`public void StartTelemetryConnection(bool showErrors)`

**用途 / Purpose:** 处理 `start telemetry connection` 相关逻辑。

### StopTelemetryConnection
`public void StopTelemetryConnection()`

**用途 / Purpose:** 处理 `stop telemetry connection` 相关逻辑。

### BeginTelemetryScopeInternal
`public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)`

**用途 / Purpose:** 处理 `begin telemetry scope internal` 相关逻辑。

### EndTelemetryScopeInternal
`public void EndTelemetryScopeInternal()`

**用途 / Purpose:** 处理 `end telemetry scope internal` 相关逻辑。

### BeginTelemetryScopeBaseLevelInternal
`public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)`

**用途 / Purpose:** 处理 `begin telemetry scope base level internal` 相关逻辑。

### EndTelemetryScopeBaseLevelInternal
`public void EndTelemetryScopeBaseLevelInternal()`

**用途 / Purpose:** 处理 `end telemetry scope base level internal` 相关逻辑。

## 使用示例

```csharp
var manager = NativeTelemetryManager.Current;
```

## 参见

- [完整类目录](../catalog)