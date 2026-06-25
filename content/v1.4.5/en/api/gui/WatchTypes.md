---
title: "WatchTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WatchTypes`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WatchTypes

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum WatchTypes`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs`

## Overview

`WatchTypes` lives in `TaleWorlds.GauntletUI.ExtraWidgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.ExtraWidgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
WatchTypes example = WatchTypes.Value;
```

## See Also

- [Complete Class Catalog](../catalog)