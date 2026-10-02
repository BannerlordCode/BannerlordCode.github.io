---
title: "AiVisitSettlementBehavior"
description: "AiVisitSettlementBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 5 exposed members (2 methods, 0 properties, 3 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs."
---
# AiVisitSettlementBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiVisitSettlementBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs`

## Overview

AiVisitSettlementBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is AiVisitSettlementBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 2 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AiVisitSettlementBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors) the module directory; inheritance chain AiVisitSettlementBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 2/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `GoodEnoughScore` | `public const float GoodEnoughScore` | field |
| `MeaningfulScoreThreshold` | `public const float MeaningfulScoreThreshold` | field |
| `BaseVisitScore` | `public const float BaseVisitScore` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AiArmyMemberBehavior](../AiArmyMemberBehavior)
- [same namespace AiEngagePartyBehavior](../AiEngagePartyBehavior)
- [same namespace AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior)
- [same namespace AiMilitaryBehavior](../AiMilitaryBehavior)
