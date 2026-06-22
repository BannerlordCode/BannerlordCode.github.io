<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DevelopmentNameTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentNameTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentNameTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs`

## 概述

`DevelopmentNameTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxText` | `public string MaxText { get; set; }` |
| `MaxTextStayTime` | `public float MaxTextStayTime { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |

## 主要方法

### StartMaxTextAnimation
```csharp
public void StartMaxTextAnimation()
```

## 使用示例

```csharp
// DevelopmentNameTextWidget (Widget) 的典型用法
// 声明/访问一个 DevelopmentNameTextWidget
var widget = root.GetChild("developmentNameTextWidget");;
```

## 参见

- [完整类目录](../catalog)