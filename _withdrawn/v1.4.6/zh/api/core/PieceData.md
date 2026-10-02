---
title: "PieceData"
description: "PieceData：TaleWorlds.Core 的 public 结构体；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.Core/PieceData.cs。"
---
# PieceData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct PieceData`
**File:** `TaleWorlds.Core/PieceData.cs`

## 概述

PieceData 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/PieceData.cs。它是一个 public 结构体，继承链为 PieceData。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PieceData 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 PieceData。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/PieceData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PieceType` | `public CraftingPiece.PieceTypes PieceType` | 属性 |
| `Order` | `public int Order` | 属性 |
| `PieceData` | `public PieceData(CraftingPiece.PieceTypes pieceType, int order)` | 构造函数 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
