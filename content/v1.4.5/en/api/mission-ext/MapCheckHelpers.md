---
title: "MapCheckHelpers"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapCheckHelpers`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapCheckHelpers

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MapCheckHelpers`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MapCheckHelpers.cs`

## Overview

`MapCheckHelpers` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new MapCheckHelpers();
```

## See Also

- [Complete Class Catalog](../catalog)