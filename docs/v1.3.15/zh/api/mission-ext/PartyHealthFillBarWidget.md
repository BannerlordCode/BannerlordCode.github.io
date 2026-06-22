<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyHealthFillBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyHealthFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHealthFillBarWidget : FillBar`
**Base:** `FillBar`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHealthFillBarWidget.cs`

## 概述

`PartyHealthFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `IsWounded` | `public bool IsWounded { get; set; }` |
| `HealthText` | `public TextWidget HealthText { get; set; }` |

## 使用示例

```csharp
// PartyHealthFillBarWidget (Widget) 的典型用法
// 声明/访问一个 PartyHealthFillBarWidget
var widget = root.GetChild("partyHealthFillBarWidget");;
```

## 参见

- [完整类目录](../catalog)