---
title: "SPGeneralKillNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPGeneralKillNotificationItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPGeneralKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPGeneralKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs`

## 概述

`SPGeneralKillNotificationItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsUnconscious` | `public bool IsUnconscious { get; set; }` |
| `IsHeadshot` | `public bool IsHeadshot { get; set; }` |
| `IsSuicide` | `public bool IsSuicide { get; set; }` |
| `IsDrowning` | `public bool IsDrowning { get; set; }` |
| `BackgroundColor` | `public Color BackgroundColor { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## 主要方法

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

## 使用示例

```csharp
var value = new SPGeneralKillNotificationItemVM();
value.ExecuteRemove();
```

## 参见

- [完整类目录](../catalog)