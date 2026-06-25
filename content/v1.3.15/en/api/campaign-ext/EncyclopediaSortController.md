---
title: "EncyclopediaSortController"
description: "Auto-generated class reference for EncyclopediaSortController."
---
# EncyclopediaSortController

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSortController`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaSortController.cs`

## Overview

`EncyclopediaSortController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `EncyclopediaSortController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Comparer` | `public EncyclopediaListItemComparerBase Comparer { get; }` |

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EncyclopediaSortController>();
```

## See Also

- [Area Index](../)