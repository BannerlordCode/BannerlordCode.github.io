---
title: "UpgradeRequirementsVM"
description: "UpgradeRequirementsVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 13 exposed members (4 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs."
---
# UpgradeRequirementsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class UpgradeRequirementsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs`

## Overview

UpgradeRequirementsVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is UpgradeRequirementsVM → ViewModel. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UpgradeRequirementsVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party) the module directory; inheritance chain UpgradeRequirementsVM → ViewModel. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpgradeRequirementsVM` | `public UpgradeRequirementsVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetItemRequirement` | `public void SetItemRequirement(ItemCategory category)` | method |
| `SetPerkRequirement` | `public void SetPerkRequirement(PerkObject perk)` | method |
| `SetRequirementsMet` | `public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)` | method |
| `IsItemRequirementMet` | `public bool IsItemRequirementMet` | property |
| `IsPerkRequirementMet` | `public bool IsPerkRequirementMet` | property |
| `HasItemRequirement` | `public bool HasItemRequirement` | property |
| `HasPerkRequirement` | `public bool HasPerkRequirement` | property |
| `PerkRequirement` | `public string PerkRequirement` | property |
| `ItemRequirement` | `public string ItemRequirement` | property |
| `ItemRequirementHint` | `public HintViewModel ItemRequirementHint` | property |
| `PerkRequirementHint` | `public HintViewModel PerkRequirementHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyCharacterVM](../PartyCharacterVM)
- [same namespace PartyCompositionVM](../PartyCompositionVM)
- [same namespace PartySortControllerVM](../PartySortControllerVM)
- [same namespace PartyTradeVM](../PartyTradeVM)
