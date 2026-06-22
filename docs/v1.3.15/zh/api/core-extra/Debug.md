<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Debug`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Debug

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Debug` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DebugManager` | `public static IDebugManager DebugManager { get; set; }` |
| `TelemetryManager` | `public static ITelemetryManager TelemetryManager { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)