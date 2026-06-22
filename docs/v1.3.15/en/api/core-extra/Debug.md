<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Debug`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Debug

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `Debug` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DebugManager` | `public static IDebugManager DebugManager { get; set; }` |
| `TelemetryManager` | `public static ITelemetryManager TelemetryManager { get; set; }` |


## Key Methods

### GetTelemetryLevelMask

```csharp
public static TelemetryLevelMask GetTelemetryLevelMask()
```

### SetCrashReportCustomString

```csharp
public static void SetCrashReportCustomString(string customString)
```

### SetCrashReportCustomStack

```csharp
public static void SetCrashReportCustomStack(string customStack)
```

### Assert

```csharp
public static void Assert(bool condition, string message, string callerFile = "", string callerMethod = "", int callerLine = 0)
```

### FailedAssert

```csharp
public static void FailedAssert(string message, string callerFile = "", string callerMethod = "", int callerLine = 0)
```

### SilentAssert

```csharp
public static void SilentAssert(bool condition, string message = "", bool getDump = false, string callerFile = "", string callerMethod = "", int callerLine = 0)
```

### ShowError

```csharp
public static void ShowError(string message)
```

### ShowWarning

```csharp
public static void ShowWarning(string message)
```

### ReportMemoryBookmark

```csharp
public static void ReportMemoryBookmark(string message)
```

### Print

```csharp
public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)
```

### ShowMessageBox

```csharp
public static void ShowMessageBox(string lpText, string lpCaption, uint uType)
```

### PrintWarning

```csharp
public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)
```

### PrintError

```csharp
public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)
```

### DisplayDebugMessage

```csharp
public static void DisplayDebugMessage(string message)
```

### WatchVariable

```csharp
public static void WatchVariable(string name, object value)
```

### StartTelemetryConnection

```csharp
public static void StartTelemetryConnection(bool showErrors)
```

### StopTelemetryConnection

```csharp
public static void StopTelemetryConnection()
```

### WriteDebugLineOnScreen

```csharp
public static void WriteDebugLineOnScreen(string message)
```

### RenderDebugLine

```csharp
public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)
```

### RenderDebugLineWithThickness

```csharp
public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)