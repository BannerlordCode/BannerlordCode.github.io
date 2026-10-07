---
title: "ArmyDispersionReasonEnumResolver"
description: "Save-compatibility shim: rewrites a renamed ArmyDispersionReason enum value out of old saves and falls back to Unknown on empty input."
---

# ArmyDispersionReasonEnumResolver

**Namespace:** `TaleWorlds.CampaignSystem.SaveCompability`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyDispersionReasonEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs`

## Overview

`ArmyDispersionReasonEnumResolver` is one screw in the **save-compatibility** layer: a single method `ResolveObject(string originalObject)` that rewrites the **old enum name** of `Army.ArmyDispersionReason` into the new one while loading an old save.

It does exactly two things:

1. **Empty-input fallback.** When `string.IsNullOrEmpty(originalObject)` is true it runs `Debug.FailedAssert("ArmyDispersionReason data is null or empty", ...)` and then returns `Army.ArmyDispersionReason.Unknown.ToString()`.
2. **One rename.** When `originalObject.Equals("LowPartySizeRatio")` it returns `Army.ArmyDispersionReason.NotEnoughTroop.ToString()`; everything else is returned unchanged.

Note the namespace spelling: the folder and the type both live in **`SaveCompability`** — a typo of "Compatibility". Searching for `SaveCompatibility` will not find this file.

## Mental Model

Read it as **a rename lookup table**, not a callable utility. What matters is *who* calls it and *when*:

```csharp
AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver());
```

That line lives in `SaveableCampaignTypeDefiner` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:313`). The third argument is the resolver. **It is only consulted while the save system deserializes that enum; runtime code never touches it.** Therefore:

- **Do not call `new ArmyDispersionReasonEnumResolver().ResolveObject(...)` from game logic.** Your string is already the new name; the round trip achieves nothing.
- **It has no cache, no statics and no lifecycle.** `SaveableCampaignTypeDefiner` news one up at construction and hands it to the save framework, which invokes it per parse. You also cannot swap it — the `AddEnumDefinition` line is hard-written.
- **The rename is one-directional.** `"LowPartySizeRatio"` → `NotEnoughTroop`, with **no reverse mapping**. That is correct: a compatibility layer only ever serves "old save → new code".

The second anchor is *when* the rename happened. `Army.ArmyDispersionReason` has 16 members in 1.4.5 and `LowPartySizeRatio` is **not among them** — the current name is `NotEnoughTroop`. So this resolver handles a rename that has **already occurred**: some pre-1.4.5 version called `NotEnoughTroop` something else, and old saves must be translated. Likewise, [ArmyDispersionLogEntry](../ArmyDispersionLogEntry).GetEncyclopediaText() has dedicated wording for `NotEnoughParty` while `NotEnoughTroop` falls to the `_` default — **enum renaming and wording coverage are independent concerns; do not expect the text to follow the rename automatically.**

The third anchor is the failure mode. Empty input goes through `FailedAssert` and yields `Unknown`, which is a safe degradation. But **a misspelled legacy name is not covered** — it is neither empty nor equal to `"LowPartySizeRatio"`, so it is returned verbatim and the save framework then tries to parse a name that does not exist. What happens at that point depends on the framework; `ResolveObject` performs no second validation.

## How to use

**How to obtain it.** **It is instantiated by the save-compatibility machinery, not by you.** `public class ArmyDispersionReasonEnumResolver : IEnumResolver` is picked up during save load, so you only meet it when a legacy save is being migrated.

```csharp
// it resolves a legacy enum name during load; you do not call it directly
var resolver = new ArmyDispersionReasonEnumResolver();
// an unknown legacy name passes through unchanged — see the pitfall below
```

**The most common pitfall.** **Only one rename rule exists.** The whole file handles the single legacy name `"LowPartySizeRatio"`; any other unknown legacy name passes straight through.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `ResolveObject` | `public string ResolveObject(string originalObject)` | The sole implementation of [IEnumResolver](../../save-system/IEnumResolver), an interface with exactly this one method. Empty → assert plus `Unknown.ToString()`; `"LowPartySizeRatio"` → `NotEnoughTroop.ToString()`; everything else returned unchanged. **A pure string function: no side effects, no state, no exceptions.** |

(`ArmyDispersionReasonEnumResolver` has exactly one member and one table; everything else in the file is `internal static` save scaffolding outside the public surface.)

## Examples

The correct use is **mounting it in a save definition**, not calling it by hand. `SaveableTypeDefiner` (`Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`) is abstract, its constructor takes an `int saveBaseId`, and `AddEnumDefinition(Type type, int saveId, IEnumResolver enumResolver = null)` is **`protected`** — so it can only appear inside `protected override void DefineEnumTypes()`. `SaveableCampaignTypeDefiner` is exactly such a subclass (it passes `base(330000)`), and it is where the official resolver is mounted:

```csharp
public class MyCampaignTypeDefiner : SaveableTypeDefiner
{
    public MyCampaignTypeDefiner() : base(330000) { }

    protected override void DefineEnumTypes()
    {
        // With a resolver: legacy enum names are translated on load (the official pattern)
        AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver());

        // Sibling calls without a resolver: these enum names must never have been renamed
        AddEnumDefinition(typeof(Army.ArmyTypes), 2021);
        AddEnumDefinition(typeof(MobileParty.PartyObjective), 2025);
    }
}
```

Confirm what the post-load dispersion reason actually is — worth validating after any enum rename:

```csharp
Army.ArmyDispersionReason reason = Army.ArmyDispersionReason.NotEnoughTroop;
string legacyName = "LowPartySizeRatio";
ArmyDispersionReasonEnumResolver resolver = new ArmyDispersionReasonEnumResolver();
string resolved = resolver.ResolveObject(legacyName);
Debug.Print(legacyName + " -> " + resolved + " parses=" + Enum.TryParse(resolved, out reason), 0);
```

Exercise the empty-input path (`FailedAssert` is swallowed in release builds; the return value is still `Unknown`):

```csharp
ArmyDispersionReasonEnumResolver resolver = new ArmyDispersionReasonEnumResolver();
Debug.Print("empty -> " + resolver.ResolveObject(string.Empty), 0);
Debug.Print("null  -> " + resolver.ResolveObject(null), 0);
Debug.Print("other -> " + resolver.ResolveObject("CohesionDepleted"), 0);
```

## Risks and crash boundaries

- **Only one rename rule exists.** The whole file handles the single legacy name `"LowPartySizeRatio"`. **No other historical rename is covered** — an unknown legacy name passes straight through and the save framework then parses a nonexistent enum member. Widening coverage means editing this class (or adding another resolver and replacing the third argument on that hard-written line, which is not possible without touching `SaveableCampaignTypeDefiner`).
- **The namespace misspells it as `SaveCompability`.** Searching for `SaveCompatibility` finds nothing. This holds in both 1.3.15 and 1.4.5; it is a long-standing typo, not a version quirk.
- **Empty input degrades rather than asserting loudly.** `Debug.FailedAssert` prints in development and is compiled out of release builds, then the method returns `Unknown` and carries on. **Do not rely on it to detect a corrupted save.**
- **Not replaceable from outside.** `AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver())` hard-codes a single instance creation; there is no factory or DI hook. A mod wanting a different resolver has to edit this class or re-register the same save id.
- **Only active on load.** Enums written during play use their current names and never pass through here, so "printing `ResolveObject("NotEnoughTroop")` returns it unchanged" is correct behaviour, not a bug.
- **No reverse mapping.** Old → new only. The write direction relies on the current enum names themselves.
- **The return value is `Enum.ToString()`.** If the enum member is renamed again, the resolver's output changes with it — so "fixing the resolver but forgetting the enum" silently produces a new wrong name.
- **The type is tiny and offers no inheritance point.** 21 lines, one public method, an implicit public parameterless constructor. Extending it means editing this class or writing a separate `IEnumResolver`.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs` is 21 lines with 1 public member (`ResolveObject`), implementing `TaleWorlds.SaveSystem.Resolvers.IEnumResolver`. The 1.4.6 file of the same name exposes an identical public surface. 1.3.15 has no file of that name in this namespace — the resolver mechanism itself predates it, but this particular `ArmyDispersionReason` rename rule arrived together with the enum change.

Supporting evidence: `SaveableCampaignTypeDefiner.cs:313` is the only place in the tree referencing `ArmyDispersionReasonEnumResolver` (positive control: the neighbouring `Army.ArmyTypes` and `MobileParty.PartyObjective` `AddEnumDefinition` calls on the same page are unreferenced by any resolver).

## Dependencies

- Interface: [IEnumResolver](../../save-system/IEnumResolver) at `Bannerlord.Source/bin/TaleWorlds.SaveSystem/Resolvers/IEnumResolver.cs`, whose entire surface is `string ResolveObject(string)`.
- Mount point: `AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver())` in `SaveableCampaignTypeDefiner` at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:313`.
- Method visibility: `AddEnumDefinition(Type, int, IEnumResolver = null)` is `protected` on `SaveableTypeDefiner` and callable only from `protected override void DefineEnumTypes()` in a subclass.
- Migrated enum: [Army](../Army)'s nested `Army.ArmyDispersionReason` (16 members in 1.4.5; the legacy name `LowPartySizeRatio` is no longer among them).
- Consumers: [ArmyDispersionLogEntry](../ArmyDispersionLogEntry) at `SaveableField(30)` and [ArmyDispersionMapNotification](../ArmyDispersionMapNotification) at `SaveableProperty(2)` each store this enum.
- Diagnostics: [Debug](../../core-extra/Debug).FailedAssert is the only observable signal on the empty-input path, and it is compiled out of release builds.
