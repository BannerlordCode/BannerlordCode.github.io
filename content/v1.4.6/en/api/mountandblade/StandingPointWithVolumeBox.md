---
title: "StandingPointWithVolumeBox"
description: "StandingPointWithVolumeBox: a public class in TaleWorlds.MountAndBlade, inheriting StandingPointWithWeaponRequirement; 4 exposed members (2 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs."
---
# StandingPointWithVolumeBox

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPointWithVolumeBox : StandingPointWithWeaponRequirement`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs`

## Overview

StandingPointWithVolumeBox lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs. It is a public class, implementing/inheriting StandingPointWithWeaponRequirement; the inheritance chain is StandingPointWithVolumeBox → StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 4 public/protected members: 2 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandingPointWithVolumeBox is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain StandingPointWithVolumeBox → StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableScriptedFrameFlags` | `public override Agent.AIScriptedFrameFlags DisableScriptedFrameFlags` | property |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `VolumeBoxTag` | `public string VolumeBoxTag` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
