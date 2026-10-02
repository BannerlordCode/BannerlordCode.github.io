---
title: "GangLeaderNeedsToOffloadStolenGoodsIssueBehavior"
description: "GangLeaderNeedsToOffloadStolenGoodsIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GangLeaderNeedsToOffloadStolenGoodsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GangLeaderNeedsToOffloadStolenGoodsIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

GangLeaderNeedsToOffloadStolenGoodsIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is GangLeaderNeedsToOffloadStolenGoodsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GangLeaderNeedsToOffloadStolenGoodsIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain GangLeaderNeedsToOffloadStolenGoodsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `IssueBase` | `public class GangLeaderNeedsToOffloadStolenGoodsIssue : IssueBase` | property |
| `QuestBase` | `public class GangLeaderNeedsToOffloadStolenGoodsIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class GangLeaderNeedsToOffloadStolenGoodsIssue : IssueBase` | nested type |
| `QuestBase` | `public class GangLeaderNeedsToOffloadStolenGoodsIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
