<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs`

## Overview

`SceneWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Scene` | `public object Scene { get; set; }` |
| `AffirmativeButton` | `public ButtonWidget AffirmativeButton { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get; set; }` |
| `ClickToContinueTextWidget` | `public RichTextWidget ClickToContinueTextWidget { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `FadeImageWidget` | `public Widget FadeImageWidget { get; set; }` |
| `PreparingVisualWidget` | `public Widget PreparingVisualWidget { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `FadeInDuration` | `public float FadeInDuration { get; set; }` |
| `IsOkShown` | `public bool IsOkShown { get; set; }` |
| `IsCancelShown` | `public bool IsCancelShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `AffirmativeTitleText` | `public string AffirmativeTitleText { get; set; }` |
| `NegativeTitleText` | `public string NegativeTitleText { get; set; }` |

## Usage Example

```csharp
// Typical usage of SceneWidget (Widget)
// 声明/访问一个 SceneWidget
var widget = root.GetChild("sceneWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)