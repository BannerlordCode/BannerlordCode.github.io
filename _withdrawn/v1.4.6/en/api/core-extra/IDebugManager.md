---
title: "IDebugManager"
description: "IDebugManager: a public interface in TaleWorlds.Library; 25 exposed members (25 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/IDebugManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IDebugManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IDebugManager`
**File:** `TaleWorlds.Library/IDebugManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

IDebugManager lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IDebugManager.cs. It is a public interface; the inheritance chain is IDebugManager. It exposes 25 public/protected members: 25 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IDebugManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain IDebugManager. The surface is method-led (methods 25/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IDebugManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ShowWarning` | `void ShowWarning(string message);` | method |
| `Assert` | `void Assert(bool condition, string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0);` | method |
| `SilentAssert` | `void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0);` | method |
| `Print` | `void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL);` | method |
| `PrintError` | `void PrintError(string error, string stackTrace, ulong debugFilter = 17592186044416UL);` | method |
| `PrintWarning` | `void PrintWarning(string warning, ulong debugFilter = 17592186044416UL);` | method |
| `ShowError` | `void ShowError(string message);` | method |
| `ShowMessageBox` | `void ShowMessageBox(string lpText, string lpCaption, uint uType);` | method |
| `DisplayDebugMessage` | `void DisplayDebugMessage(string message);` | method |
| `WatchVariable` | `void WatchVariable(string name, object value);` | method |
| `WriteDebugLineOnScreen` | `void WriteDebugLineOnScreen(string message);` | method |
| `RenderDebugLine` | `void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f);` | method |
| `RenderDebugSphere` | `void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f);` | method |
| `RenderDebugText3D` | `void RenderDebugText3D(Vec3 position, string text, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f);` | method |
| `RenderDebugFrame` | `void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f);` | method |
| `RenderDebugText` | `void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f);` | method |
| `RenderDebugRectWithColor` | `void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U);` | method |
| `GetDebugVector` | `Vec3 GetDebugVector();` | method |
| `SetDebugVector` | `void SetDebugVector(Vec3 value);` | method |
| `SetCrashReportCustomString` | `void SetCrashReportCustomString(string customString);` | method |
| `SetCrashReportCustomStack` | `void SetCrashReportCustomStack(string customStack);` | method |
| `SetTestModeEnabled` | `void SetTestModeEnabled(bool testModeEnabled);` | method |
| `AbortGame` | `void AbortGame();` | method |
| `DoDelayedexit` | `void DoDelayedexit(int returnCode);` | method |
| `ReportMemoryBookmark` | `void ReportMemoryBookmark(string message);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
