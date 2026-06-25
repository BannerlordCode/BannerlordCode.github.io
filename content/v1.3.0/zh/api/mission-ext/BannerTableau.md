---
title: "BannerTableau"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerTableau`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableau`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs`

## 概述

`BannerTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## 主要方法

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 设置 `target size` 的值或状态。

### SetBannerCode
`public void SetBannerCode(string value)`

**用途 / Purpose:** 设置 `banner code` 的值或状态。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**用途 / Purpose:** 设置 `custom render scale` 的值或状态。

### SetIsNineGrid
`public void SetIsNineGrid(bool value)`

**用途 / Purpose:** 设置 `is nine grid` 的值或状态。

### SetMeshIndexToUpdate
`public void SetMeshIndexToUpdate(int value)`

**用途 / Purpose:** 设置 `mesh index to update` 的值或状态。

### SetUpdatePositionValueManual
`public void SetUpdatePositionValueManual(Vec2 value)`

**用途 / Purpose:** 设置 `update position value manual` 的值或状态。

### SetUpdateSizeValueManual
`public void SetUpdateSizeValueManual(Vec2 value)`

**用途 / Purpose:** 设置 `update size value manual` 的值或状态。

### SetUpdateRotationValueManual
`public void SetUpdateRotationValueManual(ValueTuple<float, bool> value)`

**用途 / Purpose:** 设置 `update rotation value manual` 的值或状态。

## 使用示例

```csharp
var value = new BannerTableau();
value.OnTick(0);
```

## 参见

- [完整类目录](../catalog)