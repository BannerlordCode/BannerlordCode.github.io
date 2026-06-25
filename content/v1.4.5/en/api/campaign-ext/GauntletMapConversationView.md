---
title: "GauntletMapConversationView"
description: "Auto-generated class reference for GauntletMapConversationView."
---
# GauntletMapConversationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapConversationView : MapConversationView, IConversationStateHandler`
**Base:** `MapConversationView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapConversationView.cs`

## Overview

`GauntletMapConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapConversationView view = ...;
```

## See Also

- [Area Index](../)