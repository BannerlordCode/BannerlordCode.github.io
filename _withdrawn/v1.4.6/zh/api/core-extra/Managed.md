---
title: "Managed"
description: "Managed：TaleWorlds.DotNet 的 public 类；公开成员 20 个（方法 16、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.DotNet/Managed.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Managed

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public static class Managed`
**File:** `TaleWorlds.DotNet/Managed.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## 概述

Managed 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/Managed.cs。它是一个 public 类，继承链为 Managed。public/protected 成员共 20 个：16 方法、1 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Managed 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.DotNet`），命名空间 `TaleWorlds.DotNet`，继承链 Managed。成员构成以方法为主（方法 16/20，属性 1/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/Managed.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll` | 属性 |
| `GetStackTraceStr` | `public static string GetStackTraceStr(int skipCount = 0)` | 方法 |
| `GetStackTraceRaw` | `public static string GetStackTraceRaw(int skipCount = 0)` | 方法 |
| `GetStringHashCode` | `public static uint GetStringHashCode(string text)` | 方法 |
| `GetStackTraceRaw` | `public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)` | 方法 |
| `GetModuleList` | `public static string GetModuleList()` | 方法 |
| `GetVersionInts` | `public static void GetVersionInts(ref int major, ref int minor, ref int revision)` | 方法 |
| `PassInitializationMethodPointersForDotNet` | `public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)` | 方法 |
| `Start` | `public static void Start(IEnumerable<IManagedComponent>components)` | 方法 |
| `InitializeTypes` | `public static void InitializeTypes(Dictionary<string, Type>types)` | 方法 |
| `AddTypes` | `public static void AddTypes(Dictionary<string, Type>types)` | 方法 |
| `AddConstructorDelegateOfClass` | `public static void AddConstructorDelegateOfClass<T>()` | 方法 |
| `AddConstructorDelegateOfWeakReferenceClass` | `public static void AddConstructorDelegateOfWeakReferenceClass<T>()` | 方法 |
| `ShowDotNetVersion` | `public static string ShowDotNetVersion(List<string>strings)` | 方法 |
| `PassManagedInitializeMethodPointerDelegate` | `public delegate void PassManagedInitializeMethodPointerDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate initalizer);` | 方法 |
| `PassManagedCallbackMethodPointersDelegate` | `public delegate void PassManagedCallbackMethodPointersDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate methodDelegate);` | 方法 |
| `InitializerDelegate` | `public delegate void InitializerDelegate(Delegate argument);` | 方法 |
| `PassManagedInitializeMethodPointerDelegate` | `public delegate void PassManagedInitializeMethodPointerDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate initalizer)` | 嵌套类型 |
| `PassManagedCallbackMethodPointersDelegate` | `public delegate void PassManagedCallbackMethodPointersDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate methodDelegate)` | 嵌套类型 |
| `InitializerDelegate` | `public delegate void InitializerDelegate(Delegate argument)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool/)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager/)
- [同命名空间 Controller](../Controller/)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData/)
