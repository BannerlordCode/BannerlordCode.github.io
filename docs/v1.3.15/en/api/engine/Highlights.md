<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Highlights`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Highlights

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Highlights`
**Area:** engine

## Overview

`Highlights` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
Highlights.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
