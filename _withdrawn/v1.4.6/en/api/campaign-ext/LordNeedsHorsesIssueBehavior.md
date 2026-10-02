---
title: "LordNeedsHorsesIssueBehavior"
description: "LordNeedsHorsesIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 10 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/LordNeedsHorsesIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LordNeedsHorsesIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LordNeedsHorsesIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LordNeedsHorsesIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

LordNeedsHorsesIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/LordNeedsHorsesIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is LordNeedsHorsesIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 10 public/protected members: 4 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LordNeedsHorsesIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain LordNeedsHorsesIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/LordNeedsHorsesIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ComputeMountsOverInfantryCountRatio` | `public static float ComputeMountsOverInfantryCountRatio(MobileParty issueParty, out int numInfantry)` | method |
| `IsMountCamel` | `public static bool IsMountCamel(ItemObject mountObject)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class LordNeedsHorsesIssue : IssueBase` | property |
| `QuestBase` | `public class LordNeedsHorsesIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class LordNeedsHorsesIssueBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class LordNeedsHorsesIssue : IssueBase` | nested type |
| `QuestBase` | `public class LordNeedsHorsesIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class LordNeedsHorsesIssueBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
