---
title: "CommonTownsfolkCampaignBehavior"
description: "Auto-generated class reference for CommonTownsfolkCampaignBehavior."
---
# CommonTownsfolkCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`

## Overview

`CommonTownsfolkCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CommonTownsfolkCampaignBehavior from the subsystem API first
CommonTownsfolkCampaignBehavior commonTownsfolkCampaignBehavior = ...;
commonTownsfolkCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of CommonTownsfolkCampaignBehavior from the subsystem API first
CommonTownsfolkCampaignBehavior commonTownsfolkCampaignBehavior = ...;
commonTownsfolkCampaignBehavior.SyncData(dataStore);
```

### GetActionSetSuffixAndMonsterForItem
`public static string GetActionSetSuffixAndMonsterForItem(string itemId, int race, bool isFemale, out Monster monster)`

**Purpose:** Reads and returns the `action set suffix and monster for item` value held by the current object.

```csharp
// Static call; no instance required
CommonTownsfolkCampaignBehavior.GetActionSetSuffixAndMonsterForItem("example", 0, false, monster);
```

### GetRandomTownsManActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsManActionSetAndMonster(int race)`

**Purpose:** Reads and returns the `random towns man action set and monster` value held by the current object.

```csharp
// Static call; no instance required
CommonTownsfolkCampaignBehavior.GetRandomTownsManActionSetAndMonster(0);
```

### GetRandomTownsWomanActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsWomanActionSetAndMonster(int race)`

**Purpose:** Reads and returns the `random towns woman action set and monster` value held by the current object.

```csharp
// Static call; no instance required
CommonTownsfolkCampaignBehavior.GetRandomTownsWomanActionSetAndMonster(0);
```

### CreateBroomsWoman
`public static LocationCharacter CreateBroomsWoman(CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Constructs a new `brooms woman` entity and returns it to the caller.

```csharp
// Static call; no instance required
CommonTownsfolkCampaignBehavior.CreateBroomsWoman(culture, relation);
```

### CreateMaleBeggar
`public static LocationCharacter CreateMaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Constructs a new `male beggar` entity and returns it to the caller.

```csharp
// Static call; no instance required
CommonTownsfolkCampaignBehavior.CreateMaleBeggar(culture, relation);
```

### CreateFemaleBeggar
`public static LocationCharacter CreateFemaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Constructs a new `female beggar` entity and returns it to the caller.

```csharp
// Static call; no instance required
CommonTownsfolkCampaignBehavior.CreateFemaleBeggar(culture, relation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CommonTownsfolkCampaignBehavior commonTownsfolkCampaignBehavior = ...;
commonTownsfolkCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)