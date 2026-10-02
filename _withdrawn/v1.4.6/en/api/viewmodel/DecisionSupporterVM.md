---
title: "DecisionSupporterVM"
description: "DecisionSupporterVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DecisionSupporterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DecisionSupporterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

DecisionSupporterVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is DecisionSupporterVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionSupporterVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`, inheritance chain DecisionSupporterVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionSupporterVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DecisionSupporterVM` | `public DecisionSupporterVM(TextObject name, string imagePath, Clan clan, Supporter.SupportWeights weight)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `SupportStrength` | `public int SupportStrength` | property |
| `SupportWeightImagePath` | `public string SupportWeightImagePath` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DecisionOptionVM](../DecisionOptionVM/)
- [same namespace KingdomDecisionsVM](../KingdomDecisionsVM/)
- [same namespace PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent/)
