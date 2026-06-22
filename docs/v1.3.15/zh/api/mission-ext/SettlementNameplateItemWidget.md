<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementNameplateItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementNameplateItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs`

## 概述

`SettlementNameplateItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsOverWidget` | `public bool IsOverWidget { get; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `IssueType` | `public int IssueType { get; set; }` |
| `InspectedIconWidget` | `public Widget InspectedIconWidget { get; set; }` |
| `PortIconWidget` | `public Widget PortIconWidget { get; set; }` |
| `SettlementPartiesGridWidget` | `public GridWidget SettlementPartiesGridWidget { get; set; }` |
| `MapEventVisualWidget` | `public MapEventVisualBrushWidget MapEventVisualWidget { get; set; }` |
| `WidgetToShow` | `public Widget WidgetToShow { get; set; }` |
| `SettlementBannerWidget` | `public MaskedTextureWidget SettlementBannerWidget { get; set; }` |
| `SettlementNameTextWidget` | `public TextWidget SettlementNameTextWidget { get; set; }` |
| `ParleyIconWidget` | `public Widget ParleyIconWidget { get; set; }` |

## 主要方法

### ParallelUpdate
```csharp
public void ParallelUpdate(float dt)
```

## 使用示例

```csharp
// SettlementNameplateItemWidget (Widget) 的典型用法
// 声明/访问一个 SettlementNameplateItemWidget
var widget = root.GetChild("settlementNameplateItemWidget");;
```

## 参见

- [完整类目录](../catalog)