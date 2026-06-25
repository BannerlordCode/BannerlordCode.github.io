---
title: "Highlights"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Highlights`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Highlights

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Highlights`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/Highlights.cs`

## Overview

`Highlights` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OpenGroup
`public static void OpenGroup(string id)`

**Purpose:** Handles logic related to `open group`.

### CloseGroup
`public static void CloseGroup(string id, bool destroy = false)`

**Purpose:** Handles logic related to `close group`.

### SaveScreenshot
`public static void SaveScreenshot(string highlightId, string groupId)`

**Purpose:** Saves `screenshot` data.

### SaveVideo
`public static void SaveVideo(string highlightId, string groupId, int startDelta, int endDelta)`

**Purpose:** Saves `video` data.

### OpenSummary
`public static void OpenSummary(List<string> groups)`

**Purpose:** Handles logic related to `open summary`.

### AddHighlight
`public static void AddHighlight(string id, string name)`

**Purpose:** Adds `highlight` to the current collection or state.

### RemoveHighlight
`public static void RemoveHighlight(string id)`

**Purpose:** Removes `highlight` from the current collection or state.

## Usage Example

```csharp
Highlights.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)