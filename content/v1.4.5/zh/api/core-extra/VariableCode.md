---
title: "VariableCode"
description: "VariableCode 的自动生成类参考。"
---
# VariableCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class VariableCode`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.CodeGeneration/VariableCode.cs`

## 概述

`VariableCode` 位于 `TaleWorlds.Library.CodeGeneration`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.CodeGeneration` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `IsStatic` | `public bool IsStatic { get; set; }` |
| `AccessModifier` | `public VariableCodeAccessModifier AccessModifier { get; set; }` |

## 主要方法

### GenerateLine
`public string GenerateLine()`

**用途 / Purpose:** **用途 / Purpose:** 生成line的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 VariableCode 实例
VariableCode variableCode = ...;
var result = variableCode.GenerateLine();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VariableCode variableCode = ...;
variableCode.GenerateLine();
```

## 参见

- [本区域目录](../)