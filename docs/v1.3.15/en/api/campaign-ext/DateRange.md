<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DateRange`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DateRange

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class DateRange`
**Base:** none
**File:** `TaleWorlds.Localization/DateRange.cs`

## Overview

`DateRange` lives in `TaleWorlds.Localization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `From` | `public DateTime From { get; set; }` |
| `To` | `public DateTime To { get; set; }` |

## Usage Example

```csharp
var value = new DateRange();
```

## See Also

- [Complete Class Catalog](../catalog)