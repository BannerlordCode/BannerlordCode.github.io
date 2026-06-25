---
title: "NavigationForcedScopeCollectionTargeter"
description: "Auto-generated class reference for NavigationForcedScopeCollectionTargeter."
---
# NavigationForcedScopeCollectionTargeter

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigationForcedScopeCollectionTargeter : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs`

## Overview

`NavigationForcedScopeCollectionTargeter` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseRootAsTarget` | `public bool UseRootAsTarget { get; set; }` |
| `IsCollectionEnabled` | `public bool IsCollectionEnabled { get; set; }` |
| `IsCollectionDisabled` | `public bool IsCollectionDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `CollectionParent` | `public Widget CollectionParent { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
NavigationForcedScopeCollectionTargeter instance = ...;
```

## See Also

- [Area Index](../)