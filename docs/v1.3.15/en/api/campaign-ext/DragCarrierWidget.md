<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DragCarrierWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DragCarrierWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DragCarrierWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DragCarrierWidget.cs`

## Overview

`DragCarrierWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DragCarrierWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var widget = new DragCarrierWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)