---
title: "NearbyBanditBaseIssueBehavior"
description: "NearbyBanditBaseIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 8 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/NearbyBanditBaseIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NearbyBanditBaseIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NearbyBanditBaseIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/NearbyBanditBaseIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

NearbyBanditBaseIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/NearbyBanditBaseIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is NearbyBanditBaseIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 8 public/protected members: 2 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NearbyBanditBaseIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain NearbyBanditBaseIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is property-led (properties 3/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/NearbyBanditBaseIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class NearbyBanditBaseIssue : IssueBase` | property |
| `QuestBase` | `public class NearbyBanditBaseIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class NearbyBanditBaseIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class NearbyBanditBaseIssue : IssueBase` | nested type |
| `QuestBase` | `public class NearbyBanditBaseIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class NearbyBanditBaseIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
