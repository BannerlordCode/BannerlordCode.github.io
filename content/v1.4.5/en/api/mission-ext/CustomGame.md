---
title: "CustomGame"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomGame`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomGame

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGame : GameType`
**Base:** `GameType`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs`

## Overview

`CustomGame` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomBattleBannerEffects` | `public CustomBattleBannerEffects CustomBattleBannerEffects { get; }` |

## Key Methods

### OnDestroy
`public override void OnDestroy()`

**Purpose:** Called when the `destroy` event is raised.

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**Purpose:** Called when the `state changed` event is raised.

## Usage Example

```csharp
var value = new CustomGame();
value.OnDestroy();
```

## See Also

- [Complete Class Catalog](../catalog)