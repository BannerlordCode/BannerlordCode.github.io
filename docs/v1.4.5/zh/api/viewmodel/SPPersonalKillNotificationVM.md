<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPPersonalKillNotificationVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SPPersonalKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPPersonalKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal/SPPersonalKillNotificationVM.cs`

## 概述

`SPPersonalKillNotificationVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<SPPersonalKillNotificationItemVM> NotificationList { get; set; }` |

## 主要方法

### OnPersonalKill
`public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)`

**用途 / Purpose:** 当 `personal kill` 事件触发时调用此方法。

### OnPersonalHit
`public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)`

**用途 / Purpose:** 当 `personal hit` 事件触发时调用此方法。

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**用途 / Purpose:** 当 `personal message` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SPPersonalKillNotificationVM();
value.OnPersonalKill(0, false, false, false, "example", false);
```

## 参见

- [完整类目录](../catalog)