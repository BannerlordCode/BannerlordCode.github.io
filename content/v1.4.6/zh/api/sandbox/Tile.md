---
title: "Tile"
description: "Tile：SandBox 的 public 类，继承 ScriptComponentBehavior；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 SandBox/BoardGames/Objects/Tile.cs。"
---
# Tile

**Namespace:** `SandBox.BoardGames.Objects`
**Module:** `SandBox`
**Type:** `public class Tile : ScriptComponentBehavior`
**File:** `SandBox/BoardGames/Objects/Tile.cs`

## 概述

Tile 位于 SandBox 模块，源文件 SandBox/BoardGames/Objects/Tile.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 Tile → ScriptComponentBehavior。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Tile 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.Objects），继承链 Tile → ScriptComponentBehavior。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Objects/Tile.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `SetVisibility` | `public void SetVisibility(bool visible)` | 方法 |
| `MovesEntity` | `protected override bool MovesEntity()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoardGameDecal](../BoardGameDecal)
