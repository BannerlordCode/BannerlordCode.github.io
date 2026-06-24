<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs`

## Overview

`CharacterTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
| `IsTableauEnabled` | `public bool IsTableauEnabled { get; set; }` |

## Usage Example

```csharp
var widget = new CharacterTableauWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)