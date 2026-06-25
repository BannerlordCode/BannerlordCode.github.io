---
title: "MBDebug"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBDebug`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBDebug

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MBDebug`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/MBDebug.cs`

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

**用途 / Purpose:** 处理 `disable u i` 相关逻辑。

### AssertMemoryUsage
`public static void AssertMemoryUsage(int memoryMB)`

**用途 / Purpose:** 处理 `assert memory usage` 相关逻辑。

### AbortGame
`public static void AbortGame(int ExitCode = 5)`

**用途 / Purpose:** 处理 `abort game` 相关逻辑。

### ShowWarning
`public static void ShowWarning(string message)`

**用途 / Purpose:** 处理 `show warning` 相关逻辑。

### ContentWarning
`public static void ContentWarning(string message)`

**用途 / Purpose:** 处理 `content warning` 相关逻辑。

### ConditionalContentWarning
`public static void ConditionalContentWarning(bool condition, string message)`

**用途 / Purpose:** 处理 `conditional content warning` 相关逻辑。

### ShowError
`public static void ShowError(string message)`

**用途 / Purpose:** 处理 `show error` 相关逻辑。

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**用途 / Purpose:** 处理 `show message box` 相关逻辑。

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理 `assert` 相关逻辑。

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理 `failed assert` 相关逻辑。

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**用途 / Purpose:** 处理 `silent assert` 相关逻辑。

### AssertConditionOrCallerClassName
`public static void AssertConditionOrCallerClassName(bool condition, string name)`

**用途 / Purpose:** 处理 `assert condition or caller class name` 相关逻辑。

### AssertConditionOrCallerClassNameSearchAllCallstack
`public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)`

**用途 / Purpose:** 处理 `assert condition or caller class name search all callstack` 相关逻辑。

### Print
`public static void Print(string message, int logLevel = 0, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**用途 / Purpose:** 处理 `print` 相关逻辑。

### ConsolePrint
`public static void ConsolePrint(string message, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**用途 / Purpose:** 处理 `console print` 相关逻辑。

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

**用途 / Purpose:** 处理 `write debug line on screen` 相关逻辑。

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**用途 / Purpose:** 处理 `render debug text` 相关逻辑。

### RenderText
`public static void RenderText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**用途 / Purpose:** 处理 `render text` 相关逻辑。

### RenderDebugRect
`public static void RenderDebugRect(float left, float bottom, float right, float top)`

**用途 / Purpose:** 处理 `render debug rect` 相关逻辑。

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = uint.MaxValue)`

**用途 / Purpose:** 处理 `render debug rect with color` 相关逻辑。

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**用途 / Purpose:** 处理 `render debug frame` 相关逻辑。

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = uint.MaxValue, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**用途 / Purpose:** 处理 `render debug text3 d` 相关逻辑。

### RenderDebugDirectionArrow
`public static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false)`

**用途 / Purpose:** 处理 `render debug direction arrow` 相关逻辑。

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug line` 相关逻辑。

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug sphere` 相关逻辑。

### RenderDebugCapsule
`public static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug capsule` 相关逻辑。

### RenderDebugBoundingBoxOfEntity
`public static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug bounding box of entity` 相关逻辑。

### RenderDebugBoundingBox
`public static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug bounding box` 相关逻辑。

### ClearRenderObjects
`public static void ClearRenderObjects()`

**用途 / Purpose:** 处理 `clear render objects` 相关逻辑。

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug box object` 相关逻辑。

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**用途 / Purpose:** 处理 `render debug box object` 相关逻辑。

### PostWarningLine
`public static void PostWarningLine(string line)`

**用途 / Purpose:** 处理 `post warning line` 相关逻辑。

### IsErrorReportModeActive
`public static bool IsErrorReportModeActive()`

**用途 / Purpose:** 处理 `is error report mode active` 相关逻辑。

### IsErrorReportModePauseMission
`public static bool IsErrorReportModePauseMission()`

**用途 / Purpose:** 处理 `is error report mode pause mission` 相关逻辑。

### SetErrorReportScene
`public static void SetErrorReportScene(Scene scene)`

**用途 / Purpose:** 设置 `error report scene` 的值或状态。

### SetDumpGenerationDisabled
`public static void SetDumpGenerationDisabled(bool value)`

**用途 / Purpose:** 设置 `dump generation disabled` 的值或状态。

### EchoCommandWindow
`public static void EchoCommandWindow(string content)`

**用途 / Purpose:** 处理 `echo command window` 相关逻辑。

### ClearConsole
`public static string ClearConsole(List<string> strings)`

**用途 / Purpose:** 处理 `clear console` 相关逻辑。

### EchoCommandWindow
`public static string EchoCommandWindow(List<string> strings)`

**用途 / Purpose:** 处理 `echo command window` 相关逻辑。

### EchoCommandWindowTest
`public static string EchoCommandWindowTest(List<string> strings)`

**用途 / Purpose:** 处理 `echo command window test` 相关逻辑。

### IsTestMode
`public static bool IsTestMode()`

**用途 / Purpose:** 处理 `is test mode` 相关逻辑。

## 使用示例

```csharp
MBDebug.DisableUI(strings);
```

## 参见

- [完整类目录](../catalog)