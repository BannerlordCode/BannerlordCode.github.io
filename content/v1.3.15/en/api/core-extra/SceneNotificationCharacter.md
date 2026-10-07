---
title: "SceneNotificationCharacter"
description: "Auto-generated class reference for SceneNotificationCharacter."
---
# SceneNotificationCharacter

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `struct SceneNotificationCharacter`
**Base:** none
**File:** `TaleWorlds.Core/SceneNotificationData.cs`

## Overview

`SceneNotificationCharacter` is a `public readonly struct` (`SceneNotificationData.cs:113`) nested inside `SceneNotificationData` (`SceneNotificationData.cs:8`). It carries no behaviour at all — it is one row of the cast list for a scene-notification popup, the little diorama the game shows when a kingdom event needs a face on it.

One instance describes one standing character: who they are (`BasicCharacterObject Character`, `SceneNotificationData.cs:128`), what they are wearing (`OverriddenEquipment`, line 131), whether that equipment is the civilian set (`UseCivilianEquipment`, line 137), a body override (`OverriddenBodyProperties`, line 134), two dye colours (`CustomColor1`/`CustomColor2`, lines 143 and 146) and whether they are mounted (`UseHorse`, line 140). Every field is `public readonly` and the struct itself is `readonly`, so an instance is fixed the moment the constructor returns (`SceneNotificationData.cs:116`) and copying it is the only "edit" available.

Who creates it in practice is the notification data object, not your mod: `SceneNotificationData.GetSceneNotificationCharacters()` (`SceneNotificationData.cs:101`) returns `Array.Empty<SceneNotificationCharacter>()` by default, and every concrete notification item overrides it. The canonical producer is `CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero` (`CampaignSceneNotificationHelper.cs:306`), and a typical caller is `ClanMemberPeaceDeathSceneNotificationItem`, which builds a list of one dead hero plus up to five onlookers (`ClanMemberPeaceDeathSceneNotificationItem.cs:64`).

## Mental Model

Model this as **a value you hand to a renderer, never an object you keep**. It is a `readonly struct` whose lifetime is the caller's array; the scene layer reads the fields once when it instantiates the characters and then forgets about them. Nothing in `SceneNotificationData` or in the struct mutates it, and you cannot mutate it either.

The critical thing to internalise is that **the defaults on the constructor are sentinels, and the struct does not resolve them**. `customColor1` and `customColor2` both default to `4294967295U` — `uint.MaxValue` (`SceneNotificationData.cs:116`). That value means "no opinion, please substitute". The substitution happens one layer up, in the helper: `if (overriddenColor1 == 4294967295U)` it reads `hero.MapFaction.Color`, falling back to `hero.CharacterObject.Culture.Color` (`CampaignSceneNotificationHelper.cs:308`, `CampaignSceneNotificationHelper.cs:313`). The struct constructor at `SceneNotificationData.cs:116` just assigns. So:

- **Construct the struct directly and the sentinel reaches the renderer literally.** Call `new SceneNotificationData.SceneNotificationCharacter(hero.CharacterObject)` and `CustomColor1` is `0xFFFFFFFF`, because only the helper translates it. There is no warning, no default in the field declaration, no check downstream in this file.
- **You cannot use `0` to mean "default".** `0` is a legitimate colour, so there is no way to disambiguate "black dye" from "unspecified" — the only reserved value is `uint.MaxValue`. If your mod builds the struct itself, resolve the colour before you construct it, or go through `CreateNotificationCharacterFromHero` and let it resolve for you.
- **`null` equipment is equally unresolved.** The helper substitutes `hero.BattleEquipment`, or `hero.CivilianEquipment` when `useCivilian` is set (`CampaignSceneNotificationHelper.cs:320`). Build the struct directly with the default and `OverriddenEquipment` stays null — and `UseCivilianEquipment` is a separate flag, so the two are independent inputs rather than one switch. The helper resolves them *before* constructing (`CampaignSceneNotificationHelper.cs:322`), which means the struct never has to reconcile them.
- **`default(BodyProperties)` is the "no body override" value** and every campaign caller passes exactly that (`ClanMemberPeaceDeathSceneNotificationItem.cs:69`). Build a real body only if you actually want the character's mesh replaced; otherwise leave it.
- **Because the struct is readonly, "tweaking a character after the fact" does not compile in a useful way.** To change one dye you construct a whole new instance and replace the element in the array — there is no `with` expression for a hand-written readonly struct with a public constructor, only for `record struct`.

## How to use

### Getting one

You almost never construct it directly — you override `GetSceneNotificationCharacters()` on your own `SceneNotificationData` subclass, or you call the helper. The helper is `CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = 4294967295U, uint overriddenColor2 = 4294967295U, bool useHorse = false)` (`CampaignSceneNotificationHelper.cs:306`) in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`. Its return value is what you put in the array your override returns.

### Typical use

```csharp
using TaleWorlds.CampaignSystem.SceneInformationPopupTypes;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class MyDeathNotification : SceneNotificationData
{
    private readonly Hero _dead;
    private readonly System.Collections.Generic.List<Hero> _witnesses;

    public MyDeathNotification(Hero dead, System.Collections.Generic.List<Hero> witnesses)
    {
        _dead = dead;
        _witnesses = witnesses;
    }

    // RelevantContext, SceneProperties and the title/description/hint text are all
    // virtual with defaults on SceneNotificationData; override only what you need.
    public override string SceneID => "my_death_notification";

    public override TextObject TitleText => new TextObject("{=*}A death in the family");

    public override SceneNotificationData.SceneNotificationCharacter[] GetSceneNotificationCharacters()
    {
        var list = new System.Collections.Generic.List<SceneNotificationData.SceneNotificationCharacter>();

        // Strip weapons the way the campaign's own notifications do, then let the
        // helper resolve the sentinel colours (uint.MaxValue -> faction/culture colour).
        list.Add(CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero(
            _dead, null, false, default(BodyProperties), uint.MaxValue, uint.MaxValue, false));

        foreach (Hero hero in _witnesses)
        {
            list.Add(CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero(
                hero, null, true, default(BodyProperties), uint.MaxValue, uint.MaxValue, false));
        }

        return list.ToArray();
    }
}
```

### The mistake that bites

Calling `new SceneNotificationData.SceneNotificationCharacter(hero.CharacterObject)` and expecting the same result as the helper. The omitted colour parameters keep their `4294967295U` defaults, and unlike `CreateNotificationCharacterFromHero` nothing substitutes the hero's faction colour — `CustomColor1` and `CustomColor2` are handed to the scene layer as `0xFFFFFFFF`. The notification still opens and the characters still appear; they are simply dyed with a colour value that was never meant to reach the renderer. Always go through `CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero` (`CampaignSceneNotificationHelper.cs:306`), or resolve both colours yourself before constructing.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SceneNotificationCharacter instance = ...;
```

## See Also

- [SceneNotificationData](../SceneNotificationData) — the outer class whose `GetSceneNotificationCharacters()` returns these
- [SceneNotificationShip](../SceneNotificationShip) — the sibling value struct for ships in the same popup
- [BasicCharacterObject](../BasicCharacterObject) — what `Character` holds
- [Area Index](../)