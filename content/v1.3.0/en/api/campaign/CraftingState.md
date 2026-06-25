---
title: "CraftingState"
description: "Auto-generated class reference for CraftingState."
---
# CraftingState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/CraftingState.cs`

## Overview

`CraftingState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; }` |
| `CraftingLogic` | `public Crafting CraftingLogic { get; }` |
| `Handler` | `public ICraftingStateHandler Handler { get; set; }` |

## Key Methods

### InitializeLogic
`public void InitializeLogic(Crafting newCraftingLogic, bool isReplacingWeaponClass = false)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by logic.

```csharp
// Obtain an instance of CraftingState from the subsystem API first
CraftingState craftingState = ...;
craftingState.InitializeLogic(newCraftingLogic, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingState craftingState = ...;
craftingState.InitializeLogic(newCraftingLogic, false);
```

## See Also

- [Area Index](../)