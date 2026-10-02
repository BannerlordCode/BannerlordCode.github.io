---
title: "GameMenuOverlayActionVM"
description: "GameMenuOverlayActionVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 StringItemWithEnabledAndHintVM；公开成员 2 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs。"
---
# GameMenuOverlayActionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuOverlayActionVM : StringItemWithEnabledAndHintVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs`

## 概述

GameMenuOverlayActionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs。它是一个 public 类，实现/继承 StringItemWithEnabledAndHintVM，继承链为 GameMenuOverlayActionVM → StringItemWithEnabledAndHintVM。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuOverlayActionVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay），继承链 GameMenuOverlayActionVM → StringItemWithEnabledAndHintVM。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 StringItemWithEnabledAndHintVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuOverlayActionVM` | `public GameMenuOverlayActionVM(Action<object>onExecute, string item, bool isEnabled, object identifier, TextObject hint = null) : base(onExecute, item, isEnabled, identifier, hint)` | 构造函数 |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyMenuOverlayVM](../ArmyMenuOverlayVM)
- [同命名空间 EncounterMenuOverlayVM](../EncounterMenuOverlayVM)
- [同命名空间 GameMenuOverlay](../GameMenuOverlay)
- [同命名空间 GameMenuOverlayFactory](../GameMenuOverlayFactory)
