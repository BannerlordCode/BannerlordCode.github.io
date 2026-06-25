---
title: "SPGeneralKillNotificationItemVM"
description: "SPGeneralKillNotificationItemVM 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 执行 remove 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPGeneralKillNotificationItemVM 实例
SPGeneralKillNotificationItemVM sPGeneralKillNotificationItemVM = ...;
sPGeneralKillNotificationItemVM.ExecuteRemove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPGeneralKillNotificationItemVM sPGeneralKillNotificationItemVM = ...;
sPGeneralKillNotificationItemVM.ExecuteRemove();
```

## 参见

- [本区域目录](../)