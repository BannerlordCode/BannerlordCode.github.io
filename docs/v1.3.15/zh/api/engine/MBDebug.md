<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBDebug`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBDebug

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`MBDebug` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DebugVector` | `public static Vec3 DebugVector { get; set; }` |
| `ShowDebugInfoState` | `public static int ShowDebugInfoState { get; set; }` |


## 主要方法

### DisableUI

```csharp
public static string DisableUI(List<string> strings)
```

### AssertMemoryUsage

```csharp
public static void AssertMemoryUsage(int memoryMB)
```

### AbortGame

```csharp
public static void AbortGame(int ExitCode = 5)
```

### ShowWarning

```csharp
public static void ShowWarning(string message)
```

### ContentWarning

```csharp
public static void ContentWarning(string message)
```

### ConditionalContentWarning

```csharp
public static void ConditionalContentWarning(bool condition, string message)
```

### ShowError

```csharp
public static void ShowError(string message)
```

### ShowMessageBox

```csharp
public static void ShowMessageBox(string lpText, string lpCaption, uint uType)
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

### AssertConditionOrCallerClassName

```csharp
public static void AssertConditionOrCallerClassName(bool condition, string name)
```

### AssertConditionOrCallerClassNameSearchAllCallstack

```csharp
public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)
```

### Print

```csharp
public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)
```

### ConsolePrint

```csharp
public static void ConsolePrint(string message, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)
```

### WriteDebugLineOnScreen

```csharp
public static void WriteDebugLineOnScreen(string str)
```

### RenderDebugText

```csharp
public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)
```

### RenderText

```csharp
public static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)
```

### RenderDebugRect

```csharp
public static void RenderDebugRect(float left, float bottom, float right, float top)
```

### RenderDebugRectWithColor

```csharp
public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)