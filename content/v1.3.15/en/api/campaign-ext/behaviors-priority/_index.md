---
title: "Priority Behavior Types"
description: "Priority CampaignBehaviors for lifecycle, diplomacy, bandits, caravans, and save boundaries."
weight: 10
---

# Priority Behavior Types

**Responsibility:** These `CampaignBehaviorBase` implementations bind event subscriptions, daily progression, dialog registration, and `SyncData` persistence to the campaign lifecycle. They are not utilities to construct from a tick callback.

## Mental model

`CampaignGameStarter` adds behaviors while the campaign is being assembled; `Campaign` then exposes the registered instance through `GetCampaignBehavior<T>()`. The campaign owns the instance, `RegisterEvents` performs one-time subscription, and `SyncData` connects behavior state to the save. `CampaignBehaviorManager` collects each behavior before saving and restores it after loading, so fields, SaveableTypeDefiners, and event order form one contract.

This page covers the first priority set: aging and character creation, alliances and war, bandits and caravans, banners and buildings, battle recovery, and management. Return to [Actions](../actions/) for world-state mutations and [Models](../models/) for formula replacement. The `TypeDefiner` rows only describe save type registration; they are not business behaviors.

## Dependencies

- **Upstream:** [Campaign](../../campaign/Campaign), [CampaignGameStarter](../CampaignGameStarter), [CampaignEvents](../CampaignEvents), and `Campaign.Current`.
- **Downstream:** [Actions](../actions/), [Models](../models/), campaign events, dialog/quest systems, and the [save system](../../save-system/).
- **Siblings:** [Behaviors family](../behaviors/), [Actions](../actions/), [Issues](../issues/), and [Quests](../quests/).
- **Do not:** subscribe repeatedly outside `RegisterEvents`, assume `Campaign.Current` during module loading, or remove a behavior with save fields without a compatibility migration.

## First priority types and typical timing

| Namespace | Type | Purpose | Timing |
|---|---|---|---|
| TaleWorlds.CampaignSystem.CampaignBehaviors | [AgingCampaignBehavior](../AgingCampaignBehavior) | Processes hero age, coming of age, growth, death, and extra lives, saving the underage and extra-life dictionaries. | Daily hero tick, load, and character-creation completion |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [Alliance](../../campaign/Alliance) | Stores two kingdoms and the alliance end time as a lightweight saveable struct. | Alliance creation, daily expiry, and save serialization |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [AllianceCampaignBehavior](../AllianceCampaignBehavior) | Maintains alliances and call-to-war agreements, reacting to war, peace, and kingdom destruction. | Daily clan tick, diplomacy events, and campaign assembly |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [AllianceCampaignBehaviorTypeDefiner](../AllianceCampaignBehaviorTypeDefiner) | Registers save definitions for `Alliance`, `CallToWarAgreement`, and their containers. | Save type-definition construction |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BackstoryCampaignBehavior](../BackstoryCampaignBehavior) | Connects character backstory and opening narrative choices to the campaign behavior layer. | Character-creation completion and new-campaign startup |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior) | Registers bandit dialogs and records friendly, paid-off, or hostile player interactions, clearing them when a party is destroyed. | Session launch, encounter dialog, and party destruction |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BanditInteractionsCampaignBehaviorTypeDefiner](../BanditInteractionsCampaignBehaviorTypeDefiner) | Registers the interaction enum and `MobileParty`-keyed container for saves. | Save type-definition construction |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior) | Spawns and maintains bandit parties according to campaign map and settlement state. | Daily map progression and campaign assembly |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BannerCampaignBehavior](../BannerCampaignBehavior) | Connects banner effects, hero banners, and related campaign events to the behavior lifecycle. | Banner initialization, hero changes, and event notification |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BattleCampaignBehavior](../BattleCampaignBehavior) | Receives map-battle results and drives campaign rewards, notices, and follow-up processing. | MapEvent completion and battle-result broadcast |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) | Advances town building queues and connects daily building changes to events and saves. | Daily town tick |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CallToWarAgreement](../../campaign/CallToWarAgreement) | Stores the calling kingdom, called kingdom, enemy target, and agreement expiry. | Alliance decision and agreement expiry |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignBattleRecoveryBehavior](../CampaignBattleRecoveryBehavior) | Applies the campaign-side recovery phase for parties and characters after a battle. | After a MapEvent ends |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignBehaviorManager](../CampaignBehaviorManager) | Owns registered behaviors and coordinates event registration, pre-save collection, and post-load restoration. | Campaign initialization, save, and load |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignFactionManagerBehaviour](../CampaignFactionManagerBehaviour) | Connects the faction manager's initialization and lifecycle to the campaign behavior set. | Campaign construction and faction restoration |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignWarManagerBehavior](../CampaignWarManagerBehavior) | Maintains campaign-level war-manager state and responds to diplomacy and war events. | War, peace, and daily diplomacy progression |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CaravanConversationsCampaignBehavior](../CaravanConversationsCampaignBehavior) | Registers conversation, trade, and leave conditions for caravan encounters. | Caravan encounter startup |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CaravansCampaignBehavior](../CaravansCampaignBehavior) | Spawns and manages caravans, trade logs, player interactions, and trade-related save containers. | Daily caravan progression, trade events, and load |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CaravansCampaignBehaviorTypeDefiner](../CaravansCampaignBehaviorTypeDefiner) | Registers save definitions for caravan interactions, trade logs, and log containers. | Save type-definition construction |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CharacterCreationCampaignBehavior](../CharacterCreationCampaignBehavior) | Connects character-creation occupations, culture, and opening behavior to the campaign lifecycle. | Character-creation completion and opening setup |

## Real lookup and registration path

After the campaign exists, obtain an interface or behavior from `Campaign.Current`; do not construct an official instance yourself or repeat its registration logic from `RegisterEvents`.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

IAllianceCampaignBehavior alliances =
    Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();
Kingdom firstKingdom = Kingdom.All.FirstOrDefault();
Kingdom secondKingdom = Kingdom.All.Skip(1).FirstOrDefault();
if (alliances != null && firstKingdom != null && secondKingdom != null)
{
    bool hasAlliance = alliances.IsAllyWithKingdom(firstKingdom, secondKingdom);
}
```

`GetCampaignBehavior<T>()` returns the instance assembled by the campaign. Check the actual interface and null conditions in the source before calling a member. A custom behavior belongs in `CampaignGameStarter.AddBehavior`, with its state synchronized in `SyncData(IDataStore)` rather than a static field.

## Crash and corrupt-save boundaries

- The `CampaignBehaviorManager` list, event registration, and save/load order are coupled. Adding the same behavior twice duplicates rewards, dialogs, and event reactions.
- `Alliance`, `CallToWarAgreement`, bandit interactions, and caravan trade logs depend on stable `SaveableTypeDefiner` IDs. Changing field order or IDs can make old saves unreadable.
- `AgingCampaignBehavior`, `BuildingsCampaignBehavior`, and `CaravansCampaignBehavior` run from daily ticks; do not replay daily progression manually from a UI callback.
- Behavior callbacks can receive destroyed parties, completed encounters, or no active campaign. Keep the lifecycle checks used by the source implementation.

## Navigation

- **Parent:** [Behaviors family](../behaviors/)
- **Siblings:** [Actions](../actions/), [Models](../models/), [Issues](../issues/), [Quests](../quests/)
- **Related:** [CampaignBehaviorBase](../CampaignBehaviorBase), [CampaignEvents](../CampaignEvents), [CampaignGameStarter](../CampaignGameStarter)
- **Risk guide:** [Crash boundaries](../../../architecture/crash-boundaries)
