---
title: "CampaignMapConversation"
description: "Auto-generated class reference for CampaignMapConversation."
---
# CampaignMapConversation

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignMapConversation`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/CampaignMapConversation.cs`

## Overview

`CampaignMapConversation` lives in `TaleWorlds.CampaignSystem.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenConversation
`public static void OpenConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**Purpose:** Opens the resource or UI associated with conversation.

```csharp
// Static call; no instance required
CampaignMapConversation.OpenConversation(playerCharacterData, conversationPartnerData);
```

## Usage Example

```csharp
CampaignMapConversation.OpenConversation(playerCharacterData, conversationPartnerData);
```

## See Also

- [Area Index](../)