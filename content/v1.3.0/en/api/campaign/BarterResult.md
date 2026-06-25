---
title: "BarterResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterResult`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterResult

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterResult`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterResult.cs`

## Overview

`BarterResult` lives in `TaleWorlds.CampaignSystem.BarterSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OfferedBarters` | `public List<Barterable> OfferedBarters { get; }` |

## Usage Example

```csharp
var example = new BarterResult();
```

## See Also

- [Complete Class Catalog](../catalog)