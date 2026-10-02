---
title: "IMoveableSiegeWeapon"
description: "IMoveableSiegeWeapon: a public interface in TaleWorlds.MountAndBlade; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMoveableSiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMoveableSiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IMoveableSiegeWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs. It is a public interface; the inheritance chain is IMoveableSiegeWeapon. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMoveableSiegeWeapon lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IMoveableSiegeWeapon. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IMoveableSiegeWeapon.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MovementComponent` | `SiegeWeaponMovementComponent MovementComponent` | property |
| `HighlightPath` | `void HighlightPath();` | method |
| `SwitchGhostEntityMovementMode` | `void SwitchGhostEntityMovementMode(bool isGhostEnabled);` | method |
| `GetInitialFrame` | `MatrixFrame GetInitialFrame();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
