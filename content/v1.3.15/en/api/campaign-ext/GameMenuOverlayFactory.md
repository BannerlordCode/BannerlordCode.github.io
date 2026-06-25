---
title: "GameMenuOverlayFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuOverlayFactory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuOverlayFactory

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class GameMenuOverlayFactory`
**Area:** campaign-ext

## Overview

`GameMenuOverlayFactory` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
GameMenuOverlayFactory.RegisterProvider(provider);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
