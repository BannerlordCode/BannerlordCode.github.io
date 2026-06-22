<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerItemTabButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerItemTabButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerItemTabButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerItemTabButtonWidget.cs`

## 概述

`MultiplayerItemTabButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |

## 使用示例

```csharp
// MultiplayerItemTabButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerItemTabButtonWidget
var widget = root.GetChild("multiplayerItemTabButtonWidget");;
```

## 参见

- [完整类目录](../catalog)