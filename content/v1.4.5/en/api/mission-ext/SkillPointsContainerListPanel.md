---
title: "SkillPointsContainerListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillPointsContainerListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillPointsContainerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillPointsContainerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/SkillPointsContainerListPanel.cs`

## Overview

`SkillPointsContainerListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentFocusLevel` | `public int CurrentFocusLevel { get; set; }` |

## Usage Example

```csharp
var example = new SkillPointsContainerListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)