---
title: "EncyclopediaHistoryEventVM"
description: "EncyclopediaHistoryEventVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items 的 public 类，继承 EncyclopediaLinkVM；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaHistoryEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaHistoryEventVM : EncyclopediaLinkVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaHistoryEventVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs。它是一个 public 类，实现/继承 EncyclopediaLinkVM，继承链为 EncyclopediaHistoryEventVM → EncyclopediaLinkVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaHistoryEventVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`，继承链 EncyclopediaHistoryEventVM → EncyclopediaLinkVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaHistoryEventVM` | `public EncyclopediaHistoryEventVM(IEncyclopediaLog log)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `HistoryEventTimeText` | `public string HistoryEventTimeText` | 属性 |
| `HistoryEventText` | `public string HistoryEventText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EncyclopediaLinkVM](../EncyclopediaLinkVM/)
- [同命名空间 EncyclopediaDwellingVM](../EncyclopediaDwellingVM/)
- [同命名空间 EncyclopediaFactionVM](../EncyclopediaFactionVM/)
- [同命名空间 EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/)
- [同命名空间 EncyclopediaSettlementVM](../EncyclopediaSettlementVM/)
