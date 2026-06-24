<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementOverylayQuickTalkPermissionEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementOverylayQuickTalkPermissionEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementOverylayQuickTalkPermissionEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Events/SettlementOverylayQuickTalkPermissionEvent.cs`

## Overview

`SettlementOverylayQuickTalkPermissionEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTalkAvailable` | `public Action<bool, TextObject> IsTalkAvailable { get; }` |

## Usage Example

```csharp
var value = new SettlementOverylayQuickTalkPermissionEvent();
```

## See Also

- [Complete Class Catalog](../catalog)