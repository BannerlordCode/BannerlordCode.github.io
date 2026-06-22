<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PowerLevelComparerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PowerLevelComparerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PowerLevelComparerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs`

## 概述

`PowerLevelComparerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCenterSeperatorEnabled` | `public bool IsCenterSeperatorEnabled { get; set; }` |
| `CenterSpace` | `public float CenterSpace { get; set; }` |
| `DefenderPower` | `public double DefenderPower { get; set; }` |
| `AttackerPower` | `public double AttackerPower { get; set; }` |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower { get; set; }` |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower { get; set; }` |
| `AttackerPowerWidget` | `public Widget AttackerPowerWidget { get; set; }` |
| `DefenderPowerWidget` | `public Widget DefenderPowerWidget { get; set; }` |
| `PowerListPanel` | `public ListPanel PowerListPanel { get; set; }` |
| `AttackerPowerListPanel` | `public ListPanel AttackerPowerListPanel { get; set; }` |
| `DefenderPowerListPanel` | `public ListPanel DefenderPowerListPanel { get; set; }` |
| `CenterSeperatorWidget` | `public Widget CenterSeperatorWidget { get; set; }` |

## 使用示例

```csharp
// PowerLevelComparerWidget (Widget) 的典型用法
// 声明/访问一个 PowerLevelComparerWidget
var widget = root.GetChild("powerLevelComparerWidget");;
```

## 参见

- [完整类目录](../catalog)