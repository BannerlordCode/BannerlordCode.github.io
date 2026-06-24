<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MercenaryClanChangedKingdomLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MercenaryClanChangedKingdomLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MercenaryClanChangedKingdomLogEntry : LogEntry, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/MercenaryClanChangedKingdomLogEntry.cs`

## Overview

`MercenaryClanChangedKingdomLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Handles logic related to `is related to war`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

## Usage Example

```csharp
var value = new MercenaryClanChangedKingdomLogEntry();
value.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Complete Class Catalog](../catalog)