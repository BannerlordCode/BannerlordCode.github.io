<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntCircleActionSelectorWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntCircleActionSelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntCircleActionSelectorWidget : CircleActionSelectorWidget`
**Base:** `CircleActionSelectorWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/TauntCircleActionSelectorWidget.cs`

## 概述

`TauntCircleActionSelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FallbackNavigationWidget` | `public Widget FallbackNavigationWidget { get; set; }` |

## 使用示例

```csharp
// TauntCircleActionSelectorWidget (Widget) 的典型用法
// 声明/访问一个 TauntCircleActionSelectorWidget
var widget = root.GetChild("tauntCircleActionSelectorWidget");;
```

## 参见

- [完整类目录](../catalog)