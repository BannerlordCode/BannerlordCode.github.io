---
title: "CommentSection"
description: "CommentSection 的自动生成类参考。"
---
# CommentSection

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CommentSection`
**Base:** 无
**File:** `TaleWorlds.Library/CodeGeneration/CommentSection.cs`

## 概述

`CommentSection` 位于 `TaleWorlds.Library.CodeGeneration`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.CodeGeneration` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddCommentLine
`public void AddCommentLine(string line)`

**用途 / Purpose:** 将 「comment line」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CommentSection 实例
CommentSection commentSection = ...;
commentSection.AddCommentLine("example");
```

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**用途 / Purpose:** 生成「into」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 CommentSection 实例
CommentSection commentSection = ...;
commentSection.GenerateInto(codeGenerationFile);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CommentSection commentSection = ...;
commentSection.AddCommentLine("example");
```

## 参见

- [本区域目录](../)