---
title: "MountSpeedEffect"
description: "MountSpeedEffect: a public class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects, inheriting MPPerkEffect; 5 exposed members (3 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/MountSpeedEffect.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MountSpeedEffect

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MountSpeedEffect : MPPerkEffect`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/MountSpeedEffect.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MountSpeedEffect lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/MountSpeedEffect.cs. It is a public class, implementing/inheriting MPPerkEffect; the inheritance chain is MountSpeedEffect → MPPerkEffect → MPPerkEffectBase. It exposes 5 public/protected members: 3 methods, 1 fields, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MountSpeedEffect lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`, inheritance chain MountSpeedEffect → MPPerkEffect → MPPerkEffectBase. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/MountSpeedEffect.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MountSpeedEffect` | `protected MountSpeedEffect()` | constructor |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `OnUpdate` | `public override void OnUpdate(Agent agent, bool newState)` | method |
| `GetMountSpeed` | `public override float GetMountSpeed()` | method |
| `StringType` | `protected static string StringType` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MPPerkEffect](../MPPerkEffect/)
- [same namespace AlternativeAttackDamageEffect](../AlternativeAttackDamageEffect/)
- [same namespace AlternativeEquipmentEffect](../AlternativeEquipmentEffect/)
- [same namespace ArmorEffect](../ArmorEffect/)
- [same namespace DamageEffect](../DamageEffect/)
