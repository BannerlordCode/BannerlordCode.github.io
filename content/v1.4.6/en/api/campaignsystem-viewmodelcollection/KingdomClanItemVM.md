---
title: "KingdomClanItemVM"
description: "KingdomClanItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting KingdomItemVM; 14 exposed members (3 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs."
---
# KingdomClanItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs`

## Overview

KingdomClanItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs. It is a public class, implementing/inheriting KingdomItemVM; the inheritance chain is KingdomClanItemVM → KingdomItemVM → ViewModel. It exposes 14 public/protected members: 3 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomClanItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans) the module directory; inheritance chain KingdomClanItemVM → KingdomItemVM → ViewModel. The surface is property-led (properties 10/14, methods 3/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomClanItemVM` | `public KingdomClanItemVM(Clan clan, Action<KingdomClanItemVM>onSelect)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public void Refresh()` | method |
| `OnSelect` | `protected override void OnSelect()` | method |
| `Name` | `public string Name` | property |
| `ClanType` | `public int ClanType` | property |
| `NumOfMembers` | `public int NumOfMembers` | property |
| `NumOfFiefs` | `public int NumOfFiefs` | property |
| `TierText` | `public string TierText` | property |
| `Banner` | `public BannerImageIdentifierVM Banner` | property |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | property |
| `MBBindingList` | `public MBBindingList<KingdomClanFiefItemVM>Fiefs` | property |
| `Influence` | `public int Influence` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomItemVM](../KingdomItemVM)
- [same namespace KingdomClanFiefItemVM](../KingdomClanFiefItemVM)
- [same namespace KingdomClanSortControllerVM](../KingdomClanSortControllerVM)
- [same namespace KingdomClanVM](../KingdomClanVM)
