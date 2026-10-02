---
title: "ArtisanCantSellProductsAtAFairPriceIssueBehavior"
description: "ArtisanCantSellProductsAtAFairPriceIssueBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs."
---
# ArtisanCantSellProductsAtAFairPriceIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

ArtisanCantSellProductsAtAFairPriceIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is ArtisanCantSellProductsAtAFairPriceIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArtisanCantSellProductsAtAFairPriceIssueBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues) the module directory; inheritance chain ArtisanCantSellProductsAtAFairPriceIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class ArtisanCantSellProductsAtAFairPriceIssue : IssueBase` | property |
| `QuestBase` | `public class ArtisanCantSellProductsAtAFairPriceIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class ArtisanCantSellProductsAtAFairPriceIssue : IssueBase` | nested type |
| `QuestBase` | `public class ArtisanCantSellProductsAtAFairPriceIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
- [same namespace CapturedByBountyHuntersIssueBehavior](../CapturedByBountyHuntersIssueBehavior)
