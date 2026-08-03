---
title: "Character Development Family Handbook"
description: "How Bannerlord registers skills, perks, traits, cultural feats, hero progression, and event-driven skill experience."
weight: 12
---

# Character Development Family Handbook

**One-sentence role:** This namespace defines the objects and routing that turn campaign events into skill experience, perk choices, traits, and cultural effects; it does not replace the campaign models that decide the underlying rules.

## Mental model

Read this family as four connected layers rather than as thirty unrelated classes.

1. `DefaultPerks` and its nested skill groups (`OneHanded`, `Bow`, `Medicine`, and the rest) register the static `PerkObject` graph. Each perk has a required skill value, an optional alternative, role-scoped primary and secondary effects, increment types, and troop-usage masks. The nested classes are catalogs, not per-hero state.
2. `DefaultTraits` and `DefaultCulturalFeats` register `TraitObject` and `FeatObject` definitions through the game object manager. `TraitObject` stores a bounded personality or hidden trait definition; `FeatObject` stores an additive or factor-based cultural effect. The live value belongs to a hero or culture, not to the definition class.
3. `HeroDeveloper` owns the mutable progression for one `Hero`: skill XP, focus points, attribute points, total XP, levels, and learned perks. It asks `Campaign.Current.Models.CharacterDevelopmentModel` how XP maps to levels and learning rates, then changes the hero through the existing internal setters and campaign events.
4. `SkillLevelingManager` is the static forwarding surface. It delegates to the `ISkillLevelingManager` instance held by the current campaign; `DefaultSkillLevelingManager` maps combat, travel, trade, healing, siege, recruitment, and other real events to the relevant skill. `TraitLevelingHelper` is the corresponding player-trait path: it applies XP through the character-development model, updates the main hero, fires the trait-change event, and creates reputation log entries when the change is large enough.

The practical reading order is `Campaign.Current` -> `Hero.HeroDeveloper` or a `SkillLevelingManager` event boundary -> `SkillObject` / `PerkObject` / `TraitObject` -> `CharacterDevelopmentModel`. Use [CharacterDevelopmentModel](../CharacterDevelopmentModel) for XP thresholds, learning rates, and level decisions. Use [Models](../models/) for replaceable calculations and [Actions](../actions/) for world mutations. A perk catalog is not a replacement for either one.

## Dependencies and boundaries

- **Upstream:** [Campaign](../../campaign/Campaign), [Hero](../../campaign/Hero), [MobileParty](../../campaign/MobileParty), [Settlement](../../campaign/Settlement), [SkillObject](../../core-extra/SkillObject), and [GameModels](../GameModels).
- **Downstream:** campaign behaviors, [CampaignEvents](../CampaignEvents), persuasion, trade, combat, siege, settlement management, and the [save system](../../save-system/).
- **Sibling families:** [Models](../models/), [Actions](../actions/), [Behaviors](../behaviors/), [Party](../party/), and [Quests](../quests/).
- **Registration boundary:** the default classes create presumed objects while the campaign/game object manager is being assembled. Do not construct a second `PerkObject`, `TraitObject`, or `FeatObject` for a running campaign and expect `All`, perk checks, or culture checks to see it.
- **Calculation boundary:** `HeroDeveloper` and the default skill manager call the current character-development, combat, diplomacy, healing, persuasion, and siege models. Do not copy their XP constants into a UI or behavior that is meant to follow a replaceable model.
- **Mutation boundary:** use the real event or campaign entry point. Do not award XP repeatedly from a render tick, write a hero's skill fields directly, or change relation/world state from a model query.

## The registered public surface

The table deliberately uses fully qualified names. `Crafting` here is the campaign character-development perk catalog; it is different from the core crafting data type. Every row is a business purpose, not a signature restatement.

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.AdditionType | Selects whether a feat effect is interpreted as a direct addition or an additive factor when `FeatObject.Initialize` stores it. | Cultural-feat registration |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Athletics | Catalogs the Athletics `PerkObject` alternatives and their personal, party-leader, captain, or governor effects. | Default perk registration and perk selection |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Bow | Catalogs the Bow perk branch and its weapon, ranged-troop, and role effects. | Default perk registration and perk selection |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Charm | Catalogs social and persuasion perks whose effects are later consumed by relation, conversation, and settlement behaviors. | Default perk registration; persuasion and relation checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Crafting | Catalogs crafting, smelting, stamina, and smithing-related perks. | Default perk registration; crafting operations |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Crossbow | Catalogs crossbow weapon and crossbow-troop perks, including effects consumed during siege and combat calculations. | Default perk registration and combat/siege checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultCulturalFeats | Creates and initializes the culture-specific `FeatObject` definitions, including the Aserai, Battania, Empire, Khuzait, Sturgia, and Vlandia entries. | Campaign setup and culture effect queries |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultPerks | Owns the default perk catalogs, object registration, tier-cost lookup, alternative pairing, and initialization of all skill branches. | Campaign setup and hero perk selection |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultSkillLevelingManager | Implements `ISkillLevelingManager`; translates real combat, travel, trade, healing, siege, recruitment, and campaign events into skill XP. | Event callbacks during a live campaign |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultTraits | Creates the personality, persona, role, gang, and other hidden `TraitObject` definitions and exposes the five personality traits as `Personality`. | Campaign setup and trait reads |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Engineering | Catalogs engineering perks for siege engines, siege camps, settlement projects, and engineer/governor roles. | Default perk registration; siege and settlement checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.FeatObject | Stores a named culture effect, its numeric bonus, additive mode, and positive/negative classification after initialization. | Culture definition registration and effect evaluation |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.HeroDeveloper | Owns one hero's saveable skill XP, focus points, attribute points, total XP, level transitions, and perk selection. | Hero creation, XP gain, level-up, load, and reset flows |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.ISkillLevelingManager | Defines the event-to-XP contract for combat, movement, trade, persuasion, medicine, scouting, tactics, engineering, and newer campaign activities. | Campaign service registration and event forwarding |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Leadership | Catalogs leadership perks for recruiting, troop upgrades, party morale, party capacity, and party-leader effects. | Default perk registration; party and recruitment checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Medicine | Catalogs medicine perks consumed by healing, surgery, wounded recovery, settlement governance, and surgeon effects. | Default perk registration; map healing and battle recovery |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.OneHanded | Catalogs one-handed weapon and shield perks, including mounted, infantry, captain, and personal effects. | Default perk registration and combat checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.PerkObject | Stores a perk's skill, threshold, alternative branch, role bonuses, increment types, troop masks, and localized descriptions. | Object initialization and runtime perk queries |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Polearm | Catalogs polearm mounted/on-foot branches and their formation effects. | Default perk registration and combat checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Riding | Catalogs mounted movement, horse, cavalry, and riding-party perks. | Default perk registration; travel and combat checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Roguery | Catalogs roguery perks consumed by bandit recruitment, looting, prison breaks, alleys, and illicit campaign actions. | Default perk registration; crime and encounter flows |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Scouting | Catalogs scouting perks for tracks, hideouts, terrain, party movement, and scout-role effects. | Default perk registration; map movement and track events |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.SkillLevelingManager | Delegates the static event API to `Campaign.Current.SkillLevelingManager`, keeping callers independent of the default implementation. | Event producers during campaign ticks and outcomes |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Steward | Catalogs quartermaster and governor perks for food, wages, projects, carrying capacity, and settlement management. | Default perk registration; party and settlement checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Tactics | Catalogs tactics perks and is the destination for commander/army tactics XP. | Default perk registration; battle simulation and army flows |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Throwing | Catalogs throwing-weapon and throwing-troop perks. | Default perk registration and combat checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Trade | Catalogs trade-profit and caravan/trading perks, including party and governor effects. | Default perk registration; trade and economy checks |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.TraitLevelingHelper | Applies player trait XP, converts it to a trait level through the current model, broadcasts changes, and records sufficiently large reputation changes. | Quest, battle, raid, persuasion, siege, and incident outcomes |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.TraitObject | Defines a trait's localized identity, visible/hidden status, and permitted value range; it does not hold a hero's current trait value. | Trait definition registration and hero trait reads |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.TwoHanded | Catalogs two-handed weapon perks and their personal, infantry, captain, governor, and party-leader effects. | Default perk registration and combat checks |

## Real access paths

The `Hero` owns the developer object. The following reads the real campaign objects and avoids inventing a second progression store. `HeroDeveloper.GetFocus` and `GetSkillXpProgress` are read operations; use `Hero.AddSkillXp` or the event-facing manager at the appropriate campaign boundary when the feature genuinely awards experience.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;

Hero hero = Hero.MainHero;
if (hero != null && hero.HeroDeveloper != null)
{
    SkillObject scouting = DefaultSkills.Scouting;
    int focus = hero.HeroDeveloper.GetFocus(scouting);
    int progress = hero.HeroDeveloper.GetSkillXpProgress(scouting);
    bool knowsOratory = hero.GetPerkValue(DefaultPerks.Charm.Oratory);
    int honorLevel = hero.GetTraitLevel(DefaultTraits.Honor);
}
```

Event producers should enter through the static facade so the campaign's registered implementation remains in control. The parameter below must be the profit from the actual completed trade path; it is not a UI preview value.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;

Hero trader = MobileParty.MainParty.LeaderHero;
if (trader != null)
{
    SkillLevelingManager.OnTradeProfitMade(trader, tradeProfit);
}
```

`DefaultSkillLevelingManager` then applies its model-aware routing. For example, positive trade profit awards Trade XP, a successful surgery awards Medicine XP through the surgeon role, a detected track awards Scouting XP, and a siege-engine callback awards Engineering XP only when an effective engineer exists. The caller should not reproduce those formulas beside the facade.

## Important member behavior

- `PerkObject.Initialize` creates localized primary and secondary descriptions, sets the skill threshold and role effects, stores troop masks, and links `AlternativePerk` in both directions. Passing a one-sided alternative or treating `PrimaryBonus` as always a percentage changes later consumers.
- `FeatObject.Initialize` stores `EffectBonus`, `IncrementType`, and `IsPositive`. `AdditionType.Add` and `AdditionType.AddFactor` are consumed differently; a factor is not interchangeable with a raw integer bonus.
- `HeroDeveloper.AddSkillXp` applies the generic XP multiplier and, when requested, the focus learning factor. It can advance the skill and the hero level, dispatch `OnHeroGainedSkill` or `OnHeroLevelledUp`, and update saveable progress. `ChangeSkillLevel` is a deliberate level adjustment that converts the requested change back into XP; it is not a raw setter.
- `HeroDeveloper.AddFocus` and `AddAttribute` consume unspent points by default. `RemoveFocus` and `RemoveAttribute` do not restore the corresponding unspent pool automatically; callers must understand that asymmetry before using them in a respec flow.
- `DefaultSkillLevelingManager` intentionally filters several events: team kills do not award combat XP, non-positive trade/relation/tactics values do not enter the normal path, and medicine/scouting/engineering routes require the relevant party role or entity. These checks are part of the game rule, not optional validation.
- `TraitLevelingHelper` targets `Hero.MainHero`, adds to the player's existing trait XP, asks `CharacterDevelopmentModel.GetTraitLevelForTraitXp` for the new level and remainder, then emits the trait event. It is not a general-purpose setter for an arbitrary NPC's personality.
- `DefaultTraits.Personality` contains exactly Mercy, Valor, Honor, Generosity, and Calculating. Persona, role, gang, and naval traits are exposed separately; hidden traits use the `0..20` range while personality traits use `-2..2`.

## Crash and save boundaries

- `HeroDeveloper` has saveable fields and properties for `_skillXps`, `_newFocuses`, `_totalXp`, the point pools, and the hero reference. Removing a field, changing its save ID, or replacing the `PropertyOwner<SkillObject>` shape needs a save-compatibility review.
- The default definitions are registered through `Game.Current.ObjectManager` and read from campaign collections such as `PerkObject.All`, `TraitObject.All`, and `FeatObject.All`. Accessing those collections before campaign setup, or registering duplicate presumed objects, can produce missing lookups and inconsistent perk checks.
- `PerkObject.Initialize` mutates the paired alternative perk. Initialize a branch once during setup; rerunning it in a module tick can overwrite reciprocal links and localized descriptions.
- Skill-level callbacks are event boundaries, not timers. Calling `SkillLevelingManager.OnTravelOnFoot`, `OnTradeProfitMade`, or a combat callback every frame multiplies progression and can create a save that no longer reflects the campaign event history.
- Trait changes and skill changes are model-mediated. Bypassing `CharacterDevelopmentModel`, `Hero.AddSkillXp`, or the trait helper can leave the numeric level, XP remainder, notifications, and log entries out of sync.
- Do not hold a `Hero`, `MobileParty`, `Settlement`, `Track`, or `SiegeEngineType` captured from a callback past its lifecycle without checking that the entity is still valid. The default manager receives destroyed parties and completed outcomes in normal campaign progression.

## Navigation

- **Parent:** [Campaign-Ext API](../)
- **Siblings:** [Models](../models/), [Actions](../actions/), [Behaviors](../behaviors/), [Party](../party/), [Quests](../quests/)
- **Related:** [CharacterDevelopmentModel](../CharacterDevelopmentModel), [GameModels](../GameModels), [CampaignEvents](../CampaignEvents), [CampaignBehaviorBase](../CampaignBehaviorBase), [ChangeRelationAction](../ChangeRelationAction), and the [save system](../../save-system/)
- **Roadmap:** This family page covers the shared registration and runtime contract. The highest-risk `HeroDeveloper`, `PerkObject`, and `DefaultSkillLevelingManager` members should become standalone deep pages when the H3/H5 deep-page wave reaches character development; this page remains the qualified coverage entry until then.
