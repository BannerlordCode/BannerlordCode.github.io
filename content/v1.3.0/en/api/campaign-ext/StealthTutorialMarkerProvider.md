---
title: "StealthTutorialMarkerProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthTutorialMarkerProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `markers` instance or object.

## Usage Example

```csharp
var value = new StealthTutorialMarkerProvider();
value.CreateMarkers(markers);
```

## See Also

- [Complete Class Catalog](../catalog)