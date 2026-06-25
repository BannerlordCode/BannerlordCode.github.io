---
title: "TroopTradeDifference"
description: "Auto-generated class reference for TroopTradeDifference."
---
# TroopTradeDifference

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct TroopTradeDifference`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/TroopTradeDifference.cs`

## Overview

`TroopTradeDifference` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Troop` | `public CharacterObject Troop { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `FromCount` | `public int FromCount { get; }` |
| `ToCount` | `public int ToCount { get; }` |
| `DifferenceCount` | `public int DifferenceCount { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Empty` | `public static TroopTradeDifference Empty { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TroopTradeDifference instance = ...;
```

## See Also

- [Area Index](../)