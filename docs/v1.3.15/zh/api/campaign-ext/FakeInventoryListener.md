<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FakeInventoryListener`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FakeInventoryListener

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FakeInventoryListener : InventoryListener`
**Base:** `InventoryListener`
**File:** `TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs`

## 概述

`FakeInventoryListener` 位于 `TaleWorlds.CampaignSystem.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGold
`public override int GetGold()`

**用途 / Purpose:** 获取 `gold` 的当前值。

### GetTraderName
`public override TextObject GetTraderName()`

**用途 / Purpose:** 获取 `trader name` 的当前值。

### SetGold
`public override void SetGold(int gold)`

**用途 / Purpose:** 设置 `gold` 的值或状态。

### OnTransaction
`public override void OnTransaction()`

**用途 / Purpose:** 当 `transaction` 事件触发时调用此方法。

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**用途 / Purpose:** 获取 `opposite party` 的当前值。

## 使用示例

```csharp
var value = new FakeInventoryListener();
value.GetGold();
```

## 参见

- [完整类目录](../catalog)