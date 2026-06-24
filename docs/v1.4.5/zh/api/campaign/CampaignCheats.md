<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignCheats`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignCheats

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignCheats`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignCheats.cs`

## 概述

`CampaignCheats` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GetDefaultSettlement` | `public static Settlement GetDefaultSettlement { get; }` |

## 主要方法

### CheckCheatUsage
`public static bool CheckCheatUsage(ref string ErrorType)`

**用途 / Purpose:** 处理 `check cheat usage` 相关逻辑。

### CheckParameters
`public static bool CheckParameters(List<string> strings, int ParameterCount)`

**用途 / Purpose:** 处理 `check parameters` 相关逻辑。

### CheckHelp
`public static bool CheckHelp(List<string> strings)`

**用途 / Purpose:** 处理 `check help` 相关逻辑。

### GetSeparatedNames
`public static List<string> GetSeparatedNames(List<string> strings, bool removeEmptySpaces = false)`

**用途 / Purpose:** 获取 `separated names` 的当前值。

### ConcatenateString
`public static string ConcatenateString(List<string> strings)`

**用途 / Purpose:** 处理 `concatenate string` 相关逻辑。

### ImportMainHero
`public static string ImportMainHero(List<string> strings)`

**用途 / Purpose:** 处理 `import main hero` 相关逻辑。

### ExportMainHero
`public static string ExportMainHero(List<string> strings)`

**用途 / Purpose:** 处理 `export main hero` 相关逻辑。

### SetCraftingStamina
`public static string SetCraftingStamina(List<string> strings)`

**用途 / Purpose:** 设置 `crafting stamina` 的值或状态。

### SetHeroCulture
`public static string SetHeroCulture(List<string> strings)`

**用途 / Purpose:** 设置 `hero culture` 的值或状态。

### SetClanCulture
`public static string SetClanCulture(List<string> strings)`

**用途 / Purpose:** 设置 `clan culture` 的值或状态。

### AddSkillXpToHero
`public static string AddSkillXpToHero(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill xp to hero`。

### PrintPlayerTrait
`public static string PrintPlayerTrait(List<string> strings)`

**用途 / Purpose:** 处理 `print player trait` 相关逻辑。

### ShowSettlements
`public static string ShowSettlements(List<string> strings)`

**用途 / Purpose:** 处理 `show settlements` 相关逻辑。

### SetSkillsOfGivenHero
`public static string SetSkillsOfGivenHero(List<string> strings)`

**用途 / Purpose:** 设置 `skills of given hero` 的值或状态。

### HideSettlements
`public static string HideSettlements(List<string> strings)`

**用途 / Purpose:** 处理 `hide settlements` 相关逻辑。

### SetSkillMainHero
`public static string SetSkillMainHero(List<string> strings)`

**用途 / Purpose:** 设置 `skill main hero` 的值或状态。

### SetSkillCompanion
`public static string SetSkillCompanion(List<string> strings)`

**用途 / Purpose:** 设置 `skill companion` 的值或状态。

### SetAllSkillsOfAllCompanions
`public static string SetAllSkillsOfAllCompanions(List<string> strings)`

**用途 / Purpose:** 设置 `all skills of all companions` 的值或状态。

### SetAllHeroSkills
`public static string SetAllHeroSkills(List<string> strings)`

**用途 / Purpose:** 设置 `all hero skills` 的值或状态。

### SetLoyaltyOfSettlement
`public static string SetLoyaltyOfSettlement(List<string> strings)`

**用途 / Purpose:** 设置 `loyalty of settlement` 的值或状态。

### SetProsperityOfSettlement
`public static string SetProsperityOfSettlement(List<string> strings)`

**用途 / Purpose:** 设置 `prosperity of settlement` 的值或状态。

### SetMilitiaOfSettlement
`public static string SetMilitiaOfSettlement(List<string> strings)`

**用途 / Purpose:** 设置 `militia of settlement` 的值或状态。

### SetSecurityOfSettlement
`public static string SetSecurityOfSettlement(List<string> strings)`

**用途 / Purpose:** 设置 `security of settlement` 的值或状态。

### SetFoodOfSettlement
`public static string SetFoodOfSettlement(List<string> strings)`

**用途 / Purpose:** 设置 `food of settlement` 的值或状态。

### SetHearthOfSettlement
`public static string SetHearthOfSettlement(List<string> strings)`

**用途 / Purpose:** 设置 `hearth of settlement` 的值或状态。

### ShowHeroRelation
`public static string ShowHeroRelation(List<string> strings)`

**用途 / Purpose:** 处理 `show hero relation` 相关逻辑。

### AddHeroRelation
`public static string AddHeroRelation(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `hero relation`。

### PrintMainPartyPosition
`public static string PrintMainPartyPosition(List<string> strings)`

**用途 / Purpose:** 处理 `print main party position` 相关逻辑。

### AddCraftingMaterials
`public static string AddCraftingMaterials(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `crafting materials`。

### HealMainParty
`public static string HealMainParty(List<string> strings)`

**用途 / Purpose:** 处理 `heal main party` 相关逻辑。

### DeclareWar
`public static string DeclareWar(List<string> strings)`

**用途 / Purpose:** 处理 `declare war` 相关逻辑。

### AddItemToPlayerParty
`public static string AddItemToPlayerParty(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `item to player party`。

### DeclarePeace
`public static string DeclarePeace(List<string> strings)`

**用途 / Purpose:** 处理 `declare peace` 相关逻辑。

### AddInfluence
`public static string AddInfluence(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `influence`。

### AddRenown
`public static string AddRenown(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `renown`。

### AddGoldToHero
`public static string AddGoldToHero(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `gold to hero`。

### AddDevelopment
`public static string AddDevelopment(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `development`。

### ActivateAllPolicies
`public static string ActivateAllPolicies(List<string> strings)`

**用途 / Purpose:** 处理 `activate all policies` 相关逻辑。

### SetPlayerReputationTrait
`public static string SetPlayerReputationTrait(List<string> strings)`

**用途 / Purpose:** 设置 `player reputation trait` 的值或状态。

### GiveSettlementToPlayer
`public static string GiveSettlementToPlayer(List<string> strings)`

**用途 / Purpose:** 处理 `give settlement to player` 相关逻辑。

### GiveSettlementToKingdom
`public static string GiveSettlementToKingdom(List<string> strings)`

**用途 / Purpose:** 处理 `give settlement to kingdom` 相关逻辑。

### AddPowerToNotable
`public static string AddPowerToNotable(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `power to notable`。

### LeadYourFaction
`public static string LeadYourFaction(List<string> strings)`

**用途 / Purpose:** 处理 `lead your faction` 相关逻辑。

### PrintHeroesSuitableForMarriage
`public static string PrintHeroesSuitableForMarriage(List<string> strings)`

**用途 / Purpose:** 处理 `print heroes suitable for marriage` 相关逻辑。

### MarryPlayerWithHero
`public static string MarryPlayerWithHero(List<string> strings)`

**用途 / Purpose:** 处理 `marry player with hero` 相关逻辑。

### MarryHeroWithHero
`public static string MarryHeroWithHero(List<string> strings)`

**用途 / Purpose:** 处理 `marry hero with hero` 相关逻辑。

### IsHeroSuitableForMarriageWithPlayer
`public static string IsHeroSuitableForMarriageWithPlayer(List<string> strings)`

**用途 / Purpose:** 处理 `is hero suitable for marriage with player` 相关逻辑。

### CreatePlayerKingdom
`public static string CreatePlayerKingdom(List<string> strings)`

**用途 / Purpose:** 创建一个 `player kingdom` 实例或对象。

### CreateRandomClan
`public static string CreateRandomClan(List<string> strings)`

**用途 / Purpose:** 创建一个 `random clan` 实例或对象。

### LeadKingdom
`public static string LeadKingdom(List<string> strings)`

**用途 / Purpose:** 处理 `lead kingdom` 相关逻辑。

### JoinKingdom
`public static string JoinKingdom(List<string> strings)`

**用途 / Purpose:** 处理 `join kingdom` 相关逻辑。

### JoinKingdomAsMercenary
`public static string JoinKingdomAsMercenary(List<string> strings)`

**用途 / Purpose:** 处理 `join kingdom as mercenary` 相关逻辑。

### MakeTradeAgreement
`public static string MakeTradeAgreement(List<string> strings)`

**用途 / Purpose:** 处理 `make trade agreement` 相关逻辑。

### PrintCriminalRatings
`public static string PrintCriminalRatings(List<string> strings)`

**用途 / Purpose:** 处理 `print criminal ratings` 相关逻辑。

### SetMainHeroAge
`public static string SetMainHeroAge(List<string> strings)`

**用途 / Purpose:** 设置 `main hero age` 的值或状态。

### SetMainPartyAttackable
`public static string SetMainPartyAttackable(List<string> strings)`

**用途 / Purpose:** 设置 `main party attackable` 的值或状态。

### AddMoraleToParty
`public static string AddMoraleToParty(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `morale to party`。

### BoostCohesionOfArmy
`public static string BoostCohesionOfArmy(List<string> strings)`

**用途 / Purpose:** 处理 `boost cohesion of army` 相关逻辑。

### AddFocusPointCheat
`public static string AddFocusPointCheat(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `focus point cheat`。

### AddAttributePointsCheat
`public static string AddAttributePointsCheat(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `attribute points cheat`。

### PrintSettlementsWithTournament
`public static string PrintSettlementsWithTournament(List<string> strings)`

**用途 / Purpose:** 处理 `print settlements with tournament` 相关逻辑。

### ConvertListToMultiLine
`public static string ConvertListToMultiLine(List<string> strings)`

**用途 / Purpose:** 处理 `convert list to multi line` 相关逻辑。

### PrintAllIssues
`public static string PrintAllIssues(List<string> strings)`

**用途 / Purpose:** 处理 `print all issues` 相关逻辑。

### GiveWorkshopToPlayer
`public static string GiveWorkshopToPlayer(List<string> strings)`

**用途 / Purpose:** 处理 `give workshop to player` 相关逻辑。

### MakePregnant
`public static string MakePregnant(List<string> strings)`

**用途 / Purpose:** 处理 `make pregnant` 相关逻辑。

### GenerateChild
`public static Hero GenerateChild(Hero hero, bool isFemale, CultureObject culture)`

**用途 / Purpose:** 处理 `generate child` 相关逻辑。

### AddPrisonerToParty
`public static string AddPrisonerToParty(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `prisoner to party`。

### ClearSettlementDefense
`public static string ClearSettlementDefense(List<string> strings)`

**用途 / Purpose:** 处理 `clear settlement defense` 相关逻辑。

### AddPrisonersXp
`public static string AddPrisonersXp(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `prisoners xp`。

### SetHeroTrait
`public static string SetHeroTrait(List<string> strings)`

**用途 / Purpose:** 设置 `hero trait` 的值或状态。

### RemoveMilitiasFromSettlement
`public static string RemoveMilitiasFromSettlement(List<string> strings)`

**用途 / Purpose:** 从当前集合/状态中移除 `militias from settlement`。

### CancelQuestCheat
`public static string CancelQuestCheat(List<string> strings)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel quest cheat`。

### KickCompanionFromParty
`public static string KickCompanionFromParty(List<string> strings)`

**用途 / Purpose:** 处理 `kick companion from party` 相关逻辑。

### AddTroopsXp
`public static string AddTroopsXp(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `troops xp`。

### PrintGameplayStatistics
`public static string PrintGameplayStatistics(List<string> strings)`

**用途 / Purpose:** 处理 `print gameplay statistics` 相关逻辑。

### SetAllArmiesAndPartiesVisible
`public static string SetAllArmiesAndPartiesVisible(List<string> strings)`

**用途 / Purpose:** 设置 `all armies and parties visible` 的值或状态。

### PrintStrengthOfLordParties
`public static string PrintStrengthOfLordParties(List<string> strings)`

**用途 / Purpose:** 处理 `print strength of lord parties` 相关逻辑。

### ToggleInformationRestrictions
`public static string ToggleInformationRestrictions(List<string> strings)`

**用途 / Purpose:** 处理 `toggle information restrictions` 相关逻辑。

### PrintStrengthOfFactions
`public static string PrintStrengthOfFactions(List<string> strings)`

**用途 / Purpose:** 处理 `print strength of factions` 相关逻辑。

### AddSupportersForMainHero
`public static string AddSupportersForMainHero(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `supporters for main hero`。

### SetCampaignSpeed
`public static string SetCampaignSpeed(List<string> strings)`

**用途 / Purpose:** 设置 `campaign speed` 的值或状态。

### ShowHideouts
`public static string ShowHideouts(List<string> strings)`

**用途 / Purpose:** 处理 `show hideouts` 相关逻辑。

### HideHideouts
`public static string HideHideouts(List<string> strings)`

**用途 / Purpose:** 处理 `hide hideouts` 相关逻辑。

### UnlockCraftingPieces
`public static string UnlockCraftingPieces(List<string> strings)`

**用途 / Purpose:** 处理 `unlock crafting pieces` 相关逻辑。

### SetRebellionEnabled
`public static string SetRebellionEnabled(List<string> strings)`

**用途 / Purpose:** 设置 `rebellion enabled` 的值或状态。

### AddTroopsToParty
`public static string AddTroopsToParty(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `troops to party`。

### IsPartySuitableToUseCheat
`public static bool IsPartySuitableToUseCheat(PartyBase party, bool ignoreMapEvents = false)`

**用途 / Purpose:** 处理 `is party suitable to use cheat` 相关逻辑。

## 使用示例

```csharp
CampaignCheats.CheckCheatUsage(errorType);
```

## 参见

- [完整类目录](../catalog)