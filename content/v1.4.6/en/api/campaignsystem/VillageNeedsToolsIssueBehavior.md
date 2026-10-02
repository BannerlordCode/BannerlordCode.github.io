---
title: "VillageNeedsToolsIssueBehavior"
description: "VillageNeedsToolsIssueBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 8 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs."
---
# VillageNeedsToolsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class VillageNeedsToolsIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs`

## Overview

VillageNeedsToolsIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is VillageNeedsToolsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 8 public/protected members: 2 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VillageNeedsToolsIssueBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues) the module directory; inheritance chain VillageNeedsToolsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is property-led (properties 3/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class VillageNeedsToolsIssue : IssueBase` | property |
| `QuestBase` | `public class VillageNeedsToolsIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class VillageNeedsToolsIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class VillageNeedsToolsIssue : IssueBase` | nested type |
| `QuestBase` | `public class VillageNeedsToolsIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class VillageNeedsToolsIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
