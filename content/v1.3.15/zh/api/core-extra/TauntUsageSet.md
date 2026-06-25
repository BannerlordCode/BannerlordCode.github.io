---
title: "TauntUsageSet"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntUsageSet`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageSet

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class TauntUsageSet`
**领域:** core-extra

## 概述

`TauntUsageSet` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get; }` |
| `UsageFlag` | `public TauntUsageManager.TauntUsage.TauntUsageFlag UsageFlag { get; }` |

## 主要方法

### Initialize
`public static TauntUsageManager Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Read
`public void Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### GetUsageSet
`public TauntUsageManager.TauntUsageSet GetUsageSet(string id)`

**用途 / Purpose:** 获取 `usage set` 的当前值。

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 获取 `action` 的当前值。

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)`

**用途 / Purpose:** 获取 `action disabled reason text` 的当前值。

### GetIsActionNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 获取 `is action not suitable reason` 的当前值。

### GetTauntItemCount
`public int GetTauntItemCount()`

**用途 / Purpose:** 获取 `taunt item count` 的当前值。

### GetIndexOfAction
`public int GetIndexOfAction(string id)`

**用途 / Purpose:** 获取 `index of action` 的当前值。

### GetDefaultAction
`public string GetDefaultAction(int index)`

**用途 / Purpose:** 获取 `default action` 的当前值。

### Compare
`public int Compare(TauntUsageManager.TauntUsage.TauntUsageFlag x, TauntUsageManager.TauntUsage.TauntUsageFlag y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### AddUsage
`public void AddUsage(TauntUsageManager.TauntUsage usage)`

**用途 / Purpose:** 向当前集合/状态中添加 `usage`。

### GetUsages
`public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()`

**用途 / Purpose:** 获取 `usages` 的当前值。

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 处理 `is suitable` 相关逻辑。

### GetIsNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 获取 `is not suitable reason` 的当前值。

### GetAction
`public string GetAction()`

**用途 / Purpose:** 获取 `action` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TauntUsageSet.Initialize();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
