<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyPlayerNameplateWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyPlayerNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyPlayerNameplateWidget : PartyNameplateWidget`
**Base:** `PartyNameplateWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs`

## 概述

`PartyPlayerNameplateWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `MainPartyArrowWidget` | `public Widget MainPartyArrowWidget { get; set; }` |

## 使用示例

```csharp
// PartyPlayerNameplateWidget (Widget) 的典型用法
// 声明/访问一个 PartyPlayerNameplateWidget
var widget = root.GetChild("partyPlayerNameplateWidget");;
```

## 参见

- [完整类目录](../catalog)