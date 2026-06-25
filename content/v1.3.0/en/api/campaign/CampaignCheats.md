---
title: "CampaignCheats"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignCheats`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignCheats

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignCheats`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignCheats.cs`

## Overview

`CampaignCheats` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### SetCraftingStamina
`public static string SetCraftingStamina(List<string> strings)`

**Purpose:** Sets the value or state of `crafting stamina`.

### SetHeroCulture
`public static string SetHeroCulture(List<string> strings)`

**Purpose:** Sets the value or state of `hero culture`.

### SetClanCulture
`public static string SetClanCulture(List<string> strings)`

**Purpose:** Sets the value or state of `clan culture`.

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

### SetProsperityOfSettlement
`public static string SetProsperityOfSettlement(List<string> strings)`

**Purpose:** Sets the value or state of `prosperity of settlement`.

### SetMilitiaOfSettlement
`public static string SetMilitiaOfSettlement(List<string> strings)`

**Purpose:** Sets the value or state of `militia of settlement`.

### SetSecurityOfSettlement
`public static string SetSecurityOfSettlement(List<string> strings)`

**Purpose:** Sets the value or state of `security of settlement`.

### SetFoodOfSettlement
`public static string SetFoodOfSettlement(List<string> strings)`

**Purpose:** Sets the value or state of `food of settlement`.

### SetHearthOfSettlement
`public static string SetHearthOfSettlement(List<string> strings)`

**Purpose:** Sets the value or state of `hearth of settlement`.

### ShowHeroRelation
`public static string ShowHeroRelation(List<string> strings)`

**Purpose:** Handles logic related to `show hero relation`.

### AddHeroRelation
`public static string AddHeroRelation(List<string> strings)`

**Purpose:** Adds `hero relation` to the current collection or state.

### PrintMainPartyPosition
`public static string PrintMainPartyPosition(List<string> strings)`

**Purpose:** Handles logic related to `print main party position`.

### AddCraftingMaterials
`public static string AddCraftingMaterials(List<string> strings)`

**Purpose:** Adds `crafting materials` to the current collection or state.

### HealMainParty
`public static string HealMainParty(List<string> strings)`

**Purpose:** Handles logic related to `heal main party`.

### DeclareWar
`public static string DeclareWar(List<string> strings)`

**Purpose:** Handles logic related to `declare war`.

### AddItemToPlayerParty
`public static string AddItemToPlayerParty(List<string> strings)`

**Purpose:** Adds `item to player party` to the current collection or state.

### DeclarePeace
`public static string DeclarePeace(List<string> strings)`

**Purpose:** Handles logic related to `declare peace`.

### AddInfluence
`public static string AddInfluence(List<string> strings)`

**Purpose:** Adds `influence` to the current collection or state.

### AddRenown
`public static string AddRenown(List<string> strings)`

**Purpose:** Adds `renown` to the current collection or state.

### AddGoldToHero
`public static string AddGoldToHero(List<string> strings)`

**Purpose:** Adds `gold to hero` to the current collection or state.

### AddDevelopment
`public static string AddDevelopment(List<string> strings)`

**Purpose:** Adds `development` to the current collection or state.

### ActivateAllPolicies
`public static string ActivateAllPolicies(List<string> strings)`

**Purpose:** Handles logic related to `activate all policies`.

### SetPlayerReputationTrait
`public static string SetPlayerReputationTrait(List<string> strings)`

**Purpose:** Sets the value or state of `player reputation trait`.

### GiveSettlementToPlayer
`public static string GiveSettlementToPlayer(List<string> strings)`

**Purpose:** Handles logic related to `give settlement to player`.

### GiveSettlementToKingdom
`public static string GiveSettlementToKingdom(List<string> strings)`

**Purpose:** Handles logic related to `give settlement to kingdom`.

### AddPowerToNotable
`public static string AddPowerToNotable(List<string> strings)`

**Purpose:** Adds `power to notable` to the current collection or state.

### LeadYourFaction
`public static string LeadYourFaction(List<string> strings)`

**Purpose:** Handles logic related to `lead your faction`.

### PrintHeroesSuitableForMarriage
`public static string PrintHeroesSuitableForMarriage(List<string> strings)`

**Purpose:** Handles logic related to `print heroes suitable for marriage`.

### MarryPlayerWithHero
`public static string MarryPlayerWithHero(List<string> strings)`

**Purpose:** Handles logic related to `marry player with hero`.

### MarryHeroWithHero
`public static string MarryHeroWithHero(List<string> strings)`

**Purpose:** Handles logic related to `marry hero with hero`.

### IsHeroSuitableForMarriageWithPlayer
`public static string IsHeroSuitableForMarriageWithPlayer(List<string> strings)`

**Purpose:** Handles logic related to `is hero suitable for marriage with player`.

### CreatePlayerKingdom
`public static string CreatePlayerKingdom(List<string> strings)`

**Purpose:** Creates a new `player kingdom` instance or object.

### CreateRandomClan
`public static string CreateRandomClan(List<string> strings)`

**Purpose:** Creates a new `random clan` instance or object.

### LeadKingdom
`public static string LeadKingdom(List<string> strings)`

**Purpose:** Handles logic related to `lead kingdom`.

### JoinKingdom
`public static string JoinKingdom(List<string> strings)`

**Purpose:** Handles logic related to `join kingdom`.

### JoinKingdomAsMercenary
`public static string JoinKingdomAsMercenary(List<string> strings)`

**Purpose:** Handles logic related to `join kingdom as mercenary`.

### MakeTradeAgreement
`public static string MakeTradeAgreement(List<string> strings)`

**Purpose:** Handles logic related to `make trade agreement`.

### PrintCriminalRatings
`public static string PrintCriminalRatings(List<string> strings)`

**Purpose:** Handles logic related to `print criminal ratings`.

### SetMainHeroAge
`public static string SetMainHeroAge(List<string> strings)`

**Purpose:** Sets the value or state of `main hero age`.

### SetMainPartyAttackable
`public static string SetMainPartyAttackable(List<string> strings)`

**Purpose:** Sets the value or state of `main party attackable`.

### AddMoraleToParty
`public static string AddMoraleToParty(List<string> strings)`

**Purpose:** Adds `morale to party` to the current collection or state.

### BoostCohesionOfArmy
`public static string BoostCohesionOfArmy(List<string> strings)`

**Purpose:** Handles logic related to `boost cohesion of army`.

### AddFocusPointCheat
`public static string AddFocusPointCheat(List<string> strings)`

**Purpose:** Adds `focus point cheat` to the current collection or state.

### AddAttributePointsCheat
`public static string AddAttributePointsCheat(List<string> strings)`

**Purpose:** Adds `attribute points cheat` to the current collection or state.

### PrintSettlementsWithTournament
`public static string PrintSettlementsWithTournament(List<string> strings)`

**Purpose:** Handles logic related to `print settlements with tournament`.

### ConvertListToMultiLine
`public static string ConvertListToMultiLine(List<string> strings)`

**Purpose:** Handles logic related to `convert list to multi line`.

### PrintAllIssues
`public static string PrintAllIssues(List<string> strings)`

**Purpose:** Handles logic related to `print all issues`.

### GiveWorkshopToPlayer
`public static string GiveWorkshopToPlayer(List<string> strings)`

**Purpose:** Handles logic related to `give workshop to player`.

### MakePregnant
`public static string MakePregnant(List<string> strings)`

**Purpose:** Handles logic related to `make pregnant`.

### GenerateChild
`public static Hero GenerateChild(Hero hero, bool isFemale, CultureObject culture)`

**Purpose:** Handles logic related to `generate child`.

### AddPrisonerToParty
`public static string AddPrisonerToParty(List<string> strings)`

**Purpose:** Adds `prisoner to party` to the current collection or state.

### ClearSettlementDefense
`public static string ClearSettlementDefense(List<string> strings)`

**Purpose:** Handles logic related to `clear settlement defense`.

### AddPrisonersXp
`public static string AddPrisonersXp(List<string> strings)`

**Purpose:** Adds `prisoners xp` to the current collection or state.

### SetHeroTrait
`public static string SetHeroTrait(List<string> strings)`

**Purpose:** Sets the value or state of `hero trait`.

### RemoveMilitiasFromSettlement
`public static string RemoveMilitiasFromSettlement(List<string> strings)`

**Purpose:** Removes `militias from settlement` from the current collection or state.

### CancelQuestCheat
`public static string CancelQuestCheat(List<string> strings)`

**Purpose:** Checks whether the current object can `cel quest cheat`.

### KickCompanionFromParty
`public static string KickCompanionFromParty(List<string> strings)`

**Purpose:** Handles logic related to `kick companion from party`.

### AddTroopsXp
`public static string AddTroopsXp(List<string> strings)`

**Purpose:** Adds `troops xp` to the current collection or state.

### PrintGameplayStatistics
`public static string PrintGameplayStatistics(List<string> strings)`

**Purpose:** Handles logic related to `print gameplay statistics`.

### SetAllArmiesAndPartiesVisible
`public static string SetAllArmiesAndPartiesVisible(List<string> strings)`

**Purpose:** Sets the value or state of `all armies and parties visible`.

### PrintStrengthOfLordParties
`public static string PrintStrengthOfLordParties(List<string> strings)`

**Purpose:** Handles logic related to `print strength of lord parties`.

### ToggleInformationRestrictions
`public static string ToggleInformationRestrictions(List<string> strings)`

**Purpose:** Handles logic related to `toggle information restrictions`.

### PrintStrengthOfFactions
`public static string PrintStrengthOfFactions(List<string> strings)`

**Purpose:** Handles logic related to `print strength of factions`.

### AddSupportersForMainHero
`public static string AddSupportersForMainHero(List<string> strings)`

**Purpose:** Adds `supporters for main hero` to the current collection or state.

### SetCampaignSpeed
`public static string SetCampaignSpeed(List<string> strings)`

**Purpose:** Sets the value or state of `campaign speed`.

### ShowHideouts
`public static string ShowHideouts(List<string> strings)`

**Purpose:** Handles logic related to `show hideouts`.

### HideHideouts
`public static string HideHideouts(List<string> strings)`

**Purpose:** Handles logic related to `hide hideouts`.

### UnlockCraftingPieces
`public static string UnlockCraftingPieces(List<string> strings)`

**Purpose:** Handles logic related to `unlock crafting pieces`.

### SetRebellionEnabled
`public static string SetRebellionEnabled(List<string> strings)`

**Purpose:** Sets the value or state of `rebellion enabled`.

### AddTroopsToParty
`public static string AddTroopsToParty(List<string> strings)`

**Purpose:** Adds `troops to party` to the current collection or state.

### CanPartyGetAnythingFromCheat
`public static bool CanPartyGetAnythingFromCheat(PartyBase party)`

**Purpose:** Checks whether the current object can `party get anything from cheat`.

## Usage Example

```csharp
CampaignCheats.CheckCheatUsage(errorType);
```

## See Also

- [Complete Class Catalog](../catalog)