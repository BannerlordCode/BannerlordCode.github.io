---
title: "Threat"
description: "Threat: a public class in TaleWorlds.MountAndBlade; 7 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Threat.cs."
---
# Threat

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Threat`
**File:** `TaleWorlds.MountAndBlade/Threat.cs`

## Overview

Threat lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Threat.cs. It is a public class; the inheritance chain is Threat. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Threat is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Threat. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Threat.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Name` | `public string Name` | property |
| `TargetingPosition` | `public Vec3 TargetingPosition` | property |
| `Vec3>ComputeGlobalTargetingBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalTargetingBoundingBoxMinMax()` | method |
| `GetGlobalVelocity` | `public Vec3 GetGlobalVelocity()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `DisplayDebugInfo` | `public void DisplayDebugInfo()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
