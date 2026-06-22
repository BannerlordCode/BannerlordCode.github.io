<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyUpgradeButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyUpgradeButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs`

## 概述

`PartyUpgradeButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; set; }` |
| `MarinerTroopBrush` | `public BrushWidget MarinerTroopBrush { get; set; }` |
| `UnavailableBrush` | `public Brush UnavailableBrush { get; set; }` |
| `InsufficientBrush` | `public Brush InsufficientBrush { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |

## 使用示例

```csharp
// PartyUpgradeButtonWidget (Widget) 的典型用法
// 声明/访问一个 PartyUpgradeButtonWidget
var widget = root.GetChild("partyUpgradeButtonWidget");;
```

## 参见

- [完整类目录](../catalog)