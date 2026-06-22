<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyManageTroopPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyManageTroopPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs`

## 概述

`PartyManageTroopPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent { get; set; }` |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent { get; set; }` |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |

## 使用示例

```csharp
// PartyManageTroopPopupWidget (Widget) 的典型用法
// 声明/访问一个 PartyManageTroopPopupWidget
var widget = root.GetChild("partyManageTroopPopupWidget");;
```

## 参见

- [完整类目录](../catalog)