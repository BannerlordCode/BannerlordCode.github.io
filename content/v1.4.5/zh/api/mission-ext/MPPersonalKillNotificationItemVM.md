---
title: "MPPersonalKillNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPersonalKillNotificationItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPPersonalKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPersonalKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal/MPPersonalKillNotificationItemVM.cs`

## 概述

`MPPersonalKillNotificationItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## 主要方法

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

## 使用示例

```csharp
var value = new MPPersonalKillNotificationItemVM();
value.ExecuteRemove();
```

## 参见

- [完整类目录](../catalog)