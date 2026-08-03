---
title: "SkillObject"
description: "The static definition of a Bannerlord skill (One Handed, Riding, Trade, …). Registered once into the ObjectManager by DefaultSkills, a SkillObject is the shared identity a character's skill level and focus points are keyed against — it holds no personal progress itself."
---

# SkillObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SkillObject : PropertyObject`
**Base:** `PropertyObject` (→ `MBObjectBase`)
**Source:** `TaleWorlds.Core/SkillObject.cs`

## Overview

`SkillObject` is **one entry in the game's skill catalogue**, not a character's current skill level. At game start `DefaultSkills` constructs the 18 built-in skills (One Handed, Two Handed, Polearm, Bow, Crossbow, Throwing, Riding, Athletics, Crafting, Tactics, Scouting, Roguery, Charm, Leadership, Trade, Steward, Medicine, Engineering), registers each into `MBObjectManager`, and `Initialize`s it with a name and description. Those 18 instances then become the single, globally shared "skill identity cards".

Where a hero's actual level and accumulated XP live is a different concern entirely: those are stored on `Hero` / `HeroDeveloper` (and on the template `CharacterObject`), and the level-up logic is driven by the `SkillLevelingManager` model. So `SkillObject` exists to be **referenced** — whenever you want to query or modify a hero's skill, enumerate every skill, or show on the UI "which attribute does this skill raise and how do I learn it", the object you pass around is a `SkillObject`.

## Mental Model

Think of `SkillObject` as the **template of a skill card**:

- It has a one-to-many relationship with heroes — thousands of `Hero` instances all reference the same `DefaultSkills.OneHanded` instance, while each keeps its own level and XP separately.
- It is an `MBObjectBase`-derived object and is located in saves **by its `StringId`**. You must never `new SkillObject("OneHanded")` yourself to mean "One Handed" — that yields a second, unregistered instance that cannot participate in save deserialization. To obtain One Handed, use `DefaultSkills.OneHanded` or `MBObjectManager.Instance.GetObject<SkillObject>("OneHanded")`.
- It is read-only data. `Name`, `Description`, `Attributes`, and `HowToLearnSkillText` are fixed after the engine initializes the skill during load. Mods generally should not call `Initialize` again on an already-registered skill.
- **When to use it:** you need a "skill" reference to read its attribute, enumerate all skills, or hand to `Hero.GetSkillValue` / `Hero.AddSkillXp` / `SkillLevelingManager`.
- **When NOT to use it:** when you want to add XP or change a character's level — mutating a `SkillObject` does nothing. The correct entry point is `Hero.MainHero.AddSkillXp(skill, xp)` (delegated to `HeroDeveloper`); the level-up decision is made by `SkillLevelingManager` in response to its `On*` events. Focus points are also not on `SkillObject` — they live on `HeroDeveloper` (`AddFocus`, `UnspentFocusPoints`).
- **Downstream the per-character registry:** a character's actual skill *values* are kept in a `CharacterSkills` container (`MBCharacterSkills`, an `MBObjectBase` holding a `PropertyOwner<SkillObject>`), accessed through `BasicCharacterObject.GetSkillValue(SkillObject)`. `SkillObject` is the key; `CharacterSkills` is the per-character registry those keys point into.
- **Failure modes:** accessing `DefaultSkills.*` or `Campaign.Current.AllSkills` before the campaign exists returns `null`; a custom skill that is not registered with `MBObjectManager` before it participates in a save becomes an unresolvable dangling reference after load.

## When to Use / When NOT to Use

**Use `SkillObject` when:**
- You need a stable reference to a skill definition (to read `Attributes`, `Name`, `HowToLearnSkillText`, or to iterate `Campaign.Current.AllSkills`).
- You are querying or granting XP: `Hero.GetSkillValue(skill)` / `Hero.AddSkillXp(skill, xp)` both take a `SkillObject`.

**Do NOT use `SkillObject` when:**
- You want to change someone's skill level or XP — `SkillObject` carries no per-character progress. Go through `Hero` / `HeroDeveloper` instead (e.g. `hero.HeroDeveloper.AddFocus(skill, amount)` for focus points, `hero.AddSkillXp(skill, xp)` for XP).
- You want to add a brand-new skill at runtime — register it through `MBObjectManager` and `Initialize` during the load phase, never by ad-hoc `new`ing in a running campaign.

## Dependencies

**Upstream (definition & registration)**
- [MBObjectBase](../../campaign-ext/MBObjectBase/) — the identity/base class chain (`PropertyObject` → `MBObjectBase`); provides `StringId` and the save/ObjectManager contract.
- [PropertyObject](../../core-extra/PropertyObject/) — base class supplying `Name` / `Description` / `StringId`.
- [CharacterAttribute](../../core-extra/CharacterAttribute/) — the element type of `Attributes`.
- [DefaultCharacterAttributes](../../core-extra/DefaultCharacterAttributes/) — the six built-in attributes (Vigor / Control / Endurance / Cunning / Social / Intelligence).
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — registers skills and resolves them by `StringId`.
- [Game](../../core-extra/Game/) — owns `DefaultSkills` (`Game.Current.DefaultSkills`) and the `ObjectManager`.

**Downstream (subsystems that reference `SkillObject`)**
- [DefaultSkills](../../core-extra/DefaultSkills/) — the factory holding the 18 built-in `SkillObject` instances.
- [Hero](../../campaign/Hero/) — `GetSkillValue` / `AddSkillXp` consume a `SkillObject`.
- [HeroDeveloper](../../campaign-ext/HeroDeveloper/) — the real storage of a hero's skill levels, XP, and focus points.
- [CharacterObject](../../campaign/CharacterObject/) — the template-level `GetSkillValue` implementation for troop/character templates.
- [SkillLevelingManager](../../campaign-ext/SkillLevelingManager/) — the level-up model that consumes each `SkillObject`.
- [Campaign](../../campaign/Campaign/) — `AllSkills` is the full set of registered skills.

## Risks

- **Do not hand-`new` a `SkillObject` to stand in for a built-in skill.** Built-in skills are registered by `DefaultSkills` during load, and the engine and save system resolve references by `StringId`. A copy with the same name is not the registered instance; once it takes part in save serialization, reload can produce mismatched references or a failed load.
- **Calling `Initialize` outside the load phase overwrites the definition.** `Initialize` writes `Name` / `Description` / `Attributes` and raises `AfterInitialized`. Calling it again on an already-registered skill rewrites the globally shared definition and affects every hero that references it. To add a *custom* skill, first `MBObjectManager.Instance.RegisterPresumedObject(new SkillObject(id))`, then `Initialize`, and do it during game load.
- **`DefaultSkills.*` / `Campaign.Current.AllSkills` are `null` before the game is ready.** Accessing them from an `MBSubModuleBase` constructor or `OnSubModuleLoad` (before the campaign starts) throws a null-reference crash. Obtain skill definitions inside `OnGameStart` or a campaign Behavior.
- **`HowToLearnSkillText` depends on a localization key.** It reads the `str_how_to_learn_skill` + skill `StringId` variant from `GameTexts`; when missing it returns a `TextObject` containing `"Not available"` (not `null`). Display it directly in UI, but do not treat it as authoritative data.
- **`Attributes` is not a save point.** The attribute array is set once in `Initialize` and is not serialized separately; changing it at runtime does not persist.

## Members

### Identity & text

#### `public string StringId` (inherited from `MBObjectBase`)
The stable string ID of the skill, e.g. `"OneHanded"`, `"Riding"`. Both `MBObjectManager` and the save system use it to locate the instance.
**Side effect:** none. **When to use:** as a lookup key (`GetObject<SkillObject>(stringId)`) or to identify the skill in logs/debug output.

#### `public TextObject Name` (inherited from `PropertyObject`)
The localized display name (e.g. "One Handed"), written by `Initialize`.
**Side effect:** none. **When to use:** UI display, message composition.

#### `public TextObject Description` (inherited from `PropertyObject`)
The long description text, written by `Initialize`.

#### `public override string ToString()`
Returns `Name?.ToString() ?? StringId` — falls back to the ID when no localized name is present.
**Side effect:** none. **When to use:** debug output, logging.

#### `public TextObject HowToLearnSkillText`
Looks up the `str_how_to_learn_skill` variant for this skill's `StringId` in `GameTexts`; if not found, returns a `TextObject` whose content is `"Not available"`.
**Side effect:** none. **When to use:** to show the "how to improve this skill" hint on the skill screen.

### Attribute association

#### `public CharacterAttribute[] Attributes { get; private set; }`
Which character attributes this skill **contributes to**. Most built-in skills map to exactly one attribute (e.g. `OneHanded → Vigor`, `Trade → Social`), but the type is an array so a custom skill can contribute to several. Set by `Initialize`; immutable afterwards.
**Side effect:** none. **When to use:** to decide "which attribute does training this skill raise", or to group skills by attribute (see Example 3).

### Initialization (engine-internal, mostly)

#### `public SkillObject(string stringId)` / `public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)`
Constructs and populates a skill definition; `Initialize` writes `Name` / `Description` / `Attributes`, raises `AfterInitialized()`, and returns `this` for chaining. The engine calls this for the 18 built-in skills via `DefaultSkills.RegisterAll` → `InitializeAll`.
**Side effect:** sets globally shared definition data; repeated calls on a registered skill overwrite it.
**When to use:** only when adding a **custom** skill — register through `MBObjectManager` first, then call `Initialize`, and do it during the game load stage.

## Example

### Example 1: Obtain a built-in skill definition and read the attribute it contributes to

```csharp
// Get the "One Handed" skill definition via DefaultSkills
// (equivalent to the MBObjectManager instance with StringId = "OneHanded")
SkillObject oneHanded = DefaultSkills.OneHanded;

// The attributes it contributes to (built-in skills usually have exactly one): Vigor
foreach (CharacterAttribute attribute in oneHanded.Attributes)
{
    InformationManager.DisplayMessage(new InformationMessage($"{oneHanded.Name} contributes to {attribute.Name}"));
}

// Read the "how to learn" hint (falls back to "Not available" when unlocalized, never null)
TextObject howToLearn = oneHanded.HowToLearnSkillText;
```

### Example 2: Grant XP to the main hero's skill and read the resulting level

```csharp
// Inside a campaign Behavior / conversation / debug command: grant 1500 XP to the main hero's Trade skill
SkillObject trade = DefaultSkills.Trade;
Hero.MainHero.AddSkillXp(trade, 1500f);

// Read the current level (delegated internally to HeroDeveloper)
int tradeLevel = Hero.MainHero.GetSkillValue(trade);
```

> The actual level-up / level-down decision is made by `SkillLevelingManager` when it receives its `On*` events. Do not try to raise a level by mutating the `SkillObject`.

### Example 3: Enumerate all skills and group them by attribute

```csharp
// Campaign.Current.AllSkills is the full set of registered SkillObjects in MBObjectManager
foreach (SkillObject skill in Campaign.Current.AllSkills)
{
    // Find every skill that contributes to the Social attribute
    if (skill.Attributes.Contains(DefaultCharacterAttributes.Social))
    {
        InformationManager.DisplayMessage(new InformationMessage(skill.Name.ToString()));
    }
}

// You can also recover the registered instance precisely by StringId
SkillObject riding = MBObjectManager.Instance.GetObject<SkillObject>("Riding");
```

## Cross-Version Notes

- **1.3.0 → 1.4.5:** the public surface of `SkillObject` (`Attributes`, `HowToLearnSkillText`, `Initialize`, `ToString`, and the inherited `Name` / `StringId` / `Description`) is stable — no breaking changes.
- Some older references or auto-generated summaries mention `SkillType`, `Characteristic`, `MinValue` / `MaxValue`, or `IsPartySkill` as if they belonged to `SkillObject`. **They do not.** This class holds only definition-level data (name, description, attributes, learn hint). Per-character level and combat/party tags are maintained by `Hero` / `HeroDeveloper` and the perk/skill-effect system (`SkillEffect`) respectively. If you encounter those names, check the `Hero` or `SkillEffect` pages rather than looking for them on `SkillObject`.

## See Also

- [DefaultSkills](../../core-extra/DefaultSkills/) — the 18 built-in skill instances
- [CharacterAttribute](../../core-extra/CharacterAttribute/) — the attribute type a skill contributes to
- [PropertyObject](../../core-extra/PropertyObject/) — base class and text fields
- [Hero](../../campaign/Hero/) — per-character skill level entry point (`GetSkillValue` / `AddSkillXp`)
- [HeroDeveloper](../../campaign-ext/HeroDeveloper/) — real storage of skill levels, XP, and focus points
- [SkillLevelingManager](../../campaign-ext/SkillLevelingManager/) — the level-up model
- [Campaign](../../campaign/Campaign/) — `AllSkills` as the full set
