---
title: "HeadmanNeedsGrainIssueBehavior"
description: "HeadmanNeedsGrainIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/HeadmanNeedsGrainIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeadmanNeedsGrainIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HeadmanNeedsGrainIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/HeadmanNeedsGrainIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

HeadmanNeedsGrainIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/HeadmanNeedsGrainIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is HeadmanNeedsGrainIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeadmanNeedsGrainIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain HeadmanNeedsGrainIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/HeadmanNeedsGrainIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `IssueBase` | `public class HeadmanNeedsGrainIssue : IssueBase` | property |
| `QuestBase` | `public class HeadmanNeedsGrainIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class HeadmanNeedsGrainIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class HeadmanNeedsGrainIssue : IssueBase` | nested type |
| `QuestBase` | `public class HeadmanNeedsGrainIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class HeadmanNeedsGrainIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
