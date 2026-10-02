---
title: "MultiplayerAgentStatCalculateModel"
description: "MultiplayerAgentStatCalculateModel: a public class in TaleWorlds.MountAndBlade, inheriting AgentStatCalculateModel; 14 exposed members (14 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerAgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerAgentStatCalculateModel : AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerAgentStatCalculateModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs. It is a public class, implementing/inheriting AgentStatCalculateModel; the inheritance chain is MultiplayerAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel → GameModel. It exposes 14 public/protected members: 14 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerAgentStatCalculateModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel → GameModel. The surface is method-led (methods 14/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDifficultyModifier` | `public override float GetDifficultyModifier()` | method |
| `CanAgentRideMount` | `public override bool CanAgentRideMount(Agent agent, Agent targetMount)` | method |
| `InitializeAgentStats` | `public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | method |
| `GetWeaponDamageMultiplier` | `public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | method |
| `GetEquipmentStealthBonus` | `public override float GetEquipmentStealthBonus(Agent agent)` | method |
| `GetSneakAttackMultiplier` | `public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | method |
| `GetKnockBackResistance` | `public override float GetKnockBackResistance(Agent agent)` | method |
| `GetKnockDownResistance` | `public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` | method |
| `GetDismountResistance` | `public override float GetDismountResistance(Agent agent)` | method |
| `GetWeaponInaccuracy` | `public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | method |
| `GetBreatheHoldMaxDuration` | `public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | method |
| `UpdateAgentStats` | `public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | method |
| `GetEffectiveSkillForWeapon` | `public override int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)` | method |
| `CalculateMaximumSpeedMultiplier` | `public static float CalculateMaximumSpeedMultiplier(Agent agent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentStatCalculateModel](../AgentStatCalculateModel/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
