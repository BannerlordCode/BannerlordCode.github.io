---
title: "AttributeBoundSkillItemVM"
description: "One row of the \"skills bound to this attribute\" list in the character developer. The whole class is two bindable properties and a constructor that flattens a SkillObject into a display name and a StringId. No behaviour, no lifecycle, nothing registered."
---
# AttributeBoundSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AttributeBoundSkillItemVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/AttributeBoundSkillItemVM.cs`

## Overview

In the character developer, opening one attribute (Strength / Agility / Intelligence / Social…) shows a list of skills bound to it. Each row of that list is this class. It does so little it borders on the trivial:

```csharp
public AttributeBoundSkillItemVM(SkillObject skill)
{
    Name = skill.Name.ToString();
    SkillId = skill.StringId;
}
```

**That is the entire implementation.** A 51-line file that, once `using` and the namespace are stripped, contains two `[DataSourceProperty]` properties and one constructor. No `RefreshValues` override, no events, no `OnFinalize`, no method beyond the constructor.

The two properties serve fundamentally different purposes, which is the key thing to understand:

- `Name` is **for humans**: `skill.Name.ToString()`, a stringified snapshot of the `TextObject`.
- `SkillId` is **for machines**: `skill.StringId`, used for deduplication, lookup, and mapping back to a `SkillObject`.

## Who uses it

The only construction site is `CharacterAttributeItemVM.RefreshWithCurrentValues()` (`CharacterAttributeItemVM.cs:271-280`):

```csharp
BoundSkills.Clear();
List<SkillObject> list = Skills.All.ToList();
list.Sort(CampaignUIHelper.SkillObjectComparerInstance);
foreach (SkillObject skill in list)
{
    if (Enumerable.Contains(skill.Attributes, AttributeType) &&
        !BoundSkills.Any((AttributeBoundSkillItemVM s) => s.SkillId == skill.StringId))
    {
        BoundSkills.Add(new AttributeBoundSkillItemVM(skill));
    }
}
```

That block settles three things:

1. **The source is the full skill table**, `Skills.All` (which is `Campaign.Current.AllSkills`), not some subset. The filter is whether `skill.Attributes` contains the attribute being inspected.
2. **Ordering is the caller's job**, using the shared `CampaignUIHelper.SkillObjectComparerInstance`. This class neither sorts nor guarantees any ordering of the `SkillObject` handed to it.
3. **Deduplication runs on `SkillId`**: `!BoundSkills.Any(s => s.SkillId == skill.StringId)`. That is the sole reason `SkillId` exists — using `Name` as the key would wrongly merge two differently-named skills that share a display name.

## Mental Model

Read it as **"a frozen (display name, id) pair, finalised the moment it is constructed"**:

- **Who news it up.** `CharacterAttributeItemVM.RefreshWithCurrentValues()`, which **rebuilds the whole batch** on every refresh. Note the `BoundSkills.Clear()` in front — the old instances are all discarded.
- **Who holds the reference.** The outer `CharacterAttributeItemVM`'s `BoundSkills` (an `MBBindingList<AttributeBoundSkillItemVM>`), itself owned and rendered row by row by the character developer screen.
- **What it binds to.** Only `Name` and `SkillId`, both carrying `[DataSourceProperty]`. Those two are exactly what the row template in the prefab binds to.
- **When it is disposed.** **There is nothing to dispose.** No `OnFinalize` override, no `CampaignEvents`, no `Game.Current.EventManager` registration, no handle needing release. The moment the outer `Clear()` runs, the entire batch becomes garbage. **This is the lowest lifecycle cost of anything in this directory.**
- 🔴 **Both properties are construction-time snapshots and never update afterwards.** `Name` especially: `skill.Name.ToString()` freezes the `TextObject` into a string at construction. If the language switches while this row is on screen, **its text does not change** until the outer layer rebuilds the batch. Conversely `SkillId` is a plain id and never needed updating anyway.
- 🔴 **It does not keep the `SkillObject`.** It stores only the `Name` string and the `StringId`, with **no field holding the incoming `skill`**. So you cannot map the row back to a skill object — you must take `SkillId` and search `Skills.All` yourself.
- **No behaviour methods.** No `ExecuteXxx`, no click handling. This row is pure display and responds to no input. Adding a click reaction means doing it one level up, in `CharacterAttributeItemVM`.
- **Misuse #1**: treating `Name` as a stable primary key. Renaming a skill lets two rows share a `Name` while differing on `SkillId`, at which point deduplicating by `Name` drops a skill. Always deduplicate on `SkillId`.
- **Misuse #2**: caching an instance across panel reopens. The panel calls `Clear()` and rebuilds on every `RefreshWithCurrentValues()`, so your stale instance will never receive an update.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `Name` | `[DataSourceProperty] public string Name` (`AttributeBoundSkillItemVM.cs:12-27`) | The skill name shown on the row. Built from `skill.Name.ToString()` at `:48` as a **string snapshot** and never updated thereafter. **Do not** use it as a key. |
| `SkillId` | `[DataSourceProperty] public string SkillId` (`:29-44`) | `skill.StringId` — this row's **stable identity**. The outer layer deduplicates on exactly this (`CharacterAttributeItemVM.cs:276`). Unaffected by language switches or skill renames. |
| Constructor | `public AttributeBoundSkillItemVM(SkillObject skill)` (`:46-50`) | The only construction entry point. Two lines: assign `Name`, assign `SkillId`. **It does not retain the `skill` reference** — the incoming object is irrelevant to this instance the moment construction ends. |

There is **no** `RefreshValues` override, no `OnFinalize` override, no `Execute*` command method, and no fields at all.

## Real Example

Reproducing the outer layer's three steps — full-table fetch, sort, deduplicate:

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;
using TaleWorlds.Library;

public MBBindingList<AttributeBoundSkillItemVM> BuildBoundSkills(CharacterAttribute attribute)
{
    MBBindingList<AttributeBoundSkillItemVM> bound = new MBBindingList<AttributeBoundSkillItemVM>();

    // Skills.All is Campaign.Current.AllSkills
    List<SkillObject> candidates = Skills.All.ToList();
    candidates.Sort(CampaignUIHelper.SkillObjectComparerInstance);

    foreach (SkillObject skill in candidates)
    {
        // Deduplicate on SkillId, never on Name — same-named skills would merge wrongly.
        if (skill.Attributes.Contains(attribute) &&
            !bound.Any(s => s.SkillId == skill.StringId))
        {
            bound.Add(new AttributeBoundSkillItemVM(skill));
        }
    }

    return bound;
}
```

Mapping a row back to its skill object — because this class **does not retain the `SkillObject`**:

```csharp
public SkillObject ResolveBack(AttributeBoundSkillItemVM item)
{
    for (int i = 0; i < Skills.All.Count; i++)
    {
        SkillObject skill = Skills.All[i];
        if (skill.StringId == item.SkillId)
        {
            return skill;
        }
    }

    return null;
}
```

Using `SkillId` (not `Name`) as a cross-session persistence key:

```csharp
public string BuildStableKeyForLoadout(List<AttributeBoundSkillItemVM> skills)
{
    // SkillId, not Name: renaming a skill must not invalidate a saved loadout.
    string[] ids = skills.Select(s => s.SkillId).OrderBy(s => s, System.StringComparer.Ordinal).ToArray();
    return string.Join("|", ids);
}
```

## Risks and crash boundaries

- **Zero lifecycle cost**: no fields, no listeners, no `OnFinalize`, no native handles. The outer `BoundSkills.Clear()` reclaims the whole batch. **Subclassing it inherits no release obligations whatsoever.**
- **Completely frozen after construction.** `RefreshValues` is not overridden, so even an explicit `base.RefreshValues()` updates nothing. Refreshing means rebuilding the batch.
- **It does not retain the `SkillObject`.** Getting the skill object back requires a `SkillId` lookup into `Skills.All`. That is not a performance caveat but a **capability boundary**: the row cannot tell you anything else about the skill.
- **`Name` is a snapshot, not a `TextObject` reference.** After a language switch this row's text is stale until the outer layer rebuilds. Contrast `ActionVisualOrder`, which stores the `TextObject` itself — the two strategies differ, so do not assume either for both.
- **No null checks on `skill.Name` / `skill.StringId`.** Handing in a `SkillObject` with null fields (which should not happen) NREs during construction.
- **Ordering is not this class's responsibility.** Display order equals construction order, so sort before constructing.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. `SkillId` is a perfectly good string for you to use as your own persistence key (see example 3), but this class offers no save interface of its own.
- **Native boundary**: none. Pure managed. `SkillObject` is a campaign-side data object, but this class reads it exactly once.
- **Cross-version**: the filter-and-dedupe shape at `CharacterAttributeItemVM.cs:271-280`, the shared sorter instance `CampaignUIHelper.SkillObjectComparerInstance`, and `Skills.All => Campaign.Current.AllSkills` are all v1.4.5 shapes. If upstream changes the attribute filter or switches sorter, the outer behaviour moves while this class does not.

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — only its property-change notification is used; this class has no logic of its own
- ↔ Sibling: [CharacterAttributeItemVM](../CharacterAttributeItemVM) — **the sole constructor and holder**, `RefreshWithCurrentValues()` at lines 271-280
- ↔ Sibling: [CampaignUIHelper](../CampaignUIHelper) — provides the shared `SkillObjectComparerInstance` sorter
- → Skill object: [SkillObject](../../core-extra/SkillObject) — the constructor argument; this class takes only its `Name` and `StringId`
- → Attribute objects: [Hero](../../campaign/Hero), `TaleWorlds.CampaignSystem.CharacterDevelopment.CharacterAttribute`
- → List container: [MBBindingList](../../core-extra/MBBindingList)
- → Full skill table: `Skills`, a static class whose `All` property forwards to `Campaign.Current.AllSkills`
