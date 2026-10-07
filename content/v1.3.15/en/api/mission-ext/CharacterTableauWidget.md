---
title: "CharacterTableauWidget"
description: "Auto-generated class reference for CharacterTableauWidget."
---
# CharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs`

## Overview

`CharacterTableauWidget` is the widget that renders a full 3D character — with armour, banner, mount and a
custom animation — into a 2D `Texture`. Like `BannerTableauWidget`, its constructor hard-codes a texture
provider name: `"CharacterTableauTextureProvider"` (`CharacterTableauWidget.cs:18`).

The class is almost entirely a *typed channel to that provider*. It exposes around twenty properties —
`CharStringId`, `Race`, `IsFemale`, `BodyProperties`, `EquipmentCode`, `BannerCodeText`,
`LeftHandWieldedEquipmentIndex`, `RightHandWieldedEquipmentIndex`, `ArmorColor1` / `ArmorColor2`,
`MountCreationKey`, `StanceIndex`, `IsEquipmentAnimActive`, `IdleAction`, `IdleFaceAnim`, `CustomAnimation`,
`CustomRenderScale`, `IsBannerShownInBackground`, and more — and almost every setter ends with
`SetTextureProviderProperty("<same name>", value)` (`CharacterTableauWidget.cs:132`,
`CharacterTableauWidget.cs:260`). There are 24 such forwards in the file.

It also pushes two properties *from* the provider back into itself every frame in `OnUpdate`
(`CharacterTableauWidget.cs:41`): `CustomAnimationProgressRatio` is read back with
`GetTextureProviderProperty<float>` (`CharacterTableauWidget.cs:60`), and `IsPlayingCustomAnimations` is
reset to `false` if the provider no longer reports it true (`CharacterTableauWidget.cs:55`).

Mouse input drives one provider property directly: press sends `"CurrentlyRotating" = true`
(`CharacterTableauWidget.cs:24`) and release sends `false` (`CharacterTableauWidget.cs:30`), which is how the
player spins the model by dragging.

The widget is created by the character-creation and party-screen prefabs; nothing in the 1.3.15 tree
constructs it.

## Mental Model

Read it as a bidirectional typed channel to a native renderer, and mind which direction each property
flows. The boundaries:

- **Most properties are outward-only.** Setting `CharStringId` or `Race` pushes a value to the provider
  (`CharacterTableauWidget.cs:260`, `CharacterTableauWidget.cs:344`); nothing reads it back. Only
  `CustomAnimationProgressRatio` and `IsPlayingCustomAnimations` are refreshed from the provider each frame
  (`CharacterTableauWidget.cs:60`, `CharacterTableauWidget.cs:51`).
- **`IsPlayingCustomAnimations` is cleared by the widget itself.** `OnUpdate` queries the provider and
  forces the local property back to `false` when the provider disagrees (`CharacterTableauWidget.cs:55`).
  Setting it `true` and expecting it to stay `true` is wrong — the animation's own completion resets it.
- **`OnUpdate` nulls the wielded equipment indices when the widget is not recursively visible**
  (`CharacterTableauWidget.cs:44`). A hidden tableau drops its weapons automatically, so re-showing it
  without re-binding `LeftHandWieldedEquipmentIndex` / `RightHandWieldedEquipmentIndex` shows an unarmed
  character.
- **Every setter short-circuits on an unchanged value**, so re-pushing the same value sends nothing to the
  provider — and, as with `BannerTableauWidget`, there is no public way to force a re-send short of
  calling `TextureProvider.SetProperty` yourself.
- **The null-check style on the read-back is unusual.** `GetTextureProviderProperty<bool>` is wrapped in
  `bool?` and then tested as `(x.GetValueOrDefault() == flag) & (x != null)`
  (`CharacterTableauWidget.cs:53`) — a non-short-circuiting bitwise `&`, so the null check always runs, but
  the expression reads as if the `==` were the outer test.
- `SwapPlacesButtonWidget` (`CharacterTableauWidget.cs:141`) drives `OnSwapClick`, which flips a private
  `_isCharacterMountSwapped` and forwards it as `"TriggerCharacterMountPlacesSwap"`
  (`CharacterTableauWidget.cs:37`). The button is never auto-wired in this class — the prefab does that.

## How to use

**Getting one.** Reference it from the prefab and register a texture provider under
`"CharacterTableauTextureProvider"` if you are writing your own; otherwise the factory finds nothing and
`OnRender` returns early. Set the character-defining properties *before* the widget becomes visible,
because `OnUpdate` clears the wielded indices the moment it is not recursively visible.

```csharp
public class PartyTableauBinder : MissionBehavior
{
    private readonly CharacterTableauWidget _tableau;

    public void Show(Hero hero)
    {
        if (_tableau == null || hero == null || Campaign.Current == null) { return; }

        // Outward-only: every setter forwards straight to the texture provider
        // (CharacterTableauWidget.cs:260 for CharStringId, :344 for Race).
        _tableau.CharStringId = hero.CharacterData.StringId;
        _tableau.Race = (int)hero.CharacterData.Race;
        _tableau.IsFemale = hero.CharacterData.IsFemale;
        _tableau.BodyProperties = hero.CharacterData.BodyProperties.ToString();

        // Hidden tableaux clear their wielded indices every update
        // (CharacterTableauWidget.cs:44), so bind these last, once visible.
        _tableau.LeftHandWieldedEquipmentIndex = (int)hero.Equipment[EquipmentIndex.WeaponItemBeginSlot];
        _tableau.RightHandWieldedEquipmentIndex = (int)hero.Equipment[EquipmentIndex.ExtraWeaponItem];

        Debug.Print("tableau showing " + hero.Name.ToString());
    }
}
```

**The mistake that bites.** Setting `IsPlayingCustomAnimations = true` and waiting for it to become `false`
on your own terms. `OnUpdate` overwrites it from the provider every frame and forces it to `false` the
moment the provider stops reporting it (`CharacterTableauWidget.cs:55`) — so it tracks the animation's
completion rather than your code's. Conversely, reading it as "did my animation start?" is wrong too: it is
forced to `false` as soon as the widget is hidden, and nothing re-arms it. Drive your own state and use
`CustomAnimationProgressRatio` (which *is* refreshed each frame, `CharacterTableauWidget.cs:60`) to read
the animation's real position.



## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `SwapPlacesButtonWidget` | `public ButtonWidget SwapPlacesButtonWidget { get; set; }` |
| `BodyProperties` | `public string BodyProperties { get; set; }` |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |
| `CharStringId` | `public string CharStringId { get; set; }` |
| `StanceIndex` | `public int StanceIndex { get; set; }` |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `EquipmentCode` | `public string EquipmentCode { get; set; }` |
| `MountCreationKey` | `public string MountCreationKey { get; set; }` |
| `IdleAction` | `public string IdleAction { get; set; }` |
| `IdleFaceAnim` | `public string IdleFaceAnim { get; set; }` |
| `CustomAnimation` | `public string CustomAnimation { get; set; }` |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex { get; set; }` |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex { get; set; }` |
| `ArmorColor1` | `public uint ArmorColor1 { get; set; }` |
| `ArmorColor2` | `public uint ArmorColor2 { get; set; }` |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground { get; set; }` |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterTableauWidget widget = ...;
```

## See Also

- [Area Index](../)
- [BannerTableauWidget](../BannerTableauWidget)
- [CharacterCreationCultureVisualBrushWidget](../CharacterCreationCultureVisualBrushWidget)
- [ClanWorkshopTypeVisualBrushWidget](../ClanWorkshopTypeVisualBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/CharacterTableauWidget)