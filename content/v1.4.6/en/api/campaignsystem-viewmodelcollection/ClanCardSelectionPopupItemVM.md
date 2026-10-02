---
title: "ClanCardSelectionPopupItemVM"
description: "ClanCardSelectionPopupItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 18 exposed members (2 methods, 15 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs."
---
# ClanCardSelectionPopupItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanCardSelectionPopupItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs`

## Overview

ClanCardSelectionPopupItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanCardSelectionPopupItemVM → ViewModel. It exposes 18 public/protected members: 2 methods, 15 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanCardSelectionPopupItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanCardSelectionPopupItemVM → ViewModel. The surface is property-led (properties 15/18, methods 2/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Identifier` | `public object Identifier` | property |
| `ActionResultText` | `public TextObject ActionResultText` | property |
| `ClanCardSelectionPopupItemVM` | `public ClanCardSelectionPopupItemVM(in ClanCardSelectionItemInfo info, Action<ClanCardSelectionPopupItemVM>onSelected)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `Image` | `public ImageIdentifierVM Image` | property |
| `MBBindingList` | `public MBBindingList<ClanCardSelectionPopupItemPropertyVM>Properties` | property |
| `DisabledHint` | `public HintViewModel DisabledHint` | property |
| `Title` | `public string Title` | property |
| `SpriteType` | `public string SpriteType` | property |
| `SpriteName` | `public string SpriteName` | property |
| `SpriteLabel` | `public string SpriteLabel` | property |
| `SpecialAction` | `public string SpecialAction` | property |
| `HasImage` | `public bool HasImage` | property |
| `HasSprite` | `public bool HasSprite` | property |
| `IsSpecialActionItem` | `public bool IsSpecialActionItem` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
