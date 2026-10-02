---
title: "BannerItemModel"
description: "BannerItemModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<BannerItemModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs."
---
# BannerItemModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs`

## Overview

BannerItemModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BannerItemModel>; the inheritance chain is BannerItemModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerItemModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain BannerItemModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public abstract IEnumerable<ItemObject>GetPossibleRewardBannerItems();` | method |
| `IEnumerable` | `public abstract IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero);` | method |
| `GetBannerItemLevelForHero` | `public abstract int GetBannerItemLevelForHero(Hero hero);` | method |
| `CanBannerBeUpdated` | `public abstract bool CanBannerBeUpdated(ItemObject item);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
