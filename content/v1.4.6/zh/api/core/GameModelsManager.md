---
title: "GameModelsManager"
description: "GameModelsManager：TaleWorlds.Core 的 public 类；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.Core/GameModelsManager.cs。"
---
# GameModelsManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModelsManager`
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## 概述

GameModelsManager 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameModelsManager.cs。它是一个 public 类（abstract），继承链为 GameModelsManager。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameModelsManager 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 GameModelsManager。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameModelsManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameModelsManager` | `protected GameModelsManager(IEnumerable<GameModel>inputComponents)` | 构造函数 |
| `GetGameModel` | `protected T GetGameModel<T>() where T : GameModel` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<GameModel>GetGameModels()` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
