---
title: "ReferenceMBEvent<T1,T2>"
description: "ReferenceMBEvent<T1,T2>：TaleWorlds.CampaignSystem 的 public 类，继承 ReferenceIMBEvent<T1, T2>、IMbEventBase；公开成员 3 个（方法 3、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/ReferenceMBEvent.2.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ReferenceMBEvent<T1,T2>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ReferenceMBEvent<T1, T2>: ReferenceIMBEvent<T1, T2>, IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/ReferenceMBEvent.2.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ReferenceMBEvent<T1,T2> 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ReferenceMBEvent.2.cs。它是一个 public 类，实现/继承 ReferenceIMBEvent<T1, T2>、IMbEventBase，继承链为 ReferenceMBEvent → ReferenceIMBEvent → IMbEventBase。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ReferenceMBEvent<T1,T2> 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 ReferenceMBEvent → ReferenceIMBEvent → IMbEventBase。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ReferenceMBEvent.2.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `public void AddNonSerializedListener(object owner, ReferenceAction<T1, T2>action)` | 方法 |
| `Invoke` | `public void Invoke(T1 t1, ref T2 t2)` | 方法 |
| `ClearListeners` | `public void ClearListeners(object o)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ReferenceIMBEvent](../ReferenceIMBEvent__1/)
- [基类/接口 IMbEventBase](../IMbEventBase/)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
