---
title: "MissionFocusableObjectInformationProvider"
description: "Auto-generated class reference for MissionFocusableObjectInformationProvider."
---
# MissionFocusableObjectInformationProvider

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFocusableObjectInformationProvider`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs`

## Overview

`MissionFocusableObjectInformationProvider` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MissionFocusableObjectInformationProvider from the subsystem API first
MissionFocusableObjectInformationProvider missionFocusableObjectInformationProvider = ...;
missionFocusableObjectInformationProvider.OnFinalize();
```

### AddInfoCallback
`public void AddInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)`

**Purpose:** Adds `info callback` to the current collection or state.

```csharp
// Obtain an instance of MissionFocusableObjectInformationProvider from the subsystem API first
MissionFocusableObjectInformationProvider missionFocusableObjectInformationProvider = ...;
missionFocusableObjectInformationProvider.AddInfoCallback(callback);
```

### RemoveInfoCallback
`public void RemoveInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)`

**Purpose:** Removes `info callback` from the current collection or state.

```csharp
// Obtain an instance of MissionFocusableObjectInformationProvider from the subsystem API first
MissionFocusableObjectInformationProvider missionFocusableObjectInformationProvider = ...;
missionFocusableObjectInformationProvider.RemoveInfoCallback(callback);
```

### GetInteractionTexts
`public void GetInteractionTexts(Agent requesterAgent, IFocusable focusable, bool isInteractable, out FocusableObjectInformation focusableObjectInformation)`

**Purpose:** Reads and returns the `interaction texts` value held by the current object.

```csharp
// Obtain an instance of MissionFocusableObjectInformationProvider from the subsystem API first
MissionFocusableObjectInformationProvider missionFocusableObjectInformationProvider = ...;
missionFocusableObjectInformationProvider.GetInteractionTexts(requesterAgent, focusable, false, focusableObjectInformation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionFocusableObjectInformationProvider missionFocusableObjectInformationProvider = ...;
missionFocusableObjectInformationProvider.OnFinalize();
```

## See Also

- [Area Index](../)