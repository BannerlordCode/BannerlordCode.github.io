---
title: "MBGameModel<T>"
description: "MBGameModel<T>：TaleWorlds.Core 的 public 类，继承 GameModel；公开成员 1 个（方法 1、属性 0、字段 0）。源文件 TaleWorlds.Core/MBGameModel.cs。"
---
# MBGameModel<T>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class MBGameModel<T>: GameModel where T : GameModel`
**File:** `TaleWorlds.Core/MBGameModel.cs`

## 概述

MBGameModel<T> 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBGameModel.cs。它是一个 public 类（abstract），实现/继承 GameModel，继承链为 MBGameModel → GameModel。public/protected 成员共 1 个：1 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBGameModel<T> 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MBGameModel → GameModel。成员构成以方法为主（方法 1/1，属性 0/1），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBGameModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public void Initialize(T baseModel)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GameModel](../GameModel)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
