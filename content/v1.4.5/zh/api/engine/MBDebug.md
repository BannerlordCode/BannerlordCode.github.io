---
title: "MBDebug"
description: "MBDebug 的自动生成类参考。"
---
# MBDebug

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MBDebug`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MBDebug.cs`

## 概述

`MBDebug` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DebugVector` | `public static Vec3 DebugVector { get; set; }` |
| `ShowDebugInfoState` | `public static int ShowDebugInfoState { get; set; }` |

## 主要方法

### DisableUI
`public static string DisableUI(List<string> strings)`

**用途 / Purpose:** 调用 DisableUI 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.DisableUI(strings);
```

### AssertMemoryUsage
`public static void AssertMemoryUsage(int memoryMB)`

**用途 / Purpose:** 调用 AssertMemoryUsage 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.AssertMemoryUsage(0);
```

### AbortGame
`public static void AbortGame(int ExitCode = 5)`

**用途 / Purpose:** 调用 AbortGame 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.AbortGame(0);
```

### ShowWarning
`public static void ShowWarning(string message)`

**用途 / Purpose:** 显示warning对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBDebug.ShowWarning("example");
```

### ContentWarning
`public static void ContentWarning(string message)`

**用途 / Purpose:** 调用 ContentWarning 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.ContentWarning("example");
```

### ConditionalContentWarning
`public static void ConditionalContentWarning(bool condition, string message)`

**用途 / Purpose:** 调用 ConditionalContentWarning 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.ConditionalContentWarning(false, "example");
```

### ShowError
`public static void ShowError(string message)`

**用途 / Purpose:** 显示error对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBDebug.ShowError("example");
```

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**用途 / Purpose:** 显示message box对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBDebug.ShowMessageBox("example", "example", 0);
```

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 调用 Assert 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.Assert(false, "example", "example", "example", 0);
```

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 调用 FailedAssert 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.FailedAssert("example", "example", "example", 0);
```

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 调用 SilentAssert 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.SilentAssert(false, "example", false, "example", "example", 0);
```

### AssertConditionOrCallerClassName
`public static void AssertConditionOrCallerClassName(bool condition, string name)`

**用途 / Purpose:** 调用 AssertConditionOrCallerClassName 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.AssertConditionOrCallerClassName(false, "example");
```

### AssertConditionOrCallerClassNameSearchAllCallstack
`public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)`

**用途 / Purpose:** 调用 AssertConditionOrCallerClassNameSearchAllCallstack 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.AssertConditionOrCallerClassNameSearchAllCallstack(false, "example");
```

### Print
`public static void Print(string message, int logLevel = 0, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**用途 / Purpose:** 调用 Print 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.Print("example", 0, taleWorlds.Library.Debug.DebugColor.White, 0);
```

### ConsolePrint
`public static void ConsolePrint(string message, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**用途 / Purpose:** 调用 ConsolePrint 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.ConsolePrint("example", taleWorlds.Library.Debug.DebugColor.White, 0);
```

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

**用途 / Purpose:** 将debug line on screen写入目标位置。

```csharp
// 静态调用，不需要实例
MBDebug.WriteDebugLineOnScreen("example");
```

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugText 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugText(0, 0, "example", 0, 0);
```

### RenderText
`public static void RenderText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**用途 / Purpose:** 调用 RenderText 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderText(0, 0, "example", 0, 0);
```

### RenderDebugRect
`public static void RenderDebugRect(float left, float bottom, float right, float top)`

**用途 / Purpose:** 调用 RenderDebugRect 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugRect(0, 0, 0, 0);
```

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = uint.MaxValue)`

**用途 / Purpose:** 调用 RenderDebugRectWithColor 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugRectWithColor(0, 0, 0, 0, 0);
```

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugFrame 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugFrame(frame, 0, 0);
```

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = uint.MaxValue, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugText3D 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugText3D(worldPosition, "example", 0, 0, 0, 0);
```

### RenderDebugDirectionArrow
`public static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false)`

**用途 / Purpose:** 调用 RenderDebugDirectionArrow 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugDirectionArrow(position, direction, 0, false);
```

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugLine 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugLine(position, direction, 0, false, 0);
```

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugSphere 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugSphere(position, 0, 0, false, 0);
```

### RenderDebugCapsule
`public static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugCapsule 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugCapsule(p0, p1, 0, 0, false, 0);
```

### RenderDebugBoundingBoxOfEntity
`public static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugBoundingBoxOfEntity 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugBoundingBoxOfEntity(entity, frame, 0, false, 0);
```

### RenderDebugBoundingBox
`public static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugBoundingBox 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugBoundingBox(box, frame, 0, false, 0);
```

### ClearRenderObjects
`public static void ClearRenderObjects()`

**用途 / Purpose:** 清空当前对象中的render objects。

```csharp
// 静态调用，不需要实例
MBDebug.ClearRenderObjects();
```

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugBoxObject 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugBoxObject(min, max, 0, false, 0);
```

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 调用 RenderDebugBoxObject 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.RenderDebugBoxObject(min, max, frame, 0, false, 0);
```

### PostWarningLine
`public static void PostWarningLine(string line)`

**用途 / Purpose:** 调用 PostWarningLine 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.PostWarningLine("example");
```

### IsErrorReportModeActive
`public static bool IsErrorReportModeActive()`

**用途 / Purpose:** 判断当前对象是否处于 error report mode active 状态或条件。

```csharp
// 静态调用，不需要实例
MBDebug.IsErrorReportModeActive();
```

### IsErrorReportModePauseMission
`public static bool IsErrorReportModePauseMission()`

**用途 / Purpose:** 判断当前对象是否处于 error report mode pause mission 状态或条件。

```csharp
// 静态调用，不需要实例
MBDebug.IsErrorReportModePauseMission();
```

### SetErrorReportScene
`public static void SetErrorReportScene(Scene scene)`

**用途 / Purpose:** 为 error report scene 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBDebug.SetErrorReportScene(scene);
```

### SetDumpGenerationDisabled
`public static void SetDumpGenerationDisabled(bool value)`

**用途 / Purpose:** 为 dump generation disabled 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBDebug.SetDumpGenerationDisabled(false);
```

### EchoCommandWindow
`public static void EchoCommandWindow(string content)`

**用途 / Purpose:** 调用 EchoCommandWindow 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.EchoCommandWindow("example");
```

### ClearConsole
`public static string ClearConsole(List<string> strings)`

**用途 / Purpose:** 清空当前对象中的console。

```csharp
// 静态调用，不需要实例
MBDebug.ClearConsole(strings);
```

### EchoCommandWindow
`public static string EchoCommandWindow(List<string> strings)`

**用途 / Purpose:** 调用 EchoCommandWindow 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.EchoCommandWindow(strings);
```

### EchoCommandWindowTest
`public static string EchoCommandWindowTest(List<string> strings)`

**用途 / Purpose:** 调用 EchoCommandWindowTest 对应的操作。

```csharp
// 静态调用，不需要实例
MBDebug.EchoCommandWindowTest(strings);
```

### IsTestMode
`public static bool IsTestMode()`

**用途 / Purpose:** 判断当前对象是否处于 test mode 状态或条件。

```csharp
// 静态调用，不需要实例
MBDebug.IsTestMode();
```

## 使用示例

```csharp
MBDebug.DisableUI(strings);
```

## 参见

- [本区域目录](../)