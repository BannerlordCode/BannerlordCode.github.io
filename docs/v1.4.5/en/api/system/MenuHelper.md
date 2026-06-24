<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MenuHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## Overview

`MenuHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MenuHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetOptionProperties
`public static bool SetOptionProperties(MenuCallbackArgs args, bool canPlayerDo, bool shouldBeDisabled, TextObject disabledText)`

**Purpose:** Sets the value or state of `option properties`.

### SetIssueAndQuestDataForHero
`public static void SetIssueAndQuestDataForHero(MenuCallbackArgs args, Hero hero)`

**Purpose:** Sets the value or state of `issue and quest data for hero`.

### SetIssueAndQuestDataForLocations
`public static void SetIssueAndQuestDataForLocations(MenuCallbackArgs args, List<Location> locations)`

**Purpose:** Sets the value or state of `issue and quest data for locations`.

### CheckAndOpenNextLocation
`public static bool CheckAndOpenNextLocation(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `check and open next location`.

### DecideMenuState
`public static void DecideMenuState()`

**Purpose:** Handles logic related to `decide menu state`.

### EncounterAttackCondition
`public static bool EncounterAttackCondition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `encounter attack condition`.

### EncounterCaptureEnemyCondition
`public static bool EncounterCaptureEnemyCondition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `encounter capture enemy condition`.

### EncounterAttackConsequence
`public static void EncounterAttackConsequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `encounter attack consequence`.

### CheckEnemyAttackableHonorably
`public static void CheckEnemyAttackableHonorably(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `check enemy attackable honorably`.

### EncounterOrderAttackCondition
`public static bool EncounterOrderAttackCondition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `encounter order attack condition`.

### EncounterOrderAttackConsequence
`public static void EncounterOrderAttackConsequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `encounter order attack consequence`.

### EncounterCaptureTheEnemyOnConsequence
`public static void EncounterCaptureTheEnemyOnConsequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `encounter capture the enemy on consequence`.

### EncounterLeaveConsequence
`public static void EncounterLeaveConsequence()`

**Purpose:** Handles logic related to `encounter leave consequence`.

### GetEncounterCultureBackgroundMesh
`public static string GetEncounterCultureBackgroundMesh(CultureObject encounterCulture)`

**Purpose:** Gets the current value of `encounter culture background mesh`.

## Usage Example

```csharp
MenuHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)