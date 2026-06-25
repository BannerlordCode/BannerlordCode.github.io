---
title: "TreeNodeTablut"
description: "TreeNodeTablut 的自动生成类参考。"
---
# TreeNodeTablut

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class TreeNodeTablut`
**Base:** 无
**File:** `SandBox/BoardGames/AI/TreeNodeTablut.cs`

## 概述

`TreeNodeTablut` 位于 `SandBox.BoardGames.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OpeningMove` | `public Move OpeningMove { get; }` |

## 主要方法

### CreateTreeAndReturnRootNode
`public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)`

**用途 / Purpose:** 构建一个新的 「tree and return root node」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

### GetChildWithBestScore
`public TreeNodeTablut GetChildWithBestScore()`

**用途 / Purpose:** 读取并返回当前对象中 「child with best score」 的结果。

```csharp
// 先通过子系统 API 拿到 TreeNodeTablut 实例
TreeNodeTablut treeNodeTablut = ...;
var result = treeNodeTablut.GetChildWithBestScore();
```

### SelectAction
`public void SelectAction()`

**用途 / Purpose:** 处理与 「select action」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TreeNodeTablut 实例
TreeNodeTablut treeNodeTablut = ...;
treeNodeTablut.SelectAction();
```

## 使用示例

```csharp
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

## 参见

- [本区域目录](../)