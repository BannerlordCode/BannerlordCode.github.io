---
title: "KingdomClanVM"
description: "KingdomClanVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans, inheriting KingdomCategoryVM; 24 exposed members (4 methods, 19 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomClanVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomClanVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs. It is a public class, implementing/inheriting KingdomCategoryVM; the inheritance chain is KingdomClanVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 24 public/protected members: 4 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomClanVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`, inheritance chain KingdomClanVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 19/24, methods 4/24), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomClanVM` | `public KingdomClanVM(Action<KingdomDecision>forceDecide)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshClan` | `public void RefreshClan()` | method |
| `SelectClan` | `public void SelectClan(Clan clan)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController` | property |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan` | property |
| `ExpelActionExplanationText` | `public string ExpelActionExplanationText` | property |
| `SupportActionExplanationText` | `public string SupportActionExplanationText` | property |
| `BannerText` | `public string BannerText` | property |
| `TypeText` | `public string TypeText` | property |
| `NameText` | `public string NameText` | property |
| `InfluenceText` | `public string InfluenceText` | property |
| `FiefsText` | `public string FiefsText` | property |
| `MembersText` | `public string MembersText` | property |
| `MBBindingList` | `public MBBindingList<KingdomClanItemVM>Clans` | property |
| `CanSupportCurrentClan` | `public bool CanSupportCurrentClan` | property |
| `CanExpelCurrentClan` | `public bool CanExpelCurrentClan` | property |
| `SupportText` | `public string SupportText` | property |
| `ExpelActionText` | `public string ExpelActionText` | property |
| `SupportCost` | `public int SupportCost` | property |
| `ExpelCost` | `public int ExpelCost` | property |
| `ExpelHint` | `public HintViewModel ExpelHint` | property |
| `SupportHint` | `public HintViewModel SupportHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomCategoryVM](../KingdomCategoryVM/)
- [same namespace KingdomClanFiefItemVM](../KingdomClanFiefItemVM/)
- [same namespace KingdomClanItemVM](../KingdomClanItemVM/)
- [same namespace KingdomClanSortControllerVM](../KingdomClanSortControllerVM/)
