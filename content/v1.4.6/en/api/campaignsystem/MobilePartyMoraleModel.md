---
title: "MobilePartyMoraleModel"
description: "MobilePartyMoraleModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MobilePartyMoraleModel>; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs."
---
# MobilePartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs`

## Overview

MobilePartyMoraleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MobilePartyMoraleModel>; the inheritance chain is MobilePartyMoraleModel → MBGameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyMoraleModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MobilePartyMoraleModel → MBGameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateMoraleChange` | `public abstract float CalculateMoraleChange(MobileParty party);` | method |
| `GetMoraleTooltipText` | `public abstract TextObject GetMoraleTooltipText(MobileParty party);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
