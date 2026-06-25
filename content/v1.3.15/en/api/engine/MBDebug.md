---
title: "MBDebug"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBDebug`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBDebug

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MBDebug`
**Area:** engine

## Overview

`MBDebug` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
`public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**Purpose:** Handles logic related to `print`.

### ConsolePrint
`public static void ConsolePrint(string message, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**Purpose:** Handles logic related to `console print`.

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

**Purpose:** Handles logic related to `write debug line on screen`.

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)`

**Purpose:** Handles logic related to `render debug text`.

### RenderText
`public static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)`

**Purpose:** Handles logic related to `render text`.

### RenderDebugRect
`public static void RenderDebugRect(float left, float bottom, float right, float top)`

**Purpose:** Handles logic related to `render debug rect`.

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)`

**Purpose:** Handles logic related to `render debug rect with color`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBDebug.DisableUI(strings);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
