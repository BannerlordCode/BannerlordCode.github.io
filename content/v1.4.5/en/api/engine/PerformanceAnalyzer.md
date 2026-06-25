---
title: "PerformanceAnalyzer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerformanceAnalyzer`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerformanceAnalyzer

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class PerformanceAnalyzer`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/PerformanceAnalyzer.cs`

## Overview

`PerformanceAnalyzer` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddFps
`public void AddFps(float fps, float main, float renderer)`

**Purpose:** Adds `fps` to the current collection or state.

### Write
`public void Write(XmlNode node, XmlDocument document)`

**Purpose:** Handles logic related to `write`.

### Start
`public void Start(string name)`

**Purpose:** Handles logic related to `start`.

### End
`public void End()`

**Purpose:** Handles logic related to `end`.

### FinalizeAndWrite
`public void FinalizeAndWrite(string filePath)`

**Purpose:** Handles logic related to `finalize and write`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new PerformanceAnalyzer();
value.AddFps(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)