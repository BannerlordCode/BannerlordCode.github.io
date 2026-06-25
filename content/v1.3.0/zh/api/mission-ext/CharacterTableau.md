---
title: "CharacterTableau"
description: "CharacterTableau 的自动生成类参考。"
---
# CharacterTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableau`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs`

## 概述

`CharacterTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |
| `IsRunningCustomAnimation` | `public bool IsRunningCustomAnimation { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |

## 主要方法

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.OnTick(0);
```

### GetCustomAnimationProgressRatio
`public float GetCustomAnimationProgressRatio()`

**用途 / Purpose:** 读取并返回当前对象中 custom animation progress ratio 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
var result = characterTableau.GetCustomAnimationProgressRatio();
```

### SetLeftHandWieldedEquipmentIndex
`public void SetLeftHandWieldedEquipmentIndex(int index)`

**用途 / Purpose:** 为 left hand wielded equipment index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetLeftHandWieldedEquipmentIndex(0);
```

### SetRightHandWieldedEquipmentIndex
`public void SetRightHandWieldedEquipmentIndex(int index)`

**用途 / Purpose:** 为 right hand wielded equipment index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetRightHandWieldedEquipmentIndex(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 target size 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetTargetSize(0, 0);
```

### SetCharStringID
`public void SetCharStringID(string charStringId)`

**用途 / Purpose:** 为 char string i d 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetCharStringID("example");
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.OnFinalize();
```

### SetBodyProperties
`public void SetBodyProperties(string bodyPropertiesCode)`

**用途 / Purpose:** 为 body properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetBodyProperties("example");
```

### SetStanceIndex
`public void SetStanceIndex(int index)`

**用途 / Purpose:** 为 stance index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetStanceIndex(0);
```

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**用途 / Purpose:** 为 custom render scale 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetCustomRenderScale(0);
```

### SetIsFemale
`public void SetIsFemale(bool isFemale)`

**用途 / Purpose:** 为 is female 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetIsFemale(false);
```

### SetIsBannerShownInBackground
`public void SetIsBannerShownInBackground(bool isBannerShownInBackground)`

**用途 / Purpose:** 为 is banner shown in background 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetIsBannerShownInBackground(false);
```

### SetRace
`public void SetRace(int race)`

**用途 / Purpose:** 为 race 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetRace(0);
```

### SetIdleAction
`public void SetIdleAction(string idleAction)`

**用途 / Purpose:** 为 idle action 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetIdleAction("example");
```

### SetCustomAnimation
`public void SetCustomAnimation(string animation)`

**用途 / Purpose:** 为 custom animation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetCustomAnimation("example");
```

### StartCustomAnimation
`public void StartCustomAnimation()`

**用途 / Purpose:** 启动custom animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.StartCustomAnimation();
```

### StopCustomAnimation
`public void StopCustomAnimation()`

**用途 / Purpose:** 停止custom animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.StopCustomAnimation();
```

### SetIdleFaceAnim
`public void SetIdleFaceAnim(string idleFaceAnim)`

**用途 / Purpose:** 为 idle face anim 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetIdleFaceAnim("example");
```

### SetEquipmentCode
`public void SetEquipmentCode(string equipmentCode)`

**用途 / Purpose:** 为 equipment code 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetEquipmentCode("example");
```

### SetIsEquipmentAnimActive
`public void SetIsEquipmentAnimActive(bool value)`

**用途 / Purpose:** 为 is equipment anim active 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetIsEquipmentAnimActive(false);
```

### SetMountCreationKey
`public void SetMountCreationKey(string value)`

**用途 / Purpose:** 为 mount creation key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetMountCreationKey("example");
```

### SetBannerCode
`public void SetBannerCode(string value)`

**用途 / Purpose:** 为 banner code 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetBannerCode("example");
```

### SetArmorColor1
`public void SetArmorColor1(uint clothColor1)`

**用途 / Purpose:** 为 armor color1 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetArmorColor1(0);
```

### SetArmorColor2
`public void SetArmorColor2(uint clothColor2)`

**用途 / Purpose:** 为 armor color2 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.SetArmorColor2(0);
```

### RotateCharacter
`public void RotateCharacter(bool value)`

**用途 / Purpose:** 调用 RotateCharacter 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.RotateCharacter(false);
```

### TriggerCharacterMountPlacesSwap
`public void TriggerCharacterMountPlacesSwap()`

**用途 / Purpose:** 触发character mount places swap对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.TriggerCharacterMountPlacesSwap();
```

### OnCharacterTableauMouseMove
`public void OnCharacterTableauMouseMove(int mouseMoveX)`

**用途 / Purpose:** 在 character tableau mouse move 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterTableau 实例
CharacterTableau characterTableau = ...;
characterTableau.OnCharacterTableauMouseMove(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterTableau characterTableau = ...;
characterTableau.OnTick(0);
```

## 参见

- [本区域目录](../)