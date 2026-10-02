---
title: "Debug"
description: "Debug 的自动生成类参考。"
---
# Debug

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Debug `
**Base:** System.Object
**Source:** TaleWorlds.Library/Debug.cs

## 概述

`Debug` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Debug.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTelemetryLevelMask
`public static TelemetryLevelMask GetTelemetryLevelMask() `

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString) `

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack) `

### Assert
`public static void Assert(bool condition,string message,[CallerFilePath] string callerFile = "",[CallerMemberName] string callerMethod = "",[CallerLineNumber] int callerLine = 0) `

### FailedAssert
`public static void FailedAssert(string message,[CallerFilePath] string callerFile = "",[CallerMemberName] string callerMethod = "",[CallerLineNumber] int callerLine = 0) `

### SilentAssert
`public static void SilentAssert(bool condition,string message = "",bool getDump = false,[CallerFilePath] string callerFile = "",[CallerMemberName] string callerMethod = "",[CallerLineNumber] int callerLine = 0) `

### ShowError
`public static void ShowError(string message) `

### ShowWarning
`public static void ShowWarning(string message) `

### ReportMemoryBookmark
`public static void ReportMemoryBookmark(string message) `

### Print
`public static void Print(string message,int logLevel = 0,Debug.DebugColor color = Debug.DebugColor.White,ulong debugFilter = 17592186044416UL) `

### ShowMessageBox
`public static void ShowMessageBox(string lpText,string lpCaption,uint uType) `

### PrintWarning
`public static void PrintWarning(string warning,ulong debugFilter = 17592186044416UL) `

### PrintError
`public static void PrintError(string error,string stackTrace = null,ulong debugFilter = 17592186044416UL) `

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message) `

### WatchVariable
`public static void WatchVariable(string name,object value) `

### StartTelemetryConnection
`public static void StartTelemetryConnection(bool showErrors) `

### StopTelemetryConnection
`public static void StopTelemetryConnection() `

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string message) `

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position,Vec3 direction,uint color = 4294967295U,bool depthCheck = false,float time = 0f) `

### RenderDebugLineWithThickness
`public static void RenderDebugLineWithThickness(Vec3 position,Vec3 direction,uint color = 4294967295U,bool depthCheck = false,float time = 0f,int thickness = 0) `

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position,float radius,uint color = 4294967295U,bool depthCheck = false,float time = 0f) `

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame,float lineLength,float time = 0f) `

### RenderDebugText
`public static void RenderDebugText(float screenX,float screenY,string text,uint color = 4294967295U,float time = 0f) `

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left,float bottom,float right,float top,uint color = 4294967295U) `

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 position,string text,uint color = 4294967295U,int screenPosOffsetX = 0,int screenPosOffsetY = 0,float time = 0f) `

### GetDebugVector
`public static Vec3 GetDebugVector() `

### SetDebugVector
`public static void SetDebugVector(Vec3 value) `

### SetTestModeEnabled
`public static void SetTestModeEnabled(bool testModeEnabled) `

### AbortGame
`public static void AbortGame() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
