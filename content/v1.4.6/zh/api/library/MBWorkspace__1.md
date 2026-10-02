---
title: "MBWorkspace<T>"
description: "MBWorkspace<T>：TaleWorlds.Library 的 public 类，继承 IMBCollection、new()；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.Library/MBWorkspace.cs。"
---
# MBWorkspace<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBWorkspace<T>where T : IMBCollection, new()`
**File:** `TaleWorlds.Library/MBWorkspace.cs`

## 概述

MBWorkspace<T> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBWorkspace.cs。它是一个 public 类，实现/继承 IMBCollection、new()，继承链为 MBWorkspace → IMBCollection。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBWorkspace<T> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 MBWorkspace → IMBCollection。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBWorkspace.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartUsingWorkspace` | `public T StartUsingWorkspace()` | 方法 |
| `StopUsingWorkspace` | `public void StopUsingWorkspace()` | 方法 |
| `GetWorkspace` | `public T GetWorkspace()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMBCollection](../IMBCollection)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
