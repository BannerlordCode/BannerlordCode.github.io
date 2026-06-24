<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IGauntletMapEventVisualHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IGauntletMapEventVisualHandler

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `class`
**Base:** none
**File:** `SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs`

## Overview

`IGauntletMapEventVisualHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IGauntletMapEventVisualHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IGauntletMapEventVisualHandler implementation = GetGauntletMapEventVisualHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)