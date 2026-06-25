---
title: "CallbackDebugTool"
description: "CallbackDebugTool 的自动生成类参考。"
---
# CallbackDebugTool

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackDebugTool`
**Base:** 无
**File:** `TaleWorlds.DotNet/CallbackDebugTool.cs`

## 概述

`CallbackDebugTool` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddLog
`public static void AddLog( string memberName = "")`

**用途 / Purpose:** 将 「log」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CallbackDebugTool.AddLog("example");
```

### FrameEnd
`public static void FrameEnd()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
CallbackDebugTool.FrameEnd();
```

### Reset
`public static void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 静态调用，不需要实例
CallbackDebugTool.Reset();
```

### ShowResults
`public static string ShowResults()`

**用途 / Purpose:** 显示「results」对应的界面或元素。

```csharp
// 静态调用，不需要实例
CallbackDebugTool.ShowResults();
```

## 使用示例

```csharp
CallbackDebugTool.AddLog("example");
```

## 参见

- [本区域目录](../)