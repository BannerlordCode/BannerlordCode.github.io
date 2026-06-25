---
title: "TreeNodeTablut"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TreeNodeTablut`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TreeNodeTablut

**命名空间:** SandBox.BoardGames.AI
**模块:** SandBox.BoardGames
**类型:** `public class TreeNodeTablut`
**领域:** campaign-ext

## 概述

`TreeNodeTablut` 位于 `SandBox.BoardGames.AI`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OpeningMove` | `public Move OpeningMove { get; }` |

## 主要方法

### CreateTreeAndReturnRootNode
`public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)`

**用途 / Purpose:** 创建一个 `tree and return root node` 实例或对象。

### GetChildWithBestScore
`public TreeNodeTablut GetChildWithBestScore()`

**用途 / Purpose:** 获取 `child with best score` 的当前值。

### SelectAction
`public void SelectAction()`

**用途 / Purpose:** 处理 `select action` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
