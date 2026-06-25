---
title: "ItemTableauTextureProvider"
description: "ItemTableauTextureProvider 的自动生成类参考。"
---
# ItemTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders/ItemTableauTextureProvider.cs`

## 概述

`ItemTableauTextureProvider` 位于 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `Item` | `public ItemRosterElement Item { get; set; }` |
| `Ammo` | `public int Ammo { get; set; }` |
| `AverageUnitCost` | `public int AverageUnitCost { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |
| `RotateItemVertical` | `public float RotateItemVertical { get; set; }` |
| `RotateItemHorizontal` | `public float RotateItemHorizontal { get; set; }` |
| `InitialTiltRotation` | `public float InitialTiltRotation { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |
| `CurrentZoom` | `public float CurrentZoom { get; set; }` |

## 主要方法

### Clear
`public override void Clear(bool clearNextFrame)`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 ItemTableauTextureProvider 实例
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.Clear(false);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 target size 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemTableauTextureProvider 实例
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.SetTargetSize(0, 0);
```

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ItemTableauTextureProvider 实例
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.Tick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.Clear(false);
```

## 参见

- [本区域目录](../)