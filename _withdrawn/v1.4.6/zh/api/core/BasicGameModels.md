---
title: "BasicGameModels"
description: "BasicGameModels：TaleWorlds.Core 的 public 类，继承 GameModelsManager；公开成员 4 个（方法 0、属性 3、字段 0）。源文件 TaleWorlds.Core/BasicGameModels.cs。"
---
# BasicGameModels

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicGameModels : GameModelsManager`
**File:** `TaleWorlds.Core/BasicGameModels.cs`

## 概述

BasicGameModels 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BasicGameModels.cs。它是一个 public 类，实现/继承 GameModelsManager，继承链为 BasicGameModels → GameModelsManager。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BasicGameModels 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BasicGameModels → GameModelsManager。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BasicGameModels.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RidingModel` | `public RidingModel RidingModel` | 属性 |
| `ItemCategorySelector` | `public ItemCategorySelector ItemCategorySelector` | 属性 |
| `ItemValueModel` | `public ItemValueModel ItemValueModel` | 属性 |
| `BasicGameModels` | `public BasicGameModels(IEnumerable<GameModel>inputComponents) : base(inputComponents)` | 构造函数 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GameModelsManager](../GameModelsManager)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
