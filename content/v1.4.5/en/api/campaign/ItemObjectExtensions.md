---
title: "ItemObjectExtensions"
description: "Auto-generated class reference for ItemObjectExtensions."
---
# ItemObjectExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ItemObjectExtensions`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/ItemObjectExtensions.cs`

## Overview

`ItemObjectExtensions` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemCategory
`public static ItemCategory GetItemCategory(this ItemObject item)`

**Purpose:** Reads and returns the `item category` value held by the current object.

```csharp
// Static call; no instance required
ItemObjectExtensions.GetItemCategory(item);
```

## Usage Example

```csharp
ItemObjectExtensions.GetItemCategory(item);
```

## See Also

- [Area Index](../)