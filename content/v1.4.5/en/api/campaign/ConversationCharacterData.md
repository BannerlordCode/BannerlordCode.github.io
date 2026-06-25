---
title: "ConversationCharacterData"
description: "Auto-generated class reference for ConversationCharacterData."
---
# ConversationCharacterData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationCharacterData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationCharacterData.cs`

## Overview

`ConversationCharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ConversationCharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ConversationCharacterData
`public struct ConversationCharacterData(CharacterObject character, PartyBase party = null, bool noHorse = false, bool noWeapon = false, bool spawnAfterFight = false, bool isCivilianEquipmentRequiredForLeader = false, bool isCivilianEquipmentRequiredForBodyGuardCharacters = false, bool noBodyguards = false)`

**Purpose:** **Purpose:** Executes the ConversationCharacterData logic.

```csharp
// Obtain an instance of ConversationCharacterData from the subsystem API first
ConversationCharacterData conversationCharacterData = ...;
var result = conversationCharacterData.ConversationCharacterData(character, null, false, false, false, false, false, false);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ConversationCharacterData entry = ...;
```

## See Also

- [Area Index](../)