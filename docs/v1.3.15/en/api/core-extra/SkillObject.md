
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillObject

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** sealed class (inherits `PropertyObject`)  
**File:** `bannerlord-1.3.15/TaleWorlds.Core/SkillObject.cs`

`SkillObject` represents a skill (OneHanded, TwoHanded, Bow, Trade, Leadership, etc.). A skill is associated with one or more `CharacterAttribute`s and is the core dimension of perks (`PerkObject`) and character progression.

## Overview

Mods usually reference existing skills via the `DefaultSkills` static fields (e.g. `DefaultSkills.OneHanded`). Read/write a hero's skill value with `Hero.GetSkillValue(skill)` / `Hero.SetSkillValue(skill, value)`; add xp with `Hero.AddSkillXp(skill, xp)` or `HeroDeveloper.AddSkillXp`.

## Mental Model

Treat `SkillObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| Attributes | `CharacterAttribute[]` | Attributes this skill is tied to (get-only) |
| HowToLearnSkillText | TextObject | "How to learn this skill" text (from `str_how_to_learn_skill`) |

## Initialize

```csharp
public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)
```

Sets name, description, and associated attributes when defining a skill.

## Usage example

```csharp
// Reference a skill and read/write a hero's skill value
SkillObject oneHanded = DefaultSkills.OneHanded;
int value = hero.GetSkillValue(oneHanded);
hero.SetSkillValue(oneHanded, value + 10);
hero.AddSkillXp(oneHanded, 500f);

// Inspect the attributes a skill is tied to
foreach (CharacterAttribute attr in oneHanded.Attributes)
{
    Debug.Print(attr.Name.ToString());
}
```

## See also

- [Hero](../campaign/Hero.md)
- [HeroDeveloper](../campaign-ext/HeroDeveloper.md)
- [CharacterAttribute](./CharacterAttribute.md)
- [PerkObject](../campaign-ext/PerkObject.md)

## Usage Example

```csharp
var example = new SkillObject();
```
