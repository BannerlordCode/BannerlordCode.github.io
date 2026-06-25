---
title: "MBDebug"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBDebug`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBDebug

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public static class MBDebug`
**领域:** engine

## 概述

`MBDebug` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
`public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理 `print` 相关逻辑。

### ConsolePrint
`public static void ConsolePrint(string message, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)`

**用途 / Purpose:** 处理 `console print` 相关逻辑。

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

**用途 / Purpose:** 处理 `write debug line on screen` 相关逻辑。

### RenderDebugText
`public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)`

**用途 / Purpose:** 处理 `render debug text` 相关逻辑。

### RenderText
`public static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)`

**用途 / Purpose:** 处理 `render text` 相关逻辑。

### RenderDebugRect
`public static void RenderDebugRect(float left, float bottom, float right, float top)`

**用途 / Purpose:** 处理 `render debug rect` 相关逻辑。

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)`

**用途 / Purpose:** 处理 `render debug rect with color` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBDebug.DisableUI(strings);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
