---
title: "ChairUsePoint"
description: "ChairUsePoint: a public class in SandBox.Objects.AnimationPoints, inheriting AnimationPoint; 14 exposed members (4 methods, 0 properties, 10 fields). Canonical bucket sandbox. Source: SandBox/Objects/AnimationPoints/ChairUsePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChairUsePoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class ChairUsePoint : AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/ChairUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ChairUsePoint lives in the SandBox module, source file SandBox/Objects/AnimationPoints/ChairUsePoint.cs. It is a public class, implementing/inheriting AnimationPoint; the inheritance chain is ChairUsePoint → AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 14 public/protected members: 4 methods, 10 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChairUsePoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.AnimationPoints`, inheritance chain ChairUsePoint → AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AnimationPoints/ChairUsePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetActionCodes` | `protected override void SetActionCodes()` | method |
| `ShouldUpdateOnEditorVariableChanged` | `protected override bool ShouldUpdateOnEditorVariableChanged(string variableName)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `NearTableLoopAction` | `public string NearTableLoopAction` | field |
| `NearTablePairLoopAction` | `public string NearTablePairLoopAction` | field |
| `DrinkLoopAction` | `public string DrinkLoopAction` | field |
| `DrinkPairLoopAction` | `public string DrinkPairLoopAction` | field |
| `DrinkRightHandItem` | `public string DrinkRightHandItem` | field |
| `DrinkLeftHandItem` | `public string DrinkLeftHandItem` | field |
| `EatLoopAction` | `public string EatLoopAction` | field |
| `EatPairLoopAction` | `public string EatPairLoopAction` | field |
| `EatRightHandItem` | `public string EatRightHandItem` | field |
| `EatLeftHandItem` | `public string EatLeftHandItem` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AnimationPoint](../AnimationPoint/)
- [same namespace AnimationPoint](../AnimationPoint/)
- [same namespace DynamicObjectAnimationPoint](../DynamicObjectAnimationPoint/)
- [same namespace PlayMusicPoint](../PlayMusicPoint/)
