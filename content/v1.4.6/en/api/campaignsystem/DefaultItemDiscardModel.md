---
title: "DefaultItemDiscardModel"
description: "DefaultItemDiscardModel: a public class in TaleWorlds.CampaignSystem, inheriting ItemDiscardModel; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs."
---
# DefaultItemDiscardModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultItemDiscardModel : ItemDiscardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs`

## Overview

DefaultItemDiscardModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs. It is a public class, implementing/inheriting ItemDiscardModel; the inheritance chain is DefaultItemDiscardModel → ItemDiscardModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultItemDiscardModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultItemDiscardModel → ItemDiscardModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerCanDonateItem` | `public override bool PlayerCanDonateItem(ItemObject item)` | method |
| `GetXpBonusForDiscardingItem` | `public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)` | method |
| `GetXpBonusForDiscardingItems` | `public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ItemDiscardModel](../ItemDiscardModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
