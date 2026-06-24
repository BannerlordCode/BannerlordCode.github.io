<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Debug`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Debug

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Debug`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Debug.cs`

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

**Purpose:** Gets the current value of `telemetry level mask`.

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**Purpose:** Sets the value or state of `crash report custom string`.

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**Purpose:** Sets the value or state of `crash report custom stack`.

### Assert
`public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** Handles logic related to `assert`.

### FailedAssert
`public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** Handles logic related to `failed assert`.

### SilentAssert
`public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)`

**Purpose:** Handles logic related to `silent assert`.

### ShowError
`public static void ShowError(string message)`

**Purpose:** Handles logic related to `show error`.

### ShowWarning
`public static void ShowWarning(string message)`

**Purpose:** Handles logic related to `show warning`.

### ReportMemoryBookmark
`public static void ReportMemoryBookmark(string message)`

**Purpose:** Handles logic related to `report memory bookmark`.

### Print
`public static void Print(string message, int logLevel = 0, DebugColor color = DebugColor.White, ulong debugFilter = 17592186044416uL)`

**Purpose:** Handles logic related to `print`.

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**Purpose:** Handles logic related to `show message box`.

### PrintWarning
`public static void PrintWarning(string warning, ulong debugFilter = 17592186044416uL)`

**Purpose:** Handles logic related to `print warning`.

### PrintError
`public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416uL)`

**Purpose:** Handles logic related to `print error`.

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**Purpose:** Handles logic related to `display debug message`.

### WatchVariable
`public static void WatchVariable(string name, object value)`

**Purpose:** Handles logic related to `watch variable`.

### StartTelemetryConnection
`public static void StartTelemetryConnection(bool showErrors)`

**Purpose:** Handles logic related to `start telemetry connection`.

### StopTelemetryConnection
`public static void StopTelemetryConnection()`

**Purpose:** Handles logic related to `stop telemetry connection`.

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string message)`

**Purpose:** Handles logic related to `write debug line on screen`.

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug line`.

### RenderDebugLineWithThickness
`public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f, int thickness = 0)`

**Purpose:** Handles logic related to `render debug line with thickness`.

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position, float radius, uint color = uint.MaxValue, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug sphere`.

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)`

**Purpose:** Handles logic related to `render debug frame`.

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = uint.MaxValue, float time = 0f)`

**Purpose:** Handles logic related to `render debug text`.

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = uint.MaxValue)`

**Purpose:** Handles logic related to `render debug rect with color`.

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 position, string text, uint color = uint.MaxValue, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)`

**Purpose:** Handles logic related to `render debug text3 d`.

### GetDebugVector
`public static Vec3 GetDebugVector()`

**Purpose:** Gets the current value of `debug vector`.

### SetDebugVector
`public static void SetDebugVector(Vec3 value)`

**Purpose:** Sets the value or state of `debug vector`.

### SetTestModeEnabled
`public static void SetTestModeEnabled(bool testModeEnabled)`

**Purpose:** Sets the value or state of `test mode enabled`.

### AbortGame
`public static void AbortGame()`

**Purpose:** Handles logic related to `abort game`.

## Usage Example

```csharp
Debug.GetTelemetryLevelMask();
```

## See Also

- [Complete Class Catalog](../catalog)