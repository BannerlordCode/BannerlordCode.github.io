<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TakenDamageItemBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TakenDamageItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TakenDamageItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs`

## 概述

`TakenDamageItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `VerticalWidth` | `public float VerticalWidth { get; set; }` |
| `VerticalHeight` | `public float VerticalHeight { get; set; }` |
| `HorizontalWidth` | `public float HorizontalWidth { get; set; }` |
| `HorizontalHeight` | `public float HorizontalHeight { get; set; }` |
| `RangedOnScreenStayTime` | `public float RangedOnScreenStayTime { get; set; }` |
| `MeleeOnScreenStayTime` | `public float MeleeOnScreenStayTime { get; set; }` |
| `DamageAmount` | `public int DamageAmount { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsRanged` | `public bool IsRanged { get; set; }` |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent { get; set; }` |

## 使用示例

```csharp
// TakenDamageItemBrushWidget (Widget) 的典型用法
// 声明/访问一个 TakenDamageItemBrushWidget
var widget = root.GetChild("takenDamageItemBrushWidget");;
```

## 参见

- [完整类目录](../catalog)