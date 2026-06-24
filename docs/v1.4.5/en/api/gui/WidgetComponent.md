<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetComponent`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetComponent

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetComponent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/WidgetComponent.cs`

## Overview

`WidgetComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `WidgetComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; }` |

## Usage Example

```csharp
var implementation = new CustomWidgetComponent();
```

## See Also

- [Complete Class Catalog](../catalog)