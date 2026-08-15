---
title: "SkillObject"
description: "The registered definition object for a skill in v1.4.5: explains the boundary between a skill's ID, attribute associations, text, and a hero's runtime skill values."
---
# SkillObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public sealed class SkillObject`  
**Base:** `PropertyObject`  
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/SkillObject.cs`

## Overview

`SkillObject` is a **registered skill definition**: it answers "what this skill is, what it is called, and which `CharacterAttribute` values it is grouped under", but it does not store how many skill points a given `Hero` currently has. Skills live in the static object-definition layer of Core, ahead of any campaign runtime character data. When the game boots or a module initializes, the default skills are created and registered through `DefaultSkills`, and `Skills.All` exposes the collection of registered definitions. `CharacterObject`, the character-creation flow, and the companion system all reference the same `SkillObject` as a dictionary key or template, while the actual levels, experience, and perk points remain part of the character's runtime skill data.

## Mental Model

Treat `SkillObject` as a **definition, not a per-hero state container**. It sits in Core's object-definition layer, before the campaign-side character runtime data. The default skills are created and registered through `DefaultSkills` during game start or module initialization, and `Skills.All` provides the set of registered definitions. `CharacterObject`, the character-creation system, and the companion system use the same `SkillObject` as a dictionary key or template reference; the real levels, experience, and perk allocation still belong to the character's skill data.

Therefore, mods usually read existing definitions and then use them to look up a character's skill value or to identify an item's `RelevantSkill`. Do not treat `SkillObject.Initialize` as a runtime entry point for changing a hero's skills, and do not create one definition object per hero. Duplicating a `StringId`, initializing after the registration phase on your own initiative, or passing an unregistered object to a system that expects a globally-registered definition will cause lookup failures, duplicate IDs, or inconsistent save/template references.

## When to Use It and When Not To

### Suitable uses

- Look up a skill in `Skills.All` and display its name, description, or associated attributes.
- Read an existing `SkillObject` reference from a `CharacterObject`, equipment, or the development system.
- Register a new skill definition that genuinely belongs to your module content during the module initialization phase, giving it a unique and stable `StringId`.

### Unsuitable uses

- Do not use `SkillObject` in place of a hero's skill level, experience, or perk state; those belong to the character's runtime data and development system.
- Do not repeatedly call `Initialize` inside a campaign tick, and do not modify the `Attributes` of an already-registered skill to "temporarily" change a character's attributes.
- Do not guess a skill object from a string. Prefer `Skills.All`, the default skill definitions, or a reference passed in by the call site; string lookups must agree with the registration order and the ID contract.

## Dependencies

```text
DefaultSkills / module registration
        ↓
MBObjectManager → SkillObject → Skills.All
        ↓                         ↓
CharacterObject / ItemObject   Hero's skill data and CharacterDevelopment
        ↓
CharacterCreationCampaignBehavior / CompanionsCampaignBehavior
```

- Upstream: [`PropertyObject`](../PropertyObject), `TextObject`, and the object registration flow. `StringId` comes from the base class and must not be reused arbitrarily.
- Siblings: [`CharacterAttribute`](../CharacterAttribute) and [`DefaultSkills`](../DefaultSkills); `Skills.All` is the runtime collection entry point — do not mistake it on this page for another kind of definition object.
- Downstream: [`CharacterObject`](../../campaign/CharacterObject) places the skill definition into character/troop templates; the hero's runtime skill system stores levels and experience under the same reference.
- Related: an item can point at a skill definition through `ItemObject.RelevantSkill`; the item itself remains an [`ItemObject`](../ItemObject), not a skill object.

## Key Members and Timing

| Member | Purpose | Timing and side effects |
|--------|---------|--------------------------|
| `Attributes` | Returns the `CharacterAttribute[]` associated with this skill. For example, Strength, Control, or Intelligence affect which group the skill belongs to. | Only meaningful as a module definition after `Initialize(name, description, attributes)` completes. Do not read the array as the hero's current attribute values. |
| `HowToLearnSkillText` | Looks up the `str_how_to_learn_skill` text by `StringId`. Returns "Not available" when not found. | Depends on `GameTexts` being loaded; a missing text means missing localization resources, not a broken skill object. Every access may trigger a text lookup. |
| `StringId`, `Name`, `Description` | Stable identity and display text inherited from `PropertyObject`. | The registration ID is used for cross-system references; display text should go through `TextObject`, not hardcoded localization strings in runtime state. |
| `Initialize(TextObject, TextObject, CharacterAttribute[])` | Sets the name, description, and attribute array during the definition phase, then calls `AfterInitialized`. | This is part of the construction/registration flow, not an API for adjusting character progress. Calling it repeatedly changes the shared definition and affects every template that references it. |
| `ToString()` | Returns the `Name` text first, otherwise the `StringId`. | Suitable for logs and diagnostics; should not be used as a stable save key, because the display name changes with language. |

The auto-collection methods belong to the SaveSystem reflection/code-generation implementation and are not a mod-facing business entry point. When you need to persist a character's skills, save the character or behavior state that owns the skill values, and honor the contracts of [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner) and [`CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase).

## How to Obtain

### Reading a definition from the default skill collection

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

`Skills.Riding` and `Skills.All` are the real entry points after the game's default skills are registered. A mod's own UI can read `Name` and `Description`, but when querying a hero's level you must go back to the character's skill data rather than inferring it from `SkillObject`.

### Reading from a real call-site object

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

An item's `RelevantSkill` only indicates which skill is associated with using that item; weapon damage and the hero's skill value are still computed by the corresponding item/character systems.

## Risks and Boundaries

- **Registration timing:** `SkillObject` depends on the initialization of the object system and text resources. Reading `Skills.All` too early, or modifying an already-registered definition too late, may yield an empty collection or change globally shared state.
- **Unique ID:** `StringId` participates simultaneously in object lookup, template references, and cross-save identification. Do not reuse a vanilla ID, and do not generate a random ID on every startup.
- **Definition versus values:** `Attributes` is the skill's classification association, not the character's current attributes; `SkillObject` also carries no experience, level, or perk. Getting the layer wrong will desync the UI display from the campaign calculation.
- **Localization:** `HowToLearnSkillText` depends on `GameTexts.FindText`. A missing text returns a default string; the caller should accept that result rather than assuming a null reference will always be filled in.
- **Shared reference:** `CharacterObject`, items, and multiple characters can share the same definition object. Do not modify `Attributes` or the name during the campaign to influence a single character.

## Cross-Version Notes

This page is based on the v1.4.5 `TaleWorlds.Core` source. The v1.3.15 skill collection and default definitions may differ in what is added or removed; cross-version code should check available definitions by `StringId` rather than assuming every version has the same skills or the same attribute associations.

## See Also

- [↑ Core Extra parent](../)
- [↔ ItemObject](../ItemObject)
- [↔ Equipment](../Equipment)
- [↔ Banner](../Banner)
- [↔ Campaign: CharacterObject](../../campaign/CharacterObject)
- [Related: SaveableTypeDefiner](../../save-system/SaveableTypeDefiner)
