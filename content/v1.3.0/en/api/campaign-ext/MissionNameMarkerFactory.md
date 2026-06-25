---
title: "MissionNameMarkerFactory"
description: "Auto-generated class reference for MissionNameMarkerFactory."
---
# MissionNameMarkerFactory

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public static class MissionNameMarkerFactory`
**Base:** none
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs`

## Overview

`MissionNameMarkerFactory` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsDefaultContext` | `public bool IsDefaultContext { get; }` |
| `ProviderTypes` | `public List<Type> ProviderTypes { get; }` |

## Key Methods

### PushContext
`public static MissionNameMarkerFactory.INameMarkerProviderContext PushContext(string name, bool addDefaultProviders)`

**Purpose:** Executes the PushContext logic.

```csharp
// Static call; no instance required
MissionNameMarkerFactory.PushContext("example", false);
```

### PopContext
`public static void PopContext(string contextId)`

**Purpose:** Executes the PopContext logic.

```csharp
// Static call; no instance required
MissionNameMarkerFactory.PopContext("example");
```

### PopContext
`public static void PopContext(MissionNameMarkerFactory.INameMarkerProviderContext context)`

**Purpose:** Executes the PopContext logic.

```csharp
// Static call; no instance required
MissionNameMarkerFactory.PopContext(context);
```

### CollectProviders
`public static List<MissionNameMarkerProvider> CollectProviders()`

**Purpose:** Executes the CollectProviders logic.

```csharp
// Static call; no instance required
MissionNameMarkerFactory.CollectProviders();
```

### UpdateProviders
`public static void UpdateProviders(MissionNameMarkerProvider existingProviders, out List<MissionNameMarkerProvider> addedProviders, out List<MissionNameMarkerProvider> removedProviders)`

**Purpose:** Recalculates and stores the latest representation of providers.

```csharp
// Static call; no instance required
MissionNameMarkerFactory.UpdateProviders(existingProviders, addedProviders, removedProviders);
```

### AddProvider
`public void AddProvider(Type tProvider)`

**Purpose:** Adds provider to the current collection or state.

```csharp
// Obtain an instance of MissionNameMarkerFactory from the subsystem API first
MissionNameMarkerFactory missionNameMarkerFactory = ...;
missionNameMarkerFactory.AddProvider(tProvider);
```

### RemoveProvider
`public void RemoveProvider(Type tProvider)`

**Purpose:** Removes provider from the current collection or state.

```csharp
// Obtain an instance of MissionNameMarkerFactory from the subsystem API first
MissionNameMarkerFactory missionNameMarkerFactory = ...;
missionNameMarkerFactory.RemoveProvider(tProvider);
```

## Usage Example

```csharp
MissionNameMarkerFactory.PushContext("example", false);
```

## See Also

- [Area Index](../)