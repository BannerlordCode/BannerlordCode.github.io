---
title: "TroopItemComparer"
description: "Auto-generated class reference for TroopItemComparer."
---
# TroopItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopItemComparer : IComparer<TroopSelectionItemVM>`
**Base:** `IComparer<TroopSelectionItemVM>`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection/TroopItemComparer.cs`

## Overview

`TroopItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(TroopSelectionItemVM x, TroopSelectionItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of TroopItemComparer from the subsystem API first
TroopItemComparer troopItemComparer = ...;
var result = troopItemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopItemComparer troopItemComparer = ...;
troopItemComparer.Compare(x, y);
```

## See Also

- [Area Index](../)