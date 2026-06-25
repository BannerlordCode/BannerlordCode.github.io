---
title: "MPGeneralKillNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPGeneralKillNotificationItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPGeneralKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPGeneralKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General/MPGeneralKillNotificationItemVM.cs`

## 概述

`MPGeneralKillNotificationItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsDamageNotification` | `public bool IsDamageNotification { get; set; }` |
| `IsDamagedMount` | `public bool IsDamagedMount { get; set; }` |
| `Color1` | `public Color Color1 { get; set; }` |
| `Color2` | `public Color Color2 { get; set; }` |
| `MurdererCompassElement` | `public MPTeammateCompassTargetVM MurdererCompassElement { get; set; }` |
| `VictimCompassElement` | `public MPTeammateCompassTargetVM VictimCompassElement { get; set; }` |
| `IsPlayerDeath` | `public bool IsPlayerDeath { get; set; }` |
| `IsItemInitializationOver` | `public bool IsItemInitializationOver { get; set; }` |
| `IsVictimBot` | `public bool IsVictimBot { get; set; }` |
| `IsMurdererBot` | `public bool IsMurdererBot { get; set; }` |
| `IsRelatedToFriendlyTroop` | `public bool IsRelatedToFriendlyTroop { get; set; }` |
| `IsFriendlyTroopDeath` | `public bool IsFriendlyTroopDeath { get; set; }` |
| `Message` | `public string Message { get; set; }` |

## 主要方法

### InitProperties
`public unsafe virtual void InitProperties(Agent affectedAgent, Agent affectorAgent)`

**用途 / Purpose:** 初始化 `properties` 的状态、资源或绑定。

### InitDeathProperties
`public void InitDeathProperties(Agent affectedAgent, Agent affectorAgent, Agent assistedAgent)`

**用途 / Purpose:** 初始化 `death properties` 的状态、资源或绑定。

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

## 使用示例

```csharp
var value = new MPGeneralKillNotificationItemVM();
value.InitProperties(affectedAgent, affectorAgent);
```

## 参见

- [完整类目录](../catalog)