---
title: "MPPerkSelection"
description: "MPPerkSelection 的自动生成类参考。"
---
# MPPerkSelection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelection`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## 概述

`MPPerkSelection` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MPPerkSelectionManager Instance { get; }` |

## 主要方法

### FreeInstance
`public static void FreeInstance()`

**用途 / Purpose:** 调用 FreeInstance 对应的操作。

```csharp
// 静态调用，不需要实例
MPPerkSelection.FreeInstance();
```

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**用途 / Purpose:** 为 for user 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MPPerkSelection 实例
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.InitializeForUser("example", playerId);
```

### ResetPendingChanges
`public void ResetPendingChanges()`

**用途 / Purpose:** 将 pending changes 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MPPerkSelection 实例
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.ResetPendingChanges();
```

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**用途 / Purpose:** 尝试获取 to apply and save pending changes 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MPPerkSelection 实例
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.TryToApplyAndSavePendingChanges();
```

### GetSelectionsForHeroClass
`public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**用途 / Purpose:** 读取并返回当前对象中 selections for hero class 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkSelection 实例
MPPerkSelection mPPerkSelection = ...;
var result = mPPerkSelection.GetSelectionsForHeroClass(currentHeroClass);
```

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)`

**用途 / Purpose:** 为 selections for hero class temporarily 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPPerkSelection 实例
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.SetSelectionsForHeroClassTemporarily(currentHeroClass, perkChoices);
```

## 使用示例

```csharp
MPPerkSelection.FreeInstance();
```

## 参见

- [本区域目录](../)