---
title: "StealthAreaUsePoint"
description: "StealthAreaUsePoint: a public class in SandBox.Objects.Usables, inheriting UsableMissionObject; 10 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/StealthAreaUsePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthAreaUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class StealthAreaUsePoint : UsableMissionObject`
**File:** `SandBox/Objects/Usables/StealthAreaUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

StealthAreaUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/StealthAreaUsePoint.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is StealthAreaUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthAreaUsePoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain StealthAreaUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/StealthAreaUsePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StealthAreaUsePoint` | `public StealthAreaUsePoint() : base(false)` | constructor |
| `OnInit` | `protected override void OnInit()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `DisableAgentAIs` | `public void DisableAgentAIs()` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `EnableStealthAreaUsePoint` | `public void EnableStealthAreaUsePoint()` | method |
| `DisableStealthAreaUsePoint` | `public void DisableStealthAreaUsePoint()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObject](../../mission-ext/UsableMissionObject/)
- [same namespace Chair](../Chair/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
