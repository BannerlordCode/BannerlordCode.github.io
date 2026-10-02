---
title: "GangLeaderNeedsSpecialWeaponsIssueBehavior"
description: "GangLeaderNeedsSpecialWeaponsIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 8 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GangLeaderNeedsSpecialWeaponsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GangLeaderNeedsSpecialWeaponsIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

GangLeaderNeedsSpecialWeaponsIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is GangLeaderNeedsSpecialWeaponsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 8 public/protected members: 2 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GangLeaderNeedsSpecialWeaponsIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain GangLeaderNeedsSpecialWeaponsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is property-led (properties 3/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class GangLeaderNeedsSpecialWeaponsIssue : IssueBase` | property |
| `QuestBase` | `public class GangLeaderNeedsSpecialWeaponsIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class GangLeaderNeedsSpecialWeaponsIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class GangLeaderNeedsSpecialWeaponsIssue : IssueBase` | nested type |
| `QuestBase` | `public class GangLeaderNeedsSpecialWeaponsIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class GangLeaderNeedsSpecialWeaponsIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
