---
title: "IMbEvent<outT1,outT2,outT3,outT4>"
description: "IMbEvent<outT1,outT2,outT3,outT4>：TaleWorlds.CampaignSystem 的 public 接口，继承 IMbEventBase；公开成员 1 个（方法 1、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/IMbEvent.5.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMbEvent<outT1,outT2,outT3,outT4>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMbEvent<out T1, out T2, out T3, out T4>: IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/IMbEvent.5.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

IMbEvent<outT1,outT2,outT3,outT4> 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/IMbEvent.5.cs。它是一个 public 接口，实现/继承 IMbEventBase，继承链为 IMbEvent → IMbEventBase。public/protected 成员共 1 个：1 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMbEvent<outT1,outT2,outT3,outT4> 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 IMbEvent → IMbEventBase。成员构成以方法为主（方法 1/1，属性 0/1），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/IMbEvent.5.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4>action);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMbEventBase](../IMbEventBase/)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
