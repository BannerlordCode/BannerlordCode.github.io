<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterInsultedLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterInsultedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterInsultedLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/CharacterInsultedLogEntry.cs`

## Overview

`CharacterInsultedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## Key Methods

### GetHistoricComment
`public override TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** Gets the current value of `historic comment`.

### AsReasonForEnmity
`public override int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**Purpose:** Handles logic related to `as reason for enmity`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

## Usage Example

```csharp
var value = new CharacterInsultedLogEntry();
value.GetHistoricComment(talkTroop);
```

## See Also

- [Complete Class Catalog](../catalog)