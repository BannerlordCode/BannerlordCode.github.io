<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletVideoPlaybackScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletVideoPlaybackScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletVideoPlaybackScreen : VideoPlaybackScreen`
**Base:** `VideoPlaybackScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs`

## Overview

`GauntletVideoPlaybackScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GauntletVideoPlaybackScreen();
```

## See Also

- [Complete Class Catalog](../catalog)