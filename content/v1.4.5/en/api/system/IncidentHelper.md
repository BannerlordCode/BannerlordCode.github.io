---
title: "IncidentHelper"
description: "Selects a reproducible random element from Campaign incident candidate collections."
---
# IncidentHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class IncidentHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/IncidentHelper.cs`

## One-sentence responsibility

`IncidentHelper` selects one element from a non-empty incident candidate collection using the [MobileParty](../../campaign/MobileParty) seeded-random stream associated with `MobileParty.MainParty`.

## Mental Model

This helper is a deterministic selection adapter for incident logic. It does not create a seed, shuffle a collection, or mutate the selected value. Each overload follows the same algorithm:

1. Return `default(T)` when the collection is `null` or empty.
2. Convert the `long seed` to `uint`.
3. Ask `MobileParty.MainParty.RandomIntWithSeed((uint)seed, list.Count)` for an index.
4. Return the element at that index.

The candidate list must already express the incident's eligibility rules. In the stock [Incident](../../campaign/Incident) behavior, callers filter villages, troop roster entries, items, workshops, or lords before passing the collection to this helper. The helper supplies reproducibility, not domain policy.

## When to use and when not to use

- **Use it:** when an incident needs the same candidate for the same seed and candidate ordering.
- **Use it:** with the collection type already produced by the caller: `List<T>`, [MBList](../../core-extra/MBList)`<T>`, or [MBReadOnlyList](../../core-extra/MBReadOnlyList)`<T>`.
- **Do not use it:** as a global random-number API. The index comes from `MobileParty.MainParty.RandomIntWithSeed`.
- **Do not change candidate ordering between retries:** a seed is reproducible only relative to the same collection contents and order.
- **Do not assume a result exists:** an empty collection returns `default(T)` and reference-type results are `null`.

## Public entries

### `List<T>` overload

```csharp
public static T GetSeededRandomElement<T>(List<T> list, long seed)
```

This overload is used when LINQ filtering or another Campaign flow has materialized a normal `List<T>`. The method checks `Count` before indexing.

### `MBList<T>` overload

```csharp
public static T GetSeededRandomElement<T>(MBList<T> list, long seed)
```

This overload preserves the Bannerlord `MBList<T>` container without converting it to a framework list. It uses the same seeded index calculation and empty-list behavior.

### `MBReadOnlyList<T>` overload

```csharp
public static T GetSeededRandomElement<T>(MBReadOnlyList<T> list, long seed)
```

This overload accepts a read-only engine collection and still returns the selected value, not a mutable collection or an index.

## Real Campaign incident flow

`IncidentsCampaignBehaviour` passes its `_activeIncidentSeed` to this helper after filtering the main party roster. The selected roster element is then used as the incident's concrete troop:

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

if (Hero.MainHero != null && MobileParty.MainParty != null)
{
    List<TroopRosterElement> candidates = MobileParty.MainParty.MemberRoster
        .GetTroopRoster()
        .Where(element => !element.Character.IsHero)
        .ToList();

    if (candidates.Count > 0)
    {
        TroopRosterElement selected = IncidentHelper
            .GetSeededRandomElement(candidates, _activeIncidentSeed);

        CharacterObject selectedCharacter = selected.Character;
    }
}
```

The stock behavior arranges its incident preconditions before this selection and checks the selected result where a missing candidate is possible. A custom incident should do the same before dereferencing a default result.

## Dependencies and ownership

- [MobileParty](../../campaign/MobileParty) supplies the `MainParty` seeded-random implementation used for the index.
- [MBRandom](../../core-extra/MBRandom) documents the engine random helpers; this class specifically calls the party extension rather than a process-global random method.
- [TroopRoster](../../campaign/TroopRoster), `ItemRoster`, villages, workshops, and lord collections are candidate owners in the stock incident behavior.
- [Incident](../../campaign/Incident) and `IncidentsCampaignBehaviour` own the seed lifecycle, candidate filtering, preconditions, and consequences.
- The helper owns only selection and returns no metadata about the chosen index.

## Risks and reproducibility boundaries

- `long` seeds are narrowed to `uint`; values that differ only outside the lower 32 bits can select the same sequence.
- Reproducibility depends on candidate order and count. Sorting or filtering differently before the call can change the selected element without changing the seed.
- `null` or empty input returns `default(T)`. For reference types, callers must expect `null`; for structs, every field is default-initialized.
- The helper reads `MobileParty.MainParty` after the collection check; call it only while a Campaign main party exists. A null `MainParty` is not converted into a safe default result.
- The result is not saved by this helper. The owning incident behavior must save the seed or chosen state when it needs a cross-save continuation.
- Calling the helper does not remove an item, troop, or settlement from its source collection; incident consequences perform those mutations later.

## Version note

This page follows v1.4.5 `IncidentHelper.cs`. All three public methods are generic overloads with identical seeded-index semantics; only the collection type differs.

## Navigation

- [↑ API system index](../)
- [Related: Incident](../../campaign/Incident)
- [Related: MobileParty](../../campaign/MobileParty)
- [Related: MBList](../../core-extra/MBList)
- [Related: MBReadOnlyList](../../core-extra/MBReadOnlyList)
