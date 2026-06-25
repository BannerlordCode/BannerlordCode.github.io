---
title: "SettlementOwnerChangedMapNotification"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementOwnerChangedMapNotification`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementOwnerChangedMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementOwnerChangedMapNotification : InformationData`
**Base:** `InformationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/SettlementOwnerChangedMapNotification.cs`

## Overview

`SettlementOwnerChangedMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PreviousOwner` | `public Hero PreviousOwner { get; }` |
| `NewOwner` | `public Hero NewOwner { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## Usage Example

```csharp
var example = new SettlementOwnerChangedMapNotification();
```

## See Also

- [Complete Class Catalog](../catalog)