<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopManagementItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopManagementItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopManagementItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopManagementItemButtonWidget.cs`

## 概述

`PartyTroopManagementItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActionButtonsContainer` | `public Widget ActionButtonsContainer { get; set; }` |

## 主要方法

### GetActionButtonAtIndex
```csharp
public Widget GetActionButtonAtIndex(int index)
```

## 使用示例

```csharp
// PartyTroopManagementItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 PartyTroopManagementItemButtonWidget
var widget = root.GetChild("partyTroopManagementItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)