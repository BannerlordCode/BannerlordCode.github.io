---
title: "Attributes"
description: "The only public doorway to the roster of CharacterAttribute objects (Vocation / Dexterity / Intelligence): an expression-bodied facade over Campaign's internal AllCharacterAttributes, returned as MBReadOnlyList."
---

# Attributes

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class Attributes`
**Base:** none (static class)
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/Attributes.cs`

## Overview

The entire meaningful content of `Attributes` is one line:

```csharp
public static MBReadOnlyList<CharacterAttribute> All => Campaign.Current.AllCharacterAttributes;
```

It exists purely for **visibility**. The `AllCharacterAttributes` member on [Campaign](../Campaign) is `internal` (declared at `Campaign.cs:326`, assigned at `Campaign.cs:1156` via `MBObjectManager.Instance.GetObjectTypeList<CharacterAttribute>()`), so a mod cannot reach it. The engine therefore provides a public static facade. It is not a container of attributes — it is **the public read-only projection of the list Campaign already holds**, re-resolved through `Campaign.Current` on every read.

In the architecture this type carries the **"enumeration baseline for a character's three attributes"** slot. Everything that needs to walk every attribute goes through it: the character serialization path in `CharacterData` sizes a `PropertyObjectData[]` from `Attributes.All.Count` and writes `hero.GetAttributeValue(Attributes.All[k])` for each index, and `EducationCampaignBehavior` iterates it to hand out attribute points and compute growth. It sits beside the global `Skills` and `PerkObject` collections, but **only this one has an internal backing member on Campaign**, which is exactly why it deserves a class of its own.

`All` returns an `MBReadOnlyList<CharacterAttribute>` — **read-only**. To give heroes a new attribute entry the correct route is to declare it in the XML `CharacterAttributes` so it shows up in the `MBObjectManager` type list, never to attempt an `Add` on this list.

## Mental Model

Think of it as **"the public projection of `MBObjectManager`'s type list, for the attribute row"**.

- **It is a property access, not a constant.** `All` is expression-bodied and dereferences `Campaign.Current` on every read. A null `Campaign.Current` throws immediately — never touch it at the main menu, during `OnSubModuleLoad`, or before a load has completed.
- **Order is the index.** `CharacterData` allocates its array by `Attributes.All[k]` index, so "which slot is Vocation in" is part of the save format. **Appending new attributes at the end of the XML is the safe move**; inserting in the middle shifts the arrays of every character already in the save.
- **The list content comes from `MBObjectManager`, not from hand-maintained Campaign state.** It follows whatever the XML load produced, so a mod that adds a `CharacterAttribute` definition sees it appear in `All` with no registration code.
- **Never cache it in a static field.** Loading a save rebuilds `Campaign` and its type list; a cross-load `MBReadOnlyList` reference points outside the current world. Read it fresh each time.
- **It pairs with `Hero.HeroDeveloper.UnspentAttributePoints`.** The points live on the hero; the roster lives here.

### Typical usage shapes

| What you want to do | How to use `Attributes.All` |
| --- | --- |
| Export a hero's three attributes as text | `foreach (CharacterAttribute attr in Attributes.All)` plus `hero.GetAttributeValue(attr)` |
| Find the attribute object with a given StringId | Linear search on `attr.StringId`; **never a fixed index** |
| Grant attribute points by difficulty | Iterate twice: sum the current values first, then decide the grant |
| Copy one hero's attributes onto another | Per attribute, write through `HeroDeveloper` rather than the backing array |

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `All` | `public static MBReadOnlyList<CharacterAttribute> All => Campaign.Current.AllCharacterAttributes` | The only member. Returns the read-only list of every `CharacterAttribute` definition in the current campaign. **`Campaign.AllCharacterAttributes` is internal, so this facade is the only legal entry point for a mod.** Every access re-resolves `Campaign.Current`; nothing is cached. |

## Examples

Export a hero's attributes as one line of text, mirroring the shape used by the serialization path in `CharacterData`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;

public static string DescribeAttributes(Hero hero)
{
    if (hero == null || Campaign.Current == null)
    {
        return "";
    }

    System.Text.StringBuilder builder = new System.Text.StringBuilder();
    for (int i = 0; i < Attributes.All.Count; i++)
    {
        CharacterAttribute attribute = Attributes.All[i];
        int value = hero.GetAttributeValue(attribute);
        builder.Append(attribute.StringId).Append("=").Append(value).Append(" ");
    }

    return builder.ToString();
}
```

Look up one attribute by StringId. Do **not** depend on a fixed index, because inserting new entries in the XML shifts the positions:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;

public static int GetVocation(Hero hero)
{
    if (hero == null || Campaign.Current == null)
    {
        return 0;
    }

    foreach (CharacterAttribute attribute in Attributes.All)
    {
        if (attribute.StringId == "vocation")
        {
            return hero.GetAttributeValue(attribute);
        }
    }

    return 0;
}
```

Read back the totals after a point grant. The write path goes through `HeroDeveloper`; never patch the backing array directly:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;

Hero target = Hero.MainHero;
if (target != null && Campaign.Current != null && target.HeroDeveloper != null)
{
    int unspent = target.HeroDeveloper.UnspentAttributePoints;
    int total = 0;
    for (int i = 0; i < Attributes.All.Count; i++)
    {
        total += target.GetAttributeValue(Attributes.All[i]);
    }

    Debug.Print("unspent=" + unspent + " total=" + total, 0);
}
```

## Risks and crash boundaries

- **A null `Campaign.Current` throws with no guard.** That is the single crash point of this type, and nothing protects it. Read it only after the campaign has been created.
- **The backing member is internal.** Do not reflect into `Campaign.Current.AllCharacterAttributes` or write it directly — it does not compile. `Attributes.All` is sufficient, and that is the whole reason the class exists.
- **Order sensitive.** The serialization path writes arrays by `Attributes.All` index. When defining a custom `CharacterAttribute`, **append it to the end of the XML list**; inserting in the middle desynchronises the attribute arrays of every character in the same save.
- **The list follows `MBObjectManager`.** Loading a different XML set (a mod shipping its own item pack) yields a list of a different length. Always size arrays from `Attributes.All.Count`; never hard-code a number.
- **Do not cache into a static field.** Loading a save rebuilds `Campaign` and its type list, so an old `MBReadOnlyList` reference points outside the current world.
- **Reads are safe, writes need care.** `GetAttributeValue` returns 0 when the hero's `_characterAttributes` is null, but the write path must go through the official `Hero.HeroDeveloper` surface; bypassing it breaks save consistency.
- **Static class: not instantiable, not inheritable.** It is a `public static class` with no constructor and no implicit instance path.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/Attributes.cs` is a 9-line original-source file: two `using` directives and one expression-bodied property. The version-sensitive part is not this file but the **accessibility of `AllCharacterAttributes` on `Campaign.cs`**: if a version promotes it from `internal` to `public`, this facade becomes redundant; if it is ever moved back to `private`, mods lose attribute enumeration entirely — that would be the breaking change worth watching for.

## Dependencies

- Sole data source: the `internal MBReadOnlyList<CharacterAttribute> AllCharacterAttributes` on [Campaign](../Campaign), populated during campaign initialization from `MBObjectManager.Instance.GetObjectTypeList<CharacterAttribute>()`
- Element type: [CharacterAttribute](../../core-extra/CharacterAttribute) is a Core-layer `MBObjectBase` subclass, inheriting `StringId` and `Name`
- Return container: `MBReadOnlyList<T>` from the `TaleWorlds.Library` namespace; **not modifiable**, so any add or remove must happen in XML
- Typical consumers: `GetAttributeValue(CharacterAttribute)` and `HeroDeveloper` on [Hero](../Hero), plus the serialization path that sizes its array from `All.Count`
- Sibling global collections: `Skills.All`, `PerkObject.All`, and `TraitObject.All` follow the same "global definition roster" pattern, but only the attribute row has an internal Campaign member
- Base-class reference: [MBObjectBase](../../core/MBObjectBase) supplies `StringId` and `Id`
- Bucket index: [campaign API section](../)
