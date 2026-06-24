<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignCheats`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignCheats

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignCheats`
**Area:** campaign-ext

## Overview

`CampaignCheats` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GetDefaultSettlement` | `public static Settlement GetDefaultSettlement { get; }` |

## Key Methods

### CheckCheatUsage
`public static bool CheckCheatUsage(ref string ErrorType)`

**Purpose:** Handles logic related to `check cheat usage`.

### CheckParameters
`public static bool CheckParameters(List<string> strings, int ParameterCount)`

**Purpose:** Handles logic related to `check parameters`.

### CheckHelp
`public static bool CheckHelp(List<string> strings)`

**Purpose:** Handles logic related to `check help`.

### GetSeparatedNames
`public static List<string> GetSeparatedNames(List<string> strings, bool removeEmptySpaces = false)`

**Purpose:** Gets the current value of `separated names`.

### ConcatenateString
`public static string ConcatenateString(List<string> strings)`

**Purpose:** Handles logic related to `concatenate string`.

### ImportMainHero
`public static string ImportMainHero(List<string> strings)`

**Purpose:** Handles logic related to `import main hero`.

### ExportMainHero
`public static string ExportMainHero(List<string> strings)`

**Purpose:** Handles logic related to `export main hero`.

### SetCraftingStamina
`public static string SetCraftingStamina(List<string> strings)`

**Purpose:** Sets the value or state of `crafting stamina`.

### SetHeroCulture
`public static string SetHeroCulture(List<string> strings)`

**Purpose:** Sets the value or state of `hero culture`.

### SetClanCulture
`public static string SetClanCulture(List<string> strings)`

**Purpose:** Sets the value or state of `clan culture`.

### AddSkillXpToHero
`public static string AddSkillXpToHero(List<string> strings)`

**Purpose:** Adds `skill xp to hero` to the current collection or state.

### PrintPlayerTrait
`public static string PrintPlayerTrait(List<string> strings)`

**Purpose:** Handles logic related to `print player trait`.

### ShowSettlements
`public static string ShowSettlements(List<string> strings)`

**Purpose:** Handles logic related to `show settlements`.

### SetSkillsOfGivenHero
`public static string SetSkillsOfGivenHero(List<string> strings)`

**Purpose:** Sets the value or state of `skills of given hero`.

### HideSettlements
`public static string HideSettlements(List<string> strings)`

**Purpose:** Handles logic related to `hide settlements`.

### SetSkillMainHero
`public static string SetSkillMainHero(List<string> strings)`

**Purpose:** Sets the value or state of `skill main hero`.

### SetSkillCompanion
`public static string SetSkillCompanion(List<string> strings)`

**Purpose:** Sets the value or state of `skill companion`.

### SetAllSkillsOfAllCompanions
`public static string SetAllSkillsOfAllCompanions(List<string> strings)`

**Purpose:** Sets the value or state of `all skills of all companions`.

### SetAllHeroSkills
`public static string SetAllHeroSkills(List<string> strings)`

**Purpose:** Sets the value or state of `all hero skills`.

### SetLoyaltyOfSettlement
`public static string SetLoyaltyOfSettlement(List<string> strings)`

**Purpose:** Sets the value or state of `loyalty of settlement`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CampaignCheats.CheckCheatUsage(errorType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
