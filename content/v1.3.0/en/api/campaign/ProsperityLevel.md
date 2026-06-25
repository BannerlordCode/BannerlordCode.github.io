---
title: "ProsperityLevel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProsperityLevel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProsperityLevel

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum ProsperityLevel`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/SettlementComponent.cs`

## Overview

`ProsperityLevel` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ProsperityLevel example = ProsperityLevel.Value;
```

## See Also

- [Complete Class Catalog](../catalog)