---
title: "HotKeyManager"
description: "The process-wide registry of keybinding categories: mods register a GameKeyContext, the user-facing string id is resolved through it, and every rebind is written back to an XML file under the config path. Persisted asynchronously from Tick(), so a crash between the edit and the next frame loses the change."
---
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem  
**Module:** TaleWorlds.InputSystem  
**Type:** `public static class HotKeyManager`  
**Base:** none  
**File:** `TaleWorlds.InputSystem/HotKeyManager.cs`

## Overview

`HotKeyManager` is the global keybinding registry. The pattern the game uses is: each screen or feature owns a `GameKeyContext` subclass holding an ordered `MBList<GameKey>` plus id-keyed dictionaries of `HotKey` and `GameAxisKey` entries; the context is handed to `HotKeyManager.RegisterInitialContexts` (or `RegisterContext` for mods that come up later), and from then on the feature never touches `GameKey` objects directly — it calls `HotKeyManager.GetHotKeyId(category, hotKeyId)` and puts the returned *user-visible string* into a `TextObject` / localization call. That indirection is the whole point: when the player rebinds a key in the options screen, the same string the feature is already holding changes meaning without the feature being reloaded.

Persistence is a lazy, tick-driven async write. `Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)` stores the destination path and the R-down/R-right swap flag. `MarkForSave()` sets a dirty flag; the next `Tick(dt)` calls the private `async void HandleSaveLoad()`, which awaits `LoadAsync()` and `SaveAsync()` and sets `_needsKeybindsChangedEvent` on completion so subscribers of `OnKeybindsChanged` refresh their strings. `SaveAsync` serialises each category into `<HotKeyCategories hotkeyEditEnabled=... version="5.1">` and — importantly — re-imports any category from the previously loaded document that the current run has *not* registered, so a disabled module's bindings survive round-trips.

## Mental Model

Treat it as **"a string factory in front of a mutable key table, backed by an XML file that is written lazily"**:

- **Registration happens once, resolution happens constantly.** `RegisterInitialContexts` *clears* `_categories` first — calling it a second time silently discards everything registered before. `RegisterContext` only adds when the category id is absent, and sets `_needsLoading` so the saved document gets re-read.
- **Typical call order:** `ViewSubModule` runs `HotKeyManager.Initialize(...)` then `RegisterInitialContexts(...)` very early; `Tick(dt)` runs once per frame from the same sub-module; a mod that needs its own category calls `RegisterContext(myContext)` from its own `SubModule` startup and then waits for `OnKeybindsChanged` before the first frame that shows a localized string.
- **Common misuse trap — registering after the first `Tick`.** `_needsLoading` and `_needsSaving` are only serviced inside `Tick`. Register a context and never tick (or read the string in the same frame before a tick happens) and you will see the *default* binding, or an empty string if the document has not been read yet.
- **Common misuse trap — unregistered ids do not throw.** `GetHotKeyId(string, string)` logs `Debug.FailedAssert` and returns `""`; `GetHotKeyId(string, int)` returns `"invalid"`. `GetCategory(name)` and the `GameKeyContext.GetHotKeyId` overloads index dictionaries directly and *do* throw. A typo'd hotkey id therefore shows up as a blank label in-game, not as an exception — easy to miss in QA.
- **Common misuse trap — `GameKeyContextType` decides serialization, not you.** `RegisterInitialContexts` automatically passes `ignoreSerialize: context.Type == AuxiliaryNotSerialized`. A context typed `AuxiliaryNotSerialized` therefore never reaches the XML; `Reset()` still restores it to defaults in memory. Choose the type deliberately.
- **The document has a version attribute.** `_versionOfHotkeys` is `5.1f` and is written on every save; a loaded document with a different version sets `_notifyDocumentVersionDifferent`, which `ShouldNotifyDocumentVersionDifferent()` returns exactly once (it clears the flag on read).

## When to Use / When NOT to Use

**Use it when:**
- Your screen has a keybinding the player should be able to rebind. Derive a `GameKeyContext`, register it, and only ever reference keys through `GetHotKeyId`.
- You want to react to a rebind: subscribe to `HotKeyManager.OnKeybindsChanged` and re-resolve your strings.
- You are adding a category from a mod that loads after the base contexts.

**Do NOT use it when:**
- You need a key that must not be rebindable (movement in a locked camera, debug keys). Use `InputManager`/`InputKey` directly — a rebindable `HotKey` in a hot path will surprise you.
- You are reading keys inside a mission `MissionBehavior` tick. Resolution is cheap, but the *string* you cached becomes stale the moment the player rebinds; re-resolve on `OnKeybindsChanged` instead of caching across frames.
- You want to detect a specific key press. That is `InputManager.IsKeyPressed` / the `GameKey` polling API, not the manager.

## Dependencies

- [GameKeyContext](../GameKeyContext) — the abstract per-feature category (`GameKeyCategoryId`, `RegisteredGameKeys`, `RegisteredHotKeys`, `RegisteredGameAxisKeys`, `GameKeyContextType`) you subclass and register.
- [GameKey](../GameKey) — one index-addressed binding inside a context; its `StringId`, `KeyboardKey`, `ControllerKey` and defaults are what `Reset()` restores.
- [HotKey](../HotKey) — one id-keyed binding (possibly modifier-composed, with a list of keys) inside a context.
- [MBSubModuleBase](../../core/MBSubModuleBase) — the `SubModule` hook where a mod registers its context; base-game contexts are registered from the view sub-module at the same stage.
- [CampaignBehaviorBase](../CampaignBehaviorBase) — the usual campaign-side lifetime owner for a handler that must keep working after a screen is torn down.

## Key members

### `public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)`

Stores the config file path and pushes the R-down/R-right swap flag into `GameKeyContext` (a static there). Called exactly once from the view sub-module. Calling it later does **not** trigger a load by itself — the first `Tick` does.

### `public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts)`

Clears `_categories`, then registers each context with `ignoreSerialize = (context.Type == GameKeyContextType.AuxiliaryNotSerialized)`.
- **Return value:** none.
- **Side effect:** sets `_needsLoading`, so the next `Tick` reads the XML document and applies stored bindings on top of the registered defaults.
- **Trap:** this is a *reset*, not an append.

### `public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false)`

Adds the context if its `GameKeyCategoryId` is not already present, adds the id to `_serializeIgnoredCategories` when `ignoreSerialize` is set, and sets `_needsLoading`. Registration of an already-present category is a no-op (no duplicate, no overwrite).

### `public static string GetHotKeyId(string categoryName, string hotKeyId)`

Resolves through `_categories[categoryName].GetHotKeyId(hotKeyId)`. On a missing category it calls `Debug.FailedAssert` and returns `""`; on a missing hotkey id the context logs and returns `""` as well.
- **Return semantics:** a *localizable display string* (possibly `"None"`), not a key code. Put it straight into a `TextObject`.

### `public static string GetHotKeyId(string categoryName, int gameKeyId)`

The index-based overload; returns `"invalid"` for a missing category and delegates to `GameKeyContext.GetHotKeyId(int)` otherwise, which indexes `_registeredGameKeys[gameKeyId]`.

### `public static GameKeyContext GetCategory(string categoryName)`

Direct dictionary index — **throws `KeyNotFoundException`** for an unknown category. Use it when you need the context object itself (to enumerate registered keys), after you have confirmed the category exists.

### `public static void Tick(float dt)`

The pump, called every frame by the view sub-module:
1. If not `_isSaveLoadInProgress`, call the private `async void HandleSaveLoad()`.
2. Once no save/load is in flight and `_needsKeybindsChangedEvent` is set, invoke `OnKeybindsChanged` and clear the flag.

Because `HandleSaveLoad` is `async void`, **the work continues after `Tick` returns**; a subsequent `Tick` simply skips servicing while `_isSaveLoadInProgress` is true. Exceptions inside `LoadAsync` / `SaveAsync` are caught and reported via `Debug.FailedAssert`, then swallowed.

### `public static void MarkForSave()`

Sets `_needsSaving = true`. Nothing is written until the next `Tick`. Call it after mutating a `HotKey.Keys` list or a `GameKey.ChangeKey` in your own options UI.

### `public static void Reset()`

Walks every category and restores each `GameKey` to `DefaultKeyboardKey ?? InputKey.Invalid` (same for controller), each `HotKey.Keys` to a copy of `DefaultKeys`, and each axis key to its default. It changes memory only — call `MarkForSave()` afterwards to persist it.

### `public static bool ShouldNotifyDocumentVersionDifferent()`

Returns the pending "the saved document was written by a different hotkey version" flag and clears it. Call once per frame from the options UI to show the warning.

### `public static event OnKeybindsChangedEvent OnKeybindsChanged`

Fired after a successful save (and after a load) so holders of resolved strings can refresh. Unsubscribe when your screen is torn down — this is a static event and leaks otherwise.

## Examples

### Example 1 — a mod-owned keybinding category

```csharp
using System.Collections.Generic;
using TaleWorlds.InputSystem;

public class MyModKeyContext : GameKeyContext
{
    public const int QuickSaveId = 0;
    public const string ToggleHudId = "toggle_hud";

    public MyModKeyContext()
        : base("MyModKeys", 1, GameKeyContextType.AuxiliarySerializedAndShownInOptions)
    {
        // The positional slot must exist before RegisterGameKey can fill it.
        RegisterGameKey(new GameKey(QuickSaveId, "QuickSave", InputKey.F5));
        RegisterHotKey(new HotKey(ToggleHudId, "MyModGroup",
                                  new List<Key> { new Key(InputKey.F8) }));
    }
}
```

Registered from the sub-module, then consumed only through resolved strings:

```csharp
using TaleWorlds.InputSystem;

public class MyModInput
{
    private readonly MyModKeyContext _context;

    public MyModInput(MyModKeyContext context)
    {
        _context = context;
        HotKeyManager.OnKeybindsChanged += OnKeybindsChanged;
        HotKeyManager.RegisterContext(context);
    }

    private void OnKeybindsChanged()
    {
        // Re-resolve: the player may have rebound while the screen was open.
        ToggleHudLabel = HotKeyManager.GetHotKeyId(_context.GameKeyCategoryId, MyModKeyContext.ToggleHudId);
    }

    public void Detach()
    {
        HotKeyManager.OnKeybindsChanged -= OnKeybindsChanged;   // static event: must unsubscribe
    }
}
```

### Example 2 — rebinding from a custom options entry, then persisting

```csharp
using TaleWorlds.InputSystem;

public class MyOptionsEntry
{
    public void OnPlayerChoseBinding(InputKey newKey)
    {
        GameKeyContext context = HotKeyManager.GetCategory("MyModKeys");
        context.GetGameKey(MyModKeyContext.QuickSaveId).ChangeKey(newKey);

        HotKeyManager.MarkForSave();   // written by the next HotKeyManager.Tick
    }

    public void OnResetToDefaults()
    {
        HotKeyManager.Reset();
        HotKeyManager.MarkForSave();
    }
}
```

## Risks and crash boundaries

- **Save serialization:** this class persists to a **separate XML document** under `EngineFilePaths.ConfigsPath`, not to the campaign save. It writes a `version` attribute (`5.1`) and re-imports categories present in the old document but absent from the current run, so toggling a module off and back on preserves its bindings. It does not, however, delete stale bindings — a hotkey id you removed keeps its old entry in the file forever, and re-adding that id later silently restores the old binding. There is no API to prune it.
- **Cross-domain dependencies:** `HotKeyManager` lives in `TaleWorlds.InputSystem`, which mission and UI code both reference. Safe to call from either, but the *context objects* belong to whoever registered them; resolving a key from a context owned by another screen after that screen is finalized is a use-after-free in spirit even though the dictionary still holds a reference.
- **Load order:** `RegisterInitialContexts` wipes the table. A mod that registers from a `SubModule` hook running *before* the base view sub-module will have its contexts erased. Register from a later hook, or from `OnGameStart` / the first frame. Conversely, a mod that registers before the first `Tick` will not yet see the saved file, so it reads defaults on that frame — defer the first read.
- **ID stability:** category ids and hotkey ids are plain strings with **no validation and no versioning**. Renaming a hotkey id silently orphans the user's binding. `GameKey` ids are positional integers bound to declaration order in the context's constructor — reordering declarations changes which physical key an existing binding maps to, with no warning. Keep both stable across versions.
- **`RegisterContext` silently ignores duplicates.** Two mods claiming the same `GameKeyCategoryId` means the second one's keys are unreachable, with no exception.
- **The save is `async void`.** A crash, alt-tab, or process exit between the rebind and the completion of `SaveAsync` loses the change. `LoadAsync` / `SaveAsync` catch everything and only `Debug.FailedAssert`, so a corrupt or read-only config file degrades silently to defaults.
- **`GetCategory` throws where `GetHotKeyId` returns `""`.** Hardening the display path and forgetting the enumeration path is a common way to get a `KeyNotFoundException` only in the debug build.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the public surface is unchanged — `Initialize`, `RegisterInitialContexts`, `RegisterContext`, both `GetHotKeyId` overloads, `GetCategory`, `GetAllCategories`, `Tick`, `Reset`, `MarkForSave`, `ShouldNotifyDocumentVersionDifferent` and the `OnKeybindsChanged` event all keep their signatures.
- **v1.4.5:** `_versionOfHotkeys` is `5.1f` and is written into the saved document on every save. A document carrying a different value sets the notify flag that `ShouldNotifyDocumentVersionDifferent()` drains.
- **v1.4.5:** there is no `Save()`, `Load()` or `Flush()` public method — persistence is reachable only through `Tick`. Do not write a mod that assumes an immediate write after `MarkForSave`.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](../)
- ↔ Sibling: [GameKeyContext](../GameKeyContext) — the category type you subclass and register
- ↔ Sibling: [GameKey](../GameKey) — one index-addressed binding
- ↔ Sibling: [HotKey](../HotKey) — one id-keyed binding
- ↑ Hook declaration: [MBSubModuleBase](../../core/MBSubModuleBase)
- ↔ Cross-bucket: [CampaignBehaviorBase](../CampaignBehaviorBase) — long-lived owner for a rebind handler
