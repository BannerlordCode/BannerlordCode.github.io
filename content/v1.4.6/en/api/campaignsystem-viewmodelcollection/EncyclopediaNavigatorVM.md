---
title: "EncyclopediaNavigatorVM"
description: "EncyclopediaNavigatorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 33 exposed members (16 methods, 16 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs."
---
# EncyclopediaNavigatorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs`

## Overview

EncyclopediaNavigatorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaNavigatorVM → ViewModel. It exposes 33 public/protected members: 16 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaNavigatorVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia) the module directory; inheritance chain EncyclopediaNavigatorVM → ViewModel. The surface is method-led (methods 16/33, properties 16/33), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `object>LastActivePage` | `public Tuple<string, object>LastActivePage` | property |
| `EncyclopediaNavigatorVM` | `public EncyclopediaNavigatorVM(Func<string, object, bool, EncyclopediaPageVM>goToLink, Action closeEncyclopedia)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteHome` | `public void ExecuteHome()` | method |
| `ExecuteBarLink` | `public void ExecuteBarLink(string targetID)` | method |
| `ExecuteCloseEncyclopedia` | `public void ExecuteCloseEncyclopedia()` | method |
| `ResetHistory` | `public void ResetHistory()` | method |
| `ExecuteBack` | `public void ExecuteBack()` | method |
| `ExecuteForward` | `public void ExecuteForward()` | method |
| `object>GetLastPage` | `public Tuple<string, object>GetLastPage()` | method |
| `AddHistory` | `public void AddHistory(string pageId, object obj)` | method |
| `UpdatePageName` | `public void UpdatePageName(string value)` | method |
| `ResetSearch` | `public void ResetSearch()` | method |
| `ExecuteOnSearchActivated` | `public void ExecuteOnSearchActivated()` | method |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | property |
| `IsBackEnabled` | `public bool IsBackEnabled` | property |
| `IsForwardEnabled` | `public bool IsForwardEnabled` | property |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | property |
| `IsSearchResultsShown` | `public bool IsSearchResultsShown` | property |
| `NavBarString` | `public string NavBarString` | property |
| `PageName` | `public string PageName` | property |
| `DoneText` | `public string DoneText` | property |
| `LeaderText` | `public string LeaderText` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSearchResultVM>SearchResults` | property |
| `SearchText` | `public string SearchText` | property |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `PreviousPageInputKey` | `public InputKeyItemVM PreviousPageInputKey` | property |
| `NextPageInputKey` | `public InputKeyItemVM NextPageInputKey` | property |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetPreviousPageInputKey` | `public void SetPreviousPageInputKey(HotKey hotkey)` | method |
| `SetNextPageInputKey` | `public void SetNextPageInputKey(HotKey hotkey)` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaHomeVM](../EncyclopediaHomeVM)
- [same namespace EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [same namespace EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent)
- [same namespace EncyclopediaPages](../EncyclopediaPages)
