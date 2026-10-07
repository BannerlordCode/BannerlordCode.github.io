---
title: "BannerTableauWidget"
description: "Auto-generated class reference for BannerTableauWidget."
---
# BannerTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs`

## Overview

`BannerTableauWidget` is the widget that actually draws a banner or character into a 2D `Texture`. It is a
`TextureWidget` whose constructor does something unusual: it hard-codes
`TextureProviderName = "BannerTableauTextureProvider"` (`BannerTableauWidget.cs:14`). That name is resolved
by `TextureProviderFactory.CreateInstance`, which looks the name up in a static registry and constructs the
matching `TextureProvider` reflectively (`TextureProviderFactory.cs:12`).

The widget itself owns no banner logic. It exposes six properties — `BannerCodeText`, `CustomRenderScale`,
`IsNineGrid`, `UpdatePositionValueManual`, `UpdateSizeValueManual`,
`UpdateRotationValueManualWithMirror` and `MeshIndexToUpdate` — and every setter does the same two things:
raise `OnPropertyChanged`, then call `SetTextureProviderProperty(name, value)`
(`BannerTableauWidget.cs:101`). That base method writes into the widget's property bag and forwards to
`TextureProvider.SetProperty` if a provider already exists (`TextureWidget.cs:109`). The rendering itself
happens in an overridden `OnRender` (`BannerTableauWidget.cs:37`), which pulls the texture, applies the
brush's first `StyleLayer` for the current visual state, and issues one `drawContext.Draw`.

The `Update*Manual` half of that surface is the write side used by `BannerBuilderEditableAreaWidget`: when
the player drags, rotates or resizes a sigil, the editing widget assigns those three properties
(`BannerBuilderEditableAreaWidget.cs:132`), which is how the banner re-renders while being edited.

## Mental Model

Read it as a *typed channel to a texture provider*, not as a widget with behaviour. Four boundaries:

- **Setting a property before the provider exists is fine — it is queued.** `SetTextureProviderProperty`
  stores into `_textureProviderProperties` first and only calls `SetProperty` when `TextureProvider` is
  non-null (`TextureWidget.cs:111`). That is why the constructor can name a provider and let the prefab
  bind values afterwards.
- **Every setter short-circuits on an unchanged value**, so re-assigning the same
  `MeshIndexToUpdate` produces no property change and no provider call at all. Writing the same layer index
  every frame is free but also does nothing.
- **`UpdateRotationValueManualWithMirror` notifies incorrectly.** Its setter calls
  `OnPropertyChanged<string>("UpdateRotationValueManualWithMirror", "UpdateRotationValueManualWithMirror")`
  (`BannerTableauWidget.cs:205`) — passing the property *name* as both the old and the new value, unlike
  `BannerCodeText`, which passes the previous value as the old one (`BannerTableauWidget.cs:100`). Any
  listener that inspects the old value of that property sees a string.
- **`OnRender` honours only the first `StyleLayer`.** It takes `GetStyleOrDefault(CurrentState)` and calls
  `Enumerable.FirstOrDefault` on the layers (`BannerTableauWidget.cs:60`), so a multi-layer brush state
  renders its first layer only. It also forces `OverlayEnabled` and `CircularMaskingEnabled` off before
  re-enabling circular masking only if the enclosing draw context asks for it
  (`BannerTableauWidget.cs:75`).
- `CustomRenderScale` has no field initialiser (`BannerTableauWidget.cs:236`), so it is `0f` until the
  prefab or the view model sets it.

## How to use

**Getting one.** Reference it from a Gauntlet prefab — the constructor is the only requirement. Register a
texture provider under the name `"BannerTableauTextureProvider"` if you are writing your own, otherwise the
factory will not find one and `OnRender` returns early on a null provider (`BannerTableauWidget.cs:40`).
`TextureProviderFactory.CreateInstance("BannerTableauTextureProvider")` returns the resolved provider if you
want to check it before wiring the widget.

**Typical use** — driving the tableau from an editing widget:

```csharp
public static class TableauSync
{
    public static void PushFrom(BannerBuilderEditableAreaWidget area)
    {
        BannerTableauWidget tableau = area.BannerTableauWidget;

        // The provider the widget draws through; resolved by name, null if unregistered
        // (TextureProviderFactory.cs:12). OnRender bails out on a null provider
        // (BannerTableauWidget.cs:40), so check it if the banner is not showing.
        TextureProvider provider = TextureProviderFactory.CreateInstance("BannerTableauTextureProvider");
        if (provider == null) { return; }

        // Every setter forwards to TextureProvider.SetProperty (BannerTableauWidget.cs:101).
        tableau.BannerCodeText = "some.banner.code";
        tableau.CustomRenderScale = 1f;
        tableau.IsNineGrid = false;

        // The sigil transform, in sigil units, plus the mirror flag as a tuple
        // (BannerTableauWidget.cs:194).
        tableau.UpdatePositionValueManual = area.PositionValue;
        tableau.UpdateSizeValueManual = area.SizeValue;
        tableau.UpdateRotationValueManualWithMirror =
            new ValueTuple<float, bool>(area.RotationValue, area.IsMirrorActive);

        // Only fires the provider when the index actually changes (BannerTableauWidget.cs:223).
        tableau.MeshIndexToUpdate = area.LayerIndex;
    }
}
```

**The mistake that bites.** Re-assigning a property with the value it already holds, expecting the banner to
refresh. Every setter is guarded by an inequality check — `if (value != this._meshIndexToUpdate)`
(`BannerTableauWidget.cs:223`) — so the notification and the `TextureProvider.SetProperty` call never
happen, and the texture keeps showing the previously rendered mesh. Force the provider directly with
`TextureProvider.SetProperty("MeshIndexToUpdate", ...)` if you genuinely need to re-send the same value.



## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `IsNineGrid` | `public bool IsNineGrid { get; set; }` |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual { get; set; }` |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual { get; set; }` |
| `UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool> UpdateRotationValueManualWithMirror { get; set; }` |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BannerTableauWidget widget = ...;
```

## See Also

- [Area Index](../)
- [BannerBuilderEditableAreaWidget](../BannerBuilderEditableAreaWidget)
- [CharacterTableauWidget](../CharacterTableauWidget)
- [ClanWorkshopTypeVisualBrushWidget](../ClanWorkshopTypeVisualBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/BannerTableauWidget)