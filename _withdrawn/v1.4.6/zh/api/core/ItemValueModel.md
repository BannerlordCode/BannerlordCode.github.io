---
title: "ItemValueModel"
description: "ItemValueModel：TaleWorlds.Core 的 public 类，继承 MBGameModel<ItemValueModel>；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.Core/ItemValueModel.cs。"
---
# ItemValueModel

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**File:** `TaleWorlds.Core/ItemValueModel.cs`

## 概述

ItemValueModel 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ItemValueModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<ItemValueModel>，继承链为 ItemValueModel → MBGameModel → GameModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemValueModel 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 ItemValueModel → MBGameModel → GameModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ItemValueModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEquipmentValueFromTier` | `public abstract float GetEquipmentValueFromTier(float itemTierf);` | 方法 |
| `CalculateTier` | `public abstract float CalculateTier(ItemObject item);` | 方法 |
| `CalculateValue` | `public abstract int CalculateValue(ItemObject item);` | 方法 |
| `GetIsTransferable` | `public abstract bool GetIsTransferable(ItemObject item);` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MBGameModel](../MBGameModel__1)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
