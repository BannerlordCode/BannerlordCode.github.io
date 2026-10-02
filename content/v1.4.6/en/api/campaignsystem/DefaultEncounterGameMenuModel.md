---
title: "DefaultEncounterGameMenuModel"
description: "DefaultEncounterGameMenuModel: a public class in TaleWorlds.CampaignSystem, inheriting EncounterGameMenuModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs."
---
# DefaultEncounterGameMenuModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs`

## Overview

DefaultEncounterGameMenuModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs. It is a public class, implementing/inheriting EncounterGameMenuModel; the inheritance chain is DefaultEncounterGameMenuModel → EncounterGameMenuModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncounterGameMenuModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultEncounterGameMenuModel → EncounterGameMenuModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEncounterMenu` | `public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)` | method |
| `GetRaidCompleteMenu` | `public override string GetRaidCompleteMenu()` | method |
| `GetNewPartyJoinMenu` | `public override string GetNewPartyJoinMenu(MobileParty newParty)` | method |
| `GetGenericStateMenu` | `public override string GetGenericStateMenu()` | method |
| `IsPlunderMenu` | `public override bool IsPlunderMenu(string gameMenuId)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncounterGameMenuModel](../EncounterGameMenuModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
