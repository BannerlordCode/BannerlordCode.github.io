<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementRebellionMapNotification`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementRebellionMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementRebellionMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/SettlementRebellionMapNotification.cs`

## Overview

`SettlementRebellionMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |
| `RebelliousSettlement` | `public Settlement RebelliousSettlement { get; }` |

## Usage Example

```csharp
var value = new SettlementRebellionMapNotification();
```

## See Also

- [Complete Class Catalog](../catalog)