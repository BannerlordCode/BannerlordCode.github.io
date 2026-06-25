---
title: "GoldGainOnAssistEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GoldGainOnAssistEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GoldGainOnAssistEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GoldGainOnAssistEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/GoldGainOnAssistEffect.cs`

## Overview

`GoldGainOnAssistEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGoldOnAssist
`public override int GetGoldOnAssist()`

**Purpose:** Gets the current value of `gold on assist`.

## Usage Example

```csharp
var value = new GoldGainOnAssistEffect();
value.GetGoldOnAssist();
```

## See Also

- [Complete Class Catalog](../catalog)