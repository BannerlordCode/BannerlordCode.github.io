---
title: "ClanCardSelectionPopupItemVM"
description: "ClanCardSelectionPopupItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 18 个（方法 2、属性 15、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs。"
---
# ClanCardSelectionPopupItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanCardSelectionPopupItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs`

## 概述

ClanCardSelectionPopupItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanCardSelectionPopupItemVM → ViewModel。public/protected 成员共 18 个：2 方法、15 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanCardSelectionPopupItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanCardSelectionPopupItemVM → ViewModel。成员构成以属性为主（属性 15/18，方法 2/18），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Identifier` | `public object Identifier` | 属性 |
| `ActionResultText` | `public TextObject ActionResultText` | 属性 |
| `ClanCardSelectionPopupItemVM` | `public ClanCardSelectionPopupItemVM(in ClanCardSelectionItemInfo info, Action<ClanCardSelectionPopupItemVM>onSelected)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `Image` | `public ImageIdentifierVM Image` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanCardSelectionPopupItemPropertyVM>Properties` | 属性 |
| `DisabledHint` | `public HintViewModel DisabledHint` | 属性 |
| `Title` | `public string Title` | 属性 |
| `SpriteType` | `public string SpriteType` | 属性 |
| `SpriteName` | `public string SpriteName` | 属性 |
| `SpriteLabel` | `public string SpriteLabel` | 属性 |
| `SpecialAction` | `public string SpecialAction` | 属性 |
| `HasImage` | `public bool HasImage` | 属性 |
| `HasSprite` | `public bool HasSprite` | 属性 |
| `IsSpecialActionItem` | `public bool IsSpecialActionItem` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
