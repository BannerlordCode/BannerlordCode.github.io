---
title: "MPOnSpawnPerkEffectBase"
description: "MPOnSpawnPerkEffectBase: a public class in TaleWorlds.MountAndBlade, inheriting MPPerkEffectBase, IOnSpawnPerkEffect; 8 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPOnSpawnPerkEffectBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MPOnSpawnPerkEffectBase : MPPerkEffectBase, IOnSpawnPerkEffect`
**File:** `TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MPOnSpawnPerkEffectBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs. It is a public class (abstract), implementing/inheriting MPPerkEffectBase, IOnSpawnPerkEffect; the inheritance chain is MPOnSpawnPerkEffectBase → MPPerkEffectBase. It exposes 8 public/protected members: 6 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPOnSpawnPerkEffectBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MPOnSpawnPerkEffectBase → MPPerkEffectBase. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `GetTroopCountMultiplier` | `public virtual float GetTroopCountMultiplier()` | method |
| `GetExtraTroopCount` | `public virtual int GetExtraTroopCount()` | method |
| `EquipmentElement>>GetAlternativeEquipments` | `public virtual List<ValueTuple<EquipmentIndex, EquipmentElement>>GetAlternativeEquipments(bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments, bool getAll = false)` | method |
| `GetDrivenPropertyBonusOnSpawn` | `public virtual float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)` | method |
| `GetHitpoints` | `public virtual float GetHitpoints(bool isPlayer)` | method |
| `Target` | `protected enum Target` | property |
| `Target` | `protected enum Target` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MPPerkEffectBase](../MPPerkEffectBase/)
- [base / interface IOnSpawnPerkEffect](../IOnSpawnPerkEffect/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
