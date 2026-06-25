---
title: "EncyclopediaListItem"
description: "Auto-generated class reference for EncyclopediaListItem."
---
# EncyclopediaListItem

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EncyclopediaListItem`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaListItem.cs`

## Overview

`EncyclopediaListItem` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EncyclopediaListItem
`public struct EncyclopediaListItem(object obj, string name, string description, string id, string typeName, bool playerCanSeeValues, Action onShowTooltip = null)`

**Purpose:** **Purpose:** Executes the EncyclopediaListItem logic.

```csharp
// Obtain an instance of EncyclopediaListItem from the subsystem API first
EncyclopediaListItem encyclopediaListItem = ...;
var result = encyclopediaListItem.EncyclopediaListItem(obj, "example", "example", "example", "example", false, null);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListItem encyclopediaListItem = ...;
encyclopediaListItem.EncyclopediaListItem(obj, "example", "example", "example", "example", false, null);
```

## See Also

- [Area Index](../)