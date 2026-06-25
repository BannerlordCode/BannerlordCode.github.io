---
title: "CommandLineFunctionality"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommandLineFunctionality`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CommandLineFunctionality

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public static class CommandLineFunctionality`
**领域:** core-extra

## 概述

`CommandLineFunctionality` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CollectCommandLineFunctions
`public static List<string> CollectCommandLineFunctions()`

**用途 / Purpose:** 处理 `collect command line functions` 相关逻辑。

### HasFunctionForCommand
`public static bool HasFunctionForCommand(string command)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `function for command`。

### CallFunction
`public static string CallFunction(string concatName, string concatArguments, out bool found)`

**用途 / Purpose:** 处理 `call function` 相关逻辑。

### CallFunction
`public static string CallFunction(string concatName, List<string> argList, out bool found)`

**用途 / Purpose:** 处理 `call function` 相关逻辑。

### Call
`public string Call(List<string> objects)`

**用途 / Purpose:** 处理 `call` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
CommandLineFunctionality.CollectCommandLineFunctions();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
