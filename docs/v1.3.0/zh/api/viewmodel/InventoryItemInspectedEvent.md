<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryItemInspectedEvent`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryItemInspectedEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryItemInspectedEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryItemInspectedEvent.cs`

## 概述

`InventoryItemInspectedEvent` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Item` | `public ItemRosterElement Item { get; }` |
| `ItemSide` | `public InventoryLogic.InventorySide ItemSide { get; }` |

## 使用示例

```csharp
var example = new InventoryItemInspectedEvent();
```

## 参见

- [完整类目录](../catalog)