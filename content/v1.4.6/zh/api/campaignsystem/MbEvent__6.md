---
title: "MbEvent<T1,T2,T3,T4,T5,T6>"
description: "MbEvent<T1,T2,T3,T4,T5,T6>：TaleWorlds.CampaignSystem 的 public 类，继承 IMbEvent<T1, T2, T3, T4, T5, T6>、IMbEventBase；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/MbEvent.7.cs。"
---
# MbEvent<T1,T2,T3,T4,T5,T6>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MbEvent<T1, T2, T3, T4, T5, T6>: IMbEvent<T1, T2, T3, T4, T5, T6>, IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/MbEvent.7.cs`

## 概述

MbEvent<T1,T2,T3,T4,T5,T6> 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/MbEvent.7.cs。它是一个 public 类，实现/继承 IMbEvent<T1, T2, T3, T4, T5, T6>、IMbEventBase，继承链为 MbEvent → IMbEvent。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MbEvent<T1,T2,T3,T4,T5,T6> 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 MbEvent → IMbEvent。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/MbEvent.7.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `public void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4, T5, T6>action)` | 方法 |
| `Invoke` | `public void Invoke(T1 t1, T2 t2, T3 t3, T4 t4, T5 t5, T6 t6)` | 方法 |
| `ClearListeners` | `public void ClearListeners(object o)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMbEvent](../IMbEvent)
- [基类/接口 IMbEventBase](../IMbEventBase)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
