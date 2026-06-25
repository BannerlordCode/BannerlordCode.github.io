---
title: "CraftingOrderTabOpenedEvent"
description: "Auto-generated class reference for CraftingOrderTabOpenedEvent."
---
# CraftingOrderTabOpenedEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderTabOpenedEvent : EventBase`
**Base:** `EventBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/CraftingOrderTabOpenedEvent.cs`

## Overview

`CraftingOrderTabOpenedEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOpen` | `public bool IsOpen { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CraftingOrderTabOpenedEvent instance = ...;
```

## See Also

- [Area Index](../)