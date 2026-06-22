<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPlayerBadgeVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPlayerBadgeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPlayerBadgeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs`

## 概述

`MultiplayerPlayerBadgeVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BadgeId` | `public string BadgeId { get; set; }` |

## 主要方法

### SetForcedSize
```csharp
public void SetForcedSize(float width, float height)
```

## 使用示例

```csharp
// MultiplayerPlayerBadgeVisualWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerPlayerBadgeVisualWidget
var widget = root.GetChild("multiplayerPlayerBadgeVisualWidget");;
```

## 参见

- [完整类目录](../catalog)