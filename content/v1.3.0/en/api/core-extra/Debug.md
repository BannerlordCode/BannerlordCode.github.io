---
title: "Debug"
description: "Auto-generated class reference for Debug."
---
# Debug

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Debug`
**Base:** none
**File:** `TaleWorlds.Library/Debug.cs`

## Overview

`Debug` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DebugManager` | `public static IDebugManager DebugManager { get; set; }` |
| `TelemetryManager` | `public static ITelemetryManager TelemetryManager { get; set; }` |

## Key Methods

### GetTelemetryLevelMask
`public static TelemetryLevelMask GetTelemetryLevelMask()`

**Purpose:** **Purpose:** Reads and returns the telemetry level mask value held by the this instance.

```csharp
// Static call; no instance required
Debug.GetTelemetryLevelMask();
```

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**Purpose:** **Purpose:** Assigns a new value to crash report custom string and updates the object's internal state.

```csharp
// Static call; no instance required
Debug.SetCrashReportCustomString("example");
```

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**Purpose:** **Purpose:** Assigns a new value to crash report custom stack and updates the object's internal state.

```csharp
// Static call; no instance required
Debug.SetCrashReportCustomStack("example");
```

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** **Purpose:** Executes the Assert logic.

```csharp
// Static call; no instance required
Debug.Assert(false, "example", "example", "example", 0);
```

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** **Purpose:** Executes the FailedAssert logic.

```csharp
// Static call; no instance required
Debug.FailedAssert("example", "example", "example", 0);
```

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** **Purpose:** Executes the SilentAssert logic.

```csharp
// Static call; no instance required
Debug.SilentAssert(false, "example", false, "example", "example", 0);
```

### ShowError
`public static void ShowError(string message)`

**Purpose:** **Purpose:** Displays the UI or element associated with error.

```csharp
// Static call; no instance required
Debug.ShowError("example");
```

### ShowWarning
`public static void ShowWarning(string message)`

**Purpose:** **Purpose:** Displays the UI or element associated with warning.

```csharp
// Static call; no instance required
Debug.ShowWarning("example");
```

### ReportMemoryBookmark
`public static void ReportMemoryBookmark(string message)`

**Purpose:** **Purpose:** Executes the ReportMemoryBookmark logic.

```csharp
// Static call; no instance required
Debug.ReportMemoryBookmark("example");
```

### Print
`public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**Purpose:** **Purpose:** Executes the Print logic.

```csharp
// Static call; no instance required
Debug.Print("example", 0, debug.DebugColor.White, 0);
```

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**Purpose:** **Purpose:** Displays the UI or element associated with message box.

```csharp
// Static call; no instance required
Debug.ShowMessageBox("example", "example", 0);
```

### PrintWarning
`public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)`

**Purpose:** **Purpose:** Executes the PrintWarning logic.

```csharp
// Static call; no instance required
Debug.PrintWarning("example", 0);
```

### PrintError
`public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)`

**Purpose:** **Purpose:** Executes the PrintError logic.

```csharp
// Static call; no instance required
Debug.PrintError("example", "example", 0);
```

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**Purpose:** **Purpose:** Executes the DisplayDebugMessage logic.

```csharp
// Static call; no instance required
Debug.DisplayDebugMessage("example");
```

### WatchVariable
`public static void WatchVariable(string name, object value)`

**Purpose:** **Purpose:** Executes the WatchVariable logic.

```csharp
// Static call; no instance required
Debug.WatchVariable("example", value);
```

### StartTelemetryConnection
`public static void StartTelemetryConnection(bool showErrors)`

**Purpose:** **Purpose:** Starts the telemetry connection flow or state machine.

```csharp
// Static call; no instance required
Debug.StartTelemetryConnection(false);
```

### StopTelemetryConnection
`public static void StopTelemetryConnection()`

**Purpose:** **Purpose:** Stops the telemetry connection flow or state machine.

```csharp
// Static call; no instance required
Debug.StopTelemetryConnection();
```

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string message)`

**Purpose:** **Purpose:** Writes debug line on screen to the target location.

```csharp
// Static call; no instance required
Debug.WriteDebugLineOnScreen("example");
```

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugLine logic.

```csharp
// Static call; no instance required
Debug.RenderDebugLine(position, direction, 0, false, 0);
```

### RenderDebugLineWithThickness
`public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)`

**Purpose:** **Purpose:** Executes the RenderDebugLineWithThickness logic.

```csharp
// Static call; no instance required
Debug.RenderDebugLineWithThickness(position, direction, 0, false, 0, 0);
```

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugSphere logic.

```csharp
// Static call; no instance required
Debug.RenderDebugSphere(position, 0, 0, false, 0);
```

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugFrame logic.

```csharp
// Static call; no instance required
Debug.RenderDebugFrame(frame, 0, 0);
```

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugText logic.

```csharp
// Static call; no instance required
Debug.RenderDebugText(0, 0, "example", 0, 0);
```

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)`

**Purpose:** **Purpose:** Executes the RenderDebugRectWithColor logic.

```csharp
// Static call; no instance required
Debug.RenderDebugRectWithColor(0, 0, 0, 0, 0);
```

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 position, string text, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**Purpose:** **Purpose:** Executes the RenderDebugText3D logic.

```csharp
// Static call; no instance required
Debug.RenderDebugText3D(position, "example", 0, 0, 0, 0);
```

### GetDebugVector
`public static Vec3 GetDebugVector()`

**Purpose:** **Purpose:** Reads and returns the debug vector value held by the this instance.

```csharp
// Static call; no instance required
Debug.GetDebugVector();
```

### SetDebugVector
`public static void SetDebugVector(Vec3 value)`

**Purpose:** **Purpose:** Assigns a new value to debug vector and updates the object's internal state.

```csharp
// Static call; no instance required
Debug.SetDebugVector(value);
```

### SetTestModeEnabled
`public static void SetTestModeEnabled(bool testModeEnabled)`

**Purpose:** **Purpose:** Assigns a new value to test mode enabled and updates the object's internal state.

```csharp
// Static call; no instance required
Debug.SetTestModeEnabled(false);
```

### AbortGame
`public static void AbortGame()`

**Purpose:** **Purpose:** Executes the AbortGame logic.

```csharp
// Static call; no instance required
Debug.AbortGame();
```

## Usage Example

```csharp
Debug.GetTelemetryLevelMask();
```

## See Also

- [Area Index](../)