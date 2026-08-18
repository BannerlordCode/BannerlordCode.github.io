---
title: "CampaignCheats"
description: "承载全部 campaign.* 调试/作弊控制台命令与跨模块复用的静态辅助方法（对象解析、参数校验、作弊开关检查）的静态工具类，多数命令是对 *Action 或世界状态字段的薄封装。"
---

# CampaignCheats

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** `public static class CampaignCheats`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignCheats.cs

## 概述

`CampaignCheats` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个静态工具类，承载了游戏内全部以 `campaign.*` 为前缀的调试/作弊控制台命令（例如 `add_gold_to_hero`、`declare_war`、`give_settlement_to_player`、`set_militia_of_settlement` 等），并集中提供被命令与各模块复用的解析与校验辅助方法（`CheckCheatUsage`、`TryGetObject`、`GetSeparatedNames`、`ConcatenateString` 等）。它本身不持有任何战役状态，也不是 `Campaign` 层通过 `GameModels` 解析出的模型——所有能力通过静态方法直接调用，在战役运行期对 `Hero`、`Settlement`、`Clan`、`Kingdom`、`MobileParty` 等实体做即时修改或查询。

## 心智模型

`CampaignCheats` 是一个无状态、无继承、无存档字段的静态工具类（`public static class`，位于 `TaleWorlds.CampaignSystem` 命名空间）；与需要经 `Campaign.Current.Models` 解析的模型不同，它的方法用类名直接调用、在战役运行期即时生效。它扮演两层角色：一层是“作弊命令入口”，每个 `[CommandLineFunctionality.CommandLineArgumentFunction("命令名", "campaign")]` 标记的方法被游戏内控制台（`CommandLineFunctionality`）按名称分发，必须在 `Game.Current.CheatMode` 开启且 `Campaign.Current` 非空的上下文里运行；另一层是“可复用的静态辅助 API”，`CheckCheatUsage` / `CheckParameters` / `CheckHelp` / `TryGetObject` / `GetSeparatedNames` 被 `SandBox.View`、`StoryMode`、`Hideout` 等跨模块代码直接引用。最关键的一点：这些便捷方法大多是对底层 `*Action`（如 `GiveGoldAction`、`DeclareWarAction`）或世界状态字段的薄封装；改动世界状态时务必优先使用正式的 `*Action` 而非自己直接改字段，因为直接改字段会绕过事件级联与一致性校验，可能制造坏档。

## 何时使用 / 何时不要使用

- **使用**：需要在调试或 mod 中即时改变 `Hero` / `Settlement` / `Clan` 等状态时，优先调用走 `*Action` 的封装（`AddGoldToHero`、`AddInfluence`、`AddRenown`、`DeclareWar`、`MakePeace`、`GiveSettlementToPlayer` 等），它们经过正规 Action 流程、坏档安全；或复用 `CheckCheatUsage` / `TryGetObject` 等辅助方法编写你自己的命令。
- **不要使用**：不要把直接改字段的命令（`SetLoyaltyOfSettlement` 直接赋值 `Town.Loyalty`、`SetHeroCulture` 直接赋值 `Culture` 等）当作正式游戏逻辑——它们绕过 `ChangeOwnerOfSettlementAction` / `ChangeRelationAction` 等事件级联，可能造成关联数据不一致；也不要在战役未启动、`CheatMode` 关闭或非 `Campaign` 层（如 `Mission`）里调用；生产代码应改用对应的 `*Action` 而非 Cheats。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 提供 `Campaign.Current` 与 `CheatMode` 运行期上下文；`CheckCheatUsage` 依赖它判断战役是否已启动。
- [Hero](../Hero) —— 绝大多数命令操作的对象：文化、技能、金币、关系、特性、势力支持度等。
- [Settlement](../Settlement) —— `set_*_of_settlement` 系列命令直接读写其 `Town` / `Village` 字段。
- [Clan](../Clan) —— 影响力、声望、文化、统治权相关命令的目标。
- [Kingdom](../Kingdom) —— 宣战 / 议和 / 加入阵营命令的操作对象。
- [MobileParty](../MobileParty) —— 队伍士气、兵力、物品、俘虏经验等命令的作用对象。

下游与协同系统（走正规 `*Action` 的命令所依赖的页面，均位于 `campaign-ext`）：

- [GiveGoldAction](../../campaign-ext/GiveGoldAction) —— `AddGoldToHero`、`CreateRandomClan`、`GiveWorkshopToPlayer` 内部调用 `GiveGoldAction.ApplyBetweenCharacters`。
- [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) —— `AddHeroRelation` 内部调用 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes`。
- [DeclareWarAction](../../campaign-ext/DeclareWarAction) —— `DeclareWar` 内部调用 `DeclareWarAction.ApplyByDefault`。
- [MakePeaceAction](../../campaign-ext/MakePeaceAction) —— `DeclarePeace` 内部调用 `MakePeaceAction.Apply`。
- [GainRenownAction](../../campaign-ext/GainRenownAction) —— `AddRenown` 内部调用 `GainRenownAction.Apply`。
- [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction) —— `AddInfluence` 内部调用 `ChangeClanInfluenceAction.Apply`。
- [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) —— `GiveSettlementToPlayer` / `GiveSettlementToKingdom` 内部调用 `ChangeOwnerOfSettlementAction.ApplyByDefault`。
- [MarriageAction](../../campaign-ext/MarriageAction) —— `MarryPlayerWithHero` / `MarryHeroWithHero` / `MakePregnant` 内部调用 `MarriageAction.Apply`。
- [ChangeRulingClanAction](../../campaign-ext/ChangeRulingClanAction) —— `LeadYourFaction` / `LeadKingdom` 在 Kingdom 分支调用 `ChangeRulingClanAction.Apply`。
- [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction) —— `JoinKingdom` / `JoinKingdomAsMercenary` / `CreateRandomClan` 内部调用 `ChangeKingdomAction.ApplyByJoinToKingdom` / `ApplyByJoinFactionAsMercenary`。

## 风险

- **必须在战役上下文 + CheatMode**：每个命令首行调用 `CheckCheatUsage`，检查 `Campaign.Current != null` 与 `Game.Current.CheatMode`；在非战役或作弊未开启时调用只会返回错误字符串、什么都不做，不会崩溃但也没有效果。
- **直接改字段绕过事件级联（最危险）**：`SetHeroCulture` / `SetClanCulture` 直接 `obj.Culture = ...`、`SetLoyaltyOfSettlement` 直接 `obj.Town.Loyalty = ...`、`SetMilitiaOfSettlement` 直接 `obj.Militia = ...` 等，不经过 `ChangeOwnerOfSettlementAction` / `ChangeRelationAction` 等正规 Action，不触发关联系统刷新，可能让领地军民、外交、关系等数据处于不一致状态，严重时损坏存档。
- **缓存实例跨战役失效**：虽然静态类本身不会“被缓存”，但如果你把 `TryGetObject` 解析出的 `Hero` / `Settlement` 引用长期持有，重载战役后会指向已销毁对象。每次需要时重新解析，不要缓存跨战役的实体引用。
- **反射 hack 不稳定**：`UnlockCraftingPieces`、`SetRebellionEnabled` 通过反射读写 `CraftingCampaignBehavior` / `RebellionsCampaignBehavior` 的私有字段（`_openedPartsDictionary`、`_rebellionEnabled`），对游戏版本极其敏感，版本升级即可能失效或抛异常。
- **数值上限保护**：`IsValueAcceptable` 把多数数值限制在 10000（`_maxAmountPlayerCanGive`），超过会返回 "The value is too much"；金币等另有独立上限（如 `Hero.Gold` 在 0–100000000 之间）。

## 成员说明

### 通用静态辅助方法（被命令与跨模块代码复用）

- **`CheckCheatUsage(ref string ErrorType)`**
  - 用途：检查当前是否满足执行作弊的前置条件——`Campaign.Current` 非空且 `Game.Current.CheatMode` 开启；不满足时通过 `ref` 参数回填错误原因（"Campaign was not started." 或 "Cheat mode is disabled!"）并返回 `false`。
  - 内部：纯校验，不改任何世界状态。
  - 调用时机：每个命令方法的第一行；也被 `SandBox.ViewCheats`、`StoryModeCheats`、`HideoutAmbushMissionController` 等跨模块代码直接复用。

- **`CheckParameters(List<string> strings, int ParameterCount)`**
  - 用途：校验控制台传入的参数 token 数量是否等于期望值，用于拒绝格式错误的调用。
  - 内部：纯校验。
  - 调用时机：命令方法解析参数前。

- **`CheckHelp(List<string> strings)`**
  - 用途：判断首个参数是否为 `"help"`，是则返回 `true` 让命令打印用法。
  - 内部：纯校验。
  - 调用时机：命令方法解析参数前。

- **`GetSeparatedNames(List<string> strings, bool removeEmptySpaces = false)`**
  - 用途：按 `|` 分隔符把扁平的参数 token 列表切分成多个命名段，可选去掉空格；是命令解析 `Name | Value` 形式参数的基础工具。
  - 内部：纯字符串处理。
  - 调用时机：几乎所有带 `|` 分隔参数的命令内部调用；也被 `SandBoxViewCheats` 直接复用。

- **`ConcatenateString(List<string> strings)`**
  - 用途：把参数 token 用空格拼接成单个字符串（用于单参数名称或文件路径）。
  - 内部：纯字符串处理。
  - 调用时机：单参数命令内部；被 `SandBoxViewCheats` 直接复用。

- **`TryGetObject<T>(string requestedId, out T obj, out string errorMessage, Func<T, bool> predicate = null)`**
  - 用途：在 `CampaignObjectManager` / `MBObjectManager` 中按 `StringId` 或名称（支持忽略大小写、去空格、包含匹配等标志）查找类型为 `T`（`MBObjectBase` 子类，如 `Hero` / `Settlement` / `Clan` / `Kingdom`）的对象，找不到或歧义时通过 `out errorMessage` 回填原因。这是命令把玩家输入解析成实体的核心方法。
  - 内部：纯查询，不改状态。
  - 调用时机：每个需要按名称/Id 定位实体的命令内部；被 `SandBoxViewCheats` 直接复用（`CampaignCheats.TryGetObject<Hero>(...)`）。

- **`IsPartySuitableToUseCheat(PartyBase party, bool ignoreMapEvents = false)`**
  - 用途：判断一个 `PartyBase` 是否处于可施加作弊的状态（不在地图事件/围城事件中、活跃、首领活跃）。
  - 内部：纯校验。
  - 调用时机：涉及队伍操作的命令内部。

- **`GetDefaultSettlement`（静态属性）**
  - 用途：返回默认定居点：主角的家园定居点，为空时取随机城镇的定居点。
  - 内部：只读查询。
  - 调用时机：需要兜底定居点时使用。

- **`ConvertListToMultiLine(List<string> strings)`**
  - 用途：把字符串列表拼成多行文本，供打印类命令使用。
  - 内部：纯字符串处理。

- **`GenerateChild(Hero hero, bool isFemale, CultureObject culture)`**
  - 用途：为给定英雄生成并交付一个后代 `Hero`（必要时先通过 `MarriageAction` 结婚、通过 `MakePregnantAction` 受孕，再 `HeroCreator.DeliverOffSpring`），并设定其文化。
  - 内部：走 `MarriageAction` / `MakePregnantAction`（坏档安全）。
  - 调用时机：`MakePregnant` 相关逻辑内部复用。

- **`ErrorType`（静态字段）**
  - 用途：保存最近一次校验失败的原因字符串，供 `CheckCheatUsage` 写入、命令读取并返回给控制台。

### 走 `*Action` 的便捷封装（坏档安全）

这些命令内部经由正规的 `*Action`，会触发事件级联与一致性更新，是改动世界状态时**应当优先**使用的一类。

- **`AddGoldToHero(List<string> strings)`**
  - 用途：给指定（或主角）英雄增加金币；内部调用 `GiveGoldAction.ApplyBetweenCharacters(null, obj, result, disableNotification: true)`，并校验 `Hero.Gold` 落在 0–100000000。
  - 内部：走 `GiveGoldAction`。
  - 调用时机：`campaign.add_gold_to_hero` 控制台命令。

- **`AddInfluence(List<string> strings)`**
  - 用途：改变玩家宗族的影响力；内部调用 `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, num)`。
  - 内部：走 `ChangeClanInfluenceAction`。

- **`AddRenown(List<string> strings)`**
  - 用途：给指定宗族（默认玩家宗族）增加声望；内部调用 `GainRenownAction.Apply(hero, result)`。
  - 内部：走 `GainRenownAction`。

- **`AddHeroRelation(List<string> strings)`**
  - 用途：改变两名英雄之间的关系值；内部对单个目标调用 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes(obj2, obj, result)`，`all` 模式下对全体存活英雄批量调用。
  - 内部：走 `ChangeRelationAction`。

- **`DeclareWar(List<string> strings)`**
  - 用途：在两个阵营（王国或宗族）间宣战；内部先解析 `IFaction`，再调用 `DeclareWarAction.ApplyByDefault(faction, faction2)`。
  - 内部：走 `DeclareWarAction`。

- **`DeclarePeace(List<string> strings)`**
  - 用途：在两个处于战争状态的阵营间议和；内部调用 `MakePeaceAction.Apply(faction, faction2)`。
  - 内部：走 `MakePeaceAction`。

- **`GiveSettlementToPlayer(List<string> strings)` / `GiveSettlementToKingdom(List<string> strings)`**
  - 用途：把城堡/城镇的所有权转给主角或指定王国；内部调用 `ChangeOwnerOfSettlementAction.ApplyByDefault(...)`（"Calradia" 参数可一次性转交全部城镇）。
  - 内部：走 `ChangeOwnerOfSettlementAction`。

- **`JoinKingdom(List<string> strings)` / `JoinKingdomAsMercenary(List<string> strings)`**
  - 用途：让玩家宗族加入指定王国或作为雇佣兵加入；内部调用 `ChangeKingdomAction.ApplyByJoinToKingdom` / `ApplyByJoinFactionAsMercenary`。
  - 内部：走 `ChangeKingdomAction`。

- **`LeadYourFaction(List<string> strings)` / `LeadKingdom(List<string> strings)`**
  - 用途：让主角成为其阵营的统治者；Kingdom 分支调用 `ChangeRulingClanAction.Apply(kingdom, Clan.PlayerClan)`（坏档安全），Clan 分支则直接 `(clan).SetLeader(Hero.MainHero)`（危险，绕过 Action）。
  - 内部：混合——Kingdom 走 `ChangeRulingClanAction`，Clan 直接改字段。

- **`MarryPlayerWithHero(List<string> strings)` / `MarryHeroWithHero(List<string> strings)` / `MakePregnant(List<string> strings)`**
  - 用途：缔结婚姻或使配偶受孕；内部调用 `MarriageAction.Apply`（及 `MakePregnantAction.Apply`）。
  - 内部：走 `MarriageAction` / `MakePregnantAction`。

- **`CreateRandomClan(List<string> strings)`**
  - 用途：在指定王国下创建随机宗族并指派首领；内部调用 `ChangeKingdomAction.ApplyByJoinToKingdom`、`EnterSettlementAction.ApplyForCharacterOnly`、`GiveGoldAction.ApplyBetweenCharacters`。
  - 内部：走多个 `*Action`。

- **`CreatePlayerKingdom(List<string> strings)`**
  - 用途：用玩家宗族创建自己的王国；内部直接调用 `Campaign.Current.KingdomManager.CreateKingdom(...)`（经管理器，非 Action）。
  - 内部：经 `KingdomManager`。

- **`AddPrisonerToParty(List<string> strings)`**
  - 用途：把一名敌方英雄抓获为指定队伍的俘虏；内部依情形调用 `DestroyPartyAction`、`EndCaptivityAction`、`LeaveSettlementAction`、`TakePrisonerAction`。
  - 内部：走多个 `*Action`。

- **`KickCompanionFromParty(List<string> strings)`**
  - 用途：把伙伴逐出玩家宗族；内部调用 `RemoveCompanionAction.ApplyByFire(Clan.PlayerClan, hero)`。
  - 内部：走 `RemoveCompanionAction`。

- **`GiveWorkshopToPlayer(List<string> strings)`**
  - 用途：把城镇中的某类工坊买给玩家；内部先 `GiveGoldAction.ApplyBetweenCharacters` 扣款，再 `ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying`。
  - 内部：走 `GiveGoldAction` + `ChangeOwnerOfWorkshopAction`。

- **`MakeTradeAgreement(List<string> strings)`**
  - 用途：在两个王国间签署贸易协定；内部校验 `TradeAgreementModel.CanMakeTradeAgreement` 后调用 `ITradeAgreementsCampaignBehavior.MakeTradeAgreement`。
  - 内部：经 `CampaignBehavior` + `TradeAgreementModel`。

### 直接改字段的命令（危险，绕过事件级联）

这些命令直接对实体字段赋值或调用实体上的即时修改方法，不经过正规 `*Action`，容易造成关联数据不一致。

- **`SetHeroCulture(List<string> strings)` / `SetClanCulture(List<string> strings)`**
  - 用途：直接把英雄/宗族的文化设为指定文化；内部 `obj2.Culture = obj`。
  - 内部：直接改字段（危险）。

- **`SetSkillsOfGivenHero` / `SetSkillMainHero` / `SetSkillCompanion` / `SetAllSkillsOfAllCompanions` / `SetAllHeroSkills`**
  - 用途：直接设定/清空英雄技能等级、专长聚焦与经验；内部 `obj.CharacterObject.Level = 0`、`HeroDeveloper.ClearHero()` / `SetInitialSkillLevel()` / `AddFocus()` / `InitializeSkillXp()`。
  - 内部：直接改 `HeroDeveloper`（危险，跳过正式成长流程）。

- **`SetLoyaltyOfSettlement` / `SetProsperityOfSettlement` / `SetMilitiaOfSettlement` / `SetSecurityOfSettlement` / `SetFoodOfSettlement` / `SetHearthOfSettlement`**
  - 用途：直接设定定居点的忠诚/繁荣/民兵/治安/粮储/炉灶数；内部分别 `obj.Town.Loyalty = ...`、`obj.Town.Prosperity = ...`、`obj.Militia = ...`、`obj.Town.Security = ...`、`obj.Town.FoodStocks = ...`、`obj.Village.Hearth = ...`。
  - 内部：直接改 `Town` / `Village` 字段（危险，不触发领地行为结算）。

- **`SetPlayerReputationTrait` / `SetHeroTrait`**
  - 用途：直接设定角色某项特性等级；内部 `Hero.SetTraitLevel(obj, result)` + `TraitLevelingHelper.UpdateTraitXPAccordingToTraitLevels()`（主角额外派发 `OnPlayerTraitChanged` 事件）。
  - 内部：直接改特性 + 部分事件（混合，但仍属危险级即时修改）。

- **`AddPowerToNotable(List<string> strings)`**
  - 用途：直接给名流增加权力；内部 `obj.AddPower(result)`。
  - 内部：直接改字段（危险）。

- **`ShowSettlements` / `HideSettlements` / `ShowHideouts` / `HideHideouts`**
  - 用途：直接切换定居点/藏匿点的地图可见性；内部 `item.IsVisible = ...`、`item.IsInspected = ...`、`hideout.IsSpotted = ...`。
  - 内部：直接改可见性字段（危险，绕过探索逻辑）。

- **`AddTroopsToParty(List<string> strings)`**
  - 用途：直接给队伍添加兵种；内部 `MobileParty.AddElementToMemberRoster(obj, result)`，并反射设置 `DefaultPartySizeLimitModel._addAdditionalPartySizeAsCheat` 以突破规模上限。
  - 内部：直接改名册 + 反射 hack（危险且版本敏感）。

- **`AddMoraleToParty(List<string> strings)`**
  - 用途：直接增减队伍基础士气；内部 `party.RecentEventsMorale += num`。
  - 内部：直接改字段（危险）。

- **`BoostCohesionOfArmy(List<string> strings)`**
  - 用途：直接把军队凝聚力拉满；内部 `army.Cohesion = 100f`。
  - 内部：直接改字段（危险）。

- **`AddSupportersForMainHero(List<string> strings)`**
  - 用途：直接把随机名流设为玩家宗族的支持者；内部 `randomElementWithPredicate.SupporterOf = Clan.PlayerClan`。
  - 内部：直接改字段（危险）。

- **`AddFocusPointCheat` / `AddAttributePointsCheat`**
  - 用途：直接增减英雄未分配的专长点/属性点；内部 `HeroDeveloper.UnspentFocusPoints += ...` / `UnspentAttributePoints += ...`。
  - 内部：直接改 `HeroDeveloper`（危险）。

- **`SetMainHeroAge(List<string> strings)`**
  - 用途：通过重设出生日期直接改变主角年龄；内部 `Hero.MainHero.SetBirthDay(...)`。
  - 内部：直接改字段（危险）。

- **`HealMainParty` / `AddItemToPlayerParty` / `AddCraftingMaterials`**
  - 用途：治疗主角队伍、给队伍加物品、加锻造材料；内部直接 `HeroObject.Heal` / `Party.AddToMemberRosterElementAtIndex` / `ItemRoster.AddToCounts`。
  - 内部：直接改实体状态（危险）。

- **`AddDevelopment`（`add_building_level`）**
  - 用途：提升城镇建筑等级；内部 `building.CurrentLevel++` 后手动派发 `CampaignEventDispatcher.Instance.OnBuildingLevelChanged(...)`——属于“直接改字段 + 手动补事件”的混合做法，事件补发不完整，仍属危险级。
  - 内部：直接改字段 + 部分事件。

- **`ActivateAllPolicies` / `SetCampaignSpeed` / `SetAllArmiesAndPartiesVisible` / `ToggleInformationRestrictions`**
  - 用途：直接启用玩家王国全部政策、设定战役加速倍率、切换真实视野、切换情报限制；内部 `kingdom.AddPolicy(...)`、直接赋值 `Campaign.Current.SpeedUpMultiplier` / `TrueSight`、反射写 `DefaultInformationRestrictionModel.IsDisabledByCheat`。
  - 内部：直接改字段 / 反射（危险）。

- **`SetRebellionEnabled` / `UnlockCraftingPieces`**
  - 用途：通过反射分别切换叛乱开关、解锁全部锻造部件；内部用 `BindingFlags.NonPublic` 读写 `RebellionsCampaignBehavior._rebellionEnabled` 与 `CraftingCampaignBehavior` 的私有字典字段。
  - 内部：反射 hack（极危险、版本敏感）。

- **`RemoveMilitiasFromSettlement` / `ClearSettlementDefense` / `AddPrisonersXp` / `AddTroopsXp` / `SetMainPartyAttackable` / `CancelQuestCheat`**
  - 用途：移除定居点民兵、清空防御、给俘虏/队伍加经验、切换主角可否被攻击、取消任务；内部直接 `MobileParty.RemoveParty()` / `obj.Militia = 0f` + `DestroyPartyAction` / `Roster.SetElementXp` / `IgnoreByOtherPartiesTill` / `QuestBase.CompleteQuestWithCancel`（多为直接改状态，少数为 Action）。
  - 内部：混合，多为危险级即时修改。

### 只读打印与文件 IO 命令（无副作用 / 仅 IO）

- **`PrintPlayerTrait` / `PrintMainPartyPosition` / `PrintStrengthOfLordParties` / `PrintStrengthOfFactions` / `PrintHeroesSuitableForMarriage` / `PrintAllIssues` / `PrintCriminalRatings` / `PrintSettlementsWithTournament` / `PrintGameplayStatistics` / `ShowHeroRelation`**
  - 用途：仅查询并拼装文本返回给控制台，不修改任何世界状态。
  - 内部：纯读取。

- **`ExportHero` / `ImportMainHero` / `ExportMainHero`**
  - 用途：把英雄导出为 `.char` 文件或从文件导入；内部走 `CharacterData.ExportCharacter` / `ImportCharacter` 与 `FileDriver` / `FileHelper` 文件 IO。
  - 内部：文件读写，无世界状态修改（导入会改写 `Hero.MainHero`）。

## 示例

复用 `CampaignCheats` 的静态辅助方法解析对象（这是被 `SandBox.View` 等跨模块代码复用的真实用法），先校验作弊上下文，再按名称解析出实体：

```csharp
if (CampaignCheats.CheckCheatUsage(ref CampaignCheats.ErrorType))
{
    if (CampaignCheats.TryGetObject<Settlement>(
            settlementName,
            out Settlement settlement,
            out string errorMessage,
            (Settlement x) => x.IsFortification))
    {
        CampaignCheats.GetSeparatedNames(argumentTokens, removeEmptySpaces: true);
    }
}
```

调用内部走 `*Action` 的便捷封装来安全地改变世界状态（坏档安全，推荐）：

```csharp
if (CampaignCheats.CheckCheatUsage(ref CampaignCheats.ErrorType))
{
    CampaignCheats.AddGoldToHero(argumentTokens);
    CampaignCheats.AddInfluence(argumentTokens);
    CampaignCheats.DeclareWar(argumentTokens);
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [Hero](../Hero) · [Settlement](../Settlement) · [Clan](../Clan) · [Kingdom](../Kingdom) · [MobileParty](../MobileParty) · [GiveGoldAction](../../campaign-ext/GiveGoldAction) · [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) · [DeclareWarAction](../../campaign-ext/DeclareWarAction) · [MakePeaceAction](../../campaign-ext/MakePeaceAction) · [GainRenownAction](../../campaign-ext/GainRenownAction) · [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction) · [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) · [MarriageAction](../../campaign-ext/MarriageAction) · [ChangeRulingClanAction](../../campaign-ext/ChangeRulingClanAction) · [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction)
