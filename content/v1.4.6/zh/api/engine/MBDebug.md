---
title: "MBDebug"
description: "MBDebug：TaleWorlds.Engine 的 public 类；公开成员 45 个（方法 41、属性 3、字段 0）。源文件 TaleWorlds.Engine/MBDebug.cs。"
---
# MBDebug

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class MBDebug`
**File:** `TaleWorlds.Engine/MBDebug.cs`

## 概述

MBDebug 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/MBDebug.cs。它是一个 public 类，继承链为 MBDebug。public/protected 成员共 45 个：41 方法、3 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBDebug 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 MBDebug。成员构成以方法为主（方法 41/45，属性 3/45），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/MBDebug.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableUI` | `public static string DisableUI(List<string>strings)` | 方法 |
| `AssertMemoryUsage` | `public static void AssertMemoryUsage(int memoryMB)` | 方法 |
| `AbortGame` | `public static void AbortGame(int ExitCode = 5)` | 方法 |
| `ShowWarning` | `public static void ShowWarning(string message)` | 方法 |
| `ContentWarning` | `public static void ContentWarning(string message)` | 方法 |
| `ConditionalContentWarning` | `public static void ConditionalContentWarning(bool condition, string message)` | 方法 |
| `ShowError` | `public static void ShowError(string message)` | 方法 |
| `ShowMessageBox` | `public static void ShowMessageBox(string lpText, string lpCaption, uint uType)` | 方法 |
| `Assert` | `public static void Assert(bool condition, string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | 方法 |
| `FailedAssert` | `public static void FailedAssert(string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | 方法 |
| `SilentAssert` | `public static void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | 方法 |
| `AssertConditionOrCallerClassName` | `public static void AssertConditionOrCallerClassName(bool condition, string name)` | 方法 |
| `AssertConditionOrCallerClassNameSearchAllCallstack` | `public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)` | 方法 |
| `Print` | `public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | 方法 |
| `ConsolePrint` | `public static void ConsolePrint(string message, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | 方法 |
| `WriteDebugLineOnScreen` | `public static void WriteDebugLineOnScreen(string str)` | 方法 |
| `RenderDebugText` | `public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | 方法 |
| `RenderText` | `public static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | 方法 |
| `RenderDebugRect` | `public static void RenderDebugRect(float left, float bottom, float right, float top)` | 方法 |
| `RenderDebugRectWithColor` | `public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)` | 方法 |
| `RenderDebugFrame` | `public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)` | 方法 |
| `RenderDebugText3D` | `public static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)` | 方法 |
| `RenderDebugDirectionArrow` | `public static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false)` | 方法 |
| `RenderDebugLine` | `public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugSphere` | `public static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugCapsule` | `public static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugBoundingBoxOfEntity` | `public static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugBoundingBox` | `public static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `ClearRenderObjects` | `public static void ClearRenderObjects()` | 方法 |
| `DebugVector` | `public static Vec3 DebugVector` | 属性 |
| `RenderDebugBoxObject` | `public static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `RenderDebugBoxObject` | `public static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 方法 |
| `PostWarningLine` | `public static void PostWarningLine(string line)` | 方法 |
| `IsErrorReportModeActive` | `public static bool IsErrorReportModeActive()` | 方法 |
| `IsErrorReportModePauseMission` | `public static bool IsErrorReportModePauseMission()` | 方法 |
| `SetErrorReportScene` | `public static void SetErrorReportScene(Scene scene)` | 方法 |
| `SetDumpGenerationDisabled` | `public static void SetDumpGenerationDisabled(bool value)` | 方法 |
| `EchoCommandWindow` | `public static void EchoCommandWindow(string content)` | 方法 |
| `ClearConsole` | `public static string ClearConsole(List<string>strings)` | 方法 |
| `EchoCommandWindow` | `public static string EchoCommandWindow(List<string>strings)` | 方法 |
| `EchoCommandWindowTest` | `public static string EchoCommandWindowTest(List<string>strings)` | 方法 |
| `ShowDebugInfoState` | `public static int ShowDebugInfoState` | 属性 |
| `IsTestMode` | `public static bool IsTestMode()` | 方法 |
| `MessageBoxTypeFlag` | `public enum MessageBoxTypeFlag` | 属性 |
| `MessageBoxTypeFlag` | `public enum MessageBoxTypeFlag` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
