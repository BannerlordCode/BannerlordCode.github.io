---
title: "TutorialAnimState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialAnimState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialAnimState

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum TutorialAnimState`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/PartyNameplateWidget.cs`

## Overview

`TutorialAnimState` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
TutorialAnimState example = TutorialAnimState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)