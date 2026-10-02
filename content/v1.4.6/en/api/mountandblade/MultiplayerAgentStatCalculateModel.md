---
title: "MultiplayerAgentStatCalculateModel"
description: "MultiplayerAgentStatCalculateModel: a public class in TaleWorlds.MountAndBlade, inheriting AgentStatCalculateModel; 14 exposed members (14 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs."
---
# MultiplayerAgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerAgentStatCalculateModel : AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs`

## Overview

MultiplayerAgentStatCalculateModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs. It is a public class, implementing/inheriting AgentStatCalculateModel; the inheritance chain is MultiplayerAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel. It exposes 14 public/protected members: 14 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerAgentStatCalculateModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel. The surface is method-led (methods 14/14, properties 0/14), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentStatCalculateModel](../AgentStatCalculateModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
