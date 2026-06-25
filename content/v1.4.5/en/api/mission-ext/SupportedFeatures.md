---
title: "SupportedFeatures"
description: "Auto-generated class reference for SupportedFeatures."
---
# SupportedFeatures

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SupportedFeatures`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/SupportedFeatures.cs`

## Overview

`SupportedFeatures` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SupportsFeatures
`public bool SupportsFeatures(Features feature)`

**Purpose:** **Purpose:** Executes the SupportsFeatures logic.

```csharp
// Obtain an instance of SupportedFeatures from the subsystem API first
SupportedFeatures supportedFeatures = ...;
var result = supportedFeatures.SupportsFeatures(feature);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SupportedFeatures supportedFeatures = ...;
supportedFeatures.SupportsFeatures(feature);
```

## See Also

- [Area Index](../)