---
title: "FireTrebuchet"
description: "FireTrebuchet: a public class in TaleWorlds.MountAndBlade.Objects.Siege, inheriting Trebuchet; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FireTrebuchet

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FireTrebuchet : Trebuchet`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FireTrebuchet lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs. It is a public class, implementing/inheriting Trebuchet; the inheritance chain is FireTrebuchet → Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FireTrebuchet lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Siege`, inheritance chain FireTrebuchet → Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Trebuchet](../Trebuchet/)
- [same namespace BallistaSpawner](../BallistaSpawner/)
- [same namespace BatteringRamSpawner](../BatteringRamSpawner/)
- [same namespace ISpawnable](../ISpawnable/)
- [same namespace MangonelSpawner](../MangonelSpawner/)
