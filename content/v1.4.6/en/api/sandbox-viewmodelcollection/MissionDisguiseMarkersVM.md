---
title: "MissionDisguiseMarkersVM"
description: "MissionDisguiseMarkersVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs."
---
# MissionDisguiseMarkersVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionDisguiseMarkersVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs`

## Overview

MissionDisguiseMarkersVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionDisguiseMarkersVM → ViewModel. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDisguiseMarkersVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.MainAgentDetection) the module directory; inheritance chain MissionDisguiseMarkersVM → ViewModel. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionDisguiseMarkersVM` | `public MissionDisguiseMarkersVM()` | constructor |
| `TargetAgent` | `public MissionDisguiseMarkerItemVM TargetAgent` | property |
| `MBBindingList` | `public MBBindingList<MissionDisguiseMarkerItemVM>HostileAgents` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MainAgentDetectionVM](../MainAgentDetectionVM)
- [same namespace MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)
- [same namespace MissionLosingTargetVM](../MissionLosingTargetVM)
