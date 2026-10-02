---
title: "GangLeaderNeedsWeaponsIssueQuestBehavior"
description: "GangLeaderNeedsWeaponsIssueQuestBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 10 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs."
---
# GangLeaderNeedsWeaponsIssueQuestBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GangLeaderNeedsWeaponsIssueQuestBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs`

## Overview

GangLeaderNeedsWeaponsIssueQuestBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is GangLeaderNeedsWeaponsIssueQuestBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 10 public/protected members: 3 methods, 3 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GangLeaderNeedsWeaponsIssueQuestBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues) the module directory; inheritance chain GangLeaderNeedsWeaponsIssueQuestBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GangLeaderNeedsWeaponsIssueQuestBehavior` | `public GangLeaderNeedsWeaponsIssueQuestBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `IssueBase` | `public class GangLeaderNeedsWeaponsIssue : IssueBase` | property |
| `QuestBase` | `public class GangLeaderNeedsWeaponsIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class GangLeaderNeedsWeaponsIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class GangLeaderNeedsWeaponsIssue : IssueBase` | nested type |
| `QuestBase` | `public class GangLeaderNeedsWeaponsIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class GangLeaderNeedsWeaponsIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
