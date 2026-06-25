---
title: "EngagedToPlayerTag"
description: "Auto-generated class reference for EngagedToPlayerTag."
---
# EngagedToPlayerTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EngagedToPlayerTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/EngagedToPlayerTag.cs`

## Overview

`EngagedToPlayerTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the applicable to state or condition.

```csharp
// Obtain an instance of EngagedToPlayerTag from the subsystem API first
EngagedToPlayerTag engagedToPlayerTag = ...;
var result = engagedToPlayerTag.IsApplicableTo(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EngagedToPlayerTag engagedToPlayerTag = ...;
engagedToPlayerTag.IsApplicableTo(character);
```

## See Also

- [Area Index](../)