---
title: "TauntUsage"
description: "TauntUsage 的自动生成类参考。"
---
# TauntUsage

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsage`
**Base:** 无
**File:** `TaleWorlds.Core/TauntUsageManager.cs`

## 概述

`TauntUsage` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
TauntUsage.Initialize();
```

### Read
`public void Read()`

**用途 / Purpose:** 从当前实例读取数据或状态。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
tauntUsage.Read();
```

### GetUsageSet
`public TauntUsageManager.TauntUsageSet GetUsageSet(string id)`

**用途 / Purpose:** 读取并返回当前对象中 usage set 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetUsageSet("example");
```

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 读取并返回当前对象中 action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetAction(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)`

**用途 / Purpose:** 读取并返回当前对象中 action disabled reason text 的结果。

```csharp
// 静态调用，不需要实例
TauntUsage.GetActionDisabledReasonText(disabledReasonFlag);
```

### GetIsActionNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 读取并返回当前对象中 is action not suitable reason 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetIsActionNotSuitableReason(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetTauntItemCount
`public int GetTauntItemCount()`

**用途 / Purpose:** 读取并返回当前对象中 taunt item count 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetTauntItemCount();
```

### GetIndexOfAction
`public int GetIndexOfAction(string id)`

**用途 / Purpose:** 读取并返回当前对象中 index of action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetIndexOfAction("example");
```

### GetDefaultAction
`public string GetDefaultAction(int index)`

**用途 / Purpose:** 读取并返回当前对象中 default action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetDefaultAction(0);
```

### Compare
`public int Compare(TauntUsageManager.TauntUsage.TauntUsageFlag x, TauntUsageManager.TauntUsage.TauntUsageFlag y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.Compare(x, y);
```

### AddUsage
`public void AddUsage(TauntUsageManager.TauntUsage usage)`

**用途 / Purpose:** 将 usage 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
tauntUsage.AddUsage(usage);
```

### GetUsages
`public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()`

**用途 / Purpose:** 读取并返回当前对象中 usages 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetUsages();
```

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 判断当前对象是否处于 suitable 状态或条件。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.IsSuitable(false, false, mainHandWeapon, offhandWeapon);
```

### GetIsNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** 读取并返回当前对象中 is not suitable reason 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetIsNotSuitableReason(false, false, mainHandWeapon, offhandWeapon);
```

### GetAction
`public string GetAction()`

**用途 / Purpose:** 读取并返回当前对象中 action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsage 实例
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetAction();
```

## 使用示例

```csharp
TauntUsage.Initialize();
```

## 参见

- [本区域目录](../)