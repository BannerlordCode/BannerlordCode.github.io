---
title: "TauntUsageManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntUsageManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TauntUsageManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/TauntUsageManager.cs`

## 概述

`TauntUsageManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `TauntUsageManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UsageFlag` | `public TauntUsageFlag UsageFlag { get; }` |
| `Instance` | `public static TauntUsageManager Instance { get; }` |

## 主要方法

### Compare
`public int Compare(TauntUsage.TauntUsageFlag x, TauntUsage.TauntUsageFlag y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### AddUsage
`public void AddUsage(TauntUsage usage)`

**用途 / Purpose:** 向当前集合/状态中添加 `usage`。

### GetUsages
`public MBReadOnlyList<TauntUsage> GetUsages()`

**用途 / Purpose:** 获取 `usages` 的当前值。

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 处理 `is suitable` 相关逻辑。

### GetIsNotSuitableReason
`public TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 获取 `is not suitable reason` 的当前值。

### GetAction
`public string GetAction()`

**用途 / Purpose:** 获取 `action` 的当前值。

### Initialize
`public static TauntUsageManager Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Read
`public void Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### GetUsageSet
`public TauntUsageSet GetUsageSet(string id)`

**用途 / Purpose:** 获取 `usage set` 的当前值。

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 获取 `action` 的当前值。

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsage.TauntUsageFlag disabledReasonFlag)`

**用途 / Purpose:** 获取 `action disabled reason text` 的当前值。

### GetIsActionNotSuitableReason
`public TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

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

## 使用示例

```csharp
var manager = TauntUsageManager.Current;
```

## 参见

- [完整类目录](../catalog)