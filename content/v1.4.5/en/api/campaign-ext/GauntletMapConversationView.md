---
title: "GauntletMapConversationView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapConversationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapConversationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapConversationView : MapConversationView, IConversationStateHandler`
**Base:** `MapConversationView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapConversationView.cs`

## Overview

`GauntletMapConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMapConversationView();
```

## See Also

- [Complete Class Catalog](../catalog)