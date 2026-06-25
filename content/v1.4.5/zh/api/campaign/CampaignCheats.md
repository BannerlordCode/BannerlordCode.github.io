---
title: "CampaignCheats"
description: "CampaignCheats 的自动生成类参考。"
---
# CampaignCheats

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignCheats`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignCheats.cs`

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

**用途 / Purpose:** 检查「cheat usage」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
CampaignCheats.CheckCheatUsage(errorType);
```

### CheckParameters
`public static bool CheckParameters(List<string> strings, int ParameterCount)`

**用途 / Purpose:** 检查「parameters」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
CampaignCheats.CheckParameters(strings, 0);
```

### CheckHelp
`public static bool CheckHelp(List<string> strings)`

**用途 / Purpose:** 检查「help」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
CampaignCheats.CheckHelp(strings);
```

### GetSeparatedNames
`public static List<string> GetSeparatedNames(List<string> strings, bool removeEmptySpaces = false)`

**用途 / Purpose:** 读取并返回当前对象中 「separated names」 的结果。

```csharp
// 静态调用，不需要实例
CampaignCheats.GetSeparatedNames(strings, false);
```

### ConcatenateString
`public static string ConcatenateString(List<string> strings)`

**用途 / Purpose:** 处理与 「concatenate string」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.ConcatenateString(strings);
```

### ImportMainHero
`public static string ImportMainHero(List<string> strings)`

**用途 / Purpose:** 处理与 「import main hero」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.ImportMainHero(strings);
```

### ExportMainHero
`public static string ExportMainHero(List<string> strings)`

**用途 / Purpose:** 处理与 「export main hero」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.ExportMainHero(strings);
```

### SetCraftingStamina
`public static string SetCraftingStamina(List<string> strings)`

**用途 / Purpose:** 为 「crafting stamina」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetCraftingStamina(strings);
```

### SetHeroCulture
`public static string SetHeroCulture(List<string> strings)`

**用途 / Purpose:** 为 「hero culture」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetHeroCulture(strings);
```

### SetClanCulture
`public static string SetClanCulture(List<string> strings)`

**用途 / Purpose:** 为 「clan culture」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetClanCulture(strings);
```

### AddSkillXpToHero
`public static string AddSkillXpToHero(List<string> strings)`

**用途 / Purpose:** 将 「skill xp to hero」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddSkillXpToHero(strings);
```

### PrintPlayerTrait
`public static string PrintPlayerTrait(List<string> strings)`

**用途 / Purpose:** 处理与 「print player trait」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintPlayerTrait(strings);
```

### ShowSettlements
`public static string ShowSettlements(List<string> strings)`

**用途 / Purpose:** 显示「settlements」对应的界面或元素。

```csharp
// 静态调用，不需要实例
CampaignCheats.ShowSettlements(strings);
```

### SetSkillsOfGivenHero
`public static string SetSkillsOfGivenHero(List<string> strings)`

**用途 / Purpose:** 为 「skills of given hero」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetSkillsOfGivenHero(strings);
```

### HideSettlements
`public static string HideSettlements(List<string> strings)`

**用途 / Purpose:** 隐藏「settlements」对应的界面或元素。

```csharp
// 静态调用，不需要实例
CampaignCheats.HideSettlements(strings);
```

### SetSkillMainHero
`public static string SetSkillMainHero(List<string> strings)`

**用途 / Purpose:** 为 「skill main hero」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetSkillMainHero(strings);
```

### SetSkillCompanion
`public static string SetSkillCompanion(List<string> strings)`

**用途 / Purpose:** 为 「skill companion」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetSkillCompanion(strings);
```

### SetAllSkillsOfAllCompanions
`public static string SetAllSkillsOfAllCompanions(List<string> strings)`

**用途 / Purpose:** 为 「all skills of all companions」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetAllSkillsOfAllCompanions(strings);
```

### SetAllHeroSkills
`public static string SetAllHeroSkills(List<string> strings)`

**用途 / Purpose:** 为 「all hero skills」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetAllHeroSkills(strings);
```

### SetLoyaltyOfSettlement
`public static string SetLoyaltyOfSettlement(List<string> strings)`

**用途 / Purpose:** 为 「loyalty of settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetLoyaltyOfSettlement(strings);
```

### SetProsperityOfSettlement
`public static string SetProsperityOfSettlement(List<string> strings)`

**用途 / Purpose:** 为 「prosperity of settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetProsperityOfSettlement(strings);
```

### SetMilitiaOfSettlement
`public static string SetMilitiaOfSettlement(List<string> strings)`

**用途 / Purpose:** 为 「militia of settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetMilitiaOfSettlement(strings);
```

### SetSecurityOfSettlement
`public static string SetSecurityOfSettlement(List<string> strings)`

**用途 / Purpose:** 为 「security of settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetSecurityOfSettlement(strings);
```

### SetFoodOfSettlement
`public static string SetFoodOfSettlement(List<string> strings)`

**用途 / Purpose:** 为 「food of settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetFoodOfSettlement(strings);
```

### SetHearthOfSettlement
`public static string SetHearthOfSettlement(List<string> strings)`

**用途 / Purpose:** 为 「hearth of settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetHearthOfSettlement(strings);
```

### ShowHeroRelation
`public static string ShowHeroRelation(List<string> strings)`

**用途 / Purpose:** 显示「hero relation」对应的界面或元素。

```csharp
// 静态调用，不需要实例
CampaignCheats.ShowHeroRelation(strings);
```

### AddHeroRelation
`public static string AddHeroRelation(List<string> strings)`

**用途 / Purpose:** 将 「hero relation」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddHeroRelation(strings);
```

### PrintMainPartyPosition
`public static string PrintMainPartyPosition(List<string> strings)`

**用途 / Purpose:** 处理与 「print main party position」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintMainPartyPosition(strings);
```

### AddCraftingMaterials
`public static string AddCraftingMaterials(List<string> strings)`

**用途 / Purpose:** 将 「crafting materials」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddCraftingMaterials(strings);
```

### HealMainParty
`public static string HealMainParty(List<string> strings)`

**用途 / Purpose:** 处理与 「heal main party」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.HealMainParty(strings);
```

### DeclareWar
`public static string DeclareWar(List<string> strings)`

**用途 / Purpose:** 处理与 「declare war」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.DeclareWar(strings);
```

### AddItemToPlayerParty
`public static string AddItemToPlayerParty(List<string> strings)`

**用途 / Purpose:** 将 「item to player party」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddItemToPlayerParty(strings);
```

### DeclarePeace
`public static string DeclarePeace(List<string> strings)`

**用途 / Purpose:** 处理与 「declare peace」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.DeclarePeace(strings);
```

### AddInfluence
`public static string AddInfluence(List<string> strings)`

**用途 / Purpose:** 将 「influence」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddInfluence(strings);
```

### AddRenown
`public static string AddRenown(List<string> strings)`

**用途 / Purpose:** 将 「renown」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddRenown(strings);
```

### AddGoldToHero
`public static string AddGoldToHero(List<string> strings)`

**用途 / Purpose:** 将 「gold to hero」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddGoldToHero(strings);
```

### AddDevelopment
`public static string AddDevelopment(List<string> strings)`

**用途 / Purpose:** 将 「development」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddDevelopment(strings);
```

### ActivateAllPolicies
`public static string ActivateAllPolicies(List<string> strings)`

**用途 / Purpose:** 激活「all policies」对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
CampaignCheats.ActivateAllPolicies(strings);
```

### SetPlayerReputationTrait
`public static string SetPlayerReputationTrait(List<string> strings)`

**用途 / Purpose:** 为 「player reputation trait」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetPlayerReputationTrait(strings);
```

### GiveSettlementToPlayer
`public static string GiveSettlementToPlayer(List<string> strings)`

**用途 / Purpose:** 处理与 「give settlement to player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.GiveSettlementToPlayer(strings);
```

### GiveSettlementToKingdom
`public static string GiveSettlementToKingdom(List<string> strings)`

**用途 / Purpose:** 处理与 「give settlement to kingdom」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.GiveSettlementToKingdom(strings);
```

### AddPowerToNotable
`public static string AddPowerToNotable(List<string> strings)`

**用途 / Purpose:** 将 「power to notable」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddPowerToNotable(strings);
```

### LeadYourFaction
`public static string LeadYourFaction(List<string> strings)`

**用途 / Purpose:** 处理与 「lead your faction」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.LeadYourFaction(strings);
```

### PrintHeroesSuitableForMarriage
`public static string PrintHeroesSuitableForMarriage(List<string> strings)`

**用途 / Purpose:** 处理与 「print heroes suitable for marriage」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintHeroesSuitableForMarriage(strings);
```

### MarryPlayerWithHero
`public static string MarryPlayerWithHero(List<string> strings)`

**用途 / Purpose:** 处理与 「marry player with hero」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.MarryPlayerWithHero(strings);
```

### MarryHeroWithHero
`public static string MarryHeroWithHero(List<string> strings)`

**用途 / Purpose:** 处理与 「marry hero with hero」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.MarryHeroWithHero(strings);
```

### IsHeroSuitableForMarriageWithPlayer
`public static string IsHeroSuitableForMarriageWithPlayer(List<string> strings)`

**用途 / Purpose:** 判断当前对象是否处于 「hero suitable for marriage with player」 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignCheats.IsHeroSuitableForMarriageWithPlayer(strings);
```

### CreatePlayerKingdom
`public static string CreatePlayerKingdom(List<string> strings)`

**用途 / Purpose:** 构建一个新的 「player kingdom」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CampaignCheats.CreatePlayerKingdom(strings);
```

### CreateRandomClan
`public static string CreateRandomClan(List<string> strings)`

**用途 / Purpose:** 构建一个新的 「random clan」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CampaignCheats.CreateRandomClan(strings);
```

### LeadKingdom
`public static string LeadKingdom(List<string> strings)`

**用途 / Purpose:** 处理与 「lead kingdom」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.LeadKingdom(strings);
```

### JoinKingdom
`public static string JoinKingdom(List<string> strings)`

**用途 / Purpose:** 把若干「kingdom」连接成一个整体。

```csharp
// 静态调用，不需要实例
CampaignCheats.JoinKingdom(strings);
```

### JoinKingdomAsMercenary
`public static string JoinKingdomAsMercenary(List<string> strings)`

**用途 / Purpose:** 把若干「kingdom as mercenary」连接成一个整体。

```csharp
// 静态调用，不需要实例
CampaignCheats.JoinKingdomAsMercenary(strings);
```

### MakeTradeAgreement
`public static string MakeTradeAgreement(List<string> strings)`

**用途 / Purpose:** 处理与 「make trade agreement」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.MakeTradeAgreement(strings);
```

### PrintCriminalRatings
`public static string PrintCriminalRatings(List<string> strings)`

**用途 / Purpose:** 处理与 「print criminal ratings」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintCriminalRatings(strings);
```

### SetMainHeroAge
`public static string SetMainHeroAge(List<string> strings)`

**用途 / Purpose:** 为 「main hero age」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetMainHeroAge(strings);
```

### SetMainPartyAttackable
`public static string SetMainPartyAttackable(List<string> strings)`

**用途 / Purpose:** 为 「main party attackable」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetMainPartyAttackable(strings);
```

### AddMoraleToParty
`public static string AddMoraleToParty(List<string> strings)`

**用途 / Purpose:** 将 「morale to party」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddMoraleToParty(strings);
```

### BoostCohesionOfArmy
`public static string BoostCohesionOfArmy(List<string> strings)`

**用途 / Purpose:** 提升「cohesion of army」的数值或强度。

```csharp
// 静态调用，不需要实例
CampaignCheats.BoostCohesionOfArmy(strings);
```

### AddFocusPointCheat
`public static string AddFocusPointCheat(List<string> strings)`

**用途 / Purpose:** 将 「focus point cheat」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddFocusPointCheat(strings);
```

### AddAttributePointsCheat
`public static string AddAttributePointsCheat(List<string> strings)`

**用途 / Purpose:** 将 「attribute points cheat」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddAttributePointsCheat(strings);
```

### PrintSettlementsWithTournament
`public static string PrintSettlementsWithTournament(List<string> strings)`

**用途 / Purpose:** 处理与 「print settlements with tournament」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintSettlementsWithTournament(strings);
```

### ConvertListToMultiLine
`public static string ConvertListToMultiLine(List<string> strings)`

**用途 / Purpose:** 把「list to multi line」转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
CampaignCheats.ConvertListToMultiLine(strings);
```

### PrintAllIssues
`public static string PrintAllIssues(List<string> strings)`

**用途 / Purpose:** 处理与 「print all issues」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintAllIssues(strings);
```

### GiveWorkshopToPlayer
`public static string GiveWorkshopToPlayer(List<string> strings)`

**用途 / Purpose:** 处理与 「give workshop to player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.GiveWorkshopToPlayer(strings);
```

### MakePregnant
`public static string MakePregnant(List<string> strings)`

**用途 / Purpose:** 处理与 「make pregnant」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.MakePregnant(strings);
```

### GenerateChild
`public static Hero GenerateChild(Hero hero, bool isFemale, CultureObject culture)`

**用途 / Purpose:** 生成「child」的实例、数据或表示。

```csharp
// 静态调用，不需要实例
CampaignCheats.GenerateChild(hero, false, culture);
```

### AddPrisonerToParty
`public static string AddPrisonerToParty(List<string> strings)`

**用途 / Purpose:** 将 「prisoner to party」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddPrisonerToParty(strings);
```

### ClearSettlementDefense
`public static string ClearSettlementDefense(List<string> strings)`

**用途 / Purpose:** 清空当前对象中的「settlement defense」。

```csharp
// 静态调用，不需要实例
CampaignCheats.ClearSettlementDefense(strings);
```

### AddPrisonersXp
`public static string AddPrisonersXp(List<string> strings)`

**用途 / Purpose:** 将 「prisoners xp」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddPrisonersXp(strings);
```

### SetHeroTrait
`public static string SetHeroTrait(List<string> strings)`

**用途 / Purpose:** 为 「hero trait」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetHeroTrait(strings);
```

### RemoveMilitiasFromSettlement
`public static string RemoveMilitiasFromSettlement(List<string> strings)`

**用途 / Purpose:** 从当前容器或状态中移除 「militias from settlement」。

```csharp
// 静态调用，不需要实例
CampaignCheats.RemoveMilitiasFromSettlement(strings);
```

### CancelQuestCheat
`public static string CancelQuestCheat(List<string> strings)`

**用途 / Purpose:** 检查当前对象是否满足 「cel quest cheat」 的前置条件。

```csharp
// 静态调用，不需要实例
CampaignCheats.CancelQuestCheat(strings);
```

### KickCompanionFromParty
`public static string KickCompanionFromParty(List<string> strings)`

**用途 / Purpose:** 处理与 「kick companion from party」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.KickCompanionFromParty(strings);
```

### AddTroopsXp
`public static string AddTroopsXp(List<string> strings)`

**用途 / Purpose:** 将 「troops xp」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddTroopsXp(strings);
```

### PrintGameplayStatistics
`public static string PrintGameplayStatistics(List<string> strings)`

**用途 / Purpose:** 处理与 「print gameplay statistics」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintGameplayStatistics(strings);
```

### SetAllArmiesAndPartiesVisible
`public static string SetAllArmiesAndPartiesVisible(List<string> strings)`

**用途 / Purpose:** 为 「all armies and parties visible」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetAllArmiesAndPartiesVisible(strings);
```

### PrintStrengthOfLordParties
`public static string PrintStrengthOfLordParties(List<string> strings)`

**用途 / Purpose:** 处理与 「print strength of lord parties」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintStrengthOfLordParties(strings);
```

### ToggleInformationRestrictions
`public static string ToggleInformationRestrictions(List<string> strings)`

**用途 / Purpose:** 处理与 「toggle information restrictions」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.ToggleInformationRestrictions(strings);
```

### PrintStrengthOfFactions
`public static string PrintStrengthOfFactions(List<string> strings)`

**用途 / Purpose:** 处理与 「print strength of factions」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.PrintStrengthOfFactions(strings);
```

### AddSupportersForMainHero
`public static string AddSupportersForMainHero(List<string> strings)`

**用途 / Purpose:** 将 「supporters for main hero」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddSupportersForMainHero(strings);
```

### SetCampaignSpeed
`public static string SetCampaignSpeed(List<string> strings)`

**用途 / Purpose:** 为 「campaign speed」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetCampaignSpeed(strings);
```

### ShowHideouts
`public static string ShowHideouts(List<string> strings)`

**用途 / Purpose:** 显示「hideouts」对应的界面或元素。

```csharp
// 静态调用，不需要实例
CampaignCheats.ShowHideouts(strings);
```

### HideHideouts
`public static string HideHideouts(List<string> strings)`

**用途 / Purpose:** 隐藏「hideouts」对应的界面或元素。

```csharp
// 静态调用，不需要实例
CampaignCheats.HideHideouts(strings);
```

### UnlockCraftingPieces
`public static string UnlockCraftingPieces(List<string> strings)`

**用途 / Purpose:** 处理与 「unlock crafting pieces」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CampaignCheats.UnlockCraftingPieces(strings);
```

### SetRebellionEnabled
`public static string SetRebellionEnabled(List<string> strings)`

**用途 / Purpose:** 为 「rebellion enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CampaignCheats.SetRebellionEnabled(strings);
```

### AddTroopsToParty
`public static string AddTroopsToParty(List<string> strings)`

**用途 / Purpose:** 将 「troops to party」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CampaignCheats.AddTroopsToParty(strings);
```

### IsPartySuitableToUseCheat
`public static bool IsPartySuitableToUseCheat(PartyBase party, bool ignoreMapEvents = false)`

**用途 / Purpose:** 判断当前对象是否处于 「party suitable to use cheat」 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignCheats.IsPartySuitableToUseCheat(party, false);
```

## 使用示例

```csharp
CampaignCheats.CheckCheatUsage(errorType);
```

## 参见

- [本区域目录](../)