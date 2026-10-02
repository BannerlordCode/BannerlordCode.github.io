---
title: "DisguiseMissionUsePoint"
description: "DisguiseMissionUsePoint: a public class in SandBox.Objects.Usables, inheriting UsableMissionObject; 8 exposed members (6 methods, 0 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/DisguiseMissionUsePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisguiseMissionUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class DisguiseMissionUsePoint : UsableMissionObject`
**File:** `SandBox/Objects/Usables/DisguiseMissionUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

DisguiseMissionUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/DisguiseMissionUsePoint.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is DisguiseMissionUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 8 public/protected members: 6 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisguiseMissionUsePoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain DisguiseMissionUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/DisguiseMissionUsePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DisguiseMissionUsePoint` | `public DisguiseMissionUsePoint() : base(false)` | constructor |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | method |
| `InteractionPointDistance` | `public const float InteractionPointDistance` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObject](../../mission-ext/UsableMissionObject/)
- [same namespace Chair](../Chair/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
- [same namespace Passage](../Passage/)
