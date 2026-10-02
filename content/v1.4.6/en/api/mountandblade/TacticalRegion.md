---
title: "TacticalRegion"
description: "TacticalRegion: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 9 exposed members (4 methods, 3 properties, 1 fields). Source: TaleWorlds.MountAndBlade/TacticalRegion.cs."
---
# TacticalRegion

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticalRegion : MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalRegion.cs`

## Overview

TacticalRegion lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticalRegion.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is TacticalRegion → MissionObject → ScriptComponentBehavior. It exposes 9 public/protected members: 4 methods, 3 properties, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticalRegion is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TacticalRegion → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 4/9, properties 3/9), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticalRegion.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Position` | `public WorldPosition Position` | property |
| `List` | `public List<TacticalPosition>LinkedTacticalPositions` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `radius` | `public float radius` | field |
| `TacticalRegionTypeEnum` | `public enum TacticalRegionTypeEnum` | property |
| `TacticalRegionTypeEnum` | `public enum TacticalRegionTypeEnum` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionObject](../MissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
