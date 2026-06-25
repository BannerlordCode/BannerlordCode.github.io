---
title: "SPPersonalKillNotificationItemVM"
description: "SPPersonalKillNotificationItemVM 的自动生成类参考。"
---
# SPPersonalKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPPersonalKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal/SPPersonalKillNotificationItemVM.cs`

## 概述

`SPPersonalKillNotificationItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VictimType` | `public string VictimType { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## 主要方法

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 remove 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPPersonalKillNotificationItemVM 实例
SPPersonalKillNotificationItemVM sPPersonalKillNotificationItemVM = ...;
sPPersonalKillNotificationItemVM.ExecuteRemove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPPersonalKillNotificationItemVM sPPersonalKillNotificationItemVM = ...;
sPPersonalKillNotificationItemVM.ExecuteRemove();
```

## 参见

- [本区域目录](../)