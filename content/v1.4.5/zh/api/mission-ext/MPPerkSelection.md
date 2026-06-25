---
title: "MPPerkSelection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkSelection`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerkSelection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelection`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## 概述

`MPPerkSelection` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MPPerkSelection
`public struct MPPerkSelection(int index, int listIndex)`

**用途 / Purpose:** 处理 `m p perk selection` 相关逻辑。

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
`public List<MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**用途 / Purpose:** 获取 `selections for hero class` 的当前值。

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelection> perkChoices)`

**用途 / Purpose:** 设置 `selections for hero class temporarily` 的值或状态。

## 使用示例

```csharp
var value = new MPPerkSelection();
value.MPPerkSelection(0, 0);
```

## 参见

- [完整类目录](../catalog)