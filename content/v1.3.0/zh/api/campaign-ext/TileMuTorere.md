---
title: "TileMuTorere"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TileMuTorere`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TileMuTorere

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public class TileMuTorere : Tile1D`
**Base:** `Tile1D`
**File:** `SandBox/BoardGames/Tiles/TileMuTorere.cs`

## 概述

`TileMuTorere` 位于 `SandBox.BoardGames.Tiles`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Tiles` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `XLeftTile` | `public int XLeftTile { get; }` |
| `XRightTile` | `public int XRightTile { get; }` |

## 使用示例

```csharp
var value = new TileMuTorere();
```

## 参见

- [完整类目录](../catalog)