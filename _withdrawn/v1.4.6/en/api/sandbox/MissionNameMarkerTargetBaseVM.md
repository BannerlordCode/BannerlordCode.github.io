---
title: "MissionNameMarkerTargetBaseVM"
description: "MissionNameMarkerTargetBaseVM: a public class in SandBox.ViewModelCollection.Missions.NameMarker, inheriting ViewModel; 19 exposed members (6 methods, 12 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionNameMarkerTargetBaseVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MissionNameMarkerTargetBaseVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionNameMarkerTargetBaseVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 6 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNameMarkerTargetBaseVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker`, inheritance chain MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/19, methods 6/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionNameMarkerTargetBaseVM` | `public MissionNameMarkerTargetBaseVM()` | constructor |
| `UpdatePosition` | `public abstract void UpdatePosition(Camera missionCamera);` | method |
| `Equals` | `public abstract bool Equals(MissionNameMarkerTargetBaseVM other);` | method |
| `GetName` | `protected abstract TextObject GetName();` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdatePositionWith` | `protected void UpdatePositionWith(Camera missionCamera, Vec3 worldPosition)` | method |
| `SetEnabledState` | `public void SetEnabledState(bool enabled)` | method |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `Name` | `public string Name` | property |
| `IconType` | `public string IconType` | property |
| `NameType` | `public string NameType` | property |
| `Distance` | `public int Distance` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsTracked` | `public bool IsTracked` | property |
| `IsQuestMainStory` | `public bool IsQuestMainStory` | property |
| `IsEnemy` | `public bool IsEnemy` | property |
| `IsFriendly` | `public bool IsFriendly` | property |
| `IsPersistent` | `public bool IsPersistent` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionNameMarkerFactory](../MissionNameMarkerFactory/)
- [same namespace MissionNameMarkerHelper](../MissionNameMarkerHelper/)
- [same namespace MissionNameMarkerProvider](../MissionNameMarkerProvider/)
- [same namespace MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1/)
