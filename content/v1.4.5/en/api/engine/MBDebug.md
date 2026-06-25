---
title: "MBDebug"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBDebug`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBDebug

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MBDebug`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/MBDebug.cs`

## Overview

`MBDebug` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DebugVector` | `public static Vec3 DebugVector { get; set; }` |
| `ShowDebugInfoState` | `public static int ShowDebugInfoState { get; set; }` |

## Key Methods

### DisableUI
`public static string DisableUI(List<string> strings)`

**Purpose:** Handles logic related to `disable u i`.

### AssertMemoryUsage
`public static void AssertMemoryUsage(int memoryMB)`

**Purpose:** Handles logic related to `assert memory usage`.

### AbortGame
`public static void AbortGame(int ExitCode = 5)`

**Purpose:** Handles logic related to `abort game`.

### ShowWarning
`public static void ShowWarning(string message)`

**Purpose:** Handles logic related to `show warning`.

### ContentWarning
`public static void ContentWarning(string message)`

**Purpose:** Handles logic related to `content warning`.

### ConditionalContentWarning
`public static void ConditionalContentWarning(bool condition, string message)`

**Purpose:** Handles logic related to `conditional content warning`.

### ShowError
`public static void ShowError(string message)`

**Purpose:** Handles logic related to `show error`.

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**Purpose:** Handles logic related to `show message box`.

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** Handles logic related to `assert`.

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** Handles logic related to `failed assert`.

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** Handles logic related to `silent assert`.

### AssertConditionOrCallerClassName
`public static void AssertConditionOrCallerClassName(bool condition, string name)`

**Purpose:** Handles logic related to `assert condition or caller class name`.

### AssertConditionOrCallerClassNameSearchAllCallstack
`public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)`

**Purpose:** Handles logic related to `assert condition or caller class name search all callstack`.

### Print
`public static void Print(string message, int logLevel = 0, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**Purpose:** Handles logic related to `print`.

### ConsolePrint
`public static void ConsolePrint(string message, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**Purpose:** Handles logic related to `console print`.

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

**Purpose:** Handles logic related to `write debug line on screen`.

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**Purpose:** Handles logic related to `render debug text`.

### RenderText
`public static void RenderText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**Purpose:** Handles logic related to `render text`.

### RenderDebugRect
`public static void RenderDebugRect(float left, float bottom, float right, float top)`

**Purpose:** Handles logic related to `render debug rect`.

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = uint.MaxValue)`

**Purpose:** Handles logic related to `render debug rect with color`.

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**Purpose:** Handles logic related to `render debug frame`.

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = uint.MaxValue, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**Purpose:** Handles logic related to `render debug text3 d`.

### RenderDebugDirectionArrow
`public static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false)`

**Purpose:** Handles logic related to `render debug direction arrow`.

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug line`.

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug sphere`.

### RenderDebugCapsule
`public static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug capsule`.

### RenderDebugBoundingBoxOfEntity
`public static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug bounding box of entity`.

### RenderDebugBoundingBox
`public static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug bounding box`.

### ClearRenderObjects
`public static void ClearRenderObjects()`

**Purpose:** Handles logic related to `clear render objects`.

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug box object`.

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug box object`.

### PostWarningLine
`public static void PostWarningLine(string line)`

**Purpose:** Handles logic related to `post warning line`.

### IsErrorReportModeActive
`public static bool IsErrorReportModeActive()`

**Purpose:** Handles logic related to `is error report mode active`.

### IsErrorReportModePauseMission
`public static bool IsErrorReportModePauseMission()`

**Purpose:** Handles logic related to `is error report mode pause mission`.

### SetErrorReportScene
`public static void SetErrorReportScene(Scene scene)`

**Purpose:** Sets the value or state of `error report scene`.

### SetDumpGenerationDisabled
`public static void SetDumpGenerationDisabled(bool value)`

**Purpose:** Sets the value or state of `dump generation disabled`.

### EchoCommandWindow
`public static void EchoCommandWindow(string content)`

**Purpose:** Handles logic related to `echo command window`.

### ClearConsole
`public static string ClearConsole(List<string> strings)`

**Purpose:** Handles logic related to `clear console`.

### EchoCommandWindow
`public static string EchoCommandWindow(List<string> strings)`

**Purpose:** Handles logic related to `echo command window`.

### EchoCommandWindowTest
`public static string EchoCommandWindowTest(List<string> strings)`

**Purpose:** Handles logic related to `echo command window test`.

### IsTestMode
`public static bool IsTestMode()`

**Purpose:** Handles logic related to `is test mode`.

## Usage Example

```csharp
MBDebug.DisableUI(strings);
```

## See Also

- [Complete Class Catalog](../catalog)