---
title: "SandboxAgentStatCalculateModel"
description: "SandboxAgentStatCalculateModel: a public class in SandBox.GameComponents, inheriting AgentStatCalculateModel; 22 exposed members (22 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/GameComponents/SandboxAgentStatCalculateModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxAgentStatCalculateModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**File:** `SandBox/GameComponents/SandboxAgentStatCalculateModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxAgentStatCalculateModel lives in the SandBox module, source file SandBox/GameComponents/SandboxAgentStatCalculateModel.cs. It is a public class, implementing/inheriting AgentStatCalculateModel; the inheritance chain is SandboxAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel → GameModel. It exposes 22 public/protected members: 22 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxAgentStatCalculateModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GameComponents`, inheritance chain SandboxAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel → GameModel. The surface is method-led (methods 22/22, properties 0/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxAgentStatCalculateModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDifficultyModifier` | `public override float GetDifficultyModifier()` | method |
| `CanAgentRideMount` | `public override bool CanAgentRideMount(Agent agent, Agent targetMount)` | method |
| `InitializeAgentStats` | `public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | method |
| `InitializeMissionEquipment` | `public override void InitializeMissionEquipment(Agent agent)` | method |
| `UpdateAgentStats` | `public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | method |
| `GetEffectiveSkill` | `public override int GetEffectiveSkill(Agent agent, SkillObject skill)` | method |
| `GetWeaponDamageMultiplier` | `public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | method |
| `GetEquipmentStealthBonus` | `public override float GetEquipmentStealthBonus(Agent agent)` | method |
| `GetSneakAttackMultiplier` | `public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | method |
| `GetKnockBackResistance` | `public override float GetKnockBackResistance(Agent agent)` | method |
| `GetKnockDownResistance` | `public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` | method |
| `GetDismountResistance` | `public override float GetDismountResistance(Agent agent)` | method |
| `GetBreatheHoldMaxDuration` | `public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | method |
| `GetWeaponInaccuracy` | `public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | method |
| `GetInteractionDistance` | `public override float GetInteractionDistance(Agent agent)` | method |
| `GetMaxCameraZoom` | `public override float GetMaxCameraZoom(Agent agent)` | method |
| `List` | `public List<PerkObject>GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = PartyRole.Personal)` | method |
| `GetMissionDebugInfoForAgent` | `public override string GetMissionDebugInfoForAgent(Agent agent)` | method |
| `GetEffectiveArmorEncumbrance` | `public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)` | method |
| `GetEffectiveMaxHealth` | `public override float GetEffectiveMaxHealth(Agent agent)` | method |
| `GetEnvironmentSpeedFactor` | `public override float GetEnvironmentSpeedFactor(Agent agent)` | method |
| `CalculateMaximumSpeedMultiplier` | `public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentStatCalculateModel](../../mission-ext/AgentStatCalculateModel/)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [same namespace SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel/)
