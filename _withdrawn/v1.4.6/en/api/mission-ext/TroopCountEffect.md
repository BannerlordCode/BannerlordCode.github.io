---
title: "TroopCountEffect"
description: "TroopCountEffect: a public class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects, inheriting MPOnSpawnPerkEffect; 4 exposed members (2 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/TroopCountEffect.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopCountEffect

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class TroopCountEffect : MPOnSpawnPerkEffect`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/TroopCountEffect.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TroopCountEffect lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/TroopCountEffect.cs. It is a public class, implementing/inheriting MPOnSpawnPerkEffect; the inheritance chain is TroopCountEffect → MPOnSpawnPerkEffect → MPOnSpawnPerkEffectBase → MPPerkEffectBase. It exposes 4 public/protected members: 2 methods, 1 fields, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopCountEffect lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`, inheritance chain TroopCountEffect → MPOnSpawnPerkEffect → MPOnSpawnPerkEffectBase → MPPerkEffectBase. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/TroopCountEffect.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TroopCountEffect` | `protected TroopCountEffect()` | constructor |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `GetExtraTroopCount` | `public override int GetExtraTroopCount()` | method |
| `StringType` | `protected static string StringType` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MPOnSpawnPerkEffect](../MPOnSpawnPerkEffect/)
- [same namespace AlternativeAttackDamageEffect](../AlternativeAttackDamageEffect/)
- [same namespace AlternativeEquipmentEffect](../AlternativeEquipmentEffect/)
- [same namespace ArmorEffect](../ArmorEffect/)
- [same namespace DamageEffect](../DamageEffect/)
