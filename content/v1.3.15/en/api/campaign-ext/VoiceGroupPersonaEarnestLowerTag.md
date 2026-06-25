---
title: "VoiceGroupPersonaEarnestLowerTag"
description: "Auto-generated class reference for VoiceGroupPersonaEarnestLowerTag."
---
# VoiceGroupPersonaEarnestLowerTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VoiceGroupPersonaEarnestLowerTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/VoiceGroupPersonaEarnestLowerTag.cs`

## Overview

`VoiceGroupPersonaEarnestLowerTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public override string StringId { get; }` |

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the applicable to state or condition.

```csharp
// Obtain an instance of VoiceGroupPersonaEarnestLowerTag from the subsystem API first
VoiceGroupPersonaEarnestLowerTag voiceGroupPersonaEarnestLowerTag = ...;
var result = voiceGroupPersonaEarnestLowerTag.IsApplicableTo(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VoiceGroupPersonaEarnestLowerTag voiceGroupPersonaEarnestLowerTag = ...;
voiceGroupPersonaEarnestLowerTag.IsApplicableTo(character);
```

## See Also

- [Area Index](../)