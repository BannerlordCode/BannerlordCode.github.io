---
title: "TauntUsage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntUsage`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TauntUsage

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsage`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/TauntUsageManager.cs`

## 概述

`TauntUsage` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
var value = new TauntUsage();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)