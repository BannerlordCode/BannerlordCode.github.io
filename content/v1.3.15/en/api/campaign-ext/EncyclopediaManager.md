---
title: "EncyclopediaManager"
description: "The reflection-driven page registry behind the in-game encyclopedia: register EncyclopediaPage subclasses by attribute and route deep links."
---
# EncyclopediaManager

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** none (plain class, not a `GameModel`)
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## Overview

`EncyclopediaManager` is the object that decides **which encyclopedia page class renders a given model type**, and that routes in-UI encyclopedia links such as `Hero-Papurion` or `Clan-Sepheron`. It does this by reflection: `CreateEncyclopediaPages()` walks every assembly in the current `AppDomain` that references the campaign assembly, collects all types assignable to [EncyclopediaPage](../EncyclopediaPage/), activates each one with a parameterless constructor, and files it in a `Dictionary<Type, EncyclopediaPage>` keyed by the target types declared in its `[EncyclopediaModel]` or `[OverrideEncyclopediaModel]` attribute. `[OverrideEncyclopediaModel]` pages are registered first and win; `[EncyclopediaModel]` pages only fill keys that are still free.

It also owns the link side: `SetLinkCallback(Action<string, object>)` installs the delegate the encyclopedia UI calls, and `GoToLink(string pageType, string stringID)` resolves an identifier to a page, validates the item via `IsValidEncyclopediaItem`, and hands `(pageType, item)` to that callback. Three string constants — `HOME_ID`, `LIST_PAGE_ID`, `LAST_PAGE_ID` — are the reserved pseudo page types. Reached at runtime through `Campaign.Current.EncyclopediaManager`.

## Mental Model

Think of it as **"a `Type -> EncyclopediaPage` routing table built once by reflection, plus a link dispatcher"**:

- **Typical call order for a mod that adds an encyclopedia page.** Write a subclass of [EncyclopediaPage](../EncyclopediaPage/), decorate it with `[EncyclopediaModel(PageTargetTypes = new[] { typeof(MyItem) })]`, make sure it has a **public parameterless constructor**, and ship the assembly. You do **not** call `CreateEncyclopediaPages()` yourself — the campaign bootstrap calls it once. Later, at runtime, `GetPageOf(typeof(MyItem))` returns your page instance.
- **Two attributes, different precedence.** `[OverrideEncyclopediaModel]` is processed in a first pass and is allowed to `Add` unconditionally, so two mods overriding the same target type will throw on the duplicate key. `[EncyclopediaModel]` runs in a second pass and checks `!_pages.ContainsKey(type4)`, so a plain model never displaces an already-registered page. Use `Override` only when you truly mean to replace the game's own page.
- **Discovery is limited to assemblies that reference the campaign assembly.** The filter walks `AppDomain.CurrentDomain.GetAssemblies()` and keeps an assembly only if one of its `GetReferencedAssemblies()` entries equals the assembly of `EncyclopediaModelBase`. An assembly loaded dynamically *after* page creation, or one that references the campaign assembly only transitively through a differently-named facade, is invisible.
- **It is UI-state, not save-state.** `_pages`, `_executeLink` and `ViewDataTracker` are all plain fields with no `[SaveableField]`. Nothing here is persisted; the manager is rebuilt from scratch on every campaign load. Never put gameplay state on it.
- **Trap: `GetPageOf` and `GetIdentifier` are unguarded dictionary lookups.** Both do `this._pages[type]`, so an unregistered type throws `KeyNotFoundException`. There is no "try" variant — use `GetEncyclopediaPages()` and match with `HasIdentifier` if you need tolerant lookup.
- **Trap: `GoToLink(string pageType, string stringID)` dereferences before it null-checks.** It calls `encyclopediaPage2.GetObject(pageType, stringID)` *before* testing `encyclopediaPage2 != null`, so an unknown page type is a `NullReferenceException`, not a silent no-op. And when `_executeLink` is null (no UI on screen) it returns immediately — links fired before the encyclopedia screen opens are silently dropped.
- **Trap: `ViewDataTracker` is resolved inside `CreateEncyclopediaPages`.** It is `Campaign.Current.GetCampaignBehavior<IViewDataTracker>()`, i.e. a behavior lookup. If no behavior implements that interface, the property is null and any view-data feature that touches it fails.

### When to Use

**Use `EncyclopediaManager` when:**
- You want the encyclopedia to render your own type (an item, a troop, a custom concept) — implement `EncyclopediaPage` with `[EncyclopediaModel]`.
- You want to replace the game's page for an existing type — implement `EncyclopediaPage` with `[OverrideEncyclopediaModel]`.
- You are writing a custom encyclopedia screen or a "go to page" button and need to resolve a string id into the right page instance.
- You want to enumerate every registered page, for example to build a custom index or a search screen.

**Do NOT use `EncyclopediaManager` when:**
- You want to add a page *during* a campaign. `CreateEncyclopediaPages()` is a single bootstrap pass; re-running it throws away every page instance the UI currently holds, including `ViewDataTracker`.
- You want to deep-link into a page by string id without a UI present. `GoToLink` is a no-op when `_executeLink` is null — install a callback with `SetLinkCallback` first if you need the resolution yourself.
- You want to know whether a type *has* a page. `GetPageOf` throws on a miss; check `GetEncyclopediaPages()` for `HasIdentifier` / match `GetPageOf` inside a `ContainsKey`-style guard instead.
- You want to store anything across a save. Nothing in this class is serialized; use `SyncData` on your own [CampaignBehaviorBase](../CampaignBehaviorBase/).
- You want campaign state. It is a routing table for the encyclopedia UI, nothing more.

## Dependencies

- [EncyclopediaPage](../EncyclopediaPage/) — the abstract base every registered page must derive from; supplies `GetIdentifier`, `HasIdentifier`, `GetObject`, `IsValidEncyclopediaItem`.
- [EncyclopediaModelBase](../EncyclopediaModelBase/) — its assembly is the reference filter in `CreateEncyclopediaPages`, so it defines what "a visible assembly" means.
- [OverrideEncyclopediaModel](../OverrideEncyclopediaModel/) — the first-pass attribute whose pages win and can collide.
- [IViewDataTracker](../IViewDataTracker/) — the campaign behavior interface resolved into `ViewDataTracker` when pages are created.
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — the base of the behavior `GetCampaignBehavior<IViewDataTracker>()` looks for.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.EncyclopediaManager` is the only public handle, and `GetCampaignBehavior<T>()` lives on it.
- [MBObjectManager](../MBObjectManager/) — the object-system layer `GetObject(pageType, stringID)` resolves identifiers against.
- [Hero](../../campaign/Hero/) and [Clan](../../campaign/Clan/) — the canonical built-in page targets, and the usual targets of a custom deep link.
- [CharacterObject](../../campaign/CharacterObject/) — another built-in page target, useful as a reference implementation for a troop page.

## Key members

#### `public void CreateEncyclopediaPages()`

Builds the whole `Type -> EncyclopediaPage` dictionary and resolves `ViewDataTracker`. This is the constructor you never call and the bootstrap you never hook.
- **Algorithm:** `_pages = new Dictionary<Type, EncyclopediaPage>()`; `ViewDataTracker = Campaign.Current.GetCampaignBehavior<IViewDataTracker>()`; collect the `EncyclopediaModelBase` assembly plus every `AppDomain` assembly referencing it; `GetTypesSafe(null)` over each into one type list; **first pass** — for each type assignable to `EncyclopediaPage`, read its `[OverrideEncyclopediaModel]` attributes, `Activator.CreateInstance(type)` once per attribute and `_pages.Add` each of `PageTargetTypes`; **second pass** — same for `[EncyclopediaModel]`, but only `Add` when `!_pages.ContainsKey(...)`.
- **Return value:** none. **Side effects:** replaces `_pages` entirely and overwrites `ViewDataTracker`.
- **Trap:** the first pass calls `_pages.Add` with no duplicate guard, so two assemblies overriding the same target type throw `ArgumentException` during campaign load — a hard failure, not a warning.
- **Trap:** `Activator.CreateInstance` requires a public parameterless constructor on every page class. A page with constructor arguments throws `MissingMethodException` here, before the encyclopedia is ever shown.
- **Trap:** `GetTypesSafe` swallows load errors per type, but an assembly whose types fail to load silently contributes no pages — a missing page with no exception.
- **Trap:** calling it a second time mid-campaign discards every page instance and re-runs `Activator` for all of them, so any view-data state the UI cached is lost.

#### `public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()`

`Enumerable.Distinct(this._pages.Values)` — every distinct page instance currently registered.
- **Return-value semantics:** a lazy, de-duplicated projection over the dictionary values. Empty before `CreateEncyclopediaPages()` has run, and a fresh enumeration each time.
- **Trap:** it returns page *instances*, not types. Because several types can map to one page instance, use this to enumerate pages rather than to answer "which types are covered".

#### `public EncyclopediaPage GetPageOf(Type type)`

Unguarded dictionary lookup: `this._pages[type]`.
- **Return-value semantics:** the page instance registered for `type`, or a thrown `KeyNotFoundException` if `type` is not a registered target. There is no null return path.
- **Use:** the fast path once you know a type is covered.
- **Trap:** `Dictionary<Type, ...>` lookup is by exact runtime type. Passing an interface or a base class fails even when a derived class is registered — pass the concrete `MBObjectBase` subclass.

#### `public string GetIdentifier(Type type)`

`this._pages[type].GetIdentifier(type)` — the dictionary lookup plus the page's own identifier rule.
- **Return-value semantics:** the identifier string the page uses for `type`, or `KeyNotFoundException` when the type is unregistered, or whatever the page's own `GetIdentifier` throws.
- **Use:** to compute the string you would pass as `stringID` to `GoToLink`. A page normally returns `type.Name`, so the id is the type name of the model, not a save id.

#### `public void GoToLink(string pageType, string stringID)`

Resolves a `(pageType, stringID)` pair and, if valid, fires the installed link callback.
- **Algorithm:** return if `_executeLink == null` or `pageType` is null/empty; if `pageType` is `HOME_ID` or `LAST_PAGE_ID` fire `(pageType, null)`; if `pageType == LIST_PAGE_ID` find the first page with `HasIdentifier(stringID)` and fire `(pageType, thatPage)`; otherwise find the first page with `HasIdentifier(pageType)`, call `GetObject(pageType, stringID)` on it, and fire `(pageType, item)` only when `IsValidEncyclopediaItem(item)`.
- **Return value:** none. The whole method is a no-op unless a callback has been installed.
- **Trap:** `GetObject` is called before the null check on the page, so an unknown `pageType` throws `NullReferenceException`. `Debug.FailedAssert` is not used on this path.
- **Trap:** `pageType` must be the **identifier of the page**, not the type name. Pages that override `GetIdentifier` change this, so a hard-coded `"Hero"` string is only correct for the default page.
- **Trap:** the search uses `FirstOrDefault` over `GetEncyclopediaPages()`, so with several pages sharing an identifier the winner depends on dictionary enumeration order — not something to rely on.

#### `public void GoToLink(string link)`

The single-string overload used by `TextObject` hyperlinks: splits at the **first** `-` and forwards to the two-argument overload.
- **Return value:** none. If `link` contains no `-` at index > 0, it hits `Debug.FailedAssert` and does nothing else — a development assert, a no-op in release.
- **Trap:** it splits on the first `-` only. A `stringID` containing `-` is passed through intact (correct), but a link with the separator at index 0 is rejected as malformed.
- **Trap:** in a shipped build a malformed link is silently ignored, so a UI wired to a bad link looks like a dead button rather than an error.

#### `public void SetLinkCallback(Action<string, object> ExecuteLink)`

Installs (or replaces) the delegate the encyclopedia UI calls. `null` clears it, which makes every `GoToLink` a no-op.
- **Side effect:** only one callback is held. Two competing encyclopedia screens will fight over it; the last `SetLinkCallback` wins.
- **Use:** call it from your screen's activation path, and clear it on close if your screen can be torn down while another is being built.

#### `public IViewDataTracker ViewDataTracker { get; private set; }`

The campaign behavior resolved during `CreateEncyclopediaPages`. Null when no behavior implements `IViewDataTracker`.
- **Trap:** the property has a private setter; you cannot inject a replacement. Null-check before use in any custom page that relies on view data.

#### `public const string HOME_ID / LIST_PAGE_ID / LAST_PAGE_ID`

The three reserved pseudo page types, with values `"Home"`, `"ListPage"` and `"LastPage"`. They are `const`, so use them rather than string literals so a future rename stays source-compatible.

## Examples

### Example 1 — add a custom encyclopedia page via attribute discovery

```csharp
using TaleWorlds.CampaignSystem.Encyclopedia;

namespace MyMod
{
    [EncyclopediaModel(PageTargetTypes = new[] { typeof(MyItem) })]
    public class MyItemPage : EncyclopediaPage
    {
        // CreateEncyclopediaPages() calls Activator.CreateInstance, so a public
        // parameterless constructor is mandatory.
        public MyItemPage() { }

        public override bool IsValidEncyclopediaItem(MBObjectBase item)
        {
            return item is MyItem;
        }

        public override MBObjectBase GetObject(string pageType, string stringID)
        {
            return MBObjectManager.Instance.GetObject<MyItem>(stringID);
        }

        public override string GetIdentifier(Type type)
        {
            return "MyItem";
        }

        public override bool HasIdentifier(string pageType)
        {
            return pageType == "MyItem";
        }
    }
}
```

### Example 2 — look a page up safely

```csharp
public EncyclopediaPage FindPage(Type modelType)
{
    var manager = Campaign.Current.EncyclopediaManager;
    // GetPageOf throws KeyNotFoundException on a miss, so scan instead when unsure.
    foreach (var page in manager.GetEncyclopediaPages())
    {
        if (page.HasIdentifier(modelType.Name))
        {
            return page;
        }
    }
    return null;
}
```

### Example 3 — drive navigation from a custom menu

```csharp
public class EncyclopediaLinkButton
{
    public EncyclopediaLinkButton()
    {
        // Install the callback before any GoToLink call, or the link is dropped.
        Campaign.Current.EncyclopediaManager.SetLinkCallback((pageType, item) =>
        {
            Debug.Print($"Encyclopedia requested page={pageType} item={item}");
        });
    }

    public bool OpenHeroPage(Hero hero)
    {
        if (hero == null)
        {
            return false;
        }
        var manager = Campaign.Current.EncyclopediaManager;
        string pageType = manager.GetIdentifier(typeof(Hero));
        manager.GoToLink(pageType, hero.StringId);
        return true;
    }
}
```

### Example 4 — deep link straight from a TextObject hyperlink

```csharp
public void OnHyperlinkClicked(TextObject text)
{
    var link = text.GetEntireText(); // e.g. "Hero-Papurion"
    // Splits at the FIRST '-', then resolves page + id; malformed links assert.
    Campaign.Current.EncyclopediaManager.GoToLink(link);
}
```

## Risks and crash boundaries

- **Crash boundary 1 — duplicate override target types.** The `[OverrideEncyclopediaModel]` pass uses `Dictionary.Add` without a guard. Two assemblies that both declare a page for `typeof(Hero)` throw `ArgumentException` inside `CreateEncyclopediaPages()` during campaign load. The game does not start; there is no catch anywhere on that path. Coordinate with other mods or use `[EncyclopediaModel]`.
- **Crash boundary 2 — page classes without a public parameterless constructor.** `Activator.CreateInstance(type)` throws `MissingMethodException` at bootstrap. Keep a public parameterless ctor even if your real construction happens later.
- **Crash boundary 3 — reflection over every loaded assembly.** `CreateEncyclopediaPages` enumerates `AppDomain.CurrentDomain.GetAssemblies()` and calls `GetTypesSafe` on each referencing assembly. A mod assembly with an unresolvable type dependency is skipped rather than reported, so a page can silently be missing — and if it is decorated with `[OverrideEncyclopediaModel]`, a *duplicate* path is what surfaces instead, which is far harder to diagnose.
- **Assembly visibility is not "is loaded".** Only assemblies that directly reference the `EncyclopediaModelBase` assembly are scanned. A page assembly that gets its campaign reference through another mod's assembly will not be discovered. Reference `TaleWorlds.CampaignSystem` directly from your page assembly.
- **Not save-serialized.** `_pages`, `_executeLink` and `ViewDataTracker` carry no `[SaveableField]`. Nothing you put here survives a save/load, and nothing you put there will be restored — keep gameplay state in a behavior's `SyncData([IDataStore](../IDataStore/))`.
- **Cross-domain dependency.** The class lives in `TaleWorlds.CampaignSystem.Encyclopedia` but reflects over `System.Reflection`, resolves through `Campaign.Current`, and depends on `TaleWorlds.ObjectSystem` (`MBObjectManager`). Any mod assembly providing a page therefore needs references to all three.
- **Load-order dependency.** Pages exist only after `CreateEncyclopediaPages()` has run. A behavior's `RegisterEvents` during campaign bootstrap may run *before* page creation, so calling `GetPageOf` there throws even for vanilla types. Resolve lazily on first UI use.
- **ID stability.** `GetIdentifier` defaults to the model **type name**, so renames break hyperlinks in text. `GoToLink(string link)` then hits `Debug.FailedAssert` and silently does nothing in release builds — a dead button, not an exception. Use the `HOME_ID` / `LIST_PAGE_ID` / `LAST_PAGE_ID` constants and prefer `GetIdentifier` over a literal page-type string.
- **UI coupling.** `GoToLink` writes into whatever screen installed the callback through `SetLinkCallback`. Only one callback exists at a time; two encyclopedia screens alive at once silently steal each other's navigation.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above is the complete public surface of 1.3.15. `ViewDataTracker` is `IViewDataTracker` with a private setter, and the three id constants exist with the values shown.
- **v1.4.x:** the two-pass attribute precedence (`Override` then `Model` with a `ContainsKey` guard) is unchanged. Newer versions add more built-in encyclopedia pages and localization keys, but page registration is still reflection-driven from attributes — no explicit registration API was added.
- **v1.5.x:** expect more `EncyclopediaPage` overrides and a wider built-in page set. The dangerous contract does not change: `[OverrideEncyclopediaModel]` still collides rather than last-wins, and an unresolvable link is still a silent no-op in release. If your mod overrides a vanilla page, re-check it on every upgrade.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [EncyclopediaPage](../EncyclopediaPage/) — the base class you must derive to register a page
- ↔ Sibling: [OverrideEncyclopediaModel](../OverrideEncyclopediaModel/) — the higher-precedence, collision-prone attribute
- ↔ Sibling: [EncyclopediaModelBase](../EncyclopediaModelBase/) — its assembly is the discovery filter
- ↔ Sibling: [IViewDataTracker](../IViewDataTracker/) — the behavior interface resolved into `ViewDataTracker`
- ↔ Sibling: [MBObjectManager](../MBObjectManager/) — resolves string ids into live objects
- ↑ Campaign world: [Campaign](../../campaign/Campaign/) — `Campaign.Current.EncyclopediaManager`
- ↑ Behavior base: [CampaignBehaviorBase](../CampaignBehaviorBase/)
- ↑ Hero: [Hero](../../campaign/Hero/)
- ↑ Clan: [Clan](../../campaign/Clan/)