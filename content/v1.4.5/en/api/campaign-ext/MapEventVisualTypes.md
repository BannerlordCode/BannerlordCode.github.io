---
title: "MapEventVisualTypes"
description: "Auto-generated class reference for MapEventVisualTypes."
---
# MapEventVisualTypes

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public enum MapEventVisualTypes`
**Base:** none
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## Overview

`MapEventVisualTypes` lives in `SandBox.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MapEventVisualTypes instance = ...;
```

## See Also

- [Area Index](../)