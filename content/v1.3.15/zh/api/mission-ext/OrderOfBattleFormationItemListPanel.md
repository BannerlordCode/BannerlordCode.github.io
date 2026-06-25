---
title: "OrderOfBattleFormationItemListPanel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationItemListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationItemListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationItemListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs`

## 概述

`OrderOfBattleFormationItemListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CardWidget` | `public Widget CardWidget { get; set; }` |
| `FormationClassDropdown` | `public DropdownWidget FormationClassDropdown { get; set; }` |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer { get; set; }` |
| `IsClassDropdownEnabled` | `public bool IsClassDropdownEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasFormation` | `public bool HasFormation { get; set; }` |
| `DefaultFocusYOffsetFromCenter` | `public float DefaultFocusYOffsetFromCenter { get; set; }` |
| `NoFormationFocusYOffsetFromCenter` | `public float NoFormationFocusYOffsetFromCenter { get; set; }` |

## 使用示例

```csharp
var value = new OrderOfBattleFormationItemListPanel();
```

## 参见

- [完整类目录](../catalog)