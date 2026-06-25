---
title: "TakePrisonerAction"
description: "Auto-generated campaign action reference for TakePrisonerAction."
---
# TakePrisonerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TakePrisonerAction.cs`

TakePrisonerAction is a set of static methods that trigger "TakePrisoner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

**Purpose:** .

### ApplyByTakenFromPartyScreen

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

**Purpose:** taken from party screen.

## Usage Example

```csharp
// Trigger this action from a mod
TakePrisonerAction.Apply(capturerParty, prisonerCharacter);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)