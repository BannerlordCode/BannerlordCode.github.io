---
title: "TextProcessingContext"
description: "TextProcessingContext 的自动生成类参考。"
---
# TextProcessingContext

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class TextProcessingContext`
**Base:** 无
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/TextProcessingContext.cs`

## 概述

`TextProcessingContext` 位于 `TaleWorlds.Localization.TextProcessor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetFunction
`public void SetFunction(string functionName, MBTextModel functionBody)`

**用途 / Purpose:** 为 function 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextProcessingContext 实例
TextProcessingContext textProcessingContext = ...;
textProcessingContext.SetFunction("example", functionBody);
```

### ResetFunctions
`public void ResetFunctions()`

**用途 / Purpose:** 将 functions 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TextProcessingContext 实例
TextProcessingContext textProcessingContext = ...;
textProcessingContext.ResetFunctions();
```

### GetFunctionBody
`public MBTextModel GetFunctionBody(string functionName)`

**用途 / Purpose:** 读取并返回当前对象中 function body 的结果。

```csharp
// 先通过子系统 API 拿到 TextProcessingContext 实例
TextProcessingContext textProcessingContext = ...;
var result = textProcessingContext.GetFunctionBody("example");
```

### GetFunctionParam
`public TextObject GetFunctionParam(string rawValue)`

**用途 / Purpose:** 读取并返回当前对象中 function param 的结果。

```csharp
// 先通过子系统 API 拿到 TextProcessingContext 实例
TextProcessingContext textProcessingContext = ...;
var result = textProcessingContext.GetFunctionParam("example");
```

### GetFunctionParamWithoutEvaluate
`public TextObject GetFunctionParamWithoutEvaluate(string rawValue)`

**用途 / Purpose:** 读取并返回当前对象中 function param without evaluate 的结果。

```csharp
// 先通过子系统 API 拿到 TextProcessingContext 实例
TextProcessingContext textProcessingContext = ...;
var result = textProcessingContext.GetFunctionParamWithoutEvaluate("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TextProcessingContext textProcessingContext = ...;
textProcessingContext.SetFunction("example", functionBody);
```

## 参见

- [本区域目录](../)