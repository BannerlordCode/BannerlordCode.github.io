<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionAttempt`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionAttempt

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionAttempt`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/PersuasionAttempt.cs`

## Overview

`PersuasionAttempt` lives in `TaleWorlds.CampaignSystem.Conversation.Persuasion` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsSuccesful
`public bool IsSuccesful()`

**Purpose:** Handles logic related to `is succesful`.

### Matches
`public bool Matches(Hero targetHero, int reservationType)`

**Purpose:** Handles logic related to `matches`.

## Usage Example

```csharp
var value = new PersuasionAttempt();
value.IsSuccesful();
```

## See Also

- [Complete Class Catalog](../catalog)