---
title: "EducationState"
description: "Auto-generated class reference for EducationState."
---
# EducationState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/EducationState.cs`

## Overview

`EducationState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; }` |
| `Child` | `public Hero Child { get; }` |
| `Handler` | `public IEducationStateHandler Handler { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EducationState instance = ...;
```

## See Also

- [Area Index](../)