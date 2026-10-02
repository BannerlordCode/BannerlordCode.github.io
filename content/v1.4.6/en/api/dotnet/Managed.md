---
title: "Managed"
description: "Managed: a public class in TaleWorlds.DotNet; 20 exposed members (16 methods, 1 properties, 0 fields). Source: TaleWorlds.DotNet/Managed.cs."
---
# Managed

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public static class Managed`
**File:** `TaleWorlds.DotNet/Managed.cs`

## Overview

Managed lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/Managed.cs. It is a public class; the inheritance chain is Managed. It exposes 20 public/protected members: 16 methods, 1 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Managed is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain Managed. The surface is method-led (methods 16/20, properties 1/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/Managed.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll` | property |
| `GetStackTraceStr` | `public static string GetStackTraceStr(int skipCount = 0)` | method |
| `GetStackTraceRaw` | `public static string GetStackTraceRaw(int skipCount = 0)` | method |
| `GetStringHashCode` | `public static uint GetStringHashCode(string text)` | method |
| `GetStackTraceRaw` | `public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)` | method |
| `GetModuleList` | `public static string GetModuleList()` | method |
| `GetVersionInts` | `public static void GetVersionInts(ref int major, ref int minor, ref int revision)` | method |
| `PassInitializationMethodPointersForDotNet` | `public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)` | method |
| `Start` | `public static void Start(IEnumerable<IManagedComponent>components)` | method |
| `InitializeTypes` | `public static void InitializeTypes(Dictionary<string, Type>types)` | method |
| `AddTypes` | `public static void AddTypes(Dictionary<string, Type>types)` | method |
| `AddConstructorDelegateOfClass` | `public static void AddConstructorDelegateOfClass<T>()` | method |
| `AddConstructorDelegateOfWeakReferenceClass` | `public static void AddConstructorDelegateOfWeakReferenceClass<T>()` | method |
| `ShowDotNetVersion` | `public static string ShowDotNetVersion(List<string>strings)` | method |
| `PassManagedInitializeMethodPointerDelegate` | `public delegate void PassManagedInitializeMethodPointerDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate initalizer);` | method |
| `PassManagedCallbackMethodPointersDelegate` | `public delegate void PassManagedCallbackMethodPointersDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate methodDelegate);` | method |
| `InitializerDelegate` | `public delegate void InitializerDelegate(Delegate argument);` | method |
| `PassManagedInitializeMethodPointerDelegate` | `public delegate void PassManagedInitializeMethodPointerDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate initalizer)` | nested type |
| `PassManagedCallbackMethodPointersDelegate` | `public delegate void PassManagedCallbackMethodPointersDelegate([MarshalAs(UnmanagedType.FunctionPtr)]Delegate methodDelegate)` | nested type |
| `InitializerDelegate` | `public delegate void InitializerDelegate(Delegate argument)` | nested type |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
