---
title: "INameMarkerProviderContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INameMarkerProviderContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# INameMarkerProviderContext

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public interface INameMarkerProviderContext`
**Area:** campaign-ext

## Overview

`INameMarkerProviderContext` lives in `SandBox.ViewModelCollection.Missions.NameMarker`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsDefaultContext` | `public bool IsDefaultContext { get; }` |
| `ProviderTypes` | `public List<Type> ProviderTypes { get; }` |

## Key Methods

### AddProvider
`public void AddProvider(Type tProvider)`

**Purpose:** Adds `provider` to the current collection or state.

### RemoveProvider
`public void RemoveProvider(Type tProvider)`

**Purpose:** Removes `provider` from the current collection or state.

### PushContext
`public static INameMarkerProviderContext PushContext(string name, bool addDefaultProviders)`

**Purpose:** Handles logic related to `push context`.

### PopContext
`public static void PopContext(string contextId)`

**Purpose:** Handles logic related to `pop context`.

### PopContext
`public static void PopContext(INameMarkerProviderContext context)`

**Purpose:** Handles logic related to `pop context`.

### CollectProviders
`public static List<MissionNameMarkerProvider> CollectProviders()`

**Purpose:** Handles logic related to `collect providers`.

### UpdateProviders
`public static void UpdateProviders(MissionNameMarkerProvider existingProviders, out List<MissionNameMarkerProvider> addedProviders, out List<MissionNameMarkerProvider> removedProviders)`

**Purpose:** Updates the state or data of `providers`.

## Usage Example

```csharp
INameMarkerProviderContext implementation = GetNameMarkerProviderContextImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
