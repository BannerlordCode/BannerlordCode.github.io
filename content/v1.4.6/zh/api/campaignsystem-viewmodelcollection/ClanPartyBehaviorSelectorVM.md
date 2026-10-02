---
title: "ClanPartyBehaviorSelectorVM"
description: "ClanPartyBehaviorSelectorVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 SelectorVM<SelectorItemVM>；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs。"
---
# ClanPartyBehaviorSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartyBehaviorSelectorVM : SelectorVM<SelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs`

## 概述

ClanPartyBehaviorSelectorVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs。它是一个 public 类，实现/继承 SelectorVM<SelectorItemVM>，继承链为 ClanPartyBehaviorSelectorVM → SelectorVM。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanPartyBehaviorSelectorVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanPartyBehaviorSelectorVM → SelectorVM。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 SelectorVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanPartyBehaviorSelectorVM` | `public ClanPartyBehaviorSelectorVM(int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(selectedIndex, onChange)` | 构造函数 |
| `CanUseActions` | `public bool CanUseActions` | 属性 |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
