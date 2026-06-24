<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeatherNode`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeatherNode

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeatherNode`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/WeatherNode.cs`

## Overview

`WeatherNode` lives in `TaleWorlds.CampaignSystem.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisuallyDirty` | `public bool IsVisuallyDirty { get; }` |

## Key Methods

### SetVisualDirty
`public void SetVisualDirty()`

**Purpose:** Sets the value or state of `visual dirty`.

### OnVisualUpdated
`public void OnVisualUpdated()`

**Purpose:** Called when the `visual updated` event is raised.

## Usage Example

```csharp
var value = new WeatherNode();
value.SetVisualDirty();
```

## See Also

- [Complete Class Catalog](../catalog)