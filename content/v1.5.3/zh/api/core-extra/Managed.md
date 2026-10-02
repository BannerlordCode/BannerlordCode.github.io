---
title: "Managed"
description: "Managed 的自动生成类参考。"
---
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Managed `
**Base:** System.Object
**Source:** TaleWorlds.DotNet/Managed.cs

## 概述

`Managed` 的自动生成类参考页面。声明来自 `TaleWorlds.DotNet/Managed.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetStackTraceStr
`public static string GetStackTraceStr(int skipCount = 0) `

### GetStackTraceRaw
`public static string GetStackTraceRaw(int skipCount = 0) `
`public static string GetStackTraceRaw(StackTrace stack,int skipCount = 0) `

### GetStringHashCode
`public static uint GetStringHashCode(string text) `

### GetModuleList
`public static string GetModuleList() `

### GetVersionInts
`public static void GetVersionInts(ref int major,ref int minor,ref int revision) `

### PassInitializationMethodPointersForDotNet
`public static void PassInitializationMethodPointersForDotNet(Delegate a,Delegate b) `

### Start
`public static void Start(IEnumerable<IManagedComponent> components) `

### InitializeTypes
`public static void InitializeTypes(Dictionary<string,Type> types) `

### AddTypes
`public static void AddTypes(Dictionary<string,Type> types) `

### ShowDotNetVersion
`public static string ShowDotNetVersion(List<string> strings) `

### PassManagedInitializeMethodPointerDelegate
`public delegate void PassManagedInitializeMethodPointerDelegate([MarshalAs(UnmanagedType.FunctionPtr)] Delegate initalizer)`

### PassManagedCallbackMethodPointersDelegate
`public delegate void PassManagedCallbackMethodPointersDelegate([MarshalAs(UnmanagedType.FunctionPtr)] Delegate methodDelegate)`

### InitializerDelegate
`public delegate void InitializerDelegate(Delegate argument)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
