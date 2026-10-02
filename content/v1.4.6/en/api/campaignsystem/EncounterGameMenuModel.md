---
title: "EncounterGameMenuModel"
description: "EncounterGameMenuModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<EncounterGameMenuModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs."
---
# EncounterGameMenuModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`

## Overview

EncounterGameMenuModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<EncounterGameMenuModel>; the inheritance chain is EncounterGameMenuModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterGameMenuModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain EncounterGameMenuModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEncounterMenu` | `public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle);` | method |
| `GetRaidCompleteMenu` | `public abstract string GetRaidCompleteMenu();` | method |
| `GetNewPartyJoinMenu` | `public abstract string GetNewPartyJoinMenu(MobileParty newParty);` | method |
| `GetGenericStateMenu` | `public abstract string GetGenericStateMenu();` | method |
| `IsPlunderMenu` | `public abstract bool IsPlunderMenu(string menuId);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
