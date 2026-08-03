---
title: "Banner"
description: "The runtime data object for a faction's coat of arms in Bannerlord: a list of color/icon layers and background serialized into a saveable BannerCode string, held by Clan, Kingdom, and (indirectly) Hero."
---

# Banner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Banner`
**Base:** none — `Banner` does **not** inherit `MBObjectBase`, so it is never registered in `MBObjectManager`
**Source:** `TaleWorlds.Core/Banner.cs`

## Overview

`Banner` is the in-memory, fully renderable description of one coat of arms. It is built from a list of `BannerData` entries: index 0 is always the background (primary color, secondary color, background mesh, rotation), and every entry from index 1 upward is an icon layered on top (icon mesh, color, position, mirror flag, rotation). That list is compressed into a `.`-separated `BannerCode` string, which both drives rendering and gets written to the save game alongside the owning clan or kingdom. `Banner` is a plain data + light-logic object; it is not a 3D entity and it is not an `MBObjectBase`.

## Mental Model

Treat `Banner` as a **serializable "sticker" describing a flag numerically**, not as cloth that flaps in a scene. Its entire state lives in `_bannerDataList` (`MBReadOnlyList<BannerData>`); every mutating method (recolor, add icon, rotate) edits that list and then nulls the cached `_bannerCode` so the code string is regenerated on next access. It is a pure-data object in `TaleWorlds.Core` that does not depend on the campaign system, but its visual creation depends on an active `Game` session.

- **Who creates / who holds:** Almost every `Banner` in the game world is created and held long-term by a `Clan` or a `Kingdom` during initialization (`Clan.Banner`, `Kingdom.Banner`). A `Hero` has no banner of its own — you reach it through `Hero.Clan.Banner`. Mods can also spin up a fresh banner with the static factories (`Banner.CreateRandomClanBanner`, `Banner.CreateOneColoredBannerWithOneIcon`, …).
- **Layer:** Pure data + light logic in `TaleWorlds.Core`. No campaign dependency, but rendering needs `Game` (a running game session).
- **When to use:** You need to read or change a faction's flag colors/icons/background; you need to carry a `BannerCode` around in UI or the save; you need to generate a flag for a new clan/kingdom.
- **When NOT to use:** Do not `new` up a `Banner` just to preview its art — the `BannerVisual` getter calls `Game.Current.CreateBannerVisual(this)`, which misbehaves outside a live game. The "banner pole weapon" items in inventories use `BannerComponent`, a different path, not this runtime object. Also do not assume the `Banner` you got from `Clan.Banner` is a private copy of that clan (see Risks).
- **Depends on:** `BannerManager` (color and icon registry), `BannerData` (storage unit), `Game` (visual creation), `Clan`/`Kingdom` (persistent holding + save).
- **Failure modes:** Deserializing an invalid `BannerCode` yields a `Banner` with an **empty list**, and any later background/color getter throws `IndexOutOfRangeException`. Passing a color value not registered in `BannerManager` makes `ChangePrimaryColor` / `ChangeIconColors` **silently ignore** the call.

## When to Use / When NOT to Use

- **Use `Banner` when** you must read or modify a faction's coat of arms (colors, icons, background), transport a `BannerCode` for UI or save, or generate a flag for a newly founded clan/kingdom.
- **Do NOT use `Banner` for** a pure cosmetic preview by constructing one and reading `BannerVisual` outside a running game — the getter invokes `Game.Current.CreateBannerVisual(this)` and will fail. For item "banner pole" visuals use `BannerComponent` instead.
- **Do NOT mutate a shared banner blindly.** `Clan.Banner` can return the same instance as `Kingdom.Banner` for the ruling clan (see Risks). To safely recolor without side effects, copy via `Deserialize` into a fresh `Banner` first.
- **Prefer the static factories** (`CreateOneColoredBannerWithOneIcon`, `CreateRandomClanBanner`, …) over hand-building a `BannerCode` string yourself.

## How to Obtain a Banner

```csharp
// 1) The player clan's banner (most common entry point)
Banner clanBanner = Clan.PlayerClan.Banner;

// 2) Any kingdom's banner
Banner kingdomBanner = Kingdom.MainKingdom.Banner;

// 3) Through a hero -> clan -> banner
Banner heroBanner = Hero.MainHero.Clan.Banner;

// 4) Generate a fresh single-color, single-icon banner from a faction's colors
uint bg = settlement.MapFaction.Banner.GetFirstIconColor();
uint fg = settlement.MapFaction.Banner.GetPrimaryColor();
Banner newBanner = Banner.CreateOneColoredBannerWithOneIcon(bg, fg, iconMeshId);

// 5) Rebuild a Banner from a BannerCode read from save/config (see Serialization)
string code = Clan.PlayerClan.Banner.BannerCode;
Banner rebuilt = Banner.CreateOneColoredEmptyBanner(0);
rebuilt.Deserialize(code);
```

> Note: `Banner` does **not** inherit `MBObjectBase`, so `MBObjectManager.Instance.GetObject<Banner>(...)` is wrong — there is no such registry entry. To get an existing banner, use the holder properties above (1–3); to make a new one, use the static factories (4).

## Key Properties

| Property | Type | Notes |
|----------|------|-------|
| `BannerCode` | `string` | The flag code serialized from `_bannerDataList`; generated lazily on first access via `Serialize()`. Returns an empty string if the list is empty. |
| `BannerDataList` | `MBReadOnlyList<BannerData>` | Read-only view of the underlying flag list. By convention index 0 is the background, index 1+ are icons. |
| `BannerVisual` | `IBannerVisual` | Lazily created render visual; on first access it calls `Game.Current.CreateBannerVisual(this)`. Must be accessed inside an active game. |

Common constants: `MaxSize = 8000`, `BannerFullSize = 1528`, `BannerEditableAreaSize = 512`, `MaxIconCount = 32`, `BackgroundDataIndex = 0`, `BannerIconDataIndex = 1`.

## Members (Grouped by Theme)

### Constructors

`Banner` has four constructors, but none are saved nor registered with `MBObjectManager`:

- `Banner()` — builds a `Banner` with an **empty list**. Reading any background/color getter on it throws `IndexOutOfRangeException`; you must first populate it via `AddIconData` or `Deserialize`.
- `Banner(Banner other)` / `Banner(Banner other, uint color1, uint color2)` — deep-copies another banner, optionally also recoloring the primary and icon colors with `color1`/`color2`.
- `Banner(string bannerKey)` / `Banner(string bannerKey, uint color1, uint color2)` — constructs by deserializing a `BannerCode` directly; an empty `bannerKey` hits `Debug.FailedAssert` and leaves the banner empty.

Constructors are mostly used on the campaign-init path; mod code should prefer the static factories below to avoid hand-writing a `BannerCode`.

### Color and Background

These members operate on `_bannerDataList[0]` (the background entry). **The list must be non-empty**, or they go out of bounds.

- `int GetPrimaryColorId()` / `int GetSecondaryColorId()` — read the background primary/secondary **color ID** (an index into the `BannerManager` palette). Use only when you want the ID rather than the color value.
- `uint GetPrimaryColor()` / `uint GetSecondaryColor()` — translate the color ID into a `uint` color value via `BannerManager.GetColor(id)`; returns `uint.MaxValue` if the list is empty.
- `void SetPrimaryColorId(int colorId)` / `void SetSecondaryColorId(int colorId)` — write the two background color IDs directly. Passing an ID not valid in `BannerManager` does not error, but renders the wrong color.
- `void ChangePrimaryColor(uint mainColor)` — converts a `uint` color value into an ID via `BannerManager.GetColorId` and writes both the primary and secondary background colors. **If the color is not registered in `BannerManager`, `GetColorId` returns -1 and the call is silently ignored** — the single most common reason "recolor did nothing".
- `void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)` — sets primary and secondary background colors (two-tone flag). Also depends on `BannerManager` registration.
- `int GetBackgroundMeshId()` / `void SetBackgroundMeshId(int meshId)` — read/write the background mesh ID.
- `void RotateBackgroundToRight()` / `void RotateBackgroundToLeft()` — rotate the background by one step (`0.0027777778f`, ~1/360 of a turn), wrapping within 0–1. Handy for a "rotate" button in a banner editor.

```csharp
// Recolor the player clan's flag pure red (uint 0xRRGGBB); the color must be registered in BannerManager
Clan.PlayerClan.Banner.ChangePrimaryColor(0xFF2A2Au);

// Two-tone background: primary red, secondary deep blue
Clan.PlayerClan.Banner.ChangeBackgroundColor(0xFF2A2Au, 0x1A3C8Cu);

// Rotate the background one step
Clan.PlayerClan.Banner.RotateBackgroundToRight();
```

### Icons

Icons are the entries at `_bannerDataList[1..]`. The background (index 0) is not an icon.

- `int GetIconColorId()` / `Vec2 GetIconSize()` — read the first icon's color ID and size; `GetIconColorId` goes out of bounds if the list has fewer than 2 entries.
- `void SetIconColorId(int colorId)` / `void SetIconSize(int newSize)` — rewrite the first icon's color ID and size (`Size` becomes the square `(newSize, newSize)`).
- `int GetIconMeshId()` / `void SetIconMeshId(int meshId)` — read/write the first icon's mesh ID.
- `void ChangeIconColors(uint color)` — set **all** icons' (index ≥ 1) color and secondary-color IDs to one `uint` color value; also depends on `BannerManager` registration and is silently ignored if unregistered.
- `void AddIconData(BannerData iconData)` / `void AddIconData(BannerData iconData, int index)` — append, or insert at a position. Once the list reaches 33 entries (background + up to 32 icons) appends are rejected; the indexed overload also requires `index > 0` and `index <= count`.
- `void RemoveIconDataAtIndex(int index)` — remove an icon; requires `index > 0` and `index < count` (the background can never be removed).
- `void ClearAllIcons()` — keep the background (index 0) and delete every icon.
- `BannerData GetBannerDataAtIndex(int index)` — fetch any entry; returns `null` if it does not exist, and nulls the cached `_bannerCode`.
- `int GetBannerDataListCount()` / `bool IsBannerDataListEmpty()` — list length and empty check.

```csharp
Banner banner = Clan.PlayerClan.Banner;
// Add another icon: the color ID must come from BannerManager (convert via GetColorId)
int colorId = BannerManager.GetColorId(0xFFD700u);
if (colorId >= 0)
{
    BannerData icon = new BannerData(
        iconMeshId, colorId, colorId,
        new Vec2(512f, 512f), new Vec2(764f, 764f), false, false, 0f);
    banner.AddIconData(icon);
}

// Recolor all icons gold
banner.ChangeIconColors(0xFFD700u);

// Keep only the background, drop every icon
banner.ClearAllIcons();
```

### Serialization

A `Banner`'s persistent form is the `BannerCode` string. On save, `Clan` / `Kingdom` write their held `Banner` to disk (the underlying `_bannerDataList`, marked `[SaveableField(1)]`).

- `string Serialize()` — regenerates the flag code via `GetBannerCodeFromBannerDataList(_bannerDataList)`. The `BannerCode` property lazily calls this.
- `void Deserialize(string message)` — rebuilds from a flag code: clears the cached visual, clears the list, then parses via `TryGetBannerDataFromCode`. **If `message` is invalid, parsing fails and the list is cleared into an empty list** — after which any background/color getter throws out of bounds. Always validate with `IsValidBannerCode` before deserializing user input.
- `static bool IsValidBannerCode(string bannerCode)` — returns `false` for an empty string, otherwise delegates to `TryGetBannerDataFromCode`.
- `static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)` — the real parser; splits the string into groups of 10 fields. Any field that fails to parse makes it return `false` and clears the output; more than 32 entries are truncated to the first 32.

```csharp
string code = Clan.PlayerClan.Banner.BannerCode;
if (Banner.IsValidBannerCode(code))
{
    Banner copy = Banner.CreateOneColoredEmptyBanner(0);
    copy.Deserialize(code); // rebuild from a validated code to avoid empty-list crashes
    // copy now matches the source flag's look; recolor freely without touching the original
    copy.ChangePrimaryColor(0x00AEEFu);
}
```

### Static Factories

These are the most common mod entry points; they return a brand-new `Banner` without needing an existing instance:

- `static Banner CreateRandomClanBanner(int seed = -1)` — a random banner forced into a "centered single icon" layout, good as a default clan flag. `seed = -1` means a random seed.
- `static Banner CreateRandomBanner()` — a fully random layout (random pick of single / mirrored-pair / diagonal / horizontal / vertical / four-square).
- `static Banner CreateOneColoredEmptyBanner(int colorIndex)` — a single-color background with no icons; `colorIndex` is a `BannerManager` color ID.
- `static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)` — single-color background plus one centered icon; `backgroundColor`/`iconColor` are `uint` values (converted via `BannerManager.GetColorId`), and `iconMeshId = -1` picks a random icon. The preferred choice when founding a clan/kingdom.
- `static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)` — compress a set of `BannerData` straight into a flag code, for building codes at the pure-data layer without a `Banner` instance.

```csharp
// Make a flag for a new clan: background from the culture's primary color, icon from that culture's mesh
uint bg = cultureBanner.GetPrimaryColor();
Banner clanBanner = Banner.CreateOneColoredBannerWithOneIcon(bg, 0xFFFFFFFFu, newClanIconId);
clanToFound.Banner = clanBanner;
```

### Visual

- `void SetBannerVisual(IBannerVisual visual)` — directly replace the cached render visual. Normally the game creates it automatically inside the `BannerVisual` getter, so you rarely call this; use it only if you hold a custom `IBannerVisual` implementation you want to substitute.

## Risks

1. **Empty-list out-of-bounds.** `new Banner()` produces a `Banner` whose `_bannerDataList` is empty. Any `GetPrimaryColorId`, `GetBackgroundMeshId`, `GetIconColorId`, `GetIconSize`, … throws `IndexOutOfRangeException`. Always `AddIconData` or `Deserialize` first, or use a factory.
2. **Invalid `BannerCode` deserialization.** `Deserialize` does not throw on a bad code — it clears the list, leaving a "has a code string but empty inside" banner whose later getters crash. `Clan`/`Kingdom` fall back to `CreateRandomClanBanner` when an XML node is missing, but before manually `Deserialize`-ing user input, always call `IsValidBannerCode` first.
3. **Silently ignored colors.** `ChangePrimaryColor` / `ChangeBackgroundColor` / `ChangeIconColors` depend on `BannerManager.GetColorId`. An unregistered color value makes the call return immediately and the flag "looks unchanged". When coloring dynamically, first confirm the color comes from the `BannerManager` palette (`BannerManager.GetColorId(x) >= 0`).
4. **Ruling clan shares the kingdom's banner reference.** When a clan is the ruling clan of its kingdom, its `Clan.Banner` getter returns the *same object instance* as `Kingdom.Banner`. Recoloring `clan.Banner` then also recolors the entire kingdom's flag. `Clan.ClanOriginalBanner` gives you that clan's own copy (only when `_banner` is non-null). Before swapping a clan's flag, confirm it isn't the ruling clan, or explicitly assign `clan.Banner = newBanner` to replace the inherited reference.
5. **`BannerVisual` needs an active game.** The `BannerVisual` getter calls `Game.Current.CreateBannerVisual(this)`. Accessing it outside a live campaign/mission context (headless tools, early menu) may return null or fail. Pure data work (read/write `BannerCode`, recolor) does not need it.
6. **`Banner` is not in `MBObjectManager`.** It is a plain `public class` with no `StringId` and no `MBObjectBase` base. Do not use `MBObjectManager.Instance.GetObject<Banner>` — there is no such entry and the lookup will fail at runtime.

## Dependencies

**Upstream (what this object depends on)**

- [Game](../Game/) — provides `CreateBannerVisual`, turning data into a displayable visual.
- [BannerManager](../) — the color palette and icon/background mesh registry; every color ID is resolved through it.
- [BannerData](../) — a single flag-data record (mesh, color ID, position, rotation, mirror).
- [IBannerVisual](../) — the banner render interface that `Game` instantiates.

**Downstream (who holds / uses this object)**

- [Clan](../../campaign/Clan/) — the clan banner, stored on `Clan.Banner` and saved with the clan.
- [Kingdom](../../campaign/Kingdom/) — the kingdom banner, stored on `Kingdom.Banner`.
- [Hero](../../campaign/Hero/) — heroes have no banner of their own; reached via `Hero.Clan.Banner`.
- [Campaign](../../campaign/Campaign/) — the campaign system is where clans/kingdoms (and thus their banners) are created and persisted.
- [BannerComponent](../) — the item "banner pole weapon" component; a separate path from this runtime `Banner`.
- [BannerImageIdentifier](../) — a banner image identifier (e.g. used to build from `TargetKingdom.Banner` in barter UI).

## Example

### Example 1: Recolor the player clan's flag (without accidentally recoloring the kingdom flag)

```csharp
// Get the player clan's banner; if the player is the ruling clan, this is the SAME reference as the kingdom banner
Banner clanBanner = Clan.PlayerClan.Banner;
if (Clan.PlayerClan == Clan.PlayerClan.Kingdom.RulingClan)
{
    // Ruling clan: assign an independent new instance to override the inheritance, so recoloring won't bleed into the kingdom flag
    clanBanner = Banner.CreateOneColoredBannerWithOneIcon(
        Clan.PlayerClan.Banner.GetPrimaryColor(), 0xFFFFFFFFu, -1);
    Clan.PlayerClan.Banner = clanBanner;
}
clanBanner.ChangePrimaryColor(0xFF2A2Au);
```

### Example 2: Generate and assign a flag for a newly founded clan

```csharp
uint bg = settlement.MapFaction.Banner.GetPrimaryColor();
Banner newClanBanner = Banner.CreateOneColoredBannerWithOneIcon(bg, 0xFFFFFFFFu, clanIconMeshId);
clanToFound.Banner = newClanBanner;
InformationManager.DisplayMessage(new InformationMessage("New clan banner generated"));
```

### Example 3: Validate and copy a kingdom banner's BannerCode

```csharp
string code = Kingdom.MainKingdom.Banner.BannerCode;
if (Banner.IsValidBannerCode(code))
{
    Banner snapshot = Banner.CreateOneColoredEmptyBanner(0);
    snapshot.Deserialize(code);
    // snapshot matches the kingdom flag's look; recolor it independently without touching the original
    snapshot.ChangeIconColors(0xFFD700u);
}
```

## See Also

- ↑ Parent: [core-extra index](../)
- ↔ Siblings with EN pages: [Game](../Game/), [InformationManager](../InformationManager/), [ViewModel](../ViewModel/)
- Related types without dedicated EN pages (see bucket): [BannerManager](../), [BannerData](../), [IBannerVisual](../), [BannerComponent](../), [BannerImageIdentifier](../)
- Cross-bucket holders: [Clan](../../campaign/Clan/), [Kingdom](../../campaign/Kingdom/), [Hero](../../campaign/Hero/), [Campaign](../../campaign/Campaign/)
