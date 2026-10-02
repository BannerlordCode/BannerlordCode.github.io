---
title: "IDebugManager"
description: "IDebugManager：TaleWorlds.Library 的 public 接口；公开成员 25 个（方法 25、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/IDebugManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IDebugManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IDebugManager`
**File:** `TaleWorlds.Library/IDebugManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

IDebugManager 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/IDebugManager.cs。它是一个 public 接口，继承链为 IDebugManager。public/protected 成员共 25 个：25 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IDebugManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 IDebugManager。成员构成以方法为主（方法 25/25，属性 0/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/IDebugManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ShowWarning` | `void ShowWarning(string message);` | 方法 |
| `Assert` | `void Assert(bool condition, string message, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0);` | 方法 |
| `SilentAssert` | `void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath]string callerFile = "", [CallerMemberName]string callerMethod = "", [CallerLineNumber]int callerLine = 0);` | 方法 |
| `Print` | `void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL);` | 方法 |
| `PrintError` | `void PrintError(string error, string stackTrace, ulong debugFilter = 17592186044416UL);` | 方法 |
| `PrintWarning` | `void PrintWarning(string warning, ulong debugFilter = 17592186044416UL);` | 方法 |
| `ShowError` | `void ShowError(string message);` | 方法 |
| `ShowMessageBox` | `void ShowMessageBox(string lpText, string lpCaption, uint uType);` | 方法 |
| `DisplayDebugMessage` | `void DisplayDebugMessage(string message);` | 方法 |
| `WatchVariable` | `void WatchVariable(string name, object value);` | 方法 |
| `WriteDebugLineOnScreen` | `void WriteDebugLineOnScreen(string message);` | 方法 |
| `RenderDebugLine` | `void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f);` | 方法 |
| `RenderDebugSphere` | `void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f);` | 方法 |
| `RenderDebugText3D` | `void RenderDebugText3D(Vec3 position, string text, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f);` | 方法 |
| `RenderDebugFrame` | `void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f);` | 方法 |
| `RenderDebugText` | `void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f);` | 方法 |
| `RenderDebugRectWithColor` | `void RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color = 4294967295U);` | 方法 |
| `GetDebugVector` | `Vec3 GetDebugVector();` | 方法 |
| `SetDebugVector` | `void SetDebugVector(Vec3 value);` | 方法 |
| `SetCrashReportCustomString` | `void SetCrashReportCustomString(string customString);` | 方法 |
| `SetCrashReportCustomStack` | `void SetCrashReportCustomStack(string customStack);` | 方法 |
| `SetTestModeEnabled` | `void SetTestModeEnabled(bool testModeEnabled);` | 方法 |
| `AbortGame` | `void AbortGame();` | 方法 |
| `DoDelayedexit` | `void DoDelayedexit(int returnCode);` | 方法 |
| `ReportMemoryBookmark` | `void ReportMemoryBookmark(string message);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
