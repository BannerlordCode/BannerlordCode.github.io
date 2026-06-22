<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinanceTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFinanceTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinanceTextWidget.cs`

## 概述

`ClanFinanceTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NegativeMarkWidget` | `public TextWidget NegativeMarkWidget { get; set; }` |

## 使用示例

```csharp
// ClanFinanceTextWidget (Widget) 的典型用法
// 声明/访问一个 ClanFinanceTextWidget
var widget = root.GetChild("clanFinanceTextWidget");;
```

## 参见

- [完整类目录](../catalog)