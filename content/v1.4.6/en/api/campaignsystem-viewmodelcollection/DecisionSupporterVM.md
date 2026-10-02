---
title: "DecisionSupporterVM"
description: "DecisionSupporterVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs."
---
# DecisionSupporterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DecisionSupporterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs`

## Overview

DecisionSupporterVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is DecisionSupporterVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionSupporterVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions) the module directory; inheritance chain DecisionSupporterVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DecisionSupporterVM` | `public DecisionSupporterVM(TextObject name, string imagePath, Clan clan, Supporter.SupportWeights weight)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `SupportStrength` | `public int SupportStrength` | property |
| `SupportWeightImagePath` | `public string SupportWeightImagePath` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionOptionVM](../DecisionOptionVM)
- [same namespace KingdomDecisionsVM](../KingdomDecisionsVM)
- [same namespace PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent)
