<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterTableau`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### GetCustomAnimationProgressRatio
`public float GetCustomAnimationProgressRatio()`

**用途 / Purpose:** 获取 `custom animation progress ratio` 的当前值。

### SetLeftHandWieldedEquipmentIndex
`public void SetLeftHandWieldedEquipmentIndex(int index)`

**用途 / Purpose:** 设置 `left hand wielded equipment index` 的值或状态。

### SetRightHandWieldedEquipmentIndex
`public void SetRightHandWieldedEquipmentIndex(int index)`

**用途 / Purpose:** 设置 `right hand wielded equipment index` 的值或状态。

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 设置 `target size` 的值或状态。

### SetCharStringID
`public void SetCharStringID(string charStringId)`

**用途 / Purpose:** 设置 `char string i d` 的值或状态。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetBodyProperties
`public void SetBodyProperties(string bodyPropertiesCode)`

**用途 / Purpose:** 设置 `body properties` 的值或状态。

### SetStanceIndex
`public void SetStanceIndex(int index)`

**用途 / Purpose:** 设置 `stance index` 的值或状态。

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**用途 / Purpose:** 设置 `custom render scale` 的值或状态。

### SetIsFemale
`public void SetIsFemale(bool isFemale)`

**用途 / Purpose:** 设置 `is female` 的值或状态。

### SetIsBannerShownInBackground
`public void SetIsBannerShownInBackground(bool isBannerShownInBackground)`

**用途 / Purpose:** 设置 `is banner shown in background` 的值或状态。

### SetRace
`public void SetRace(int race)`

**用途 / Purpose:** 设置 `race` 的值或状态。

### SetIdleAction
`public void SetIdleAction(string idleAction)`

**用途 / Purpose:** 设置 `idle action` 的值或状态。

### SetCustomAnimation
`public void SetCustomAnimation(string animation)`

**用途 / Purpose:** 设置 `custom animation` 的值或状态。

### StartCustomAnimation
`public void StartCustomAnimation()`

**用途 / Purpose:** 处理 `start custom animation` 相关逻辑。

### StopCustomAnimation
`public void StopCustomAnimation()`

**用途 / Purpose:** 处理 `stop custom animation` 相关逻辑。

### SetIdleFaceAnim
`public void SetIdleFaceAnim(string idleFaceAnim)`

**用途 / Purpose:** 设置 `idle face anim` 的值或状态。

### SetEquipmentCode
`public void SetEquipmentCode(string equipmentCode)`

**用途 / Purpose:** 设置 `equipment code` 的值或状态。

### SetIsEquipmentAnimActive
`public void SetIsEquipmentAnimActive(bool value)`

**用途 / Purpose:** 设置 `is equipment anim active` 的值或状态。

### SetMountCreationKey
`public void SetMountCreationKey(string value)`

**用途 / Purpose:** 设置 `mount creation key` 的值或状态。

### SetBannerCode
`public void SetBannerCode(string value)`

**用途 / Purpose:** 设置 `banner code` 的值或状态。

### SetArmorColor1
`public void SetArmorColor1(uint clothColor1)`

**用途 / Purpose:** 设置 `armor color1` 的值或状态。

### SetArmorColor2
`public void SetArmorColor2(uint clothColor2)`

**用途 / Purpose:** 设置 `armor color2` 的值或状态。

### RotateCharacter
`public void RotateCharacter(bool value)`

**用途 / Purpose:** 处理 `rotate character` 相关逻辑。

### TriggerCharacterMountPlacesSwap
`public void TriggerCharacterMountPlacesSwap()`

**用途 / Purpose:** 处理 `trigger character mount places swap` 相关逻辑。

### OnCharacterTableauMouseMove
`public void OnCharacterTableauMouseMove(int mouseMoveX)`

**用途 / Purpose:** 当 `character tableau mouse move` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new CharacterTableau();
value.OnTick(0);
```

## 参见

- [完整类目录](../catalog)