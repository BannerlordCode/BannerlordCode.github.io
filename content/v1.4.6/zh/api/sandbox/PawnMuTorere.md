---
title: "PawnMuTorere"
description: "PawnMuTorere：SandBox 的 public 类，继承 PawnBase；公开成员 4 个（方法 1、属性 2、字段 0）。源文件 SandBox/BoardGames/Pawns/PawnMuTorere.cs。"
---
# PawnMuTorere

**Namespace:** `SandBox.BoardGames.Pawns`
**Module:** `SandBox`
**Type:** `public class PawnMuTorere : PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnMuTorere.cs`

## 概述

PawnMuTorere 位于 SandBox 模块，源文件 SandBox/BoardGames/Pawns/PawnMuTorere.cs。它是一个 public 类，实现/继承 PawnBase，继承链为 PawnMuTorere → PawnBase。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PawnMuTorere 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.Pawns），继承链 PawnMuTorere → PawnBase。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/Pawns/PawnMuTorere.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public int X` | 属性 |
| `IsPlaced` | `public override bool IsPlaced` | 属性 |
| `PawnMuTorere` | `public PawnMuTorere(GameEntity entity, bool playerOne) : base(entity, playerOne)` | 构造函数 |
| `Reset` | `public override void Reset()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PawnBase](../PawnBase)
- [同命名空间 PawnBaghChal](../PawnBaghChal)
- [同命名空间 PawnBase](../PawnBase)
- [同命名空间 PawnKonane](../PawnKonane)
- [同命名空间 PawnPuluc](../PawnPuluc)
