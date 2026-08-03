---
title: "Dialogs Family"
description: "Campaign conversation registration, token flow, persuasion, tag predicates, and the safe handoff to world actions."
---

# Dialogs Family

**One-sentence role:** Dialog APIs are a short-lived decision graph: campaign startup contributes sentences, the active conversation repeatedly tests them against the current participants, and a selected consequence hands durable world changes to an action, quest, or encounter flow.

## Mental Model

`CampaignGameStarter` owns registration, while `Campaign.Current.ConversationManager` owns the live graph and its active token. A line is not a command: its condition may be evaluated every time options are rebuilt, and its consequence runs only after selection. Persuasion is an attached mini-state-machine whose result is calculated through `PersuasionModel`; tags are reusable predicates that choose flavour text and voice variants from the current character context.

Use this family for branching campaign or conversation-mission dialogue. Use a `GameMenu` for map-level navigation, a `QuestBase` for persistent objectives, and an `*Action.Apply` call for a campaign mutation. Do not cache a `ConversationSentenceOption`, `MapConversationAgent`, or `CharacterObject.OneToOneConversationCharacter` after the conversation closes.

## Dependency Map

- Upstream: `CampaignGameStarter`, campaign behaviours, `Campaign.Current`, and the two current `ConversationCharacterData` participants.
- Runtime: `ConversationManager` resolves tokens, invokes conditions, builds `ConversationSentenceOption` values, then invokes the selected sentence consequence.
- Downstream: [Actions](../actions), [Quests](../quests), [GameMenus](../gamemenus), [Encounters](../encounters), and the Mission conversation view.
- Shared policy: `Campaign.Current.Models.PersuasionModel` supplies persuasion goal, initial progress, difficulty, and chance calculations; tags read hero, culture, relation, and encounter state without owning it.

## Real Registration Entry Point

Campaign behaviours add their sentences during campaign startup. This is the real v1.3.15 overload shape used by the campaign behaviours; the condition only reads state and the consequence is the single selection boundary.

```csharp
protected void AddDialogs(CampaignGameStarter starter)
{
    starter.AddPlayerLine(
        "my_caravan_question",
        "hero_main_options",
        "my_caravan_answer",
        "{=my_caravan_question}How is the caravan doing?",
        () => CharacterObject.OneToOneConversationCharacter?.HeroObject != null,
        () => Campaign.Current.ConversationManager.ConversationEndOneShot += OnConversationEnded);
}

private void OnConversationEnded()
{
    // Persisted campaign changes belong in an Action or owned behaviour state.
}
```

Register once per `CampaignGameStarter`; do not add lines from a repeated campaign tick. The callback deliberately waits for the manager's end event, so it does not retain a mission-local agent beyond the dialogue lifetime.

## Timing And Risk Boundaries

`ConversationManager.GetPlayerSentenceOptions` calls sentence conditions while rebuilding visible options, and priority decides which eligible sentence wins. A condition that grants gold, removes a party, or advances a quest can therefore repeat without a click. A persuasion option is blocked after `Persuasion.CommitProgress`, so reusing the same option object or committing twice desynchronizes the UI and campaign result. The manager and saved persuasion attempts are campaign state; persist custom follow-up data through a `CampaignBehaviorBase.SyncData` owner, not through transient sentences or tags.

## Conversation, Persuasion, And Tag Entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.Conversation | [CampaignMapConversation](../CampaignMapConversation) | Opens and closes a map conversation using campaign participants rather than a generic UI dialog. | When an encounter or map interaction enters dialogue. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationManager](../ConversationManager) | Holds registered sentences, token state, options, speakers, and end callbacks for the active flow. | From campaign construction until the current conversation ends. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationSentence](../ConversationSentence) | Defines one directed token edge with conditions, a consequence, priority, and optional persuasion metadata. | Tested while the manager searches for a matching line. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationSentenceOption](../ConversationSentenceOption) | Carries the text, clickability, repeat object, and persuasion data selected for the current UI frame. | Rebuilt before the player chooses a response. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationToken](../ConversationToken) | Names built-in flow states such as start and close-window. | While a sentence moves the active token. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationTokens](../ConversationTokens) | Exposes standard token strings shared by registrations. | At registration time and when composing token transitions. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationCharacterData](../ConversationCharacterData) | Packages a character, party, equipment, and spawn intent for a conversation participant. | Immediately before opening map or mission dialogue. |
| TaleWorlds.CampaignSystem.Conversation | [MapConversationAgent](../MapConversationAgent) | Adapts a campaign character into the conversation agent abstraction on the map. | Only while map conversation participants are alive. |
| TaleWorlds.CampaignSystem.Conversation | [IConversationStateHandler](../IConversationStateHandler) | Receives continuation and end notifications from a conversation host. | At flow transitions, not as a persistent campaign event bus. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationAnimationManager](../ConversationAnimationManager) | Resolves speech, idle, and reaction animation data for the active exchange. | When a sentence becomes the displayed line. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationAnimData](../ConversationAnimData) | Stores the animation identifiers associated with a dialogue presentation. | While a conversation view prepares a speaker reaction. |
| TaleWorlds.CampaignSystem.Conversation | [ConversationHelper](../ConversationHelper) | Provides campaign-level helpers used to select and format dialogue context. | During registration and dialogue preparation. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [Persuasion](../Persuasion) | Owns progress, chosen options, thresholds, and random result application for one persuasion sequence. | After `ConversationManager.StartPersuasion` and before the sequence resolves. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionTask](../PersuasionTask) | Groups the choices and failure text for one stage of a persuasion sequence. | When the dialogue exposes a new persuasion stage. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionOptionArgs](../PersuasionOptionArgs) | Describes an option's skill, trait, reservation, and availability inputs. | Before the model calculates chance for a click. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionOptionResult](../PersuasionOptionResult) | Distinguishes success, critical success, failure, critical failure, and miss. | Immediately after an option result is rolled. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionAttempt](../PersuasionAttempt) | Records a hero, game time, option, reservation type, and result for campaign persistence. | When a persuasion choice is committed for later cooldown or history checks. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionDifficulty](../PersuasionDifficulty) | Selects the model difficulty multiplier rather than hard-coding probabilities. | When a persuasion sequence starts. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [PersuasionArgumentStrength](../PersuasionArgumentStrength) | Labels the strength presented for a persuasion argument. | When the conversation UI explains an available argument. |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | [TraitEffect](../TraitEffect) | Represents trait-based adjustment information used by persuasion presentation and evaluation. | During option evaluation and result feedback. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ConversationTag](../ConversationTag) | Defines a named predicate over the current character for dialogue variation selection. | When the manager looks for tagged text or a voice variant. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ConversationTagHelper](../ConversationTagHelper) | Computes shared register, tribal voice-group, education, and trait-compatibility predicates. | While tag subclasses decide whether they apply. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AlliedLordTag](../AlliedLordTag), [FriendlyRelationshipTag](../FriendlyRelationshipTag), [HostileRelationshipTag](../HostileRelationshipTag), [NoConflictTag](../NoConflictTag) | Select diplomatic wording from the live relation and war context. | Each time text variation is resolved for a lord conversation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AseraiTag](../AseraiTag), [BattanianTag](../BattanianTag), [EmpireTag](../EmpireTag), [KhuzaitTag](../KhuzaitTag), [NordTag](../NordTag), [SturgianTag](../SturgianTag), [VlandianTag](../VlandianTag) | Select culture-specific language or voice material without changing campaign culture data. | While a character's culture is known to the conversation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AnyNotableTypeTag](../AnyNotableTypeTag), [ArtisanNotableTypeTag](../ArtisanNotableTypeTag), [GangLeaderNotableTypeTag](../GangLeaderNotableTypeTag), [HeadmanNotableTypeTag](../HeadmanNotableTypeTag), [MerchantNotableTypeTag](../MerchantNotableTypeTag), [PreacherNotableTypeTag](../PreacherNotableTypeTag), [WandererTag](../WandererTag) | Filter lines by the social role of a notable rather than by a brittle character id. | When the one-to-one participant is evaluated. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AmoralTag](../AmoralTag), [CalculatingTag](../CalculatingTag), [CautiousTag](../CautiousTag), [ChivalrousTag](../ChivalrousTag), [CruelTag](../CruelTag), [DeviousTag](../DeviousTag), [GenerosityTag](../GenerosityTag), [HonorTag](../HonorTag), [ImpulsiveTag](../ImpulsiveTag), [MercyTag](../MercyTag), [ValorTag](../ValorTag), [WaryTag](../WaryTag) | Turn hero trait tendencies into dialogue tone predicates. | On every variation lookup for the speaking character. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HighRegisterTag](../HighRegisterTag), [LowRegisterTag](../LowRegisterTag), [TribalRegisterTag](../TribalRegisterTag), [PersonaCurtTag](../PersonaCurtTag), [PersonaEarnestTag](../PersonaEarnestTag), [PersonaIronicTag](../PersonaIronicTag), [PersonaSoftspokenTag](../PersonaSoftspokenTag) | Choose register and persona variants after helper checks on education, culture, and persona. | When voice and localized line variants are selected. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [FirstMeetingTag](../FirstMeetingTag), [MetBeforeTag](../MetBeforeTag), [CurrentConversationIsFirst](../CurrentConversationIsFirst), [InHomeSettlementTag](../InHomeSettlementTag), [OnTheRoadTag](../OnTheRoadTag), [DrinkingInTavernTag](../DrinkingInTavernTag) | Gate wording by meeting history and immediate conversation location. | During line eligibility checks; never store their result as durable state. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AttackingTag](../AttackingTag), [CombatantTag](../CombatantTag), [NonCombatantTag](../NonCombatantTag), [NonviolentProfessionTag](../NonviolentProfessionTag), [PlayerBesiegingTag](../PlayerBesiegingTag), [UnderCommandTag](../UnderCommandTag) | Describe the current military posture without creating or resolving a battle. | While an encounter or party context is active. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsFemaleTag](../NpcIsFemaleTag), [NpcIsMaleTag](../NpcIsMaleTag), [NpcIsNobleTag](../NpcIsNobleTag), [NpcIsLiegeTag](../NpcIsLiegeTag), [OldTag](../OldTag), [AttractedToPlayerTag](../AttractedToPlayerTag), [EngagedToPlayerTag](../EngagedToPlayerTag), [RomanticallyInvolvedTag](../RomanticallyInvolvedTag) | Gate social and romance text from the participant's current hero data. | When a direct character conversation is being resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsAffiliatedTag](../PlayerIsAffiliatedTag), [PlayerIsEnemyTag](../PlayerIsEnemyTag), [PlayerIsFamousTag](../PlayerIsFamousTag), [PlayerIsKinTag](../PlayerIsKinTag), [PlayerIsNobleTag](../PlayerIsNobleTag), [PlayerIsRulerTag](../PlayerIsRulerTag), [PlayerIsAtSeaTag](../PlayerIsAtSeaTag) | Reflect player status in a counterpart's conditional line. | During option evaluation against the current player hero and party. |

The tag subclasses below are listed individually because each is a distinct source identity and can be used as a separate predicate.

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.Conversation | [DialogLineFlags](../DialogLineFlags) | Encodes line presentation flags such as clickable and consequence behavior. | When a sentence is registered and rendered. |
| TaleWorlds.CampaignSystem.Conversation | [TaggedString](../TaggedString) | Carries localized text together with its formatting tag identity. | While a conversation line is formatted for display. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AlliedLordTag](../AlliedLordTag) | Matches a lord whose current relation is allied with the player context. | During relation-sensitive line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AmoralTag](../AmoralTag) | Matches an amoral hero trait profile for a dialogue variant. | During trait-tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AnyNotableTypeTag](../AnyNotableTypeTag) | Accepts any supported notable role when a line is not role-specific. | While a notable participant is checked. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) | Matches a notable whose occupation is artisan. | During one-to-one participant filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AseraiTag](../AseraiTag) | Selects the Aserai culture branch for text or voice variation. | When the speaker culture is resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AttackingTag](../AttackingTag) | Matches a participant currently marked as attacking. | During encounter posture checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [AttractedToPlayerTag](../AttractedToPlayerTag) | Detects an active attraction relation toward the player. | While romance-related lines are considered. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [BattanianTag](../BattanianTag) | Selects the Battanian culture branch for localized dialogue. | When culture tags are evaluated. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CalculatingTag](../CalculatingTag) | Matches the calculating hero trait used for a guarded tone. | During trait variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CautiousTag](../CautiousTag) | Matches a cautious hero trait for risk-averse wording. | During line variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ChivalrousTag](../ChivalrousTag) | Matches the chivalrous trait when honor-coded dialogue is selected. | During trait-tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CombatantTag](../CombatantTag) | Identifies a participant who is a combatant in the current context. | While battle-related dialogue is built. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CruelTag](../CruelTag) | Matches a cruel hero trait for hostile wording. | During personality variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [CurrentConversationIsFirst](../CurrentConversationIsFirst) | Reports whether the active conversation is the participant's first meeting. | During first-meeting condition evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [DefaultTag](../DefaultTag) | Provides the fallback tag when no specialized predicate applies. | When tagged text needs a default branch. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [DeviousTag](../DeviousTag) | Matches a devious hero trait for manipulative dialogue. | During personality variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [DrinkingInTavernTag](../DrinkingInTavernTag) | Detects a tavern drinking context for location-specific lines. | While a tavern conversation is active. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [EmpireTag](../EmpireTag) | Selects the Empire culture branch for dialogue presentation. | When speaker culture is known. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [EngagedToPlayerTag](../EngagedToPlayerTag) | Detects an engagement relation between participant and player. | During romance-state line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [FirstMeetingTag](../FirstMeetingTag) | Matches a participant who has not met the player before. | While introductory lines are filtered. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [FriendlyRelationshipTag](../FriendlyRelationshipTag) | Matches a friendly relation level for cooperative wording. | During relation-sensitive selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [GangLeaderNotableTypeTag](../GangLeaderNotableTypeTag) | Matches a notable who leads a gang. | During social-role filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [GenerosityTag](../GenerosityTag) | Matches a generous hero trait for giving language. | During trait variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HeadmanNotableTypeTag](../HeadmanNotableTypeTag) | Matches a village headman notable role. | While a village participant is evaluated. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HighRegisterTag](../HighRegisterTag) | Selects formal high-register speech for the current character. | When localized line variants are chosen. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HonorTag](../HonorTag) | Matches an honorable hero trait for principled wording. | During personality tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [HostileRelationshipTag](../HostileRelationshipTag) | Matches a hostile relation for confrontational dialogue. | During active relation checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ImpoliteTag](../ImpoliteTag) | Matches an impolite speaking style for a blunt variant. | During persona selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ImpulsiveTag](../ImpulsiveTag) | Matches an impulsive hero trait for quick-tempered wording. | During trait-tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [InHomeSettlementTag](../InHomeSettlementTag) | Detects that the participant is in its home settlement. | While location-specific dialogue is checked. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [KhuzaitTag](../KhuzaitTag) | Selects the Khuzait culture branch for text and voice. | When culture-dependent tags are resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [LowRegisterTag](../LowRegisterTag) | Selects informal low-register speech for the current speaker. | During text variant resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [MerchantNotableTypeTag](../MerchantNotableTypeTag) | Matches a notable whose role is merchant. | During participant role checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [MercyTag](../MercyTag) | Matches a merciful trait for conciliatory wording. | During personality variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [MetBeforeTag](../MetBeforeTag) | Matches a participant with prior contact history. | While follow-up greetings are filtered. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NoConflictTag](../NoConflictTag) | Matches a relation with no active conflict. | During diplomatic line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NonCombatantTag](../NonCombatantTag) | Identifies a participant outside the current combatant set. | While encounter dialogue is built. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NonviolentProfessionTag](../NonviolentProfessionTag) | Matches a profession that is not marked as violent. | During profession-sensitive line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NordTag](../NordTag) | Selects the Nord culture branch for dialogue variation. | When the speaker culture is evaluated. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsFemaleTag](../NpcIsFemaleTag) | Tests the non-player participant's female hero state. | During gender-dependent line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NPCIsInSeaTag](../NPCIsInSeaTag) | Detects that the non-player participant is at sea. | During map-state dialogue checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsLiegeTag](../NpcIsLiegeTag) | Detects that the non-player participant is a liege. | During hierarchy-sensitive line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsMaleTag](../NpcIsMaleTag) | Tests the non-player participant's male hero state. | During gender-dependent line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [NpcIsNobleTag](../NpcIsNobleTag) | Detects whether the non-player participant is a noble. | During social-rank line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [OldTag](../OldTag) | Matches an age category used by age-sensitive dialogue. | When participant descriptors are evaluated. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [OnTheRoadTag](../OnTheRoadTag) | Detects a map-road conversation context. | While map conversation lines are selected. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [OutlawSympathyTag](../OutlawSympathyTag) | Matches sympathy toward outlaw groups for a branching line. | During relation and trait checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaCurtTag](../PersonaCurtTag) | Selects a curt persona voice and wording variant. | When persona tags are resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaEarnestTag](../PersonaEarnestTag) | Selects an earnest persona voice and wording variant. | During line presentation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaIronicTag](../PersonaIronicTag) | Selects an ironic persona voice and wording variant. | During persona-sensitive rendering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PersonaSoftspokenTag](../PersonaSoftspokenTag) | Selects a soft-spoken persona voice and wording variant. | During line variant resolution. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerBesiegingTag](../PlayerBesiegingTag) | Detects that the player is currently besieging a settlement. | During siege-context option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsAffiliatedTag](../PlayerIsAffiliatedTag) | Detects the player's current affiliation with the participant's faction. | During faction-specific line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsAtSeaTag](../PlayerIsAtSeaTag) | Detects that the player party is at sea. | During map-state option evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsBrotherTag](../PlayerIsBrotherTag) | Detects a brother relationship between player and participant. | During kinship dialogue checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsDaughterTag](../PlayerIsDaughterTag) | Detects a daughter relationship for family-specific wording. | During kinship line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsEnemyTag](../PlayerIsEnemyTag) | Detects an enemy relation between player and participant. | During hostile option evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsFamousTag](../PlayerIsFamousTag) | Detects the player's fame threshold for recognition lines. | During reputation-sensitive checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsFatherTag](../PlayerIsFatherTag) | Detects a father relationship for family dialogue. | During kinship line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsFemaleTag](../PlayerIsFemaleTag) | Tests the player's female hero state. | During gender-dependent line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsKinTag](../PlayerIsKinTag) | Detects any supported kinship relation with the player. | During family-context option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsKnownButNotFamousTag](../PlayerIsKnownButNotFamousTag) | Distinguishes recognized player status below the fame threshold. | During reputation variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsLiegeTag](../PlayerIsLiegeTag) | Detects that the player is the participant's liege. | During fealty-sensitive dialogue checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsMaleTag](../PlayerIsMaleTag) | Tests the player's male hero state. | During gender-dependent line filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsMotherTag](../PlayerIsMotherTag) | Detects a mother relationship for family-specific wording. | During kinship line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsNobleTag](../PlayerIsNobleTag) | Detects the player's noble status. | During social-rank option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsRulerTag](../PlayerIsRulerTag) | Detects that the player rules a kingdom. | During ruler-specific dialogue evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsSisterTag](../PlayerIsSisterTag) | Detects a sister relationship for family dialogue. | During kinship line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsSonTag](../PlayerIsSonTag) | Detects a son relationship for family dialogue. | During kinship line selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PlayerIsSpouseTag](../PlayerIsSpouseTag) | Detects a spouse relationship with the participant. | During romance and family line checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [PreacherNotableTypeTag](../PreacherNotableTypeTag) | Matches a notable whose role is preacher. | During participant role filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [RogueSkillsTag](../RogueSkillsTag) | Matches a rogue-oriented skill profile for specialized dialogue. | During skill and persona checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [RomanticallyInvolvedTag](../RomanticallyInvolvedTag) | Detects an active romantic relation with the player. | During romance-state option checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [SexistTag](../SexistTag) | Matches a sexist trait profile for an appropriate persona variant. | During trait-tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [SturgianTag](../SturgianTag) | Selects the Sturgian culture branch for dialogue variation. | When speaker culture is resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [TribalRegisterTag](../TribalRegisterTag) | Selects tribal-register wording for the current speaker. | During voice and text variant selection. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [UncharitableTag](../UncharitableTag) | Matches an uncharitable trait for a harsher response branch. | During personality variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [UnderCommandTag](../UnderCommandTag) | Detects that the participant is operating under another commander. | During party hierarchy checks. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [UngratefulTag](../UngratefulTag) | Matches an ungrateful trait for a relationship-sensitive line. | During trait-tag evaluation. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [ValorTag](../ValorTag) | Matches a valorous trait for brave wording. | During personality variation lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VlandianTag](../VlandianTag) | Selects the Vlandian culture branch for dialogue variation. | When speaker culture is evaluated. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaCurtLowerTag](../VoiceGroupPersonaCurtLowerTag) | Selects the lower curt voice group for a persona. | When voice assets are resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaCurtTribalTag](../VoiceGroupPersonaCurtTribalTag) | Selects the tribal curt voice group for a persona. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaCurtUpperTag](../VoiceGroupPersonaCurtUpperTag) | Selects the upper curt voice group for a persona. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaEarnestLowerTag](../VoiceGroupPersonaEarnestLowerTag) | Selects the lower earnest voice group. | When the displayed line chooses voice assets. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaEarnestTribalTag](../VoiceGroupPersonaEarnestTribalTag) | Selects the tribal earnest voice group. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaEarnestUpperTag](../VoiceGroupPersonaEarnestUpperTag) | Selects the upper earnest voice group. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaIronicLowerTag](../VoiceGroupPersonaIronicLowerTag) | Selects the lower ironic voice group. | When persona voice assets are resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaIronicTribalTag](../VoiceGroupPersonaIronicTribalTag) | Selects the tribal ironic voice group. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaIronicUpperTag](../VoiceGroupPersonaIronicUpperTag) | Selects the upper ironic voice group. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaSoftspokenLowerTag](../VoiceGroupPersonaSoftspokenLowerTag) | Selects the lower soft-spoken voice group. | When voice assets are resolved. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaSoftspokenTribalTag](../VoiceGroupPersonaSoftspokenTribalTag) | Selects the tribal soft-spoken voice group. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [VoiceGroupPersonaSoftspokenUpperTag](../VoiceGroupPersonaSoftspokenUpperTag) | Selects the upper soft-spoken voice group. | During voice-group lookup. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [WandererTag](../WandererTag) | Matches a wanderer notable role for roaming-character dialogue. | During participant role filtering. |
| TaleWorlds.CampaignSystem.Conversation.Tags | [WaryTag](../WaryTag) | Matches a wary hero trait for guarded wording. | During personality variation lookup. |

## Navigation

- [Parent: Campaign-Ext](..)
- [Siblings: GameMenus](../gamemenus) and [MapEvents](../mapevents)
- [Related: Quests](../quests), [Actions](../actions), and [Campaign events](../CampaignEvents)
