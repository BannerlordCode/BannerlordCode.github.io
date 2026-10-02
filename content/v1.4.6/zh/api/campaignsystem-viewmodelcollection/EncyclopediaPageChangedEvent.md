---
title: "EncyclopediaPageChangedEvent"
description: "EncyclopediaPageChangedEvent：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 EventBase；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs。"
---
# EncyclopediaPageChangedEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaPageChangedEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs`

## 概述

EncyclopediaPageChangedEvent 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 EncyclopediaPageChangedEvent → EventBase。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaPageChangedEvent 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia），继承链 EncyclopediaPageChangedEvent → EventBase。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 EventBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NewPage` | `public EncyclopediaPages NewPage` | 属性 |
| `NewPageHasHiddenInformation` | `public bool NewPageHasHiddenInformation` | 属性 |
| `EncyclopediaPageChangedEvent` | `public EncyclopediaPageChangedEvent(EncyclopediaPages newPage, bool hasHiddenInformation = false)` | 构造函数 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaHomeVM](../EncyclopediaHomeVM)
- [同命名空间 EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [同命名空间 EncyclopediaNavigatorVM](../EncyclopediaNavigatorVM)
- [同命名空间 EncyclopediaPages](../EncyclopediaPages)
