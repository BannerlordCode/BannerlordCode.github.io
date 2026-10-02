---
title: "MarriageOfferPopupVM"
description: "MarriageOfferPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup 的 public 类，继承 ViewModel；公开成员 23 个（方法 8、属性 14、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MarriageOfferPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MarriageOfferPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MarriageOfferPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MarriageOfferPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 23 个：8 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MarriageOfferPopupVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`，继承链 MarriageOfferPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 14/23，方法 8/23），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MarriageOfferPopupVM` | `public MarriageOfferPopupVM(Hero suitor, Hero maiden, Action onClose)` | 构造函数 |
| `Update` | `public void Update()` | 方法 |
| `ExecuteAcceptOffer` | `public void ExecuteAcceptOffer()` | 方法 |
| `ExecuteDeclineOffer` | `public void ExecuteDeclineOffer()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `TitleText` | `public string TitleText` | 属性 |
| `ClanText` | `public string ClanText` | 属性 |
| `AgeText` | `public string AgeText` | 属性 |
| `OccupationText` | `public string OccupationText` | 属性 |
| `RelationText` | `public string RelationText` | 属性 |
| `ConsequencesText` | `public string ConsequencesText` | 属性 |
| `MBBindingList` | `public MBBindingList<BindingListStringItem>ConsequencesList` | 属性 |
| `ButtonOkLabel` | `public string ButtonOkLabel` | 属性 |
| `ButtonCancelLabel` | `public string ButtonCancelLabel` | 属性 |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen` | 属性 |
| `OffereeClanMember` | `public MarriageOfferPopupHeroVM OffereeClanMember` | 属性 |
| `OffererClanMember` | `public MarriageOfferPopupHeroVM OffererClanMember` | 属性 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MarriageOfferPopupHeroAttributeVM](../MarriageOfferPopupHeroAttributeVM/)
- [同命名空间 MarriageOfferPopupHeroVM](../MarriageOfferPopupHeroVM/)
