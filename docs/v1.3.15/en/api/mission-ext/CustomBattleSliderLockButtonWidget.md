<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleSliderLockButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleSliderLockButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSliderLockButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CustomBattle/CustomBattleSliderLockButtonWidget.cs`

## Overview

`CustomBattleSliderLockButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `LockOpenedBrush` | `public Brush LockOpenedBrush { get; set; }` |
| `LockClosedBrush` | `public Brush LockClosedBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of CustomBattleSliderLockButtonWidget (Widget)
// 声明/访问一个 CustomBattleSliderLockButtonWidget
var widget = root.GetChild("customBattleSliderLockButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)