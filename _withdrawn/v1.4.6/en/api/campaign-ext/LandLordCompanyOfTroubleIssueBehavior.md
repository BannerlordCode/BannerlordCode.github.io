---
title: "LandLordCompanyOfTroubleIssueBehavior"
description: "LandLordCompanyOfTroubleIssueBehavior: a public class in TaleWorlds.CampaignSystem.Issues, inheriting CampaignBehaviorBase; 10 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LandLordCompanyOfTroubleIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LandLordCompanyOfTroubleIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

LandLordCompanyOfTroubleIssueBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is LandLordCompanyOfTroubleIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 10 public/protected members: 4 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LandLordCompanyOfTroubleIssueBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain LandLordCompanyOfTroubleIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
