---
title: "CharacterTableauTextureProvider"
description: "CharacterTableauTextureProvider 的自动生成类参考。"
---
# CharacterTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders/CharacterTableauTextureProvider.cs`

## 概述

`CharacterTableauTextureProvider` 位于 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `BodyProperties` | `public string BodyProperties { get; set; }` |
| `StanceIndex` | `public int StanceIndex { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground { get; set; }` |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive { get; set; }` |
| `EquipmentCode` | `public string EquipmentCode { get; set; }` |
| `IdleAction` | `public string IdleAction { get; set; }` |
| `IdleFaceAnim` | `public string IdleFaceAnim { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |
| `MountCreationKey` | `public string MountCreationKey { get; set; }` |
| `ArmorColor1` | `public uint ArmorColor1 { get; set; }` |
| `ArmorColor2` | `public uint ArmorColor2 { get; set; }` |
| `CharStringId` | `public string CharStringId { get; set; }` |
| `TriggerCharacterMountPlacesSwap` | `public bool TriggerCharacterMountPlacesSwap { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex { get; set; }` |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |
| `CustomAnimation` | `public string CustomAnimation { get; set; }` |
| `IsTableauEnabled` | `public bool IsTableauEnabled { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |

## 主要方法

### Clear
`public override void Clear(bool clearNextFrame)`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 CharacterTableauTextureProvider 实例
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.Clear(false);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableauTextureProvider 实例
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.SetTargetSize(0, 0);
```

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableauTextureProvider 实例
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.Tick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.Clear(false);
```

## 参见

- [本区域目录](../)