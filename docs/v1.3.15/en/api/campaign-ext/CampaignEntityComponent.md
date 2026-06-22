<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEntityComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEntityComponent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEntityComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.CampaignSystem/CampaignEntityComponent.cs`

## Overview

`CampaignEntityComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<CampaignEntityComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnTick
```csharp
public virtual void OnTick(float realDt, float dt)
```

## Usage Example

```csharp
// Typical usage of CampaignEntityComponent (Component)
agent.GetComponent<CampaignEntityComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)