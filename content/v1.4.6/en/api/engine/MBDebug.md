---
title: "MBDebug"
description: "MBDebug: a public class in TaleWorlds.Engine; 45 exposed members (41 methods, 3 properties, 0 fields). Source: TaleWorlds.Engine/MBDebug.cs."
---
# MBDebug

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class MBDebug`
**File:** `TaleWorlds.Engine/MBDebug.cs`

## Overview

MBDebug lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MBDebug.cs. It is a public class; the inheritance chain is MBDebug. It exposes 45 public/protected members: 41 methods, 3 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBDebug is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain MBDebug. The surface is method-led (methods 41/45, properties 3/45), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MBDebug.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableUI` | `public static string DisableUI(List<string>strings)` | method |
| `AssertMemoryUsage` | `public static void AssertMemoryUsage(int memoryMB)` | method |
| `AbortGame` | `public static void AbortGame(int ExitCode = 5)` | method |
| `ShowWarning` | `public static void ShowWarning(string message)` | method |
| `ContentWarning` | `public static void ContentWarning(string message)` | method |
| `ConditionalContentWarning` | `public static void ConditionalContentWarning(bool condition, string message)` | method |
| `ShowError` | `public static void ShowError(string message)` | method |
| `ShowMessageBox` | `public static void ShowMessageBox(string lpText, string lpCaption, uint uType)` | method |
| `Assert` | `public static void Assert(bool condition, string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | method |
| `FailedAssert` | `public static void FailedAssert(string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | method |
| `SilentAssert` | `public static void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | method |
| `AssertConditionOrCallerClassName` | `public static void AssertConditionOrCallerClassName(bool condition, string name)` | method |
| `AssertConditionOrCallerClassNameSearchAllCallstack` | `public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)` | method |
| `Print` | `public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | method |
| `ConsolePrint` | `public static void ConsolePrint(string message, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | method |
| `WriteDebugLineOnScreen` | `public static void WriteDebugLineOnScreen(string str)` | method |
| `RenderDebugText` | `public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | method |
| `RenderText` | `public static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | method |
| `RenderDebugRect` | `public static void RenderDebugRect(float left, float bottom, float right, float top)` | method |
| `RenderDebugRectWithColor` | `public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)` | method |
| `RenderDebugFrame` | `public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)` | method |
| `RenderDebugText3D` | `public static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)` | method |
| `RenderDebugDirectionArrow` | `public static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false)` | method |
| `RenderDebugLine` | `public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugSphere` | `public static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugCapsule` | `public static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugBoundingBoxOfEntity` | `public static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugBoundingBox` | `public static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `ClearRenderObjects` | `public static void ClearRenderObjects()` | method |
| `DebugVector` | `public static Vec3 DebugVector` | property |
| `RenderDebugBoxObject` | `public static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugBoxObject` | `public static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `PostWarningLine` | `public static void PostWarningLine(string line)` | method |
| `IsErrorReportModeActive` | `public static bool IsErrorReportModeActive()` | method |
| `IsErrorReportModePauseMission` | `public static bool IsErrorReportModePauseMission()` | method |
| `SetErrorReportScene` | `public static void SetErrorReportScene(Scene scene)` | method |
| `SetDumpGenerationDisabled` | `public static void SetDumpGenerationDisabled(bool value)` | method |
| `EchoCommandWindow` | `public static void EchoCommandWindow(string content)` | method |
| `ClearConsole` | `public static string ClearConsole(List<string>strings)` | method |
| `EchoCommandWindow` | `public static string EchoCommandWindow(List<string>strings)` | method |
| `EchoCommandWindowTest` | `public static string EchoCommandWindowTest(List<string>strings)` | method |
| `ShowDebugInfoState` | `public static int ShowDebugInfoState` | property |
| `IsTestMode` | `public static bool IsTestMode()` | method |
| `MessageBoxTypeFlag` | `public enum MessageBoxTypeFlag` | property |
| `MessageBoxTypeFlag` | `public enum MessageBoxTypeFlag` | nested type |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
