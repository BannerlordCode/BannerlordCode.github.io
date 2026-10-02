---
title: "ResetAnimationOnStopUsageComponent"
description: "ResetAnimationOnStopUsageComponent: a public class in TaleWorlds.MountAndBlade, inheriting UsableMissionObjectComponent; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs."
---
# ResetAnimationOnStopUsageComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## Overview

ResetAnimationOnStopUsageComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs. It is a public class, implementing/inheriting UsableMissionObjectComponent; the inheritance chain is ResetAnimationOnStopUsageComponent → UsableMissionObjectComponent. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ResetAnimationOnStopUsageComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ResetAnimationOnStopUsageComponent → UsableMissionObjectComponent. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResetAnimationOnStopUsageComponent` | `public ResetAnimationOnStopUsageComponent(ActionIndexCache successfulResetActionCode, bool alwaysResetWithAction)` | constructor |
| `UpdateSuccessfulResetAction` | `public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)` | method |
| `OnUseStopped` | `protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMissionObjectComponent](../UsableMissionObjectComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
