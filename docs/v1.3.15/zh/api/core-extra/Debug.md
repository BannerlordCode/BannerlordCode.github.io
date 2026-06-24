<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Debug`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Debug

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public static class Debug`
**领域:** core-extra

## 概述

`Debug` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DebugManager` | `public static IDebugManager DebugManager { get; set; }` |
| `TelemetryManager` | `public static ITelemetryManager TelemetryManager { get; set; }` |

## 主要方法

### GetTelemetryLevelMask
`public static TelemetryLevelMask GetTelemetryLevelMask()`

**用途 / Purpose:** 获取 `telemetry level mask` 的当前值。

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**用途 / Purpose:** 设置 `crash report custom string` 的值或状态。

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**用途 / Purpose:** 设置 `crash report custom stack` 的值或状态。

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理 `assert` 相关逻辑。

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理 `failed assert` 相关逻辑。

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理 `silent assert` 相关逻辑。

### ShowError
`public static void ShowError(string message)`

**用途 / Purpose:** 处理 `show error` 相关逻辑。

### ShowWarning
`public static void ShowWarning(string message)`

**用途 / Purpose:** 处理 `show warning` 相关逻辑。

### ReportMemoryBookmark
`public static void ReportMemoryBookmark(string message)`

**用途 / Purpose:** 处理 `report memory bookmark` 相关逻辑。

### Print
`public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理 `print` 相关逻辑。

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**用途 / Purpose:** 处理 `show message box` 相关逻辑。

### PrintWarning
`public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理 `print warning` 相关逻辑。

### PrintError
`public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理 `print error` 相关逻辑。

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**用途 / Purpose:** 处理 `display debug message` 相关逻辑。

### WatchVariable
`public static void WatchVariable(string name, object value)`

**用途 / Purpose:** 处理 `watch variable` 相关逻辑。

### StartTelemetryConnection
`public static void StartTelemetryConnection(bool showErrors)`

**用途 / Purpose:** 处理 `start telemetry connection` 相关逻辑。

### StopTelemetryConnection
`public static void StopTelemetryConnection()`

**用途 / Purpose:** 处理 `stop telemetry connection` 相关逻辑。

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string message)`

**用途 / Purpose:** 处理 `write debug line on screen` 相关逻辑。

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug line` 相关逻辑。

### RenderDebugLineWithThickness
`public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)`

**用途 / Purpose:** 处理 `render debug line with thickness` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Debug.GetTelemetryLevelMask();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
