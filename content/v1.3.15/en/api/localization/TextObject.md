---
title: "TextObject"
description: "Bannerlord's localized text-and-variable container: preserve keys, resolve variables late, and render in the active language."
---
# TextObject

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class TextObject`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## Overview

`TextObject` is not an already-rendered `string`. It is a saveable, copyable localization object with variables. `Value` stores the text or a `{=id}...` localization key; `Attributes` stores variables such as `{NAME}`. `ToString()` asks `MBTextManager` to resolve the active language and produce display text.

## Mental Model

Use three layers:

1. Template: `new TextObject("{=mod_welcome}Welcome, {HERO}.")` stores a key/default string.
2. Variables: `SetTextVariable` puts a string, number, or another `TextObject` into `Attributes`.
3. Rendering: `ToString()` / `ToStringWithoutClear()` process the active language and nested variables.

The source marks `Value` with `[SaveableField(1)]` and `Attributes` with `[SaveableProperty(2)]`. `SaveableLocalizationTypeDefiner` registers `TextObject` and its `Dictionary<string, TextObject>` container. A TextObject can therefore be part of a campaign object or behavior save, but every variable value must still belong to a supported save graph.

## When to use / when not to use

Use `TextObject` for UI, notifications, conversations, and names that should remain localizable until the display boundary. Use `string` only when an API explicitly requires final-language text. Do not turn `ToString()` output back into a template, and do not share one mutable template among callers that will set different variables.

## Creating and setting variables

```csharp
Hero hero = MBObjectManager.Instance.GetObject<Hero>("main_hero");
TextObject message = new TextObject("{=my_mod_welcome}Welcome, {HERO}. You have {COUNT} relics.");
message.SetTextVariable("HERO", hero?.Name ?? new TextObject("{=my_mod_unknown}unknown hero"));
message.SetTextVariable("COUNT", 3);

string localizedMessage = message.ToString();
InformationManager.DisplayMessage(new InformationMessage(localizedMessage));
```

`SetTextVariable` has `TextObject`, `string`, `int`, and `float` overloads; the float overload rounds to the requested decimal count. Variable names must match the template token, and nested TextObjects are expanded during final processing.

## Key members

| Member | Role |
| --- | --- |
| `Value` | raw text, default text, or `{=id}` key |
| `Attributes` | variable dictionary; the setter is private |
| `Length` | length of `Value`, not the final localized string |
| `IsLink` | whether the value starts with `{=!}{.link}` |
| `GetEmpty()` / `IsEmpty()` / `IsNullOrEmpty()` | create and test empty text |
| `ToString()` | resolve the active language and render |
| `ToStringWithoutClear()` | render through the non-clearing path |
| `CacheTokens()` | pre-tokenize for the active language |
| `GetID()` | read the ID inside a leading `{=id}` |
| `CopyTextObject()` | copy the value and attribute dictionary before mutation |
| `GetVariableValue(...)` | read a variable as a `TextObject` |
| `AddIDToValue(string)` | add a localization ID when the value has none |

## Real example: copy before mutation

One TextObject's `Attributes` is mutable. Copy a template before producing messages for different factions:

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

`AddIDToValue` changes the instance's `Value`, so calling it on the copy keeps the template reusable. A value that already starts with `{=` will not receive a duplicate ID.

## Save and load

`TextObject` is defined by `SaveableLocalizationTypeDefiner`; `Value` and `Attributes` enter the object graph. A custom class can save it directly:

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

The save contains the template value and variable objects; after a language change, token caching is rebuilt for the active language. Do not replace the TextObject with a rendered string in persistent state, or an old language's result becomes fixed.

## Risks and crash boundaries

- **Missing or misspelled variables.** `{HERO}` and `"Hero"` are different keys. The final text can retain a token or display an error; centralize token names and test important variables.
- **Shared-template mutation.** `SetTextVariable` changes `Attributes`. Use `CopyTextObject` when different systems need different values.
- **Deep or cyclic variables.** `GetDepth(maxDepth)` exists for bounded nesting checks. Keep the variable graph shallow and avoid self-reference/cycles.
- **Rendering too early.** Before localization data or the active language is ready, `ToString()` can yield a fallback or order-dependent result. Pass TextObject to the actual display boundary.
- **Unsavable attribute values.** `Attributes` values also need save definitions; UI controls, scene objects, and engine handles do not belong there.
- **Hash code is not identity.** `GetHashCode` uses an internal instance ID, not text content. Never use it as a persistent key or cross-load identity.

## Cross-version notes

Both 1.3.15 and 1.4.5 expose `Value`, `Attributes`, variable overloads, copying, ID extraction, and load callbacks. Use the smallest common API for cross-version mods; `Format(float)` relies on the `A0` variable convention, while explicit `SetTextVariable` is easier to reason about.

## Dependencies and navigation

- Resolver: [MBTextManager](../MBTextManager/) owns language, tokenization, and final rendering.
- Persistence: [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) / [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) and `SaveableLocalizationTypeDefiner` define the object graph.
- Common sources: [Hero](../../campaign/Hero/) and [ItemObject](../../core/ItemObject/) commonly expose names as TextObjects.
- Runtime host: [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) or a UI layer should display text at the correct lifecycle point.

- Parent: [localization API](./)
- Sibling: [MBTextManager](../MBTextManager/)
- Related: [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) · [IDataStore](../../campaign-ext/IDataStore/)
