---
title: "PartyMoraleModel"
description: "PartyMoraleModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartyMoraleModel>; 7 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs."
---
# PartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## Overview

PartyMoraleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyMoraleModel>; the inheritance chain is PartyMoraleModel → MBGameModel. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyMoraleModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartyMoraleModel → MBGameModel. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HighMoraleValue` | `public abstract float HighMoraleValue` | property |
| `GetDailyStarvationMoralePenalty` | `public abstract int GetDailyStarvationMoralePenalty(PartyBase party);` | method |
| `GetDailyNoWageMoralePenalty` | `public abstract int GetDailyNoWageMoralePenalty(MobileParty party);` | method |
| `GetStandardBaseMorale` | `public abstract float GetStandardBaseMorale(PartyBase party);` | method |
| `GetVictoryMoraleChange` | `public abstract float GetVictoryMoraleChange(PartyBase party);` | method |
| `GetDefeatMoraleChange` | `public abstract float GetDefeatMoraleChange(PartyBase party);` | method |
| `GetEffectivePartyMorale` | `public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
