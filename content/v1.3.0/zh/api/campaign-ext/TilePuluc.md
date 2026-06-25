---
title: "TilePuluc"
description: "TilePuluc 的自动生成类参考。"
---
# TilePuluc

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public class TilePuluc : Tile1D`
**Base:** `Tile1D`
**File:** `SandBox/BoardGames/Tiles/TilePuluc.cs`

## 概述

`TilePuluc` 位于 `SandBox.BoardGames.Tiles`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Tiles` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PosLeft` | `public Vec3 PosLeft { get; }` |
| `PosLeftMid` | `public Vec3 PosLeftMid { get; }` |
| `PosRight` | `public Vec3 PosRight { get; }` |
| `PosRightMid` | `public Vec3 PosRightMid { get; }` |

## 主要方法

### UpdateTilePosition
`public void UpdateTilePosition()`

**用途 / Purpose:** 重新计算并更新 tile position 的最新表示。

```csharp
// 先通过子系统 API 拿到 TilePuluc 实例
TilePuluc tilePuluc = ...;
tilePuluc.UpdateTilePosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TilePuluc tilePuluc = ...;
tilePuluc.UpdateTilePosition();
```

## 参见

- [本区域目录](../)