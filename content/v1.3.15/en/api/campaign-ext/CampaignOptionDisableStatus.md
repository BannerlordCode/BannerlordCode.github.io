---
title: "CampaignOptionDisableStatus"
description: "Auto-generated class reference for CampaignOptionDisableStatus."
---
# CampaignOptionDisableStatus

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct CampaignOptionDisableStatus`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionDisableStatus.cs`

## Overview

`CampaignOptionDisableStatus` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `DisabledReason` | `public string DisabledReason { get; }` |
| `ValueIfDisabled` | `public float ValueIfDisabled { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CampaignOptionDisableStatus instance = ...;
```

## See Also

- [Area Index](../)