---
title: "ConversationCharacterData"
description: "Auto-generated class reference for ConversationCharacterData."
---
# ConversationCharacterData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationCharacterData : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs`

## Overview

`ConversationCharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ConversationCharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ConversationCharacterData entry = ...;
```

## See Also

- [Area Index](../)