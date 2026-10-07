---
title: "ConversationTagView"
description: "Auto-generated class reference for ConversationTagView."
---
# ConversationTagView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationTagView`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ConversationTagView.cs`

## Overview

`ConversationTagView` is a one-method helper, and in 1.3.0 the method is the whole type: `public static string GetSkillMeshName(SkillObject skillEnum, bool isOn = false)` (`ConversationTagView.cs:10`). The class has no fields, no constructor and no instance state (`ConversationTagView.cs:7`).

What it does is build a mesh identifier by string composition. The `isOn` flag selects the suffix: `true` returns `"skill_icon_" + skillEnum.StringId.ToLower() + "_on"` (`ConversationTagView.cs:14`) and `false` returns the same stem with `"_off"` (`ConversationTagView.cs:16`). The stem comes from the `SkillObject`'s `StringId`, lowercased — not from the skill's display name.

Nothing in the managed 1.3.0 tree calls it. That is not a sign it is broken: the conversation screen binds skill icons from XML/prefab data, so this static exists to give that layer a single place where the naming convention lives. If you are writing C# and find yourself needing the same string, this is the function to call rather than re-deriving the convention.

## Mental Model

The convention this encodes is the contract, and it is stricter than it looks. Three things must line up: the prefix `skill_icon_`, the skill's `StringId` **lowercased**, and the `_on`/`_off` suffix. The `ToLower()` is applied by this method and nowhere else, so a `SkillObject` whose `StringId` contains capitals resolves through here but would not resolve if you concatenated the raw id yourself.

`isOn` defaults to `false`, and the default is the *off* state, not a neutral one. Calling `GetSkillMeshName(skill)` with one argument asks for the unselected icon; you must pass `isOn: true` explicitly to get the highlighted variant. Reading the parameter as "is highlighted" and omitting it gives you the greyed icon every time.

The method never checks whether such a mesh exists — it returns a string unconditionally, and there is no error path. A skill whose `StringId` has no matching `skill_icon_*_on` / `_off` mesh yields a name that resolves to nothing at mesh-load time, which surfaces as a missing icon rather than an exception. That is the boundary to respect: this type gives you the name, the asset has to exist in your module.

Also note the parameter is named `skillEnum` (`ConversationTagView.cs:10`) although its type is `SkillObject`, not an enum. There is no `SkillObject`-to-enum mapping anywhere in this class — pass the `SkillObject` you actually have, not a cast or an index.

## How to use

**Getting one.** It is a static class; call it directly. Take the `SkillObject` from wherever the conversation or character screen already has it.

**Typical use** — building icon names for a custom conversation UI:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View;

public static class MyConversationIcons
{
    public static string IconFor(SkillObject skill, bool unlocked)
    {
        // "skill_icon_<stringid lowercased>_on" or "_off".
        return ConversationTagView.GetSkillMeshName(skill, unlocked);
    }

    public static void ReportConvention(SkillObject skill)
    {
        // Both variants exist as names whether or not the meshes do.
        string on = ConversationTagView.GetSkillMeshName(skill, true);
        string off = ConversationTagView.GetSkillMeshName(skill, false);

        MyMod.Log($"expect mesh '{on}' and mesh '{off}' in your module");
    }
}
```

`SkillObject` is the parameter type the method declares (`ConversationTagView.cs:10`), and the returned string is a mesh identifier you pass to your mesh loader — not a path under `moduleassets`.

**Most common mistake:** building the name by hand and forgetting the lowercasing.

```csharp
// Resolves to nothing if the StringId has capitals in it:
string meshName = "skill_icon_" + skill.StringId + "_on";
```

The shipped helper lowercases the id (`ConversationTagView.cs:14`), so every shipped skill icon is registered under its lowercased `StringId`. Hand-concatenating the raw `StringId` produces a name that differs from the one the game uses, and the symptom is a silently blank icon with no exception anywhere — the string is only resolved later, at mesh load. Call `GetSkillMeshName` and let it apply the convention.

## Key Methods

### GetSkillMeshName
`public static string GetSkillMeshName(SkillObject skillEnum, bool isOn = false)`

**Purpose:** Reads and returns the skill mesh name value held by the this instance.

```csharp
// Static call; no instance required
ConversationTagView.GetSkillMeshName(skillEnum, false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
ConversationTagView view = ...;
```

## See Also

- [Area Index](../)
- [SkillObject — the argument type whose `StringId` forms the mesh name](../../core-extra/SkillObject)
- [中文页面](../../../../zh/api/mission-ext/ConversationTagView)