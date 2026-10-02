---
title: "EncyclopediaSearchResultVM"
description: "EncyclopediaSearchResultVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 6 个（方法 2、属性 2、字段 1）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs。"
---
# EncyclopediaSearchResultVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`

## 概述

EncyclopediaSearchResultVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaSearchResultVM → ViewModel。public/protected 成员共 6 个：2 方法、2 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaSearchResultVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia），继承链 EncyclopediaSearchResultVM → ViewModel。成员构成以方法为主（方法 2/6，属性 2/6），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrgNameText` | `public string OrgNameText` | 属性 |
| `EncyclopediaSearchResultVM` | `public EncyclopediaSearchResultVM(EncyclopediaListItem source, string searchedText, int matchStartIndex)` | 构造函数 |
| `UpdateSearchedText` | `public void UpdateSearchedText(string searchedText)` | 方法 |
| `Execute` | `public void Execute()` | 方法 |
| `NameText` | `public string NameText` | 属性 |
| `LinkId` | `public string LinkId` | 字段 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaHomeVM](../EncyclopediaHomeVM)
- [同命名空间 EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [同命名空间 EncyclopediaNavigatorVM](../EncyclopediaNavigatorVM)
- [同命名空间 EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent)
