---
title: "MBDebug"
description: "Auto-generated class reference for MBDebug."
---
# MBDebug

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MBDebug`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MBDebug.cs`

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

**Purpose:** **Purpose:** Executes the DisableUI logic.

```csharp
// Static call; no instance required
MBDebug.DisableUI(strings);
```

### AssertMemoryUsage
`public static void AssertMemoryUsage(int memoryMB)`

**Purpose:** **Purpose:** Executes the AssertMemoryUsage logic.

```csharp
// Static call; no instance required
MBDebug.AssertMemoryUsage(0);
```

### AbortGame
`public static void AbortGame(int ExitCode = 5)`

**Purpose:** **Purpose:** Executes the AbortGame logic.

```csharp
// Static call; no instance required
MBDebug.AbortGame(0);
```

### ShowWarning
`public static void ShowWarning(string message)`

**Purpose:** **Purpose:** Displays the UI or element associated with warning.

```csharp
// Static call; no instance required
MBDebug.ShowWarning("example");
```

### ContentWarning
`public static void ContentWarning(string message)`

**Purpose:** **Purpose:** Executes the ContentWarning logic.

```csharp
// Static call; no instance required
MBDebug.ContentWarning("example");
```

### ConditionalContentWarning
`public static void ConditionalContentWarning(bool condition, string message)`

**Purpose:** **Purpose:** Executes the ConditionalContentWarning logic.

```csharp
// Static call; no instance required
MBDebug.ConditionalContentWarning(false, "example");
```

### ShowError
`public static void ShowError(string message)`

**Purpose:** **Purpose:** Displays the UI or element associated with error.

```csharp
// Static call; no instance required
MBDebug.ShowError("example");
```

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**Purpose:** **Purpose:** Displays the UI or element associated with message box.

```csharp
// Static call; no instance required
MBDebug.ShowMessageBox("example", "example", 0);
```

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** **Purpose:** Executes the Assert logic.

```csharp
// Static call; no instance required
MBDebug.Assert(false, "example", "example", "example", 0);
```

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** **Purpose:** Executes the FailedAssert logic.

```csharp
// Static call; no instance required
MBDebug.FailedAssert("example", "example", "example", 0);
```

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** **Purpose:** Executes the SilentAssert logic.

```csharp
// Static call; no instance required
MBDebug.SilentAssert(false, "example", false, "example", "example", 0);
```

### AssertConditionOrCallerClassName
`public static void AssertConditionOrCallerClassName(bool condition, string name)`

**Purpose:** **Purpose:** Executes the AssertConditionOrCallerClassName logic.

```csharp
// Static call; no instance required
MBDebug.AssertConditionOrCallerClassName(false, "example");
```

### AssertConditionOrCallerClassNameSearchAllCallstack
`public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)`

**Purpose:** **Purpose:** Executes the AssertConditionOrCallerClassNameSearchAllCallstack logic.

```csharp
// Static call; no instance required
MBDebug.AssertConditionOrCallerClassNameSearchAllCallstack(false, "example");
```

### Print
`public static void Print(string message, int logLevel = 0, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**Purpose:** **Purpose:** Executes the Print logic.

```csharp
// Static call; no instance required
MBDebug.Print("example", 0, taleWorlds.Library.Debug.DebugColor.White, 0);
```

### ConsolePrint
`public static void ConsolePrint(string message, TaleWorlds.Library.Debug.DebugColor color = TaleWorlds.Library.Debug.DebugColor.White, ulong debugFilter = 17592186044416uL)`

**Purpose:** **Purpose:** Executes the ConsolePrint logic.

```csharp
// Static call; no instance required
MBDebug.ConsolePrint("example", taleWorlds.Library.Debug.DebugColor.White, 0);
```

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

**Purpose:** **Purpose:** Writes debug line on screen to the target location.

```csharp
// Static call; no instance required
MBDebug.WriteDebugLineOnScreen("example");
```

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugText logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugText(0, 0, "example", 0, 0);
```

### RenderText
`public static void RenderText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderText logic.

```csharp
// Static call; no instance required
MBDebug.RenderText(0, 0, "example", 0, 0);
```

### RenderDebugRect
`public static void RenderDebugRect(float left, float bottom, float right, float top)`

**Purpose:** **Purpose:** Executes the RenderDebugRect logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugRect(0, 0, 0, 0);
```

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = uint.MaxValue)`

**Purpose:** **Purpose:** Executes the RenderDebugRectWithColor logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugRectWithColor(0, 0, 0, 0, 0);
```

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugFrame logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugFrame(frame, 0, 0);
```

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = uint.MaxValue, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugText3D logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugText3D(worldPosition, "example", 0, 0, 0, 0);
```

### RenderDebugDirectionArrow
`public static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false)`

**Purpose:** **Purpose:** Executes the RenderDebugDirectionArrow logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugDirectionArrow(position, direction, 0, false);
```

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugLine logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugLine(position, direction, 0, false, 0);
```

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugSphere logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugSphere(position, 0, 0, false, 0);
```

### RenderDebugCapsule
`public static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugCapsule logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugCapsule(p0, p1, 0, 0, false, 0);
```

### RenderDebugBoundingBoxOfEntity
`public static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugBoundingBoxOfEntity logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugBoundingBoxOfEntity(entity, frame, 0, false, 0);
```

### RenderDebugBoundingBox
`public static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugBoundingBox logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugBoundingBox(box, frame, 0, false, 0);
```

### ClearRenderObjects
`public static void ClearRenderObjects()`

**Purpose:** **Purpose:** Removes all render objects from the this instance.

```csharp
// Static call; no instance required
MBDebug.ClearRenderObjects();
```

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugBoxObject logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugBoxObject(min, max, 0, false, 0);
```

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugBoxObject logic.

```csharp
// Static call; no instance required
MBDebug.RenderDebugBoxObject(min, max, frame, 0, false, 0);
```

### PostWarningLine
`public static void PostWarningLine(string line)`

**Purpose:** **Purpose:** Executes the PostWarningLine logic.

```csharp
// Static call; no instance required
MBDebug.PostWarningLine("example");
```

### IsErrorReportModeActive
`public static bool IsErrorReportModeActive()`

**Purpose:** **Purpose:** Determines whether the this instance is in the error report mode active state or condition.

```csharp
// Static call; no instance required
MBDebug.IsErrorReportModeActive();
```

### IsErrorReportModePauseMission
`public static bool IsErrorReportModePauseMission()`

**Purpose:** **Purpose:** Determines whether the this instance is in the error report mode pause mission state or condition.

```csharp
// Static call; no instance required
MBDebug.IsErrorReportModePauseMission();
```

### SetErrorReportScene
`public static void SetErrorReportScene(Scene scene)`

**Purpose:** **Purpose:** Assigns a new value to error report scene and updates the object's internal state.

```csharp
// Static call; no instance required
MBDebug.SetErrorReportScene(scene);
```

### SetDumpGenerationDisabled
`public static void SetDumpGenerationDisabled(bool value)`

**Purpose:** **Purpose:** Assigns a new value to dump generation disabled and updates the object's internal state.

```csharp
// Static call; no instance required
MBDebug.SetDumpGenerationDisabled(false);
```

### EchoCommandWindow
`public static void EchoCommandWindow(string content)`

**Purpose:** **Purpose:** Executes the EchoCommandWindow logic.

```csharp
// Static call; no instance required
MBDebug.EchoCommandWindow("example");
```

### ClearConsole
`public static string ClearConsole(List<string> strings)`

**Purpose:** **Purpose:** Removes all console from the this instance.

```csharp
// Static call; no instance required
MBDebug.ClearConsole(strings);
```

### EchoCommandWindow
`public static string EchoCommandWindow(List<string> strings)`

**Purpose:** **Purpose:** Executes the EchoCommandWindow logic.

```csharp
// Static call; no instance required
MBDebug.EchoCommandWindow(strings);
```

### EchoCommandWindowTest
`public static string EchoCommandWindowTest(List<string> strings)`

**Purpose:** **Purpose:** Executes the EchoCommandWindowTest logic.

```csharp
// Static call; no instance required
MBDebug.EchoCommandWindowTest(strings);
```

### IsTestMode
`public static bool IsTestMode()`

**Purpose:** **Purpose:** Determines whether the this instance is in the test mode state or condition.

```csharp
// Static call; no instance required
MBDebug.IsTestMode();
```

## Usage Example

```csharp
MBDebug.DisableUI(strings);
```

## See Also

- [Area Index](../)