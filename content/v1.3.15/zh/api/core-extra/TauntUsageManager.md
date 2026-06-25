---
title: "TauntUsageManager"
description: "TauntUsageManager 的自动生成类参考。"
---
# TauntUsageManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageManager`
**Base:** 无
**File:** `TaleWorlds.Core/TauntUsageManager.cs`

## 概述

`TauntUsageManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `TauntUsageManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get; }` |
| `UsageFlag` | `public TauntUsageManager.TauntUsage.TauntUsageFlag UsageFlag { get; }` |

## 主要方法

### Initialize
`public static TauntUsageManager Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
TauntUsageManager.Initialize();
```

### Read
`public void Read()`

**用途 / Purpose:** **用途 / Purpose:** 读取当前对象的数据或状态。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
tauntUsageManager.Read();
```

### GetUsageSet
`public TauntUsageManager.TauntUsageSet GetUsageSet(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 usage set 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetUsageSet("example");
```

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetAction(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action disabled reason text 的结果。

```csharp
// 静态调用，不需要实例
TauntUsageManager.GetActionDisabledReasonText(disabledReasonFlag);
```

### GetIsActionNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is action not suitable reason 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetIsActionNotSuitableReason(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetTauntItemCount
`public int GetTauntItemCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 taunt item count 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetTauntItemCount();
```

### GetIndexOfAction
`public int GetIndexOfAction(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index of action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetIndexOfAction("example");
```

### GetDefaultAction
`public string GetDefaultAction(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetDefaultAction(0);
```

### Compare
`public int Compare(TauntUsageManager.TauntUsage.TauntUsageFlag x, TauntUsageManager.TauntUsage.TauntUsageFlag y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.Compare(x, y);
```

### AddUsage
`public void AddUsage(TauntUsageManager.TauntUsage usage)`

**用途 / Purpose:** **用途 / Purpose:** 将 usage 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
tauntUsageManager.AddUsage(usage);
```

### GetUsages
`public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 usages 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetUsages();
```

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 suitable 状态或条件。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.IsSuitable(false, false, mainHandWeapon, offhandWeapon);
```

### GetIsNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is not suitable reason 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetIsNotSuitableReason(false, false, mainHandWeapon, offhandWeapon);
```

### GetAction
`public string GetAction()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action 的结果。

```csharp
// 先通过子系统 API 拿到 TauntUsageManager 实例
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetAction();
```

## 使用示例

```csharp
var manager = TauntUsageManager.Current;
```

## 参见

- [本区域目录](../)