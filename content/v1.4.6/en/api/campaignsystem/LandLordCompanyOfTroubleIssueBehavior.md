---
title: "LandLordCompanyOfTroubleIssueBehavior"
description: "LandLordCompanyOfTroubleIssueBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 10 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs."
---
# LandLordCompanyOfTroubleIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LandLordCompanyOfTroubleIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs`

## Overview

LandLordCompanyOfTroubleIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is LandLordCompanyOfTroubleIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 10 public/protected members: 4 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LandLordCompanyOfTroubleIssueBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues) the module directory; inheritance chain LandLordCompanyOfTroubleIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `company_of_trouble_menu_game_menu_on_init_background` | `public static void company_of_trouble_menu_game_menu_on_init_background(MenuCallbackArgs args)` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IssueBase` | `public class LandLordCompanyOfTroubleIssue : IssueBase` | property |
| `QuestBase` | `public class LandLordCompanyOfTroubleIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class LandLordCompanyOfTroubleIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class LandLordCompanyOfTroubleIssue : IssueBase` | nested type |
| `QuestBase` | `public class LandLordCompanyOfTroubleIssueQuest : QuestBase` | nested type |
| `SaveableTypeDefiner` | `public class LandLordCompanyOfTroubleIssueTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
