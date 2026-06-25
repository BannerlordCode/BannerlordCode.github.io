---
title: "KingdomDecisionAddedLogEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionAddedLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDecisionAddedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionAddedLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/KingdomDecisionAddedLogEntry.cs`

## Overview

`KingdomDecisionAddedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new KingdomDecisionAddedLogEntry();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)