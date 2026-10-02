---
title: "Tile1D"
description: "Tile1D：SandBox 的 public 类，继承 TileBase；公开成员 2 个（方法 0、属性 1、字段 0）。源文件 SandBox/BoardGames/Tiles/Tile1D.cs。"
---
# Tile1D

**Namespace:** `SandBox.BoardGames.Tiles`
**Module:** `SandBox`
**Type:** `public class Tile1D : TileBase`
**File:** `SandBox/BoardGames/Tiles/Tile1D.cs`

## 概述

Tile1D 位于 SandBox 模块，源文件 SandBox/BoardGames/Tiles/Tile1D.cs。它是一个 public 类，实现/继承 TileBase，继承链为 Tile1D → TileBase。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Tile1D 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.Tiles），继承链 Tile1D → TileBase。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Tiles/Tile1D.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public int X` | 属性 |
| `Tile1D` | `public Tile1D(GameEntity entity, BoardGameDecal decal, int x) : base(entity, decal)` | 构造函数 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 TileBase](../TileBase)
- [同命名空间 Tile2D](../Tile2D)
- [同命名空间 TileBase](../TileBase)
- [同命名空间 TileMuTorere](../TileMuTorere)
- [同命名空间 TilePuluc](../TilePuluc)
