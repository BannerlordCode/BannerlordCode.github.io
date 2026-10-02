---
title: "IOnSpawnPerkEffect"
description: "IOnSpawnPerkEffect: a public interface in TaleWorlds.MountAndBlade; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IOnSpawnPerkEffect.cs."
---
# IOnSpawnPerkEffect

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IOnSpawnPerkEffect`
**File:** `TaleWorlds.MountAndBlade/IOnSpawnPerkEffect.cs`

## Overview

IOnSpawnPerkEffect lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IOnSpawnPerkEffect.cs. It is a public interface; the inheritance chain is IOnSpawnPerkEffect. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IOnSpawnPerkEffect is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IOnSpawnPerkEffect. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IOnSpawnPerkEffect.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetExtraTroopCount` | `int GetExtraTroopCount();` | method |
| `EquipmentElement>>GetAlternativeEquipments` | `List<ValueTuple<EquipmentIndex, EquipmentElement>>GetAlternativeEquipments(bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments, bool getAll = false);` | method |
| `GetDrivenPropertyBonusOnSpawn` | `float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue);` | method |
| `GetHitpoints` | `float GetHitpoints(bool isPlayer);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
