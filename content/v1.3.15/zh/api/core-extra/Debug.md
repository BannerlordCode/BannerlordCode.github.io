---
title: "Debug"
description: "Debug 的自动生成类参考。"
---
# Debug

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Debug`
**Base:** 无
**File:** `TaleWorlds.Library/Debug.cs`

## 概述

`Debug` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 读取并返回当前对象中 「telemetry level mask」 的结果。

```csharp
// 静态调用，不需要实例
Debug.GetTelemetryLevelMask();
```

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**用途 / Purpose:** 为 「crash report custom string」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Debug.SetCrashReportCustomString("example");
```

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**用途 / Purpose:** 为 「crash report custom stack」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Debug.SetCrashReportCustomStack("example");
```

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理与 「assert」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.Assert(false, "example", "example", "example", 0);
```

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理与 「failed assert」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.FailedAssert("example", "example", "example", 0);
```

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理与 「silent assert」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.SilentAssert(false, "example", false, "example", "example", 0);
```

### ShowError
`public static void ShowError(string message)`

**用途 / Purpose:** 显示「error」对应的界面或元素。

```csharp
// 静态调用，不需要实例
Debug.ShowError("example");
```

### ShowWarning
`public static void ShowWarning(string message)`

**用途 / Purpose:** 显示「warning」对应的界面或元素。

```csharp
// 静态调用，不需要实例
Debug.ShowWarning("example");
```

### ReportMemoryBookmark
`public static void ReportMemoryBookmark(string message)`

**用途 / Purpose:** 处理与 「report memory bookmark」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.ReportMemoryBookmark("example");
```

### Print
`public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理与 「print」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.Print("example", 0, debug.DebugColor.White, 0);
```

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**用途 / Purpose:** 显示「message box」对应的界面或元素。

```csharp
// 静态调用，不需要实例
Debug.ShowMessageBox("example", "example", 0);
```

### PrintWarning
`public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理与 「print warning」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.PrintWarning("example", 0);
```

### PrintError
`public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理与 「print error」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.PrintError("example", "example", 0);
```

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**用途 / Purpose:** 处理与 「display debug message」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.DisplayDebugMessage("example");
```

### WatchVariable
`public static void WatchVariable(string name, object value)`

**用途 / Purpose:** 处理与 「watch variable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.WatchVariable("example", value);
```

### StartTelemetryConnection
`public static void StartTelemetryConnection(bool showErrors)`

**用途 / Purpose:** 启动「telemetry connection」流程或状态机。

```csharp
// 静态调用，不需要实例
Debug.StartTelemetryConnection(false);
```

### StopTelemetryConnection
`public static void StopTelemetryConnection()`

**用途 / Purpose:** 停止「telemetry connection」流程或状态机。

```csharp
// 静态调用，不需要实例
Debug.StopTelemetryConnection();
```

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string message)`

**用途 / Purpose:** 将「debug line on screen」写入目标位置。

```csharp
// 静态调用，不需要实例
Debug.WriteDebugLineOnScreen("example");
```

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理与 「render debug line」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugLine(position, direction, 0, false, 0);
```

### RenderDebugLineWithThickness
`public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)`

**用途 / Purpose:** 处理与 「render debug line with thickness」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugLineWithThickness(position, direction, 0, false, 0, 0);
```

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理与 「render debug sphere」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugSphere(position, 0, 0, false, 0);
```

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**用途 / Purpose:** 处理与 「render debug frame」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugFrame(frame, 0, 0);
```

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)`

**用途 / Purpose:** 处理与 「render debug text」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugText(0, 0, "example", 0, 0);
```

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)`

**用途 / Purpose:** 处理与 「render debug rect with color」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugRectWithColor(0, 0, 0, 0, 0);
```

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 position, string text, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**用途 / Purpose:** 处理与 「render debug text3d」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.RenderDebugText3D(position, "example", 0, 0, 0, 0);
```

### GetDebugVector
`public static Vec3 GetDebugVector()`

**用途 / Purpose:** 读取并返回当前对象中 「debug vector」 的结果。

```csharp
// 静态调用，不需要实例
Debug.GetDebugVector();
```

### SetDebugVector
`public static void SetDebugVector(Vec3 value)`

**用途 / Purpose:** 为 「debug vector」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Debug.SetDebugVector(value);
```

### SetTestModeEnabled
`public static void SetTestModeEnabled(bool testModeEnabled)`

**用途 / Purpose:** 为 「test mode enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Debug.SetTestModeEnabled(false);
```

### AbortGame
`public static void AbortGame()`

**用途 / Purpose:** 处理与 「abort game」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Debug.AbortGame();
```

## 使用示例

```csharp
Debug.GetTelemetryLevelMask();
```

## 参见

- [本区域目录](../)