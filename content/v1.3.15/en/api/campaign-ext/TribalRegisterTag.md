---
title: "TribalRegisterTag"
description: "Auto-generated class reference for TribalRegisterTag."
---
# TribalRegisterTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TribalRegisterTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/TribalRegisterTag.cs`

## Overview

`TribalRegisterTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
// Obtain an instance of TribalRegisterTag from the subsystem API first
TribalRegisterTag tribalRegisterTag = ...;
var result = tribalRegisterTag.IsApplicableTo(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TribalRegisterTag tribalRegisterTag = ...;
tribalRegisterTag.IsApplicableTo(character);
```

## See Also

- [Area Index](../)