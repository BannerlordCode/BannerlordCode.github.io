---
title: "CampaignCheats"
description: "Auto-generated class reference for CampaignCheats."
---
# CampaignCheats

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignCheats`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignCheats.cs`

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

**Purpose:** Verifies whether `cheat usage` holds true for the current object.

```csharp
// Static call; no instance required
CampaignCheats.CheckCheatUsage(errorType);
```

### CheckParameters
`public static bool CheckParameters(List<string> strings, int ParameterCount)`

**Purpose:** Verifies whether `parameters` holds true for the current object.

```csharp
// Static call; no instance required
CampaignCheats.CheckParameters(strings, 0);
```

### CheckHelp
`public static bool CheckHelp(List<string> strings)`

**Purpose:** Verifies whether `help` holds true for the current object.

```csharp
// Static call; no instance required
CampaignCheats.CheckHelp(strings);
```

### GetSeparatedNames
`public static List<string> GetSeparatedNames(List<string> strings, bool removeEmptySpaces = false)`

**Purpose:** Reads and returns the `separated names` value held by the current object.

```csharp
// Static call; no instance required
CampaignCheats.GetSeparatedNames(strings, false);
```

### ConcatenateString
`public static string ConcatenateString(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.ConcatenateString(strings);
```

### ImportMainHero
`public static string ImportMainHero(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.ImportMainHero(strings);
```

### ExportMainHero
`public static string ExportMainHero(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.ExportMainHero(strings);
```

### SetCraftingStamina
`public static string SetCraftingStamina(List<string> strings)`

**Purpose:** Assigns a new value to `crafting stamina` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetCraftingStamina(strings);
```

### SetHeroCulture
`public static string SetHeroCulture(List<string> strings)`

**Purpose:** Assigns a new value to `hero culture` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetHeroCulture(strings);
```

### SetClanCulture
`public static string SetClanCulture(List<string> strings)`

**Purpose:** Assigns a new value to `clan culture` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetClanCulture(strings);
```

### AddSkillXpToHero
`public static string AddSkillXpToHero(List<string> strings)`

**Purpose:** Adds `skill xp to hero` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddSkillXpToHero(strings);
```

### PrintPlayerTrait
`public static string PrintPlayerTrait(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintPlayerTrait(strings);
```

### ShowSettlements
`public static string ShowSettlements(List<string> strings)`

**Purpose:** Displays the UI or element associated with `settlements`.

```csharp
// Static call; no instance required
CampaignCheats.ShowSettlements(strings);
```

### SetSkillsOfGivenHero
`public static string SetSkillsOfGivenHero(List<string> strings)`

**Purpose:** Assigns a new value to `skills of given hero` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetSkillsOfGivenHero(strings);
```

### HideSettlements
`public static string HideSettlements(List<string> strings)`

**Purpose:** Hides the UI or element associated with `settlements`.

```csharp
// Static call; no instance required
CampaignCheats.HideSettlements(strings);
```

### SetSkillMainHero
`public static string SetSkillMainHero(List<string> strings)`

**Purpose:** Assigns a new value to `skill main hero` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetSkillMainHero(strings);
```

### SetSkillCompanion
`public static string SetSkillCompanion(List<string> strings)`

**Purpose:** Assigns a new value to `skill companion` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetSkillCompanion(strings);
```

### SetAllSkillsOfAllCompanions
`public static string SetAllSkillsOfAllCompanions(List<string> strings)`

**Purpose:** Assigns a new value to `all skills of all companions` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetAllSkillsOfAllCompanions(strings);
```

### SetAllHeroSkills
`public static string SetAllHeroSkills(List<string> strings)`

**Purpose:** Assigns a new value to `all hero skills` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetAllHeroSkills(strings);
```

### SetLoyaltyOfSettlement
`public static string SetLoyaltyOfSettlement(List<string> strings)`

**Purpose:** Assigns a new value to `loyalty of settlement` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetLoyaltyOfSettlement(strings);
```

### SetProsperityOfSettlement
`public static string SetProsperityOfSettlement(List<string> strings)`

**Purpose:** Assigns a new value to `prosperity of settlement` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetProsperityOfSettlement(strings);
```

### SetMilitiaOfSettlement
`public static string SetMilitiaOfSettlement(List<string> strings)`

**Purpose:** Assigns a new value to `militia of settlement` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetMilitiaOfSettlement(strings);
```

### SetSecurityOfSettlement
`public static string SetSecurityOfSettlement(List<string> strings)`

**Purpose:** Assigns a new value to `security of settlement` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetSecurityOfSettlement(strings);
```

### SetFoodOfSettlement
`public static string SetFoodOfSettlement(List<string> strings)`

**Purpose:** Assigns a new value to `food of settlement` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetFoodOfSettlement(strings);
```

### SetHearthOfSettlement
`public static string SetHearthOfSettlement(List<string> strings)`

**Purpose:** Assigns a new value to `hearth of settlement` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetHearthOfSettlement(strings);
```

### ShowHeroRelation
`public static string ShowHeroRelation(List<string> strings)`

**Purpose:** Displays the UI or element associated with `hero relation`.

```csharp
// Static call; no instance required
CampaignCheats.ShowHeroRelation(strings);
```

### AddHeroRelation
`public static string AddHeroRelation(List<string> strings)`

**Purpose:** Adds `hero relation` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddHeroRelation(strings);
```

### PrintMainPartyPosition
`public static string PrintMainPartyPosition(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintMainPartyPosition(strings);
```

### AddCraftingMaterials
`public static string AddCraftingMaterials(List<string> strings)`

**Purpose:** Adds `crafting materials` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddCraftingMaterials(strings);
```

### HealMainParty
`public static string HealMainParty(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.HealMainParty(strings);
```

### DeclareWar
`public static string DeclareWar(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.DeclareWar(strings);
```

### AddItemToPlayerParty
`public static string AddItemToPlayerParty(List<string> strings)`

**Purpose:** Adds `item to player party` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddItemToPlayerParty(strings);
```

### DeclarePeace
`public static string DeclarePeace(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.DeclarePeace(strings);
```

### AddInfluence
`public static string AddInfluence(List<string> strings)`

**Purpose:** Adds `influence` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddInfluence(strings);
```

### AddRenown
`public static string AddRenown(List<string> strings)`

**Purpose:** Adds `renown` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddRenown(strings);
```

### AddGoldToHero
`public static string AddGoldToHero(List<string> strings)`

**Purpose:** Adds `gold to hero` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddGoldToHero(strings);
```

### AddDevelopment
`public static string AddDevelopment(List<string> strings)`

**Purpose:** Adds `development` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddDevelopment(strings);
```

### ActivateAllPolicies
`public static string ActivateAllPolicies(List<string> strings)`

**Purpose:** Activates the resource, state, or feature associated with `all policies`.

```csharp
// Static call; no instance required
CampaignCheats.ActivateAllPolicies(strings);
```

### SetPlayerReputationTrait
`public static string SetPlayerReputationTrait(List<string> strings)`

**Purpose:** Assigns a new value to `player reputation trait` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetPlayerReputationTrait(strings);
```

### GiveSettlementToPlayer
`public static string GiveSettlementToPlayer(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.GiveSettlementToPlayer(strings);
```

### GiveSettlementToKingdom
`public static string GiveSettlementToKingdom(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.GiveSettlementToKingdom(strings);
```

### AddPowerToNotable
`public static string AddPowerToNotable(List<string> strings)`

**Purpose:** Adds `power to notable` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddPowerToNotable(strings);
```

### LeadYourFaction
`public static string LeadYourFaction(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.LeadYourFaction(strings);
```

### PrintHeroesSuitableForMarriage
`public static string PrintHeroesSuitableForMarriage(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintHeroesSuitableForMarriage(strings);
```

### MarryPlayerWithHero
`public static string MarryPlayerWithHero(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.MarryPlayerWithHero(strings);
```

### MarryHeroWithHero
`public static string MarryHeroWithHero(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.MarryHeroWithHero(strings);
```

### IsHeroSuitableForMarriageWithPlayer
`public static string IsHeroSuitableForMarriageWithPlayer(List<string> strings)`

**Purpose:** Determines whether the current object is in the `hero suitable for marriage with player` state or condition.

```csharp
// Static call; no instance required
CampaignCheats.IsHeroSuitableForMarriageWithPlayer(strings);
```

### CreatePlayerKingdom
`public static string CreatePlayerKingdom(List<string> strings)`

**Purpose:** Constructs a new `player kingdom` entity and returns it to the caller.

```csharp
// Static call; no instance required
CampaignCheats.CreatePlayerKingdom(strings);
```

### CreateRandomClan
`public static string CreateRandomClan(List<string> strings)`

**Purpose:** Constructs a new `random clan` entity and returns it to the caller.

```csharp
// Static call; no instance required
CampaignCheats.CreateRandomClan(strings);
```

### LeadKingdom
`public static string LeadKingdom(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.LeadKingdom(strings);
```

### JoinKingdom
`public static string JoinKingdom(List<string> strings)`

**Purpose:** Joins several `kingdom` items into a single whole.

```csharp
// Static call; no instance required
CampaignCheats.JoinKingdom(strings);
```

### JoinKingdomAsMercenary
`public static string JoinKingdomAsMercenary(List<string> strings)`

**Purpose:** Joins several `kingdom as mercenary` items into a single whole.

```csharp
// Static call; no instance required
CampaignCheats.JoinKingdomAsMercenary(strings);
```

### MakeTradeAgreement
`public static string MakeTradeAgreement(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.MakeTradeAgreement(strings);
```

### PrintCriminalRatings
`public static string PrintCriminalRatings(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintCriminalRatings(strings);
```

### SetMainHeroAge
`public static string SetMainHeroAge(List<string> strings)`

**Purpose:** Assigns a new value to `main hero age` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetMainHeroAge(strings);
```

### SetMainPartyAttackable
`public static string SetMainPartyAttackable(List<string> strings)`

**Purpose:** Assigns a new value to `main party attackable` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetMainPartyAttackable(strings);
```

### AddMoraleToParty
`public static string AddMoraleToParty(List<string> strings)`

**Purpose:** Adds `morale to party` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddMoraleToParty(strings);
```

### BoostCohesionOfArmy
`public static string BoostCohesionOfArmy(List<string> strings)`

**Purpose:** Increases the value or strength of `cohesion of army`.

```csharp
// Static call; no instance required
CampaignCheats.BoostCohesionOfArmy(strings);
```

### AddFocusPointCheat
`public static string AddFocusPointCheat(List<string> strings)`

**Purpose:** Adds `focus point cheat` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddFocusPointCheat(strings);
```

### AddAttributePointsCheat
`public static string AddAttributePointsCheat(List<string> strings)`

**Purpose:** Adds `attribute points cheat` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddAttributePointsCheat(strings);
```

### PrintSettlementsWithTournament
`public static string PrintSettlementsWithTournament(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintSettlementsWithTournament(strings);
```

### ConvertListToMultiLine
`public static string ConvertListToMultiLine(List<string> strings)`

**Purpose:** Converts `list to multi line` into another representation or type.

```csharp
// Static call; no instance required
CampaignCheats.ConvertListToMultiLine(strings);
```

### PrintAllIssues
`public static string PrintAllIssues(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintAllIssues(strings);
```

### GiveWorkshopToPlayer
`public static string GiveWorkshopToPlayer(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.GiveWorkshopToPlayer(strings);
```

### MakePregnant
`public static string MakePregnant(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.MakePregnant(strings);
```

### GenerateChild
`public static Hero GenerateChild(Hero hero, bool isFemale, CultureObject culture)`

**Purpose:** Generates an instance, data, or representation of `child`.

```csharp
// Static call; no instance required
CampaignCheats.GenerateChild(hero, false, culture);
```

### AddPrisonerToParty
`public static string AddPrisonerToParty(List<string> strings)`

**Purpose:** Adds `prisoner to party` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddPrisonerToParty(strings);
```

### ClearSettlementDefense
`public static string ClearSettlementDefense(List<string> strings)`

**Purpose:** Removes all `settlement defense` from the current object.

```csharp
// Static call; no instance required
CampaignCheats.ClearSettlementDefense(strings);
```

### AddPrisonersXp
`public static string AddPrisonersXp(List<string> strings)`

**Purpose:** Adds `prisoners xp` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddPrisonersXp(strings);
```

### SetHeroTrait
`public static string SetHeroTrait(List<string> strings)`

**Purpose:** Assigns a new value to `hero trait` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetHeroTrait(strings);
```

### RemoveMilitiasFromSettlement
`public static string RemoveMilitiasFromSettlement(List<string> strings)`

**Purpose:** Removes `militias from settlement` from the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.RemoveMilitiasFromSettlement(strings);
```

### CancelQuestCheat
`public static string CancelQuestCheat(List<string> strings)`

**Purpose:** Checks whether the current object meets the preconditions for `cel quest cheat`.

```csharp
// Static call; no instance required
CampaignCheats.CancelQuestCheat(strings);
```

### KickCompanionFromParty
`public static string KickCompanionFromParty(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.KickCompanionFromParty(strings);
```

### AddTroopsXp
`public static string AddTroopsXp(List<string> strings)`

**Purpose:** Adds `troops xp` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddTroopsXp(strings);
```

### PrintGameplayStatistics
`public static string PrintGameplayStatistics(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintGameplayStatistics(strings);
```

### SetAllArmiesAndPartiesVisible
`public static string SetAllArmiesAndPartiesVisible(List<string> strings)`

**Purpose:** Assigns a new value to `all armies and parties visible` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetAllArmiesAndPartiesVisible(strings);
```

### PrintStrengthOfLordParties
`public static string PrintStrengthOfLordParties(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintStrengthOfLordParties(strings);
```

### ToggleInformationRestrictions
`public static string ToggleInformationRestrictions(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.ToggleInformationRestrictions(strings);
```

### PrintStrengthOfFactions
`public static string PrintStrengthOfFactions(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.PrintStrengthOfFactions(strings);
```

### AddSupportersForMainHero
`public static string AddSupportersForMainHero(List<string> strings)`

**Purpose:** Adds `supporters for main hero` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddSupportersForMainHero(strings);
```

### SetCampaignSpeed
`public static string SetCampaignSpeed(List<string> strings)`

**Purpose:** Assigns a new value to `campaign speed` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetCampaignSpeed(strings);
```

### ShowHideouts
`public static string ShowHideouts(List<string> strings)`

**Purpose:** Displays the UI or element associated with `hideouts`.

```csharp
// Static call; no instance required
CampaignCheats.ShowHideouts(strings);
```

### HideHideouts
`public static string HideHideouts(List<string> strings)`

**Purpose:** Hides the UI or element associated with `hideouts`.

```csharp
// Static call; no instance required
CampaignCheats.HideHideouts(strings);
```

### UnlockCraftingPieces
`public static string UnlockCraftingPieces(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignCheats.UnlockCraftingPieces(strings);
```

### SetRebellionEnabled
`public static string SetRebellionEnabled(List<string> strings)`

**Purpose:** Assigns a new value to `rebellion enabled` and updates the object's internal state.

```csharp
// Static call; no instance required
CampaignCheats.SetRebellionEnabled(strings);
```

### AddTroopsToParty
`public static string AddTroopsToParty(List<string> strings)`

**Purpose:** Adds `troops to party` to the current collection or state.

```csharp
// Static call; no instance required
CampaignCheats.AddTroopsToParty(strings);
```

### IsPartySuitableToUseCheat
`public static bool IsPartySuitableToUseCheat(PartyBase party, bool ignoreMapEvents = false)`

**Purpose:** Determines whether the current object is in the `party suitable to use cheat` state or condition.

```csharp
// Static call; no instance required
CampaignCheats.IsPartySuitableToUseCheat(party, false);
```

## Usage Example

```csharp
CampaignCheats.CheckCheatUsage(errorType);
```

## See Also

- [Area Index](../)