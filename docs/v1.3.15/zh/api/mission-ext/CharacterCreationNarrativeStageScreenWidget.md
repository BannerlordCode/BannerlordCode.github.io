<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationNarrativeStageScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationNarrativeStageScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationNarrativeStageScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationNarrativeStageScreenWidget.cs`

## 概述

`CharacterCreationNarrativeStageScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextButton` | `public ButtonWidget NextButton { get; set; }` |
| `PreviousButton` | `public ButtonWidget PreviousButton { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |

## 使用示例

```csharp
// CharacterCreationNarrativeStageScreenWidget (Widget) 的典型用法
// 声明/访问一个 CharacterCreationNarrativeStageScreenWidget
var widget = root.GetChild("characterCreationNarrativeStageScreenWidget");;
```

## 参见

- [完整类目录](../catalog)