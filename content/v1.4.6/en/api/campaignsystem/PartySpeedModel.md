---
title: "PartySpeedModel"
description: "PartySpeedModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartySpeedModel>; 4 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs."
---
# PartySpeedModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`

## Overview

PartySpeedModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartySpeedModel>; the inheritance chain is PartySpeedModel → MBGameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartySpeedModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartySpeedModel → MBGameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BaseSpeed` | `public abstract float BaseSpeed` | property |
| `MinimumSpeed` | `public abstract float MinimumSpeed` | property |
| `CalculateBaseSpeed` | `public abstract ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0);` | method |
| `CalculateFinalSpeed` | `public abstract ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
