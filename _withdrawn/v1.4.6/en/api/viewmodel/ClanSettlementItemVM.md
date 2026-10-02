---
title: "ClanSettlementItemVM"
description: "ClanSettlementItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement, inheriting ViewModel; 29 exposed members (9 methods, 19 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanSettlementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanSettlementItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanSettlementItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanSettlementItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 29 public/protected members: 9 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanSettlementItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, inheritance chain ClanSettlementItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 19/29, methods 9/29), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanSettlementItemVM` | `public ClanSettlementItemVM(Settlement settlement, Action<ClanSettlementItemVM>onSelection, Action onShowSendMembers, ITeleportationCampaignBehavior teleportationBehavior)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CreateSettlementItem` | `protected virtual ClanSettlementItemVM CreateSettlementItem(Settlement settlement, Action<ClanSettlementItemVM>onSelection, Action onShowSendMembers, ITeleportationCampaignBehavior teleportationBehavior)` | method |
| `OnSettlementSelection` | `public void OnSettlementSelection()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | method |
| `ExecuteOpenTooltip` | `public void ExecuteOpenTooltip()` | method |
| `ExecuteSendMembers` | `public void ExecuteSendMembers()` | method |
| `UpdateProperties` | `protected virtual void UpdateProperties()` | method |
| `UpdateProfitProperties` | `protected virtual void UpdateProfitProperties()` | method |
| `Governor` | `public HeroVM Governor` | property |
| `MBBindingList` | `public MBBindingList<SelectableFiefItemPropertyVM>ItemProperties` | property |
| `MBBindingList` | `public MBBindingList<ProfitItemPropertyVM>ProfitItemProperties` | property |
| `TotalProfit` | `public ProfitItemPropertyVM TotalProfit` | property |
| `FileName` | `public string FileName` | property |
| `ImageName` | `public string ImageName` | property |
| `VillagesText` | `public string VillagesText` | property |
| `NotablesText` | `public string NotablesText` | property |
| `MembersText` | `public string MembersText` | property |
| `IsFortification` | `public bool IsFortification` | property |
| `HasGovernor` | `public bool HasGovernor` | property |
| `HasNotables` | `public bool HasNotables` | property |
| `IsSendMembersEnabled` | `public bool IsSendMembersEnabled` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `Name` | `public string Name` | property |
| `MBBindingList` | `public MBBindingList<ClanSettlementItemVM>VillagesOwned` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Notables` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | property |
| `SendMembersHint` | `public HintViewModel SendMembersHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
