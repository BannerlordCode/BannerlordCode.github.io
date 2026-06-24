<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetInstantiationResultDatabindingExtension`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetInstantiationResultDatabindingExtension

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class WidgetInstantiationResultDatabindingExtension`
**Area:** campaign-ext

## Overview

`WidgetInstantiationResultDatabindingExtension` lives in `TaleWorlds.GauntletUI.Data`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGauntletView
`public static GauntletView GetGauntletView(this WidgetInstantiationResult widgetInstantiationResult)`

**Purpose:** Gets the current value of `gauntlet view`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
WidgetInstantiationResultDatabindingExtension.GetGauntletView(widgetInstantiationResult);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
