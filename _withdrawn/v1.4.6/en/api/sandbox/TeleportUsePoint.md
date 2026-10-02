---
title: "TeleportUsePoint"
description: "TeleportUsePoint: a public class in SandBox.Objects, inheriting StandingPoint; 13 exposed members (9 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/TeleportUsePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TeleportUsePoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class TeleportUsePoint : StandingPoint`
**File:** `SandBox/Objects/TeleportUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TeleportUsePoint lives in the SandBox module, source file SandBox/Objects/TeleportUsePoint.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is TeleportUsePoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 13 public/protected members: 9 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeleportUsePoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects`, inheritance chain TeleportUsePoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 9/13, properties 2/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/TeleportUsePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HasAIMovingTo` | `public override bool HasAIMovingTo` | property |
| `TeleportUsePoint` | `public TeleportUsePoint()` | constructor |
| `IsAIMovingTo` | `public override bool IsAIMovingTo(Agent agent)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `Deactivate` | `public void Deactivate()` | method |
| `Activate` | `public void Activate()` | method |
| `OnFocusGain` | `public override void OnFocusGain(Agent userAgent)` | method |
| `TeleportType` | `public enum TeleportType` | property |
| `TeleportType` | `public enum TeleportType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface StandingPoint](../../mission-ext/StandingPoint/)
- [same namespace CheckpointArea](../CheckpointArea/)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox/)
