---
title: "EntityVisibilityFlags"
description: "EntityVisibilityFlags：TaleWorlds.Engine 的 public 枚举，继承 uint；公开成员 5 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.Engine/EntityVisibilityFlags.cs。"
---
# EntityVisibilityFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum EntityVisibilityFlags : uint`
**File:** `TaleWorlds.Engine/EntityVisibilityFlags.cs`

## 概述

EntityVisibilityFlags 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/EntityVisibilityFlags.cs。它是一个 public 枚举，实现/继承 uint，继承链为 EntityVisibilityFlags → uint。public/protected 成员共 5 个：5 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EntityVisibilityFlags 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 EntityVisibilityFlags → uint。成员构成以方法为主（方法 0/5，属性 0/5），对外主要以操作入口暴露。继承链上的 uint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/EntityVisibilityFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0U` | `None == 0U` | 枚举值 |
| `2U` | `VisibleOnlyWhenEditing == 2U` | 枚举值 |
| `4U` | `NoShadow == 4U` | 枚举值 |
| `8U` | `VisibleOnlyForEnvmap == 8U` | 枚举值 |
| `16U` | `NotVisibleForEnvmap == 16U` | 枚举值 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
