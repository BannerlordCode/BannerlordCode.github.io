<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanPartyRoleSelectionPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyRoleSelectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionPopupWidget : AutoClosePopupWidget`
**Base:** `AutoClosePopupWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs`

## 概述

`ClanPartyRoleSelectionPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveToggleWidget` | `public Widget ActiveToggleWidget { get; set; }` |

## 主要方法

### AddToggleWidget
```csharp
public void AddToggleWidget(Widget widget)
```

## 使用示例

```csharp
// ClanPartyRoleSelectionPopupWidget (Widget) 的典型用法
// 声明/访问一个 ClanPartyRoleSelectionPopupWidget
var widget = root.GetChild("clanPartyRoleSelectionPopupWidget");;
```

## 参见

- [完整类目录](../catalog)