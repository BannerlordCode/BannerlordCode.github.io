---
title: "ManagedScriptHolder"
description: "ManagedScriptHolder：TaleWorlds.Engine 的 public 类，继承 DotNetObject；公开成员 5 个（方法 3、属性 0、字段 1）。源文件 TaleWorlds.Engine/ManagedScriptHolder.cs。"
---
# ManagedScriptHolder

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedScriptHolder : DotNetObject`
**File:** `TaleWorlds.Engine/ManagedScriptHolder.cs`

## 概述

ManagedScriptHolder 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ManagedScriptHolder.cs。它是一个 public 类（sealed），实现/继承 DotNetObject，继承链为 ManagedScriptHolder → DotNetObject。public/protected 成员共 5 个：3 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedScriptHolder 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 ManagedScriptHolder → DotNetObject。成员构成以方法为主（方法 3/5，属性 0/5），对外主要以操作入口暴露。继承链上的 DotNetObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ManagedScriptHolder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedScriptHolder` | `public ManagedScriptHolder()` | 构造函数 |
| `SetScriptComponentHolder` | `public void SetScriptComponentHolder(ScriptComponentBehavior sc)` | 方法 |
| `UpdateTickRequirement` | `public void UpdateTickRequirement(ScriptComponentBehavior sc, ScriptComponentBehavior.TickRequirement oldTickRequirement, ScriptComponentBehavior.TickRequirement newTickRequirement)` | 方法 |
| `RemoveScriptComponentFromAllTickLists` | `public void RemoveScriptComponentFromAllTickLists(ScriptComponentBehavior sc)` | 方法 |
| `AddRemoveLockObject` | `public object AddRemoveLockObject` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
