<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyUpgradeRequirementWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyUpgradeRequirementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeRequirementWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeRequirementWidget.cs`

## 概述

`PartyUpgradeRequirementWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `RequirementId` | `public string RequirementId { get; set; }` |
| `IsSufficient` | `public bool IsSufficient { get; set; }` |
| `IsPerkRequirement` | `public bool IsPerkRequirement { get; set; }` |
| `NormalColor` | `public Color NormalColor { get; set; }` |
| `InsufficientColor` | `public Color InsufficientColor { get; set; }` |

## 使用示例

```csharp
// PartyUpgradeRequirementWidget (Widget) 的典型用法
// 声明/访问一个 PartyUpgradeRequirementWidget
var widget = root.GetChild("partyUpgradeRequirementWidget");;
```

## 参见

- [完整类目录](../catalog)