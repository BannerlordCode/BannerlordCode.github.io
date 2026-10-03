---
title: "ApplicationVersion"
description: "The game's version value type: a maturity stage plus four integers (Major/Minor/Revision/ChangeSet), with parsing, stringification, and a full set of comparison operators. Its comparison semantics contain a real crack: operator< and operator> ignore ChangeSet while IsOlderThan does not, so one semantic has two implementations."
---

# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ApplicationVersion`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ApplicationVersion.cs`

## Overview

`ApplicationVersion` is the value type for a game version number: **one maturity stage ([ApplicationVersionType](../ApplicationVersionType)) plus four integers** (`Major` / `Minor` / `Revision` / `ChangeSet`). It offers string parsing (`FromString`), XML version-file reading (`FromParametersFile`), stringification (`ToString`), and a complete set of comparison operators (`==` / `!=` / `>` / `<` / `>=` / `<=` plus `IsSame` / `IsOlderThan` / `IsNewerThan`).

The role it plays is **"save and module version-compatibility checking"**. The campaign layer is full of checks shaped like `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("e1.8.0.0")` — see `Clan.cs`, `Campaign.cs`, and `CharacterRelationManager.cs`. **It is the bedrock the whole save-migration mechanism stands on.**

## Mental Model

Treat it as **"a five-segment version number with two different orderings available"**, not as "a version number you can safely use `>` on". That second half is the real trap.

**The centre of the mental model is that there are two comparison implementations and they do not agree.** This is the single thing to remember on this page:

| | Operator / method | Stage | Major | Minor | Revision | **ChangeSet** |
| --- | --- | --- | --- | --- | --- | --- |
| `operator==` (`:158-166`) | equality | ✅ | ✅ | ✅ | ✅ | ❌ **not compared** |
| `IsSame(other, checkChangeSet)` (`:76-90`) | equality | ✅ | ✅ | ✅ | ✅ | depends on the argument |
| `operator>` (`:170-190`) | greater-than | ✅ | ✅ | ✅ | ✅ | ❌ **not compared** |
| `IsOlderThan(other)` (`:71-100`) | less-than | ✅ | ✅ | ✅ | ✅ | ✅ **compared** |
| `operator<` (`:192-198`) | less-than | ✅ | ✅ | ✅ | ✅ | ❌ delegates to `>` |
| `operator<=` (`:206-212`) | less-or-equal | ✅ | ✅ | ✅ | ✅ | ❌ delegates to `<` |
| `IsNewerThan(other)` (`:102-110`) | greater-than | ✅ | ✅ | ✅ | ✅ | false only when strictly identical |

**`operator<` and `IsOlderThan` give different answers.** Take `a = v1.2.3.100` and `b = v1.2.3.200`: identical stage and identical three-segment version, differing only in ChangeSet. Then:

- `a < b` → **false** (the body of `operator<` is `if (a == b || a > b) return false;`, and `a == b` only compares up to `Revision`, so the first disjunct already wins);
- `a.IsOlderThan(b)` → **true** (its last step is `if (Revision == other.Revision && ChangeSet < other.ChangeSet) return true;`).

**This is not speculation about a bug — it is the product of reading both method bodies side by side.** The practical meaning: **`ChangeSet` is the official internal build number.** Two builds of the same release share `Major.Minor.Revision` and differ only in `ChangeSet`. So `<` gives you the wrong answer when you ask "is my build older than the save's build", and `IsOlderThan` gives you the right one.

**The second anchor is that `GetHashCode()` violates the `Equals` contract.** The implementation at `:168-171` is:

```csharp
public override int GetHashCode()
{
    return base.GetHashCode();
}
```

For a value type, `base.GetHashCode()` is a **layout-based hash over the raw fields**, while `Equals(object)` (`:153-156`) goes through `operator==` — which only compares up to `Revision`. **So two `ApplicationVersion` instances for which `Equals` returns true can return different hash codes.** The conclusion is blunt: **never use `ApplicationVersion` as a `Dictionary` or `HashSet` key** — once inserted, the lookup will never find it again.

**The third anchor is that the stage outranks the numbers.** `IsOlderThan` opens by comparing `ApplicationVersionType`, and in [ApplicationVersionType](../ApplicationVersionType), `Development`(4) > `Release`(3). Hence `d1.0.0` is judged newer than `v9.9.9`.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `ApplicationVersion(ApplicationVersionType, int, int, int, int)` | `public ApplicationVersion(ApplicationVersionType applicationVersionType, int major, int minor, int revision, int changeSet)` | The only constructor; pure field assignment. **It performs no validation whatsoever** — you can happily build `new ApplicationVersion(ApplicationVersionType.Release, -5, 0, 0, 0)`. |
| `FromString` | `public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)` | Parses a `v1.2.3` or `e1.8.0.0`-shaped string. **If the segment count is neither 3 nor 4 it throws `new Exception("Wrong version as string")` (a bare `Exception`)**; if the first segment is empty, `array[0][0]` throws `IndexOutOfRange`. With three segments, `ChangeSet` falls back to `defaultChangeSet` (0 by default). |
| `FromParametersFile` | `public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)` | Reads from `BasePath.Name + "Parameters/Version.xml"` through `VirtualFolders.GetFileContent` (not `System.IO`). **Returns `Empty` when the content is an empty string**; otherwise it drills down `xmlDocument.ChildNodes[0].ChildNodes[0].Attributes["Value"].InnerText` — **three levels of hard-coded descent, so one changed XML level becomes an `IndexOutOfRange`.** |
| `ToString` | `public override string ToString()` | Assembles `<prefix><Major>.<Minor>.<Revision>.<ChangeSet>` using `GetPrefix(ApplicationVersionType)`. **The prefix of `Invalid` is `"i"`**, so `Empty.ToString()` yields an `i-1.-1.-1.-1`-shaped string. |
| `IsSame` | `public bool IsSame(ApplicationVersion other, bool checkChangeSet)` | Compares the stage and the three version numbers first, and only when all of those match does the `checkChangeSet` argument decide whether `ChangeSet` participates. **Passing `true` is what makes it a strict equality test.** |
| `IsOlderThan` | `public bool IsOlderThan(ApplicationVersion other)` | **The only comparison method that looks at `ChangeSet`.** Order is stage → Major → Minor → Revision → ChangeSet, short-circuiting at the first difference. Note that equal `Revision` *and* equal `ChangeSet` returns `false`, because that is "identical" rather than "older". |
| `IsNewerThan` | `public bool IsNewerThan(ApplicationVersion other)` | Implemented as `if (!IsSame(other, checkChangeSet: true)) return !IsOlderThan(other); return false;`. **It returns false for a strictly identical version**, since "newer" excludes "equal". It does **not** use `operator>`. |
| `operator==` | `public static bool operator ==(ApplicationVersion a, ApplicationVersion b)` | **Compares only stage + Major + Minor + Revision, and never `ChangeSet`.** Two builds of one release therefore compare equal. |
| `operator>` | `public static bool operator >(ApplicationVersion a, ApplicationVersion b)` | Stage → Major → Minor → Revision, **and it stops there — there is no `ChangeSet` branch.** This is the root of its disagreement with `IsOlderThan`. |
| `operator<` / `operator<=` / `operator>=` | three operators | All are composed from `==` and `>` (`<` is `!(a == b || a > b)`, `<=` is `a == b || a < b`, `>=` is `a == b || a > b`). **Because `==` ignores `ChangeSet`, all three inherit the defect.** |
| `GetHashCode` | `public override int GetHashCode()` | **`return base.GetHashCode();`** — a layout-based hash that **disagrees with `Equals`**. **That makes this type unsafe as a dictionary key.** |
| `Equals` | `public override bool Equals(object obj)` | Null-checks and type-checks, then evaluates `(ApplicationVersion)obj == this` — i.e. it relies on `operator==`, and therefore **also ignores `ChangeSet`**. |
| `Empty` | `public static readonly ApplicationVersion Empty = new ApplicationVersion(ApplicationVersionType.Invalid, -1, -1, -1, -1);` | The sentinel version. **`FromParametersFile` returns it when the file cannot be read**, and `Campaign.cs:626` uses `ApplicationVersion.Empty.ToString()` to build an identifier string for modules with no version — which is why an `i-1.-1.-1.-1` shape can show up in real saves. |
| `DefaultChangeSet` | `public const int DefaultChangeSet = 115628;` | A **hard-coded historical build number** — the 1.4.5 public build. Its existence shows the developers themselves need to backfill a changeset somewhere, yet `FromString`'s own `defaultChangeSet` parameter defaults to **0**, not to this. **The two disagree; pass the value explicitly when you want it.** |
| `[JsonConverter]` | `[JsonConverter(typeof(ApplicationVersionJsonConverter))]` (type attribute, lines 7-8) | Routes Newtonsoft through a custom converter (see the [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) page). **All five properties are marked `[JsonIgnore]`**, because the wire format is a single `_version` string rather than an object. |

## Real Example

Parsing and stringification — the two members you will reach for most:

```csharp
// Three segments -> ChangeSet falls back to defaultChangeSet (0 by default).
ApplicationVersion shortForm = ApplicationVersion.FromString("v1.2.3");
Debug.Print("short = " + shortForm, 0);
Debug.Print("stage = " + shortForm.ApplicationVersionType, 0);

// Four segments -> ChangeSet is parsed. e = EarlyAccess.
ApplicationVersion withChangeset = ApplicationVersion.FromString("e1.8.0.0");
Debug.Print("early access = " + withChangeset, 0);

// Pass the changeset explicitly when you need a non-zero fallback.
ApplicationVersion withFallback = ApplicationVersion.FromString("v1.2.3",
    ApplicationVersion.DefaultChangeSet);

// Invalid has prefix "i", so Empty stringifies to an i-1.-1.-1.-1 shape.
Debug.Print("empty = " + ApplicationVersion.Empty, 0);
```

The heart of this page — **one pair of versions, two comparison implementations, different answers**:

```csharp
ApplicationVersion olderBuild = ApplicationVersion.FromString("v1.2.3.100");
ApplicationVersion newerBuild = ApplicationVersion.FromString("v1.2.3.200");

// operator< does NOT look at ChangeSet, so it calls these equal.
Debug.Print("operator==            : " + (olderBuild == newerBuild), 0);
Debug.Print("operator<             : " + (olderBuild < newerBuild), 0);

// IsOlderThan DOES look at ChangeSet.
Debug.Print("IsOlderThan           : " + olderBuild.IsOlderThan(newerBuild), 0);
Debug.Print("IsSame(checkChangeSet): " + olderBuild.IsSame(newerBuild, true), 0);

// Use IsOlderThan when the question is about builds, not just release lines.
```

The standard save-migration shape, all on `operator<`, which is the established style across the tree:

```csharp
private void OnCampaignLoaded()
{
    // MBSaveLoad is a static class; LastLoadedGameVersion is a static property.
    ApplicationVersion loaded = MBSaveLoad.LastLoadedGameVersion;

    // The early-access migration in the campaign layer uses exactly this shape.
    if (loaded < ApplicationVersion.FromString("e1.8.0.0"))
    {
        Debug.Print("save predates 1.8 early access", 0);
    }

    // When you care about strict equality including the build, use IsSame.
    if (loaded.IsSame(ApplicationVersion.FromString(ApplicationVersion.Empty.ToString()), true))
    {
        Debug.Print("no usable version on this save", 0);
    }
}
```

## Risks and Boundaries

- **`operator<`, `>`, `<=` and `>=` never compare `ChangeSet`, while `IsOlderThan` does.** One semantic, two implementations, different results. **Cross-build comparison must use `IsOlderThan` / `IsSame(other, true)` — never the operators.**
- **`GetHashCode()` violates the `Equals` contract.** It `return base.GetHashCode();` (a layout hash) while `Equals` relies on an `operator==` that stops at `Revision`. **Two `Equals`-equal instances hash differently → prohibited as `Dictionary` / `HashSet` keys.**
- **`operator==` ignores `ChangeSet`.** Two builds of the same release compare equal. **Never use it to answer "did anything change?".**
- **`FromString` throws a bare `Exception`.** On a bad segment count it does `throw new Exception("Wrong version as string")` (`:60-63`). **There is no custom exception type**, so the only way to catch it is `catch (Exception)`.
- **`FromString` can go out of bounds.** `:65` indexes `array[0][0]` directly, so `FromString(".1.2")` throws `IndexOutOfRangeException`. **Validate externally supplied version strings yourself before parsing.**
- **`FromParametersFile` hard-codes a three-level XML descent.** `xmlDocument.ChildNodes[0].ChildNodes[0].Attributes["Value"].InnerText` (`:53`) — **one changed XML level is an `IndexOutOfRange`.** It goes through `VirtualFolders.GetFileContent` (a virtual filesystem) rather than `System.IO`, so sandboxed paths work as well.
- **`Empty.ToString()` is `i-1.-1.-1.-1`.** Because `GetPrefix(Invalid)` returns `"i"`. **`Campaign.cs:626` really does splice that string into module identifiers**, so saves may contain what looks like garbage version strings.
- **The stage outranks the numbers.** `Development`(4) > `Release`(3), hence `d1.0.0` is newer than `v9.9.9`. **This is deliberate (internal builds supersede releases), but do not use it to explain version recency to players.**
- **The constructor validates nothing.** Negative majors and negative changesets are perfectly constructible.
- **`DefaultChangeSet` and `FromString`'s default disagree.** The constant is 115628 while the `defaultChangeSet` parameter defaults to **0**. **To backfill the official build number you must pass the argument explicitly.**
- **It is a value type whose members are still mutable in principle.** All four properties are `{ get; private set; }`, so they are mutable inside the type and **immutable from outside**. `Empty` is a `static readonly` field, so its members are equally unmodifiable.
- **The JSON form is a string, not an object.** Via [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) it serialises as `{ "_version": "v1.2.3.4" }`, and **all five properties carry `[JsonIgnore]`** — so simply calling `JsonConvert.SerializeObject` on an object containing one will not produce a field-shaped result.

## Cross-Version Notes

`ApplicationVersion.cs` is 249 lines in 1.4.5, in that version's original-source form (with `[Serializable]` and `[JsonConverter]` attributes present and no `// Token:` comments). **Three things deserve checking when migrating across versions.** One: **whether the disagreement between the operators and `IsOlderThan` over `ChangeSet` has been fixed** — this is the most important, because it is a semantic-level difference rather than an API-level one. Two: **whether `GetHashCode` has begun to agree with `Equals`** — if it has, the developers have accepted this type as a dictionary key. Three: **the value of the `DefaultChangeSet` constant** (115628 in 1.4.5); it is a compile-time constant, so it will change on upgrade and **your code will get no warning**. Separately, note that when post-1.4.x versions add a new `ApplicationVersionType` member, `GetPrefix`'s switch and `ApplicationVersionTypeFromString`'s `case` labels must be extended together, or the new member falls through to `_ => "i"`.

## Dependencies

- Stage enum: [ApplicationVersionType](../ApplicationVersionType), the type of the `ApplicationVersionType` property; both `IsOlderThan` and `operator>` compare it first
- Prefix mapping: `ApplicationVersion.GetPrefix` (`:133-146`) and `ApplicationVersionTypeFromString` (`:101-121`) form the two-way mapping
- JSON converter: [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter), bound via the type attribute and responsible for the `{ "_version": "..." }` shape
- XML version file: `FromParametersFile` depends on `VirtualFolders.GetFileContent` and `BasePath.Name`, which in turn depends on [ApplicationPlatform](../ApplicationPlatform)
- Runtime origin: `TaleWorlds.DotNet/Controller.cs:43` is the tree's only call to `ApplicationPlatform.Initialize`, and belongs to the same startup-time global state
- Save origin: `MBSaveLoad.LastLoadedGameVersion` produces instances of this type; `MBSaveLoad.IsUpdatingGameVersion` decides whether migration runs at all
- Main consumers (campaign layer): `../../campaign/Clan.cs:749-820`, `../../campaign/Campaign.cs:612-629`, `../../campaign/CampaignPeriodicEventManager.cs:199`, `../../campaign/CharacterRelationManager.cs:153`
- Serialisation attributes: `[Serializable]`, plus `[JsonIgnore]` on each of the five properties
- Bucket index: [core-extra API section](../)