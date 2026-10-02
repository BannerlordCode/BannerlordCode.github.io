---
title: "DefaultBannerItemModel"
description: "DefaultBannerItemModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting BannerItemModel; 7 exposed members (4 methods, 0 properties, 3 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBannerItemModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultBannerItemModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs. It is a public class, implementing/inheriting BannerItemModel; the inheritance chain is DefaultBannerItemModel → BannerItemModel → MBGameModel → GameModel. It exposes 7 public/protected members: 4 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBannerItemModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultBannerItemModel → BannerItemModel → MBGameModel → GameModel. The surface is method-led (methods 4/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItems()` | method |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero)` | method |
| `GetBannerItemLevelForHero` | `public override int GetBannerItemLevelForHero(Hero hero)` | method |
| `CanBannerBeUpdated` | `public override bool CanBannerBeUpdated(ItemObject item)` | method |
| `BannerLevel1` | `public const int BannerLevel1` | field |
| `BannerLevel2` | `public const int BannerLevel2` | field |
| `BannerLevel3` | `public const int BannerLevel3` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BannerItemModel](../BannerItemModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
