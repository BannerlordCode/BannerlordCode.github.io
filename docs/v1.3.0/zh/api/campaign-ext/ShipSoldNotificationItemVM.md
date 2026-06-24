<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipSoldNotificationItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ShipSoldNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class ShipSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ShipSoldNotificationItemVM.cs`

## 概述

`ShipSoldNotificationItemVM` 位于 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Ship` | `public Ship Ship { get; }` |
| `SettlementParty` | `public PartyBase SettlementParty { get; }` |
| `HeroParty` | `public PartyBase HeroParty { get; }` |

## 主要方法

### AddNewTransaction
`public void AddNewTransaction(int amount)`

**用途 / Purpose:** 向当前集合/状态中添加 `new transaction`。

## 使用示例

```csharp
var value = new ShipSoldNotificationItemVM();
value.AddNewTransaction(0);
```

## 参见

- [完整类目录](../catalog)