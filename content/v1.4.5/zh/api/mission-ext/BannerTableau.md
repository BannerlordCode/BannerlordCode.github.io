---
title: "BannerTableau"
description: "BannerTableau 的自动生成类参考。"
---
# BannerTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableau`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerTableau.cs`

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

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.OnTick(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 target size 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetTargetSize(0, 0);
```

### SetBannerCode
`public void SetBannerCode(string value)`

**用途 / Purpose:** 为 banner code 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetBannerCode("example");
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.OnFinalize();
```

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**用途 / Purpose:** 为 custom render scale 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetCustomRenderScale(0);
```

### SetIsNineGrid
`public void SetIsNineGrid(bool value)`

**用途 / Purpose:** 为 is nine grid 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetIsNineGrid(false);
```

### SetMeshIndexToUpdate
`public void SetMeshIndexToUpdate(int value)`

**用途 / Purpose:** 为 mesh index to update 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetMeshIndexToUpdate(0);
```

### SetUpdatePositionValueManual
`public void SetUpdatePositionValueManual(Vec2 value)`

**用途 / Purpose:** 为 update position value manual 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetUpdatePositionValueManual(value);
```

### SetUpdateSizeValueManual
`public void SetUpdateSizeValueManual(Vec2 value)`

**用途 / Purpose:** 为 update size value manual 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetUpdateSizeValueManual(value);
```

### SetUpdateRotationValueManual
`public void SetUpdateRotationValueManual((float, bool) value)`

**用途 / Purpose:** 为 update rotation value manual 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerTableau 实例
BannerTableau bannerTableau = ...;
bannerTableau.SetUpdateRotationValueManual((float, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerTableau bannerTableau = ...;
bannerTableau.OnTick(0);
```

## 参见

- [本区域目录](../)