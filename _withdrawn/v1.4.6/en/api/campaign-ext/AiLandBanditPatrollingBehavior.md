---
title: "AiLandBanditPatrollingBehavior"
description: "AiLandBanditPatrollingBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors, inheriting CampaignBehaviorBase; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiLandBanditPatrollingBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AiLandBanditPatrollingBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiLandBanditPatrollingBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiLandBanditPatrollingBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

AiLandBanditPatrollingBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiLandBanditPatrollingBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is AiLandBanditPatrollingBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AiLandBanditPatrollingBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`, inheritance chain AiLandBanditPatrollingBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiLandBanditPatrollingBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `AiHourlyTick` | `public void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AiArmyMemberBehavior](../AiArmyMemberBehavior/)
- [same namespace AiEngagePartyBehavior](../AiEngagePartyBehavior/)
- [same namespace AiMilitaryBehavior](../AiMilitaryBehavior/)
- [same namespace AiPartyThinkBehavior](../AiPartyThinkBehavior/)
