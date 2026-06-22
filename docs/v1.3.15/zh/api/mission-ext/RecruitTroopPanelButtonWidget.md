<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitTroopPanelButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitTroopPanelButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecruitTroopPanelButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Recruitment/RecruitTroopPanelButtonWidget.cs`

## 概述

`RecruitTroopPanelButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `RemoveFromCartButton` | `public ButtonWidget RemoveFromCartButton { get; set; }` |
| `CharacterImageWidget` | `public ImageIdentifierWidget CharacterImageWidget { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |

## 使用示例

```csharp
// RecruitTroopPanelButtonWidget (Widget) 的典型用法
// 声明/访问一个 RecruitTroopPanelButtonWidget
var widget = root.GetChild("recruitTroopPanelButtonWidget");;
```

## 参见

- [完整类目录](../catalog)