---
title: "SingleThreadedSynchronizationContext"
description: "SingleThreadedSynchronizationContext：TaleWorlds.Library 的 public 类，继承 SynchronizationContext；公开成员 4 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.Library/SingleThreadedSynchronizationContext.cs。"
---
# SingleThreadedSynchronizationContext

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`

## 概述

SingleThreadedSynchronizationContext 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/SingleThreadedSynchronizationContext.cs。它是一个 public 类（sealed），实现/继承 SynchronizationContext，继承链为 SingleThreadedSynchronizationContext → SynchronizationContext。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SingleThreadedSynchronizationContext 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 SingleThreadedSynchronizationContext → SynchronizationContext。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。继承链上的 SynchronizationContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/SingleThreadedSynchronizationContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SingleThreadedSynchronizationContext` | `public SingleThreadedSynchronizationContext()` | 构造函数 |
| `Send` | `public override void Send(SendOrPostCallback callback, object state)` | 方法 |
| `Post` | `public override void Post(SendOrPostCallback callback, object state)` | 方法 |
| `Tick` | `public void Tick()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
