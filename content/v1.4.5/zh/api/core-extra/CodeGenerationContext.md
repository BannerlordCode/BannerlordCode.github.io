---
title: "CodeGenerationContext"
description: "CodeGenerationContext 的自动生成类参考。"
---
# CodeGenerationContext

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeGenerationContext`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.CodeGeneration/CodeGenerationContext.cs`

## 概述

`CodeGenerationContext` 位于 `TaleWorlds.Library.CodeGeneration`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.CodeGeneration` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Namespaces` | `public List<NamespaceCode> Namespaces { get; }` |

## 主要方法

### FindOrCreateNamespace
`public NamespaceCode FindOrCreateNamespace(string name)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「or create namespace」。

```csharp
// 先通过子系统 API 拿到 CodeGenerationContext 实例
CodeGenerationContext codeGenerationContext = ...;
var result = codeGenerationContext.FindOrCreateNamespace("example");
```

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**用途 / Purpose:** 生成「into」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 CodeGenerationContext 实例
CodeGenerationContext codeGenerationContext = ...;
codeGenerationContext.GenerateInto(codeGenerationFile);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CodeGenerationContext codeGenerationContext = ...;
codeGenerationContext.FindOrCreateNamespace("example");
```

## 参见

- [本区域目录](../)