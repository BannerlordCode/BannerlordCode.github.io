---
title: "MbEvent"
description: "MbEvent 的自动生成类参考。"
---
# MbEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MbEvent<T> : IMbEvent<T>,IMbEventBase `
**Base:** IMbEvent<T>,IMbEventBase
**Source:** TaleWorlds.CampaignSystem/MbEvent.2.cs

## 概述

`MbEvent` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/MbEvent.2.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner,Action<T> action) `
`public void AddNonSerializedListener(object owner,Action<T1,T2> action) `
`public void AddNonSerializedListener(object owner,Action<T1,T2,T3> action) `
`public void AddNonSerializedListener(object owner,Action<T1,T2,T3,T4> action) `
`public void AddNonSerializedListener(object owner,Action<T1,T2,T3,T4,T5> action) `
`public void AddNonSerializedListener(object owner,Action<T1,T2,T3,T4,T5,T6> action) `
`public void AddNonSerializedListener(object owner,Action<T1,T2,T3,T4,T5,T6,T7> action) `
`public void AddNonSerializedListener(object owner,Action action) `

### Invoke
`public void Invoke(T t) `
`public void Invoke(T1 t1,T2 t2) `
`public void Invoke(T1 t1,T2 t2,T3 t3) `
`public void Invoke(T1 t1,T2 t2,T3 t3,T4 t4) `
`public void Invoke(T1 t1,T2 t2,T3 t3,T4 t4,T5 t5) `
`public void Invoke(T1 t1,T2 t2,T3 t3,T4 t4,T5 t5,T6 t6) `
`public void Invoke(T1 t1,T2 t2,T3 t3,T4 t4,T5 t5,T6 t6,T7 t7) `
`public void Invoke() `

### ClearListeners
`public void ClearListeners(object o) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
