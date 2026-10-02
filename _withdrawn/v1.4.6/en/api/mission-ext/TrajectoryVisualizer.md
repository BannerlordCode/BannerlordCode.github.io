---
title: "TrajectoryVisualizer"
description: "TrajectoryVisualizer: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TrajectoryVisualizer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TrajectoryVisualizer : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TrajectoryVisualizer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is TrajectoryVisualizer → ScriptComponentBehavior → DotNetObject. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrajectoryVisualizer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TrajectoryVisualizer → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetTrajectoryParams` | `public void SetTrajectoryParams(Vec3 missileShootingPositionOffset, float missileSpeed, float verticalAngleMinInDegrees, float verticalAngleMaxInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
