---
title: "ClanLordStatusItemVM"
description: "ClanLordStatusItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordStatusItemVM.cs."
---
# ClanLordStatusItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanLordStatusItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordStatusItemVM.cs`

## Overview

ClanLordStatusItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordStatusItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanLordStatusItemVM → ViewModel. It exposes 5 public/protected members: 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanLordStatusItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanLordStatusItemVM → ViewModel. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordStatusItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanLordStatusItemVM` | `public ClanLordStatusItemVM(ClanLordStatusItemVM.LordStatus status, TextObject hintText)` | constructor |
| `Type` | `public int Type` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `LordStatus` | `public enum LordStatus` | property |
| `LordStatus` | `public enum LordStatus` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
