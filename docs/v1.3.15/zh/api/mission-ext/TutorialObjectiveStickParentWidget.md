<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialObjectiveStickParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialObjectiveStickParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveStickParentWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs`

## 概述

`TutorialObjectiveStickParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `StickMiddle` | `public Widget StickMiddle { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `AnimTime` | `public float AnimTime { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `AnimType` | `public TutorialObjectiveStickParentWidget.StickAnimStage.AnimTypes AnimType { get; }` |
| `WidgetToManipulate` | `public Widget WidgetToManipulate { get; }` |

## 主要方法

### Tick
```csharp
public void Tick(float dt)
```

## 使用示例

```csharp
// TutorialObjectiveStickParentWidget (Widget) 的典型用法
// 声明/访问一个 TutorialObjectiveStickParentWidget
var widget = root.GetChild("tutorialObjectiveStickParentWidget");;
```

## 参见

- [完整类目录](../catalog)