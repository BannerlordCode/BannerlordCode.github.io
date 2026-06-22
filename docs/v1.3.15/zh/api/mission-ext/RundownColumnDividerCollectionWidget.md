<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownColumnDividerCollectionWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownColumnDividerCollectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownColumnDividerCollectionWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownColumnDividerCollectionWidget.cs`

## 概述

`RundownColumnDividerCollectionWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DividerWidth` | `public float DividerWidth { get; set; }` |
| `DividerSprite` | `public Sprite DividerSprite { get; set; }` |
| `DividerColor` | `public Color DividerColor { get; set; }` |

## 主要方法

### Refresh
```csharp
public void Refresh(IReadOnlyList<float> columnWidths)
```

## 使用示例

```csharp
// RundownColumnDividerCollectionWidget (Widget) 的典型用法
// 声明/访问一个 RundownColumnDividerCollectionWidget
var widget = root.GetChild("rundownColumnDividerCollectionWidget");;
```

## 参见

- [完整类目录](../catalog)