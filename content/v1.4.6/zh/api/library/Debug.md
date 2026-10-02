---
title: "Debug"
description: "Debug：TaleWorlds.Library 的 public 类；公开成员 38 个（方法 29、属性 5、字段 0）。源文件 TaleWorlds.Library/Debug.cs。"
---
# Debug

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class Debug`
**File:** `TaleWorlds.Library/Debug.cs`

## 概述

Debug 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Debug.cs。它是一个 public 类，继承链为 Debug。public/protected 成员共 38 个：29 方法、5 属性、1 事件、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Debug 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Debug。成员构成以方法为主（方法 29/38，属性 5/38），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Debug.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ulong>OnPrint;` | `public static event Action<string, ulong>OnPrint;` | 事件 |
| `DebugManager` | `public static IDebugManager DebugManager` | 属性 |
| `TelemetryManager` | `public static ITelemetryManager TelemetryManager` | 属性 |
| `GetTelemetryLevelMask` | `public static TelemetryLevelMask GetTelemetryLevelMask()` | 方法 |
| `SetCrashReportCustomString` | `public static void SetCrashReportCustomString(string customString)` | 方法 |
| `SetCrashReportCustomStack` | `public static void SetCrashReportCustomStack(string customStack)` | 方法 |
| `Assert` | `public static void Assert(bool condition, string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | 方法 |
| `FailedAssert` | `public static void FailedAssert(string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | 方法 |
| `SilentAssert` | `public static void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | 方法 |
| `ShowError` | `public static void ShowError(string message)` | 方法 |
| `ShowWarning` | `public static void ShowWarning(string message)` | 方法 |
| `ReportMemoryBookmark` | `public static void ReportMemoryBookmark(string message)` | 方法 |
| `Print` | `public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | 方法 |
| `ShowMessageBox` | `public static void ShowMessageBox(string lpText, string lpCaption, uint uType)` | 方法 |
| `PrintWarning` | `public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)` | 方法 |
| `PrintError` | `public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)` | 方法 |
| `DisplayDebugMessage` | `public static void DisplayDebugMessage(string message)` | 方法 |
| `WatchVariable` | `public static void WatchVariable(string name, object value)` | 方法 |
| `StartTelemetryConnection` | `public static void StartTelemetryConnection(bool showErrors)` | 方法 |
| `StopTelemetryConnection` | `public static void StopTelemetryConnection()` | 方法 |
| `WriteDebugLineOnScreen` | `public static void WriteDebugLineOnScreen(string message)` | 方法 |
| `RenderDebugLine` | `public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugLineWithThickness` | `public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)` | 方法 |
| `RenderDebugSphere` | `public static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugFrame` | `public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)` | 方法 |
| `RenderDebugText` | `public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | 方法 |
| `RenderDebugRectWithColor` | `public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)` | 方法 |
| `RenderDebugText3D` | `public static void RenderDebugText3D(Vec3 position, string text, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)` | 方法 |
| `GetDebugVector` | `public static Vec3 GetDebugVector()` | 方法 |
| `SetDebugVector` | `public static void SetDebugVector(Vec3 value)` | 方法 |
| `SetTestModeEnabled` | `public static void SetTestModeEnabled(bool testModeEnabled)` | 方法 |
| `AbortGame` | `public static void AbortGame()` | 方法 |
| `DebugColor` | `public enum DebugColor` | 属性 |
| `ulong` | `public enum DebugUserFilter : ulong` | 属性 |
| `ulong` | `public enum DebugSystemFilter : ulong` | 属性 |
| `DebugColor` | `public enum DebugColor` | 嵌套类型 |
| `ulong` | `public enum DebugUserFilter : ulong` | 嵌套类型 |
| `ulong` | `public enum DebugSystemFilter : ulong` | 嵌套类型 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
