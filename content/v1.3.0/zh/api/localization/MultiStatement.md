---
title: "MultiStatement"
description: "MultiStatement 的自动生成类参考。"
---
# MultiStatement

**Namespace:** TaleWorlds.Localization.Expressions
**Module:** TaleWorlds.Localization
**Type:** `internal class MultiStatement : TextExpression`
**Base:** `TextExpression`
**File:** `TaleWorlds.Localization/Expressions/MultiStatement.cs`

## 概述

`MultiStatement` 位于 `TaleWorlds.Localization.Expressions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.Expressions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SubStatements` | `public MBReadOnlyList<TextExpression> SubStatements { get; }` |

## 主要方法

### AddStatement
`public void AddStatement(TextExpression s2)`

**用途 / Purpose:** **用途 / Purpose:** 将 statement 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiStatement 实例
MultiStatement multiStatement = ...;
multiStatement.AddStatement(s2);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiStatement multiStatement = ...;
multiStatement.AddStatement(s2);
```

## 参见

- [本区域目录](../)