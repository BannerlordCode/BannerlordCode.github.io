---
title: "IAgentOriginBase"
description: "IAgentOriginBase: a public interface in TaleWorlds.Core; 20 exposed members (7 methods, 13 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IAgentOriginBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAgentOriginBase

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IAgentOriginBase`
**File:** `TaleWorlds.Core/IAgentOriginBase.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IAgentOriginBase lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IAgentOriginBase.cs. It is a public interface; the inheritance chain is IAgentOriginBase. It exposes 20 public/protected members: 7 methods, 13 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAgentOriginBase lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IAgentOriginBase. The surface is property-led (properties 13/20, methods 7/20), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IAgentOriginBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsUnderPlayersCommand` | `bool IsUnderPlayersCommand` | property |
| `IsInSameArmyAsPlayer` | `bool IsInSameArmyAsPlayer` | property |
| `FactionColor` | `uint FactionColor` | property |
| `FactionColor2` | `uint FactionColor2` | property |
| `BattleCombatant` | `IBattleCombatant BattleCombatant` | property |
| `UniqueSeed` | `int UniqueSeed` | property |
| `Seed` | `int Seed` | property |
| `Banner` | `Banner Banner` | property |
| `Troop` | `BasicCharacterObject Troop` | property |
| `HasThrownWeapon` | `bool HasThrownWeapon` | property |
| `HasHeavyArmor` | `bool HasHeavyArmor` | property |
| `HasShield` | `bool HasShield` | property |
| `HasSpear` | `bool HasSpear` | property |
| `SetWounded` | `void SetWounded();` | method |
| `SetKilled` | `void SetKilled();` | method |
| `SetRouted` | `void SetRouted(bool isOrderRetreat);` | method |
| `OnAgentRemoved` | `void OnAgentRemoved(float agentHealth);` | method |
| `OnScoreHit` | `void OnScoreHit(BasicCharacterObject victim, BasicCharacterObject formationCaptain, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon);` | method |
| `SetBanner` | `void SetBanner(Banner banner);` | method |
| `GetTraitsMask` | `TroopTraitsMask GetTraitsMask();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
