<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetComponent

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetComponent`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetComponent.cs`

## Overview

`WidgetComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<WidgetComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Usage Example

```csharp
// Typical usage of WidgetComponent (Component)
agent.GetComponent<WidgetComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)