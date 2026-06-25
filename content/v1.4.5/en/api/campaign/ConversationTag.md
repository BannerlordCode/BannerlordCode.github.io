---
title: "ConversationTag"
description: "Auto-generated class reference for ConversationTag."
---
# ConversationTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ConversationTag`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ConversationTag.cs`

## Overview

`ConversationTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public abstract string StringId { get; }` |

## Key Methods

### IsApplicableTo
`public abstract bool IsApplicableTo(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `applicable to` state or condition.

```csharp
// Obtain an instance of ConversationTag from the subsystem API first
ConversationTag conversationTag = ...;
var result = conversationTag.IsApplicableTo(character);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of ConversationTag from the subsystem API first
ConversationTag conversationTag = ...;
var result = conversationTag.ToString();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ConversationTag instance = ...;
```

## See Also

- [Area Index](../)