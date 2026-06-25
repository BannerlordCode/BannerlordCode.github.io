---
title: "DefaultVillageTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVillageTypes`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVillageTypes

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTypes`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/DefaultVillageTypes.cs`

## Overview

`DefaultVillageTypes` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConsumableRawItems` | `public IList<ItemObject> ConsumableRawItems { get; }` |

## Usage Example

```csharp
var example = new DefaultVillageTypes();
```

## See Also

- [Complete Class Catalog](../catalog)