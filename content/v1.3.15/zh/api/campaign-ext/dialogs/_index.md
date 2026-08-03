---
title: "Dialogs 对话家族"
description: "战役对话注册、token 流转、说服、标签谓词，以及安全交给世界 Action 的边界。"
---

# Dialogs 对话家族

**一句话职责：** 对话 API 是一张短寿命决策图：战役启动时注册句子，活动对话反复按当前参与者测试它们，玩家选中后才把持久世界变更交给 Action、Quest 或 Encounter 流程。

## 心智模型

`CampaignGameStarter` 所有注册过程，`Campaign.Current.ConversationManager` 所有活动图和当前 token。一条对话行不是命令：每次重建选项都可能调用其条件，只有被选中后才调用 consequence。说服是附着的微型状态机，结果通过 `PersuasionModel` 计算；标签是可复用谓词，用当前角色上下文选择文本和语音变体。

为战役或对话任务中的分支对话使用本家族。地图级导航用 `GameMenu`，长期目标用 `QuestBase`，战役世界变更用 `*Action.Apply`。对话关闭后，不要缓存 `ConversationSentenceOption`、`MapConversationAgent` 或 `CharacterObject.OneToOneConversationCharacter`。

## 依赖关系

- 上游：`CampaignGameStarter`、Campaign Behavior、`Campaign.Current` 与两名当前 `ConversationCharacterData` 参与者。
- 运行时：`ConversationManager` 解析 token、调用条件、构造 `ConversationSentenceOption`，再调用已选句子的 consequence。
- 下游：[Actions](../actions)、[Quests](../quests)、[GameMenus](../gamemenus)、[Encounters](../encounters) 与 Mission 对话视图。
- 共用策略：`Campaign.Current.Models.PersuasionModel` 计算目标、初始进度、难度和概率；标签只读取英雄、文化、关系和遭遇状态，不拥有它们。

## 真实注册入口

Campaign Behavior 在战役启动时添加对话行。以下是战役行为实际使用的 v1.3.15 重载形状：条件只读状态，consequence 是唯一的选择边界。

```csharp
protected void AddDialogs(CampaignGameStarter starter)
{
    starter.AddPlayerLine(
        "my_caravan_question",
        "hero_main_options",
        "my_caravan_answer",
        "{=my_caravan_question}商队近来如何？",
        () => CharacterObject.OneToOneConversationCharacter?.HeroObject != null,
        () => Campaign.Current.ConversationManager.ConversationEndOneShot += OnConversationEnded);
}

private void OnConversationEnded()
{
    // 持久战役变更归入 Action 或所属 Behavior 的状态。
}
```

每个 `CampaignGameStarter` 只注册一次，不能在重复的战役 tick 中添加对话行。回调等待管理器的结束事件，因此不会把 Mission 局部 Agent 留到对话生命周期之后。

## 时机与风险边界

`ConversationManager.GetPlayerSentenceOptions` 在重建可见选项时调用句子条件，priority 决定合格句子的优先级。因此，发放金币、移除部队或推进任务的条件即使没有点击也可能重复执行。`Persuasion.CommitProgress` 后会阻塞该选项，复用相同 option 对象或重复提交会让 UI 与战役结果失步。管理器和已保存说服尝试属于 Campaign 状态；自定义后续数据应由 `CampaignBehaviorBase.SyncData` 所有，而不是由瞬态句子或标签保存。

## 对话、说服与标签条目

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.Conversation | [CampaignMapConversation](../CampaignMapConversation) | 用战役参与者打开和关闭地图对话，而不是普通 UI 弹窗。 | 遭遇或地图交互进入对话时。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationManager](../ConversationManager) | 持有已注册句子、token 状态、选项、说话者与结束回调。 | 从 Campaign 构造到当前对话结束。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationSentence](../ConversationSentence) | 定义一条带条件、consequence、优先级和可选说服数据的 token 边。 | 管理器寻找匹配行时。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationSentenceOption](../ConversationSentenceOption) | 携带当前 UI 帧中已选出的文本、可点击性、重复对象和说服数据。 | 玩家选择回复之前重建。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationToken](../ConversationToken) | 命名 start、close-window 等内建流程状态。 | 句子推进活动 token 时。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationTokens](../ConversationTokens) | 暴露注册共用的标准 token 字符串。 | 注册时及组织 token 跳转时。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationCharacterData](../ConversationCharacterData) | 打包对话参与者的角色、部队、装备和生成意图。 | 打开地图或 Mission 对话之前。 |
| TaleWorlds.CampaignSystem.Conversation | [MapConversationAgent](../MapConversationAgent) | 把战役角色适配为地图上的对话 Agent。 | 地图对话参与者仍存活期间。 |
| TaleWorlds.CampaignSystem.Conversation | [IConversationStateHandler](../IConversationStateHandler) | 从对话宿主接收继续和结束通知。 | 流程转换时，不是长期 Campaign 事件总线。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationAnimationManager](../ConversationAnimationManager) | 为活动交谈解析说话、待机和反应动画数据。 | 句子成为显示文本时。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationAnimData](../ConversationAnimData) | 存放对话展示对应的动画标识。 | 对话视图准备说话者反应时。 |
| TaleWorlds.CampaignSystem.Conversation | [ConversationHelper](../ConversationHelper) | 提供选择和格式化对话上下文的战役辅助逻辑。 | 注册和对话准备期间。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [Persuasion](../Persuasion) | 所有一次说服序列的进度、已选项、阈值和随机结果应用。 | `ConversationManager.StartPersuasion` 后且序列结算前。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionTask](../PersuasionTask) | 把一个说服阶段的选项和失败文本组织在一起。 | 对话暴露新的说服阶段时。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionOptionArgs](../PersuasionOptionArgs) | 描述选项的技能、特质、保留值和可用性输入。 | 模型计算点击概率之前。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionOptionResult](../PersuasionOptionResult) | 区分成功、暴击成功、失败、暴击失败和未命中。 | 投掷出选项结果之后立刻。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionAttempt](../PersuasionAttempt) | 为英雄、游戏时间、选项、保留类型和结果保存一次尝试。 | 为冷却或历史检查提交说服选择时。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionDifficulty](../PersuasionDifficulty) | 选择模型难度倍率，而不是硬编码概率。 | 说服序列开始时。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionArgumentStrength](../PersuasionArgumentStrength) | 标记展示给玩家的说服论点强度。 | UI 解释可用论点时。 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [TraitEffect](../TraitEffect) | 表示说服展示和求值使用的特质调整信息。 | 选项求值及结果反馈期间。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ConversationTag](../ConversationTag) | 定义针对当前角色的具名谓词，供选择文本变体。 | 管理器寻找带标签文本或语音变体时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ConversationTagHelper](../ConversationTagHelper) | 计算语体、部族语音组、教育程度与特质兼容等共用谓词。 | 标签子类判断适用性时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AlliedLordTag](../AlliedLordTag), [FriendlyRelationshipTag](../FriendlyRelationshipTag), [HostileRelationshipTag](../HostileRelationshipTag), [NoConflictTag](../NoConflictTag) | 从实时关系和战争上下文选择外交措辞。 | 每次为领主对话解析文本变体时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AseraiTag](../AseraiTag), [BattanianTag](../BattanianTag), [EmpireTag](../EmpireTag), [KhuzaitTag](../KhuzaitTag), [NordTag](../NordTag), [SturgianTag](../SturgianTag), [VlandianTag](../VlandianTag) | 选择文化特定语言或语音材料，不修改战役文化数据。 | 对话已知角色文化时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AnyNotableTypeTag](../AnyNotableTypeTag), [ArtisanNotableTypeTag](../ArtisanNotableTypeTag), [GangLeaderNotableTypeTag](../GangLeaderNotableTypeTag), [HeadmanNotableTypeTag](../HeadmanNotableTypeTag), [MerchantNotableTypeTag](../MerchantNotableTypeTag), [PreacherNotableTypeTag](../PreacherNotableTypeTag), [WandererTag](../WandererTag) | 按要人社会角色筛选台词，不依赖脆弱的角色 id。 | 求值一对一参与者时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AmoralTag](../AmoralTag), [CalculatingTag](../CalculatingTag), [CautiousTag](../CautiousTag), [ChivalrousTag](../ChivalrousTag), [CruelTag](../CruelTag), [DeviousTag](../DeviousTag), [GenerosityTag](../GenerosityTag), [HonorTag](../HonorTag), [ImpulsiveTag](../ImpulsiveTag), [MercyTag](../MercyTag), [ValorTag](../ValorTag), [WaryTag](../WaryTag) | 把英雄特质倾向转为对话语气谓词。 | 每次为说话角色查找变体时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HighRegisterTag](../HighRegisterTag), [LowRegisterTag](../LowRegisterTag), [TribalRegisterTag](../TribalRegisterTag), [PersonaCurtTag](../PersonaCurtTag), [PersonaEarnestTag](../PersonaEarnestTag), [PersonaIronicTag](../PersonaIronicTag), [PersonaSoftspokenTag](../PersonaSoftspokenTag) | 在检查教育、文化和 persona 后选择语体与人格变体。 | 选择语音和本地化文本变体时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [FirstMeetingTag](../FirstMeetingTag), [MetBeforeTag](../MetBeforeTag), [CurrentConversationIsFirst](../CurrentConversationIsFirst), [InHomeSettlementTag](../InHomeSettlementTag), [OnTheRoadTag](../OnTheRoadTag), [DrinkingInTavernTag](../DrinkingInTavernTag) | 按会面历史和即时地点控制措辞。 | 台词资格检查期间，不能把结果持久化。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AttackingTag](../AttackingTag), [CombatantTag](../CombatantTag), [NonCombatantTag](../NonCombatantTag), [NonviolentProfessionTag](../NonviolentProfessionTag), [PlayerBesiegingTag](../PlayerBesiegingTag), [UnderCommandTag](../UnderCommandTag) | 描述当前军事姿态，不创建或结算战斗。 | 遭遇或部队上下文活动期间。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsFemaleTag](../NpcIsFemaleTag), [NpcIsMaleTag](../NpcIsMaleTag), [NpcIsNobleTag](../NpcIsNobleTag), [NpcIsLiegeTag](../NpcIsLiegeTag), [OldTag](../OldTag), [AttractedToPlayerTag](../AttractedToPlayerTag), [EngagedToPlayerTag](../EngagedToPlayerTag), [RomanticallyInvolvedTag](../RomanticallyInvolvedTag) | 从参与者当前英雄数据控制社会和恋爱文本。 | 解析直接角色对话时。 |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsAffiliatedTag](../PlayerIsAffiliatedTag), [PlayerIsEnemyTag](../PlayerIsEnemyTag), [PlayerIsFamousTag](../PlayerIsFamousTag), [PlayerIsKinTag](../PlayerIsKinTag), [PlayerIsNobleTag](../PlayerIsNobleTag), [PlayerIsRulerTag](../PlayerIsRulerTag), [PlayerIsAtSeaTag](../PlayerIsAtSeaTag) | 在对方条件行中反映玩家身份。 | 依据当前玩家英雄和部队求值选项时。 |

## 单独标签条目

标签子类按独立身份列出，避免一个合并单元格掩盖可单独使用的条件。

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.Conversation | [DialogLineFlags](../DialogLineFlags) | Encodes line presentation flags and click behavior. | Registration and rendering. |
| TaleWorlds.CampaignSystem.Conversation | [TaggedString](../TaggedString) | Carries localized text with its formatting tag identity. | Formatting a displayed line. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AlliedLordTag](../AlliedLordTag) | Matches an allied lord relation. | Relation-sensitive line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AmoralTag](../AmoralTag) | Matches an amoral hero trait. | Trait variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AnyNotableTypeTag](../AnyNotableTypeTag) | Accepts any supported notable role. | Notable participant checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) | Matches an artisan notable role. | Social-role filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AseraiTag](../AseraiTag) | Selects the Aserai culture branch. | Culture resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AttackingTag](../AttackingTag) | Matches an attacking participant state. | Encounter posture checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AttractedToPlayerTag](../AttractedToPlayerTag) | Detects attraction toward the player. | Romance line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [BattanianTag](../BattanianTag) | Selects the Battanian culture branch. | Culture tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CalculatingTag](../CalculatingTag) | Matches a calculating trait. | Trait variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CautiousTag](../CautiousTag) | Matches a cautious trait. | Dialogue variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ChivalrousTag](../ChivalrousTag) | Matches a chivalrous trait. | Trait tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CombatantTag](../CombatantTag) | Identifies a current combatant. | Battle dialogue construction. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CruelTag](../CruelTag) | Matches a cruel trait. | Personality variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CurrentConversationIsFirst](../CurrentConversationIsFirst) | Tests whether this is the first meeting. | First-meeting condition evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [DefaultTag](../DefaultTag) | Provides the fallback tag branch. | Tagged-text fallback selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [DeviousTag](../DeviousTag) | Matches a devious trait. | Personality variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [DrinkingInTavernTag](../DrinkingInTavernTag) | Detects a tavern drinking context. | Tavern conversation checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [EmpireTag](../EmpireTag) | Selects the Empire culture branch. | Culture tag resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [EngagedToPlayerTag](../EngagedToPlayerTag) | Detects an engagement with the player. | Romance-state checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [FirstMeetingTag](../FirstMeetingTag) | Matches a participant not met before. | Introductory line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [FriendlyRelationshipTag](../FriendlyRelationshipTag) | Matches a friendly relation level. | Relation branch selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [GangLeaderNotableTypeTag](../GangLeaderNotableTypeTag) | Matches a gang-leader notable role. | Social-role checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [GenerosityTag](../GenerosityTag) | Matches a generous trait. | Trait variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HeadmanNotableTypeTag](../HeadmanNotableTypeTag) | Matches a village headman role. | Village participant checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HighRegisterTag](../HighRegisterTag) | Selects formal high-register speech. | Text variant resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HonorTag](../HonorTag) | Matches an honorable trait. | Personality tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HostileRelationshipTag](../HostileRelationshipTag) | Matches a hostile relation. | Diplomatic line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ImpoliteTag](../ImpoliteTag) | Matches an impolite persona. | Persona selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ImpulsiveTag](../ImpulsiveTag) | Matches an impulsive trait. | Trait tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [InHomeSettlementTag](../InHomeSettlementTag) | Detects the participant's home settlement. | Location line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [KhuzaitTag](../KhuzaitTag) | Selects the Khuzait culture branch. | Culture tag resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [LowRegisterTag](../LowRegisterTag) | Selects informal low-register speech. | Text variant resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [MerchantNotableTypeTag](../MerchantNotableTypeTag) | Matches a merchant notable role. | Participant role checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [MercyTag](../MercyTag) | Matches a merciful trait. | Personality variant lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [MetBeforeTag](../MetBeforeTag) | Detects prior contact history. | Follow-up greeting checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NoConflictTag](../NoConflictTag) | Matches a relation without active conflict. | Diplomatic line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NonCombatantTag](../NonCombatantTag) | Identifies a non-combatant participant. | Encounter dialogue construction. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NonviolentProfessionTag](../NonviolentProfessionTag) | Matches a nonviolent profession. | Profession condition checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NordTag](../NordTag) | Selects the Nord culture branch. | Culture tag resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsFemaleTag](../NpcIsFemaleTag) | Tests the NPC female hero state. | Gender line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NPCIsInSeaTag](../NPCIsInSeaTag) | Detects an NPC at sea. | Map-state checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsLiegeTag](../NpcIsLiegeTag) | Detects an NPC who is a liege. | Hierarchy line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsMaleTag](../NpcIsMaleTag) | Tests the NPC male hero state. | Gender line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsNobleTag](../NpcIsNobleTag) | Detects an NPC noble status. | Social-rank checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [OldTag](../OldTag) | Matches an age category. | Participant descriptor checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [OnTheRoadTag](../OnTheRoadTag) | Detects a road conversation context. | Map dialogue selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [OutlawSympathyTag](../OutlawSympathyTag) | Matches sympathy toward outlaws. | Relation and trait checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaCurtTag](../PersonaCurtTag) | Selects a curt persona variant. | Persona resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaEarnestTag](../PersonaEarnestTag) | Selects an earnest persona variant. | Line presentation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaIronicTag](../PersonaIronicTag) | Selects an ironic persona variant. | Persona-sensitive rendering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaSoftspokenTag](../PersonaSoftspokenTag) | Selects a soft-spoken persona variant. | Line variant resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerBesiegingTag](../PlayerBesiegingTag) | Detects the player besieging a settlement. | Siege option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsAffiliatedTag](../PlayerIsAffiliatedTag) | Detects player faction affiliation. | Faction line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsAtSeaTag](../PlayerIsAtSeaTag) | Detects the player party at sea. | Map-state evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsBrotherTag](../PlayerIsBrotherTag) | Detects a brother relationship. | Kinship line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsDaughterTag](../PlayerIsDaughterTag) | Detects a daughter relationship. | Kinship line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsEnemyTag](../PlayerIsEnemyTag) | Detects an enemy relation. | Hostile option evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsFamousTag](../PlayerIsFamousTag) | Detects the player's fame threshold. | Reputation line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsFatherTag](../PlayerIsFatherTag) | Detects a father relationship. | Kinship line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsFemaleTag](../PlayerIsFemaleTag) | Tests the player's female state. | Gender line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsKinTag](../PlayerIsKinTag) | Detects any supported kinship relation. | Family option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsKnownButNotFamousTag](../PlayerIsKnownButNotFamousTag) | Distinguishes known but not famous status. | Reputation variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsLiegeTag](../PlayerIsLiegeTag) | Detects the player as the participant's liege. | Fealty line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsMaleTag](../PlayerIsMaleTag) | Tests the player's male state. | Gender line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsMotherTag](../PlayerIsMotherTag) | Detects a mother relationship. | Kinship line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsNobleTag](../PlayerIsNobleTag) | Detects the player's noble status. | Social-rank checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsRulerTag](../PlayerIsRulerTag) | Detects the player ruling a kingdom. | Ruler dialogue evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsSisterTag](../PlayerIsSisterTag) | Detects a sister relationship. | Kinship line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsSonTag](../PlayerIsSonTag) | Detects a son relationship. | Kinship line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsSpouseTag](../PlayerIsSpouseTag) | Detects a spouse relationship. | Romance and family checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PreacherNotableTypeTag](../PreacherNotableTypeTag) | Matches a preacher notable role. | Participant role filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [RogueSkillsTag](../RogueSkillsTag) | Matches a rogue-oriented skill profile. | Skill and persona checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [RomanticallyInvolvedTag](../RomanticallyInvolvedTag) | Detects an active romantic relation. | Romance option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [SexistTag](../SexistTag) | Matches a sexist trait profile. | Trait tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [SturgianTag](../SturgianTag) | Selects the Sturgian culture branch. | Culture tag resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [TribalRegisterTag](../TribalRegisterTag) | Selects tribal-register speech. | Voice and text selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [UncharitableTag](../UncharitableTag) | Matches an uncharitable trait. | Personality variant lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [UnderCommandTag](../UnderCommandTag) | Detects operation under another commander. | Party hierarchy checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [UngratefulTag](../UngratefulTag) | Matches an ungrateful trait. | Trait tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ValorTag](../ValorTag) | Matches a valorous trait. | Personality variant lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VlandianTag](../VlandianTag) | Selects the Vlandian culture branch. | Culture tag resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaCurtLowerTag](../VoiceGroupPersonaCurtLowerTag) | Selects the lower curt voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaCurtTribalTag](../VoiceGroupPersonaCurtTribalTag) | Selects the tribal curt voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaCurtUpperTag](../VoiceGroupPersonaCurtUpperTag) | Selects the upper curt voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaEarnestLowerTag](../VoiceGroupPersonaEarnestLowerTag) | Selects the lower earnest voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaEarnestTribalTag](../VoiceGroupPersonaEarnestTribalTag) | Selects the tribal earnest voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaEarnestUpperTag](../VoiceGroupPersonaEarnestUpperTag) | Selects the upper earnest voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaIronicLowerTag](../VoiceGroupPersonaIronicLowerTag) | Selects the lower ironic voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaIronicTribalTag](../VoiceGroupPersonaIronicTribalTag) | Selects the tribal ironic voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaIronicUpperTag](../VoiceGroupPersonaIronicUpperTag) | Selects the upper ironic voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaSoftspokenLowerTag](../VoiceGroupPersonaSoftspokenLowerTag) | Selects the lower soft-spoken voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaSoftspokenTribalTag](../VoiceGroupPersonaSoftspokenTribalTag) | Selects the tribal soft-spoken voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaSoftspokenUpperTag](../VoiceGroupPersonaSoftspokenUpperTag) | Selects the upper soft-spoken voice group. | Voice asset lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [WandererTag](../WandererTag) | Matches a wanderer notable role. | Participant role filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [WaryTag](../WaryTag) | Matches a wary hero trait. | Personality variant lookup. |

## 导航

- [父级：Campaign-Ext](..)
- [同级：GameMenus](../gamemenus) 与 [MapEvents](../mapevents)
- [相关：Quests](../quests)、[Actions](../actions) 与 [Campaign events](../CampaignEvents)
