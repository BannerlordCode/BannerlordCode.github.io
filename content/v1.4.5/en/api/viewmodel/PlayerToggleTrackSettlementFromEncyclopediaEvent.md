---
title: "PlayerToggleTrackSettlementFromEncyclopediaEvent"
description: "Auto-generated class reference for PlayerToggleTrackSettlementFromEncyclopediaEvent."
---
# PlayerToggleTrackSettlementFromEncyclopediaEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerToggleTrackSettlementFromEncyclopediaEvent : EventBase`
**Base:** `EventBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia/PlayerToggleTrackSettlementFromEncyclopediaEvent.cs`

## Overview

`PlayerToggleTrackSettlementFromEncyclopediaEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCurrentlyTracked` | `public bool IsCurrentlyTracked { get; }` |
| `ToggledTrackedSettlement` | `public Settlement ToggledTrackedSettlement { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PlayerToggleTrackSettlementFromEncyclopediaEvent instance = ...;
```

## See Also

- [Area Index](../)