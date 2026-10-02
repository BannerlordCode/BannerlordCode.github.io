---
title: "FireTrebuchet"
description: "FireTrebuchet: a public class in TaleWorlds.MountAndBlade, inheriting Trebuchet; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs."
---
# FireTrebuchet

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FireTrebuchet : Trebuchet`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs`

## Overview

FireTrebuchet lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs. It is a public class, implementing/inheriting Trebuchet; the inheritance chain is FireTrebuchet → Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FireTrebuchet is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects.Siege) the module directory; inheritance chain FireTrebuchet → Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Trebuchet](../Trebuchet)
- [same namespace BallistaSpawner](../BallistaSpawner)
- [same namespace BatteringRamSpawner](../BatteringRamSpawner)
- [same namespace ISpawnable](../ISpawnable)
- [same namespace MangonelSpawner](../MangonelSpawner)
