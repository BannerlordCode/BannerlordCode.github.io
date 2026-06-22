<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialArrowWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`

## 概述

`TutorialArrowWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsArrowEnabled` | `public bool IsArrowEnabled { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `BigCircleRadius` | `public float BigCircleRadius { get; set; }` |
| `SmallCircleRadius` | `public float SmallCircleRadius { get; set; }` |

## 主要方法

### SetArrowProperties
```csharp
public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)
```

### ResetFade
```csharp
public void ResetFade()
```

### DisableFade
```csharp
public void DisableFade()
```

## 使用示例

```csharp
// TutorialArrowWidget (Widget) 的典型用法
// 声明/访问一个 TutorialArrowWidget
var widget = root.GetChild("tutorialArrowWidget");;
```

## 参见

- [完整类目录](../catalog)