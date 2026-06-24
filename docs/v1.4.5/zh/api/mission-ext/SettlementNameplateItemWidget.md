<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementNameplateItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplateItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/SettlementNameplateItemWidget.cs`

## 概述

`SettlementNameplateItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SettlementNameplateItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public void ParallelUpdate(float dt)`

**用途 / Purpose:** 处理 `parallel update` 相关逻辑。

## 使用示例

```csharp
var widget = new SettlementNameplateItemWidget(context);
```

## 参见

- [完整类目录](../catalog)