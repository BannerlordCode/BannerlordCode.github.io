---
title: "PlayMusicPoint"
description: "PlayMusicPoint: a public class in SandBox.Objects.AnimationPoints, inheriting AnimationPoint; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/AnimationPoints/PlayMusicPoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayMusicPoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class PlayMusicPoint : AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PlayMusicPoint lives in the SandBox module, source file SandBox/Objects/AnimationPoints/PlayMusicPoint.cs. It is a public class, implementing/inheriting AnimationPoint; the inheritance chain is PlayMusicPoint → AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayMusicPoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.AnimationPoints`, inheritance chain PlayMusicPoint → AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AnimationPoints/PlayMusicPoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `StartLoop` | `public void StartLoop(SoundEvent trackEvent)` | method |
| `EndLoop` | `public void EndLoop()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `ChangeInstrument` | `public void ChangeInstrument(Tuple<InstrumentData, float>instrument)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AnimationPoint](../AnimationPoint/)
- [same namespace AnimationPoint](../AnimationPoint/)
- [same namespace ChairUsePoint](../ChairUsePoint/)
- [same namespace DynamicObjectAnimationPoint](../DynamicObjectAnimationPoint/)
