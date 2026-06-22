<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationOptionsItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationOptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationOptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs`

## 概述

`CharacterCreationOptionsItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `ActionOptionWidget` | `public Widget ActionOptionWidget { get; set; }` |
| `NumericOptionWidget` | `public Widget NumericOptionWidget { get; set; }` |
| `SelectionOptionWidget` | `public Widget SelectionOptionWidget { get; set; }` |
| `BooleanOptionWidget` | `public Widget BooleanOptionWidget { get; set; }` |

## 使用示例

```csharp
// CharacterCreationOptionsItemWidget (Widget) 的典型用法
// 声明/访问一个 CharacterCreationOptionsItemWidget
var widget = root.GetChild("characterCreationOptionsItemWidget");;
```

## 参见

- [完整类目录](../catalog)