---
title: "ClanCardSelectionPopupVM"
description: "ClanCardSelectionPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 17 exposed members (7 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs."
---
# ClanCardSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanCardSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs`

## Overview

ClanCardSelectionPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanCardSelectionPopupVM → ViewModel. It exposes 17 public/protected members: 7 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanCardSelectionPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanCardSelectionPopupVM → ViewModel. The surface is property-led (properties 9/17, methods 7/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
