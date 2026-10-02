---
title: "Managed"
description: "Auto-generated class reference for Managed."
---
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Managed `
**Base:** System.Object
**Source:** TaleWorlds.DotNet/Managed.cs

## Overview

Auto-generated stub for `Managed`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetStackTraceStr
`public static string GetStackTraceStr(int skipCount = 0)`

### GetStackTraceRaw
`public static string GetStackTraceRaw(int skipCount = 0)`

### GetStringHashCode
`public static uint GetStringHashCode(string text)`

### GetModuleList
`public static string GetModuleList()`

### GetVersionInts
`public static void GetVersionInts(ref int major,ref int minor,ref int revision)`

### PassInitializationMethodPointersForDotNet
`public static void PassInitializationMethodPointersForDotNet(Delegate a,Delegate b)`

### Start
`public static void Start(IEnumerable<IManagedComponent> components)`

### InitializeTypes
`public static void InitializeTypes(Dictionary<string,Type> types)`

### AddTypes
`public static void AddTypes(Dictionary<string,Type> types)`

### ShowDotNetVersion
`public static string ShowDotNetVersion(List<string> strings)`

### PassManagedInitializeMethodPointerDelegate
`public delegate void PassManagedInitializeMethodPointerDelegate([MarshalAs(UnmanagedType.FunctionPtr)] Delegate initalizer)`

### PassManagedCallbackMethodPointersDelegate
`public delegate void PassManagedCallbackMethodPointersDelegate([MarshalAs(UnmanagedType.FunctionPtr)] Delegate methodDelegate)`

### InitializerDelegate
`public delegate void InitializerDelegate(Delegate argument)`

## See Also

- [Section index](../)
