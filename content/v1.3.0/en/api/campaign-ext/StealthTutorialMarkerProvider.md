---
title: "StealthTutorialMarkerProvider"
description: "Auto-generated class reference for StealthTutorialMarkerProvider."
---
# StealthTutorialMarkerProvider

**Namespace:** StoryMode.View.MarkerProviders
**Module:** StoryMode.View
**Type:** `public class StealthTutorialMarkerProvider : MissionNameMarkerProvider`
**Base:** `MissionNameMarkerProvider`
**File:** `StoryMode.View/MarkerProviders/StealthTutorialMarkerProvider.cs`

## Overview

`StealthTutorialMarkerProvider` lives in `StoryMode.View.MarkerProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View.MarkerProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMarkers
`public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**Purpose:** Constructs a new markers entity and returns it to the caller.

```csharp
// Obtain an instance of StealthTutorialMarkerProvider from the subsystem API first
StealthTutorialMarkerProvider stealthTutorialMarkerProvider = ...;
stealthTutorialMarkerProvider.CreateMarkers(markers);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthTutorialMarkerProvider stealthTutorialMarkerProvider = ...;
stealthTutorialMarkerProvider.CreateMarkers(markers);
```

## See Also

- [Area Index](../)