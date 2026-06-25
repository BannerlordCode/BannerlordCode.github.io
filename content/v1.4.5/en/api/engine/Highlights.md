---
title: "Highlights"
description: "Auto-generated class reference for Highlights."
---
# Highlights

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Highlights`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Highlights.cs`

## Overview

`Highlights` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
Highlights.Initialize();
```

### OpenGroup
`public static void OpenGroup(string id)`

**Purpose:** Opens the resource or UI associated with `group`.

```csharp
// Static call; no instance required
Highlights.OpenGroup("example");
```

### CloseGroup
`public static void CloseGroup(string id, bool destroy = false)`

**Purpose:** Closes the resource or UI associated with `group`.

```csharp
// Static call; no instance required
Highlights.CloseGroup("example", false);
```

### SaveScreenshot
`public static void SaveScreenshot(string highlightId, string groupId)`

**Purpose:** Writes `screenshot` to persistent storage or a stream.

```csharp
// Static call; no instance required
Highlights.SaveScreenshot("example", "example");
```

### SaveVideo
`public static void SaveVideo(string highlightId, string groupId, int startDelta, int endDelta)`

**Purpose:** Writes `video` to persistent storage or a stream.

```csharp
// Static call; no instance required
Highlights.SaveVideo("example", "example", 0, 0);
```

### OpenSummary
`public static void OpenSummary(List<string> groups)`

**Purpose:** Opens the resource or UI associated with `summary`.

```csharp
// Static call; no instance required
Highlights.OpenSummary(groups);
```

### AddHighlight
`public static void AddHighlight(string id, string name)`

**Purpose:** Adds `highlight` to the current collection or state.

```csharp
// Static call; no instance required
Highlights.AddHighlight("example", "example");
```

### RemoveHighlight
`public static void RemoveHighlight(string id)`

**Purpose:** Removes `highlight` from the current collection or state.

```csharp
// Static call; no instance required
Highlights.RemoveHighlight("example");
```

## Usage Example

```csharp
Highlights.Initialize();
```

## See Also

- [Area Index](../)