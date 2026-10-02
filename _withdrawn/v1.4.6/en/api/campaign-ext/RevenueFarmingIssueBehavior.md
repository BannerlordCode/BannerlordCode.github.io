---
title: "RevenueFarmingIssueBehavior"
description: "RevenueFarmingIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 16 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RevenueFarmingIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class RevenueFarmingIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

RevenueFarmingIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RevenueFarmingIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 16 public/protected members: 4 methods, 6 properties, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RevenueFarmingIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain RevenueFarmingIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is property-led (properties 6/16, methods 4/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnVillageEventWithIdSpawned` | `public void OnVillageEventWithIdSpawned(string Id)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `IssueBase` | `public class RevenueFarmingIssue : IssueBase` | property |
| `QuestBase` | `public class RevenueFarmingIssueQuest : QuestBase` | property |
| `VillageEvent` | `public class VillageEvent` | property |
| `RevenueVillage` | `public class RevenueVillage` | property |
| `SaveableTypeDefiner` | `public class RevenueFarmingIssueBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `VillageEventOptionData` | `public struct VillageEventOptionData` | property |
| `IssueBase` | `public class RevenueFarmingIssue : IssueBase` | nested type |
| `QuestBase` | `public class RevenueFarmingIssueQuest : QuestBase` | nested type |
| `VillageEvent` | `public class VillageEvent` | nested type |
| `RevenueVillage` | `public class RevenueVillage` | nested type |
| `SaveableTypeDefiner` | `public class RevenueFarmingIssueBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |
| `VillageEventOptionData` | `public struct VillageEventOptionData` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
