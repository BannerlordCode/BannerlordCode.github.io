---
title: "EncyclopediaPageChangedEvent"
description: "Auto-generated class reference for EncyclopediaPageChangedEvent."
---
# EncyclopediaPageChangedEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaPageChangedEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaPageChangedEvent.cs`

## Overview

`EncyclopediaPageChangedEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewPage` | `public EncyclopediaPages NewPage { get; }` |
| `NewPageHasHiddenInformation` | `public bool NewPageHasHiddenInformation { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EncyclopediaPageChangedEvent instance = ...;
```

## See Also

- [Area Index](../)