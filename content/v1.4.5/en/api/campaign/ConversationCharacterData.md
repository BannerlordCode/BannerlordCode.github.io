---
title: "ConversationCharacterData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationCharacterData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationCharacterData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationCharacterData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationCharacterData.cs`

## Overview

`ConversationCharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ConversationCharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ConversationCharacterData
`public struct ConversationCharacterData(CharacterObject character, PartyBase party = null, bool noHorse = false, bool noWeapon = false, bool spawnAfterFight = false, bool isCivilianEquipmentRequiredForLeader = false, bool isCivilianEquipmentRequiredForBodyGuardCharacters = false, bool noBodyguards = false)`

**Purpose:** Handles logic related to `conversation character data`.

## Usage Example

```csharp
var value = new ConversationCharacterData();
```

## See Also

- [Complete Class Catalog](../catalog)