---
title: "MapConversationView"
description: "Auto-generated class reference for MapConversationView."
---
# MapConversationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapConversationView.cs`

## Overview

`MapConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapConversationView view = ...;
```

## See Also

- [Area Index](../)