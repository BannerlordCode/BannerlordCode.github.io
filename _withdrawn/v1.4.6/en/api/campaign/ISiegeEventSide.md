---
title: "ISiegeEventSide"
description: "ISiegeEventSide: a public interface in TaleWorlds.CampaignSystem.Siege; 16 exposed members (10 methods, 6 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ISiegeEventSide

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISiegeEventSide`
**File:** `TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ISiegeEventSide lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs. It is a public interface; the inheritance chain is ISiegeEventSide. It exposes 16 public/protected members: 10 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISiegeEventSide lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Siege`, inheritance chain ISiegeEventSide. The surface is method-led (methods 10/16, properties 6/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Siege/ISiegeEventSide.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SiegeEvent` | `SiegeEvent SiegeEvent` | property |
| `IEnumerable` | `IEnumerable<PartyBase>GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege);` | method |
| `GetNextInvolvedPartyForEventType` | `PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege);` | method |
| `HasInvolvedPartyForEventType` | `bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege);` | method |
| `SiegeStrategy` | `SiegeStrategy SiegeStrategy` | property |
| `BattleSide` | `BattleSideEnum BattleSide` | property |
| `OnTroopsKilledOnSide` | `void OnTroopsKilledOnSide(int killCount);` | method |
| `NumberOfTroopsKilledOnSide` | `int NumberOfTroopsKilledOnSide` | property |
| `SiegeEngines` | `SiegeEvent.SiegeEnginesContainer SiegeEngines` | property |
| `AddSiegeEngineMissile` | `void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile);` | method |
| `RemoveDeprecatedMissiles` | `void RemoveDeprecatedMissiles();` | method |
| `MBReadOnlyList` | `MBReadOnlyList<SiegeEvent.SiegeEngineMissile>SiegeEngineMissiles` | property |
| `SetSiegeStrategy` | `void SetSiegeStrategy(SiegeStrategy strategy);` | method |
| `InitializeSiegeEventSide` | `void InitializeSiegeEventSide();` | method |
| `GetAttackTarget` | `void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex);` | method |
| `FinalizeSiegeEvent` | `void FinalizeSiegeEvent();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BesiegerCamp](../BesiegerCamp/)
- [same namespace DefaultSiegeStrategies](../DefaultSiegeStrategies/)
- [same namespace ISiegeEventVisual](../ISiegeEventVisual/)
- [same namespace PlayerSiege](../PlayerSiege/)
