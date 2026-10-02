---
title: "MPPerkObject"
description: "MPPerkObject: a public class in TaleWorlds.MountAndBlade, inheriting IReadOnlyPerkObject; 35 exposed members (18 methods, 13 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MPPerkObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPPerkObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MPPerkObject : IReadOnlyPerkObject`
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MPPerkObject lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPPerkObject.cs. It is a public class, implementing/inheriting IReadOnlyPerkObject; the inheritance chain is MPPerkObject → IReadOnlyPerkObject. It exposes 35 public/protected members: 18 methods, 13 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPPerkObject lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MPPerkObject → IReadOnlyPerkObject. The surface is method-led (methods 18/35, properties 13/35), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPPerkObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public TextObject Name` | property |
| `Description` | `public TextObject Description` | property |
| `HasBannerBearer` | `public bool HasBannerBearer` | property |
| `List` | `public List<string>GameModes` | property |
| `PerkListIndex` | `public int PerkListIndex` | property |
| `IconId` | `public string IconId` | property |
| `HeroIdleAnimOverride` | `public string HeroIdleAnimOverride` | property |
| `HeroMountIdleAnimOverride` | `public string HeroMountIdleAnimOverride` | property |
| `TroopIdleAnimOverride` | `public string TroopIdleAnimOverride` | property |
| `TroopMountIdleAnimOverride` | `public string TroopMountIdleAnimOverride` | property |
| `MPPerkObject` | `public MPPerkObject(MissionPeer peer, string name, string description, List<string>gameModes, int perkListIndex, string iconId, IEnumerable<MPConditionalEffect>conditionalEffects, IEnumerable<MPPerkEffectBase>effects, string heroIdleAnimOverride, string heroMountIdleAnimOverride, string troopIdleAnimOverride, string troopMountIdleAnimOverride)` | constructor |
| `Clone` | `public MPPerkObject Clone(MissionPeer peer)` | method |
| `Reset` | `public void Reset()` | method |
| `GetExtraTroopCount` | `public int GetExtraTroopCount(bool isWarmup)` | method |
| `EquipmentElement>>GetAlternativeEquipments` | `public List<ValueTuple<EquipmentIndex, EquipmentElement>>GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments, bool getAllEquipments = false)` | method |
| `GetDrivenPropertyBonusOnSpawn` | `public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)` | method |
| `GetHitpoints` | `public float GetHitpoints(bool isWarmup, bool isPlayer)` | method |
| `GetTroopCount` | `public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)` | method |
| `Deserialize` | `public static IReadOnlyPerkObject Deserialize(XmlNode node)` | method |
| `GetPerkHandler` | `public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)` | method |
| `GetPerkHandler` | `public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)` | method |
| `GetCombatPerkHandler` | `public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)` | method |
| `GetOnSpawnPerkHandler` | `public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)` | method |
| `GetOnSpawnPerkHandler` | `public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject>perks)` | method |
| `RaiseEventForAllPeers` | `public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)` | method |
| `RaiseEventForAllPeersOnTeam` | `public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)` | method |
| `TickAllPeerPerks` | `public static void TickAllPeerPerks(int tickCount)` | method |
| `RaiseEventForAllPeersCommand` | `public static string RaiseEventForAllPeersCommand(List<string>strings)` | method |
| `TickAllPeerPerksCommand` | `public static string TickAllPeerPerksCommand(List<string>strings)` | method |
| `MPOnSpawnPerkHandler` | `public class MPOnSpawnPerkHandler` | property |
| `MPPerkHandler` | `public class MPPerkHandler` | property |
| `MPCombatPerkHandler` | `public class MPCombatPerkHandler` | property |
| `MPOnSpawnPerkHandler` | `public class MPOnSpawnPerkHandler` | nested type |
| `MPPerkHandler` | `public class MPPerkHandler` | nested type |
| `MPCombatPerkHandler` | `public class MPCombatPerkHandler` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IReadOnlyPerkObject](../IReadOnlyPerkObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
