---
title: "CustomBattleAgentOrigin"
description: "CustomBattleAgentOrigin: a public class in TaleWorlds.MountAndBlade, inheriting IAgentOriginBase; 16 exposed members (5 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleAgentOrigin

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleAgentOrigin : IAgentOriginBase`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleAgentOrigin lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs. It is a public class, implementing/inheriting IAgentOriginBase; the inheritance chain is CustomBattleAgentOrigin → IAgentOriginBase. It exposes 16 public/protected members: 5 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleAgentOrigin lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CustomBattleAgentOrigin → IAgentOriginBase. The surface is property-led (properties 10/16, methods 5/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomBattleCombatant` | `public CustomBattleCombatant CustomBattleCombatant` | property |
| `Troop` | `public BasicCharacterObject Troop` | property |
| `Rank` | `public int Rank` | property |
| `Banner` | `public Banner Banner` | property |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand` | property |
| `IsInSameArmyAsPlayer` | `public bool IsInSameArmyAsPlayer` | property |
| `FactionColor` | `public uint FactionColor` | property |
| `FactionColor2` | `public uint FactionColor2` | property |
| `Seed` | `public int Seed` | property |
| `UniqueSeed` | `public int UniqueSeed` | property |
| `CustomBattleAgentOrigin` | `public CustomBattleAgentOrigin(CustomBattleCombatant customBattleCombatant, BasicCharacterObject characterObject, CustomBattleTroopSupplier troopSupplier, bool isPlayerSide, int rank = -1, UniqueTroopDescriptor uniqueNo = default(UniqueTroopDescriptor))` | constructor |
| `SetWounded` | `public void SetWounded()` | method |
| `SetKilled` | `public void SetKilled()` | method |
| `SetRouted` | `public void SetRouted(bool isOrderRetreat)` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(float agentHealth)` | method |
| `SetBanner` | `public void SetBanner(Banner banner)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IAgentOriginBase](../../core-extra/IAgentOriginBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
