---
title: "KingdomItemVM"
description: "KingdomItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 3 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomItemVM.cs."
---
# KingdomItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class KingdomItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomItemVM.cs`

## Overview

KingdomItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomItemVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is KingdomItemVM → ViewModel. It exposes 3 public/protected members: 1 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement) the module directory; inheritance chain KingdomItemVM → ViewModel. The surface is property-led (properties 2/3, methods 1/3), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnSelect` | `protected virtual void OnSelect()` | method |
| `IsNew` | `public bool IsNew` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomCategoryVM](../KingdomCategoryVM)
- [same namespace KingdomGiftFiefPopupVM](../KingdomGiftFiefPopupVM)
- [same namespace KingdomManagementVM](../KingdomManagementVM)
- [same namespace LeaveKingdomPermissionEvent](../LeaveKingdomPermissionEvent)
