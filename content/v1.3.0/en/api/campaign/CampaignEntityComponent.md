---
title: "CampaignEntityComponent"
description: "Auto-generated class reference for CampaignEntityComponent."
---
# CampaignEntityComponent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEntityComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.CampaignSystem/CampaignEntityComponent.cs`

## Overview

`CampaignEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CampaignEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of CampaignEntityComponent from the subsystem API first
CampaignEntityComponent campaignEntityComponent = ...;
campaignEntityComponent.OnTick(0, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<CampaignEntityComponent>();
```

## See Also

- [Area Index](../)