---
title: "ClanSettlementItemVM"
description: "ClanSettlementItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 29 exposed members (9 methods, 19 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs."
---
# ClanSettlementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanSettlementItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs`

## Overview

ClanSettlementItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanSettlementItemVM → ViewModel. It exposes 29 public/protected members: 9 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanSettlementItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanSettlementItemVM → ViewModel. The surface is property-led (properties 19/29, methods 9/29), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
