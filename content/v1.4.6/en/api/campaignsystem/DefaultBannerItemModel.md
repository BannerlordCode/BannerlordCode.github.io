---
title: "DefaultBannerItemModel"
description: "DefaultBannerItemModel: a public class in TaleWorlds.CampaignSystem, inheriting BannerItemModel; 7 exposed members (4 methods, 0 properties, 3 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs."
---
# DefaultBannerItemModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs`

## Overview

DefaultBannerItemModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs. It is a public class, implementing/inheriting BannerItemModel; the inheritance chain is DefaultBannerItemModel → BannerItemModel → MBGameModel. It exposes 7 public/protected members: 4 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBannerItemModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBannerItemModel → BannerItemModel → MBGameModel. The surface is method-led (methods 4/7, properties 0/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItems()` | method |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero)` | method |
| `GetBannerItemLevelForHero` | `public override int GetBannerItemLevelForHero(Hero hero)` | method |
| `CanBannerBeUpdated` | `public override bool CanBannerBeUpdated(ItemObject item)` | method |
| `BannerLevel1` | `public const int BannerLevel1` | field |
| `BannerLevel2` | `public const int BannerLevel2` | field |
| `BannerLevel3` | `public const int BannerLevel3` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BannerItemModel](../BannerItemModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
