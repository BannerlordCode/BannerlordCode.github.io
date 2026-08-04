---
title: "SkillObject: Skill Definition and Attribute Association"
description: "The registered v1.4.5 skill definition object, including stable IDs, attribute associations, localization, and the boundary from character skill values."
---
# SkillObject

## Metadata

- **Namespace:** `TaleWorlds.Core`
- **Module:** `TaleWorlds.Core`
- **Type:** `public sealed class SkillObject`
- **Base:** `PropertyObject`
- **Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/SkillObject.cs`

## Responsibility in one sentence

`SkillObject` defines a registered skill: it answers what the skill is, how it is named, and which `CharacterAttribute` objects it belongs to; it does not store a particular Hero's current skill level.

## Mental model

This is a Core object-definition type, upstream of Campaign runtime data. During game or module initialization, the default skill definitions are created and registered through `DefaultSkills`; `Skills.All` exposes the registered set. `CharacterObject`, character creation, and companion systems use the same `SkillObject` reference as a dictionary key or template relationship. A character's level, experience, and perk progression remain in the character skill/development data.

A mod normally reads an existing definition, then uses it to query a character's skill value or identify an item's `RelevantSkill`. `SkillObject.Initialize` is not a runtime Hero progression API, and every Hero must not receive a new definition instance. Reusing a `StringId`, initializing after registration, or passing an unregistered object to code that expects a global definition can cause lookup failures, duplicate IDs, or inconsistent template and save references.

## When to use it, and when not to

### Use it when

- Looking up a skill in `Skills.All` and displaying its name, description, or associated attributes.
- Reading the `SkillObject` already referenced by a `CharacterObject`, an item, or a development system.
- Registering a genuinely new module skill during content initialization with a unique, stable `StringId`.

### Do not use it when

- Do not use `SkillObject` as a replacement for a Hero's skill level, experience, or perk state; those belong to character runtime data and development systems.
- Do not call `Initialize` repeatedly during campaign ticks or mutate the registered `Attributes` array to change one character's attributes.
- Do not guess skill objects from display text. Prefer `Skills.All`, a default definition, or the reference supplied by the call site; string lookup must respect the registration and ID contract.

## Dependency graph

```text
DefaultSkills / module registration
             ↓
MBObjectManager → SkillObject → Skills.All
             ↓                    ↓
CharacterObject / ItemObject   Hero skill data and development
             ↓
CharacterCreationCampaignBehavior / CompanionsCampaignBehavior
```

- Upstream: [`PropertyObject`](../PropertyObject), `TextObject`, and object registration. The stable `StringId` comes from the base object and must not be casually reused.
- Peers: [`CharacterAttribute`](../CharacterAttribute) and [`DefaultSkills`](../DefaultSkills); `Skills.All` is the runtime collection entry point, not another definition type.
- Downstream: [`CharacterObject`](../../campaign/CharacterObject) stores skill definitions in character and troop templates; Hero runtime data stores levels and experience against the same references.
- Related content: an item can point to a definition through `ItemObject.RelevantSkill`; the item remains an [`ItemObject`](../ItemObject), not a skill object.

## Important members and timing

| Member | Use | Timing and side effects |
|---|---|---|
| `Attributes` | Returns the `CharacterAttribute[]` associated with the skill. | It has module-defined meaning after `Initialize(name, description, attributes)`. It is not the Hero's current attribute value. |
| `HowToLearnSkillText` | Looks up `str_how_to_learn_skill` with this object's `StringId`, returning `Not available` when the text is absent. | Depends on loaded `GameTexts`; missing localization is a content issue, not necessarily a broken object. Each access performs the lookup path. |
| `StringId`, `Name`, `Description` | Stable identity and localized display state inherited from `PropertyObject`. | The ID participates in object references; display state should remain `TextObject` based and must not be used as a save key. |
| `Initialize(TextObject, TextObject, CharacterAttribute[])` | Sets the name, description, and associated attributes, then calls `AfterInitialized`. | It belongs to definition construction and registration. Repeated calls mutate a shared object used by every template that references it. |
| `ToString()` | Returns the localized `Name` when available, otherwise `StringId`. | Useful for diagnostics, not for a stable save key because the displayed name is language-dependent. |

The auto-collect methods are SaveSystem reflection support, not mod-facing business entry points. Save the character or behavior state that owns skill values and follow [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner) and [`CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase) contracts.

## Real acquisition paths

### Read a registered default skill

```csharp
using TaleWorlds.Core;

SkillObject riding = Skills.Riding;
foreach (SkillObject skill in Skills.All)
{
    if (skill == riding)
    {
        string stableId = skill.StringId;
        TextObject label = skill.Name;
        break;
    }
}
```

`Skills.Riding` and `Skills.All` are real access points after the game's default skill registration. A mod UI may read `Name` and `Description`, but a Hero level query must return to character skill data rather than infer a value from the definition.

### Read the definition from a real item reference

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("sword_two_handed");
SkillObject relevantSkill = item.RelevantSkill;
if (relevantSkill != null)
{
    TextObject skillName = relevantSkill.Name;
}
```

An item's `RelevantSkill` identifies the skill associated with using that item. Weapon effects and the Hero's skill value are still calculated by their respective item and character systems.

## Risks and boundaries

- **Registration timing:** `SkillObject` depends on object-system and text initialization. Reading `Skills.All` too early or changing a registered definition late can produce an empty view or alter shared state.
- **Unique IDs:** `StringId` participates in object lookup, template references, and cross-save identity. Do not reuse an original ID or generate a random ID on every startup.
- **Definition versus value:** `Attributes` classifies the skill; it is not the character's current attribute. `SkillObject` carries no experience, level, or perk state. Crossing this boundary makes UI and campaign calculations disagree.
- **Localization:** `HowToLearnSkillText` depends on `GameTexts.FindText`. Missing text returns a fallback object, so callers should handle that result instead of assuming it will be populated later.
- **Shared references:** `CharacterObject`, items, and many Heroes can point to one definition. Do not mutate its attributes or display text during a campaign to affect only one character.

## Version note

This page follows the v1.4.5 `TaleWorlds.Core` source. The default skill set and attribute associations may differ in v1.3.15. Version-tolerant code should test for a definition by stable ID and availability instead of assuming every version exposes the same skill.

## Navigation

- [↑ Core Extra parent](../)
- [↔ ItemObject](../ItemObject)
- [↔ Equipment](../Equipment)
- [↔ Banner](../Banner)
- [↔ Campaign: CharacterObject](../../campaign/CharacterObject)
- [Related: SaveableTypeDefiner](../../save-system/SaveableTypeDefiner)
