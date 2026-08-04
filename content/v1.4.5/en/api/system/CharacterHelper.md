---
title: "CharacterHelper"
description: "CharacterHelper is the campaign character toolbox for death text, appearance seeds, troop upgrade trees, equipment checks, formation searches, quest cleanup, and wanderer-template selection."
---
# CharacterHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class CharacterHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## One-sentence responsibility

It connects `CharacterObject`, `Hero`, `PartyBase`, and equipment data to campaign appearance, troop-tree, equipment-validation, formation, and object-lifecycle logic; most methods calculate or format values, while `DeleteQuestCharacter` unregisters an object from the world.

## Mental Model

This is a static toolbox organized by call site, not a character repository and not a replacement for `KillCharacterAction`, upgrade Actions, or `MBObjectManager`. Appearance methods calculate poses, facial idles, colors, or seeds from persona, traits, faction, and wounds. Troop methods traverse `CharacterObject.UpgradeTargets`. Equipment methods read skill, gender, and item flags. The quest-character method is the exceptional mutation: it removes a location character and calls `ObjectManager.UnregisterObject`.

Callers must separate rule reads from world changes. Recalculate `GetTroopTree`, `CanUseItem`, and `GetDefaultWeapon` when needed, while using `DeleteQuestCharacter` only after the quest flow has confirmed that the object must leave both the world and the ObjectManager. Do not cache these values before `Campaign.Current`, `Game.Current`, and their object collections are ready.

## When to use and when not to use

- Use `GetTroopTree`, `FindUpgradeRootOf`, and `SearchForFormationInTroopTree` to inspect upgrade graphs instead of duplicating their traversal and cycle semantics.
- Use `CanUseItem` when the UI needs the localized reason an equipment element is invalid; actual equipment changes remain the responsibility of the higher-level system.
- Use face-seed and pose methods to reproduce native character-generation inputs, not as save IDs.
- Call `DeleteQuestCharacter` only when the quest lifecycle explicitly ends the character's world presence. Death, departure, and captivity belong to their respective Actions.

## Dependencies

```text
CharacterObject / Hero / PartyBase / EquipmentElement
  -> CharacterHelper calculations and text
  -> AgentOrigins, troop upgrade, equipment UI, quest cleanup
  -> StringHelpers / MBObjectManager when text or unregistering is required
```

- Core inputs: [CharacterObject](../../campaign/CharacterObject), [Hero](../../campaign/Hero), [PartyBase](../../campaign/PartyBase), and [ItemObject](../../core-extra/ItemObject).
- Text and campaign context: [StringHelpers](../StringHelpers) and [Campaign](../../campaign/Campaign).
- Destructive lifecycle: [MBObjectManager](../../campaign-ext/MBObjectManager); do not use the helper as a substitute for [KillCharacterAction](../../campaign-ext/KillCharacterAction).

## Public members

| Member group | Members | Purpose and timing |
|---|---|---|
| Death and reputation text | `GetDeathNotification`, `GetReputationDescription` | Build a `TextObject` from `KillCharacterActionDetail`, killer or victim data, and conversation text; require registered GameText and valid character context. |
| Dynamic appearance | `GetDynamicBodyPropertiesBetweenMinMaxRange`, `GetDeterministicColorsForCharacter`, `GetFaceGeneratorFilter` | Calculate body-range values, faction or culture colors, and the active FaceGen filter without writing to the character. |
| Conversation appearance | `GetNonconversationPose`, `GetNonconversationFacialIdle`, `GetStandingBodyIdle`, `GetDefaultFaceIdle` | Return native animation or idle names from persona, traits, occupation, wounds, and settlement state. |
| Troop tree | `FindUpgradeRootOf`, `SearchForFormationInTroopTree`, `GetTroopTree` | Find a root, test formation reachability, or enumerate upgrade targets by tier; these methods do not perform an upgrade. |
| Equipment validation | `GetDefaultWeapon`, both `CanUseItem` overloads | Find a default weapon in the five base equipment slots and validate skill, gender, flags, and non-rideable horses; the `out TextObject reason` overload supplies a UI reason. |
| Seeds | `GetPartyMemberFaceSeed`, `GetDefaultFaceSeed` | Provide stable inputs for Agent origins and character generation; party index, deterministic character hash, and rank affect the result. |
| Quest and template lifecycle | `DeleteQuestCharacter`, `GetRandomCompanionTemplateWithPredicate` | The first removes a location character and unregisters it; the second selects a registered wanderer template and can return null when no candidate exists. |

## Real example

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

CharacterObject root = MobileParty.MainParty.MemberRoster.GetTroopRoster()
    .Select(entry => entry.Character)
    .FirstOrDefault(character => character.IsBasicTroop);

if (root != null)
{
    CharacterObject tierFour = CharacterHelper.GetTroopTree(root, minTier: 4f, maxTier: 4f).FirstOrDefault();
    bool hasFormation = CharacterHelper.SearchForFormationInTroopTree(root, FormationClass.Infantry);
}
```

Equipment validation should use a real element from the character:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

CharacterObject character = Hero.MainHero.CharacterObject;
EquipmentElement element = character.Equipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
bool canUse = CharacterHelper.CanUseItem(character, element, out TextObject reason);
```

## Risks and save boundaries

- `DeleteQuestCharacter` removes the character from `LocationComplex` and calls `Game.Current.ObjectManager.UnregisterObject`. It is not a death, dismissal, or party-leave API; misuse can invalidate references and affect save loading.
- `GetTroopTree` and formation searches depend on the `UpgradeTargets` graph. Do not persist results for an unregistered or still-building CharacterObject, and do not assume every tree is cycle-free.
- `CanUseItem` reads `ItemObject.RelevantSkill`, gender flags, and `HorseComponent`; validate the item before passing an empty or mismatched equipment element.
- Face seeds and poses depend on faction, traits, settlement, and party strength. They are not stable character identity keys and should not be the only values saved or synchronized.
- `GetRandomCompanionTemplateWithPredicate` can return null when the template collection is empty or the predicate is too narrow; handle the no-candidate result.

## Version note

In v1.4.5, `CanUseItem` additionally rejects a non-rideable `HorseComponent` and applies special rejection rules to three Dragon Banner items. Do not copy only the skill check.

## Navigation

- [↑ API system index](../)
- [↔ StringHelpers](../StringHelpers)
- [Related: CharacterObject](../../campaign/CharacterObject)
- [Related: Hero](../../campaign/Hero)
- [Related: KillCharacterAction](../../campaign-ext/KillCharacterAction)
