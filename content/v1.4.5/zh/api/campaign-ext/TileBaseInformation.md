---
title: "TileBaseInformation"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TileBaseInformation`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TileBaseInformation

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public struct TileBaseInformation`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames/TileBaseInformation.cs`

## 概述

`TileBaseInformation` 位于 `SandBox.BoardGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### TileBaseInformation
`public struct TileBaseInformation(ref PawnBase pawnOnTile)`

**用途 / Purpose:** 处理 `tile base information` 相关逻辑。

## 使用示例

```csharp
var value = new TileBaseInformation();
value.TileBaseInformation(pawnOnTile);
```

## 参见

- [完整类目录](../catalog)