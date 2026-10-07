---
title: "BrightnessDemoWidget"
description: "Auto-generated class reference for BrightnessDemoWidget."
---
# BrightnessDemoWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BrightnessDemoWidget.cs`

## Overview

`BrightnessDemoWidget` is a `TextureWidget` in the video-settings options screen. It is a one-property test
harness: the whole class exists to push a single enumeration value into a texture provider and let that
provider render a sample image calibrated for the current brightness and exposure level.

The constructor hard-codes `TextureProviderName = "BrightnessDemoTextureProvider"`
(`BrightnessDemoWidget.cs:11`), which the GauntletUI texture-provider factory resolves by name
(`TextureProviderFactory.cs:12`). The one public property is `DemoType`, a `DemoTypes` enum with `None = -1`
and eight real entries — `BrightnessWide`, then `ExposureTexture1` through `ExposureTexture6`
(`BrightnessDemoWidget.cs:42`).

The setter is the interesting part. It notifies with the enum's *name* and forwards the enum's *integer*:
`OnPropertyChanged<string>(Enum.GetName(typeof(DemoTypes), value), "DemoType")` followed by
`SetTextureProviderProperty("DemoType", (int)value)` (`BrightnessDemoWidget.cs:32`). The provider is
native-facing and receives an `int`; the UI binding layer sees a readable string.

The instance comes from the options-screen prefab; nothing in the 1.3.15 tree constructs it.

## Mental Model

Read it as a settings-preview probe with a deliberately unusable default. The boundaries:

- **`None` is never forwarded.** The backing field initialises to `DemoTypes.None`
  (`BrightnessDemoWidget.cs:39`) and the setter short-circuits on an unchanged value, so a widget left at
  its default sends *nothing* to the provider. The provider renders whatever its own initial state is.
- **The notification value and the forwarded value are different types.** Listeners see a string, the
  provider sees an `int`. A databinding path that listens for `DemoType` and assumes it received the enum
  will silently get the name instead.
- **Only eight of the enum's nine values are real.** `None = -1` is a sentinel, not a demo image, and there
  is no `"None"` case anywhere downstream. Writing `-1` is indistinguishable from never having written
  anything.
- There is no `OnLateUpdate` and no visibility logic: this widget does nothing per frame. Whatever it
  displays is entirely the provider's response to the last value it was sent.

## How to use

**Getting one.** Reference it from the video-options prefab. If you are writing your own provider, register
one under the name `"BrightnessDemoTextureProvider"`; otherwise the factory finds nothing and the widget
renders nothing.

**Typical use** — a settings row that cycles the demo image:

```csharp
public class BrightnessPreviewRow : MissionBehavior
{
    private readonly BrightnessDemoWidget _demo;
    private int _index;

    public void Advance()
    {
        // Eight real entries; DemoTypes.None is the unset sentinel (BrightnessDemoWidget.cs:42).
        _index = (_index + 1) % 8;
        _demo.DemoType = (BrightnessDemoWidget.DemoTypes)_index;

        // The provider receives the int, not the enum (BrightnessDemoWidget.cs:33).
        Debug.Print("demo preview is now " + _demo.DemoType);
    }
}
```

**The mistake that bites.** Assigning `DemoTypes.None` to clear the preview. Because the setter fires only
on a real change (`BrightnessDemoWidget.cs:29`) and `None` is the field's initial value, assigning it after
a real demo has been shown *does* send `-1` to the provider — but no provider case handles `-1`, so the
image does not clear; it freezes on the last demo. There is no "hide" value in this enum. To hide the
preview, hide the widget instead of setting `None`.



## Key Properties

| Name | Signature |
|------|-----------|
| `DemoType` | `public BrightnessDemoWidget.DemoTypes DemoType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BrightnessDemoWidget widget = ...;
```

## See Also

- [Area Index](../)
- [BannerTableauWidget](../BannerTableauWidget)
- [CircleLoadingAnimWidget](../CircleLoadingAnimWidget)
- [BoolBrushChangerBrushWidget](../BoolBrushChangerBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/BrightnessDemoWidget)