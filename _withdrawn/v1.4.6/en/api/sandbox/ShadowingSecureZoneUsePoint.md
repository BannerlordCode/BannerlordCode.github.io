---
title: "ShadowingSecureZoneUsePoint"
description: "ShadowingSecureZoneUsePoint: a public class in SandBox.Objects.Usables, inheriting UsableMissionObject; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShadowingSecureZoneUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class ShadowingSecureZoneUsePoint : UsableMissionObject`
**File:** `SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ShadowingSecureZoneUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is ShadowingSecureZoneUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShadowingSecureZoneUsePoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain ShadowingSecureZoneUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ShadowingSecureZoneUsePoint` | `public ShadowingSecureZoneUsePoint() : base(false)` | constructor |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObject](../../mission-ext/UsableMissionObject/)
- [same namespace Chair](../Chair/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
