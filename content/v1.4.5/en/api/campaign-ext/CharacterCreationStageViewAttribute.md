---
title: "CharacterCreationStageViewAttribute"
description: "The thirteen-line attribute that makes a stage view discoverable — it carries one readonly Type naming the CharacterCreationStageBase subclass the view renders, and the screen's reflection sweep keys its whole stage-to-view dictionary on it."
---

# CharacterCreationStageViewAttribute

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public sealed class CharacterCreationStageViewAttribute : Attribute`
**Base:** `System.Attribute`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewAttribute.cs`

## Overview

This attribute is the entire registration mechanism for character-creation stage views. It carries a single `public readonly Type StageType`, and [CharacterCreationScreen](CharacterCreationScreen) reflects over every loaded assembly looking for types that are both assignable to `CharacterCreationStageViewBase` and decorated with this attribute, then builds a `Dictionary<Type, Type>` from `StageType` to the view type. Nothing else in the game reads it; there is no registry, no registration call, no DI container.

It is `sealed`, has no attributes of its own, and cannot be subclassed. Its whole body is one field and one constructor.

## Mental Model

The mental model is a dictionary key, and the two consequences of that are worth stating plainly.

**The key is the stage type, not the view type.** That is why the field is named `StageType`: it names the `CharacterCreationStageBase` subclass that this view knows how to render. Get it wrong and the view will simply never be found — the screen looks up `stage.GetType()`, misses, sets `_currentStageView = null`, and that stage renders nothing. There is no error, no warning, and no fallback.

**Registration is implicit and last-writer-wins.** The screen's `CollectStagesFromAssembly` does `if (_stageViews.ContainsKey(key)) { _stageViews[key] = view; } else { _stageViews.Add(key, view); }` — a plain overwrite. And `CollectUnorderedStages` scans the game's own CharacterCreation assembly *first*, then every assembly returned by `GetActiveReferencingGameAssembliesSafe`. So a mod that decorates its view for a **built-in** stage type does not add an alternative — it **replaces** the shipped one. That is the intended and only extension mechanism, but it also means two mods claiming the same stage resolve by assembly load order with no diagnostic.

The second, subtler point: the attribute must be applied to a type that is **also** assignable to `CharacterCreationStageViewBase`. The screen tests both conditions conjunctively — `typeof(CharacterCreationStageViewBase).IsAssignableFrom(item)` *and* the attribute is present. Decorating a non-view class does nothing at all, silently.

Because `StageType` is `readonly` and assigned in the constructor, the value is fixed at attribute-construction time and cannot be changed afterwards. That is fine for an attribute, but it does mean the attribute cannot be constructed and mutated dynamically the way a normal options object could.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `StageType` | `public readonly Type StageType` | The dictionary key: the `CharacterCreationStageBase` subclass this view renders. It is `public readonly`, assigned once in the constructor, and read by the screen's reflection sweep to map stage type to view type. A wrong value here produces a silently missing view rather than an error, so it must name the exact stage class you intend to render. |
| `CharacterCreationStageViewAttribute` | `public CharacterCreationStageViewAttribute(Type stageType)` | The only constructor, and the only way to supply the key. Attribute arguments are resolved by the CLR at decoration time, so `stageType` must be a `typeof(...)` expression naming a type visible to the referencing assembly. |

The type is `sealed` and adds no `AttributeUsage`, so the default applies — the attribute is valid on classes but not on assemblies or methods.

## Real Example

The intended use: claim a stage so the screen instantiates your view for it.

```csharp
using SandBox.View.CharacterCreation;
using TaleWorlds.CampaignSystem.CharacterCreationContent;

[CharacterCreationStageView(typeof(CharacterCreationStageBase))]
public class MyCharacterCreationStageView : CharacterCreationStageViewBase
{
}
```

Registering a view for a stage that does not yet exist — harmless today, and the reason the registration is a plain dictionary rather than a validated list:

```csharp
[CharacterCreationStageView(typeof(MyOwnStage))]
public class MyOwnStageView : CharacterCreationStageViewBase
{
}
```

Read the key back off a decorated type the same way the screen does:

```csharp
System.Type viewType = typeof(MyOwnStageView);
CharacterCreationStageViewAttribute attr =
    (CharacterCreationStageViewAttribute)System.Attribute.GetCustomAttribute(
        viewType, typeof(CharacterCreationStageViewAttribute));

Debug.Print("registered for stage = " + attr.StageType.Name, 0);
```

Confirm the two conditions the screen requires both hold, because either one failing is silent:

```csharp
System.Type view = typeof(MyOwnStageView);
bool isView = typeof(CharacterCreationStageViewBase).IsAssignableFrom(view);
Debug.Print("assignable to base = " + isView, 0);
```

## Risks and Boundaries

- **Silent failure on a wrong `StageType`.** A stage with no matching dictionary entry sets `_currentStageView` to null and renders nothing. There is no exception and no log line.
- **The two conditions are conjunctive.** Decorating a type that does not derive from `CharacterCreationStageViewBase` does nothing at all, with no diagnostic.
- **Registration overwrites rather than merging.** A mod decorating a view for a built-in stage replaces the shipped view for that stage everywhere it is used, not just as a fallback.
- **Load order decides conflicts.** The game's assembly is scanned first, then referencing assemblies; two mods claiming one stage type resolve by load order with no warning.
- **`sealed`, and no `AttributeUsage`.** You cannot subclass it, and the default `AttributeUsage` restricts it to the targets the CLR considers valid — decorating an assembly or a method will not compile.
- **`StageType` is `readonly`.** It cannot be reassigned after construction, so an attribute cannot be reused across different stage types.
- **Arguments must be compile-time constants.** Attribute constructor arguments require `typeof(...)`; you cannot compute the type at runtime.
- **Discovery is scoped to referencing assemblies.** `GetActiveReferencingGameAssembliesSafe` only returns assemblies that actually reference the CharacterCreation assembly, so a mod whose assembly does not reference it is never scanned.
- **No contract beyond the one field.** The attribute does not validate that the view's constructor signature matches what the screen passes — that mismatch is a separate, equally silent failure documented on [CharacterCreationScreen](CharacterCreationScreen).

## Cross-version note

The v1.4.5 file is 13 lines: one `sealed` class, one `public readonly Type` field, one constructor. That is the complete type, and it has not gained any member in this version.

## Dependencies

- Consumer: [CharacterCreationScreen](CharacterCreationScreen) is the only reader — its `CollectUnorderedStages` / `CollectStagesFromAssembly` pair performs the reflection sweep and builds the stage-to-view dictionary.
- Constraint the key must satisfy: [CharacterCreationStageViewBase](CharacterCreationStageViewBase) is the type the decorated class must be assignable to; without it the attribute is inert.
- Stage side: [CharacterCreationStageBase](../campaign/CharacterCreationStageBase) and its subclasses are the `Type` values this attribute names.
- Reflection helpers: the screen uses `Extensions.GetTypesSafe` and `Extensions.GetCustomAttributesSafe` with `inherit: true`, so inherited attributes on a base view class are also honoured.
- Bucket index: [campaign-ext API section](../)
