---
title: "TrajectoryVisualizer"
description: "TrajectoryVisualizer: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs."
---
# TrajectoryVisualizer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TrajectoryVisualizer : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs`

## Overview

TrajectoryVisualizer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is TrajectoryVisualizer → ScriptComponentBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrajectoryVisualizer is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TrajectoryVisualizer → ScriptComponentBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetTrajectoryParams` | `public void SetTrajectoryParams(Vec3 missileShootingPositionOffset, float missileSpeed, float verticalAngleMinInDegrees, float verticalAngleMaxInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
