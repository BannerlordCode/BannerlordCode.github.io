<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNotificationVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class GameNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs`

## 概述

`GameNotificationVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentNotification` | `public GameNotificationItemVM CurrentNotification { get; set; }` |
| `GotNotification` | `public bool GotNotification { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `TotalTime` | `public float TotalTime { get; set; }` |

## 主要方法

### ClearNotifications
`public void ClearNotifications()`

**用途 / Purpose:** 处理 `clear notifications` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### AddGameNotification
`public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)`

**用途 / Purpose:** 向当前集合/状态中添加 `game notification`。

## 使用示例

```csharp
var value = new GameNotificationVM();
value.ClearNotifications();
```

## 参见

- [完整类目录](../catalog)