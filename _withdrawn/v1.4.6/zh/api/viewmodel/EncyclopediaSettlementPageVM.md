---
title: "EncyclopediaSettlementPageVM"
description: "EncyclopediaSettlementPageVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages 的 public 类，继承 EncyclopediaContentPageVM；公开成员 35 个（方法 8、属性 26、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaSettlementPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaSettlementPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaSettlementPageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs。它是一个 public 类，实现/继承 EncyclopediaContentPageVM，继承链为 EncyclopediaSettlementPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 35 个：8 方法、26 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaSettlementPageVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，继承链 EncyclopediaSettlementPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 26/35，方法 8/35），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaSettlementPageVM` | `public EncyclopediaSettlementPageVM(EncyclopediaPageArgs args) : base(args)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Refresh` | `public override void Refresh()` | 方法 |
| `GetName` | `public override string GetName()` | 方法 |
| `ExecuteTrack` | `public void ExecuteTrack()` | 方法 |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | 方法 |
| `ExecuteBoundSettlementLink` | `public void ExecuteBoundSettlementLink()` | 方法 |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner` | 属性 |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement` | 属性 |
| `IsFortification` | `public bool IsFortification` | 属性 |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled` | 属性 |
| `HasBoundSettlement` | `public bool HasBoundSettlement` | 属性 |
| `SettlementCropPosition` | `public double SettlementCropPosition` | 属性 |
| `BoundSettlementText` | `public string BoundSettlementText` | 属性 |
| `TrackText` | `public string TrackText` | 属性 |
| `SettlementPath` | `public string SettlementPath` | 属性 |
| `SettlementName` | `public string SettlementName` | 属性 |
| `InformationText` | `public string InformationText` | 属性 |
| `Owner` | `public HeroVM Owner` | 属性 |
| `SettlementsText` | `public string SettlementsText` | 属性 |
| `SettlementImageID` | `public string SettlementImageID` | 属性 |
| `NotableCharactersText` | `public string NotableCharactersText` | 属性 |
| `SettlementType` | `public int SettlementType` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaHistoryEventVM>History` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Settlements` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>NotableCharacters` | 属性 |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM>LeftSideProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM>RightSideProperties` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `CultureText` | `public string CultureText` | 属性 |
| `OwnerText` | `public string OwnerText` | 属性 |
| `IsVisualTrackerSelected` | `public bool IsVisualTrackerSelected` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [同命名空间 EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [同命名空间 EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM/)
- [同命名空间 EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [同命名空间 EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
