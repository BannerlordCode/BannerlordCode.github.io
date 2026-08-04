---
title: "Banner: Banner Data, Codes, and Visual Boundaries"
description: "The v1.4.5 banner value object, covering BannerData, serialized codes, lazy visuals, Campaign ownership, and safe updates."
---
# Banner

## Metadata

- **Namespace:** `TaleWorlds.Core`
- **Module:** `TaleWorlds.Core`
- **Type:** `public class Banner`
- **Base:** none
- **Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/Banner.cs`

## Responsibility in one sentence

`Banner` combines background and icon `BannerData` into a serializable banner code and creates visual data for Campaign, UI, and engine consumers when requested.

## Mental model

`Banner` is a Core value object, not an `ItemObject` and not a Clan or Kingdom itself. Its internal list uses element 0 for the background and later elements for icons; `BannerDataList` exposes a read-only view of that list. `BannerCode` serializes the current list to a dot-separated string and is cached until the banner's supported mutators invalidate it. `BannerVisual` is lazy: accessing it calls `Game.Current.CreateBannerVisual(this)`, while `Deserialize` clears the old visual cache.

Campaign entities such as `Hero.ClanBanner`, a Clan, or a Kingdom own banner values; `BannerCampaignBehavior` separately handles banner items through a Hero's `BannerItem`. On the UI and engine side, `BannerTableau` and `BannerTextureCreator` consume the code and create textures. Updating a banner value therefore does not replace the Campaign owner's event or save semantics, and an old visual must not survive a destroyed Mission or UI.

## When to use it, and when not to

### Use it when

- Reading `Clan.Banner`, `Kingdom.Banner`, or `Hero.MainHero.ClanBanner` for UI, notifications, or texture generation.
- Creating a temporary banner with `CreateRandomBanner`, `CreateOneColoredEmptyBanner`, or a validated code.
- Updating a banner through `ChangePrimaryColor`, `ChangeBackgroundColor`, `ChangeIconColors`, and the icon collection methods before reading the new `BannerCode`.

### Do not use it when

- Do not treat `Banner` as an item. A banner item is an `EquipmentElement`/`ItemObject` chain; the visual pattern is a separate value chain.
- Do not mutate elements obtained from `BannerDataList` and then continue using an old `BannerCode` or `BannerVisual`. Direct element mutation can bypass code invalidation and visual refresh.
- Do not use `new Banner()` as a replacement for changing a Clan or Kingdom's Campaign state. Ownership, events, and saves belong to the owning entity's contract.
- Do not use paths that require `Game.Current`, `BannerManager`, or visual resources before those systems are initialized.

## Dependency graph

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

- Upstream: `BannerData` describes mesh, colors, size, position, mirroring, and rotation; `BannerManager` supplies supported color and icon IDs.
- Direct consumers: `Game.Current.CreateBannerVisual` creates `IBannerVisual`; `BannerTableau` and `BannerTextureCreator` turn it into UI and engine textures.
- Campaign owners: [`Hero`](../../campaign/Hero), [`Clan`](../../campaign/Clan), and [`Kingdom`](../../campaign/Kingdom) expose banner state. Do not confuse that value with a banner item.
- Related UI: `BannerViewModel` binds the editor; [`ViewModel`](../ViewModel) and [`GauntletLayer`](../../engine/GauntletLayer) own UI lifetime, not Campaign persistence.

## Important members and timing

| Member | Use | Timing and side effects |
|---|---|---|
| `BannerDataList` | Read background and icon data. Index 0 is the background; index 1 and later are icons. | A read-only list does not make its element objects immutable. Check the count and avoid changing elements in place if code/visual state must stay coherent. |
| `BannerCode` / `Serialize()` | Encode the current `BannerData` list as a stable string. | `BannerCode` caches the result; supported mutators clear the cache. Finish all edits before using the code for save or network data. |
| `Deserialize(string)` | Clear old data, parse a code, store the new list, and clear `BannerVisual`. | Empty or invalid input can leave no usable background or icon. Do not assume the first icon exists after parsing. |
| `BannerVisual` / `SetBannerVisual` | Lazily create or replace an `IBannerVisual`. | The first access depends on `Game.Current` and the engine visual factory. Holding the native visual across UI or Mission lifetimes creates stale resources. |
| `GetPrimaryColor()`, `GetSecondaryColor()`, `GetFirstIconColor()` | Convert color IDs through `BannerManager`. | Empty data returns `uint.MaxValue`; still check the data count before treating the result as a color. |
| `ChangePrimaryColor(uint)`, `ChangeBackgroundColor(uint,uint)`, `ChangeIconColors(uint)` | Map color values to supported color IDs and invalidate the code cache. | Unsupported colors leave the banner unchanged. |
| `AddIconData`, `RemoveIconDataAtIndex`, `ClearAllIcons` | Modify the icon collection while preserving the background at index 0. | The limit is a background plus 32 icons; index 0 is not an icon and cannot be removed as one. Re-read the code and refresh consumers after edits. |
| `CreateRandomBanner()`, `CreateRandomClanBanner(int)` | Build a valid random layout through `BannerManager`. | Requires the game and resource tables. A seed makes the Clan variant reproducible for tests, but it does not establish Campaign ownership. |
| `IsValidBannerCode`, `TryGetBannerDataFromCode` | Validate or parse external banner codes. | A valid parse only proves the fields can be read; it does not prove that resources or the visual context are ready. |

## Real acquisition and update paths

### Read a Campaign banner

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

`Hero.MainHero.ClanBanner` is a real Campaign acquisition path. For a Clan or Kingdom, obtain the entity first and use its `Banner` while that entity is still in a valid Campaign lifetime.

### Build, validate, and serialize a temporary banner

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

This creates only a value object. To make it the Campaign state of a Clan or Kingdom, use the entity's actual assignment/event path at a valid campaign stage; do not replace a global owner with a temporary copy.

## Risks and boundaries

- **Index boundaries:** `GetPrimaryColorId` and related methods directly access the background or first icon. Empty data, a missing icon, or a negative index can produce an exception or meaningless color result; check `GetBannerDataListCount()` first.
- **Code cache:** `BannerCode` is cached. Direct `BannerData` mutation does not necessarily clear the banner's cache, so save or network data can disagree with the visual list.
- **Visual lifetime:** `BannerVisual` depends on `Game.Current` and is consumed by `BannerTableau` and `BannerTextureCreator`. Release consumers with their UI or Mission and do not retain `IBannerVisual` across scenes.
- **Resource validity:** The maximum is 32 icons; mesh, color, and code fields must be supported by `BannerManager`. Invalid input may be rejected or result in an empty list.
- **Ownership and saves:** Editing a Banner copy does not fire Campaign events for a Hero, Clan, or Kingdom and does not change a banner item. Persistent changes must follow the owner's and SaveSystem's lifecycle.
- **Thread and stage:** Visual creation, `Game.Current`, and resource tables are constrained by the game lifecycle. Do not access them from arbitrary background threads or before module initialization completes.

## Version note

This page follows the v1.4.5 `Banner.cs`, `BannerData.cs`, and call sites. When accepting codes across versions, use `IsValidBannerCode`/`TryGetBannerDataFromCode` and re-check resource IDs, icon limits, and Campaign ownership behavior.

## Navigation

- [↑ Core Extra parent](../)
- [↔ ItemObject](../ItemObject)
- [↔ Equipment](../Equipment)
- [↔ SkillObject](../SkillObject)
- [↔ Campaign: Hero](../../campaign/Hero)
- [↔ Campaign: Clan](../../campaign/Clan)
- [Related: ViewModel](../ViewModel)
- [Related: GauntletLayer](../../engine/GauntletLayer)
