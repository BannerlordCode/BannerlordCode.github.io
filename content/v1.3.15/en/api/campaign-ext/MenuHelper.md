---
title: "MenuHelper"
description: "Auto-generated class reference for MenuHelper."
---
# MenuHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MenuHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## Overview

`MenuHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MenuHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetOptionProperties
`public static bool SetOptionProperties(MenuCallbackArgs args, bool canPlayerDo, bool shouldBeDisabled, TextObject disabledText)`

**Purpose:** Assigns a new value to option properties and updates the object's internal state.

```csharp
// Static call; no instance required
MenuHelper.SetOptionProperties(args, false, false, disabledText);
```

### SetIssueAndQuestDataForHero
`public static void SetIssueAndQuestDataForHero(MenuCallbackArgs args, Hero hero)`

**Purpose:** Assigns a new value to issue and quest data for hero and updates the object's internal state.

```csharp
// Static call; no instance required
MenuHelper.SetIssueAndQuestDataForHero(args, hero);
```

### SetIssueAndQuestDataForLocations
`public static void SetIssueAndQuestDataForLocations(MenuCallbackArgs args, List<Location> locations)`

**Purpose:** Assigns a new value to issue and quest data for locations and updates the object's internal state.

```csharp
// Static call; no instance required
MenuHelper.SetIssueAndQuestDataForLocations(args, locations);
```

### CheckAndOpenNextLocation
`public static bool CheckAndOpenNextLocation(MenuCallbackArgs args)`

**Purpose:** Verifies whether and open next location holds true for the this instance.

```csharp
// Static call; no instance required
MenuHelper.CheckAndOpenNextLocation(args);
```

### DecideMenuState
`public static void DecideMenuState()`

**Purpose:** Executes the DecideMenuState logic.

```csharp
// Static call; no instance required
MenuHelper.DecideMenuState();
```

### EncounterAttackCondition
`public static bool EncounterAttackCondition(MenuCallbackArgs args)`

**Purpose:** Executes the EncounterAttackCondition logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterAttackCondition(args);
```

### EncounterCaptureEnemyCondition
`public static bool EncounterCaptureEnemyCondition(MenuCallbackArgs args)`

**Purpose:** Executes the EncounterCaptureEnemyCondition logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterCaptureEnemyCondition(args);
```

### EncounterAttackConsequence
`public static void EncounterAttackConsequence(MenuCallbackArgs args)`

**Purpose:** Executes the EncounterAttackConsequence logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterAttackConsequence(args);
```

### CheckEnemyAttackableHonorably
`public static void CheckEnemyAttackableHonorably(MenuCallbackArgs args)`

**Purpose:** Verifies whether enemy attackable honorably holds true for the this instance.

```csharp
// Static call; no instance required
MenuHelper.CheckEnemyAttackableHonorably(args);
```

### EncounterOrderAttackCondition
`public static bool EncounterOrderAttackCondition(MenuCallbackArgs args)`

**Purpose:** Executes the EncounterOrderAttackCondition logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterOrderAttackCondition(args);
```

### EncounterOrderAttackConsequence
`public static void EncounterOrderAttackConsequence(MenuCallbackArgs args)`

**Purpose:** Executes the EncounterOrderAttackConsequence logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterOrderAttackConsequence(args);
```

### EncounterCaptureTheEnemyOnConsequence
`public static void EncounterCaptureTheEnemyOnConsequence(MenuCallbackArgs args)`

**Purpose:** Executes the EncounterCaptureTheEnemyOnConsequence logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterCaptureTheEnemyOnConsequence(args);
```

### EncounterLeaveConsequence
`public static void EncounterLeaveConsequence()`

**Purpose:** Executes the EncounterLeaveConsequence logic.

```csharp
// Static call; no instance required
MenuHelper.EncounterLeaveConsequence();
```

### GetEncounterCultureBackgroundMesh
`public static string GetEncounterCultureBackgroundMesh(CultureObject encounterCulture)`

**Purpose:** Reads and returns the encounter culture background mesh value held by the this instance.

```csharp
// Static call; no instance required
MenuHelper.GetEncounterCultureBackgroundMesh(encounterCulture);
```

## Usage Example

```csharp
MenuHelper.Initialize();
```

## See Also

- [Area Index](../)