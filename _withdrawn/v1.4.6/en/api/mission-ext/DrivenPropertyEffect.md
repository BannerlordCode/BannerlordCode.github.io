---
title: "DrivenPropertyEffect"
description: "DrivenPropertyEffect: a public class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects, inheriting MPPerkEffect; 5 exposed members (3 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/DrivenPropertyEffect.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DrivenPropertyEffect

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class DrivenPropertyEffect : MPPerkEffect`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/DrivenPropertyEffect.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DrivenPropertyEffect lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/DrivenPropertyEffect.cs. It is a public class, implementing/inheriting MPPerkEffect; the inheritance chain is DrivenPropertyEffect → MPPerkEffect → MPPerkEffectBase. It exposes 5 public/protected members: 3 methods, 1 fields, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DrivenPropertyEffect lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`, inheritance chain DrivenPropertyEffect → MPPerkEffect → MPPerkEffectBase. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/DrivenPropertyEffect.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DrivenPropertyEffect` | `protected DrivenPropertyEffect()` | constructor |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `OnUpdate` | `public override void OnUpdate(Agent agent, bool newState)` | method |
| `GetDrivenPropertyBonus` | `public override float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)` | method |
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
