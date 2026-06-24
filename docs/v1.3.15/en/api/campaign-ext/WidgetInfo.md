<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetInfo

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInfo`
**Area:** campaign-ext

## Overview

`WidgetInfo` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Type` | `public Type Type { get; }` |
| `GotCustomUpdate` | `public bool GotCustomUpdate { get; }` |
| `GotCustomLateUpdate` | `public bool GotCustomLateUpdate { get; }` |
| `GotCustomParallelUpdate` | `public bool GotCustomParallelUpdate { get; }` |
| `GotUpdateBrushes` | `public bool GotUpdateBrushes { get; }` |

## Key Methods

### Refresh
`public static void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetWidgetInfo
`public static WidgetInfo GetWidgetInfo(Type type)`

**Purpose:** Gets the current value of `widget info`.

### GetWidgetInfos
`public static WidgetInfo GetWidgetInfos()`

**Purpose:** Gets the current value of `widget infos`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
WidgetInfo.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
