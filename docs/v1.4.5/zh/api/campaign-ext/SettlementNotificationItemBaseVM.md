<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementNotificationItemBaseVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNotificationItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications/SettlementNotificationItemBaseVM.cs`

## 概述

`SettlementNotificationItemBaseVM` 位于 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate.NameplateNotifications` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CreatedTick` | `public int CreatedTick { get; set; }` |
| `CharacterName` | `public string CharacterName { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CharacterVisual` | `public CharacterImageIdentifierVM CharacterVisual { get; set; }` |

## 主要方法

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

## 使用示例

```csharp
var value = new SettlementNotificationItemBaseVM();
value.ExecuteRemove();
```

## 参见

- [完整类目录](../catalog)