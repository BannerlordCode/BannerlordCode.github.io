---
title: "ItemTableau"
description: "ItemTableau 的自动生成类参考。"
---
# ItemTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableau`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/ItemTableau.cs`

## 概述

`ItemTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## 主要方法

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.OnFinalize();
```

### SetStringId
`public void SetStringId(string stringId)`

**用途 / Purpose:** 为 「string id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetStringId("example");
```

### SetAmmo
`public void SetAmmo(int ammo)`

**用途 / Purpose:** 为 「ammo」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetAmmo(0);
```

### SetAverageUnitCost
`public void SetAverageUnitCost(int averageUnitCost)`

**用途 / Purpose:** 为 「average unit cost」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetAverageUnitCost(0);
```

### SetItemModifierId
`public void SetItemModifierId(string itemModifierId)`

**用途 / Purpose:** 为 「item modifier id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetItemModifierId("example");
```

### SetBannerCode
`public void SetBannerCode(string bannerCode)`

**用途 / Purpose:** 为 「banner code」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetBannerCode("example");
```

### Recalculate
`public void Recalculate()`

**用途 / Purpose:** 重新计算「recalculate」以反映最新状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.Recalculate();
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.Initialize();
```

### RotateItem
`public void RotateItem(bool value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.RotateItem(false);
```

### RotateItemVerticalWithAmount
`public void RotateItemVerticalWithAmount(float value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.RotateItemVerticalWithAmount(0);
```

### RotateItemHorizontalWithAmount
`public void RotateItemHorizontalWithAmount(float value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.RotateItemHorizontalWithAmount(0);
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.OnTick(0);
```

### SetInitialTiltRotation
`public void SetInitialTiltRotation(float amount)`

**用途 / Purpose:** 为 「initial tilt rotation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetInitialTiltRotation(0);
```

### SetInitialPanRotation
`public void SetInitialPanRotation(float amount)`

**用途 / Purpose:** 为 「initial pan rotation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetInitialPanRotation(0);
```

### Zoom
`public void Zoom(double value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.Zoom(0);
```

### SetItem
`public void SetItem(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 为 「item」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableau 实例
ItemTableau itemTableau = ...;
itemTableau.SetItem(itemRosterElement);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemTableau itemTableau = ...;
itemTableau.SetTargetSize(0, 0);
```

## 参见

- [本区域目录](../)