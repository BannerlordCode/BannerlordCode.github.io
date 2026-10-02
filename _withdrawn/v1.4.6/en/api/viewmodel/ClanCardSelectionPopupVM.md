---
title: "ClanCardSelectionPopupVM"
description: "ClanCardSelectionPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement, inheriting ViewModel; 17 exposed members (7 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanCardSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanCardSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanCardSelectionPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanCardSelectionPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 7 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanCardSelectionPopupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, inheritance chain ClanCardSelectionPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/17, methods 7/17), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanCardSelectionPopupVM` | `public ClanCardSelectionPopupVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `Open` | `public void Open(ClanCardSelectionInfo info)` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `MBBindingList` | `public MBBindingList<ClanCardSelectionPopupItemVM>Items` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `Title` | `public string Title` | property |
| `ActionResult` | `public string ActionResult` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `IsDoneEnabled` | `public bool IsDoneEnabled` | property |
| `DisabledHint` | `public HintViewModel DisabledHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
