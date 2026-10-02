---
title: "IReadOnlyPerkObject"
description: "IReadOnlyPerkObject: a public interface in TaleWorlds.MountAndBlade; 14 exposed members (5 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs."
---
# IReadOnlyPerkObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IReadOnlyPerkObject`
**File:** `TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs`

## Overview

IReadOnlyPerkObject lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs. It is a public interface; the inheritance chain is IReadOnlyPerkObject. It exposes 14 public/protected members: 5 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IReadOnlyPerkObject is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IReadOnlyPerkObject. The surface is property-led (properties 9/14, methods 5/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `TextObject Name` | property |
| `Description` | `TextObject Description` | property |
| `List` | `List<string>GameModes` | property |
| `PerkListIndex` | `int PerkListIndex` | property |
| `IconId` | `string IconId` | property |
| `HeroIdleAnimOverride` | `string HeroIdleAnimOverride` | property |
| `HeroMountIdleAnimOverride` | `string HeroMountIdleAnimOverride` | property |
| `TroopIdleAnimOverride` | `string TroopIdleAnimOverride` | property |
| `TroopMountIdleAnimOverride` | `string TroopMountIdleAnimOverride` | property |
| `GetExtraTroopCount` | `int GetExtraTroopCount(bool isWarmup);` | method |
| `EquipmentElement>>GetAlternativeEquipments` | `List<ValueTuple<EquipmentIndex, EquipmentElement>>GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments, bool getAllEquipments = false);` | method |
| `GetDrivenPropertyBonusOnSpawn` | `float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue);` | method |
| `GetHitpoints` | `float GetHitpoints(bool isWarmup, bool isPlayer);` | method |
| `Clone` | `MPPerkObject Clone(MissionPeer peer);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
