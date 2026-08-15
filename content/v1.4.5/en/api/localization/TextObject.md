---
title: "TextObject"
description: "The localized-text value-and-variable container in Bannerlord: it holds a text id, resolves variables lazily, and produces the final string in the current language."
---

# TextObject

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class TextObject`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## Overview

`TextObject` is not an already-rendered `string`; it is a localizable text object that can be saved, copied, and carry variables. `Value` holds the text value or a `{=id}...` localization key; `Attributes` holds variables such as `{NAME}`. When you call `ToString()`, `MBTextManager` resolves the text in the current language and produces the display string.

## Mental Model

Think of it in three layers:

1. Template layer: `new TextObject("{=mod_welcome}Welcome, {HERO}.")` holds the key / default text.
2. Variable layer: `SetTextVariable` puts a string, number, or another `TextObject` into `Attributes`.
3. Render layer: `ToString()` / `ToStringWithoutClear()` hand the work to `MBTextManager` for the current language and nested variables.

The source also marks `Value` as `[SaveableField(1)]` and `Attributes` as `[SaveableProperty(2)]`; `SaveableLocalizationTypeDefiner` registers `TextObject` and the `Dictionary<string, TextObject>` container. So a TextObject can be a member of a campaign object, behavior data, or other saveable class, but variable values must still belong to the saveable object graph.

## When to Use / When Not to Use

Use `TextObject` to pass UI, notifications, dialogues, and names that should be localized lazily; use `string` only when an API explicitly needs the final language text. Do not modify the result of `ToString()` again as a template, and do not share the same mutable template with multiple callers and then set variables on it directly.

## Creation and Variables

```csharp
Hero hero = MBObjectManager.Instance.GetObject<Hero>("main_hero");
TextObject message = new TextObject("{=my_mod_welcome}Welcome, {HERO}. You have {COUNT} relics.");
message.SetTextVariable("HERO", hero?.Name ?? new TextObject("{=my_mod_unknown}unknown hero"));
message.SetTextVariable("COUNT", 3);

string localizedMessage = message.ToString();
InformationManager.DisplayMessage(new InformationMessage(localizedMessage));
```

`SetTextVariable` has overloads for `TextObject`, `string`, `int`, and `float`; the float overload rounds to the given number of decimals. The variable name must match the token in the template; a nested `TextObject` keeps expanding at final resolution.

## Key Members

| Member | Purpose |
| --- | --- |
| `Value` | Raw text, default text, or a `{=id}` key |
| `Attributes` | Variable dictionary; the property setter is private |
| `Length` | Length of `Value`, not of the final localized text |
| `IsLink` | Whether it starts with `{=!}{.link}` |
| `GetEmpty()` / `IsEmpty()` / `IsNullOrEmpty()` | Create and test for empty text |
| `ToString()` | Resolve the current language and produce the display string |
| `ToStringWithoutClear()` | Resolve but use the non-clearing processing path |
| `CacheTokens()` | Pre-build the token cache for the current active language |
| `GetID()` | Read the id from the leading `{=id}` in `Value` |
| `CopyTextObject()` | Copy the value and attribute dictionary; good for modifying a template copy |
| `GetVariableValue(...)` | Read a variable and convert it to a `TextObject` |
| `AddIDToValue(string)` | Add a localization id to a value that has no key |

## Real Example: Copy the Template Then Modify

The `Attributes` of a single `TextObject` is a mutable dictionary. To produce several messages per faction, copy first:

```csharp
TextObject warTemplate = new TextObject("{=my_mod_war}War with {FACTION}");
TextObject khuzaitMessage = warTemplate.CopyTextObject();
TextObject khuzaitName = new TextObject("Khuzait");
khuzaitName.AddIDToValue("my_mod_khuzait");
khuzaitMessage.SetTextVariable("FACTION", khuzaitName);

TextObject vlandianMessage = warTemplate.CopyTextObject();
TextObject vlandianName = new TextObject("Vlandia");
vlandianName.AddIDToValue("my_mod_vlandia");
vlandianMessage.SetTextVariable("FACTION", vlandianName);

InformationManager.DisplayMessage(new InformationMessage(khuzaitMessage.ToString()));
InformationManager.DisplayMessage(new InformationMessage(vlandianMessage.ToString()));
```

`AddIDToValue` modifies the object's own `Value`, so it goes on the copy. To add an id to a class's saved default text you can also call it after construction; a value that already starts with `{=` will not get the id added twice.

## Save and Load

`TextObject` is itself defined by `SaveableLocalizationTypeDefiner`, and `Value` and `Attributes` enter the object graph. A custom class can save it directly:

```csharp
public sealed class RelicNotification
{
    [SaveableProperty(1)]
    public TextObject Message { get; private set; }

    public RelicNotification(TextObject message)
    {
        Message = message;
    }
}

public sealed class RelicNotificationDefiner : SaveableTypeDefiner
{
    public RelicNotificationDefiner() : base(910100) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(RelicNotification), 1);
    }
}
```

The save stores the template value and variable objects; after a language switch, the cached tokens regenerate for the active language. Do not save the `string` from a `ToString()` call in place of the `TextObject`, or you freeze the result of the old language.

## Risks and Crash Boundaries

- **Missing or misspelled variable.** `{HERO}` and `"Hero"` are different keys; the final text may keep the token or show wrong. Define token names centrally and test the key variables.
- **Shared template gets polluted.** `SetTextVariable` modifies `Attributes`; do not hand the same instance to multiple systems and then mutate its variables in place — use `CopyTextObject`.
- **Too-deep recursive variables.** `GetDepth(maxDepth)` exists precisely to bound the nested check; keep the variable graph directed and shallow, avoiding self-reference or cyclic text.
- **Rendering too early.** Calling `ToString` before the localization table or active language is ready may yield the default value, a wrong placeholder, or the current-language cache; pass the `TextObject` to the boundary that truly displays it.
- **Saving the wrong variable object.** The values in `Attributes` must also be definable by the save system; temporary UI controls, scene objects, and non-serializable handles must not go in.
- **Wrongly relying on HashCode.** `GetHashCode` uses an internal instance id, not a text-content hash; do not use it as a persistent key or cross-load identity.

## Cross-Version Notes

Both 1.3.15 and 1.4.5 have `Value`, `Attributes`, the variable overloads, copy, id reading, and save callbacks. Source details may grow, but a cross-version mod should use the minimal common API; `Format(float)` relies on the `A0` variable convention and is less clear than an explicit `SetTextVariable`.

## Dependencies

- Resolver: [MBTextManager](../MBTextManager/) owns language, tokens, and the final string.
- Save: [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) / [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) and `SaveableLocalizationTypeDefiner` define the object graph.
- Common sources: the `Name` of [Hero](../../campaign/Hero/) and [ItemObject](../../core/ItemObject/) usually returns a `TextObject`.
- Runtime notifications: [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) or the UI layer displays text at the right lifecycle moment.

## See Also

- Parent: [localization API](./)
- Sibling: [MBTextManager](../MBTextManager/)
- Related: [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) · [IDataStore](../../campaign/IDataStore)
