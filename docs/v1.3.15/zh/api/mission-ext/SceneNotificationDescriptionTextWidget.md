<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneNotificationDescriptionTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneNotificationDescriptionTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneNotificationDescriptionTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneNotificationDescriptionTextWidget.cs`

## 概述

`SceneNotificationDescriptionTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MultiLineAlignment` | `public TextHorizontalAlignment MultiLineAlignment { get; set; }` |

## 使用示例

```csharp
// SceneNotificationDescriptionTextWidget (Widget) 的典型用法
// 声明/访问一个 SceneNotificationDescriptionTextWidget
var widget = root.GetChild("sceneNotificationDescriptionTextWidget");;
```

## 参见

- [完整类目录](../catalog)