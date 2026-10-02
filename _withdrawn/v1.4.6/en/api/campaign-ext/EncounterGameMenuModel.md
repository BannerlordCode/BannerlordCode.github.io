---
title: "EncounterGameMenuModel"
description: "EncounterGameMenuModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<EncounterGameMenuModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncounterGameMenuModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

EncounterGameMenuModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<EncounterGameMenuModel>; the inheritance chain is EncounterGameMenuModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterGameMenuModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain EncounterGameMenuModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetEncounterMenu` | `public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle);` | method |
| `GetRaidCompleteMenu` | `public abstract string GetRaidCompleteMenu();` | method |
| `GetNewPartyJoinMenu` | `public abstract string GetNewPartyJoinMenu(MobileParty newParty);` | method |
| `GetGenericStateMenu` | `public abstract string GetGenericStateMenu();` | method |
| `IsPlunderMenu` | `public abstract bool IsPlunderMenu(string menuId);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
