---
title: "SiegeEngineTypes"
description: "Auto-generated class reference for SiegeEngineTypes."
---
# SiegeEngineTypes

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SiegeEngineTypes`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Extensions/SiegeEngineTypes.cs`

## Overview

`SiegeEngineTypes` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<SiegeEngineType> All { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SiegeEngineTypes instance = ...;
```

## See Also

- [Area Index](../)