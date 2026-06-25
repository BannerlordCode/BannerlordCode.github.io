---
title: "SceneLevelItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneLevelItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneLevelItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneLevelItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/SceneLevelItemVM.cs`

## Overview

`SceneLevelItemVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Level` | `public int Level { get; }` |

## Usage Example

```csharp
var value = new SceneLevelItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)