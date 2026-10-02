---
title: "DebugExtensions"
description: "DebugExtensions: a public class in TaleWorlds.MountAndBlade; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DebugExtensions.cs."
---
# DebugExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class DebugExtensions`
**File:** `TaleWorlds.MountAndBlade/DebugExtensions.cs`

## Overview

DebugExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DebugExtensions.cs. It is a public class; the inheritance chain is DebugExtensions. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DebugExtensions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DebugExtensions. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DebugExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RenderDebugCircleOnTerrain` | `public static void RenderDebugCircleOnTerrain(Scene scene, MatrixFrame frame, float radius, uint color, bool depthCheck = true, bool isDotted = false)` | method |
| `RenderDebugArcOnTerrain` | `public static void RenderDebugArcOnTerrain(Scene scene, MatrixFrame frame, float radius, float beginAngle, float endAngle, uint color, bool depthCheck = true, bool isDotted = false)` | method |
| `RenderDebugLineOnTerrain` | `public static void RenderDebugLineOnTerrain(Scene scene, Vec3 position, Vec3 direction, uint color, bool depthCheck = true, float time = 0f, bool isDotted = false, float pointDensity = 1f)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
