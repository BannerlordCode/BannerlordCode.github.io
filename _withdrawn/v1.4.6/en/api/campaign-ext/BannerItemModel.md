---
title: "BannerItemModel"
description: "BannerItemModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BannerItemModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerItemModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BannerItemModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BannerItemModel>; the inheritance chain is BannerItemModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerItemModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BannerItemModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public abstract IEnumerable<ItemObject>GetPossibleRewardBannerItems();` | method |
| `IEnumerable` | `public abstract IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero);` | method |
| `GetBannerItemLevelForHero` | `public abstract int GetBannerItemLevelForHero(Hero hero);` | method |
| `CanBannerBeUpdated` | `public abstract bool CanBannerBeUpdated(ItemObject item);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
