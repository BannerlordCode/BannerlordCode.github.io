---
title: "BannerThumbnailCreationBaseData"
description: "The abstract base for banner thumbnail render requests: stores the banner, builds a deterministic RenderId from prefix plus BannerCode, and exposes no way to override it. Covers the sealed RenderId scheme and the five stored properties."
---

# BannerThumbnailCreationBaseData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCreationBaseData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerThumbnailCreationBaseData.cs`

## Overview

`BannerThumbnailCreationBaseData` is the **abstract description of one banner thumbnail render request**. The file is 37 lines. It stores four things — the `Banner`, its `BannerDebugInfo`, and two flags — and then computes the one identifier the thumbnail system uses to deduplicate requests.

That identifier is `RenderId`, inherited from [`ThumbnailCreationData`](../ThumbnailCreationData). The base constructor passes an **empty string** to its own base (`BannerThumbnailCreationBaseData.cs:19`) and then overwrites `RenderId` with its own computed value in the constructor body (`BannerThumbnailCreationBaseData.cs:25`).

`CreateRenderId()` (`BannerThumbnailCreationBaseData.cs:28-36`) is what builds it, and the scheme is a three-way prefix chosen by the two flags plus the banner code appended after a colon:

| `IsTableauOrNineGrid` | `IsLarge` | Prefix |
| --- | --- | --- |
| `false` | (ignored) | `"BannerThumbnail"` (`:30`) |
| `true` | `true` | `"BannerTableauLarge"` (`:33`) |
| `true` | `false` | `"BannerTableauSmall"` (`:33`) |

The full value is `prefix + ":" + Banner.BannerCode` (`:35`).

## Mental Model

### What it is / which layer

- It sits between the **request side and the render side** of the tableau system. A texture provider builds one of these; the thumbnail renderer later reads `RenderId`, calls `SetAction` with a `Texture`, and sets `IsProcessed`.
- Think of it as a **render ticket**. The data it carries is not the banner's pixels — it is enough to identify the work, plus the two callbacks that finish it.
- The two flags are not decoration: `IsTableauOrNineGrid` selects the *large and small tableau* renderers (nine-grid being the layered banner format) versus the plain thumbnail renderer, and `IsLarge` only matters when the first flag is true.
- It is `public abstract` (`BannerThumbnailCreationBaseData.cs:8`), so **you cannot instantiate it** — you instantiate one of its two concrete subclasses.

### The consequence that matters

**`CreateRenderId()` is `private`, so the RenderId scheme is fixed and no subclass can change it.** `BannerThumbnailCreationBaseData.cs:28` — `private string CreateRenderId()`. It is called exactly once, from the constructor (`:25`). So the three prefixes and the `":"` separator are not negotiable for anyone deriving from this class.

`RenderId` is `{ get; protected set; }` on the base (`ThumbnailCreationData.cs:14`), so a subclass *could* assign it directly — but doing so would produce a key that does not match the scheme the renderer expects, and there is no validation anywhere.

The second consequence is a null hazard at construction time: `CreateRenderId()` dereferences `Banner.BannerCode` (`:35`) with no null check, and the base constructor also passes `""` as the render id to its own base (`:19`). **Constructing this class with a null `Banner` throws a `NullReferenceException` inside the base constructor** — before the derived constructor's body even runs.

## How to use

**How to obtain it.** You cannot instantiate the abstract type. Instantiate one of its two concrete subclasses instead, both of which take exactly the base's six arguments:

- [`BannerThumbnailCreationData`](../BannerThumbnailCreationData) — `BannerThumbnailCreationData.cs:9`
- [`BannerEditorTextureCreationData`](../BannerEditorTextureCreationData) — `BannerEditorTextureCreationData.cs:9`

The shipped call site is `BannerImageTextureProvider`, which builds a `BannerThumbnailCreationData` and hands the two callbacks `OnTextureCreated` / `OnTextureCreationCancelled` straight through (`BannerImageTextureProvider.cs:23`, `:27`).

**A typical use.** Build a request and let the callbacks report the outcome:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class BannerThumbnailRequest
{
    public static BannerThumbnailCreationData Request(Banner banner)
    {
        // Banner must not be null: CreateRenderId() reads Banner.BannerCode
        // (BannerThumbnailCreationBaseData.cs:35) with no guard, and that runs
        // inside the base constructor.
        if (banner == null)
            return null;

        // Six arguments, all forwarded verbatim to the abstract base
        // (BannerThumbnailCreationBaseData.cs:18).
        return new BannerThumbnailCreationData(
            banner,
            setAction: OnTextureReady,
            cancelAction: () => Debug.Print("thumbnail cancelled", 0),
            debugInfo: null,
            isTableauOrNineGrid: false,
            isLarge: false);
    }

    private static void OnTextureReady(Texture texture)
    {
        // SetAction is stored as a public readonly field on the base
        // (ThumbnailCreationData.cs:8); this is how the renderer reports back.
        Debug.Print("thumbnail produced", 0);
    }
}
```

**What to watch out for.** Two traps. First, **a null `Banner` crashes in the constructor**, not in your code — the dereference is at `BannerThumbnailCreationBaseData.cs:35`, reached from `:25`, so the stack trace points at the framework type and not at your call site. Check for null before constructing. Second, **the flags are private-set**: `IsTableauOrNineGrid` and `IsLarge` are `{ get; private set; }` (`BannerThumbnailCreationBaseData.cs:14`, `:16`), so you can only choose them through the constructor. That is deliberate — they select the render pipeline, and letting them change after construction would invalidate the `RenderId` already computed.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Banner` | `public Banner Banner { get; private set; }` at `BannerThumbnailCreationBaseData.cs:10` | The banner this request renders. Assigned in the constructor (`:21`) and **`private set`**, so it is fixed for the object's life. It is dereferenced during construction by `CreateRenderId()` (`:35`), which is why a null banner throws before your constructor body runs. |
| `DebugInfo` | `public BannerDebugInfo DebugInfo { get; private set; }` at `BannerThumbnailCreationBaseData.cs:12` | Debug context passed alongside the request. Assigned at `BannerThumbnailCreationBaseData.cs:22`, `private set`, and **not read anywhere else in this file** — the consumer is the renderer, outside this class. Passing `null` is what the shipped call site does (`BannerImageTextureProvider.cs:23`). |
| `IsTableauOrNineGrid` | `public bool IsTableauOrNineGrid { get; private set; }` at `BannerThumbnailCreationBaseData.cs:14` | Whether to render as a tableau or nine-grid banner rather than a flat thumbnail. Assigned at `BannerThumbnailCreationBaseData.cs:23`, `private set`. It is the outer branch of `CreateRenderId()` (`:31`): when false the prefix is always `"BannerThumbnail"` (`:30`) and `IsLarge` is ignored; when true the prefix becomes `"BannerTableauLarge"` or `"BannerTableauSmall"` (`:33`). |
| `IsLarge` | `public bool IsLarge { get; private set; }` at `BannerThumbnailCreationBaseData.cs:16` | Whether the tableau variant is the large one. Assigned at `BannerThumbnailCreationBaseData.cs:24`, `private set`. **Only consulted when `IsTableauOrNineGrid` is true** (`:31-33`), so setting it alone changes nothing. |
| `BannerThumbnailCreationBaseData(Banner, Action<Texture>, Action, BannerDebugInfo, bool, bool)` | constructor at `BannerThumbnailCreationBaseData.cs:18-26` | Takes all six values, calls `base("", setAction, cancelAction)` (`:19`) — passing an **empty render id**, which is then overwritten — assigns the four fields (`:21-24`), and finally sets `base.RenderId = CreateRenderId();` (`:25`). That last line is why the fields must be assigned *before* it: `CreateRenderId()` reads `IsTableauOrNineGrid` and `IsLarge`. |
| `CreateRenderId()` | `private string CreateRenderId()` at `BannerThumbnailCreationBaseData.cs:28-36` | Builds the deduplication key: `"BannerThumbnail"` (`:30`) unless `IsTableauOrNineGrid`, in which case `"BannerTableauLarge"` or `"BannerTableauSmall"` (`:33`), then `+ ":" + Banner.BannerCode` (`:35`). **`private` and called once**, so the scheme and the separator are fixed for every subclass. |
| `SetAction` / `CancelAction` | `public readonly Action<Texture> SetAction` / `public readonly Action CancelAction`, inherited from [`ThumbnailCreationData`](../ThumbnailCreationData) at `ThumbnailCreationData.cs:8` and `:10` | The completion and cancellation callbacks. Stored as public readonly fields by the base constructor (`ThumbnailCreationData.cs:19-20`), so the renderer can invoke them and your code can read them. **They are `readonly` fields, not events** — so you can read them, but you cannot unsubscribe, and a null `setAction` is a crash waiting for the render to finish. |
| `RenderId` | `public string RenderId { get; protected set; }`, inherited at `ThumbnailCreationData.cs:14` | The deduplication key this class computes. Set once at `BannerThumbnailCreationBaseData.cs:25`. A subclass *can* assign it (it is `protected set`), but nothing validates the format, so a hand-written id will simply not match the renderer's scheme. |
| `IsProcessed` | `public bool IsProcessed { get; internal set; }`, inherited at `ThumbnailCreationData.cs:12` | Whether the render has finished. The setter is `internal`, so **outside this assembly you can read it but never change it** — this is how the renderer marks completion without exposing a public mutator. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A constructor overload without `debugInfo` | **UNRESOLVED — absent in v1.4.5** | `BannerThumbnailCreationBaseData.cs:18` declares exactly one constructor, taking all six parameters. Both concrete subclasses mirror it one-for-one (`BannerThumbnailCreationData.cs:9`, `BannerEditorTextureCreationData.cs:9`). |
| A public `CreateRenderId` or overridable scheme | **UNRESOLVED — does not exist** | `private string CreateRenderId()` (`BannerThumbnailCreationBaseData.cs:28`). Positive evidence: `grep -n 'CreateRenderId' BannerThumbnailCreationBaseData.cs` returns two hits — the definition at `:28` and the single call at `:25`. |
| Any setter on the four properties | **UNRESOLVED — absent in v1.4.5** | All four are `{ get; private set; }` (`BannerThumbnailCreationBaseData.cs:10`, `:12`, `:14`, `:16`), so the render pipeline cannot be re-selected after construction. Positive evidence: `grep -c 'private set' BannerThumbnailCreationBaseData.cs` returns 4. |

## Examples

Build a request with the tableau path, and read back the id it generated:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class TableauRequest
{
    public static BannerThumbnailCreationData RequestLarge(Banner banner)
    {
        if (banner == null)
            return null;   // would throw inside CreateRenderId() at :35

        // isTableauOrNineGrid: true + isLarge: true selects the
        // "BannerTableauLarge" prefix (BannerThumbnailCreationBaseData.cs:33).
        var request = new BannerThumbnailCreationData(
            banner,
            setAction: texture => Debug.Print("tableau ready", 0),
            cancelAction: () => Debug.Print("tableau cancelled", 0),
            debugInfo: null,
            isTableauOrNineGrid: true,
            isLarge: true);

        // RenderId is already computed by the constructor (:25) and matches
        // "BannerTableauLarge:<BannerCode>" (:33 + :35).
        Debug.Print("render id: " + request.RenderId, 0);
        return request;
    }
}
```

Treat the callbacks as fields, and null-check the one you supplied:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class CallbackSafety
{
    public static void Report(BannerThumbnailCreationData request)
    {
        if (request == null)
            return;

        // SetAction and CancelAction are public readonly FIELDS on
        // ThumbnailCreationData (ThumbnailCreationData.cs:8, :10) — you can read
        // them, but you cannot unsubscribe or replace them.
        if (request.SetAction == null)
        {
            Debug.Print("request has no completion callback; render would throw", 0);
        }

        if (request.CancelAction != null)
        {
            request.CancelAction();
        }

        // IsProcessed has an internal setter (ThumbnailCreationData.cs:12), so
        // from mod code this is read-only.
        Debug.Print("processed: " + request.IsProcessed, 0);
    }
}
```

And the flag trap, spelled out:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static class FlagTrap
{
    public static void Showcase(Banner banner)
    {
        // isLarge: true with isTableauOrNineGrid: false has NO effect: the
        // RenderId takes the "BannerThumbnail" branch (line 30) and never
        // consults IsLarge (line 31-33). Both flags are private-set, so this
        // cannot be corrected after construction.
        var thumbnail = new BannerThumbnailCreationData(
            banner, null, null, null,
            isTableauOrNineGrid: false,
            isLarge: true);

        var smallTableau = new BannerThumbnailCreationData(
            banner, null, null, null,
            isTableauOrNineGrid: true,
            isLarge: false);

        Debug.Print("thumbnail id: " + thumbnail.RenderId, 0);
        Debug.Print("small tableau id: " + smallTableau.RenderId, 0);
        // "BannerThumbnail:<code>"  vs  "BannerTableauSmall:<code>"
    }
}
```

## Risks and crash boundaries

- **A null `Banner` throws inside the base constructor.** `CreateRenderId()` reads `Banner.BannerCode` (`BannerThumbnailCreationBaseData.cs:35`), reached from `:25`. Because this happens during construction, the exception surfaces before any derived constructor body runs and the stack trace points at this framework type rather than at your call site. Check for null first.
- **The class is abstract and cannot be instantiated.** `BannerThumbnailCreationBaseData.cs:8`. Use `BannerThumbnailCreationData` (`BannerThumbnailCreationData.cs:9`) or `BannerEditorTextureCreationData` (`BannerEditorTextureCreationData.cs:9`).
- **The RenderId scheme is fixed and private.** `CreateRenderId()` is `private` (`BannerThumbnailCreationBaseData.cs:28`) and runs once at `:25`, so the three prefixes and the `":"` separator cannot be varied by a subclass without abandoning the renderer's expectation.
- **A hand-written `RenderId` is unvalidated.** The inherited setter is `protected` (`ThumbnailCreationData.cs:14`), so a subclass can overwrite it — and nothing checks the format. A wrong id silently fails to dedupe rather than raising.
- **`SetAction` / `CancelAction` are nullable readonly fields, not events.** `ThumbnailCreationData.cs:8` and `:10`. There is no null check at construction or at invocation time, so a request built with a null callback throws when the render completes — much later, and on the renderer's thread. Passing `null` in an example is not something to copy.
- **`IsLarge` is ignored unless `IsTableauOrNineGrid` is true.** `BannerThumbnailCreationBaseData.cs:31-33`. And neither flag can be changed afterwards, because both are `private set` (`:14`, `:16`).
- **`DebugInfo` is stored but never used here.** `BannerThumbnailCreationBaseData.cs:12`. A wrong debug context produces no local error; the consumer is outside this class.
- **`IsProcessed` has an `internal` setter.** `ThumbnailCreationData.cs:12`. Reading is fine; setting it from a mod is a compile error, which is the correct outcome.
- **Not a save participant in the game-save sense.** It holds no `[Serializable]` state; it is a transient render request, and a pending one is lost on save or scene change.

## Cross-Version Notes

The v1.4.5 file is 37 lines under the `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/` layout — note this source tree is `Modules.Native`, not `bin/`. The same file name appears in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same abstract shape, the same four private-set properties, and the same three-prefix RenderId scheme. That scheme is the part to rely on: it is a stable string contract shared with the renderer, and `"BannerThumbnail"`, `"BannerTableauSmall"` and `"BannerTableauLarge"` are the values the renderer will look for. What is version-sensitive is the **constructor arity** — it is currently six parameters including `BannerDebugInfo`, and that is the shape most likely to widen (an extra debug or quality knob is a natural addition), so do not assume six is version-independent. The `CreateRenderId` privateness is a managed-side decision with no native symbol protecting it, but changing it would change the string format, so treat it as stable. **VERIFIED MEASURED for v1.4.5** (37 lines, 4 properties, 1 constructor, 1 private method; every cited line number checked with `sed -n`); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`ThumbnailCreationData`](../ThumbnailCreationData), which supplies `SetAction` (`ThumbnailCreationData.cs:8`), `CancelAction` (`:10`), `IsProcessed` (`:12`) and `RenderId` (`:14`).
- Concrete subclasses to instantiate: [`BannerThumbnailCreationData`](../BannerThumbnailCreationData) (`BannerThumbnailCreationData.cs:9`) and [`BannerEditorTextureCreationData`](../BannerEditorTextureCreationData) (`BannerEditorTextureCreationData.cs:9`).
- Shipped call site: `BannerImageTextureProvider` in `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI`, constructing a `BannerThumbnailCreationData` at `BannerImageTextureProvider.cs:23` and `:27` — described here rather than linked, because it has no page in this slice.
- The banner being rendered: [`Banner`](../../core-extra/Banner), whose `BannerCode` supplies the id suffix read at `BannerThumbnailCreationBaseData.cs:35`.
- The render queue this request feeds: the tableau system reached through [`BannerTableauWidget`](../BannerTableauWidget) — described here rather than linked in detail, because the queue itself has no page in this slice.
- Bucket index: [mission-ext API index](../)