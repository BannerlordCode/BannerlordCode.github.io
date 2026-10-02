---
title: "MBException"
description: "MBException：TaleWorlds.Core 的 public 类，继承 ApplicationException；公开成员 4 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.Core/MBException.cs。"
---
# MBException

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBException : ApplicationException`
**File:** `TaleWorlds.Core/MBException.cs`

## 概述

MBException 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBException.cs。它是一个 public 类，实现/继承 ApplicationException，继承链为 MBException → ApplicationException。public/protected 成员共 4 个：4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBException 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MBException → ApplicationException。成员构成以方法为主（方法 0/4，属性 0/4），对外主要以操作入口暴露。继承链上的 ApplicationException 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBException.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBException` | `public MBException(string message, Exception innerException) : base(message, innerException)` | 构造函数 |
| `MBException` | `public MBException(string message) : base(message)` | 构造函数 |
| `MBException` | `public MBException()` | 构造函数 |
| `MBException` | `public MBException(SerializationInfo info, StreamingContext context) : base(info, context)` | 构造函数 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
