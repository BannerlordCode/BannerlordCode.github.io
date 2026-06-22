<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MoraleArrowBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MoraleArrowBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs`

## 概述

`MoraleArrowBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftSideArrow` | `public bool LeftSideArrow { get; set; }` |
| `BaseHorizontalExtendRange` | `public float BaseHorizontalExtendRange { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## 主要方法

### SetFlowLevel
```csharp
public void SetFlowLevel(int flow)
```

## 使用示例

```csharp
// MoraleArrowBrushWidget (Widget) 的典型用法
// 声明/访问一个 MoraleArrowBrushWidget
var widget = root.GetChild("moraleArrowBrushWidget");;
```

## 参见

- [完整类目录](../catalog)