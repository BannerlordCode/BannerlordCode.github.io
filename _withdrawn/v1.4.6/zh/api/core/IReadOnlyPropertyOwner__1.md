---
title: "IReadOnlyPropertyOwner<T>"
description: "IReadOnlyPropertyOwner<T>：TaleWorlds.Core 的 public 接口，继承 MBObjectBase；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.Core/IReadOnlyPropertyOwner.cs。"
---
# IReadOnlyPropertyOwner<T>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IReadOnlyPropertyOwner<T>where T : MBObjectBase`
**File:** `TaleWorlds.Core/IReadOnlyPropertyOwner.cs`

## 概述

IReadOnlyPropertyOwner<T> 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IReadOnlyPropertyOwner.cs。它是一个 public 接口，实现/继承 MBObjectBase，继承链为 IReadOnlyPropertyOwner → MBObjectBase。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IReadOnlyPropertyOwner<T> 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 IReadOnlyPropertyOwner → MBObjectBase。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IReadOnlyPropertyOwner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPropertyValue` | `int GetPropertyValue(T attribute);` | 方法 |
| `HasProperty` | `bool HasProperty(T attribute);` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
