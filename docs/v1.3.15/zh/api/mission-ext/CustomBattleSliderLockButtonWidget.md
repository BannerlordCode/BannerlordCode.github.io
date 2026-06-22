<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleSliderLockButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleSliderLockButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSliderLockButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CustomBattle/CustomBattleSliderLockButtonWidget.cs`

## 概述

`CustomBattleSliderLockButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LockOpenedBrush` | `public Brush LockOpenedBrush { get; set; }` |
| `LockClosedBrush` | `public Brush LockClosedBrush { get; set; }` |

## 使用示例

```csharp
// CustomBattleSliderLockButtonWidget (Widget) 的典型用法
// 声明/访问一个 CustomBattleSliderLockButtonWidget
var widget = root.GetChild("customBattleSliderLockButtonWidget");;
```

## 参见

- [完整类目录](../catalog)