---
title: "NavigationPermissionItem"
description: "Auto-generated class reference for NavigationPermissionItem."
---
# NavigationPermissionItem

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct NavigationPermissionItem`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/NavigationPermissionItem.cs`

## Overview

`NavigationPermissionItem` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAuthorized` | `public bool IsAuthorized { get; }` |
| `ReasonString` | `public TextObject ReasonString { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
NavigationPermissionItem instance = ...;
```

## See Also

- [Area Index](../)