---
title: "DefaultVillageTypes"
description: "Auto-generated class reference for DefaultVillageTypes."
---
# DefaultVillageTypes

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTypes`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/DefaultVillageTypes.cs`

## Overview

`DefaultVillageTypes` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConsumableRawItems` | `public IList<ItemObject> ConsumableRawItems { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefaultVillageTypes instance = ...;
```

## See Also

- [Area Index](../)