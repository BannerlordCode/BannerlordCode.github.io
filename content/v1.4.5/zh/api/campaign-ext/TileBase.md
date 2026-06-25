---
title: "TileBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TileBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TileBase

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public abstract class TileBase`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.Tiles/TileBase.cs`

## 概述

`TileBase` 位于 `SandBox.BoardGames.Tiles`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Tiles` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `ValidMoveDecal` | `public BoardGameDecal ValidMoveDecal { get; }` |

## 主要方法

### Reset
`public virtual void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### SetVisibility
`public void SetVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `visibility` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomTileBase();
```

## 参见

- [完整类目录](../catalog)