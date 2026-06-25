---
title: "SupportedFeatures"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SupportedFeatures`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SupportedFeatures

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SupportedFeatures`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/SupportedFeatures.cs`

## Overview

`SupportedFeatures` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SupportsFeatures
`public bool SupportsFeatures(Features feature)`

**Purpose:** Handles logic related to `supports features`.

## Usage Example

```csharp
var value = new SupportedFeatures();
value.SupportsFeatures(feature);
```

## See Also

- [Complete Class Catalog](../catalog)