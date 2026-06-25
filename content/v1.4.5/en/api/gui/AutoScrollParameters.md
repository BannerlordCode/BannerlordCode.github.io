---
title: "AutoScrollParameters"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoScrollParameters`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AutoScrollParameters

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AutoScrollParameters`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ScrollablePanel.cs`

## Overview

`AutoScrollParameters` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new AutoScrollParameters();
```

## See Also

- [Complete Class Catalog](../catalog)