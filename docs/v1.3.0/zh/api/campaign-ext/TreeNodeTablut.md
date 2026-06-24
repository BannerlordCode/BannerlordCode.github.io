<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TreeNodeTablut`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `tree and return root node` 实例或对象。

### GetChildWithBestScore
`public TreeNodeTablut GetChildWithBestScore()`

**用途 / Purpose:** 获取 `child with best score` 的当前值。

### SelectAction
`public void SelectAction()`

**用途 / Purpose:** 处理 `select action` 相关逻辑。

## 使用示例

```csharp
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

## 参见

- [完整类目录](../catalog)