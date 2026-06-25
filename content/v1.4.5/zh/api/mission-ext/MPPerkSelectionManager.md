---
title: "MPPerkSelectionManager"
description: "MPPerkSelectionManager 的自动生成类参考。"
---
# MPPerkSelectionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelectionManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## 概述

`MPPerkSelectionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MPPerkSelectionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MPPerkSelection
`public struct MPPerkSelection(int index, int listIndex)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MPPerkSelection 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPPerkSelectionManager 实例
MPPerkSelectionManager mPPerkSelectionManager = ...;
var result = mPPerkSelectionManager.MPPerkSelection(0, 0);
```

### FreeInstance
`public static void FreeInstance()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FreeInstance 对应的操作。

```csharp
// 静态调用，不需要实例
MPPerkSelectionManager.FreeInstance();
```

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 为 for user 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MPPerkSelectionManager 实例
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.InitializeForUser("example", playerId);
```

### ResetPendingChanges
`public void ResetPendingChanges()`

**用途 / Purpose:** **用途 / Purpose:** 将 pending changes 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MPPerkSelectionManager 实例
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.ResetPendingChanges();
```

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 to apply and save pending changes 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MPPerkSelectionManager 实例
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.TryToApplyAndSavePendingChanges();
```

### GetSelectionsForHeroClass
`public List<MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 selections for hero class 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkSelectionManager 实例
MPPerkSelectionManager mPPerkSelectionManager = ...;
var result = mPPerkSelectionManager.GetSelectionsForHeroClass(currentHeroClass);
```

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelection> perkChoices)`

**用途 / Purpose:** **用途 / Purpose:** 为 selections for hero class temporarily 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPPerkSelectionManager 实例
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.SetSelectionsForHeroClassTemporarily(currentHeroClass, perkChoices);
```

## 使用示例

```csharp
var manager = MPPerkSelectionManager.Current;
```

## 参见

- [本区域目录](../)