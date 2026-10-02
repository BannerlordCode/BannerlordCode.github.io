---
title: "BoundaryWallView"
description: "BoundaryWallView: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BoundaryWallView.cs."
---
# BoundaryWallView

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## Overview

BoundaryWallView lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BoundaryWallView.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is BoundaryWallView → ScriptComponentBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoundaryWallView is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BoundaryWallView → ScriptComponentBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BoundaryWallView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `CreateBoundaryMesh` | `public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2>boundaryPoints, uint meshColor = 536918784U)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
