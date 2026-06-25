---
title: "GameMenuOverlayFactory"
description: "Auto-generated class reference for GameMenuOverlayFactory."
---
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

**Purpose:** Registers provider with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
GameMenuOverlayFactory.RegisterProvider(provider);
```

### UnregisterProvider
`public static void UnregisterProvider(IGameMenuOverlayProvider provider)`

**Purpose:** Unregisters provider from the current system.

```csharp
// Static call; no instance required
GameMenuOverlayFactory.UnregisterProvider(provider);
```

### GetOverlay
`public static GameMenuOverlay GetOverlay(GameMenu.MenuOverlayType menuOverlayType)`

**Purpose:** Reads and returns the overlay value held by the this instance.

```csharp
// Static call; no instance required
GameMenuOverlayFactory.GetOverlay(menuOverlayType);
```

## Usage Example

```csharp
GameMenuOverlayFactory.RegisterProvider(provider);
```

## See Also

- [Area Index](../)