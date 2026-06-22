<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownLineWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownLineWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownLineWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs`

## 概述

`RundownLineWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `ValueTextWidget` | `public TextWidget ValueTextWidget { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## 主要方法

### RefreshValueOffset
```csharp
public void RefreshValueOffset(float columnWidth)
```

## 使用示例

```csharp
// RundownLineWidget (Widget) 的典型用法
// 声明/访问一个 RundownLineWidget
var widget = root.GetChild("rundownLineWidget");;
```

## 参见

- [完整类目录](../catalog)