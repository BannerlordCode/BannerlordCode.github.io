---
title: "GameMenuOverlayFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuOverlayFactory`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuOverlayFactory

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class GameMenuOverlayFactory`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayFactory.cs`

## Overview

`GameMenuOverlayFactory` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterProvider
`public static void RegisterProvider(IGameMenuOverlayProvider provider)`

**Purpose:** Handles logic related to `register provider`.

### UnregisterProvider
`public static void UnregisterProvider(IGameMenuOverlayProvider provider)`

**Purpose:** Handles logic related to `unregister provider`.

### GetOverlay
`public static GameMenuOverlay GetOverlay(GameMenu.MenuOverlayType menuOverlayType)`

**Purpose:** Gets the current value of `overlay`.

## Usage Example

```csharp
GameMenuOverlayFactory.RegisterProvider(provider);
```

## See Also

- [Complete Class Catalog](../catalog)