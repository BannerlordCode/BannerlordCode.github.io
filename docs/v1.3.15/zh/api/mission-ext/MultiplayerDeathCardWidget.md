<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerDeathCardWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerDeathCardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDeathCardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs`

## 概述

`MultiplayerDeathCardWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponTextWidget` | `public TextWidget WeaponTextWidget { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `KillerNameTextWidget` | `public ScrollingRichTextWidget KillerNameTextWidget { get; set; }` |
| `KillCountContainer` | `public Widget KillCountContainer { get; set; }` |
| `SelfInflictedTitleBrush` | `public Brush SelfInflictedTitleBrush { get; set; }` |
| `NormalBrushTitleBrush` | `public Brush NormalBrushTitleBrush { get; set; }` |
| `FadeInModifier` | `public float FadeInModifier { get; set; }` |
| `FadeOutModifier` | `public float FadeOutModifier { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelfInflicted` | `public bool IsSelfInflicted { get; set; }` |
| `KillCountsEnabled` | `public bool KillCountsEnabled { get; set; }` |

## 使用示例

```csharp
// MultiplayerDeathCardWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerDeathCardWidget
var widget = root.GetChild("multiplayerDeathCardWidget");;
```

## 参见

- [完整类目录](../catalog)