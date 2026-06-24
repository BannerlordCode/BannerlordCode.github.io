<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyOverlayCohesionFillBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyOverlayCohesionFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayCohesionFillBarWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay/ArmyOverlayCohesionFillBarWidget.cs`

## 概述

`ArmyOverlayCohesionFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ArmyOverlayCohesionFillBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## 主要方法

### ArmyOverlayCohesionFillBarWidget
`public class ArmyOverlayCohesionFillBarWidget(UIContext context)`

**用途 / Purpose:** 处理 `army overlay cohesion fill bar widget` 相关逻辑。

## 使用示例

```csharp
var widget = new ArmyOverlayCohesionFillBarWidget(context);
```

## 参见

- [完整类目录](../catalog)