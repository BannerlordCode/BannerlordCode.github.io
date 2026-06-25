---
title: "TextProcessingContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextProcessingContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextProcessingContext

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class TextProcessingContext`
**Base:** 无
**File:** `TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs`

## 概述

`TextProcessingContext` 位于 `TaleWorlds.Localization.TextProcessor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetFunction
`public void SetFunction(string functionName, MBTextModel functionBody)`

**用途 / Purpose:** 设置 `function` 的值或状态。

### ResetFunctions
`public void ResetFunctions()`

**用途 / Purpose:** 将 `functions` 重置为初始状态。

### GetFunctionBody
`public MBTextModel GetFunctionBody(string functionName)`

**用途 / Purpose:** 获取 `function body` 的当前值。

### GetFunctionParam
`public TextObject GetFunctionParam(string rawValue)`

**用途 / Purpose:** 获取 `function param` 的当前值。

### GetFunctionParamWithoutEvaluate
`public TextObject GetFunctionParamWithoutEvaluate(string rawValue)`

**用途 / Purpose:** 获取 `function param without evaluate` 的当前值。

## 使用示例

```csharp
var value = new TextProcessingContext();
value.SetFunction("example", functionBody);
```

## 参见

- [完整类目录](../catalog)