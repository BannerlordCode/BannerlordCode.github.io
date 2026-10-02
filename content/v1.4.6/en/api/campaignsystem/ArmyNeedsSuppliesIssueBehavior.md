---
title: "ArmyNeedsSuppliesIssueBehavior"
description: "ArmyNeedsSuppliesIssueBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/ArmyNeedsSuppliesIssueBehavior.cs."
---
# ArmyNeedsSuppliesIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyNeedsSuppliesIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArmyNeedsSuppliesIssueBehavior.cs`

## Overview

ArmyNeedsSuppliesIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/ArmyNeedsSuppliesIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is ArmyNeedsSuppliesIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyNeedsSuppliesIssueBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues) the module directory; inheritance chain ArmyNeedsSuppliesIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/ArmyNeedsSuppliesIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class ArmyNeedsSuppliesIssue : IssueBase` | property |
| `QuestBase` | `public class ArmyNeedsSuppliesIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class ArmyNeedsSuppliesIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class ArmyNeedsSuppliesIssue : IssueBase` | nested type |
| `QuestBase` | `public class ArmyNeedsSuppliesIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class ArmyNeedsSuppliesIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
- [same namespace CapturedByBountyHuntersIssueBehavior](../CapturedByBountyHuntersIssueBehavior)
