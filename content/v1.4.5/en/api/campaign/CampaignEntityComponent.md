---
title: "CampaignEntityComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEntityComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignEntityComponent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEntityComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEntityComponent.cs`

## Overview

`CampaignEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CampaignEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<CampaignEntityComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)