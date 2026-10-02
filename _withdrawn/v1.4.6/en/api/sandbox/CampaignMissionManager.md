---
title: "CampaignMissionManager"
description: "CampaignMissionManager: a public class in SandBox, inheriting CampaignMission.ICampaignMissionManager; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/CampaignMissionManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignMissionManager

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class CampaignMissionManager : CampaignMission.ICampaignMissionManager`
**File:** `SandBox/CampaignMissionManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CampaignMissionManager lives in the SandBox module, source file SandBox/CampaignMissionManager.cs. It is a public class, implementing/inheriting CampaignMission.ICampaignMissionManager; the inheritance chain is CampaignMissionManager → CampaignMission.ICampaignMissionManager. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignMissionManager lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain CampaignMissionManager → CampaignMission.ICampaignMissionManager. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. CampaignMission.ICampaignMissionManager on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignMissionManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OpenArenaDuelMission` | `public IMission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject>onDuelEndAction, float customAgentHealth)` | method |
| `OpenDisguiseMission` | `public IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)` | method |
| `OpenNavalRaidMission` | `public IMission OpenNavalRaidMission(TroopRoster navalRaidTroops, BattleSideEnum navalSide, List<Ship>allShips)` | method |
| `OpenNavalBattleMission` | `public IMission OpenNavalBattleMission(MissionInitializerRecord rec)` | method |
| `OpenNavalSetPieceBattleMission` | `public IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin>playerShips, MBList<IShipOrigin>playerAllyShips, MBList<IShipOrigin>enemyShips)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
