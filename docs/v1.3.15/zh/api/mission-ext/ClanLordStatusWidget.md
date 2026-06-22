<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanLordStatusWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanLordStatusWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanLordStatusWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanLordStatusWidget.cs`

## 概述

`ClanLordStatusWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `StatusType` | `public int StatusType { get; set; }` |

## 使用示例

```csharp
// ClanLordStatusWidget (Widget) 的典型用法
// 声明/访问一个 ClanLordStatusWidget
var widget = root.GetChild("clanLordStatusWidget");;
```

## 参见

- [完整类目录](../catalog)