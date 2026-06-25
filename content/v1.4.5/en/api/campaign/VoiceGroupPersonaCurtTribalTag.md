---
title: "VoiceGroupPersonaCurtTribalTag"
description: "Auto-generated class reference for VoiceGroupPersonaCurtTribalTag."
---
# VoiceGroupPersonaCurtTribalTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VoiceGroupPersonaCurtTribalTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/VoiceGroupPersonaCurtTribalTag.cs`

## Overview

`VoiceGroupPersonaCurtTribalTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `applicable to` state or condition.

```csharp
// Obtain an instance of VoiceGroupPersonaCurtTribalTag from the subsystem API first
VoiceGroupPersonaCurtTribalTag voiceGroupPersonaCurtTribalTag = ...;
var result = voiceGroupPersonaCurtTribalTag.IsApplicableTo(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VoiceGroupPersonaCurtTribalTag voiceGroupPersonaCurtTribalTag = ...;
voiceGroupPersonaCurtTribalTag.IsApplicableTo(character);
```

## See Also

- [Area Index](../)