---
title: "ItemTableau"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemTableau`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableau`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ItemTableau.cs`

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

**用途 / Purpose:** 设置 `target size` 的值或状态。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetStringId
`public void SetStringId(string stringId)`

**用途 / Purpose:** 设置 `string id` 的值或状态。

### SetAmmo
`public void SetAmmo(int ammo)`

**用途 / Purpose:** 设置 `ammo` 的值或状态。

### SetAverageUnitCost
`public void SetAverageUnitCost(int averageUnitCost)`

**用途 / Purpose:** 设置 `average unit cost` 的值或状态。

### SetItemModifierId
`public void SetItemModifierId(string itemModifierId)`

**用途 / Purpose:** 设置 `item modifier id` 的值或状态。

### SetBannerCode
`public void SetBannerCode(string bannerCode)`

**用途 / Purpose:** 设置 `banner code` 的值或状态。

### Recalculate
`public void Recalculate()`

**用途 / Purpose:** 处理 `recalculate` 相关逻辑。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RotateItem
`public void RotateItem(bool value)`

**用途 / Purpose:** 处理 `rotate item` 相关逻辑。

### RotateItemVerticalWithAmount
`public void RotateItemVerticalWithAmount(float value)`

**用途 / Purpose:** 处理 `rotate item vertical with amount` 相关逻辑。

### RotateItemHorizontalWithAmount
`public void RotateItemHorizontalWithAmount(float value)`

**用途 / Purpose:** 处理 `rotate item horizontal with amount` 相关逻辑。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### SetInitialTiltRotation
`public void SetInitialTiltRotation(float amount)`

**用途 / Purpose:** 设置 `initial tilt rotation` 的值或状态。

### SetInitialPanRotation
`public void SetInitialPanRotation(float amount)`

**用途 / Purpose:** 设置 `initial pan rotation` 的值或状态。

### Zoom
`public void Zoom(double value)`

**用途 / Purpose:** 处理 `zoom` 相关逻辑。

### SetItem
`public void SetItem(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 设置 `item` 的值或状态。

## 使用示例

```csharp
var value = new ItemTableau();
value.SetTargetSize(0, 0);
```

## 参见

- [完整类目录](../catalog)