---
title: "PlayerIsSonTag"
description: "Auto-generated class reference for PlayerIsSonTag."
---
# PlayerIsSonTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerIsSonTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/PlayerIsSonTag.cs`

## Overview

`PlayerIsSonTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public override string StringId { get; }` |

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `applicable to` state or condition.

```csharp
// Obtain an instance of PlayerIsSonTag from the subsystem API first
PlayerIsSonTag playerIsSonTag = ...;
var result = playerIsSonTag.IsApplicableTo(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerIsSonTag playerIsSonTag = ...;
playerIsSonTag.IsApplicableTo(character);
```

## See Also

- [Area Index](../)