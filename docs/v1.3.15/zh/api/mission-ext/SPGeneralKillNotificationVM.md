<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPGeneralKillNotificationVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPGeneralKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPGeneralKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationVM.cs`

## 概述

`SPGeneralKillNotificationVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<SPGeneralKillNotificationItemVM> NotificationList { get; set; }` |

## 主要方法

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SPGeneralKillNotificationVM();
value.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## 参见

- [完整类目录](../catalog)