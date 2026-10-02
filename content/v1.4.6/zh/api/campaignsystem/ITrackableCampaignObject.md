---
title: "ITrackableCampaignObject"
description: "ITrackableCampaignObject：TaleWorlds.CampaignSystem 的 public 接口，继承 ITrackableBase；公开成员 2 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs。"
---
# ITrackableCampaignObject

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ITrackableCampaignObject : ITrackableBase`
**File:** `TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs`

## 概述

ITrackableCampaignObject 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs。它是一个 public 接口，实现/继承 ITrackableBase，继承链为 ITrackableCampaignObject → ITrackableBase。public/protected 成员共 2 个：1 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITrackableCampaignObject 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 ITrackableCampaignObject → ITrackableBase。成员构成以方法为主（方法 1/2，属性 1/2），对外主要以操作入口暴露。继承链上的 ITrackableBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBanner` | `Banner GetBanner();` | 方法 |
| `IsReady` | `bool IsReady` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
