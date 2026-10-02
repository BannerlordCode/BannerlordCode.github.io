---
title: "KingdomDecisionsVM"
description: "KingdomDecisionsVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions, inheriting ViewModel; 15 exposed members (7 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDecisionsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDecisionsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomDecisionsVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomDecisionsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 7 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDecisionsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`, inheritance chain KingdomDecisionsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 7/15, properties 7/15), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsCurrentDecisionActive` | `public bool IsCurrentDecisionActive` | property |
| `KingdomDecisionsVM` | `public KingdomDecisionsVM(Action refreshKingdomManagement)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFrameTick` | `public void OnFrameTick()` | method |
| `HandleNextDecision` | `public void HandleNextDecision()` | method |
| `HandleDecision` | `public void HandleDecision(KingdomDecision curDecision)` | method |
| `RefreshWith` | `public void RefreshWith(KingdomDecision decision)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision` | property |
| `NotificationCount` | `public int NotificationCount` | property |
| `IsRefreshed` | `public bool IsRefreshed` | property |
| `IsActive` | `public bool IsActive` | property |
| `TitleText` | `public string TitleText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DecisionOptionVM](../DecisionOptionVM/)
- [same namespace DecisionSupporterVM](../DecisionSupporterVM/)
- [same namespace PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent/)
