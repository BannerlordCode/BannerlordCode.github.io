---
title: "BannerThumbnailCreationData"
description: "A thirteen-line concrete subclass of BannerThumbnailCreationBaseData that adds nothing but a constructor. Covers why it exists separately from its sibling, the one shipped call site, and what it inherits."
---

# BannerThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerThumbnailCreationData : BannerThumbnailCreationBaseData`
**Base:** `BannerThumbnailCreationBaseData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerThumbnailCreationData.cs`

## Overview

`BannerThumbnailCreationData` is a **thirteen-line concrete type whose only content is a constructor**:

```csharp
public class BannerThumbnailCreationData : BannerThumbnailCreationBaseData
{
	public BannerThumbnailCreationData(Banner banner, Action<Texture> setAction, Action cancelAction, BannerDebugInfo debugInfo, bool isTableauOrNineGrid, bool isLarge)
		: base(banner, setAction, cancelAction, debugInfo, isTableauOrNineGrid, isLarge)
	{
	}
}
```

That is the entire file (`BannerThumbnailCreationData.cs:7-13`). It declares **no field, no property, no method and no nested type**. All four of its stored values — `Banner`, `DebugInfo`, `IsTableauOrNineGrid`, `IsLarge` — belong to the abstract base.

Its sibling [`BannerEditorTextureCreationData`](../BannerEditorTextureCreationData) is the same thirteen lines with a different class name. The pair exists so the tableau system can distinguish *which* request flavour it is holding, by type, without adding a flag.

## Mental Model

### What it is / which layer

- It is a **nominal marker over the abstract base**. Where the base computes the `RenderId` and stores the banner, this class contributes one thing: a distinct runtime type that the render path can test.
- Think of it as "**the thumbnail flavour**". The base is the ticket; this is the label on it that says which renderer should take it.
- It is the **shipped default**. `BannerImageTextureProvider` builds this type in both of its call sites (`BannerImageTextureProvider.cs:23`, `:27`), with the two flags differing between them — `isTableauOrNineGrid: true, isLarge: true` at `:23` and `isTableauOrNineGrid: false, isLarge: false` at `:27`.
- It is `public` and not sealed (`BannerThumbnailCreationData.cs:7`), so you can subclass it — though see below for why that rarely helps.

### The consequence that matters

**Everything that can fail happens in the base constructor, not here.** The `RenderId` is computed by the base (`BannerThumbnailCreationBaseData.cs:25`) from a `private` method (`:28`), and that method dereferences `Banner.BannerCode` (`:35`) with no null check. Because this constructor forwards straight to `base(...)` (`BannerThumbnailCreationData.cs:10`), a null `Banner` throws a `NullReferenceException` from inside this class's constructor chain — and the stack frame a modder sees will be *this* type, not the base and not their own code.

The second consequence is that **adding a member here changes nothing about rendering**. The render path keys off the base's `RenderId` string, which is derived only from the two flags and the banner code. If you subclass and add a property, no consumer of this class will ever read it — the only consumer (`BannerImageTextureProvider`) constructs the base type directly and passes the flags through the constructor.

## How to use

**How to obtain it.** Construct it. It is `public`, it is not abstract, and its constructor takes the six values the base needs — but note that `Banner` must not be null, because the base's `CreateRenderId()` dereferences it (`BannerThumbnailCreationBaseData.cs:35`). In shipped code it is built inside a texture provider; from mod code you would build it yourself and hand the callbacks you want invoked.

**A typical use.** Build a thumbnail request and report the id the base generated:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class BannerThumbnailRequest
{
    public static BannerThumbnailCreationData Request(Banner banner)
    {
        // Null banner throws inside the base constructor:
        // CreateRenderId() reads Banner.BannerCode
        // (BannerThumbnailCreationBaseData.cs:35), reached from :25, and this
        // class's constructor forwards straight to base (:10).
        if (banner == null)
            return null;

        // Six arguments, forwarded verbatim (BannerThumbnailCreationData.cs:10).
        // The class adds nothing of its own (BannerThumbnailCreationData.cs:7-13).
        var request = new BannerThumbnailCreationData(
            banner,
            setAction: texture => Debug.Print("thumbnail ready", 0),
            cancelAction: () => Debug.Print("thumbnail cancelled", 0),
            debugInfo: null,
            isTableauOrNineGrid: false,
            isLarge: false);

        // RenderId was already computed by the base constructor. With both flags
        // false the prefix is "BannerThumbnail" (BannerThumbnailCreationBaseData.cs:30),
        // then ":<BannerCode>" (:35).
        Debug.Print("render id: " + request.RenderId, 0);
        return request;
    }
}
```

Pick the tableau flavour when you need the layered renderer:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class BannerTableauRequest
{
    public static BannerThumbnailCreationData RequestLarge(Banner banner)
    {
        if (banner == null)
            return null;

        // isTableauOrNineGrid: true + isLarge: true selects the
        // "BannerTableauLarge" prefix (BannerThumbnailCreationBaseData.cs:33).
        // This is exactly the combination the shipped provider uses at
        // BannerImageTextureProvider.cs:23.
        return new BannerThumbnailCreationData(
            banner,
            setAction: texture => Debug.Print("large tableau ready", 0),
            cancelAction: () => Debug.Print("large tableau cancelled", 0),
            debugInfo: null,
            isTableauOrNineGrid: true,
            isLarge: true);
    }
}
```

**What to watch out for.** The trap is a null `Banner`. It does not fail at your call site in any recognisable way — it fails inside the abstract base's private `CreateRenderId()` (`BannerThumbnailCreationBaseData.cs:28-36`), which this class's constructor chains into at `BannerThumbnailCreationData.cs:10`. Second, do not expect anything from this class itself: it declares no members, so an IDE's "go to definition" from any member you use here lands you in the base or in `ThumbnailCreationData`.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BannerThumbnailCreationData(Banner, Action<Texture>, Action, BannerDebugInfo, bool, bool)` | constructor at `BannerThumbnailCreationData.cs:9-12` | The **only** member this class declares. It forwards all six arguments to `base(...)` (`BannerThumbnailCreationData.cs:10`) and has an empty body (`:11-12`). Its real job is to be the signature the six-argument base constructor requires, and to give the render path a distinct type to test. **The null-`Banner` crash happens inside that `base(...)` call.** |

Everything else this type exposes is inherited, and the members below are where the actual behaviour lives — they are documented in full on the base page:

| Inherited member | Declared at | What it is for |
| --- | --- | --- |
| `Banner` | `BannerThumbnailCreationBaseData.cs:10` | The banner being rendered; `private set`, dereferenced during construction. |
| `DebugInfo` | `BannerThumbnailCreationBaseData.cs:12` | Debug context for the renderer; stored but unused in this file's tree. |
| `IsTableauOrNineGrid` | `BannerThumbnailCreationBaseData.cs:14` | Selects the tableau/nine-grid renderer over the flat thumbnail; `private set`. |
| `IsLarge` | `BannerThumbnailCreationBaseData.cs:16` | Large vs small tableau; only consulted when the flag above is true. |
| `SetAction` / `CancelAction` | `ThumbnailCreationData.cs:8` / `:10` | The completion and cancellation callbacks, stored as public readonly fields. |
| `RenderId` | `ThumbnailCreationData.cs:14` | The computed deduplication key, set by the base constructor at `BannerThumbnailCreationBaseData.cs:25`. |
| `IsProcessed` | `ThumbnailCreationData.cs:12` | Whether the render finished; `internal set`, so read-only from a mod. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| Any property, field or method | **UNRESOLVED — does not exist** | Positive evidence: `grep -cE '^\t(public|private|protected|internal)' BannerThumbnailCreationData.cs` returns 1, and that single hit is the constructor at `BannerThumbnailCreationData.cs:9`. The file is 13 lines: a namespace, a using block, the class header, the constructor, and braces. |
| An overload with fewer parameters | **UNRESOLVED — absent in v1.4.5** | `BannerThumbnailCreationData.cs:9` declares exactly one constructor, and it mirrors the base's six parameters (`BannerThumbnailCreationBaseData.cs:18`) one-for-one. |
| Anything distinguishing it from its sibling | **UNRESOLVED — only the type name** | [`BannerEditorTextureCreationData`](../BannerEditorTextureCreationData) at `BannerEditorTextureCreationData.cs:9` takes the identical six arguments and forwards them identically. Positive evidence: both files are 13 lines and their only difference is the class name. |

## Examples

Construct it safely and read back what the base computed:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class SafeRequest
{
    public static BannerThumbnailCreationData TryCreate(Banner banner)
    {
        // The crash is a NullReferenceException inside the base's private
        // CreateRenderId() (BannerThumbnailCreationBaseData.cs:28, reached from
        // :25). Guard here, before constructing.
        if (banner == null)
        {
            Debug.Print("no banner; skipping thumbnail request", 0);
            return null;
        }

        var request = new BannerThumbnailCreationData(
            banner, null, null, null,
            isTableauOrNineGrid: false,
            isLarge: false);

        Debug.Print("id: " + request.RenderId, 0);
        return request;
    }
}
```

Tell the two flavours apart by type, which is the whole reason this class exists:

```csharp
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class FlavourCheck
{
    public static bool IsEditorFlavour(BannerThumbnailCreationBaseData request)
    {
        // Two 13-line subclasses share one abstract base and are told apart only
        // by runtime type: this one and BannerEditorTextureCreationData
        // (BannerEditorTextureCreationData.cs:7). The type test IS the
        // distinction — no property or flag carries it.
        return request is BannerEditorTextureCreationData;
    }
}
```

Read the completion state rather than assuming the render finished:

```csharp
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class CompletionProbe
{
    public static void Report(BannerThumbnailCreationData request)
    {
        if (request == null)
            return;

        // IsProcessed has an internal setter (ThumbnailCreationData.cs:12), so
        // from a mod this is read-only. SetAction/CancelAction are public
        // readonly FIELDS (ThumbnailCreationData.cs:8, :10), so they can be read
        // but not replaced.
        Debug.Print("processed: " + request.IsProcessed, 0);
        Debug.Print("has completion callback: " + (request.SetAction != null), 0);
    }
}
```

## Risks and crash boundaries

- **A null `Banner` throws inside the base constructor.** `CreateRenderId()` reads `Banner.BannerCode` (`BannerThumbnailCreationBaseData.cs:35`), reached from `:25` via this class's `base(...)` chain at `BannerThumbnailCreationData.cs:10`. The throw happens during construction, before any of your code after the `new` runs, and the visible stack frame is this framework type.
- **The class declares no members of its own.** `BannerThumbnailCreationData.cs:7-13`. Do not expect anything from it beyond the constructor; any member you use belongs to the base or to `ThumbnailCreationData`.
- **Adding a member here achieves nothing.** The render path keys off the base's `RenderId` string, derived only from the two flags and the banner code (`BannerThumbnailCreationBaseData.cs:28-36`). A property you add in a subclass has no consumer — the only shipped consumer constructs this base type directly (`BannerImageTextureProvider.cs:23`, `:27`).
- **`SetAction` and `CancelAction` may be null and are not checked.** They are public readonly fields on `ThumbnailCreationData.cs:8` and `:10`, so a null callback throws later, when the renderer invokes it — on the renderer's thread, far from your construction site.
- **`isLarge` alone changes nothing.** It is only consulted when `IsTableauOrNineGrid` is true (`BannerThumbnailCreationBaseData.cs:31-33`), and both flags are `private set`, so that cannot be corrected afterwards.
- **The two flags and the render id are fixed at construction.** `BannerThumbnailCreationBaseData.cs:14`, `:16`, `:25`. There is no supported way to re-target an existing request to the other renderer.
- **Not a save participant.** No `[Serializable]`; it is a transient render request and a pending one is lost on save or scene change.

## Cross-Version Notes

The v1.4.5 file is 13 lines under the `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/` layout — note this source tree is `Modules.Native`, not `bin/`, so a page-declared `**File:**` beginning with `Modules.Native` must be resolved against `bannerlord-1.4.5\Bannerlord.Source\`, not against `bin\`. The same file name and empty-subclass shape appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees. What is stable is the **type identity**: the render path distinguishes the thumbnail flavour from the editor flavour by runtime type, so renaming this class is a breaking change with no compiler help. What is most likely to change is the **constructor arity** — it mirrors the base's six parameters today (`BannerThumbnailCreationBaseData.cs:18`), and an added debug or quality parameter is the natural evolution; the subclass would have to be updated in lockstep, which is one more reason to construct through the base's parameter list rather than assuming six. **VERIFIED MEASURED for v1.4.5** (13 lines, 1 constructor, 0 members; every cited line number checked with `sed -n`, and the two shipped call sites confirmed at `BannerImageTextureProvider.cs:23` and `:27`); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`BannerThumbnailCreationBaseData`](../BannerThumbnailCreationBaseData), which stores the four values and computes the `RenderId` (`BannerThumbnailCreationBaseData.cs:25`, `:28-36`).
- Grandparent type: [`ThumbnailCreationData`](../ThumbnailCreationData), supplying `SetAction` (`ThumbnailCreationData.cs:8`), `CancelAction` (`:10`), `IsProcessed` (`:12`) and `RenderId` (`:14`).
- Sibling with an identical body: [`BannerEditorTextureCreationData`](../BannerEditorTextureCreationData) (`BannerEditorTextureCreationData.cs:9`) — the type test that distinguishes the two flavours.
- Shipped call sites: `BannerImageTextureProvider` in `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI`, at `BannerImageTextureProvider.cs:23` and `:27` — described here rather than linked, because it has no page in this slice.
- The banner being rendered: [`Banner`](../../core-extra/Banner), whose `BannerCode` supplies the id suffix read at `BannerThumbnailCreationBaseData.cs:35`.
- Bucket index: [mission-ext API index](../)