---
title: "TilePuluc"
description: "TilePuluc：SandBox 的 public 类，继承 Tile1D；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 SandBox/BoardGames/Tiles/TilePuluc.cs。"
---
# TilePuluc

**Namespace:** `SandBox.BoardGames.Tiles`
**Module:** `SandBox`
**Type:** `public class TilePuluc : Tile1D`
**File:** `SandBox/BoardGames/Tiles/TilePuluc.cs`

## 概述

TilePuluc 位于 SandBox 模块，源文件 SandBox/BoardGames/Tiles/TilePuluc.cs。它是一个 public 类，实现/继承 Tile1D，继承链为 TilePuluc → Tile1D → TileBase。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TilePuluc 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.Tiles），继承链 TilePuluc → Tile1D → TileBase。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Tiles/TilePuluc.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PosLeft` | `public Vec3 PosLeft` | 属性 |
| `PosLeftMid` | `public Vec3 PosLeftMid` | 属性 |
| `PosRight` | `public Vec3 PosRight` | 属性 |
| `PosRightMid` | `public Vec3 PosRightMid` | 属性 |
| `TilePuluc` | `public TilePuluc(GameEntity entity, BoardGameDecal decal, int x) : base(entity, decal, x)` | 构造函数 |
| `UpdateTilePosition` | `public void UpdateTilePosition()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Tile1D](../Tile1D)
- [同命名空间 Tile1D](../Tile1D)
- [同命名空间 Tile2D](../Tile2D)
- [同命名空间 TileBase](../TileBase)
- [同命名空间 TileMuTorere](../TileMuTorere)
