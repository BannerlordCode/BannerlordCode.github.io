---
title: "GauntletMapCampaignOptionsView"
description: "Auto-generated class reference for GauntletMapCampaignOptionsView."
---
# GauntletMapCampaignOptionsView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapCampaignOptionsView : MapCampaignOptionsView`
**Base:** `MapCampaignOptionsView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapCampaignOptionsView.cs`

## Overview

`GauntletMapCampaignOptionsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapCampaignOptionsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapCampaignOptionsView view = ...;
```

## See Also

- [Area Index](../)