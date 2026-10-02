---
title: "MissionNameMarkerFactory"
description: "MissionNameMarkerFactory: a public class in SandBox.ViewModelCollection.Missions.NameMarker; 9 exposed members (5 methods, 1 properties, 1 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionNameMarkerFactory

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public static class MissionNameMarkerFactory`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionNameMarkerFactory lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs. It is a public class; the inheritance chain is MissionNameMarkerFactory. It exposes 9 public/protected members: 5 methods, 1 properties, 1 fields, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNameMarkerFactory lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker`, inheritance chain MissionNameMarkerFactory. The surface is method-led (methods 5/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnProvidersChanged;` | `public static event Action OnProvidersChanged;` | event |
| `PushContext` | `public static MissionNameMarkerFactory.INameMarkerProviderContext PushContext(string name, bool addDefaultProviders)` | method |
| `PopContext` | `public static void PopContext(string contextId)` | method |
| `PopContext` | `public static void PopContext(MissionNameMarkerFactory.INameMarkerProviderContext context)` | method |
| `List` | `public static List<MissionNameMarkerProvider>CollectProviders()` | method |
| `UpdateProviders` | `public static void UpdateProviders(MissionNameMarkerProvider[]existingProviders, out List<MissionNameMarkerProvider>addedProviders, out List<MissionNameMarkerProvider>removedProviders)` | method |
| `DefaultContext` | `public static readonly MissionNameMarkerFactory.INameMarkerProviderContext DefaultContext` | field |
| `INameMarkerProviderContext` | `public interface INameMarkerProviderContext` | property |
| `INameMarkerProviderContext` | `public interface INameMarkerProviderContext` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionNameMarkerHelper](../MissionNameMarkerHelper/)
- [same namespace MissionNameMarkerProvider](../MissionNameMarkerProvider/)
- [same namespace MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/)
- [same namespace MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1/)
