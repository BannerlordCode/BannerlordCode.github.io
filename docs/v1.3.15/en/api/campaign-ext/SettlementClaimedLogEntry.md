<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementClaimedLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementClaimedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementClaimedLogEntry : LogEntry, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/SettlementClaimedLogEntry.cs`

## Overview

`SettlementClaimedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

## Usage Example

```csharp
var value = new SettlementClaimedLogEntry();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)