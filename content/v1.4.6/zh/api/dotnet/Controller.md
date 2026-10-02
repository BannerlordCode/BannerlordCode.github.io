---
title: "Controller"
description: "Controller：TaleWorlds.DotNet 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.DotNet/Controller.cs。"
---
# Controller

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public static class Controller`
**File:** `TaleWorlds.DotNet/Controller.cs`

## 概述

Controller 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/Controller.cs。它是一个 public 类，继承链为 Controller。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Controller 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 Controller。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/Controller.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverrideManagedDllFolder` | `public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)` | 方法 |
| `LoadOnCurrentApplicationDomain` | `public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)` | 方法 |
| `SetEngineMethodsAsMono` | `public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)` | 方法 |
| `SetEngineMethodsAsHostedDotNetCore` | `public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)` | 方法 |
| `SetEngineMethodsAsDotNet` | `public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)` | 方法 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
- [同命名空间 DefineAsEngineStruct](../DefineAsEngineStruct)
