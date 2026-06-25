---
title: "Managed"
description: "Managed 的自动生成类参考。"
---
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Managed`
**Base:** 无
**File:** `TaleWorlds.DotNet/Managed.cs`

## 概述

`Managed` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll { get; }` |

## 主要方法

### GetStackTraceStr
`public static string GetStackTraceStr(int skipCount = 0)`

**用途 / Purpose:** 读取并返回当前对象中 「stack trace str」 的结果。

```csharp
// 静态调用，不需要实例
Managed.GetStackTraceStr(0);
```

### GetStackTraceRaw
`public static string GetStackTraceRaw(int skipCount = 0)`

**用途 / Purpose:** 读取并返回当前对象中 「stack trace raw」 的结果。

```csharp
// 静态调用，不需要实例
Managed.GetStackTraceRaw(0);
```

### GetStringHashCode
`public static uint GetStringHashCode(string text)`

**用途 / Purpose:** 读取并返回当前对象中 「string hash code」 的结果。

```csharp
// 静态调用，不需要实例
Managed.GetStringHashCode("example");
```

### GetStackTraceRaw
`public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)`

**用途 / Purpose:** 读取并返回当前对象中 「stack trace raw」 的结果。

```csharp
// 静态调用，不需要实例
Managed.GetStackTraceRaw(stack, 0);
```

### GetModuleList
`public static string GetModuleList()`

**用途 / Purpose:** 读取并返回当前对象中 「module list」 的结果。

```csharp
// 静态调用，不需要实例
Managed.GetModuleList();
```

### GetVersionInts
`public static void GetVersionInts(ref int major, ref int minor, ref int revision)`

**用途 / Purpose:** 读取并返回当前对象中 「version ints」 的结果。

```csharp
// 静态调用，不需要实例
Managed.GetVersionInts(major, minor, revision);
```

### PassInitializationMethodPointersForDotNet
`public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Managed.PassInitializationMethodPointersForDotNet(a, b);
```

### Start
`public static void Start(IEnumerable<IManagedComponent> components)`

**用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 静态调用，不需要实例
Managed.Start(components);
```

### InitializeTypes
`public static void InitializeTypes(Dictionary<string, Type> types)`

**用途 / Purpose:** 为 「types」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
Managed.InitializeTypes(dictionary<string, types);
```

### AddTypes
`public static void AddTypes(Dictionary<string, Type> types)`

**用途 / Purpose:** 将 「types」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
Managed.AddTypes(dictionary<string, types);
```

### ShowDotNetVersion
`public static string ShowDotNetVersion(List<string> strings)`

**用途 / Purpose:** 显示「dot net version」对应的界面或元素。

```csharp
// 静态调用，不需要实例
Managed.ShowDotNetVersion(strings);
```

### PassManagedInitializeMethodPointerDelegate
`public delegate void PassManagedInitializeMethodPointerDelegate( Delegate initalizer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Managed 实例
Managed managed = ...;
managed.PassManagedInitializeMethodPointerDelegate(initalizer);
```

### PassManagedCallbackMethodPointersDelegate
`public delegate void PassManagedCallbackMethodPointersDelegate( Delegate methodDelegate)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Managed 实例
Managed managed = ...;
managed.PassManagedCallbackMethodPointersDelegate(methodDelegate);
```

### InitializerDelegate
`public delegate void InitializerDelegate(Delegate argument)`

**用途 / Purpose:** 为 「r delegate」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Managed 实例
Managed managed = ...;
managed.InitializerDelegate(argument);
```

## 使用示例

```csharp
Managed.GetStackTraceStr(0);
```

## 参见

- [本区域目录](../)