---
title: "ScoutEnemyGarrisonsIssueBehavior"
description: "ScoutEnemyGarrisonsIssueBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 11 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs."
---
# ScoutEnemyGarrisonsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ScoutEnemyGarrisonsIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs`

## Overview

ScoutEnemyGarrisonsIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is ScoutEnemyGarrisonsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 11 public/protected members: 3 methods, 4 properties, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoutEnemyGarrisonsIssueBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues) the module directory; inheritance chain ScoutEnemyGarrisonsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is property-led (properties 4/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class ScoutEnemyGarrisonsIssue : IssueBase` | property |
| `QuestBase` | `public class ScoutEnemyGarrisonsQuest : QuestBase` | property |
| `QuestSettlement` | `public class QuestSettlement` | property |
| `SaveableTypeDefiner` | `public class ScoutEnemyGarrisonsIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class ScoutEnemyGarrisonsIssue : IssueBase` | nested type |
| `QuestBase` | `public class ScoutEnemyGarrisonsQuest : QuestBase` | nested type |
| `QuestSettlement` | `public class QuestSettlement` | nested type |
| `SaveableTypeDefiner` | `public class ScoutEnemyGarrisonsIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
