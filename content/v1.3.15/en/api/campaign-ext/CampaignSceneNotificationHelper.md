---
title: "CampaignSceneNotificationHelper"
description: "Auto-generated class reference for CampaignSceneNotificationHelper."
---
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## Overview

`CampaignSceneNotificationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CampaignSceneNotificationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBodyguardOfCulture
`public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the bodyguard of culture value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetBodyguardOfCulture(culture);
```

### RemoveWeaponsFromEquipment
`public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)`

**Purpose:** **Purpose:** Removes weapons from equipment from the current collection or state.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.RemoveWeaponsFromEquipment(equipment, false, false);
```

### GetChildStageEquipmentIDFromCulture
`public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)`

**Purpose:** **Purpose:** Reads and returns the child stage equipment i d from culture value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetChildStageEquipmentIDFromCulture(childCulture);
```

### GetRandomTroopForCulture
`public static CharacterObject GetRandomTroopForCulture(CultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the random troop for culture value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetRandomTroopForCulture(culture);
```

### GetMilitaryAudienceForHero
`public static IEnumerable<Hero> GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)`

**Purpose:** **Purpose:** Reads and returns the military audience for hero value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetMilitaryAudienceForHero(hero, false, false);
```

### GetMilitaryAudienceForKingdom
`public static IEnumerable<Hero> GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)`

**Purpose:** **Purpose:** Reads and returns the military audience for kingdom value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetMilitaryAudienceForKingdom(kingdom, false);
```

### GetFormalDayAndSeasonText
`public static TextObject GetFormalDayAndSeasonText(CampaignTime time)`

**Purpose:** **Purpose:** Reads and returns the formal day and season text value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetFormalDayAndSeasonText(time);
```

### GetFormalNameForKingdom
`public static TextObject GetFormalNameForKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the formal name for kingdom value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetFormalNameForKingdom(kingdom);
```

### CreateNotificationCharacterFromHero
`public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = 4294967295U, uint overriddenColor2 = 4294967295U, bool useHorse = false)`

**Purpose:** **Purpose:** Constructs a new notification character from hero entity and returns it to the caller.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero(hero, null, false, default(BodyProperties), 0, 0, false);
```

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)`

**Purpose:** **Purpose:** Constructs a new notification ship from ship entity and returns it to the caller.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.CreateNotificationShipFromShip(ship);
```

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)`

**Purpose:** **Purpose:** Constructs a new notification ship from ship entity and returns it to the caller.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.CreateNotificationShipFromShip(ship, 0);
```

### GetDefaultHorseItem
`public static ItemObject GetDefaultHorseItem()`

**Purpose:** **Purpose:** Reads and returns the default horse item value held by the this instance.

```csharp
// Static call; no instance required
CampaignSceneNotificationHelper.GetDefaultHorseItem();
```

## Usage Example

```csharp
CampaignSceneNotificationHelper.Initialize();
```

## See Also

- [Area Index](../)