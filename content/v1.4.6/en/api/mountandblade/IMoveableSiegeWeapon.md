---
title: "IMoveableSiegeWeapon"
description: "IMoveableSiegeWeapon: a public interface in TaleWorlds.MountAndBlade; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs."
---
# IMoveableSiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMoveableSiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs`

## Overview

IMoveableSiegeWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs. It is a public interface; the inheritance chain is IMoveableSiegeWeapon. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMoveableSiegeWeapon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IMoveableSiegeWeapon. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MovementComponent` | `SiegeWeaponMovementComponent MovementComponent` | property |
| `HighlightPath` | `void HighlightPath();` | method |
| `SwitchGhostEntityMovementMode` | `void SwitchGhostEntityMovementMode(bool isGhostEnabled);` | method |
| `GetInitialFrame` | `MatrixFrame GetInitialFrame();` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
