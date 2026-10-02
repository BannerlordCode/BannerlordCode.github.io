---
title: "FlagCapturePoint"
description: "FlagCapturePoint: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject; 21 exposed members (14 methods, 5 properties, 2 fields). Source: TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs."
---
# FlagCapturePoint

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagCapturePoint : SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs`

## Overview

FlagCapturePoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs. It is a public class, implementing/inheriting SynchedMissionObject; the inheritance chain is FlagCapturePoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 21 public/protected members: 14 methods, 5 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FlagCapturePoint is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects) the module directory; inheritance chain FlagCapturePoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 14/21, properties 5/21), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Position` | `public Vec3 Position` | property |
| `FlagChar` | `public int FlagChar` | property |
| `IsContested` | `public bool IsContested` | property |
| `IsFullyRaised` | `public bool IsFullyRaised` | property |
| `IsDeactivated` | `public bool IsDeactivated` | property |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `ResetPointAsServer` | `public void ResetPointAsServer(uint defaultColor, uint defaultColor2)` | method |
| `RemovePointAsServer` | `public void RemovePointAsServer()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnAfterTick` | `public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)` | method |
| `SetMoveFlag` | `public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)` | method |
| `ChangeMovementSpeed` | `public void ChangeMovementSpeed(float speedMultiplier)` | method |
| `SetMoveNone` | `public void SetMoveNone()` | method |
| `SetVisibleWithAllSynched` | `public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)` | method |
| `SetTeamColorsWithAllSynched` | `public void SetTeamColorsWithAllSynched(uint color, uint color2)` | method |
| `GetFlagColor` | `public uint GetFlagColor()` | method |
| `GetFlagColor2` | `public uint GetFlagColor2()` | method |
| `GetFlagProgress` | `public float GetFlagProgress()` | method |
| `PointRadius` | `public const float PointRadius` | field |
| `RadiusMultiplierForContestedArea` | `public const float RadiusMultiplierForContestedArea` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SynchedMissionObject](../SynchedMissionObject)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings)
- [same namespace AreaMarker](../AreaMarker)
- [same namespace FightAreaMarker](../FightAreaMarker)
- [same namespace GenericMissionEvent](../GenericMissionEvent)
