<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerAdminMessageWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerAdminMessageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminMessageWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageWidget.cs`

## 概述

`MultiplayerAdminMessageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageTextWidget` | `public TextWidget MessageTextWidget { get; set; }` |
| `MessageOnScreenStayTime` | `public float MessageOnScreenStayTime { get; }` |
| `MessageFadeInTime` | `public float MessageFadeInTime { get; }` |
| `MessageFadeOutTime` | `public float MessageFadeOutTime { get; }` |

## 使用示例

```csharp
// MultiplayerAdminMessageWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerAdminMessageWidget
var widget = root.GetChild("multiplayerAdminMessageWidget");;
```

## 参见

- [完整类目录](../catalog)