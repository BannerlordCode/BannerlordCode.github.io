---
title: "TileBase"
description: "TileBase：SandBox 的 public 类；公开成员 6 个（方法 3、属性 2、字段 0）。源文件 SandBox/BoardGames/Tiles/TileBase.cs。"
---
# TileBase

**Namespace:** `SandBox.BoardGames.Tiles`
**Module:** `SandBox`
**Type:** `public abstract class TileBase`
**File:** `SandBox/BoardGames/Tiles/TileBase.cs`

## 概述

TileBase 位于 SandBox 模块，源文件 SandBox/BoardGames/Tiles/TileBase.cs。它是一个 public 类（abstract），继承链为 TileBase。public/protected 成员共 6 个：3 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TileBase 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.Tiles），继承链 TileBase。成员构成以方法为主（方法 3/6，属性 2/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Tiles/TileBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Entity` | `public GameEntity Entity` | 属性 |
| `ValidMoveDecal` | `public BoardGameDecal ValidMoveDecal` | 属性 |
| `TileBase` | `protected TileBase(GameEntity entity, BoardGameDecal decal)` | 构造函数 |
| `Reset` | `public virtual void Reset()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `SetVisibility` | `public void SetVisibility(bool isVisible)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 Tile1D](../Tile1D)
- [同命名空间 Tile2D](../Tile2D)
- [同命名空间 TileMuTorere](../TileMuTorere)
- [同命名空间 TilePuluc](../TilePuluc)
