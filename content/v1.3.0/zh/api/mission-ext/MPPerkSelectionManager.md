---
title: "MPPerkSelectionManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkSelectionManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerkSelectionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelectionManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## 概述

`MPPerkSelectionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MPPerkSelectionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MPPerkSelectionManager Instance { get; }` |

## 主要方法

### FreeInstance
`public static void FreeInstance()`

**用途 / Purpose:** 处理 `free instance` 相关逻辑。

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**用途 / Purpose:** 初始化 `for user` 的状态、资源或绑定。

### ResetPendingChanges
`public void ResetPendingChanges()`

**用途 / Purpose:** 将 `pending changes` 重置为初始状态。

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**用途 / Purpose:** 尝试获取 `to apply and save pending changes`，通常以 out 参数返回结果。

### GetSelectionsForHeroClass
`public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**用途 / Purpose:** 获取 `selections for hero class` 的当前值。

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)`

**用途 / Purpose:** 设置 `selections for hero class temporarily` 的值或状态。

## 使用示例

```csharp
var manager = MPPerkSelectionManager.Current;
```

## 参见

- [完整类目录](../catalog)