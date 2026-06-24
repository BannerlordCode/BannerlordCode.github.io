<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HintVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HintVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**Area:** core-extra

## Overview

`HintVM` lives in `TaleWorlds.Core.ViewModelCollection.Information`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## Key Methods

### RefreshGenericHintTooltip
`public static void RefreshGenericHintTooltip(HintVM hint, object args)`

**Purpose:** Refreshes the display or cache of `generic hint tooltip`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
HintVM.RefreshGenericHintTooltip(hint, args);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
