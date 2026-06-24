<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UIColors`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UIColors

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class UIColors`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/UIColors.cs`

## Overview

`UIColors` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositiveIndicator` | `public static Color PositiveIndicator { get; }` |
| `NegativeIndicator` | `public static Color NegativeIndicator { get; }` |
| `Gold` | `public static Color Gold { get; }` |

## Usage Example

```csharp
var example = new UIColors();
```

## See Also

- [Complete Class Catalog](../catalog)