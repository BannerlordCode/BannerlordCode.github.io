---
title: "BannerEditorTextureCreationData"
description: "A thirteen-line concrete subclass of BannerThumbnailCreationBaseData identical to BannerThumbnailCreationData except for its name. Covers what distinguishes it, the private RenderId scheme it inherits, and what it has no control over."
---

# BannerEditorTextureCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerEditorTextureCreationData : BannerThumbnailCreationBaseData`
**Base:** `BannerThumbnailCreationBaseData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerEditorTextureCreationData.cs`

## Overview

`BannerEditorTextureCreationData` is a **thirteen-line concrete type whose only content is a constructor**:

```csharp
public class BannerEditorTextureCreationData : BannerThumbnailCreationBaseData
{
	public BannerEditorTextureCreationData(Banner banner, Action<Texture> setAction, Action cancelAction, BannerDebugInfo debugInfo, bool isTableauOrNineGrid, bool isLarge)
		: base(banner, setAction, cancelAction, debugInfo, isTableauOrNineGrid, isLarge)
	{
	}
}
```

That is the entire file (`BannerEditorTextureCreationData.cs:7-13`). No field, no property, no method, no nested type.

It is **line-for-line identical to its sibling** [`BannerThumbnailCreationData`](../BannerThumbnailCreationData) apart from the class name. Both files are 13 lines, both take the same six arguments, both forward them to the same abstract base with the same argument order. The pair exists so the tableau system can tell the editor's request apart from the shipped thumbnail request **by runtime type**.

## Mental Model

### What it is / which layer

- It is a **nominal marker over the abstract base**, whose purpose is to be identifiable rather than to do anything. The base computes the `RenderId` and stores the banner; this class contributes nothing but a distinct type.
- Think of it as the "**editor flavour**" of the same ticket the base defines. Both flavours produce the *same* `RenderId` strings for the same flags — because the string is built by a `private` base method (`BannerThumbnailCreationBaseData.cs:28`) that neither subclass can influence.
- That last point is the important one: **the two flavours are not distinguishable by anything inside the object**. `Banner`, `DebugInfo`, `IsTableauOrNineGrid` and `IsLarge` are all identical `private set` properties on the base (`BannerThumbnailCreationBaseData.cs:10`, `:12`, `:14`, `:16`), and `RenderId` is derived only from the flags and the banner code (`:35`). If you hold one of these and cannot remember which flavour it is, **the only way to find out is a type test**.
- It is `public` and not sealed (`BannerEditorTextureCreationData.cs:7`), so you can subclass it.

### The consequence that matters

**Every failure happens in the base constructor, and the visible stack frame is this class.** The `RenderId` is computed at `BannerThumbnailCreationBaseData.cs:25` by a `private` method (`:28`) that dereferences `Banner.BannerCode` (`:35`) with no null check. This constructor chains straight into `base(...)` (`BannerEditorTextureCreationData.cs:10`), so **a null `Banner` throws a `NullReferenceException` from this constructor**, before any of your code after the `new` runs.

The second consequence follows from the same place: **adding a member here changes nothing.** No consumer reads anything off this type except its runtime identity. The render path keys off the base's `RenderId` string, which is a function of the two flags and the banner code alone.

## How to use

**How to obtain it.** Construct it. It is `public`, not abstract, and its constructor takes the six values the base needs. Guard against a null `Banner` first, because the base's `CreateRenderId()` dereferences it (`BannerThumbnailCreationBaseData.cs:35`).

Note that unlike its sibling, **this class has no shipped call site**. A repo-wide search for `new BannerEditorTextureCreationData` finds only the class's own declaration (`BannerEditorTextureCreationData.cs:7`) — the two `BannerImageTextureProvider` call sites construct `BannerThumbnailCreationData` instead (`BannerImageTextureProvider.cs:23`, `:27`). So from mod code this is a type you construct yourself, not one the engine hands you.

**A typical use.** Build an editor-flavoured request and identify it by type:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class BannerEditorTextureRequest
{
    public static BannerEditorTextureCreationData Request(Banner banner)
    {
        // Null banner throws inside the base constructor:
        // CreateRenderId() reads Banner.BannerCode
        // (BannerThumbnailCreationBaseData.cs:35), reached from :25, and this
        // class's constructor forwards straight to base
        // (BannerEditorTextureCreationData.cs:10).
        if (banner == null)
            return null;

        return new BannerEditorTextureCreationData(
            banner,
            setAction: texture => Debug.Print("editor texture ready", 0),
            cancelAction: () => Debug.Print("editor texture cancelled", 0),
            debugInfo: null,
            isTableauOrNineGrid: false,
            isLarge: false);
    }
}
```

Tell the two flavours apart, because nothing inside the object can:

```csharp
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class BannerFlavour
{
    // The sibling BannerThumbnailCreationData (BannerThumbnailCreationData.cs:7)
    // is byte-identical apart from its name, and both inherit the same four
    // private-set values and the same RenderId scheme. So the type test IS the
    // only way to tell them apart.
    public static string Describe(BannerThumbnailCreationBaseData request)
    {
        if (request is BannerEditorTextureCreationData)
            return "editor flavour";
        if (request is BannerThumbnailCreationData)
            return "thumbnail flavour";

        return "unknown flavour: " + request.GetType().Name;
    }
}
```

**What to watch out for.** The trap is a null `Banner`, which throws from inside the base's private `CreateRenderId()` (`BannerThumbnailCreationBaseData.cs:28-36`) via this constructor's `base(...)` chain (`BannerEditorTextureCreationData.cs:10`) — so the stack frame names this framework type, not your code. Second, if you were expecting an "editor" flag or mode on this object, there is none: everything that looks like configuration is a `private set` property fixed at construction (`BannerThumbnailCreationBaseData.cs:10-16`).

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BannerEditorTextureCreationData(Banner, Action<Texture>, Action, BannerDebugInfo, bool, bool)` | constructor at `BannerEditorTextureCreationData.cs:9-12` | The **only** member this class declares. It forwards all six arguments to `base(...)` (`BannerEditorTextureCreationData.cs:10`) and has an empty body (`:11-12`). It exists to give the editor request a distinct runtime type; it adds no behaviour. **The null-`Banner` crash happens inside that `base(...)` call.** |

Everything else is inherited, and the members below are where the actual behaviour lives — documented in full on the base page:

| Inherited member | Declared at | What it is for |
| --- | --- | --- |
| `Banner` | `BannerThumbnailCreationBaseData.cs:10` | The banner being rendered; `private set`, dereferenced during construction. |
| `DebugInfo` | `BannerThumbnailCreationBaseData.cs:12` | Debug context for the renderer; stored but unused elsewhere in this file's tree. |
| `IsTableauOrNineGrid` | `BannerThumbnailCreationBaseData.cs:14` | Selects the tableau/nine-grid renderer over the flat thumbnail; `private set`. |
| `IsLarge` | `BannerThumbnailCreationBaseData.cs:16` | Large vs small tableau; only consulted when the flag above is true. |
| `SetAction` / `CancelAction` | `ThumbnailCreationData.cs:8` / `:10` | The completion and cancellation callbacks, stored as public readonly fields. |
| `RenderId` | `ThumbnailCreationData.cs:14` | The computed deduplication key, set by the base constructor at `BannerThumbnailCreationBaseData.cs:25`. |
| `IsProcessed` | `ThumbnailCreationData.cs:12` | Whether the render finished; `internal set`, so read-only from a mod. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| Any property, field or method | **UNRESOLVED — does not exist** | Positive evidence: `grep -cE '^\t(public|private|protected|internal)' BannerEditorTextureCreationData.cs` returns 1, and that single hit is the constructor at `BannerEditorTextureCreationData.cs:9`. The file is 13 lines: a namespace, a using block, the class header, the constructor, and braces. |
| An "editor mode" or quality flag | **UNRESOLVED — absent in v1.4.5** | The only two flags are `IsTableauOrNineGrid` and `IsLarge` (`BannerThumbnailCreationBaseData.cs:14`, `:16`), both inherited and both `private set`. Positive evidence: `grep -c 'private set' BannerThumbnailCreationBaseData.cs` returns 4, i.e. those and `Banner` and `DebugInfo` are the only properties on the base. |
| A shipped construction site | **UNRESOLVED — none in v1.4.5** | A repo-wide search for `new BannerEditorTextureCreationData` finds only this file's own declaration (`BannerEditorTextureCreationData.cs:7`). The two `BannerImageTextureProvider` sites construct the sibling `BannerThumbnailCreationData` instead (`BannerImageTextureProvider.cs:23`, `:27`). So this type is constructed by mod code or by future module code, not by the shipped provider. |

## Examples

Construct it safely, guarding the null banner:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class SafeEditorRequest
{
    public static BannerEditorTextureCreationData TryCreate(Banner banner)
    {
        // The crash is a NullReferenceException inside the base's private
        // CreateRenderId() (BannerThumbnailCreationBaseData.cs:28, reached from
        // :25). Guard before constructing.
        if (banner == null)
        {
            Debug.Print("no banner; skipping editor texture request", 0);
            return null;
        }

        var request = new BannerEditorTextureCreationData(
            banner, null, null, null,
            isTableauOrNineGrid: false,
            isLarge: false);

        Debug.Print("id: " + request.RenderId, 0);
        return request;
    }
}
```

Prove that the two flavours are identical from the inside, and only the type differs:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class FlavourEquivalence
{
    public static void Show(Banner banner)
    {
        if (banner == null)
            return;

        var editorFlavour = new BannerEditorTextureCreationData(
            banner, null, null, null, false, false);
        var thumbnailFlavour = new BannerThumbnailCreationData(
            banner, null, null, null, false, false);

        // Identical RenderId: the string is built by the base's private
        // CreateRenderId() (BannerThumbnailCreationBaseData.cs:28-36) from the
        // flags and the banner code alone, so the flavour cannot affect it.
        Debug.Print("editor id:     " + editorFlavour.RenderId, 0);
        Debug.Print("thumbnail id:  " + thumbnailFlavour.RenderId, 0);

        // The only difference is the runtime type.
        Debug.Print(
            "editor is thumbnail flavour: "
            + (editorFlavour is BannerThumbnailCreationData),
            0);
    }
}
```

Subclass it only if you need an extra label, and know it will be ignored by the renderer:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

// BannerEditorTextureCreationData is public and not sealed
// (BannerEditorTextureCreationData.cs:7), so subclassing compiles. But the
// renderer keys off the base's RenderId string, so any property added here has
// no consumer.
public class MyModEditorTextureRequest : BannerEditorTextureCreationData
{
    public string RequestLabel { get; }

    public MyModEditorTextureRequest(Banner banner, string label)
        : base(banner, null, null, null, false, false)
    {
        RequestLabel = label;
    }
}
```

## Risks and crash boundaries

- **A null `Banner` throws inside the base constructor.** `CreateRenderId()` reads `Banner.BannerCode` (`BannerThumbnailCreationBaseData.cs:35`), reached from `:25` via this class's `base(...)` chain at `BannerEditorTextureCreationData.cs:10`. The throw happens during construction, before any of your code after the `new` runs, and the visible stack frame is this framework type.
- **The class declares no members of its own.** `BannerEditorTextureCreationData.cs:7-13`. Anything you use belongs to the base or to `ThumbnailCreationData`.
- **The flavour is invisible from inside the object.** Because the sibling is byte-identical (`BannerThumbnailCreationData.cs:7-13`) and both inherit the same four `private set` properties (`BannerThumbnailCreationBaseData.cs:10-16`) and the same `RenderId` derivation (`:28-36`), **only a type test can distinguish them**. There is no flag to read.
- **Adding a member achieves nothing.** The render path keys off `RenderId`, a function of the two flags and the banner code alone. A property added in a subclass has no consumer.
- **No shipped construction site.** A repo-wide search finds `new BannerEditorTextureCreationData` only at its own declaration (`BannerEditorTextureCreationData.cs:7`). The shipped provider builds the sibling instead (`BannerImageTextureProvider.cs:23`, `:27`), so do not expect the engine to hand you an instance of this type.
- **`SetAction` and `CancelAction` may be null and are not checked.** Public readonly fields on `ThumbnailCreationData.cs:8` and `:10`; a null callback throws later, on the renderer's thread, far from your construction site.
- **`isLarge` alone changes nothing.** Only consulted when `IsTableauOrNineGrid` is true (`BannerThumbnailCreationBaseData.cs:31-33`), and neither flag can be changed afterwards.
- **Not a save participant.** No `[Serializable]`; a transient render request, lost on save or scene change.

## Cross-Version Notes

The v1.4.5 file is 13 lines under the `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/` layout — note this source tree is `Modules.Native`, not `bin/`, so a page-declared `**File:**` beginning with `Modules.Native` must be resolved against `bannerlord-1.4.5\Bannerlord.Source\`, not against `bin\`. The same file name and empty-subclass shape appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees. Two observations matter for planning. First, **the two flavours are told apart only by runtime type**, so the class *names* are a contract — renaming either is a breaking change with no compiler help. Second, **this class has no shipped construction site in v1.4.5** while its sibling has two (`BannerImageTextureProvider.cs:23`, `:27`); that asymmetry is exactly the kind of thing that fills in later, so do not read "unused" as "removed". The **constructor arity** mirrors the base's six parameters (`BannerThumbnailCreationBaseData.cs:18`) and is the part most likely to widen as debug or quality parameters are added — the base and both subclasses would have to move together. **VERIFIED MEASURED for v1.4.5** (13 lines, 1 constructor, 0 members; every cited line number checked with `sed -n`, and the absence of a shipped call site confirmed by repo-wide search); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`BannerThumbnailCreationBaseData`](../BannerThumbnailCreationBaseData), which stores the four values and computes the `RenderId` (`BannerThumbnailCreationBaseData.cs:25`, `:28-36`).
- Grandparent type: [`ThumbnailCreationData`](../ThumbnailCreationData), supplying `SetAction` (`ThumbnailCreationData.cs:8`), `CancelAction` (`:10`), `IsProcessed` (`:12`) and `RenderId` (`:14`).
- Twin sibling: [`BannerThumbnailCreationData`](../BannerThumbnailCreationData) (`BannerThumbnailCreationData.cs:9`) — byte-identical body; the type test that distinguishes the two flavours.
- The provider that ships the *other* flavour: `BannerImageTextureProvider` in `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI`, at `BannerImageTextureProvider.cs:23` and `:27` — described here rather than linked, because it has no page in this slice.
- The banner being rendered: [`Banner`](../../core-extra/Banner), whose `BannerCode` supplies the id suffix read at `BannerThumbnailCreationBaseData.cs:35`.
- Bucket index: [mission-ext API index](../)