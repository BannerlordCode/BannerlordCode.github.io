<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GatherArmyTupleButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GatherArmyTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GatherArmyTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/GatherArmyTupleButtonWidget.cs`

## 概述

`GatherArmyTupleButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |

## 使用示例

```csharp
// GatherArmyTupleButtonWidget (Widget) 的典型用法
// 声明/访问一个 GatherArmyTupleButtonWidget
var widget = root.GetChild("gatherArmyTupleButtonWidget");;
```

## 参见

- [完整类目录](../catalog)