<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Debug`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Debug

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Debug`
**Area:** core-extra

## Overview

`Debug` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
`public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**Purpose:** Handles logic related to `print`.

### ShowMessageBox
`public static void ShowMessageBox(string lpText, string lpCaption, uint uType)`

**Purpose:** Handles logic related to `show message box`.

### PrintWarning
`public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)`

**Purpose:** Handles logic related to `print warning`.

### PrintError
`public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)`

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
`public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)`

**Purpose:** Handles logic related to `render debug line`.

### RenderDebugLineWithThickness
`public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)`

**Purpose:** Handles logic related to `render debug line with thickness`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Debug.GetTelemetryLevelMask();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
