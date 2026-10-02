---
title: "KingdomDiplomacyProposalActionItemVM"
description: "KingdomDiplomacyProposalActionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs."
---
# KingdomDiplomacyProposalActionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDiplomacyProposalActionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs`

## Overview

KingdomDiplomacyProposalActionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomDiplomacyProposalActionItemVM → ViewModel. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDiplomacyProposalActionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy) the module directory; inheritance chain KingdomDiplomacyProposalActionItemVM → ViewModel. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomDiplomacyProposalActionItemVM` | `public KingdomDiplomacyProposalActionItemVM(TextObject nameText, TextObject explanationText, int influenceCost, bool isEnabled, TextObject hintText, Action action)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `Name` | `public string Name` | property |
| `Explanation` | `public string Explanation` | property |
| `InfluenceCost` | `public int InfluenceCost` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM)
- [same namespace KingdomTruceItemVM](../KingdomTruceItemVM)
