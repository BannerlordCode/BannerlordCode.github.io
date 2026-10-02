---
title: "MBCampaignEvent"
description: "MBCampaignEvent：TaleWorlds.CampaignSystem 的 public 类；公开成员 13 个（方法 6、属性 3、字段 1）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/MBCampaignEvent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBCampaignEvent

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MBCampaignEvent`
**File:** `TaleWorlds.CampaignSystem/MBCampaignEvent.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

MBCampaignEvent 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/MBCampaignEvent.cs。它是一个 public 类，继承链为 MBCampaignEvent。public/protected 成员共 13 个：6 方法、3 属性、1 字段、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBCampaignEvent 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 MBCampaignEvent。成员构成以方法为主（方法 6/13，属性 3/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/MBCampaignEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TriggerPeriod` | `public CampaignTime TriggerPeriod` | 属性 |
| `InitialWait` | `public CampaignTime InitialWait` | 属性 |
| `isEventDeleted` | `public bool isEventDeleted` | 属性 |
| `MBCampaignEvent` | `public MBCampaignEvent(string eventName)` | 构造函数 |
| `MBCampaignEvent` | `public MBCampaignEvent(CampaignTime triggerPeriod, CampaignTime initialWait)` | 构造函数 |
| `AddHandler` | `public void AddHandler(MBCampaignEvent.CampaignEventDelegate gameEventDelegate)` | 方法 |
| `RunHandlers` | `public void RunHandlers(params object[]delegateParams)` | 方法 |
| `Unregister` | `public void Unregister(object instance)` | 方法 |
| `CheckUpdate` | `public void CheckUpdate()` | 方法 |
| `DeletePeriodicEvent` | `public void DeletePeriodicEvent()` | 方法 |
| `List` | `protected List<MBCampaignEvent.CampaignEventDelegate>handlers` | 字段 |
| `CampaignEventDelegate` | `public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object[]delegateParams);` | 方法 |
| `CampaignEventDelegate` | `public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object[]delegateParams)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
