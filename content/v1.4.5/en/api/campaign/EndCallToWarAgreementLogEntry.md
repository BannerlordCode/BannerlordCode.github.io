---
title: "EndCallToWarAgreementLogEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndCallToWarAgreementLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EndCallToWarAgreementLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EndCallToWarAgreementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/EndCallToWarAgreementLogEntry.cs`

## Overview

`EndCallToWarAgreementLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

## Usage Example

```csharp
var value = new EndCallToWarAgreementLogEntry();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)