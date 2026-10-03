---
title: "ApplicationVersionType"
description: "The maturity stage of a version: Invalid = -1, then Alpha / Beta / EarlyAccess / Release / Development at 0..4. Note that Release(3) sorts below Development(4) -- an ordering ApplicationVersion.IsOlderThan and operator> compare numerically, so d1.0.0 counts as newer than v9.9.9."
---

# ApplicationVersionType

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public enum ApplicationVersionType`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionType.cs`

## Overview

`ApplicationVersionType` is the **maturity stage** of a game version — whether this build is alpha, early access, or a full release. It has six members in 11 lines of source, and it is the type of the `ApplicationVersionType` property inside the [ApplicationVersion](../ApplicationVersion) struct, as well as the mapping table for a version string's leading letter (`a` / `b` / `e` / `v` / `d`).

The role it plays is **the first dimension of version comparability**. Every comparison on [ApplicationVersion](../ApplicationVersion) — `IsOlderThan`, `IsNewerThan`, `operator>` — **compares this enum's numeric value first**, then `Major.Minor.Revision`, and only then `ChangeSet`. So the **member order of this enum is not arbitrary — it is a sort key**.

## Mental Model

Treat it as **the first-level sort key of a version comparison**, not as a label. That is its one job, and the job is consequential.

**The centre of the mental model is one counter-intuitive fact: `Release` is not the last member.** The order is:

| Value | Member | String prefix |
| --- | --- | --- |
| -1 | `Invalid` | `i` |
| 0 | `Alpha` | `a` |
| 1 | `Beta` | `b` |
| 2 | `EarlyAccess` | `e` |
| 3 | `Release` | `v` |
| 4 | `Development` | `d` |

**`Release` (3) is listed before `Development` (4).** That is not a typo: [ApplicationVersion](../ApplicationVersion)'s comparison logic depends on it. `IsOlderThan` (`ApplicationVersion.cs:71-100`) opens with `if (ApplicationVersionType < other.ApplicationVersionType) return true;`, and `operator>` (`:170-190`) opens with `if (a.ApplicationVersionType > b.ApplicationVersionType) return true;`. **The consequence is that `ApplicationVersion.FromString("d1.0.0")` is judged newer than `FromString("v9.9.9")`, because 4 > 3.**

The design is deliberate: an internal development build (`d`) is "newer" than any shipped build, so it sorts last. That is consistent with "hotfixes of v1.2 come after v1.1" and consistent with "dev builds sit above releases" — but it means **you cannot use this enum to tell a player which build is newer than which.** That is the trap.

**The second anchor is that `Invalid = -1` while `GetPrefix` gives it the letter `"i"`.** `GetPrefix` ([ApplicationVersion](../ApplicationVersion), `:133-146`) is a switch expression covering Alpha/Beta/EarlyAccess/Release/Development, with `_ => "i"` as the fall-through. **So the string form of `Invalid` is `i-1.-1.-1.-1`-shaped** (because `Empty` is `new ApplicationVersion(Invalid, -1, -1, -1, -1)`). That is not a string you want to display.

**The third anchor is that a parse failure trips an assertion rather than throwing.** The `default` arm of `ApplicationVersionTypeFromString` (`:101-121`) calls `Debug.FailedAssert("Invalid version type.", ...)` and then returns `Invalid`. **It does not throw** — so a malformed prefix yields an "invalid version" instead of a crash, but **`Debug.FailedAssert` may do nothing at all in a shipping build**, leaving you silently holding `Invalid`.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `Invalid` | `Invalid = -1` | "This is not a valid version." It is **the only negative member**, so any `< 0` test identifies it. It is what `ApplicationVersionTypeFromString` returns for an unrecognised prefix (accompanied by one `Debug.FailedAssert`). **Note that `GetPrefix(Invalid)` returns `"i"`**, so `ApplicationVersion.Empty.ToString()` produces an `i-1.-1.-1.-1`-shaped string. |
| `Alpha` | `Alpha = 0` | The internal alpha stage, with version prefix `a` per `GetPrefix`. **Value 0 makes it the lowest maturity stage**, and it is also the boundary any `< 0` test uses to exclude `Invalid`. |
| `Beta` | `Beta = 1` | The public beta stage, prefix `b`. |
| `EarlyAccess` | `EarlyAccess = 2` | The early-access stage, prefix `e`. This is Mount & Blade II's actual shipping mode, and **it is by far the most frequently referenced stage in campaign-layer version-migration code** — `Clan.cs:801/812`'s `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("e1.8.0.0")` is the textbook example. |
| `Release` | `Release = 3` | A full release, prefix `v`. **Note that it is not the last member**: `Development` (4) comes after it, precisely because `IsOlderThan` / `operator>` compare this enum numerically. This is the single most important thing to remember on this page. |
| `Development` | `Development = 4` | An internal development build, prefix `d`. **It has the largest value, so comparisons treat it as the newest.** It sits last precisely so that internal builds sort above every shipped release — at the cost of `d1.0.0 > v9.9.9` being true. |
| (prefix mapping) `GetPrefix` | `[ApplicationVersion](../ApplicationVersion).GetPrefix(ApplicationVersionType)`, at `ApplicationVersion.cs:133-146` | Maps the enum to a version-string leading letter (`a`/`b`/`e`/`v`/`d`). **`Invalid` has no case and falls through to `_ => "i"`.** It is a switch expression, so adding an enum member means updating this table at the same time. |

## Real Example

The round trip between version strings and the enum — by far this enum's main use (shapes taken from `ApplicationVersion.cs:56-73` and `:101-121`):

```csharp
// "v1.2.3" -> Release, "e1.8.0.0" -> EarlyAccess with a changeset, "d1.0.0" -> Development
ApplicationVersion release = ApplicationVersion.FromString("v1.2.3");
Debug.Print("parsed = " + release.ApplicationVersionType, 0);
Debug.Print("round trip = " + release.ToString(), 0);

// The maturity stage is compared FIRST by both IsOlderThan and operator>.
ApplicationVersion development = ApplicationVersion.FromString("d1.0.0");
bool developmentIsNewer = development > release;
Debug.Print("d1.0.0 > v1.2.3 ? " + developmentIsNewer, 0);
```

A helper that will not confuse the sentinel with `Invalid`:

```csharp
public static class VersionStageClassifier
{
    public static bool IsRealStage(ApplicationVersionType stage)
    {
        // Release and Development are both real stages even though Development
        // sorts after Release -- never cap the range at Release.
        return stage >= ApplicationVersionType.Alpha
            && stage <= ApplicationVersionType.Development;
    }

    public static bool IsShippedToPlayers(ApplicationVersionType stage)
    {
        // EarlyAccess is shipped to players; Development is not.
        return stage == ApplicationVersionType.EarlyAccess
            || stage == ApplicationVersionType.Release;
    }

    public static string Describe(ApplicationVersionType stage)
    {
        // GetPrefix(Invalid) returns "i", which is not a displayable prefix.
        if (stage == ApplicationVersionType.Invalid)
        {
            return "invalid";
        }
        return ApplicationVersion.GetPrefix(stage);
    }
}
```

Reproducing the unknown-prefix handling to make clear that it asserts rather than throws:

```csharp
private static ApplicationVersionType Classify(string prefix)
{
    switch (prefix)
    {
        case "a": return ApplicationVersionType.Alpha;
        case "b": return ApplicationVersionType.Beta;
        case "e": return ApplicationVersionType.EarlyAccess;
        case "v": return ApplicationVersionType.Release;
        case "d": return ApplicationVersionType.Development;
        default:
            // The real method calls Debug.FailedAssert here and returns Invalid.
            // It does NOT throw, so a bad version string yields a valid-looking
            // struct whose ApplicationVersionType is Invalid.
            Debug.Print("invalid version type prefix: " + prefix, 0);
            return ApplicationVersionType.Invalid;
    }
}

private void ReportBadVersion()
{
    Debug.Print("unknown prefix -> " + Classify("x"), 0);
    Debug.Print("empty prefix  -> " + Classify(""), 0);
}
```

## Risks and Boundaries

- **`Release` is not the last member.** The sort key is `Development`(4) > `Release`(3) > `EarlyAccess`(2) > `Beta`(1) > `Alpha`(0), which means **`FromString("d1.0.0") > FromString("v9.9.9")` holds.** Using it to explain version recency to players produces absurd conclusions.
- **`Invalid = -1`, and `GetPrefix(Invalid) == "i"`.** `ApplicationVersion.Empty` is `new ApplicationVersion(Invalid, -1, -1, -1, -1)`, so `ToString()` yields an `i-1.-1.-1.-1`-shaped string. **It is not a displayable version number.**
- **A failed parse does not throw.** The `default` arm of `ApplicationVersionTypeFromString` is `Debug.FailedAssert(...)` followed by `return ApplicationVersionType.Invalid;`. **The result is a perfectly normal-looking struct whose stage is `Invalid`**, and `Debug.FailedAssert` can be entirely silent outside test builds. **Always test for `== ApplicationVersionType.Invalid` explicitly.**
- **`FromString` itself does throw.** `ApplicationVersion.cs:60-63` raises `throw new Exception("Wrong version as string")` when the segment count is neither 3 nor 4. **That is a bare `Exception`, not a custom exception type**, so catching it means catching `Exception`.
- **An empty first segment throws `IndexOutOfRange`.** `array[0][0]` is indexed directly in `FromString` (`:65`). `FromString(".1.2")` reaches `array[0][0]` on an empty string and goes out of range. **Validate externally supplied version strings before parsing them.**
- **The prefix mapping is a table you must keep in sync.** `GetPrefix` (`ApplicationVersion.cs:133-146`) is a switch expression covering every member except `Invalid`. **Add an enum member without updating it and you silently get `"i"`.**
- **It only decides the first comparison level, not compatibility.** Save-compatibility checks still need `Major` / `Minor` / `Revision` / `ChangeSet`. **Comparing `ApplicationVersionType` alone is not enough.**
- **Its underlying type is `int` (the default), not `uint`.** That is why `Invalid = -1` is legal. It is the only member with a negative value, so beware of it when iterating.

## Cross-Version Notes

`ApplicationVersionType.cs` is 11 lines with 6 members in 1.4.5, in original-source form; the 1.3.x / 1.4.6 counterparts are decompiled output. **What matters across versions is not the member list but the member *order*.** Because `IsOlderThan` and `operator>` **compare this enum numerically**, **inserting a new member in the middle (a `Preview` between `Release` and `Development`, say) changes the result of every version comparison in the game**, not merely the prefix set. The same applies to `GetPrefix`'s switch arms and to `ApplicationVersionTypeFromString`'s `case` labels — **the three are one contract.** **Never assume "member order is just an implementation detail".**

## Dependencies

- Host: [ApplicationVersion](../ApplicationVersion)'s `ApplicationVersionType` property; together with four ints it forms a complete version
- Prefix mapping: `ApplicationVersion.GetPrefix(ApplicationVersionType)` (`ApplicationVersion.cs:133-146`) and `ApplicationVersionTypeFromString(string)` (`:101-121`) form the two-way mapping
- Sort consumers: `ApplicationVersion.IsOlderThan` (`:71-100`) and `operator>` (`:170-190`) **compare this enum's numeric value first**
- String formatting: `ApplicationVersion.ToString()` (`:148-152`) uses the `GetPrefix` result to build a `v1.2.3.4`-shaped string
- Sentinel: `ApplicationVersion.Empty` = `new ApplicationVersion(ApplicationVersionType.Invalid, -1, -1, -1, -1)`
- JSON: serialised through `ApplicationVersionJsonConverter` into `{ "_version": "v1.2.3.4" }`
- Real consumers (campaign layer): `../../campaign/Clan.cs:801/812/816/820`, `../../campaign/Campaign.cs:612-629`, `../../campaign/CampaignPeriodicEventManager.cs:199`, `../../campaign/CharacterRelationManager.cs:153` — all of them save-migration checks
- Bucket index: [core-extra API section](../)