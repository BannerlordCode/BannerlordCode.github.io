---
title: "MissionNameMarkerProvider"
description: "MissionNameMarkerProvider: a public class in SandBox.ViewModelCollection; 9 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs."
---
# MissionNameMarkerProvider

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MissionNameMarkerProvider`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs`

## Overview

MissionNameMarkerProvider lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs. It is a public class (abstract); the inheritance chain is MissionNameMarkerProvider. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNameMarkerProvider is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker) the module directory; inheritance chain MissionNameMarkerProvider. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionNameMarkerProvider` | `public MissionNameMarkerProvider()` | constructor |
| `CreateMarkers` | `public abstract void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers);` | method |
| `Initialize` | `public void Initialize(Mission mission, Action onSetMarkersDirty)` | method |
| `Destroy` | `public void Destroy(Mission mission)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `OnInitialize` | `protected virtual void OnInitialize(Mission mission)` | method |
| `OnDestroy` | `protected virtual void OnDestroy(Mission mission)` | method |
| `OnTick` | `protected virtual void OnTick(float dt)` | method |
| `SetMarkersDirty` | `protected void SetMarkersDirty()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionNameMarkerFactory](../MissionNameMarkerFactory)
- [same namespace MissionNameMarkerHelper](../MissionNameMarkerHelper)
- [same namespace MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
- [same namespace MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
