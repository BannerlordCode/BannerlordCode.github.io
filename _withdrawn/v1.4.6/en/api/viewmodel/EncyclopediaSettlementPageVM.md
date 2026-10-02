---
title: "EncyclopediaSettlementPageVM"
description: "EncyclopediaSettlementPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages, inheriting EncyclopediaContentPageVM; 35 exposed members (8 methods, 26 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaSettlementPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaSettlementPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaSettlementPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaSettlementPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 35 public/protected members: 8 methods, 26 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaSettlementPageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`, inheritance chain EncyclopediaSettlementPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 26/35, methods 8/35), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaSettlementPageVM` | `public EncyclopediaSettlementPageVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public override void Refresh()` | method |
| `GetName` | `public override string GetName()` | method |
| `ExecuteTrack` | `public void ExecuteTrack()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `ExecuteBoundSettlementLink` | `public void ExecuteBoundSettlementLink()` | method |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner` | property |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement` | property |
| `IsFortification` | `public bool IsFortification` | property |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled` | property |
| `HasBoundSettlement` | `public bool HasBoundSettlement` | property |
| `SettlementCropPosition` | `public double SettlementCropPosition` | property |
| `BoundSettlementText` | `public string BoundSettlementText` | property |
| `TrackText` | `public string TrackText` | property |
| `SettlementPath` | `public string SettlementPath` | property |
| `SettlementName` | `public string SettlementName` | property |
| `InformationText` | `public string InformationText` | property |
| `Owner` | `public HeroVM Owner` | property |
| `SettlementsText` | `public string SettlementsText` | property |
| `SettlementImageID` | `public string SettlementImageID` | property |
| `NotableCharactersText` | `public string NotableCharactersText` | property |
| `SettlementType` | `public int SettlementType` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaHistoryEventVM>History` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Settlements` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>NotableCharacters` | property |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM>LeftSideProperties` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM>RightSideProperties` | property |
| `NameText` | `public string NameText` | property |
| `CultureText` | `public string CultureText` | property |
| `OwnerText` | `public string OwnerText` | property |
| `IsVisualTrackerSelected` | `public bool IsVisualTrackerSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM/)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
