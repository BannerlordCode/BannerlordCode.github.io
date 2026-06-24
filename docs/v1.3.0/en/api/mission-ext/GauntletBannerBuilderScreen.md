<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletBannerBuilderScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletBannerBuilderScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletBannerBuilderScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs`

## Overview

`GauntletBannerBuilderScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## Key Methods

### Exit
`public void Exit(bool isCancel)`

**Purpose:** Handles logic related to `exit`.

## Usage Example

```csharp
var value = new GauntletBannerBuilderScreen();
value.Exit(false);
```

## See Also

- [Complete Class Catalog](../catalog)