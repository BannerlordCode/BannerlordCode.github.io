<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualCreator`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/VisualCreator.cs`

## Overview

`VisualCreator` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEventVisualCreator` | `public IMapEventVisualCreator MapEventVisualCreator { get; set; }` |

## Key Methods

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**Purpose:** Creates a new `map event visual` instance or object.

## Usage Example

```csharp
var value = new VisualCreator();
value.CreateMapEventVisual(mapEvent);
```

## See Also

- [Complete Class Catalog](../catalog)