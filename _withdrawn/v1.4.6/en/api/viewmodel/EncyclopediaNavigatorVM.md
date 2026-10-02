---
title: "EncyclopediaNavigatorVM"
description: "EncyclopediaNavigatorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia, inheriting ViewModel; 33 exposed members (16 methods, 16 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaNavigatorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaNavigatorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaNavigatorVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 33 public/protected members: 16 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaNavigatorVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`, inheritance chain EncyclopediaNavigatorVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 16/33, properties 16/33), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaHomeVM](../EncyclopediaHomeVM/)
- [same namespace EncyclopediaLinkVM](../EncyclopediaLinkVM/)
- [same namespace EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent/)
- [same namespace EncyclopediaPages](../EncyclopediaPages/)
