---
title: "KingdomClanItemVM"
description: "KingdomClanItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans, inheriting KingdomItemVM; 14 exposed members (3 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomClanItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomClanItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs. It is a public class, implementing/inheriting KingdomItemVM; the inheritance chain is KingdomClanItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 3 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomClanItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`, inheritance chain KingdomClanItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/14, methods 3/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomItemVM](../KingdomItemVM/)
- [same namespace KingdomClanFiefItemVM](../KingdomClanFiefItemVM/)
- [same namespace KingdomClanSortControllerVM](../KingdomClanSortControllerVM/)
- [same namespace KingdomClanVM](../KingdomClanVM/)
