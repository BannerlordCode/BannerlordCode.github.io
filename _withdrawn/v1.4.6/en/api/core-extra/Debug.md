---
title: "Debug"
description: "Debug: a public class in TaleWorlds.Library; 38 exposed members (29 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Debug.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Debug

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class Debug`
**File:** `TaleWorlds.Library/Debug.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Debug lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Debug.cs. It is a public class; the inheritance chain is Debug. It exposes 38 public/protected members: 29 methods, 5 properties, 1 events, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Debug lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Debug. The surface is method-led (methods 29/38, properties 5/38), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Debug.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ulong>OnPrint;` | `public static event Action<string, ulong>OnPrint;` | event |
| `DebugManager` | `public static IDebugManager DebugManager` | property |
| `TelemetryManager` | `public static ITelemetryManager TelemetryManager` | property |
| `GetTelemetryLevelMask` | `public static TelemetryLevelMask GetTelemetryLevelMask()` | method |
| `SetCrashReportCustomString` | `public static void SetCrashReportCustomString(string customString)` | method |
| `SetCrashReportCustomStack` | `public static void SetCrashReportCustomStack(string customStack)` | method |
| `Assert` | `public static void Assert(bool condition, string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | method |
| `FailedAssert` | `public static void FailedAssert(string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | method |
| `SilentAssert` | `public static void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0)` | method |
| `ShowError` | `public static void ShowError(string message)` | method |
| `ShowWarning` | `public static void ShowWarning(string message)` | method |
| `ReportMemoryBookmark` | `public static void ReportMemoryBookmark(string message)` | method |
| `Print` | `public static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | method |
| `ShowMessageBox` | `public static void ShowMessageBox(string lpText, string lpCaption, uint uType)` | method |
| `PrintWarning` | `public static void PrintWarning(string warning, ulong debugFilter = 17592186044416UL)` | method |
| `PrintError` | `public static void PrintError(string error, string stackTrace = null, ulong debugFilter = 17592186044416UL)` | method |
| `DisplayDebugMessage` | `public static void DisplayDebugMessage(string message)` | method |
| `WatchVariable` | `public static void WatchVariable(string name, object value)` | method |
| `StartTelemetryConnection` | `public static void StartTelemetryConnection(bool showErrors)` | method |
| `StopTelemetryConnection` | `public static void StopTelemetryConnection()` | method |
| `WriteDebugLineOnScreen` | `public static void WriteDebugLineOnScreen(string message)` | method |
| `RenderDebugLine` | `public static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugLineWithThickness` | `public static void RenderDebugLineWithThickness(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f, int thickness = 0)` | method |
| `RenderDebugSphere` | `public static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | method |
| `RenderDebugFrame` | `public static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)` | method |
| `RenderDebugText` | `public static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | method |
| `RenderDebugRectWithColor` | `public static void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U)` | method |
| `RenderDebugText3D` | `public static void RenderDebugText3D(Vec3 position, string text, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)` | method |
| `GetDebugVector` | `public static Vec3 GetDebugVector()` | method |
| `SetDebugVector` | `public static void SetDebugVector(Vec3 value)` | method |
| `SetTestModeEnabled` | `public static void SetTestModeEnabled(bool testModeEnabled)` | method |
| `AbortGame` | `public static void AbortGame()` | method |
| `DebugColor` | `public enum DebugColor` | property |
| `ulong` | `public enum DebugUserFilter : ulong` | property |
| `ulong` | `public enum DebugSystemFilter : ulong` | property |
| `DebugColor` | `public enum DebugColor` | nested type |
| `ulong` | `public enum DebugUserFilter : ulong` | nested type |
| `ulong` | `public enum DebugSystemFilter : ulong` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
