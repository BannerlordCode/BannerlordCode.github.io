---
title: "CommandLineFunctionality"
description: "CommandLineFunctionality 的自动生成类参考。"
---
# CommandLineFunctionality

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class CommandLineFunctionality`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/CommandLineFunctionality.cs`

## 概述

`CommandLineFunctionality` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Call
`public string Call(List<string> objects)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Call 对应的操作。

```csharp
// 先通过子系统 API 拿到 CommandLineFunctionality 实例
CommandLineFunctionality commandLineFunctionality = ...;
var result = commandLineFunctionality.Call(objects);
```

### CollectCommandLineFunctions
`public static List<string> CollectCommandLineFunctions()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectCommandLineFunctions 对应的操作。

```csharp
// 静态调用，不需要实例
CommandLineFunctionality.CollectCommandLineFunctions();
```

### HasFunctionForCommand
`public static bool HasFunctionForCommand(string command)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 function for command。

```csharp
// 静态调用，不需要实例
CommandLineFunctionality.HasFunctionForCommand("example");
```

### CallFunction
`public static string CallFunction(string concatName, string concatArguments, out bool found)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CallFunction 对应的操作。

```csharp
// 静态调用，不需要实例
CommandLineFunctionality.CallFunction("example", "example", found);
```

### CallFunction
`public static string CallFunction(string concatName, List<string> argList, out bool found)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CallFunction 对应的操作。

```csharp
// 静态调用，不需要实例
CommandLineFunctionality.CallFunction("example", argList, found);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CommandLineFunctionality commandLineFunctionality = ...;
commandLineFunctionality.Call(objects);
```

## 参见

- [本区域目录](../)