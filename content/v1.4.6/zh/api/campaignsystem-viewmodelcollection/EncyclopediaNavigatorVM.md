---
title: "EncyclopediaNavigatorVM"
description: "EncyclopediaNavigatorVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 33 个（方法 16、属性 16、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs。"
---
# EncyclopediaNavigatorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs`

## 概述

EncyclopediaNavigatorVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaNavigatorVM → ViewModel。public/protected 成员共 33 个：16 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaNavigatorVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia），继承链 EncyclopediaNavigatorVM → ViewModel。成员构成以方法为主（方法 16/33，属性 16/33），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `object>LastActivePage` | `public Tuple<string, object>LastActivePage` | 属性 |
| `EncyclopediaNavigatorVM` | `public EncyclopediaNavigatorVM(Func<string, object, bool, EncyclopediaPageVM>goToLink, Action closeEncyclopedia)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteHome` | `public void ExecuteHome()` | 方法 |
| `ExecuteBarLink` | `public void ExecuteBarLink(string targetID)` | 方法 |
| `ExecuteCloseEncyclopedia` | `public void ExecuteCloseEncyclopedia()` | 方法 |
| `ResetHistory` | `public void ResetHistory()` | 方法 |
| `ExecuteBack` | `public void ExecuteBack()` | 方法 |
| `ExecuteForward` | `public void ExecuteForward()` | 方法 |
| `object>GetLastPage` | `public Tuple<string, object>GetLastPage()` | 方法 |
| `AddHistory` | `public void AddHistory(string pageId, object obj)` | 方法 |
| `UpdatePageName` | `public void UpdatePageName(string value)` | 方法 |
| `ResetSearch` | `public void ResetSearch()` | 方法 |
| `ExecuteOnSearchActivated` | `public void ExecuteOnSearchActivated()` | 方法 |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | 属性 |
| `IsBackEnabled` | `public bool IsBackEnabled` | 属性 |
| `IsForwardEnabled` | `public bool IsForwardEnabled` | 属性 |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | 属性 |
| `IsSearchResultsShown` | `public bool IsSearchResultsShown` | 属性 |
| `NavBarString` | `public string NavBarString` | 属性 |
| `PageName` | `public string PageName` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSearchResultVM>SearchResults` | 属性 |
| `SearchText` | `public string SearchText` | 属性 |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `PreviousPageInputKey` | `public InputKeyItemVM PreviousPageInputKey` | 属性 |
| `NextPageInputKey` | `public InputKeyItemVM NextPageInputKey` | 属性 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetPreviousPageInputKey` | `public void SetPreviousPageInputKey(HotKey hotkey)` | 方法 |
| `SetNextPageInputKey` | `public void SetNextPageInputKey(HotKey hotkey)` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaHomeVM](../EncyclopediaHomeVM)
- [同命名空间 EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [同命名空间 EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent)
- [同命名空间 EncyclopediaPages](../EncyclopediaPages)
