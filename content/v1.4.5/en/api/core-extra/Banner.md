---
title: "Banner"
description: "The banner value object in v1.4.5: explains the BannerData list, BannerCode, visual cache, the Campaign ownership relationship, and the safe update path."
---
# Banner

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class Banner`  
**Base:** None  
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Banner.cs`

## Overview

`Banner` combines the background and icon `BannerData` into a serializable banner code, and creates visual objects for the Campaign, UI, and engine when needed; what it links together are the banner value, the code cache, and the visual resources — not the item inventory or Clan / Kingdom ownership itself. Callers must therefore respect the data index, resource initialization, and the owner's lifecycle all at once.

## Mental Model

`Banner` is a value object in the Core layer, not an `ItemObject`, and not a Clan or Kingdom itself. Internally it keeps at least the element at index 0 as the background data, and the following elements as icons; `BannerDataList` exposes these elements as a read-only list. `BannerCode` encodes the current list into a dot-separated string, caching / invalidating that string after the list is constructed or modified. `BannerVisual` is created lazily on access by calling `Game.Current.CreateBannerVisual(this)`, and clears the old visual cache on `Deserialize`.

Campaign entities (such as `Hero.ClanBanner`, or a Clan's or Kingdom's `Banner`) hold the banner value; `BannerCampaignBehavior` also handles banner-related items separately from the hero's `BannerItem`. The UI / engine-side `BannerTableau` and `BannerTextureCreator` read the code and create textures. This layering matters: updating the banner data only changes the value object — it does not replace the Campaign owner's events / save semantics, nor should the old visual object keep being used after a Mission or UI is destroyed.

## When to Use and When Not To

### Suitable uses

- Read `Clan.Banner`, `Kingdom.Banner`, or `Hero.MainHero.ClanBanner` for UI, notifications, or texture generation.
- Construct a temporary banner with `CreateRandomBanner`, `CreateOneColoredEmptyBanner`, or a valid code.
- Update a banner value through `ChangePrimaryColor`, `ChangeBackgroundColor`, `ChangeIconColors`, and the icon add / remove methods, then read the new `BannerCode`.

### Unsuitable uses

- Do not treat `Banner` as an item; the banner equipment is `EquipmentElement` / `ItemObject`, and the banner pattern value is a separate chain.
- Do not modify elements of `BannerDataList` directly and then keep using the old `BannerCode` or old `BannerVisual`. Direct element modification may bypass code invalidation and visual refresh.
- Do not use `new Banner()` in place of changing a Clan / Kingdom's Campaign state. Entity ownership, events, and saving must go back to the owner's contract.
- Do not call the visual / color-table-dependent paths before `Game.Current`, `BannerManager`, or the UI layer have been initialized.

## Dependencies

```text
BannerManager + BannerData
             ↓
Banner ── BannerCode / BannerVisual
  ↓                 ↓
Hero / Clan /       BannerTableau / BannerTextureCreator
Kingdom             ↓
  ↓                 UI / Engine visual
Campaign save/events
```

- Upstream: `BannerData` describes mesh, color, size, position, mirror, and rotation; `BannerManager` provides the color / icon resources and valid ids.
- Direct consumers: `Game.Current.CreateBannerVisual` creates an `IBannerVisual`; `BannerTableau`, `BannerTextureCreator` turn it into UI / engine textures.
- Campaign owners: the banner properties of [`Hero`](../../campaign/Hero), [`Clan`](../../campaign/Clan), and [`Kingdom`](../../campaign/Kingdom); do not confuse the banner value with the banner item.
- Related UI: `BannerViewModel` handles editor binding; [`ViewModel`](../ViewModel) and [`GauntletLayer`](../../engine/GauntletLayer) manage the UI lifecycle, but do not replace Campaign saving.

## Key Members and Timing

| Member | Purpose | Timing and side effects |
|--------|---------|--------------------------|
| `BannerDataList` | A read-only list view of the background and icon data. Index 0 is the background, index 1 onward are icons. | The list container being read-only does not mean its elements are immutable; modifying an element directly may leave a stale code. Confirm the count before reading; do not mix up the background / icon indices. |
| `BannerCode` / `Serialize()` | Encodes the current `BannerData` list into a stable string. | `BannerCode` caches the result; the provided modification methods clear the cache. Finish all modifications before using the code for saves / network. |
| `Deserialize(string)` | Clears old data, parses the code, writes the new list, and clears `BannerVisual`. | An empty string or invalid code may yield an empty list; after parsing, do not assume the background and first icon necessarily exist. |
| `BannerVisual` / `SetBannerVisual` | Lazily creates or replaces an `IBannerVisual`. | First access depends on `Game.Current` and the engine visual factory; holding a reference across UI / Mission lifecycles produces stale native resources. |
| `GetPrimaryColor()`, `GetSecondaryColor()`, `GetFirstIconColor()` | Convert a color id to a color value through `BannerManager`. | An empty data set returns `uint.MaxValue`; they cannot replace checking the `BannerDataList` count. |
| `ChangePrimaryColor(uint)`, `ChangeBackgroundColor(uint,uint)`, `ChangeIconColors(uint)` | Map a color value to a valid color id and clear the code cache. | Only colors resolvable by `BannerManager` are updated; on failure the banner keeps its original value. |
| `AddIconData`, `RemoveIconDataAtIndex`, `ClearAllIcons` | Modify the icon set; the background item stays at index 0. | At most background plus 32 icons are kept; index 0 cannot be deleted as an icon. After modifying, re-read the code and refresh consumers. |
| `CreateRandomBanner()`, `CreateRandomClanBanner(int)` | Generate a valid random layout through `BannerManager`. | Depends on `Game.Current` / resource tables; the seeded Clan version suits reproducible tests, but is still not a Campaign ownership change. |
| `IsValidBannerCode`, `TryGetBannerDataFromCode` | Validate or parse an external code. | The code is parsed by fixed field groups; validation passing only means the data is parseable, not that the current resources or visual context are ready. |

## How to Obtain and Update

### Reading a Campaign banner

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

Hero mainHero = Hero.MainHero;
Banner clanBanner = mainHero.ClanBanner;
if (clanBanner != null && Banner.IsValidBannerCode(clanBanner.BannerCode))
{
    string codeForUi = clanBanner.BannerCode;
    int iconCount = clanBanner.GetBannerDataListCount() - 1;
}
```

`Hero.MainHero.ClanBanner` is the real Campaign acquisition path. When reading a Clan's or Kingdom's banner, first obtain the entity, then use its `Banner` property while the entity is still within a valid Campaign lifecycle.

### Construct, validate, and serialize a temporary banner

```csharp
using TaleWorlds.Core;

Banner candidate = Banner.CreateOneColoredBannerWithOneIcon(0xFF202020u, 0xFFFFFFFFu, -1);
string candidateCode = candidate.Serialize();
if (Banner.IsValidBannerCode(candidateCode))
{
    Banner copy = new Banner(candidateCode);
    uint primaryColor = copy.GetPrimaryColor();
}
```

This path only creates a value object. To make a banner a Campaign state of some Clan / Kingdom, you must find the actual assignment / event path provided by that entity, and save it at the appropriate campaign stage; do not treat the temporary copy as a global object to be swapped in directly.

## Risks and Boundaries

- **Index bounds:** methods such as `GetPrimaryColorId` access the background or first icon directly. An empty list, missing icon, or negative index will throw or yield meaningless colors; check `GetBannerDataListCount()` first.
- **Code cache:** `BannerCode` is a cached field. Directly modifying `BannerData` elements does not automatically equal calling the banner's invalidation path, and may desync the save / network string from the on-screen data.
- **Visual lifetime:** `BannerVisual` depends on `Game.Current`, and is used by consumers such as `BannerTableau` / `BannerTextureCreator`. Release the consumers when UI / Mission is destroyed; do not keep an `IBannerVisual` across scenes for a long time.
- **Resource validity:** the maximum icon count is 32; mesh, color, and code fields must be supported by `BannerManager`. An invalid code may be rejected or parsed into an empty list.
- **Ownership and saving:** modifying a `Banner` copy does not trigger the Campaign events of Hero, Clan, or Kingdom, nor does it automatically change the banner item. Persistent modifications must follow the owner's and the save system's lifecycle.
- **Thread / stage:** UI visual creation, `Game.Current`, and resource tables are all game-lifecycle constraints; do not access them from an arbitrary background thread, nor construct visual-dependent objects before the module has finished initializing.

## Cross-Version Notes

This page is based on the v1.4.5 `Banner.cs`, `BannerData.cs`, and call sites. When using codes across versions, check through `IsValidBannerCode` / `TryGetBannerDataFromCode`, and re-confirm the resource ids, maximum-icon rule, and Campaign banner ownership flow.

## See Also

- [↑ Core Extra parent](../)
- [↔ ItemObject](../ItemObject)
- [↔ Equipment](../Equipment)
- [↔ SkillObject](../SkillObject)
- [↔ Campaign: Hero](../../campaign/Hero)
- [↔ Campaign: Clan](../../campaign/Clan)
- [Related: ViewModel](../ViewModel)
- [Related: GauntletLayer](../../engine/GauntletLayer)
