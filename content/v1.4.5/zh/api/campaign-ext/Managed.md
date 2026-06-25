---
title: "Managed"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Managed`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Managed`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/Managed.cs`

## 概述

`Managed` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### PassManagedInitializeMethodPointerDelegate
`public delegate void PassManagedInitializeMethodPointerDelegate( Delegate initalizer)`

**用途 / Purpose:** 处理 `pass managed initialize method pointer delegate` 相关逻辑。

### PassManagedCallbackMethodPointersDelegate
`public delegate void PassManagedCallbackMethodPointersDelegate( Delegate methodDelegate)`

**用途 / Purpose:** 处理 `pass managed callback method pointers delegate` 相关逻辑。

### InitializerDelegate
`public delegate void InitializerDelegate(Delegate argument)`

**用途 / Purpose:** 初始化 `r delegate` 的状态、资源或绑定。

### GetStackTraceStr
`public static string GetStackTraceStr(int skipCount = 0)`

**用途 / Purpose:** 获取 `stack trace str` 的当前值。

### GetStackTraceRaw
`public static string GetStackTraceRaw(int skipCount = 0)`

**用途 / Purpose:** 获取 `stack trace raw` 的当前值。

### GetStringHashCode
`public static uint GetStringHashCode(string text)`

**用途 / Purpose:** 获取 `string hash code` 的当前值。

### GetStackTraceRaw
`public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)`

**用途 / Purpose:** 获取 `stack trace raw` 的当前值。

### GetModuleList
`public static string GetModuleList()`

**用途 / Purpose:** 获取 `module list` 的当前值。

### GetVersionInts
`public static void GetVersionInts(ref int major, ref int minor, ref int revision)`

**用途 / Purpose:** 获取 `version ints` 的当前值。

### PassInitializationMethodPointersForDotNet
`public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)`

**用途 / Purpose:** 处理 `pass initialization method pointers for dot net` 相关逻辑。

### Start
`public static void Start(IEnumerable<IManagedComponent> components)`

**用途 / Purpose:** 处理 `start` 相关逻辑。

### InitializeTypes
`public static void InitializeTypes(Dictionary<string, Type> types)`

**用途 / Purpose:** 初始化 `types` 的状态、资源或绑定。

### AddTypes
`public static void AddTypes(Dictionary<string, Type> types)`

**用途 / Purpose:** 向当前集合/状态中添加 `types`。

### ShowDotNetVersion
`public static string ShowDotNetVersion(List<string> strings)`

**用途 / Purpose:** 处理 `show dot net version` 相关逻辑。

## 使用示例

```csharp
var value = new Managed();
value.PassManagedInitializeMethodPointerDelegate(initalizer);
```

## 参见

- [完整类目录](../catalog)