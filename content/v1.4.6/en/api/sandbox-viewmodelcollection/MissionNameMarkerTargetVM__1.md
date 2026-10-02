---
title: "MissionNameMarkerTargetVM<T>"
description: "MissionNameMarkerTargetVM<T>: a public class in SandBox.ViewModelCollection, inheriting MissionNameMarkerTargetBaseVM; 3 exposed members (1 methods, 1 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetVM.cs."
---
# MissionNameMarkerTargetVM<T>

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MissionNameMarkerTargetVM<T>: MissionNameMarkerTargetBaseVM`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetVM.cs`

## Overview

MissionNameMarkerTargetVM<T> lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetVM.cs. It is a public class (abstract), implementing/inheriting MissionNameMarkerTargetBaseVM; the inheritance chain is MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNameMarkerTargetVM<T> is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker) the module directory; inheritance chain MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Target` | `public T Target` | property |
| `MissionNameMarkerTargetVM` | `protected MissionNameMarkerTargetVM(T target)` | constructor |
| `Equals` | `public override bool Equals(MissionNameMarkerTargetBaseVM other)` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
- [same namespace MissionNameMarkerFactory](../MissionNameMarkerFactory)
- [same namespace MissionNameMarkerHelper](../MissionNameMarkerHelper)
- [same namespace MissionNameMarkerProvider](../MissionNameMarkerProvider)
- [same namespace MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
