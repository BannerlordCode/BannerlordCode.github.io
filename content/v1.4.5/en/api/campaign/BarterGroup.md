---
title: "BarterGroup"
description: "The grouping base of the barter system: an abstract tag that routes Barterable objects for BarterData and supplies AIDecisionWeight to AI decisions. Six official implementations carry fixed weights."
---

# BarterGroup

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BarterGroup`
**Base:** none (derives directly from object)
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs`

## Overview

The entire meaningful content of `BarterGroup` is one abstract member:

```csharp
public abstract float AIDecisionWeight { get; }
```

It is the **classification tag of the barter (trade-for-trade) system**, and it does two jobs. The first is **routing**: `AddBarterable<T>` on [BarterData](../BarterData) walks the group list, finds the first entry where `barterGroup is T`, and attaches the [Barterable](../Barterable) to it via `barterable.Initialize(barterGroup, isContextDependent)`. The second is **AI weighting**: `AIDecisionWeight` tells the AI how often to look inside that group when it runs a trade on its own.

In 1.4.5 the official implementations come from `GetBarterGroups()` on [DiplomacyModel](../DiplomacyModel). There are six, with fixed weights:

| Implementation | `AIDecisionWeight` |
| --- | --- |
| `DefaultsBarterGroup` | 0.75 |
| `PrisonerBarterGroup` | 0.7 |
| `GoldBarterGroup` | 0.6 |
| `ItemBarterGroup` | 0.5 |
| `OtherBarterGroup` | 0.25 |
| `FiefBarterGroup` | 0.05 |

That ordering is meaningful rather than arbitrary: it encodes "the AI usually considers giving something directly first, then prisoners / gold / goods, and fiefs last".

The base class itself carries **no behaviour** — no fields, no methods, no lifecycle hooks. It is purely a "category plus weight" contract.

## Mental Model

Think of it as **the type tag plus AI priority for one barter line**.

- **The group has to exist before the barterable does.** [BarterData](../BarterData) pulls a group list from `Campaign.Current.Models.DiplomacyModel.GetBarterGroups()` in its constructor. Your `Barterable` only gets registered when the generic argument of `AddBarterable<T>` matches an existing group; **a non-match is silently discarded** — the method body has a `break` and nothing else: no `else`, no log, no exception. That is the easiest trap here.
- **`AddBarterable<T>` takes the first match.** The six official groups do not inherit from each other, so today this is unambiguous. If you write `class MyGroup : GoldBarterGroup` to reuse gold behaviour, `AddBarterable<GoldBarterGroup>` will hit whichever entry comes first in `GetBarterGroups()`. Do not depend on that.
- **Custom groups go in through `AddBarterGroup` or a replacement DiplomacyModel.** [BarterData](../BarterData) exposes `AddBarterGroup(BarterGroup)` to append to the existing list, and the return value of `GetBarterGroups()` is `ToList()`-copied into `_barterGroups`, so mutating the original array afterwards has no effect on existing `BarterData`.
- **`AIDecisionWeight` affects the AI only, never the player.** Manual player trades never read this number; it steers the automatic path inside the barter manager.
- **It is abstract, so you must implement it.** Adding a "renown" barter line to a mod means at minimum `public class RenownBarterGroup : BarterGroup { public override float AIDecisionWeight => 0.4f; }`, then making it appear in `DiplomacyModel.GetBarterGroups()`, then writing a behavior that calls `AddBarterable<RenownBarterGroup>`.

### What the six official groups carry

| Group | Example barterables it carries |
| --- | --- |
| `GoldBarterGroup` | Gold adjustments (`GoldBarterBehavior`) |
| `ItemBarterGroup` | Goods trading (`ItemBarterBehavior`) |
| `PrisonerBarterGroup` | Releasing / swapping prisoners (`SetPrisonerFreeBarterBehavior`, `TransferPrisonerBarterBehavior`) |
| `FiefBarterGroup` | Fief handovers (`FiefBarterBehavior`) |
| `OtherBarterGroup` | Unclassified leftovers; the lowest AI weight |
| `DefaultsBarterGroup` | The fallback line attached to every trade; the barter manager seeds it with `AddBarterable<OtherBarterGroup>(..., isContextDependent: true)` and `AddBarterable<DefaultsBarterGroup>(baseBarterable, isContextDependent: true)` |

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `AIDecisionWeight` | `public abstract float AIDecisionWeight { get; }` | The only member. The AI's weight for automatic trade decisions; the six official implementations return constants between 0.05 and 0.75. **There is no range validation** — returning 10 or -1 compiles fine and simply unbalances the AI. **Manual player trades never read it.** |

## Examples

List every group available in the current campaign with its weight, through the real `DiplomacyModel` entry point:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public static string DescribeBarterGroups()
{
    if (Campaign.Current == null)
    {
        return "";
    }

    List<BarterGroup> groups = new List<BarterGroup>(Campaign.Current.Models.DiplomacyModel.GetBarterGroups());
    System.Text.StringBuilder builder = new System.Text.StringBuilder();
    foreach (BarterGroup group in groups)
    {
        builder.Append(group.GetType().Name).Append("=").Append(group.AIDecisionWeight).Append(" ");
    }

    return builder.ToString();
}
```

Add a custom group to an in-flight trade. `AddBarterGroup` is a public method on [BarterData](../BarterData) that appends straight into its internal list:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public class RenownBarterGroup : BarterGroup
{
    public override float AIDecisionWeight => 0.4f;
}

public static void AddCustomGroup(BarterData barterData)
{
    if (barterData == null)
    {
        return;
    }

    barterData.AddBarterGroup(new RenownBarterGroup());
    Debug.Print("group count = " + barterData.GetBarterGroups().Count, 0);
}
```

Sort the groups by weight for a custom UI:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public static List<BarterGroup> SortedByAiWeight()
{
    List<BarterGroup> groups = new List<BarterGroup>(Campaign.Current.Models.DiplomacyModel.GetBarterGroups());
    groups.Sort((BarterGroup left, BarterGroup right) => right.AIDecisionWeight.CompareTo(left.AIDecisionWeight));
    return groups;
}
```

## Risks and crash boundaries

- **A non-matching `AddBarterable<T>` is silently discarded.** The implementation in [BarterData](../BarterData) is `foreach ... if (barterGroup is T) { ...; break; }` with no `else`. If a custom group never reaches `GetBarterGroups()`, your barterable vanishes with no error at all.
- **The return value of `GetBarterGroups()` is `ToList()`-copied.** [BarterData](../BarterData) stores a copy; changing the array your `DiplomacyModel` returned does nothing for an existing `BarterData`.
- **`AIDecisionWeight` has no bounds check.** Any float compiles. Negative values or values above 1 make the AI's choices unpredictable.
- **The weight only steers the AI.** Manual player trades use UI sorting and never read it. Do not read "low AI weight" as "invisible to the player".
- **Inheritance chains create first-match ambiguity.** A `MyGroup : GoldBarterGroup` matches `AddBarterable<GoldBarterGroup>`, and which instance wins depends on list order.
- **Abstract, so it must be implemented — and none of the six official groups are `sealed`.** A mod can subclass one and silently shift its semantics.
- **`BarterGroup` does not enter the save.** It is a routing object for a single trade session; the save stores the trade outcome, never the grouping.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs` is a 6-line original-source file: one namespace, one abstract class, one abstract property. The version-sensitive surface is not this file but three external dependencies: whether `DiplomacyModel.GetBarterGroups()` still returns the same six implementations, whether `BarterData.AddBarterable<T>` keeps its "first match plus silent discard" semantics, and whether the six weight constants have been retuned.

## Dependencies

- Who reads the only member: [BarterData](../BarterData) holds the group list and uses it to assign `Group` on a [Barterable](../Barterable); AI decisions read `AIDecisionWeight`
- Source of the group roster: the abstract `GetBarterGroups()` on [DiplomacyModel](../DiplomacyModel), with `DefaultDiplomacyModel` returning those six implementations
- The six official implementations: `GoldBarterGroup`, `ItemBarterGroup`, `PrisonerBarterGroup`, `FiefBarterGroup`, `OtherBarterGroup`, `DefaultsBarterGroup`, paired one-to-one with `GoldBarterBehavior`, `ItemBarterBehavior`, `SetPrisonerFreeBarterBehavior`, `TransferPrisonerBarterBehavior`, and `FiefBarterBehavior`
- Session container: `AddBarterGroup` / `GetBarterGroups` / `GetBarterGroup<T>` on [BarterData](../BarterData) are the only landing paths for this type
- Sibling base class: the `Group` property of [Barterable](../Barterable) stores the assigned instance
- Bucket index: [campaign API section](../)
