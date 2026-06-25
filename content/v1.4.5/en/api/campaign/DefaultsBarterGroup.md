---
title: "DefaultsBarterGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultsBarterGroup`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultsBarterGroup

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultsBarterGroup : BarterGroup`
**Base:** `BarterGroup`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/DefaultsBarterGroup.cs`

## Overview

`DefaultsBarterGroup` lives in `TaleWorlds.CampaignSystem.BarterSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new DefaultsBarterGroup();
```

## See Also

- [Complete Class Catalog](../catalog)