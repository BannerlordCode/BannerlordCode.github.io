---
title: "Feature"
description: "Auto-generated class reference for Feature."
---
# Feature

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Feature : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade.Diamond/Feature.cs`

## Overview

`Feature` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FeatureFlag` | `public Features FeatureFlag { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
Feature instance = ...;
```

## See Also

- [Area Index](../)