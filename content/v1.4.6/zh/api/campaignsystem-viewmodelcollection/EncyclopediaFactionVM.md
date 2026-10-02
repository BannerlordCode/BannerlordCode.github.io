---
title: "EncyclopediaFactionVM"
description: "EncyclopediaFactionVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 4、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs。"
---
# EncyclopediaFactionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaFactionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs`

## 概述

EncyclopediaFactionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaFactionVM → ViewModel。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaFactionVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items），继承链 EncyclopediaFactionVM → ViewModel。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Faction` | `public IFaction Faction` | 属性 |
| `EncyclopediaFactionVM` | `public EncyclopediaFactionVM(IFaction faction)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 方法 |
| `ImageIdentifier` | `public BannerImageIdentifierVM ImageIdentifier` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `IsDestroyed` | `public bool IsDestroyed` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaDwellingVM](../EncyclopediaDwellingVM)
- [同命名空间 EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM)
- [同命名空间 EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM)
- [同命名空间 EncyclopediaSettlementVM](../EncyclopediaSettlementVM)
