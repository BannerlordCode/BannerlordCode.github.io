---
title: "KingdomDecisionsVM"
description: "KingdomDecisionsVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 15 exposed members (7 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs."
---
# KingdomDecisionsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDecisionsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs`

## Overview

KingdomDecisionsVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomDecisionsVM → ViewModel. It exposes 15 public/protected members: 7 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDecisionsVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions) the module directory; inheritance chain KingdomDecisionsVM → ViewModel. The surface is method-led (methods 7/15, properties 7/15), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DecisionOptionVM](../DecisionOptionVM)
- [same namespace DecisionSupporterVM](../DecisionSupporterVM)
- [same namespace PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent)
