---
title: "WatchTypes__TaleWorlds_MountAndBlade_GauntletUI_Widgets"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WatchTypes`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WatchTypes

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum WatchTypes`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs`

## Overview

`WatchTypes` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
WatchTypes example = WatchTypes.Value;
```

## See Also

- [Complete Class Catalog](../catalog)