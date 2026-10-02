---
title: "MBDebug"
description: "Auto-generated class reference for MBDebug."
---
# MBDebug

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MBDebug `
**Base:** System.Object
**Source:** TaleWorlds.Engine/MBDebug.cs

## Overview

Auto-generated stub for `MBDebug`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### DisableUI
`public static string DisableUI(List<string> strings)`

### AssertMemoryUsage
`public static void AssertMemoryUsage(int memoryMB)`

### AbortGame
`public static void AbortGame(int ExitCode = 5)`

### ShowWarning
`public static void ShowWarning(string message)`

### ContentWarning
`public static void ContentWarning(string message)`

### ConditionalContentWarning
`public static void ConditionalContentWarning(bool condition,string message)`

### ShowError
`public static void ShowError(string message)`

### ShowMessageBox
`public static int ShowMessageBox(string lpText,string lpCaption,uint uType)`

### Assert
`public static void Assert(bool condition,string message,[CallerFilePath] string callerFile = "",[CallerMemberName] string callerMethod = "",[CallerLineNumber] int callerLine = 0)`

### FailedAssert
`public static void FailedAssert(string message,[CallerFilePath] string callerFile = "",[CallerMemberName] string callerMethod = "",[CallerLineNumber] int callerLine = 0)`

### SilentAssert
`public static void SilentAssert(bool condition,string message = "",bool getDump = false,[CallerFilePath] string callerFile = "",[CallerMemberName] string callerMethod = "",[CallerLineNumber] int callerLine = 0)`

### AssertConditionOrCallerClassName
`public static void AssertConditionOrCallerClassName(bool condition,string name)`

### AssertConditionOrCallerClassNameSearchAllCallstack
`public static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition,string name)`

### Print
`public static void Print(string message,int logLevel = 0,Debug.DebugColor color = Debug.DebugColor.White,ulong debugFilter = 17592186044416UL)`

### ConsolePrint
`public static void ConsolePrint(string message,Debug.DebugColor color = Debug.DebugColor.White,ulong debugFilter = 17592186044416UL)`

### WriteDebugLineOnScreen
`public static void WriteDebugLineOnScreen(string str)`

### RenderDebugText
`public static void RenderDebugText(float screenX,float screenY,string text,uint color = 4294967295U,float time = 0f)`

### RenderText
`public static void RenderText(float screenX,float screenY,string text,uint color = 4294967295U,float time = 0f)`

### RenderDebugRect
`public static void RenderDebugRect(float left,float bottom,float right,float top)`

### RenderDebugRectWithColor
`public static void RenderDebugRectWithColor(float left,float bottom,float right,float top,uint color = 4294967295U)`

### RenderDebugFrame
`public static void RenderDebugFrame(MatrixFrame frame,float lineLength,float time = 0f)`

### RenderDebugText3D
`public static void RenderDebugText3D(Vec3 worldPosition,string str,uint color = 4294967295U,int screenPosOffsetX = 0,int screenPosOffsetY = 0,float time = 0f)`

### RenderDebugDirectionArrow
`public static void RenderDebugDirectionArrow(Vec3 position,Vec3 direction,uint color = 4294967295U,bool depthCheck = false)`

### RenderDebugLine
`public static void RenderDebugLine(Vec3 position,Vec3 direction,uint color = 4294967295U,bool depthCheck = false,float time = 0f)`

### RenderDebugSphere
`public static void RenderDebugSphere(Vec3 position,float radius,uint color = 4294967295U,bool depthCheck = false,float time = 0f)`

### RenderDebugCapsule
`public static void RenderDebugCapsule(Vec3 p0,Vec3 p1,float radius,uint color = 4294967295U,bool depthCheck = false,float time = 0f)`

### RenderDebugBoundingBoxOfEntity
`public static void RenderDebugBoundingBoxOfEntity(GameEntity entity,MatrixFrame frame,uint color = 4294967295U,bool depthCheck = false,float time = 0f)`

### RenderDebugBoundingBox
`public static void RenderDebugBoundingBox(BoundingBox box,MatrixFrame frame,uint color = 4294967295U,bool depthCheck = false,float time = 0f)`

### ClearRenderObjects
`public static void ClearRenderObjects()`

### RenderDebugBoxObject
`public static void RenderDebugBoxObject(Vec3 min,Vec3 max,uint color = 4294967295U,bool depthCheck = false,float time = 0f)`

### PostWarningLine
`public static void PostWarningLine(string line)`

### IsErrorReportModeActive
`public static bool IsErrorReportModeActive()`

### IsErrorReportModePauseMission
`public static bool IsErrorReportModePauseMission()`

### SetErrorReportScene
`public static void SetErrorReportScene(Scene scene)`

### SetDumpGenerationDisabled
`public static void SetDumpGenerationDisabled(bool value)`

### EchoCommandWindow
`public static void EchoCommandWindow(string content)`

### ClearConsole
`public static string ClearConsole(List<string> strings)`

### EchoCommandWindowTest
`public static string EchoCommandWindowTest(List<string> strings)`

### IsTestMode
`public static bool IsTestMode()`

## See Also

- [Section index](../)
